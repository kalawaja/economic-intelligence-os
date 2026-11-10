// Delta — 2026-11-10 günlük raporu (pencere: 9–10 Kas)
// SpaceX $24B Starbase güç/compute planı; Nvidia probe seans tepkisi; Tesla Cybertruck wind-down. Hürmüz düşük.
window.DELTAS.push({
  tarih: "2026-11-10",
  rapor: "raporlar/gunluk/2026-11-10.html",
  ozet: "SpaceX Starbase’de ~$24 milyar $ gaz santrali + super-compute tesis planı (vergi indirimi başvurusu, 9 Aralık hearing, Reuters 9 Kas); Nvidia 9 Kas seansı -%4,2 (probe sonrası, piyasa +%2+); Hürmüz AIS 9 Kas 5 düşük (~%8 normal) — sıkılaşan darlık ayakta, AI güç kısıtı saha planıyla ofset deneniyor, yönetişim riski sürüyor",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:spacex",
      yon: "pozitif",
      buyukluk: 2,
      tema: "tema:ai-capex",
      gerekce: "Starbase ~$24 mlr $ gaz santrali + super-compute tesis planı (vergi indirimi başvurusu, 9 Aralık hearing). Mekanizma: AI güç kısıtı saha çözümü denemesi, sermaye planı"
    },
    {
      sirket: "sirket:nvidia",
      yon: "negatif",
      buyukluk: 2,
      tema: "tema:ai-capex",
      gerekce: "9 Kas seansı -%4,2 (probe sonrası), securities davaları. Mekanizma: AI çip liderliği yönetişim riski devam, sır/ilişki incelemesi"
    },
    {
      sirket: "sirket:tesla",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Cybertruck üretimini mid-2027 Cybercab için wind down teyidi (Musk). Mekanizma: üretim kapasitesi yeniden dağıtımı, yeni sermaye yok"
    },
    {
      sirket: "sirket:micron",
      yon: "negatif",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Taoyuan Fab 11E inşaat duraklaması sürüyor (müzakere). Mekanizma: HBM kapasite sürtünmesi devam"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:spacex",
      tur: "plan-capex-guc",
      tutar: 24000,
      birim: "mln $",
      kesinlik: 0.6,
      gerekce: "Starbase gaz santrali + super-compute ~$24 mlr $ planı, vergi indirimi başvurusu, hearing 9 Aralık (onay yok)"
    }
  ]
});
