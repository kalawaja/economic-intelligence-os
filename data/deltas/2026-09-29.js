// Delta — 2026-09-29 günlük raporu (pencere: 28 Eyl kapanış sonrası + 29 Eyl)
// Nvidia 150 mlr $ buyback; Yanbu yükleme restart; 10Y 5,24; kilit açık. Sıkılaşan darlık ayakta.
window.DELTAS.push({
  tarih: "2026-09-29",
  rapor: "raporlar/gunluk/2026-09-29.html",
  ozet: "Nvidia 150 mlr $ buyback; Yanbu yükleme restart; 10Y 5,24; kilit açık — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:nvidia",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:ai-capex",
      gerekce: "Yönetim kurulu 150 mlr $ ek share repurchase authorization onayladı; toplam yetki ~235 mlr $, FY28’e kadar; nakit üretiminden iade sinyali"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:uzay-firlama",
      gerekce: "24 Eyl kilit dilimi emilim testi ve 9/24 Eki takvimi sürüyor; yeni uçuş olayı yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:nvidia",
      tur: "buyback",
      tutar_musd: 150000,
      kesinlik: 1.0,
      gerekce: "Ek 150 mlr $ authorization; toplam ~235 mlr $; board onayı 28 Eyl; fiilî alım temposu henüz teyitsiz"
    }
  ]
});
