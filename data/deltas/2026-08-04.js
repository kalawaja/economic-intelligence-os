window.DELTAS.push({
  tarih: "2026-08-04",
  rapor: "raporlar/gunluk/2026-08-04.md",
  dugumler: [
    { id: "sirket:amd", tur: "sirket", ad: "AMD", kod: "AMD", sektor: ["sektor:cip-tasarim"] },
    { id: "sirket:spacex", tur: "sirket", ad: "SpaceX", kod: "SPCX", ozel: false, sektor: ["sektor:savunma-uzay"] },
    { id: "tema:kurumsal-ai-talebi", tur: "tema", ad: "Kurumsal AI talebi (uygulama katmanı)" },
    { id: "tema:tarife-hukuku", tur: "tema", ad: "Tarife hukuki riski (Section 301 / IEEPA)" }
  ],
  iliskiler: [
    { kaynak: "sirket:amd", hedef: "sirket:anthropic", tur: "yatirim", tutar_musd: 5000, aciklama: "Anthropic'e 5 milyar $'a kadar hisse yatırımı (Temmuz 2026 stratejik ortaklığı)" },
    { kaynak: "sirket:amd", hedef: "sirket:anthropic", tur: "tedarik", aciklama: "2 GW'a kadar Instinct MI450 GPU dağıtımı; ilk GW büyük oranda 2027'de" }
  ],
  etkiler: [
    { sirket: "sirket:palantir", yon: "pozitif", gerekce: "Q2 geliri 1,94 milyar $ (+%93), ABD ticari +%149; 2026 öngörüsü 8,15 milyar $'a yükseltildi, hisse seans sonrası +%13", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:samsung", yon: "negatif", gerekce: "Tepki rallisi satışa döndü: 4 Ağustos'ta −%2,7 (233.000 won); bellek spot fiyatlarındaki gerileme ilk fiziksel karşı-sinyal", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:sk-hynix", yon: "negatif", gerekce: "−%3,0 (1.520.000 won); Kospi güne +%1 başlayıp −%1,66 ile 6.153,55'ten kapandı, KOSDAQ ise +%3,98", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "Wall Street rekor gününde +%2,9; ABD AI çip talebi Kore bellek satışından ayrışmaya devam ediyor", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:amd", yon: "notr", gerekce: "Bilanço bugün kapanış sonrası: Q2 öngörüsü 11,2 milyar $ (+%46); 53x ileri F/K ile Eylül öngörüsü ve marj seyri kritik", tema: "tema:ai-capex" },
    { sirket: "sirket:spacex", yon: "notr", gerekce: "İlk halka açık bilanço bugün; hisse 108,37 $ (halka arzın −%30 altında), 6 Ağustos'ta ~116 milyar $'lık lockup açılıyor", tema: "tema:ai-ipo-yarisi" }
  ],
  sermaye: [
    { hedef: "sirket:anthropic", tutar_musd: 5000, tip: "finansman", aciklama: "AMD'den 5 milyar $'a kadar hisse yatırımı (2 GW MI450 anlaşmasının parçası)" }
  ]
});
