// Delta — 2026-11-06 günlük raporu (pencere: 5–6 Kas)
// ABD seçim data center kısıtı piyasada teyit (Nvidia/Micron/SOX sert satış); Apple $7,5 mlr $ tahvil. Hürmüz düşük. Çin/Loughton sürüyor.
window.DELTAS.push({
  tarih: "2026-11-06",
  rapor: "raporlar/gunluk/2026-11-06.html",
  ozet: "ABD ara seçim Demokrat süpürmesi data center inşaat kısıtı riski piyasada teyit (Nvidia -%9,26, SOX -%12, S&P -%4,4); Apple $7,5 mlr $ tahvil (genel amaçlı, ~$31 mlr talep); Hürmüz AIS 5 Kas 9 / restricted ~%10 — sıkılaşan darlık ayakta, AI sermaye akışı ABD siyasi sürtünmeyle ofsetleniyor",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:apple",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "$7,5 mlr $ yedi parçalı tahvil (Reuters/Bloomberg 5 Kas, ~$31 mlr sipariş). Genel kurumsal amaç/buyback — AI özel değil, nakit esnekliği"
    },
    {
      sirket: "sirket:nvidia",
      yon: "negatif",
      buyukluk: 2,
      tema: "tema:ai-capex",
      gerekce: "Seçim sonrası data center moratoryum/kısıt riski (~%40 ABD plan kapasite) talep beklentisini kırdı. $181,60 -%9,26. Mekanizma: siyasi ofset AI capex dağıtımı"
    },
    {
      sirket: "sirket:micron",
      yon: "negatif",
      buyukluk: 2,
      tema: "tema:ai-capex",
      gerekce: "Aynı mekanizma: data center inşaat sürtünmeyle bellek talebi beklentisini ofsetledi. -%17,46. HBM darlığı ofset riski"
    },
    {
      sirket: "sirket:spacex",
      yon: "negatif",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Texas merkezli; seçim sonrası data center/AI computing kısıtı riski (Q3 gelirin >%50 AI). ~-%9. Siyasi ofset"
    },
    {
      sirket: "sirket:tesla",
      yon: "negatif",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Aynı Texas/siyasi risk + energy storage data center bağı. -%10,77. Merger/capex yol haritası ofset"
    },
    {
      sirket: "sirket:alphabet",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Data center pipeline risk altında (~%40 ABD). Malezya planı önceki, ABD sürtünmeyle ofset potansiyeli"
    },
    {
      sirket: "sirket:microsoft",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Loughton önceki + ABD seçim data center moratoryum riski. Capex dağıtımı sürtünmeyle"
    },
    {
      sirket: "sirket:amazon",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "AWS/data center pipeline aynı siyasi ofset riski. Önceki CapEx yüksekliği sürüyor"
    },
    {
      sirket: "sirket:meta",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Önceki $15 mlr $ tahvil + ABD data center kısıtı riski. Sermaye akışı ofset potansiyeli"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:apple",
      tur: "tahvil",
      tutar_musd: 7500,
      kesinlik: 0.95,
      gerekce: "Yedi parçalı ABD dolar tahvil, ~$31 mlr sipariş (Reuters/Bloomberg 5 Kas). Genel kurumsal amaç, buyback dahil"
    }
  ]
});
