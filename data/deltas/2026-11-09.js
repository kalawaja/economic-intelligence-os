// Delta — 2026-11-09 günlük raporu (pencere: 6–9 Kas, hafta sonu dahil)
// Nvidia board probe (yabancı istihbarat); Micron Taoyuan HBM fab pause; SpaceX Harrison istifa (8-K). Hürmüz düşük. Çin diesel yumuşama.
window.DELTAS.push({
  tarih: "2026-11-09",
  rapor: "raporlar/gunluk/2026-11-09.html",
  ozet: "Nvidia Yönetim Kurulu Jensen Huang’ın yabancı istihbarat hedefi olması iddiası üzerine bağımsız soruşturma açtı (8 Kas IR); after-hours hisseler düştü; Micron Taoyuan $4,5 mlr $ HBM fab inşaatını iş uyuşmazlığı nedeniyle durdurdu (Bloomberg); SpaceX Google yöneticisi Donald Harrison kuruldan istifa etti (8-K, Alphabet çatışma); Hürmüz AIS ~%8 normal — sıkılaşan darlık ayakta, AI çip liderliği yönetişim riski ve HBM kapasite sürtünmesi sermaye akışını ofsetliyor",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:nvidia",
      yon: "negatif",
      buyukluk: 2,
      tema: "tema:ai-capex",
      gerekce: "Yönetim Kurulu bağımsız soruşturma (Huang yabancı istihbarat hedefi iddiası, Çinli ilişki raporları). After-hours düşüş. Mekanizma: AI çip liderliği yönetişim riski, sır/ilişki incelemesi"
    },
    {
      sirket: "sirket:micron",
      yon: "negatif",
      buyukluk: 2,
      tema: "tema:ai-capex",
      gerekce: "Taoyuan Fab 11E ($4,5 mlr $ HBM/DRAM 2028) inşaat duraklaması iş uyuşmazlığı/kâr paylaşımı. Operasyonlar normal iddiası. Mekanizma: HBM kapasite sürtünmesi"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "8-K: Google yöneticisi Harrison kurul istifa (anlaşmazlık yok). Musk Alphabet çatışma. Bloomberg Tesla birleşme değerlendirmesi. Yönetişim, saf sermaye değil"
    },
    {
      sirket: "sirket:tesla",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Musk Cybertruck üretimini mid-2027 Cybercab için wind down. SpaceX birleşme iddiası ilişkisi. Üretim yeniden dağıtımı, yeni sermaye yok"
    },
    {
      sirket: "sirket:alphabet",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "SpaceX kurulundan Harrison istifa (Alphabet çatışma gerekçesi). Stake devam. İlişki sürtünmesi, sermaye olayı değil"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:spacex",
      tur: "yonetisim-8k",
      tutar: null,
      kesinlik: 0.95,
      gerekce: "6 Kas 8-K: Donald Harrison Class B Director istifa (anlaşmazlık yok). Musk Alphabet conflicts. Bloomberg bağımsızlar Tesla merger weigh. Saf sermaye değil, yönetişim"
    }
  ]
});
