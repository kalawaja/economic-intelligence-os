// Delta — 2026-10-07 günlük raporu (pencere: 6 Eki seansı + 7 Eki sabah)
// Google–Constellation 890 MW uprate PPA; 2.700 MW kaynak-bağımsız tedarik. SpaceX borç imzasız.
window.DELTAS.push({
  tarih: "2026-10-07",
  rapor: "raporlar/gunluk/2026-10-07.html",
  ozet: "Google 20 yıl 890 MW nükleer uprate PPA; 2.700 MW ayrı tedarik; SpaceX ~40 mlr $ çip borcu imzasız — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [
    {
      kaynak: "sirket:constellation",
      hedef: "sirket:alphabet",
      tur: "ppa",
      mw: 890,
      gerekce: "6 Eki bülten: 20 yıl, 11 ünitede 890 MW uprate (IL/PA/NJ); ilk teslim 2028; Constellation yatırımı >4,3 mlr $"
    }
  ],
  etkiler: [
    {
      sirket: "sirket:alphabet",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:veri-merkezi-enerji",
      gerekce: "20 yıl offtake 890 MW yeni nükleer uprate; ayrı 15 yıl 2.700 MW PJM tedariki kaynak bağlı değil, Google nakit tutarı açıklanmadı"
    },
    {
      sirket: "sirket:constellation",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:veri-merkezi-enerji",
      gerekce: "Google çapa müşteri: 890 MW uprate >4,3 mlr $ yatırımı açıyor; 2.700 MW mevcut filo için gelir teyidi, yeni santral değil"
    },
    {
      sirket: "sirket:nvidia",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "FT/Reuters: SpaceX ~40 mlr $ finansman görüşmesi Nvidia çipi için; sipariş ve kapanış yok, 2027 deniyor"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Apollo öncül borç görüşmesi imzasız; 9 Eki kilit açılmadı, 8-K yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:constellation",
      tur: "sozlesme",
      tutar_musd: 4300,
      kesinlik: 0.9,
      gerekce: "Şirket: PPA 11 ünitede uprate için >4,3 mlr $ yatırım; Google nakit tutarı açıklanmadı"
    }
  ]
});
