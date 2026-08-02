window.DELTAS.push({
  tarih: "2026-07-31",
  rapor: "raporlar/gunluk/2026-07-31.md",
  dugumler: [
    { id: "sirket:intel", tur: "sirket", ad: "Intel", kod: "INTC", sektor: ["sektor:uretim-dokum"] },
    { id: "tema:ai-fiyat-savasi", tur: "tema", ad: "AI fiyat savaşı / model komoditileşmesi" },
    { id: "tema:paketleme-darbogazi", tur: "tema", ad: "Paketleme darboğazı (CoWoS)" },
    { id: "tema:kritik-mineraller", tur: "tema", ad: "Kritik mineral politikası (Project Vault)" },
    { id: "tema:iran-enerji-riski", tur: "tema", ad: "İran gerilimi & enerji fiyat riski" },
    { id: "tema:kore-oynakligi", tur: "tema", ad: "Kore piyasası oynaklığı (kaldıraçlı HBM)" }
  ],
  iliskiler: [
    { kaynak: "sirket:tsmc", hedef: "sirket:intel", tur: "rekabet", aciklama: "TSMC, Intel'in gelişmiş paketleme üstünlüğüne meydan okuyan teknoloji geliştiriyor" }
  ],
  etkiler: [
    { sirket: "sirket:amazon", yon: "pozitif", gerekce: "Hisse +%11-13: AWS +%37 (beklenti %31); 220 milyar $ capex — Microsoft'u da geçti; model katmanında ise Nova rafa kalktı", tema: "tema:ai-capex" },
    { sirket: "sirket:apple", yon: "negatif", gerekce: "Hisse −%5-7: Servisler ve Çin zayıf; yükselen bellek fiyatları 4. çeyrek öngörüsünü düşürdü — kıtlığın ilk büyük kurbanı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:alphabet", yon: "pozitif", gerekce: "Alphabet+Amazon+Microsoft bu hafta birlikte ~1,5 trilyon $ değer ekledi", tema: "tema:ai-capex" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Hisse +%30 (tavan); SK Group Başkanı Chey Tae-won'un hisse alımı güven sinyali", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "Hisse +%27-28; Kospi tarihi rekor günlük kazanç (+%17,9)", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:tsmc", yon: "pozitif", gerekce: "Gelişmiş paketleme hamlesi + 2027'de %10'a varan fiyat artışı görüşmeleri", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:intel", yon: "pozitif", gerekce: "Paketleme rekabeti haberiyle hisse yükseldi; 18A/paketleme hamleleri", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:openai", yon: "notr", gerekce: "GPT-5.6 Luna girdi fiyatı %80 indirildi — pazar payı savunması ama model katmanında marj/komoditileşme riski", tema: "tema:ai-fiyat-savasi" },
    { sirket: "sirket:anthropic", yon: "notr", gerekce: "Amazon'un Nova'yı rafa kaldırması ortaklığın ağırlığını artırdı; güvenlik ifşası haberi tek kaynaklı, teyit gerektirir", tema: "tema:ai-guvenlik" },
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "AI fiyat savaşında değer altyapı katmanına kayıyor", tema: "tema:ai-fiyat-savasi" }
  ],
  sermaye: [
    { hedef: "sirket:amazon", tutar_musd: 220000, tip: "capex", aciklama: "2026 AI altyapı yatırımı (Jassy)" },
    { hedef: "sirket:sk-hynix", tip: "insider", aciklama: "SK Group Başkanı Chey Tae-won'un hisse alımı" }
  ]
});
