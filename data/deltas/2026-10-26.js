// Delta — 2026-10-26 günlük raporu (pencere: 23–26 Eki)
// Loughton çözülmedi. Hürmüz/Cin teyitsiz. SpaceX borç kapanış iddiası. Sermaye iddia.
window.DELTAS.push({
  tarih: "2026-10-26",
  rapor: "raporlar/gunluk/2026-10-26.html",
  ozet: "Loughton güç kısıtı çözülmedi, Hürmüz AIS düşük kaldı (24 Eki 6, 25 Eki 4) ve Çin ürün izni teyitsiz; SpaceX ~40 mlr $ Nvidia çip borcu kapanış iddiası (Musk/Bloomberg) — sıkılaşan darlık ayakta, sermaye bağlandı",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:microsoft",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "18 Eki Loughton çekilmesi sonrası 23–26 Eki penceresinde alternatif güç veya başka site IR’si yok. AI kapasite dağıtımı güç darboğazına çarpmaya devam ediyor; yeni sermaye olayı yok"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Q3 AI compute ramp teyidi sürüyor. ~40 mlr $ Nvidia GPU borcu 25 Eki Musk kapanış iddiası + Bloomberg (önceki yüksek faizli pricing), detay/term sheet IR yok. 26 Eki kilit dilimi (328,4 mn hisse) açıldı; emilim ölçülmedi"
    },
    {
      sirket: "sirket:nvidia",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "SpaceX çip alımı için ~40 mlr $ borç kapanış iddiası (Musk/Bloomberg 25 Eki), sipariş bağlandı iddia. Microsoft güç kısıtı kapasite dağıtımını yavaşlatabilir. Yeni IR teyidi yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:spacex",
      tutar_musd: 40000,
      kesinlik: 0.5,
      aciklama: "25 Eki Musk iddiası / Bloomberg: ~40 mlr $ Nvidia GPU borcu kapanış. Yüksek faiz önceki pricing. Detay, lender, term sheet IR yok — iddia."
    }
  ]
});
