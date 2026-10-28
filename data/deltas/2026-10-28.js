// Delta — 2026-10-28 günlük raporu (pencere: 27–28 Eki)
// SpaceX Apollo bağlayıcı taahhüt. Meta equity planı. Loughton/Hürmüz/Cin teyitsiz. Sermaye taahhüt/plan.
window.DELTAS.push({
  tarih: "2026-10-28",
  rapor: "raporlar/gunluk/2026-10-28.html",
  ozet: "SpaceX ~40 mlr $ Apollo bağlayıcı taahhüt (IR/8-K, Nvidia Vera Rubin lease); Meta ~95 mlr $ hisse planı (25 mlr $ 5x oversubscribed); Loughton güç kısıtı çözülmedi, Hürmüz AIS 27 Eki 5 düşük, Çin teyitsiz — sıkılaşan darlık ayakta, sermaye bağlandı",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:microsoft",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Loughton çekilmesi sonrası 27–28 Eki penceresinde alternatif güç veya başka site IR’si yok. AI kapasite dağıtımı güç darboğazına çarpmaya devam ediyor; yeni sermaye olayı yok"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Q3 AI compute ramp teyidi sürüyor. ~40 mlr $ Nvidia Vera Rubin master finance lease için Apollo ile bağlayıcı taahhüt (IR/8-K 26 Eki), kapanış yıl sonu beklenen, lease H1 2027. Detay pricing henüz yok"
    },
    {
      sirket: "sirket:nvidia",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "SpaceX çip alımı için ~40 mlr $ lease taahhüt (Vera Rubin), sipariş bağlandı taahhüt. Microsoft güç kısıtı kapasite dağıtımını yavaşlatabilir. Yeni IR teyidi yok"
    },
    {
      sirket: "sirket:meta",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "~95 mlr $ equity planı (35 mlr $ halka arz + 60 mlr $ ATM) AI altyapı harcaması için; 25 mlr $ common 5x oversubscribed. Yeni sermaye planı, kapanış/ATM zamanı belirsiz"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:spacex",
      tutar_musd: 40000,
      kesinlik: 0.75,
      aciklama: "26 Eki IR/8-K: Apollo yönetimli varlık ile ~40 mlr $ master finance lease bağlayıcı taahhüt (Nvidia Vera Rubin). Kapanış beklenen yıl sonu, lease H1 2027. Pricing henüz yok — taahhüt."
    },
    {
      sirket: "sirket:meta",
      tutar_musd: 95000,
      kesinlik: 0.6,
      aciklama: "26 Eki plan: ~35 mlr $ common/preferred halka arz + 60 mlr $ ATM. 27 Eki 25 mlr $ common 5x oversubscribed (Bloomberg). ATM zamanı belirsiz — plan."
    }
  ]
});
