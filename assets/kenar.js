/* Sektör satırı + konu butonu yön kenarı — app.js IIFE'sine dokunmaz */
(function () {
  "use strict";
  var YON = { pozitif: "poz", negatif: "neg", notr: "ntr", yok: "gri" };
  function agacKenar() {
    document.querySelectorAll("#agac .agac-satir").forEach(function (satir) {
      var n = satir.querySelector(".nokta");
      if (!n) return;
      ["poz", "neg", "ntr", "gri"].forEach(function (c) {
        if (n.classList.contains(c)) satir.classList.add(c);
      });
    });
  }
  function temaNet(temaId) {
    var p = 0, m = 0, t = 0;
    (window.DELTAS || []).forEach(function (d) {
      (d.etkiler || []).forEach(function (e) {
        if (!e.tema) return;
        if (e.tema !== temaId && e.tema !== "tema:" + temaId && "tema:" + e.tema !== temaId) return;
        if (!e.yon) return;
        t++;
        if (e.yon === "pozitif") p++;
        else if (e.yon === "negatif") m++;
      });
    });
    if (!t) return "gri";
    if (p > m) return "poz";
    if (m > p) return "neg";
    return "ntr";
  }
  function temaKenar() {
    document.querySelectorAll("#temalar button").forEach(function (b) {
      var id = b.dataset.id;
      if (!id) return;
      b.classList.remove("poz", "neg", "ntr", "gri");
      b.classList.add(temaNet(id));
    });
  }
  function calistir() {
    agacKenar();
    temaKenar();
  }
  function bekle() {
    if (window.DELTAS_READY) setTimeout(calistir, 180);
    else window.addEventListener("deltas-ready", function () { setTimeout(calistir, 180); });
    setTimeout(calistir, 800);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bekle);
  else bekle();
})();
