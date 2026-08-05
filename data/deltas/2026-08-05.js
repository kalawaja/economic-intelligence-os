window.DELTAS.push({
  tarih: "2026-08-05",
  rapor: "raporlar/gunluk/2026-08-05.md",
  dugumler: [
    { id: "sirket:sandisk", tur: "sirket", ad: "SanDisk", kod: "SNDK", sektor: ["sektor:depolama"] },
    { id: "sirket:perplexity", tur: "sirket", ad: "Perplexity", kod: null, ozel: true, sektor: ["sektor:yapay-zeka"] },
    { id: "sirket:ea", tur: "sirket", ad: "Electronic Arts", kod: null, ozel: true, sektor: ["sektor:medya-spor"] },
    { id: "sirket:pif", tur: "sirket", ad: "PIF (Suudi Kamu Yatırım Fonu)", kod: null, ozel: true, sektor: ["sektor:finans-yatirim"] },
    { id: "tema:capex-cezasi", tur: "tema", ad: "Capex cezası (sermaye disiplini baskısı)" },
    { id: "tema:ai-ajan-hukuku", tur: "tema", ad: "AI ajan hukuku (CFAA/agentic commerce)" }
  ],
  iliskiler: [
    { kaynak: "sirket:sk-hynix", hedef: "sirket:sandisk", tur: "ortaklik", aciklama: "FMS 2026'da ilk HBF (High Bandwidth Flash) standart spesifikasyonu; OCP üzerinden, Google ve Tenstorrent destekçi" },
    { kaynak: "sirket:pif", hedef: "sirket:ea", tur: "satin-alma", tutar_musd: 55000, aciklama: "55 milyar $'lık go-private 4 Ağustos'ta kapandı: PIF %93,4, Silver Lake %5,5, Affinity %1,1" },
    { kaynak: "sirket:spacex", hedef: "sirket:anthropic", tur: "tedarik", aciklama: "AI compute kapasitesi kiralama; SpaceX AI geliri Q2'de 2,6 milyar $ (+%247)" },
    { kaynak: "sirket:spacex", hedef: "sirket:alphabet", tur: "tedarik", aciklama: "Google'a compute kapasitesi kiralama; ikinci yarı için toplam 6,7 milyar $'lık bulut sözleşmesi" },
    { kaynak: "sirket:perplexity", hedef: "sirket:amazon", tur: "rekabet", aciklama: "Comet ajanı davası: 9. Daire, Amazon'un CFAA tedbirini bozdu; ajan Amazon'da yeniden çalışabilecek" }
  ],
  etkiler: [
    { sirket: "sirket:amd", yon: "notr", gerekce: "Q2 gelir 11,54 milyar $ (+%52), veri merkezi +%107 ve Q3 öngörüsü beklenti üstü; ancak %54 brüt marj ve Helios rampası endişesiyle hisse seans sonrası ~%8 düştü", tema: "tema:capex-cezasi" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "İlk bilançoda gelir +%92 ile beklenti üstü ama 18,4 milyar $ capex beklentiyi aştı; hisse seans sonrası %5-8 düştü, ~116 milyar $'lık lockup 6 Ağustos'ta açılıyor", tema: "tema:capex-cezasi" },
    { sirket: "sirket:palantir", yon: "pozitif", gerekce: "Bilanço sonrası ilk tam seansta +%29,45 kapanış; uygulama katmanı tezi piyasa genelinde fiyatlandı", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "+%5,77 (1.668.000 won) toparlanma; SanDisk ile HBF standardının ilk spesifikasyonunu yayımlayarak AI çıkarım belleğinde standart-koyucu konum aldı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "Kospi +%3,76'lık toparlanmada +%2,5 (246.000 won); tetikleyici ABD momentumu, bellek spot fiyat sorusu ise henüz açık", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:softbank", yon: "pozitif", gerekce: "SoftBank Corp Q1'de bulut/AI geliri +%31, kâr +%27,5; Group hissesi Tokyo'da +%13,96", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:perplexity", yon: "pozitif", gerekce: "9. Daire kararıyla Comet ajanı Amazon'da yeniden çalışabilecek; CFAA'nın AI ajanlarına uygulanmasını daraltan ilk federal temyiz emsali", tema: "tema:ai-ajan-hukuku" },
    { sirket: "sirket:amazon", yon: "negatif", gerekce: "9. Daire, Perplexity'nin Comet ajanını engelleyen CFAA tedbirini bozdu; platformun ajan trafiğini engelleme gücü zayıfladı", tema: "tema:ai-ajan-hukuku" },
    { sirket: "sirket:ea", yon: "notr", gerekce: "55 milyar $'lık özelleşme tamamlandı; PIF kontrolünde yeni dönem, bilançoya ~20 milyar $ borç biniyor", tema: "tema:enformasyon-asimetrisi" }
  ],
  sermaye: [
    { hedef: "sirket:ea", tutar_musd: 55000, tip: "ma", aciklama: "PIF liderliğindeki konsorsiyumun go-private işlemi 4 Ağustos'ta tamamlandı (tarihin en büyük kaldıraçlı satın alması)" },
    { hedef: "sirket:spacex", tutar_musd: 18400, tip: "capex", aciklama: "Q2 2026 sermaye harcaması; 16 milyar $'ı AI compute altyapısına" }
  ]
});
