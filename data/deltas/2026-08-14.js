// Delta — 2026-08-14 günlük raporu
// Yalnızca bu raporla haritaya giren yeni öğeler.
window.DELTAS.push({
  tarih: "2026-08-14",
  rapor: "raporlar/gunluk/2026-08-14.html",
  dugumler: [
    { id: "sirket:workday", tur: "sirket", ad: "Workday", kod: "WDAY", sektor: ["kurumsal-bt"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:silver-lake", tur: "sirket", ad: "Silver Lake", sektor: ["finans-yatirim"], ozel: 1, ulke: "ABD" },
    { id: "sirket:cisco", tur: "sirket", ad: "Cisco Systems", kod: "CSCO", sektor: ["teknoloji"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:cerebras", tur: "sirket", ad: "Cerebras Systems", kod: "CBRS", sektor: ["yapay-zeka", "yariiletken"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:applied-materials", tur: "sirket", ad: "Applied Materials", kod: "AMAT", sektor: ["ekipman-eda"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:netflix", tur: "sirket", ad: "Netflix", kod: "NFLX", sektor: ["medya-spor"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:pershing-square", tur: "sirket", ad: "Pershing Square", sektor: ["finans-yatirim"], ozel: 1, ulke: "ABD" }
  ],
  iliskiler: [
    { kaynak: "sirket:silver-lake", hedef: "sirket:workday", tur: "satin-alma", aciklama: "Silver Lake, Workday'i borsadan çıkarmak için görüşmelerde (Reuters); gerçekleşirse yazılımda en büyük take-private — koşullar açıklanmadı (teyit gerektirir)" },
    { kaynak: "sirket:pershing-square", hedef: "sirket:netflix", tur: "yatirim", aciklama: "Pershing Square (Ackman), 13F'te Netflix'te milyarlarca dolarlık yeni pozisyon açıkladı; hisse +%3,7-4" },
    { kaynak: "sirket:alphabet", hedef: "sirket:spacex", tur: "yatirim", aciklama: "Alphabet 13F'i: SpaceX payı 94,18 milyar $ (551,19 milyon hisse) — yatırım portföyünün %95'i; orijinal yatırımdan +%8.000", tutar_musd: 94180 }
  ],
  etkiler: [
    { sirket: "sirket:sandisk", yon: "pozitif", gerekce: "Yatırımcı gününde NBM sözleşmeleri (8 müşteri; FY2027 bitlerinin ~%50'si taahhütlü) ve FY2030'a ~%80 brüt marj hedefi; hisse +%15-16", tema: "nand-dongu-riski" },
    { sirket: "sirket:western-digital", yon: "pozitif", gerekce: "SanDisk NBM yeniden fiyatlamasının sempati hareketiyle +%10", tema: "nand-dongu-riski" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "Bellek kompleksinin NBM kaynaklı yeniden fiyatlamasında +%6,7", tema: "bellek-kitligi" },
    { sirket: "sirket:kioxia", yon: "pozitif", gerekce: "SanDisk'le ortak 9. nesil 2-terabit QLC 3D flash duyurusu (+%33 bant genişliği)", tema: "bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "ADR +%8; Seul'de +%3,26 (1.650.000 won) — Kospi 7.000'i görüp haftayı +%11,5 kapattı", tema: "kore-oynakligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "+%2,4 (274.500 won) ile beşinci yükseliş gününe katıldı", tema: "kore-oynakligi" },
    { sirket: "sirket:cisco", yon: "negatif", gerekce: "Rekor gelir ve güçlü kılavuza rağmen marj endişesiyle −%9 — 'mükemmellik fiyatlandı' cezası ağ donanımına yayıldı" },
    { sirket: "sirket:applied-materials", yon: "notr", gerekce: "Rekor FQ3 (9,115 mlr $, +%25) ve ileri paketlemede >%70 büyüme kılavuzu; yatay marj kılavuzuyla seans sonrası −%4,9", tema: "paketleme-darbogazi" },
    { sirket: "sirket:cerebras", yon: "negatif", gerekce: "Beklenti üstü Q2 ve yükseltilen kılavuza rağmen seans sonrası −%17; donanım satışları 'lumpy'" },
    { sirket: "sirket:workday", yon: "pozitif", gerekce: "Silver Lake'in satın alma görüşmeleri haberiyle +%18 — tarihinin en iyi günü" },
    { sirket: "sirket:netflix", yon: "pozitif", gerekce: "Pershing Square'in yeni pozisyon açıklamasıyla +%3,7-4" },
    { sirket: "sirket:spacex", yon: "pozitif", gerekce: "İlk kilit açılış testi ~500 milyar $'lık ralliyle geçildi; sıradaki tranş 21 Ağustos (~42,5 milyar $)" },
    { sirket: "sirket:alphabet", yon: "pozitif", gerekce: "13F, SpaceX payını 94,18 milyar $ olarak netleştirdi — portföyün %95'i, +%8.000 değerlenme" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "İsrailli Decart AI'ı ~6 milyar $'a satın almak için görüşüyor (teyit gerektirir) — olası halka arz öncesi portföy genişletme", tema: "ai-ipo-yarisi" },
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "L&T, Chennai'de 10.000 B300'lük küme için 1,57 milyar $'a kadar kontrat aldı — Hindistan'ın en büyük tek-küme kurulumu", tema: "ai-capex" },
    { sirket: "sirket:microsoft", yon: "negatif", gerekce: "Çin varlığını ~15 şube kapatarak/geri çekilerek küçülttü (teyit gerektirir)", tema: "ihracat-kontrolleri" },
    { sirket: "sirket:uber", yon: "negatif", gerekce: "Uber Freight'te yetkisiz erişim; saldırganlar 1 milyon dosya indirdiklerini iddia ediyor" }
  ],
  sermaye: []
});
