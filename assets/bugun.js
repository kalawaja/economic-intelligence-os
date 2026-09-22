/* Bugün katmanı — app.js IIFE'sine dokunmadan son dolu dilimi öne çıkarır */
(function () {
  "use strict";
  var AYLAR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
  var YON_CSS = { pozitif: "poz", negatif: "neg", notr: "ntr", yok: "gri" };
  var SEKMELER = ["sekme-agac", "sekme-temalar", "sekme-raporlar", "sekme-filtre", "sekme-iz"];
  var durum = { acik: true };

  function tarihFmt(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + AYLAR[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function doluMu(d) {
    return !!((d.dugumler && d.dugumler.length) || (d.iliskiler && d.iliskiler.length) ||
      (d.etkiler && d.etkiler.length) || (d.sermaye && d.sermaye.length) || d.ozet);
  }
  function cyAl() {
    var el = document.getElementById("cy");
    if (el && el._cyreg && el._cyreg.cy) return el._cyreg.cy;
    if (window.cy && window.cy.nodes) return window.cy;
    return null;
  }
  function sekmelerYamasi() {
    var cubuk = document.getElementById("sol-sekmeler");
    if (!cubuk || cubuk.dataset.bugunSekme) return;
    cubuk.dataset.bugunSekme = "1";
    cubuk.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        SEKMELER.forEach(function (id) {
          var k = document.getElementById(id);
          if (k) k.classList.toggle("gizli", id !== b.dataset.sekme);
        });
      });
    });
  }
  function iliskiToggle() {
    var k = document.getElementById("tum-iliskiler");
    if (!k) return;
    var lab = k.closest(".arac-toggle");
    function sync() { if (lab) lab.classList.toggle("aktif", k.checked); }
    k.addEventListener("change", sync);
    sync();
  }
  function hesap() {
    var tarihler = [];
    (window.DELTAS || []).forEach(function (d) { if (d.tarih && doluMu(d)) tarihler.push(d.tarih); });
    tarihler.sort();
    var aktif = tarihler.length ? tarihler[tarihler.length - 1] : null;
    var sirket = {}, tema = {}, iz = [], ozet = "";
    var say = { etki: 0, dugum: 0, bag: 0, sermaye: 0 };
    (window.DELTAS || []).forEach(function (d) {
      if (!aktif || d.tarih !== aktif) return;
      if (d.ozet) ozet = d.ozet;
      (d.dugumler || []).forEach(function (n) {
        if (n.tur === "sirket") { sirket[n.id] = 1; say.dugum++; }
      });
      (d.iliskiler || []).forEach(function (i) {
        if (i.kaynak) sirket[i.kaynak] = 1;
        if (i.hedef) sirket[i.hedef] = 1;
        say.bag++;
      });
      (d.etkiler || []).forEach(function (e) {
        var sid = e.sirket || e.hedef;
        if (sid) { e.sirket = sid; sirket[sid] = 1; }
        say.etki++;
        if (e.tema) tema[e.tema] = (tema[e.tema] || 0) + 1;
        iz.push(e);
      });
      (d.sermaye || []).forEach(function (s) {
        if (s.hedef) sirket[s.hedef] = 1;
        say.sermaye++;
      });
    });
    return { aktif: aktif, sirket: sirket, tema: tema, iz: iz, ozet: ozet, say: say };
  }
  function adBul(id) {
    if (!id) return "";
    var V = window.__AGH && window.__AGH.V;
    if (V && V.get && V.get(id) && V.get(id).ad) return V.get(id).ad;
    return String(id).replace(/^sirket:/, "");
  }
  function izYaz(h) {
    var baslik = document.getElementById("bugun-baslik");
    var sayac = document.getElementById("bugun-sayac");
    var ozetEl = document.getElementById("bugun-ozet");
    var ul = document.getElementById("bugun-iz");
    if (baslik) baslik.textContent = h.aktif ? ("Bugünün izi — " + tarihFmt(h.aktif)) : "Bugünün izi";
    if (sayac) {
      sayac.textContent = h.say.etki + " etki · " + h.say.dugum + " düğüm · " + h.say.bag + " bağ";
      sayac.title = sayac.textContent;
    }
    if (ozetEl) {
      ozetEl.textContent = h.ozet || "";
      ozetEl.classList.toggle("gizli", !h.ozet);
    }
    if (!ul) return;
    ul.innerHTML = "";
    if (!h.iz.length) {
      var li = document.createElement("li");
      li.className = "bugun-bos";
      li.textContent = "Bu dilimde haritaya düğüm/bağ yazılmadı; renk güncellemesi yok.";
      ul.appendChild(li);
      return;
    }
    h.iz.forEach(function (k) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.className = "bugun-satir";
      var ad = document.createElement("span");
      ad.className = "bugun-ad";
      var nokta = document.createElement("i");
      nokta.className = "nokta " + (YON_CSS[k.yon] || "gri");
      ad.appendChild(nokta);
      ad.appendChild(document.createTextNode(adBul(k.sirket)));
      b.appendChild(ad);
      if (k.gerekce) {
        var g = document.createElement("span");
        g.className = "bugun-gerekce";
        g.textContent = k.gerekce;
        b.appendChild(g);
      }
      b.addEventListener("click", function () {
        if (window.__AGH && window.__AGH.secSirket) window.__AGH.secSirket(k.sirket);
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
  }
  function agacRozet(h) {
    var V = window.__AGH && window.__AGH.V;
    if (!V || !V.forEach) return;
    var sektorSay = {};
    Object.keys(h.sirket).forEach(function (id) {
      var n = V.get(id);
      if (!n || !n.sektor) return;
      (n.sektor || []).forEach(function (sid) {
        var k = sid;
        while (k) {
          sektorSay[k] = (sektorSay[k] || 0) + 1;
          var sn = V.get(k);
          k = sn && sn.ust ? sn.ust : null;
        }
      });
    });
    document.querySelectorAll("#agac .agac-ad").forEach(function (btn) {
      var ad = "";
      btn.childNodes.forEach(function (c) {
        if (c.nodeType === 1 && c.tagName === "SPAN" && !c.classList.contains("agac-sayi") && !c.classList.contains("agac-taze")) ad = c.textContent;
      });
      var sid = null;
      V.forEach(function (n, id) {
        if (n.tur === "sektor" && n.ad === ad) sid = id;
      });
      if (!sid || !sektorSay[sid]) return;
      if (btn.querySelector(".agac-taze")) return;
      var s = document.createElement("span");
      s.className = "agac-taze";
      s.textContent = "+" + sektorSay[sid];
      btn.appendChild(s);
    });
  }
  function temaSirala(h) {
    var ul = document.getElementById("temalar");
    if (!ul) return;
    var items = [].slice.call(ul.querySelectorAll("li"));
    items.sort(function (a, b) {
      var ia = a.querySelector("button");
      var ib = b.querySelector("button");
      var da = ia && ia.dataset.id ? (h.tema[ia.dataset.id] || 0) : 0;
      var db = ib && ib.dataset.id ? (h.tema[ib.dataset.id] || 0) : 0;
      return db - da;
    });
    items.forEach(function (li) {
      var btn = li.querySelector("button");
      if (!btn) return;
      var id = btn.dataset.id;
      var n = h.tema[id] || 0;
      if (n) {
        btn.classList.add("tema-taze");
        if (btn.textContent.indexOf("bugün") === -1) {
          btn.textContent = btn.textContent.replace(/\s*\(.*\)\s*$/, "") + " · bugün " + n;
        }
      }
      ul.appendChild(li);
    });
  }
  function katman(h) {
    var cy = cyAl();
    if (!cy) return;
    cy.elements().removeClass("soluk vurgulu");
    if (!durum.acik) {
      cy.animate({ fit: { eles: cy.elements(":visible"), padding: 46 } }, { duration: 250 });
      return;
    }
    var idler = Object.keys(h.sirket);
    if (!idler.length) return;
    cy.style().selector('node[tur="sirket"][taze = 1]').style({
      "border-width": 2.6, "border-color": "#FFA040"
    }).update();
    idler.forEach(function (id) {
      var n = cy.getElementById(id);
      if (n && n.length) n.data("taze", 1);
    });
    cy.elements().addClass("soluk");
    idler.forEach(function (id) {
      var n = cy.getElementById(id);
      if (!n || !n.length) return;
      n.removeClass("soluk").addClass("vurgulu");
      var p = n.parent();
      if (p && p.length) p.removeClass("soluk");
    });
    var eles = cy.collection();
    idler.forEach(function (id) {
      var n = cy.getElementById(id);
      if (n && n.length && n.style("display") !== "none") {
        eles = eles.union(n);
        var p = n.parent();
        if (p && p.length) eles = eles.union(p);
      }
    });
    if (eles.length) cy.animate({ fit: { eles: eles, padding: 70 } }, { duration: 280 });
  }
  function baslat() {
    var h = hesap();
    izYaz(h);
    agacRozet(h);
    temaSirala(h);
    var btn = document.getElementById("btn-bugun");
    if (btn) {
      btn.classList.toggle("aktif", durum.acik);
      btn.addEventListener("click", function () {
        durum.acik = !durum.acik;
        btn.classList.toggle("aktif", durum.acik);
        katman(h);
      });
    }
    setTimeout(function () { katman(h); }, 200);
  }
  function bekle() {
    sekmelerYamasi();
    iliskiToggle();
    if (window.DELTAS_READY) setTimeout(baslat, 120);
    else window.addEventListener("deltas-ready", function () { setTimeout(baslat, 120); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bekle);
  else bekle();
})();
