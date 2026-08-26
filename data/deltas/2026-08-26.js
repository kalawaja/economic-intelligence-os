// Delta — 26 Ağustos 2026 günlük raporu (yalnızca yeni öğeler)
window.DELTAS = window.DELTAS || [];
window.DELTAS.push({
  tarih: "2026-08-26",
  rapor: "raporlar/gunluk/2026-08-26.html",
  dugumler: [
    { id: "sirket:ymtc", tur: "sirket", ad: "YMTC", ozel: 1, ulke: "Çin", sektor: ["sektor:bellek"] },
    { id: "sirket:intuit", tur: "sirket", ad: "Intuit", kod: "INTU", borsa: "NASDAQ", ulke: "ABD", sektor: ["sektor:kurumsal-bt"] }
  ],
  iliskiler: [
    { kaynak: "sirket:cisco", hedef: "sirket:super-micro", tur: "ortaklik", aciklama: "Nvidia'lı 'Secure AI Factory' ortaklığının genişletilmesi — SMCI Salı +%8" }
  ],
  etkiler: [
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "Yedi günlük kayıp serisi +%1,6 ile kırıldı; bilanço bu akşam — Q3 kılavuz eşiği ~104 milyar $, opsiyonlar ±%6,75 fiyatlıyor", tema: "tema:ai-capex" },
    { sirket: "sirket:amd", yon: "pozitif", gerekce: "Bilanço öncesi çip toparlanmasında analist notuyla +%4,8", tema: "tema:ai-capex" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "Pazartesi satışının ardından +%2 toparlandı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Kore toparlanmasının ikinci gününde ~+%1; Kospi +%2 ile 6.880'den kapandı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "V-dönüş kalıcılık testini geçti; Çarşamba ~+%1", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:ymtc", yon: "pozitif", gerekce: "4,9 milyar $'lık Şanghay STAR halka arz başvurusu; 200+ katman 3D NAND, NAND satışında küresel 3. / Çin'de 1.", tema: "tema:cin-bellek-rekabeti" },
    { sirket: "sirket:super-micro", yon: "pozitif", gerekce: "Cisco-Nvidia Secure AI Factory genişlemesiyle +%8", tema: "tema:ai-capex" },
    { sirket: "sirket:marvell", yon: "pozitif", gerekce: "27 Ağustos bilançosu öncesi özel-silikon beklentisiyle +%6,6", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:intuit", yon: "negatif", gerekce: "Q4'te gelir ve EPS beklentiyi geçmesine rağmen seans sonrası −%11'in üzerinde — yazılımda AI-rekabet/yıkım fiyatlaması (yıl başından beri −%43)", tema: "tema:ai-yikim-korkusu" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "Meta Hatch çok kaynaklı teyit edildi; Google TPU kurucusu Amir Salek transfer edildi; Fractile'a 250 mn $ sipariş imzalandı", tema: "tema:ajan-interneti" },
    { sirket: "sirket:meta", yon: "notr", gerekce: "Hatch lansmanı 'önümüzdeki haftalarda' (The Information); Instagram alışveriş asistanı yıl sonu hedefli", tema: "tema:ajan-interneti" },
    { sirket: "sirket:openai", yon: "notr", gerekce: "Broadcom'la geliştirilen özel çıkarım çipi 'Jalapeño' (700 W'ta 13,4 PFLOPs MXFP4) ortaya çıktı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:broadcom", yon: "pozitif", gerekce: "Jalapeño çipiyle 100 milyar $'a uzanan OpenAI paketinin donanım ayağı görünür oldu", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:spacex", yon: "pozitif", gerekce: "+%2,7 ile 138,65 $ — 135 $ halka arz referansının üzerine döndü; JPMorgan Overweight/240 $ (Cursor ~4 milyar $ yıllıklandırılmış gelir, Grok 4.6)" },
    { sirket: "sirket:moderna", yon: "pozitif", gerekce: "Faz 3 kanser aşısı verisi sonrası ralli sürdü: Salı +%10,5" },
    { sirket: "sirket:alcoa", yon: "notr", gerekce: "Kanada'nın 20 milyar $'lık erken misilleme paketi çelik vergilerini içeriyor — karşılıklı tarife katmanı kalınlaşıyor", tema: "tema:tarife-hukuku" },
    { sirket: "sirket:aramco", yon: "notr", gerekce: "Hürmüz koridor diplomasisiyle Brent 87 $'a geriledi; Jazan restart 30 Ağustos takviminde", tema: "tema:iran-enerji-riski" }
  ],
  sermaye: [
    { hedef: "sirket:ymtc", tutar_musd: 4900, tip: "finansman", aciklama: "Şanghay STAR halka arz başvurusu (33 milyar ¥ ≈ 4,9 milyar $); 20,8 milyar ¥ üretim hattı + 12,2 milyar ¥ ileri Ar-Ge" }
  ]
});
