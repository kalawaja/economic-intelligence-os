// Delta — 2026-09-28 günlük raporu (pencere: 25 Eyl kapanış + 26–27 hs + 28 Eyl)
// Flight 14 yörünge + 26 V3; kilit açık; hat kısmi; China Nvidia sinyali. Sıkılaşan darlık ayakta.
window.DELTAS.push({
  tarih: "2026-09-28",
  rapor: "raporlar/gunluk/2026-09-28.html",
  ozet: "Flight 14 yörünge + 26 Starlink V3; kilit açık; hat kısmi; China Nvidia sinyali — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:spacex",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:uzay-firlama",
      gerekce: "Flight 14 ilk yörünge + 26 Starlink V3 teslim; motor arızası görevi kısalttı; kilit emilimi ve Form 144 arz baskısı açık"
    },
    {
      sirket: "sirket:nvidia",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "China MIIT ByteDance/Alibaba RTX Pro 5500 alımına izin sinyali; sevkiyat teyitsiz"
    },
    {
      sirket: "sirket:siemens-energy",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:turbin-kitligi",
      gerekce: "Üçüncü buyback dilimi en fazla 2 mlr € / 50 mn hisse, 31 Mar 2027’ye kadar açık"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:siemens-energy",
      tur: "buyback",
      tutar_musd: 2200,
      kesinlik: 1.0,
      gerekce: "Üçüncü dilim tavanı 2 mlr €; açık piyasa alımı 31 Mar 2027’ye kadar"
    }
  ]
});
