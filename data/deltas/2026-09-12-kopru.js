// Delta — 2026-09-12 köprü (pencere: 28 Ağu günlük kesiti sonrası → 11 Eyl kapanışı)
window.DELTAS.push({
  tarih: "2026-09-12",
  rapor: "raporlar/gunluk/2026-09-12.html",
  dugumler: [
    { id: "sirket:palo-alto", tur: "sirket", ad: "Palo Alto Networks", kod: "PANW", ulke: "ABD", borsa: "NASDAQ", sektor: ["sektor:siber-guvenlik"] },
    { id: "sirket:oracle", tur: "sirket", ad: "Oracle", kod: "ORCL", ulke: "ABD", borsa: "NYSE", sektor: ["sektor:hyperscaler"] },
    { id: "sirket:console", tur: "sirket", ad: "Console", kod: null, ozel: 1, ulke: "ABD", borsa: null, sektor: ["sektor:siber-guvenlik"] },
    { id: "sirket:enflame", tur: "sirket", ad: "Enflame", kod: "688801", ulke: "Cin", borsa: "STAR", sektor: ["sektor:cip-tasarim"] }
  ],
  iliskiler: [
    { kaynak: "sirket:palo-alto", hedef: "sirket:console", tur: "satin-alma", aciklama: "1 Eyl: ajan-güvenlik satın alımı; tutar TechCrunch aktarımında ~500 mn $ (teyit gerektirir)" },
    { kaynak: "sirket:tencent", hedef: "sirket:enflame", tur: "yatirim", aciklama: "Tencent post-IPO %17,95 pay + 2025 gelirinin %83,8'i Tencent'e bağlı" },
    { kaynak: "sirket:enflame", hedef: "sirket:tencent", tur: "tedarik", aciklama: "Enflame 2025 gelirinin %83,8'i Tencent; STAR kotasyonu sonrası bağ halka açık" }
  ],
  etkiler: [
    { sirket: "sirket:oracle", yon: "pozitif", gerekce: "Q1 FY27: gelir 19,3 mlr $ (+%30), IaaS 7,4 mlr $ (+%121), RPO 664 mlr $; çeyrekte +30 mlr $ AI sözleşme", tema: "tema:ai-capex" },
    { sirket: "sirket:dell", yon: "pozitif", gerekce: "Oracle sonrası 11 Eyl ~+%12 rekor kapanış — AI sunucu donanım zinciri", tema: "tema:ai-capex" },
    { sirket: "sirket:palo-alto", yon: "negatif", gerekce: "Q4 3,41 mlr $ (+%34) ve NGS ARR 9,10 mlr $ (+%63) beat'ine rağmen primli giriş çözüldü; seans+ertesi gün yüksek tek haneli düşüş", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:enflame", yon: "pozitif", gerekce: "STAR IPO 912 mn $; ilk gün ~+%179, değerleme ~25-26 mlr $ — dar float şerhli", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:tencent", yon: "pozitif", gerekce: "Enflame'de %17,95 pay + ana müşteri; kotasyon Tencent'in yerli hızlandırıcı zincirini görünür kıldı", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:tsmc", yon: "pozitif", gerekce: "Lutnick 'üret, ödeme' formülünde açıklanmış 265 mlr $ ABD yatırımı muafiyet katsayısı olarak okunuyor", tema: "tema:tarife-hukuku" },
    { sirket: "sirket:samsung", yon: "notr", gerekce: "Çip tarifesi mimarisi Lutnick ile resmîleşti; Taylor/Austin ABD kapasitesi muafiyet adayı, oran/tarih yok", tema: "tema:tarife-hukuku" },
    { sirket: "sirket:sk-hynix", yon: "notr", gerekce: "Yerli üretim-muafiyet formülü bellek üçlüsünü politika değişkenine bağladı; Faz-2 metni yayımlanmadı", tema: "tema:tarife-hukuku" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "Ocak Faz-1 %25 (H200) duruyor; sunucu kapsamlı Faz-2 taslak — pencere içi yeni bilanço yok", tema: "tema:tarife-hukuku" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "9 Eyl 319 mn hisse kilit açılışı, seans −%4+; 20 Ağu tranş deseni tekrar", tema: "tema:ai-capex" },
    { sirket: "sirket:palantir", yon: "notr", gerekce: "Feinberg 244 mn $ no-bid notu sözleşmeye dönüşmedi; UK NESO 21,2 mn £ doğrudan Foundry yenilemesi ayrı dosya", tema: "tema:savunma-neo-prime" },
    { sirket: "sirket:aramco", yon: "negatif", gerekce: "Brent 104,61 $; Hürmüz'de saldırı+düşük debi; Jazan 30 Ağu restart teyitsiz kaldı", tema: "tema:iran-enerji-riski" },
    { sirket: "sirket:alcoa", yon: "negatif", gerekce: "Kanada 8 Eyl'de 27,6 mlr $ karşı-tarife yürürlükte; ABD çelik/alüminyum %50", tema: "tema:tarife-hukuku" }
  ],
  sermaye: [
    { hedef: "sirket:enflame", tutar_musd: 912, tip: "finansman", aciklama: "STAR IPO: 6,12 mlr yuan / ~912 mn $, 43,04 mn hisse @ 142,18 yuan" },
    { hedef: "sirket:oracle", tutar_musd: 20000, tip: "finansman", aciklama: "Q1 FY27'de tamamlanan 20 mlr $ ATM hisse satışı — AI capex programı" },
    { hedef: "sirket:console", tutar_musd: 500, tip: "ma", aciklama: "Palo Alto Networks satın alması — tutar tek kaynaklı TechCrunch aktarımı (teyit gerektirir)" }
  ]
});
