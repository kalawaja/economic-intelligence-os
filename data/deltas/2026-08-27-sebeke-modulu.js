window.DELTAS.push({
  tarih: "2026-08-27",
  rapor: "raporlar/moduller/sebeke-guvenligi-eo-14420.html",
  dugumler: [
    { id: "sirket:catl", tur: "sirket", ad: "CATL", kod: "300750", sektor: ["sektor:depolama"], ulke: "Çin", borsa: "SZSE" },
    { id: "sirket:lg-energy", tur: "sirket", ad: "LG Energy Solution", kod: "373220", sektor: ["sektor:depolama"], ulke: "Güney Kore", borsa: "KRX" },
    { id: "sirket:hyosung-heavy", tur: "sirket", ad: "Hyosung Heavy Industries", kod: "298040", sektor: ["sektor:enerji-ekipman"], ulke: "Güney Kore", borsa: "KRX" },
    { id: "sirket:cleveland-cliffs", tur: "sirket", ad: "Cleveland-Cliffs", kod: "CLF", sektor: ["sektor:sanayi-malzeme"], ulke: "ABD", borsa: "NYSE" }
  ],
  iliskiler: [
    { kaynak: "sirket:catl", hedef: "sirket:tesla", tur: "tedarik", aciklama: "Megapack (Lathrop, 10.000 ünite/yıl) LFP hücreleri — EO 14420 + FEOC + DoD 1260H maruziyeti" },
    { kaynak: "sirket:lg-energy", hedef: "sirket:tesla", tur: "tedarik", aciklama: "ABD üretimli LFP hücre sözleşmesi (~4 mlr $ — tek kaynak, teyit gerektirir); CATL'den menşe geçişi", tutar_musd: 4000 },
    { kaynak: "sirket:cleveland-cliffs", hedef: "sirket:hitachi", tur: "tedarik", aciklama: "GOES (tane-yönlü elektrik çeliği) — ABD'de tek üretici; FAR 'ABD üretimli' önceliği malzeme katmanına iner" },
    { kaynak: "sirket:hyosung-heavy", hedef: "sirket:siemens-energy", tur: "rekabet", aciklama: "ABD LPT pazarı: Kore marjinal tedarikçi; Hyosung Memphis 765 kV (teyit gerektirir) vs Siemens Energy Charlotte" }
  ],
  etkiler: [
    { sirket: "sirket:catl", yon: "negatif", gerekce: "EO 14420 BESS'i yasaklanabilir ekipman sınıfına aldı; DoD 1260H (2027) + FEOC ile üçlü dışlama", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:lg-energy", yon: "pozitif", gerekce: "ABD üretimli LFP — Megapack menşe geçişinin ana adayı; FEOC-uyumlu hücre kıtlığında fiyatlama gücü", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:hyosung-heavy", yon: "pozitif", gerekce: "LPT ithalatında Kore marjinal tedarikçi; Memphis 765 kV tesisi", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:cleveland-cliffs", yon: "pozitif", gerekce: "GOES tek yerli üretici; trafo kapasite yatırımları + FAR önceliği", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:caterpillar", yon: "notr", gerekce: "Yedek jeneratörler kapsamda: FAR önceliği lehte, alt bileşen menşe incelemesi aleyhte", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:cummins", yon: "notr", gerekce: "Yedek güç: aynı ikili etki", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:nextera", yon: "notr", gerekce: "BESS geliştirici maliyeti ↑ (Paducah 2,6 GW), mevcut varlık primi ↑", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:vistra", yon: "notr", gerekce: "Nükleer+gaz+batarya karması — batarya halkasında menşe maliyeti", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:rwe", yon: "notr", gerekce: "ABD BESS portföyü — FEOC + EO çifte kilit", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:dominion", yon: "notr", gerekce: "Virginia şebekesi: uyum maliyeti vs tarife geçişi; Loudoun yükü", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:mitsubishi-heavy", yon: "pozitif", gerekce: "Türbin halkası: Çin girişi kapandı, müttefik oligopol korundu", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:maverick-power", yon: "pozitif", gerekce: "ABD üretimli güç ekipmanı — nVent altında FAR önceliği", tema: "tema:sebeke-guvenligi" },
    { sirket: "sirket:samsung", yon: "notr", gerekce: "Samsung SDI (iştirak) ABD hücre kapasitesi — Çin malzeme bağımlılığı sürüyor", tema: "tema:sebeke-guvenligi" }
  ],
  sermaye: [
    { hedef: "sirket:hitachi", tutar_musd: 1000, tip: "capex", aciklama: "Hitachi Energy ABD trafo yatırımı 1+ mlr $ (South Boston VA 2028 — en büyük LPT tesisi; Alamo TN bileşen)" },
    { hedef: "sirket:siemens-energy", tutar_musd: 421, tip: "capex", aciklama: "Charlotte NC trafo fabrikası (LPT üretimi 2026-27)" },
    { hedef: "sirket:eaton", tutar_musd: 340, tip: "capex", aciklama: "Üç fazlı trafo tesisi (ABD)" },
    { hedef: "sirket:ge-vernova", tutar_musd: 0, tip: "ma", aciklama: "Prolec GE satın alması tamamlandı (2026 başı) — Kuzey Amerika trafo kapasitesi; tutar açıklanmadı" }
  ]
});
