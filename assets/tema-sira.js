/* Konu listesi: son etki tarihi yeni → eski */
(function () {
  "use strict";
  function anahtarlar(id) {
    if (!id) return [];
    var a = [id];
    if (id.indexOf("tema:") === 0) a.push(id.slice(5));
    else a.push("tema:" + id);
    return a;
  }
  function sonTarih(id) {
    var set = {};
    anahtarlar(id).forEach(function (k) { set[k] = 1; });
    var max = "";
    (window.DELTAS || []).forEach(function (d) {
      (d.etkiler || []).forEach(function (e) {
        if (!e.tema || !d.tarih) return;
        if (set[e.tema]) {
          if (d.tarih > max) max = d.tarih;
        }
      });
    });
    return max;
  }
  function sirala() {
    var ul = document.getElementById("temalar");
    if (!ul) return;
    var items = [].slice.call(ul.querySelectorAll("li"));
    items.sort(function (a, b) {
      var ia = a.querySelector("button");
      var ib = b.querySelector("button");
      var da = sonTarih(ia && ia.dataset.id);
      var db = sonTarih(ib && ib.dataset.id);
      if (db !== da) return db < da ? -1 : 1;
      var na = ia ? ia.textContent : "";
      var nb = ib ? ib.textContent : "";
      return na.localeCompare(nb, "tr");
    });
    items.forEach(function (li) { ul.appendChild(li); });
  }
  function bekle() {
    if (window.DELTAS_READY) setTimeout(sirala, 220);
    else window.addEventListener("deltas-ready", function () { setTimeout(sirala, 220); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bekle);
  else bekle();
})();
