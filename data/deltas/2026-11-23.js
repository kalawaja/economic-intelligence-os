// 2026-11-23 delta — pencere 20-23 Kas
// Etki: Nvidia regülasyon derinleşmesi; SpaceX sermaye devam; Micron HBM kapasite
window.DELTA_2026_11_23 = {
  tarih: "2026-11-23",
  rapor: "raporlar/gunluk/2026-11-23.md",
  etkiler: [
    {
      id: "sirket:nvidia",
      yon: "negatif",
      gerekce: "SEC muhasebe incelemesi (Reuters/NYT) + California AG Çin çip subpoenası — AI çip liderliği yönetişim/regülasyon ofseti derinleşti, dönüş kapalı."
    },
    {
      id: "sirket:spacex",
      yon: "pozitif",
      gerekce: "GPU borcu şartları netleşti (~$32-44 mlr $, off-BS, >%8, Apollo/Goldman, Vera Rubin) — AI çip/güç ramp için sermaye akışı devam, orbital kısıt talebi."
    },
    {
      id: "sirket:micron",
      yon: "pozitif",
      gerekce: "Singapur HBM advanced packaging’e ilk proses ekipmanı kuruldu (erken 2027) — HBM darlığı kapasite tarafı adım teyit."
    }
  ],
  iliskiler: [],
  sermaye: [
    {
      id: "sirket:spacex",
      tip: "borc",
      miktar: "~32-44 mlr $ AI çip (off-BS)",
      gerekce: "FT/Bloomberg: Apollo/Goldman, getiriler >%8, Vera Rubin çipleri için kiralama; alacaklılar yörünge kısıtı talep etti."
    }
  ]
};
if (window.DELTAS) window.DELTAS.push(window.DELTA_2026_11_23);
