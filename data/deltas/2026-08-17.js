// 2026-08-17 — Pazartesi koşusu deltası (14 Ağu ~08:30 UTC sonrası + hafta sonu)
// Yalnızca yeni öğeler; kimlikler claude/harita-kimlikleri.md envanteriyle uyumlu.
window.DELTAS.push({
  tarih: "2026-08-17",
  rapor: "raporlar/gunluk/2026-08-17.html",
  dugumler: [
    { id: "sirket:berkshire", tur: "sirket", ad: "Berkshire Hathaway", kod: "BRK.B", sektor: ["sektor:finans-yatirim"], ulke: "ABD", borsa: "NYSE" },
    { id: "sirket:anysphere", tur: "sirket", ad: "Anysphere (Cursor)", sektor: ["sektor:yapay-zeka"], ozel: 1, ulke: "ABD" },
    { id: "sirket:stripe", tur: "sirket", ad: "Stripe", sektor: ["sektor:finans-yatirim"], ozel: 1, ulke: "ABD" },
    { id: "sirket:openrouter", tur: "sirket", ad: "OpenRouter", sektor: ["sektor:yapay-zeka"], ozel: 1, ulke: "ABD" },
    { id: "sirket:decart", tur: "sirket", ad: "Decart", sektor: ["sektor:yapay-zeka"], ozel: 1, ulke: "Israil" },
    { id: "sirket:higgsfield", tur: "sirket", ad: "Higgsfield", sektor: ["sektor:yapay-zeka"], ozel: 1, ulke: "ABD" },
    { id: "sirket:smic", tur: "sirket", ad: "SMIC", kod: "0981", sektor: ["sektor:yariiletken"], ulke: "Cin", borsa: "HKEX" }
  ],
  iliskiler: [
    { kaynak: "sirket:spacex", hedef: "sirket:anysphere", tur: "satin-alma", aciklama: "Anysphere (Cursor) satın alması 14 Ağustos'ta tamamlandı; ağırlıklı hisse bazlı", tutar_musd: 60000 },
    { kaynak: "sirket:stripe", hedef: "sirket:openrouter", tur: "satin-alma", aciklama: "AI model yönlendirme katmanı OpenRouter satın alındı (7 mlr $ üzeri)", tutar_musd: 7000 },
    { kaynak: "sirket:anthropic", hedef: "sirket:decart", tur: "satin-alma", aciklama: "İleri aşama görüşme ~7 mlr $ (çoğu hisse); Nvidia'nın teklifi geride kaldı (teyit gerektirir)", tutar_musd: 7000 },
    { kaynak: "sirket:berkshire", hedef: "sirket:alphabet", tur: "yatirim", aciklama: "Q2 13F: Alphabet A+C ~37,8 mlr $ ile üçüncü büyük pozisyon; A sınıfı +%45", tutar_musd: 37800 },
    { kaynak: "sirket:nvidia", hedef: "sirket:anthropic", tur: "rekabet", aciklama: "Decart için rakip teklif; Anthropic tercih edildi (teyit gerektirir)" }
  ],
  etkiler: [
    { sirket: "sirket:berkshire", yon: "pozitif", gerekce: "13F: 14 çeyreklik net satış serisi bitti, +19,8 mlr $ ile üç yılın en büyük net alım çeyreği", tema: "tema:enformasyon-asimetrisi" },
    { sirket: "sirket:alphabet", yon: "pozitif", gerekce: "Berkshire portföyünde A+C ~37,8 mlr $ ile üçüncü büyük pozisyon oldu", tema: "tema:enformasyon-asimetrisi" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "Anysphere kapanışına rağmen hisse −%3 (~137,5 $): 20 Ağustos'ta ~320 mn hisselik ikinci kilit tranşı arz baskısı yaratıyor", tema: "tema:enformasyon-asimetrisi" },
    { sirket: "sirket:anysphere", yon: "pozitif", gerekce: "SpaceX satın alması 60 mlr $ ile tamamlandı; Cursor dağıtımı Grok'a bağlanıyor" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "Q2 geliri 11,5 mlr $ üstü (~14x yıllık) + Decart'ta Nvidia'ya karşı tercih edildi; IPO öncesi güç gösterisi", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:decart", yon: "pozitif", gerekce: "Değerleme ~4 mlr $'dan ~7 mlr $'a; Anthropic ile imza 'gelecek ay' hedefleniyor (teyit gerektirir)", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:stripe", yon: "pozitif", gerekce: "OpenRouter ile 400+ modele yönlendirme ve ~8 mn geliştiriciye faturalama katmanını satın aldı" },
    { sirket: "sirket:openrouter", yon: "pozitif", gerekce: "Ocak'taki 1,3 mlr $ Series B'nin ~5 katına, 7 mlr $ üzerine satıldı" },
    { sirket: "sirket:higgsfield", yon: "pozitif", gerekce: "5,4 mlr $ değerlemeyle 400 mn $ tur (DST, Goldman Sachs, Intel); Ocak değerlemesinin 4 katı üstü", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:sandisk", yon: "pozitif", gerekce: "Ralli Cuma +~%7 ile sürdü; JPM 2.250 $ sokak-zirvesi hedef, NBM ~94 mlr $ TCV analist derlemesi (teyit gerektirir)", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "Bellek re-rating'inde Cuma +%2,7", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "ADR +%1,15; Kore piyasası Pazartesi tatil, akış testi Salı'ya kaldı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:smic", yon: "pozitif", gerekce: "%93,7 kapasite kullanımıyla fiyat artırdı; olgun düğümlerde de AI kıtlığı fiyat gücü üretiyor", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:applied-materials", yon: "negatif", gerekce: "Mükemmellik cezası ikinci güne taşındı: Cuma −%5,1; B. Riley 700 $ hedefle alım fırsatı dedi", tema: "tema:capex-cezasi" },
    { sirket: "sirket:broadcom", yon: "negatif", gerekce: "Yüksek-beta AI rotasyonunda Cuma −%5,3", tema: "tema:capex-cezasi" },
    { sirket: "sirket:cerebras", yon: "pozitif", gerekce: "OpenAI'nin GPT-5.6 Sol ultrafast önizlemesi (~750 token/sn) Cerebras donanımında çalışıyor", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:openai", yon: "notr", gerekce: "GPT-5.6 Sol ultrafast önizleme + Çinli modellere karşı fiyat indirimi; rekabet maliyet-başına-iş eksenine kaydı", tema: "tema:ai-fiyat-savasi" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "Decart'ta daha yüksek teklife rağmen Anthropic'e kaybetti; TSMC ile fab'lerde AI işbirliği duyurdu", tema: "tema:ai-fiyat-savasi" },
    { sirket: "sirket:apple", yon: "notr", gerekce: "Çin pazarı için Alibaba destekli özel AI modeli; yerelleşme stratejisi netleşti", tema: "tema:ihracat-kontrolleri" },
    { sirket: "sirket:workday", yon: "notr", gerekce: "Silver Lake görüşmeleri ~43 mlr $ değerleme bandında sürüyor (teyit gerektirir)" },
    { sirket: "sirket:aramco", yon: "notr", gerekce: "MoU'nun bitişiyle Hürmüz çerçevesiz kaldı; Jazan 30 Ağustos restart hedefi izlemede", tema: "tema:iran-enerji-riski" }
  ],
  sermaye: [
    { hedef: "sirket:anysphere", tutar_musd: 60000, tip: "ma", aciklama: "SpaceX-Anysphere (Cursor) satın alması tamamlandı (14 Ağu)" },
    { hedef: "sirket:openrouter", tutar_musd: 7000, tip: "ma", aciklama: "Stripe-OpenRouter satın alması (7 mlr $ üzeri)" },
    { hedef: "sirket:higgsfield", tutar_musd: 400, tip: "finansman", aciklama: "5,4 mlr $ değerlemeyle tur; DST, Goldman Sachs, Liberty Global, Intel" }
  ]
});
