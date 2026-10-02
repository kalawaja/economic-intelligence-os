// Delta — 2026-10-02 günlük raporu (pencere: 1 Eki seansı + 2 Eki sabah)
// Amazon–Constellation PPA; Çin yakıt ihracı askıda; Hürmüz isabet; Yanbu kısmi ritim.
window.DELTAS.push({
  tarih: "2026-10-02",
  rapor: "raporlar/gunluk/2026-10-02.html",
  ozet: "Amazon 20 yıl nükleer PPA; Çin Ekim yakıt ihracı askıda; Brent 102 $; 10Y gün içi %5,34 — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:amazon",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:ai-capex",
      gerekce: "20 yıl PPA: Calvert Cliffs 690 MW (190 MW uprate 2030–32); PJM perakende tedarik; tesis yatırımı >3 mlr $ Constellation tarafında"
    },
    {
      sirket: "sirket:nvidia",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "1 Eki blog: GPT-6 Astra Ultrafast Blackwell üzerinde API’de; çıkarım hızı, yeni capex değil"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:uzay-firlama",
      gerekce: "Sonraki kilit 9 Eki / 24 Eki; pencerede yeni uçuş veya emilim teyidi yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:amazon",
      tur: "ppa",
      tutar_musd: null,
      kesinlik: 1.0,
      gerekce: "Constellation IR 30 Eyl: 20 yıl, 690 MW; Amazon nakit tutarı açıklanmadı; >3 mlr $ tesis yatırımı karşı tarafta"
    }
  ]
});
