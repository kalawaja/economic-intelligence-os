/* Gömülü markdown'ı sayfaya basar */
(function () {
  "use strict";
  var kaynak = document.getElementById("icerik");
  var hedef = document.getElementById("rapor");
  if (!kaynak || !hedef || typeof marked === "undefined") return;
  var md = kaynak.textContent.replace(/^\s*\n/, "");
  hedef.innerHTML = marked.parse(md, { gfm: true, breaks: false });
  var h1 = hedef.querySelector("h1");
  if (h1) document.title = h1.textContent + " — Ağ Haritası";
  hedef.querySelectorAll("a[href^='http']").forEach(function (a) {
    a.target = "_blank"; a.rel = "noopener";
  });
})();
