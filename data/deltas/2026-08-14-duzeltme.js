// Düzeltme deltası — 2026-08-14
// Sorun: 2026-08-11'den itibaren 5 deltada (2026-08-11, 2026-08-12, 2026-08-13,
// 2026-08-13-paketleme-modulu, 2026-08-14) şirketlerin sektor dizileri "sektor:"
// ÖNEKSİZ yazıldı. app.js sektor[0] değerini olduğu gibi ebeveyn (alan) id'si
// yaptığı için panelde 12 hayalet sektör alanı oluştu ve 28 şirket asıl
// alanlarının dışında kaldı.
// Çözüm: birlestir() aynı id'yi yeniden bildirince alanı üzerine yazar; aşağıda
// 28 şirket doğru önekli sektor dizileriyle yeniden bildirilir. Geçmiş delta
// dosyalarına dokunulmaz. KURAL: sektor dizisi elemanları HER ZAMAN "sektor:"
// önekiyle yazılır.
window.DELTAS.push({
  tarih: "2026-08-14",
  rapor: "raporlar/gunluk/2026-08-14.html",
  dugumler: [
    // 2026-08-11 kaynaklı
    { id: "sirket:blackrock", tur: "sirket", sektor: ["sektor:finans-yatirim"] },
    { id: "sirket:blackstone", tur: "sirket", sektor: ["sektor:finans-yatirim"] },
    { id: "sirket:goldman-sachs", tur: "sirket", sektor: ["sektor:finans-yatirim"] },
    { id: "sirket:rocket-lab", tur: "sirket", sektor: ["sektor:savunma-uzay"] },
    { id: "sirket:iridium", tur: "sirket", sektor: ["sektor:savunma-uzay"] },
    { id: "sirket:archer", tur: "sirket", sektor: ["sektor:savunma-uzay"] },
    { id: "sirket:boeing", tur: "sirket", sektor: ["sektor:savunma-uzay"] },
    // 2026-08-12 kaynaklı
    { id: "sirket:temasek", tur: "sirket", sektor: ["sektor:finans-yatirim"] },
    { id: "sirket:coreweave", tur: "sirket", sektor: ["sektor:hyperscaler", "sektor:yapay-zeka"] },
    { id: "sirket:super-micro", tur: "sirket", sektor: ["sektor:kurumsal-bt"] },
    { id: "sirket:joby", tur: "sirket", sektor: ["sektor:savunma-uzay"] },
    { id: "sirket:resonant-sciences", tur: "sirket", sektor: ["sektor:savunma-uzay"] },
    // 2026-08-13 kaynaklı
    { id: "sirket:nebius", tur: "sirket", sektor: ["sektor:hyperscaler", "sektor:yapay-zeka"] },
    { id: "sirket:wendys", tur: "sirket", sektor: ["sektor:e-ticaret"] },
    { id: "sirket:trian", tur: "sirket", sektor: ["sektor:finans-yatirim"] },
    // 2026-08-13-paketleme-modulu kaynaklı
    { id: "sirket:besi", tur: "sirket", sektor: ["sektor:ekipman-eda"] },
    { id: "sirket:asmpt", tur: "sirket", sektor: ["sektor:ekipman-eda"] },
    { id: "sirket:kulicke-soffa", tur: "sirket", sektor: ["sektor:ekipman-eda"] },
    { id: "sirket:hanmi-semiconductor", tur: "sirket", sektor: ["sektor:ekipman-eda"] },
    { id: "sirket:hanwha-semitech", tur: "sirket", sektor: ["sektor:ekipman-eda"] },
    { id: "sirket:broadcom", tur: "sirket", sektor: ["sektor:cip-tasarim", "sektor:optik-ag"] },
    // 2026-08-14 kaynaklı
    { id: "sirket:workday", tur: "sirket", sektor: ["sektor:kurumsal-bt"] },
    { id: "sirket:silver-lake", tur: "sirket", sektor: ["sektor:finans-yatirim"] },
    { id: "sirket:cisco", tur: "sirket", sektor: ["sektor:teknoloji"] },
    { id: "sirket:cerebras", tur: "sirket", sektor: ["sektor:yapay-zeka", "sektor:yariiletken"] },
    { id: "sirket:applied-materials", tur: "sirket", sektor: ["sektor:ekipman-eda"] },
    { id: "sirket:netflix", tur: "sirket", sektor: ["sektor:medya-spor"] },
    { id: "sirket:pershing-square", tur: "sirket", sektor: ["sektor:finans-yatirim"] }
  ],
  iliskiler: [],
  etkiler: [],
  sermaye: []
});
