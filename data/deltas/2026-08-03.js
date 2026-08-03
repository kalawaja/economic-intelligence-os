window.DELTAS.push({
  tarih: "2026-08-03",
  rapor: "raporlar/gunluk/2026-08-03.md",
  dugumler: [
    { id: "sirket:cxmt", tur: "sirket", ad: "CXMT (ChangXin Memory)", kod: null, sektor: ["sektor:bellek"] },
    { id: "sirket:trump-media", tur: "sirket", ad: "Trump Media & Technology", kod: "DJT", sektor: ["sektor:medya-spor"] },
    { id: "tema:cin-bellek-rekabeti", tur: "tema", ad: "Çin bellek rekabeti (CXMT)" },
    { id: "tema:ai-yetenek-sicramasi", tur: "tema", ad: "AI yetenek sıçraması (Astra/sınır modeller)" },
    { id: "tema:enformasyon-asimetrisi", tur: "tema", ad: "Başkanlık iletişimi & enformasyon asimetrisi" }
  ],
  iliskiler: [
    { kaynak: "sirket:cxmt", hedef: "sirket:sk-hynix", tur: "rekabet", aciklama: "9,8 milyar $ IPO sonrası küresel bellek pazarında doğrudan rekabete hazırlanıyor" },
    { kaynak: "sirket:cxmt", hedef: "sirket:samsung", tur: "rekabet", aciklama: "Çin bellek şampiyonu, DRAM'de küresel devlerle rekabet aşamasına geçiyor" },
    { kaynak: "sirket:cxmt", hedef: "sirket:micron", tur: "rekabet", aciklama: "Bellek kıtlığı tezinin orta vadeli arz cevabı Çin'den; ihracat kontrolleri sınırlayıcı değişken" }
  ],
  etkiler: [
    { sirket: "sirket:samsung", yon: "negatif", gerekce: "Hisse −%8,2 (241.000 won), Kospi −%4,9; Shinhan hedef fiyatı 590.000→450.000 won'a indirdi — aşırı yoğun pozisyonlanma çözülüyor", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:sk-hynix", yon: "negatif", gerekce: "Hisse −%7,9 (1.582.000 won); hedef indirimi 4,2M→2,7M won; yabancılar Kore'de net 1,11 trilyon won sattı", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:openai", yon: "pozitif", gerekce: "Astra 10 açık matematik problemini çözdü (Lean 4 makine-doğrulanabilir kanıt, ~2.000 $ compute); Washington'da karar vericilere gösterildi", tema: "tema:ai-yetenek-sicramasi" },
    { sirket: "sirket:anthropic", yon: "notr", gerekce: "Cuma günü tek kaynaklı denen güvenlik ifşası teyit edildi: 141.006 test koşusunda 3 sızma, açık kalan internet bağlantısı kaynaklı; METR bağımsız incelemesi başladı", tema: "tema:ai-guvenlik" },
    { sirket: "sirket:cxmt", yon: "pozitif", gerekce: "9,8 milyar $ Şanghay IPO'su sonrası +%466 açılış; Çin'de kote en değerli şirket oldu", tema: "tema:cin-bellek-rekabeti" },
    { sirket: "sirket:trump-media", yon: "notr", gerekce: "~100.000 $/ay'lık hızlı veri servisi 1 Ağustos'ta canlıya geçti; Warren-Schiff SEC soruşturma çağrısı yaptı", tema: "tema:enformasyon-asimetrisi" }
  ],
  sermaye: [
    { hedef: "sirket:cxmt", tutar_musd: 9800, tip: "finansman", aciklama: "Şanghay halka arzı (Asya'nın 2026'daki en büyük IPO'su)" }
  ]
});
