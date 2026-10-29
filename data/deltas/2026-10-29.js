// Delta — 2026-10-29 günlük raporu (pencere: 28–29 Eki)
// Alphabet Q3 negatif FCF + capex. Microsoft Q3 Azure/capex. Çin kota kaynaklarla. SpaceX/Meta önceki. Hürmüz düşük.
window.DELTAS.push({
  tarih: "2026-10-29",
  rapor: "raporlar/gunluk/2026-10-29.html",
  ozet: "Alphabet Q3 negatif FCF $9,1 mlr $ + 2026 capex $195-205 mlr $ tuttu (2027 önemli artış); Çin ~4 mn ton ürün kotası kaynaklarla verildi (resmi teyitsiz); SpaceX Apollo taahhüt ve Meta equity planı bağlandı, Loughton/Hürmüz kısıtı sürüyor — sıkılaşan darlık ayakta, AI sermayesi akıyor",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:alphabet",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Q3 negatif free cash flow $9,1 mlr $, çeyrek capex $51,4 mlr $, 2026 kılavuz $195-205 mlr $ tuttu, 2027’de önemli artış beklentisi. AI altyapı harcaması devam ediyor; Cloud +103 %"
    },
    {
      sirket: "sirket:microsoft",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Q3 Azure +48 % ($33,17 mlr $), FCF pozitif $18,6 mlr $, capex $45,2 mlr $ (projeksiyon altı). Loughton güç kısıtı çözülmedi, kapasite dağıtımı güç darboğazına çarpmaya devam ediyor"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "~40 mlr $ Nvidia Vera Rubin master finance lease için Apollo ile bağlayıcı taahhüt önceki pencerede (IR/8-K 26 Eki), kapanış yıl sonu beklenen. Yeni kapanış veya pricing IR’si yok"
    },
    {
      sirket: "sirket:meta",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "~95-97,5 mlr $ equity planı önceki pencerede (25 mlr $ common 5x oversubscribed). ATM zamanı belirsiz; yeni sermaye olayı yok"
    },
    {
      sirket: "sirket:nvidia",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "SpaceX çip alımı için ~40 mlr $ lease taahhüt (Vera Rubin) önceki, sipariş bağlandı taahhüt. Alphabet/Microsoft yüksek capex talep destekliyor. Yeni IR teyidi yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:alphabet",
      tutar_musd: 51400,
      kesinlik: 0.9,
      aciklama: "28 Eki Q3: çeyrek capex $51,4 mlr $, 2026 kılavuz $195-205 mlr $ tuttu, 2027 önemli artış. Negatif FCF $9,1 mlr $ — harcama."
    },
    {
      sirket: "sirket:microsoft",
      tutar_musd: 45200,
      kesinlik: 0.9,
      aciklama: "28 Eki Q3: capex $45,2 mlr $ (projeksiyon altı), FCF pozitif $18,6 mlr $, Azure +48 %. Harcama."
    },
    {
      sirket: "sirket:spacex",
      tutar_musd: 40000,
      kesinlik: 0.75,
      aciklama: "Önceki: 26 Eki IR/8-K Apollo ~40 mlr $ master finance lease bağlayıcı taahhüt (Nvidia Vera Rubin). Kapanış beklenen yıl sonu — taahhüt."
    },
    {
      sirket: "sirket:meta",
      tutar_musd: 95000,
      kesinlik: 0.6,
      aciklama: "Önceki: ~95-97,5 mlr $ equity planı (common + preferred + ATM). ATM zamanı belirsiz — plan."
    }
  ]
});
