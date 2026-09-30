// Delta — 2026-09-30 günlük raporu (pencere: 29 Eyl kapanış sonrası + 30 Eyl sabah)
// Yanbu Reuters teyit + Ekim programı; Caterpillar Fabick anlaşması; Micron kapanış sonrası bekleniyor.
window.DELTAS.push({
  tarih: "2026-09-30",
  rapor: "raporlar/gunluk/2026-09-30.html",
  ozet: "Yanbu Ekim programı Reuters teyit; hat ~2,65 mb/g; Brent ~103; Micron kapanış sonrası — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:aramco",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:iran-enerji-riski",
      gerekce: "Reuters: Yanbu yükleme restart teyit; müşterilere Ekim Yanbu programı bildirildi; Kpler hat debisi ~2,65 mb/g"
    },
    {
      sirket: "sirket:micron",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:bellek-kitligi",
      gerekce: "FQ4 kapanış sonrası; HBM/kılavuz henüz yayımlanmadı — darlık testi açık, sonuç yok"
    },
    {
      sirket: "sirket:caterpillar",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:veri-merkezi-enerji",
      gerekce: "IR: John Fabick Tractor Company (Fabick Cat) bayi ağını satın alma anlaşması; dağıtım kontrolü"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:uzay-firlama",
      gerekce: "24 Eyl kilit dilimi emilim testi ve 9/24 Eki takvimi sürüyor; Flight 14 önceki pakette"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:caterpillar",
      tur: "satin-alma",
      tutar_musd: null,
      kesinlik: 0.5,
      gerekce: "Fabick Cat dealership alım anlaşması IR 29 Eyl; tutar ve kapanış şartı açıklanmadı"
    }
  ]
});
