// Delta — 2026-10-05 günlük raporu (pencere: 2 Eki seansı + hafta sonu + 5 Eki sabah)
// Tesla teslim/depolama; Amazon Grace Blackwell SPV görüşmesi; SpaceX kilit henüz yok.
window.DELTAS.push({
  tarih: "2026-10-05",
  rapor: "raporlar/gunluk/2026-10-05.html",
  ozet: "Tesla teslim konsensüsü aştı, yıllık düştü; istihdam +29 bin; Amazon 8 mlr $ çip SPV görüşmede; G7 100 mn varil — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:tesla",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:veri-merkezi-enerji",
      gerekce: "IR 2 Eki: teslim 486.532, üretim 464.391 (stok eritme ~22 bin); enerji depolama 13,7 GWh. Yıllık teslim −%2,1"
    },
    {
      sirket: "sirket:amazon",
      yon: "notr",
      buyukluk: 1.5,
      tema: "tema:ai-capex",
      gerekce: "FT/Bloomberg 2 Eki: ~8 mlr $ Grace Blackwell’i SPV’ye aktarıp kiralama görüşmesi; borç + en fazla %10 hisse; imza yok, Amazon yorum yok"
    },
    {
      sirket: "sirket:nvidia",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Aynı SPV görüşmesi: Grace Blackwell kullanım Amazon’da kalır, mülkiyet dış yatırımcıya konuşuluyor; sipariş veya kapasite teyidi yok"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:uzay-firlama",
      gerekce: "9 Eki kilit dilimi (en fazla ~328 mn hisse) henüz açılmadı; pencerede emilim veya yeni uçuş yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:amazon",
      tur: "spv",
      tutar_musd: 8000,
      kesinlik: 0.4,
      gerekce: "FT/Bloomberg: ~8 mlr $ Grace Blackwell SPV + kiralama görüşmesi; imza ve 8-K yok"
    }
  ]
});
