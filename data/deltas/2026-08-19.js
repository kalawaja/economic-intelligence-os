// Delta — 19 Ağustos 2026 günlük raporu.
// Yalnızca yeni öğeler; mevcut düğümler yeniden bildirilmez.
window.DELTAS.push({
  tarih: "2026-08-19",
  rapor: "raporlar/gunluk/2026-08-19.html",
  dugumler: [
    { id: "sirket:seagate", tur: "sirket", ad: "Seagate", kod: "STX", sektor: ["sektor:veri-depolama"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:bytedance", tur: "sirket", ad: "ByteDance", sektor: ["sektor:teknoloji"], ozel: 1, ulke: "Çin" },
    { id: "sirket:tencent", tur: "sirket", ad: "Tencent", kod: "0700", sektor: ["sektor:teknoloji"], ulke: "Çin", borsa: "HKEX" }
  ],
  iliskiler: [
    { kaynak: "sirket:nvidia", hedef: "sirket:bytedance", tur: "tedarik", aciklama: "Pekin ~10 bin H200 sevkiyatına sınırlı izin verdi (19 Ağu)" },
    { kaynak: "sirket:nvidia", hedef: "sirket:tencent", tur: "tedarik", aciklama: "Pekin ~10 bin H200 sevkiyatına sınırlı izin verdi (19 Ağu)" }
  ],
  etkiler: [
    { sirket: "sirket:micron", yon: "negatif", gerekce: "WSJ'nin 3 trln $ bilanço-dışı AI taahhüdü raporu + 30Y %5,33 ile bellek tersinmesi: Salı −%6,9 (YTD +%255 sonrası kâr realizasyonu)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:sandisk", yon: "negatif", gerekce: "Bellek tersinmesinin en sert düşüşü: Salı −%9,1 (YTD +%653 sonrası); şirket haberi yok", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:western-digital", yon: "negatif", gerekce: "Bellek tersinmesi: Salı −%5,3 (YTD +%211 sonrası)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:seagate", yon: "negatif", gerekce: "Bellek/depolama tersinmesinde Salı −%7,9", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:sk-hynix", yon: "negatif", gerekce: "Kospi −%6,4 sidecar seansında −%9,3 (1.508.000 ₩); yabancı net satış ₩1,07 trln", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:samsung", yon: "negatif", gerekce: "Kospi sidecar seansında −%7,3 (249.000 ₩)", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:kioxia", yon: "negatif", gerekce: "Bellek tersinmesinin Japonya bacağı: −%10,3 (51.250 ¥); Nikkei −%2,8", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "OpenAI backstop'u 250→120 mlr $'a inip 5 GW fazla sınırlandı; Salı −%2,3; Pekin'den ByteDance/Tencent'e H200 izni pozitif karşı ağırlık", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:meta", yon: "negatif", gerekce: "1,4 trln $'lık federal gençlik güvenliği davası; Salı −%4,45" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "GS/MS/JPM öncülüğünde 10 mlr $+ IPO-öncesi döner kredi hattı; Decart pazarlığı 7 mlr $'a çıktı, imza hedefi Eylül başı", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:workday", yon: "pozitif", gerekce: "Silver Lake pazarlığı 51-54 mlr $ bandına büyüdü (227 $/hisse senaryosu ≈ 53,8 mlr $; teyit gerektirir)" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "319 mn hisselik kilit arifesinde −%2,9 (141,94 $); Pazartesi rallisi geri verildi" },
    { sirket: "sirket:bytedance", yon: "pozitif", gerekce: "Pekin'den ~10 bin H200 sevk izni; MPA ile Hollywood IP çerçeve anlaşması", tema: "tema:ihracat-kontrolleri" },
    { sirket: "sirket:tencent", yon: "pozitif", gerekce: "Pekin'den ~10 bin H200 sevk izni", tema: "tema:ihracat-kontrolleri" }
  ],
  sermaye: [
    { hedef: "sirket:anthropic", tutar_musd: 10000, tip: "finansman", aciklama: "IPO-öncesi döner kredi hattı 10 mlr $'ı aştı — Goldman Sachs, Morgan Stanley, JPMorgan öncülüğünde (~1,25'er mlr $)" }
  ]
});
