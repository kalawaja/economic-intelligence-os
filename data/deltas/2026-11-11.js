// Delta — 2026-11-11 günlük raporu (pencere: 10–11 Kas)
// SpaceX Starbase planı sürüyor. Nvidia/Micron/Hürmüz teyitsiz. Yeni eşik yok.
window.DELTAS.push({
  tarih: "2026-11-11",
  rapor: "raporlar/gunluk/2026-11-11.html",
  ozet: "SpaceX Starbase ~$24 mlr $ gaz santrali + super-compute planı (9 Aralık hearing sürüyor); Nvidia yönetişim riski devam; Micron Taoyuan pause sürüyor; Hürmüz AIS düşük — sıkılaşan darlık ayakta, AI güç kısıtı saha planıyla ofset deneniyor",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Starbase ~$24 mlr $ gaz santrali + super-compute tesis planı (vergi indirimi başvurusu, 9 Aralık hearing). Onay yok, kapasite detayı belirsiz. AI güç kısıtı için saha ofset denemesi"
    },
    {
      sirket: "sirket:nvidia",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Yönetim kurulu bağımsız soruşturma (Jensen Huang yabancı istihbarat hedefi iddiası) devam. 9 Kas seans düşüşü sürüyor. Yeni IR teyidi yok"
    },
    {
      sirket: "sirket:micron",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:hbm-cowos",
      gerekce: "Taoyuan Fab 11E ($4,5 mlr $ HBM/DRAM 2028) inşaatı iş uyuşmazlığı nedeniyle duraklatıldı. Müzakere sürüyor, restart teyidi yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:spacex",
      tutar_musd: 24000,
      kesinlik: 0.5,
      aciklama: "Starbase kamu duyurusu: ~$24 mlr $ gaz ateşli santral + super-compute tesis (444 dönüm, vergi indirimi + Chapter 380, 9 Aralık hearing). Onay ve kapanış yok — plan."
    }
  ]
});
