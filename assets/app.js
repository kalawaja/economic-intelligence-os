/* Ağ Haritası — uygulama mantığı (bağımlılıksız, Cytoscape hariç) */
(function () {
  "use strict";

  var RENK = { pozitif: "#34C77B", negatif: "#E5484D", notr: "#F5A524", yok: "#5B6478" };
  var YON_AD = { pozitif: "Pozitif", negatif: "Negatif", notr: "Nötr" };
  var YON_CSS = { pozitif: "poz", negatif: "neg", notr: "ntr", yok: "gri" };
  var ILISKI_AD = { yatirim: "Yatırım", "satin-alma": "Satın alma", tedarik: "Tedarik", ppa: "PPA", ortaklik: "Ortaklık", rekabet: "Rekabet" };
  var ILISKI_RENK = { yatirim: "#FFB454", "satin-alma": "#C084FC", tedarik: "#6FB3FF", ppa: "#4DD6C1", ortaklik: "#7E8AA6", rekabet: "#E5484D" };
  var TIP_AD = { capex: "Capex", ma: "M&A", finansman: "Finansman", insider: "İçeriden alım" };
  var AYLAR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];

  // ---- durum ----
  var V = new Map();
  var E = [];
  var etkiMap = new Map();
  var serMap = new Map();
  var temaMap = new Map();
  var raporlar = [];
  var ataCache = new Map();
  var cy = null;
  var durum = { secili: null, odak: null, tema: null, gorunum: "ag" };

  // ---- yardımcılar ----
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function paraFmt(m) {
    if (m == null) return "";
    if (m >= 1000) {
      var v = m / 1000;
      return v.toLocaleString("tr-TR", { maximumFractionDigits: 1 }) + " milyar $";
    }
    return m.toLocaleString("tr-TR") + " milyon $";
  }
  function tarihFmt(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + AYLAR[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function sonEtki(id) {
    var l = etkiMap.get(id);
    return l && l.length ? l[l.length - 1] : null;
  }
  function renkAnahtari(id) {
    var e = sonEtki(id);
    return e ? e.yon : "yok";
  }
  function ataKume(id) {
    if (ataCache.has(id)) return ataCache.get(id);
    var s = new Set();
    var n = V.get(id);
    (n && n.sektor ? n.sektor : []).forEach(function (sid) {
      var k = sid;
      while (k && !s.has(k)) {
        s.add(k);
        var sn = V.get(k);
        k = sn ? sn.ust : null;
      }
    });
    ataCache.set(id, s);
    return s;
  }
  function kokId(sid) {
    var k = sid;
    while (V.get(k) && V.get(k).ust) k = V.get(k).ust;
    return k;
  }
  function sirketListesi() {
    var out = [];
    V.forEach(function (n) { if (n.tur === "sirket") out.push(n); });
    return out;
  }
  function sektorUyeleri(sektorId) {
    return sirketListesi().filter(function (n) { return ataKume(n.id).has(sektorId); });
  }
  function netDurum(sektorId) {
    var p = 0, m = 0, t = 0;
    sektorUyeleri(sektorId).forEach(function (n) {
      var e = sonEtki(n.id);
      if (!e) return;
      t++;
      if (e.yon === "pozitif") p++;
      else if (e.yon === "negatif") m++;
    });
    if (!t) return "yok";
    if (p > m) return "pozitif";
    if (m > p) return "negatif";
    return "notr";
  }
  function sektorYoluMetni(sektorId) {
    var parca = [], k = sektorId;
    while (k) {
      var n = V.get(k);
      if (!n) break;
      parca.unshift(n.ad);
      k = n.ust;
    }
    return parca.join(" › ");
  }

  // ---- veri birleştirme ----
  function birlestir(deltalar) {
    deltalar.forEach(function (d) {
      if (d.rapor && !raporlar.some(function (r) { return r.yol === d.rapor; })) {
        raporlar.push({ yol: d.rapor, tarih: d.tarih });
      }
      (d.dugumler || []).forEach(function (n) {
        var eski = V.get(n.id) || {};
        var yeni = Object.assign({}, eski);
        Object.keys(n).forEach(function (k) {
          if (n[k] !== undefined && n[k] !== null) yeni[k] = n[k];
        });
        if (n.kod === null && eski.kod === undefined) yeni.kod = null;
        V.set(n.id, yeni);
      });
      (d.iliskiler || []).forEach(function (i) {
        E.push(Object.assign({ tarih: d.tarih, rapor: d.rapor }, i));
      });
      (d.etkiler || []).forEach(function (t) {
        if (!etkiMap.has(t.sirket)) etkiMap.set(t.sirket, []);
        etkiMap.get(t.sirket).push(Object.assign({ tarih: d.tarih, rapor: d.rapor }, t));
        if (t.tema) {
          if (!temaMap.has(t.tema)) temaMap.set(t.tema, []);
          temaMap.get(t.tema).push({ sirket: t.sirket, yon: t.yon, gerekce: t.gerekce, tarih: d.tarih, rapor: d.rapor });
        }
      });
      (d.sermaye || []).forEach(function (s) {
        if (!serMap.has(s.hedef)) serMap.set(s.hedef, { toplam: 0, insider: false, olaylar: [] });
        var kayit = serMap.get(s.hedef);
        if (s.tutar_musd) kayit.toplam += s.tutar_musd;
        if (s.tip === "insider") kayit.insider = true;
        kayit.olaylar.push(Object.assign({ tarih: d.tarih, rapor: d.rapor }, s));
      });
    });
  }

  // ---- yerleşim: deterministik sektör panosu ----
  function boyut(id) {
    var s = serMap.get(id);
    var t = s ? s.toplam : 0;
    return 24 + (t > 0 ? Math.min(30, 7 * Math.log10(1 + t / 50)) : 0);
  }
  function panoYerlesimi() {
    var HUCRE_G = 96, HUCRE_Y = 102, KUTU_IC = 48, KUTU_UST = 60;
    var BOSLUK_X = 64, BOSLUK_Y = 78, SATIR_MAKS = 2000, BANT_ESIK = 10;

    var uyeMap = new Map(); // birincil sektor -> [şirket]
    sirketListesi().forEach(function (n) {
      var p = n.sektor && n.sektor.length ? n.sektor[0] : "sektor:diger";
      if (!uyeMap.has(p)) uyeMap.set(p, []);
      uyeMap.get(p).push(n);
    });

    var kokSayac = new Map();
    uyeMap.forEach(function (liste, sid) {
      var k = kokId(sid);
      kokSayac.set(k, (kokSayac.get(k) || 0) + liste.length);
    });
    var kokSira = [...kokSayac.keys()].sort(function (a, b) {
      return kokSayac.get(b) - kokSayac.get(a) ||
        (V.get(a) ? V.get(a).ad : a).localeCompare(V.get(b) ? V.get(b).ad : b, "tr");
    });
    var kokIdx = new Map();
    kokSira.forEach(function (k, i) { kokIdx.set(k, i); });

    var kutular = [...uyeMap.keys()].map(function (sid) {
      var uyeler = uyeMap.get(sid).slice().sort(function (a, b) {
        return boyut(b.id) - boyut(a.id) || a.ad.localeCompare(b.ad, "tr");
      });
      var n = uyeler.length;
      var sutun = n <= 2 ? n : Math.ceil(Math.sqrt(n));
      var satir = Math.ceil(n / sutun);
      var sn = V.get(sid) || {};
      var kokBu = kokId(sid);
      return {
        sid: sid, uyeler: uyeler, sutun: sutun, satir: satir,
        g: sutun * HUCRE_G + KUTU_IC, y: satir * HUCRE_Y + KUTU_UST,
        kok: kokIdx.get(kokBu), kokUye: kokSayac.get(kokBu) || 0,
        sira: sn.sira || 99, ad: sn.ad || sid
      };
    }).sort(function (a, b) {
      return a.kok - b.kok || a.sira - b.sira || a.ad.localeCompare(b.ad, "tr");
    });

    var poz = new Map();
    var x = 0, y = 0, satirYuk = 0, aktifKok = -1, aktifKokUye = 0;
    kutular.forEach(function (k) {
      var bantDegisimi = k.kok !== aktifKok &&
        (k.kokUye >= BANT_ESIK || aktifKokUye >= BANT_ESIK);
      if (bantDegisimi || x + k.g > SATIR_MAKS) {
        if (x > 0) { y += satirYuk + BOSLUK_Y; }
        x = 0; satirYuk = 0;
      }
      aktifKok = k.kok; aktifKokUye = k.kokUye;
      k.uyeler.forEach(function (u, i) {
        var c = i % k.sutun, r = Math.floor(i / k.sutun);
        poz.set(u.id, {
          x: x + KUTU_IC / 2 + c * HUCRE_G + HUCRE_G / 2,
          y: y + KUTU_UST - 8 + r * HUCRE_Y + HUCRE_Y / 2
        });
      });
      x += k.g + BOSLUK_X;
      satirYuk = Math.max(satirYuk, k.y);
    });
    return poz;
  }

  // ---- cytoscape ----
  function elemanlar() {
    var eller = [];
    var poz = panoYerlesimi();
    var ebeveynler = new Set();
    sirketListesi().forEach(function (n) {
      if (n.sektor && n.sektor.length) ebeveynler.add(n.sektor[0]);
    });
    ebeveynler.forEach(function (sid) {
      var s = V.get(sid);
      eller.push({ data: { id: sid, tur: "sektor", label: s ? s.ad : sid, sinir: RENK[netDurum(sid)] } });
    });
    sirketListesi().forEach(function (n) {
      var etiket = n.kod || n.ad;
      if (!n.kod && etiket.length > 16) etiket = etiket.slice(0, 15) + "…";
      var ser = serMap.get(n.id);
      eller.push({
        data: {
          id: n.id,
          parent: n.sektor && n.sektor.length ? n.sektor[0] : undefined,
          tur: "sirket",
          label: etiket,
          renk: RENK[renkAnahtari(n.id)],
          size: boyut(n.id),
          insider: ser && ser.insider ? 1 : 0,
          ozel: n.ozel ? 1 : 0
        },
        position: poz.get(n.id) || { x: 0, y: 0 }
      });
    });
    E.forEach(function (i, idx) {
      var buyukluk = i.tutar_musd || i.mw || 0;
      eller.push({
        data: {
          id: "e" + idx, source: i.kaynak, target: i.hedef,
          tur: i.tur, eidx: idx,
          w: 1.6 + (buyukluk > 1 ? Math.min(3.6, Math.log10(buyukluk) / 1.2) : 0)
        }
      });
    });
    return eller;
  }
  function stiller() {
    var s = [
      { selector: 'node[tur="sirket"]', style: {
        "background-color": "data(renk)", width: "data(size)", height: "data(size)",
        label: "data(label)", "font-family": "Fragment Mono, monospace", "font-size": 10,
        "min-zoomed-font-size": 8,
        color: "#C7D0E0", "text-valign": "bottom", "text-halign": "center", "text-margin-y": 5,
        "border-width": 1.5, "border-color": "#0D1220"
      } },
      { selector: 'node[tur="sirket"][ozel = 1]', style: { shape: "round-rectangle" } },
      { selector: 'node[tur="sirket"][insider = 1]', style: { "border-width": 4, "border-color": "#FFD166" } },
      { selector: ":parent", style: {
        "background-color": "#141B2D", "background-opacity": 0.55,
        "border-width": 1.4, "border-color": "data(sinir)", shape: "round-rectangle",
        label: "data(label)", "font-family": "Archivo, sans-serif", "font-size": 15,
        color: "#9AA7C0", "text-valign": "top", "text-halign": "center", padding: 14
      } },
      { selector: "edge", style: {
        "curve-style": "bezier", width: "data(w)", opacity: 0.85, "line-color": "#7E8AA6",
        "z-index": 9
      } }
    ];
    Object.keys(ILISKI_RENK).forEach(function (tur) {
      var st = { "line-color": ILISKI_RENK[tur] };
      if (tur === "yatirim" || tur === "satin-alma" || tur === "tedarik" || tur === "ppa") {
        st["target-arrow-shape"] = "triangle";
        st["target-arrow-color"] = ILISKI_RENK[tur];
        st["arrow-scale"] = 0.8;
      }
      if (tur === "tedarik") st["line-style"] = "dashed";
      if (tur === "ppa") st["line-style"] = "dotted";
      if (tur === "rekabet") { st["line-style"] = "dashed"; st.opacity = 0.55; }
      s.push({ selector: 'edge[tur="' + tur + '"]', style: st });
    });
    s.push({ selector: ".secili", style: { "overlay-color": "#6FB3FF", "overlay-opacity": 0.25, "overlay-padding": 7 } });
    s.push({ selector: ".vurgulu", style: { "overlay-color": "#F5A524", "overlay-opacity": 0.3, "overlay-padding": 8 } });
    s.push({ selector: ".soluk", style: { opacity: 0.1 } });
    return s;
  }

  // ---- görünürlük ----
  function yonAcikMi(anahtar) {
    var k = document.querySelector('#yon-filtre input[data-yon="' + anahtar + '"]');
    return !k || k.checked;
  }
  function tumIliskilerAcikMi() {
    var k = document.getElementById("tum-iliskiler");
    return k && k.checked;
  }
  function sirketGorunur(id) {
    if (durum.odak && !ataKume(id).has(durum.odak)) return false;
    return yonAcikMi(renkAnahtari(id));
  }
  function filtreUygula() {
    if (!cy) { isiCiz(); return; }
    var gorunur = new Set();
    var hepsi = tumIliskilerAcikMi();
    cy.batch(function () {
      sirketListesi().forEach(function (n) {
        var g = sirketGorunur(n.id);
        if (g) gorunur.add(n.id);
        cy.getElementById(n.id).style("display", g ? "element" : "none");
      });
      var ebeveynGorunur = {};
      sirketListesi().forEach(function (n) {
        var p = n.sektor && n.sektor[0];
        if (p && gorunur.has(n.id)) ebeveynGorunur[p] = true;
      });
      cy.nodes(":parent").forEach(function (pn) {
        pn.style("display", ebeveynGorunur[pn.id()] ? "element" : "none");
      });
      E.forEach(function (i, idx) {
        var g = gorunur.has(i.kaynak) && gorunur.has(i.hedef) &&
          (hepsi || durum.tema !== null ||
            (durum.secili && (i.kaynak === durum.secili || i.hedef === durum.secili)));
        cy.getElementById("e" + idx).style("display", g ? "element" : "none");
      });
    });
    isiCiz();
  }
  function gorunurKil(id) {
    if (durum.odak && !ataKume(id).has(durum.odak)) odagiTemizle(true);
    var anahtar = renkAnahtari(id);
    var k = document.querySelector('#yon-filtre input[data-yon="' + anahtar + '"]');
    if (k && !k.checked) k.checked = true;
  }

  // ---- vurgulama / seçim ----
  function vurgulariTemizle() {
    if (cy) cy.elements().removeClass("soluk vurgulu secili");
    durum.tema = null;
    document.querySelectorAll("#temalar button").forEach(function (b) { b.classList.remove("aktif"); });
  }
  function temizle() {
    vurgulariTemizle();
    durum.secili = null;
    filtreUygula();
    panelGizle();
  }
  function temaVurgula(temaId) {
    vurgulariTemizle();
    durum.secili = null;
    durum.tema = temaId;
    filtreUygula();
    var kayitlar = temaMap.get(temaId) || [];
    var idler = new Set(kayitlar.map(function (k) { return k.sirket; }));
    if (cy) {
      cy.elements().addClass("soluk");
      idler.forEach(function (id) {
        var n = cy.getElementById(id);
        n.removeClass("soluk").addClass("vurgulu");
        if (n.parent) { var p = n.parent(); if (p) p.removeClass("soluk"); }
      });
    }
    var btn = document.querySelector('#temalar button[data-id="' + temaId + '"]');
    if (btn) btn.classList.add("aktif");
    panelTema(temaId);
  }
  function secSirket(id, kaydir) {
    vurgulariTemizle();
    durum.secili = id;
    gorunurKil(id);
    filtreUygula();
    if (cy) {
      var n = cy.getElementById(id);
      n.addClass("secili");
      if (kaydir !== false && durum.gorunum === "ag") cy.animate({ center: { eles: n } }, { duration: 280 });
    }
    panelSirket(id);
  }

  // ---- panel ----
  function yerlesimDegisti() {
    var raf = window.requestAnimationFrame || function (f) { setTimeout(f, 0); };
    raf(function () {
      if (cy) cy.resize();
      isiCiz();
    });
  }
  function panelGoster() {
    document.getElementById("panel").classList.remove("gizli");
    var y = document.querySelector(".yerlesim");
    if (y && !y.classList.contains("panel-acik")) { y.classList.add("panel-acik"); yerlesimDegisti(); }
  }
  function panelGizle() {
    document.getElementById("panel").classList.add("gizli");
    var y = document.querySelector(".yerlesim");
    if (y && y.classList.contains("panel-acik")) { y.classList.remove("panel-acik"); yerlesimDegisti(); }
  }
  function panelBaslat(baslikMetni, kodMetni) {
    var p = document.getElementById("panel");
    p.innerHTML = "";
    var kapat = el("button", "panel-kapat", "✕");
    kapat.addEventListener("click", temizle);
    p.appendChild(kapat);
    var h = el("h2", "panel-baslik", baslikMetni);
    if (kodMetni) h.appendChild(el("span", "panel-kod", kodMetni));
    p.appendChild(h);
    panelGoster();
    p.scrollTop = 0;
    return p;
  }
  function kaynakSatiri(kayit) {
    var s = el("div", "kaynak-satir");
    var a = el("a", null, "↗ " + tarihFmt(kayit.tarih) + " raporu");
    a.href = kayit.rapor || "#";
    a.target = "_blank";
    a.rel = "noopener";
    s.appendChild(a);
    return s;
  }
  function sirketDugmesi(id) {
    var n = V.get(id);
    var b = el("button", "iliski-hedef", n ? n.ad : id);
    b.addEventListener("click", function () { secSirket(id); });
    return b;
  }
  function panelSirket(id) {
    var n = V.get(id);
    if (!n) return;
    var p = panelBaslat(n.ad, n.kod || (n.ozel ? "halka açık değil" : null));

    (n.sektor || []).forEach(function (sid) {
      var yol = el("div", "panel-yol");
      var b = el("button", null, sektorYoluMetni(sid));
      b.addEventListener("click", function () { odakla(sid); });
      yol.appendChild(b);
      p.appendChild(yol);
    });

    var etkiler = (etkiMap.get(id) || []).slice().reverse();
    p.appendChild(el("h3", null, "Etki geçmişi — neden bu renk?"));
    if (!etkiler.length) {
      p.appendChild(el("p", "panel-not", "Raporlarda henüz yön değerlendirmesi yok (sinyalsiz/gri)."));
    }
    etkiler.forEach(function (t) {
      var k = el("div", "etki-kart");
      var ust = el("div", "etki-ust");
      ust.appendChild(el("i", "nokta " + YON_CSS[t.yon]));
      ust.appendChild(el("span", "etki-yon " + YON_CSS[t.yon], YON_AD[t.yon]));
      ust.appendChild(el("span", "etki-tarih", tarihFmt(t.tarih)));
      if (t.tema) {
        var tn = V.get(t.tema);
        var tb = el("button", "tema-cip", tn ? tn.ad : t.tema);
        tb.addEventListener("click", function () { temaVurgula(t.tema); });
        ust.appendChild(tb);
      }
      k.appendChild(ust);
      k.appendChild(el("div", null, t.gerekce));
      k.appendChild(kaynakSatiri(t));
      p.appendChild(k);
    });

    var baglar = [];
    E.forEach(function (i, idx) {
      if (i.kaynak === id || i.hedef === id) baglar.push({ i: i, idx: idx });
    });
    if (baglar.length) {
      p.appendChild(el("h3", null, "İlişkiler"));
      baglar.sort(function (a, b) { return a.i.tarih < b.i.tarih ? 1 : -1; });
      baglar.forEach(function (b) {
        var i = b.i;
        var kart = el("div", "iliski-kart");
        var ust = el("div", "iliski-ust");
        var tchip = el("span", "iliski-tur", ILISKI_AD[i.tur] || i.tur);
        tchip.style.color = ILISKI_RENK[i.tur] || "#8A96AD";
        tchip.style.borderColor = ILISKI_RENK[i.tur] || "#24304A";
        ust.appendChild(tchip);
        var karsi = i.kaynak === id ? i.hedef : i.kaynak;
        ust.appendChild(el("span", null, i.kaynak === id ? "→" : "←"));
        ust.appendChild(sirketDugmesi(karsi));
        var tutarMetni = i.tutar_musd ? paraFmt(i.tutar_musd) : (i.mw ? i.mw.toLocaleString("tr-TR") + " MW" : "");
        if (tutarMetni) ust.appendChild(el("span", "iliski-tutar", tutarMetni));
        kart.appendChild(ust);
        if (i.aciklama) kart.appendChild(el("div", "panel-not", i.aciklama));
        kart.appendChild(kaynakSatiri(i));
        p.appendChild(kart);
      });
    }

    var ser = serMap.get(id);
    if (ser && ser.olaylar.length) {
      p.appendChild(el("h3", null, "Sermaye akışı" + (ser.toplam ? " — toplam " + paraFmt(ser.toplam) : "")));
      ser.olaylar.slice().reverse().forEach(function (o) {
        var kart = el("div", "sermaye-kart");
        if (o.tip === "insider") kart.style.borderColor = "#FFD166";
        var ust = el("div", "iliski-ust");
        ust.appendChild(el("span", "iliski-tur", TIP_AD[o.tip] || o.tip));
        if (o.tutar_musd) ust.appendChild(el("span", "iliski-tutar", paraFmt(o.tutar_musd)));
        kart.appendChild(ust);
        if (o.aciklama) kart.appendChild(el("div", "panel-not", o.aciklama));
        kart.appendChild(kaynakSatiri(o));
        p.appendChild(kart);
      });
    }
  }
  function panelSektor(id) {
    var n = V.get(id);
    if (!n) return;
    var p = panelBaslat(n.ad, "sektör");
    if (n.ust) p.appendChild(el("div", "panel-yol", sektorYoluMetni(n.ust)));

    var uyeler = sektorUyeleri(id);
    var net = netDurum(id);
    var ozetSatir = el("div", "etki-ust");
    ozetSatir.appendChild(el("i", "nokta " + YON_CSS[net]));
    ozetSatir.appendChild(el("span", "panel-not", uyeler.length + " şirket · son sinyallerin net görünümü: " + (net === "yok" ? "sinyalsiz" : YON_AD[net])));
    p.appendChild(ozetSatir);

    var odakBtn = el("button", "iliski-hedef", "▶ Haritayı bu sektöre odakla");
    odakBtn.style.margin = "10px 0";
    odakBtn.addEventListener("click", function () { odakla(id); });
    p.appendChild(odakBtn);

    var altlar = [];
    V.forEach(function (s) { if (s.tur === "sektor" && s.ust === id) altlar.push(s); });
    if (altlar.length) {
      p.appendChild(el("h3", null, "Alt sektörler"));
      var ul1 = el("ul", "uye-liste");
      altlar.sort(function (a, b) { return (a.sira || 99) - (b.sira || 99); }).forEach(function (s) {
        var b = el("button");
        b.appendChild(el("i", "nokta " + YON_CSS[netDurum(s.id)]));
        b.appendChild(el("span", null, (s.sira ? s.sira + ". " : "") + s.ad));
        b.appendChild(el("span", "uye-kod", sektorUyeleri(s.id).length + ""));
        b.addEventListener("click", function () { panelSektor(s.id); });
        ul1.appendChild(el("li")).appendChild(b);
      });
      p.appendChild(ul1);
    }

    p.appendChild(el("h3", null, "Şirketler"));
    var ul = el("ul", "uye-liste");
    uyeler.sort(function (a, b) { return a.ad.localeCompare(b.ad, "tr"); }).forEach(function (u) {
      var b = el("button");
      b.appendChild(el("i", "nokta " + YON_CSS[renkAnahtari(u.id)]));
      b.appendChild(el("span", null, u.ad));
      if (u.kod) b.appendChild(el("span", "uye-kod", u.kod));
      b.addEventListener("click", function () { secSirket(u.id); });
      ul.appendChild(el("li")).appendChild(b);
    });
    p.appendChild(ul);
  }
  function panelIliski(idx) {
    var i = E[idx];
    if (!i) return;
    var p = panelBaslat(ILISKI_AD[i.tur] || i.tur, tarihFmt(i.tarih));
    var ust = el("div", "iliski-ust");
    ust.appendChild(sirketDugmesi(i.kaynak));
    ust.appendChild(el("span", null, "→"));
    ust.appendChild(sirketDugmesi(i.hedef));
    p.appendChild(ust);
    var tutarMetni = i.tutar_musd ? paraFmt(i.tutar_musd) : (i.mw ? i.mw.toLocaleString("tr-TR") + " MW" : null);
    if (tutarMetni) p.appendChild(el("div", "iliski-tutar", tutarMetni));
    if (i.aciklama) p.appendChild(el("p", null, i.aciklama));
    p.appendChild(kaynakSatiri(i));
  }
  function panelTema(temaId) {
    var t = V.get(temaId);
    var kayitlar = (temaMap.get(temaId) || []).slice().reverse();
    var p = panelBaslat(t ? t.ad : temaId, "konu");
    p.appendChild(el("p", "panel-not", "Bu konu " + new Set(kayitlar.map(function (k) { return k.sirket; })).size + " şirkete dokunuyor; harita üzerinde vurgulandı."));
    var sil = el("button", "iliski-hedef", "✕ Vurgulamayı temizle");
    sil.style.margin = "4px 0 10px";
    sil.addEventListener("click", temizle);
    p.appendChild(sil);
    kayitlar.forEach(function (k) {
      var kart = el("div", "etki-kart");
      var ust = el("div", "etki-ust");
      ust.appendChild(el("i", "nokta " + YON_CSS[k.yon]));
      ust.appendChild(sirketDugmesi(k.sirket));
      ust.appendChild(el("span", "etki-tarih", tarihFmt(k.tarih)));
      kart.appendChild(ust);
      kart.appendChild(el("div", "panel-not", k.gerekce));
      p.appendChild(kart);
    });
  }

  // ---- odak / kırıntı ----
  function odakla(sektorId) {
    durum.odak = sektorId;
    document.getElementById("krtl").classList.remove("gizli");
    document.getElementById("krtl-ad").textContent = sektorYoluMetni(sektorId);
    filtreUygula();
    if (cy) cy.fit(cy.elements(":visible"), 40);
    panelSektor(sektorId);
  }
  function odagiTemizle(sessiz) {
    durum.odak = null;
    document.getElementById("krtl").classList.add("gizli");
    if (!sessiz) { filtreUygula(); if (cy) cy.fit(cy.elements(":visible"), 40); }
  }

  // ---- ısı haritası (finviz tarzı ağaç haritası) ----
  function isiDeger(id) {
    var ser = serMap.get(id);
    return Math.sqrt(1200 + (ser ? ser.toplam : 0));
  }
  function karele(ogeler, x, y, w, h, cb) {
    var toplam = 0;
    ogeler.forEach(function (o) { toplam += o.deger; });
    if (toplam <= 0 || w <= 2 || h <= 2) return;
    var olcek = (w * h) / toplam;
    var sirali = ogeler.slice().sort(function (a, b) { return b.deger - a.deger; });
    var kx = x, ky = y, kw = w, kh = h;
    function enKotu(dizi, kenar) {
      var s = 0, mx = 0, mn = Infinity;
      dizi.forEach(function (r) { s += r.alan; mx = Math.max(mx, r.alan); mn = Math.min(mn, r.alan); });
      var s2 = s * s, k2 = kenar * kenar;
      return Math.max((k2 * mx) / s2, s2 / (k2 * mn));
    }
    function yerles(dizi) {
      var s = 0;
      dizi.forEach(function (r) { s += r.alan; });
      if (kw >= kh) {
        var wSut = s / kh, yy = ky;
        dizi.forEach(function (r) { var hh = r.alan / wSut; cb(r.oge, { x: kx, y: yy, w: wSut, h: hh }); yy += hh; });
        kx += wSut; kw -= wSut;
      } else {
        var hSat = s / kw, xx = kx;
        dizi.forEach(function (r) { var ww = r.alan / hSat; cb(r.oge, { x: xx, y: ky, w: ww, h: hSat }); xx += ww; });
        ky += hSat; kh -= hSat;
      }
    }
    var sira = [];
    sirali.forEach(function (o) {
      var alan = o.deger * olcek;
      var kenar = Math.min(kw, kh);
      if (sira.length && enKotu(sira.concat([{ alan: alan }]), kenar) > enKotu(sira, kenar)) {
        yerles(sira); sira = [];
      }
      sira.push({ oge: o, alan: alan });
    });
    if (sira.length) yerles(sira);
  }
  function isiCiz() {
    var kap = document.getElementById("isi");
    if (!kap || durum.gorunum !== "isi") return;
    kap.innerHTML = "";
    var W = kap.clientWidth || 1200, H = kap.clientHeight || 760;

    var temaSirketleri = null;
    if (durum.tema) {
      temaSirketleri = new Set((temaMap.get(durum.tema) || []).map(function (k) { return k.sirket; }));
    }
    var grupMap = new Map();
    sirketListesi().forEach(function (n) {
      if (!sirketGorunur(n.id)) return;
      var sid = n.sektor && n.sektor.length ? n.sektor[0] : "sektor:diger";
      if (!grupMap.has(sid)) grupMap.set(sid, []);
      grupMap.get(sid).push(n);
    });
    var gruplar = [...grupMap.keys()].map(function (sid) {
      var uyeler = grupMap.get(sid);
      var d = 0;
      uyeler.forEach(function (u) { d += isiDeger(u.id); });
      return { sid: sid, uyeler: uyeler, deger: d };
    });

    karele(gruplar, 0, 0, W, H, function (g, r) {
      var kutu = el("div", "isi-grup");
      kutu.style.left = (r.x + 1) + "px";
      kutu.style.top = (r.y + 1) + "px";
      kutu.style.width = Math.max(1, r.w - 2) + "px";
      kutu.style.height = Math.max(1, r.h - 2) + "px";
      var sn = V.get(g.sid);
      var basY = 0;
      if (r.h >= 42 && r.w >= 46) {
        basY = 18;
        var bas = el("div", "isi-grup-baslik", sn ? sn.ad : g.sid);
        bas.title = sn ? sn.ad : g.sid;
        bas.addEventListener("click", function () { panelSektor(g.sid); });
        kutu.appendChild(bas);
      }
      kap.appendChild(kutu);
      var icOgeler = g.uyeler.map(function (u) { return { id: u.id, ad: u.ad, kod: u.kod, deger: isiDeger(u.id) }; });
      karele(icOgeler, 0, basY, Math.max(1, r.w - 2), Math.max(1, r.h - 2 - basY), function (u, t) {
        var d = el("div", "isi-kutu " + YON_CSS[renkAnahtari(u.id)]);
        d.style.left = (t.x + 1) + "px";
        d.style.top = (t.y + 1) + "px";
        var tw = Math.max(1, t.w - 2), th = Math.max(1, t.h - 2);
        d.style.width = tw + "px";
        d.style.height = th + "px";
        var ser = serMap.get(u.id);
        if (ser && ser.insider) d.classList.add("insider");
        if (durum.secili === u.id) d.classList.add("secili-kutu");
        if (temaSirketleri) d.classList.add(temaSirketleri.has(u.id) ? "isi-vurgu" : "isi-soluk");
        var etiket = u.kod || u.ad;
        d.title = u.ad + (ser && ser.toplam ? " · " + paraFmt(ser.toplam) : "");
        if (tw >= 40 && th >= 15) {
          var ks = el("span", "isi-kod", etiket.length > 12 ? etiket.slice(0, 11) + "…" : etiket);
          if (tw >= 120 && th >= 56) ks.style.fontSize = "13px";
          d.appendChild(ks);
        }
        if (ser && ser.toplam && tw >= 88 && th >= 40) {
          d.appendChild(el("span", "isi-para", paraFmt(ser.toplam)));
        }
        d.addEventListener("click", function () { secSirket(u.id); });
        kutu.appendChild(d);
      });
    });
  }
  function gorunumDegistir(mod) {
    if (durum.gorunum === mod) return;
    durum.gorunum = mod;
    var isiMi = mod === "isi";
    document.getElementById("cy").classList.toggle("gizli", isiMi);
    document.getElementById("isi").classList.toggle("gizli", !isiMi);
    document.querySelector(".orta").classList.toggle("mod-isi", isiMi);
    document.getElementById("gv-ag").classList.toggle("aktif", !isiMi);
    document.getElementById("gv-isi").classList.toggle("aktif", isiMi);
    if (isiMi) isiCiz();
    else if (cy) cy.resize();
  }

  // ---- sol sütun ----
  function agacKur() {
    var kok = document.getElementById("agac");
    kok.innerHTML = "";
    var cocuklar = new Map();
    var kokler = [];
    V.forEach(function (n) {
      if (n.tur !== "sektor") return;
      if (n.ust) {
        if (!cocuklar.has(n.ust)) cocuklar.set(n.ust, []);
        cocuklar.get(n.ust).push(n);
      } else kokler.push(n);
    });
    function sirala(l) { return l.sort(function (a, b) { return (a.sira || 99) - (b.sira || 99) || a.ad.localeCompare(b.ad, "tr"); }); }
    function ciz(n, kapsayici) {
      var satir = el("div", "agac-satir");
      var altList = cocuklar.get(n.id);
      var ok = el("button", "agac-ok" + (altList ? "" : " bos"), "▸");
      var altKapsayici = null;
      if (altList) {
        altKapsayici = el("div", "agac-cocuk gizli");
        ok.addEventListener("click", function () {
          var acik = !altKapsayici.classList.contains("gizli");
          altKapsayici.classList.toggle("gizli", acik);
          ok.textContent = acik ? "▸" : "▾";
        });
      }
      satir.appendChild(ok);
      var ad = el("button", "agac-ad");
      ad.appendChild(el("i", "nokta " + YON_CSS[netDurum(n.id)]));
      ad.appendChild(el("span", null, n.ad));
      ad.appendChild(el("span", "agac-sayi", sektorUyeleri(n.id).length + ""));
      ad.addEventListener("click", function () { odakla(n.id); });
      satir.appendChild(ad);
      kapsayici.appendChild(satir);
      if (altKapsayici) {
        kapsayici.appendChild(altKapsayici);
        sirala(altList).forEach(function (c) { ciz(c, altKapsayici); });
      }
    }
    sirala(kokler).forEach(function (n) { ciz(n, kok); });
  }
  function temalariKur() {
    var ul = document.getElementById("temalar");
    ul.innerHTML = "";
    var liste = [];
    V.forEach(function (n) { if (n.tur === "tema" && temaMap.has(n.id)) liste.push(n); });
    liste.sort(function (a, b) { return (temaMap.get(b.id) || []).length - (temaMap.get(a.id) || []).length; });
    liste.forEach(function (t) {
      var b = el("button", null, t.ad + " (" + new Set((temaMap.get(t.id) || []).map(function (k) { return k.sirket; })).size + ")");
      b.dataset.id = t.id;
      b.addEventListener("click", function () {
        if (durum.tema === t.id) temizle();
        else temaVurgula(t.id);
      });
      ul.appendChild(el("li")).appendChild(b);
    });
  }
  function raporlariKur() {
    var ul = document.getElementById("raporlar");
    ul.innerHTML = "";
    raporlar.slice().reverse().forEach(function (r) {
      var a = el("a", null, tarihFmt(r.tarih) + (r.yol.indexOf("moduller") > -1 ? " · modül" : " · günlük"));
      a.href = r.yol;
      a.target = "_blank";
      a.rel = "noopener";
      ul.appendChild(el("li")).appendChild(a);
    });
  }

  // ---- arama ----
  function aramaKur() {
    var girdi = document.getElementById("arama");
    var kutu = document.getElementById("arama-sonuc");
    var dizin = [];
    V.forEach(function (n) {
      if (n.tur === "sirket") dizin.push({ id: n.id, ad: n.ad, kod: n.kod, tip: "Şirket", tur: "sirket" });
      else if (n.tur === "tema") { if (temaMap.has(n.id)) dizin.push({ id: n.id, ad: n.ad, tip: "Konu", tur: "tema" }); }
      else if (n.tur === "sektor") dizin.push({ id: n.id, ad: n.ad, tip: "Sektör", tur: "sektor" });
    });
    function kapat() { kutu.classList.add("gizli"); kutu.innerHTML = ""; }
    function sec(kayit) {
      kapat();
      girdi.value = "";
      if (kayit.tur === "sirket") secSirket(kayit.id);
      else if (kayit.tur === "tema") temaVurgula(kayit.id);
      else odakla(kayit.id);
    }
    girdi.addEventListener("input", function () {
      var q = girdi.value.trim().toLocaleLowerCase("tr");
      if (q.length < 2) { kapat(); return; }
      var sonuc = dizin.filter(function (k) {
        return k.ad.toLocaleLowerCase("tr").indexOf(q) > -1 || (k.kod && k.kod.toLowerCase().indexOf(q) > -1);
      }).slice(0, 8);
      kutu.innerHTML = "";
      if (!sonuc.length) { kapat(); return; }
      sonuc.forEach(function (k) {
        var b = el("button");
        b.appendChild(el("span", "tur-etiket", k.tip));
        b.appendChild(el("span", null, k.ad + (k.kod ? " · " + k.kod : "")));
        b.addEventListener("mousedown", function (ev) { ev.preventDefault(); sec(k); });
        kutu.appendChild(b);
      });
      kutu.classList.remove("gizli");
    });
    girdi.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { kapat(); girdi.blur(); }
      if (ev.key === "Enter") {
        var ilk = kutu.querySelector("button");
        if (ilk) ilk.dispatchEvent(new Event("mousedown"));
      }
    });
    girdi.addEventListener("blur", function () { setTimeout(kapat, 180); });
  }

  // ---- başlat ----
  function baslat() {
    birlestir(window.DELTAS || []);

    var etkiToplam = 0;
    etkiMap.forEach(function (l) { etkiToplam += l.length; });
    var tarihler = raporlar.map(function (r) { return r.tarih; }).sort();
    document.getElementById("ozet").innerHTML =
      sirketListesi().length + " şirket · " + E.length + " ilişki · " + etkiToplam + " etki kaydı<br>Veri: " +
      tarihFmt(tarihler[0]) + " – " + tarihFmt(tarihler[tarihler.length - 1]);

    agacKur();
    temalariKur();
    raporlariKur();
    aramaKur();

    document.querySelectorAll("#yon-filtre input").forEach(function (k) {
      k.addEventListener("change", filtreUygula);
    });
    var tumK = document.getElementById("tum-iliskiler");
    if (tumK) tumK.addEventListener("change", filtreUygula);
    document.getElementById("geri").addEventListener("click", function () { odagiTemizle(); panelGizle(); });

    if (typeof cytoscape !== "undefined") {
      cy = cytoscape({
        container: document.getElementById("cy"),
        elements: elemanlar(),
        style: stiller(),
        wheelSensitivity: 0.25,
        minZoom: 0.12,
        maxZoom: 3,
        layout: { name: "preset", fit: true, padding: 46 }
      });
      cy.on("tap", 'node[tur="sirket"]', function (ev) { secSirket(ev.target.id(), false); });
      cy.on("tap", 'node[tur="sektor"]', function (ev) { panelSektor(ev.target.id()); });
      cy.on("tap", "edge", function (ev) { panelIliski(ev.target.data("eidx")); });
      cy.on("tap", function (ev) { if (ev.target === cy) temizle(); });
      filtreUygula();
    }

    var sigdir = document.getElementById("btn-sigdir");
    if (sigdir) sigdir.addEventListener("click", function () {
      if (cy) cy.animate({ fit: { eles: cy.elements(":visible"), padding: 46 } }, { duration: 250 });
    });
    function zoomla(katsayi) {
      if (!cy) return;
      var kap = document.getElementById("cy");
      cy.zoom({
        level: cy.zoom() * katsayi,
        renderedPosition: { x: kap.clientWidth / 2, y: kap.clientHeight / 2 }
      });
    }
    var art = document.getElementById("btn-buyut");
    var eks = document.getElementById("btn-kucult");
    if (art) art.addEventListener("click", function () { zoomla(1.35); });
    if (eks) eks.addEventListener("click", function () { zoomla(1 / 1.35); });

    var gvAg = document.getElementById("gv-ag");
    var gvIsi = document.getElementById("gv-isi");
    if (gvAg) gvAg.addEventListener("click", function () { gorunumDegistir("ag"); });
    if (gvIsi) gvIsi.addEventListener("click", function () { gorunumDegistir("isi"); });
    window.addEventListener("resize", yerlesimDegisti);
  }

  if (window.DELTAS_READY) baslat();
  else window.addEventListener("deltas-ready", baslat);

  // test kancası
  window.__AGH = { baslat: baslat, secSirket: secSirket, temaVurgula: temaVurgula, odakla: odakla, panoYerlesimi: panoYerlesimi, gorunumDegistir: gorunumDegistir, isiCiz: isiCiz, V: V, E: E };
})();
