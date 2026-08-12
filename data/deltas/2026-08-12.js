// Delta — 12 Ağustos 2026 günlük raporu (yalnızca yeni öğeler)
window.DELTAS.push({
  tarih: "2026-08-12",
  rapor: "raporlar/gunluk/2026-08-12.html",
  dugumler: [
    { id: "sirket:temasek", tur: "sirket", ad: "Temasek", sektor: ["finans-yatirim"], ozel: 1, ulke: "Singapur" },
    { id: "sirket:coreweave", tur: "sirket", ad: "CoreWeave", kod: "CRWV", sektor: ["hyperscaler", "yapay-zeka"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:super-micro", tur: "sirket", ad: "Super Micro", kod: "SMCI", sektor: ["kurumsal-bt"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:joby", tur: "sirket", ad: "Joby Aviation", kod: "JOBY", sektor: ["savunma-uzay"], ulke: "ABD", borsa: "NYSE" },
    { id: "sirket:resonant-sciences", tur: "sirket", ad: "Resonant Sciences", sektor: ["savunma-uzay"], ozel: 1, ulke: "ABD" }
  ],
  iliskiler: [
    { kaynak: "sirket:temasek", hedef: "sirket:samsung", tur: "yatirim", aciklama: "Temasek, Kore borsasına ilk kez doğrudan hisse alımıyla giriyor; Samsung alımı Kore makamlarıyla koordineli (tutar açıklanmadı)" },
    { kaynak: "sirket:temasek", hedef: "sirket:sk-hynix", tur: "yatirim", aciklama: "Temasek'in doğrudan SK Hynix hissesi alma kararı; HBM/NAND liderliği gerekçeli (tutar açıklanmadı)" },
    { kaynak: "sirket:joby", hedef: "sirket:resonant-sciences", tur: "satin-alma", aciklama: "Joby, savunma teknolojisi üreticisi Resonant Sciences'ı ~500 mn $'a alıyor (TTM gelir 100 mn $+, ~%40 büyüme)", tutar_musd: 500 },
    { kaynak: "sirket:coreweave", hedef: "sirket:nvidia", tur: "tedarik", aciklama: "CoreWeave'in ~104 mlr $ backlog'lu AI bulut modeli Nvidia GPU tedarikine dayanıyor; 'hesaplama finansmanı' teminat havuzunun taban varlığı" }
  ],
  etkiler: [
    { sirket: "sirket:lumentum", yon: "pozitif", gerekce: "FQ4 gelir +%109,3 (1,01 mlr $), FQ1 kılavuzu konsensüsün belirgin üstünde; hedef modele bir çeyrek erken ulaştı — ama hisse tepkisi yatay: mükemmellik fiyatlanmış", tema: "tema:ai-capex" },
    { sirket: "sirket:coherent", yon: "notr", gerekce: "FQ4 bu akşam; Pazartesi −%12 ön-boşaltması sonrası optikte 'mükemmellik fiyatlandı' rejiminin asıl testi", tema: "tema:ai-capex" },
    { sirket: "sirket:coreweave", yon: "pozitif", gerekce: "Q2 gelir 2,58 mlr $ (yıllık ~2x), backlog ~104 mlr $; hisse seans sonrası +%12-16", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:super-micro", yon: "pozitif", gerekce: "Cari çeyrek kılavuzu 14,5-15,5 mlr $ ile konsensüsü ezdi; FY26'da 60 mlr $+ yeni sipariş, rekor backlog", tema: "tema:ai-capex" },
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "Huang'ın 'proje başına %25 sınırı' açıklaması sonrası 2056 vadeli tahvil spreadleri daraldı; kredi piyasası platform yapısını risk azaltıcı okudu", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "Temasek'in doğrudan alım kararıyla +%6,68 (255.500 won); Kospi +%4,57 ile rekor bölgesi", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Temasek haberiyle +%5,54 (1.504.000 won); ABD kotasyonu Salı +%4,7 ile bellek rallisine öncülük etmişti", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:temasek", yon: "notr", gerekce: "518 mlr SGD'lik fon Kore belleğine ilk doğrudan girişini Samsung/SK Hynix ile yapıyor; zamanlama Kore makamlarıyla koordineli", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:alphabet", yon: "negatif", gerekce: "25 mlr $ tahvil ihracı + 195-205 mlr $ capex kılavuzu + negatif FCF ile −%3,6 (~6 ayın en sert kaybı); Berkshire alım fiyatının altına indi", tema: "tema:capex-cezasi" },
    { sirket: "sirket:intel", yon: "notr", gerekce: "Hisse ihracı güçlü taleple 15 mlr $'dan 20 mlr $'a büyütüldü (95 $/hisse, ~%6,5 iskonto); sulandırma arttı ama arz tarafında derin talep", tema: "tema:ai-capex" },
    { sirket: "sirket:aramco", yon: "negatif", gerekce: "Jazan restart'ı 30 Ağustos'a ertelendi; tesis 27 Temmuz'dan beri kapalı, Suudi yakıt ihracatı savaş öncesinin ~%30 altında", tema: "tema:iran-enerji-riski" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "Kilit açılışı sonrası −%3,9 (133,29 $); çeyreklik capex 18,37 mlr $, FCF −16,8 mlr $, perakende ilk kez net satıcı", tema: "tema:capex-cezasi" },
    { sirket: "sirket:joby", yon: "pozitif", gerekce: "Resonant Sciences alımıyla savunma gelirine pivot; Archer'ın Wisk/Insitu hamlesinden bir gün sonra ikinci eVTOL-savunma vakası", tema: "tema:savunma-neo-prime" }
  ],
  sermaye: [
    { hedef: "sirket:intel", tutar_musd: 20000, tip: "finansman", aciklama: "Hisse ihracı 95 $/hisseden 20 mlr $'a büyütülüp fiyatlandı (~210,5 mn hisse; dünkü 15 mlr $ kaydının revizyonu; +31,6 mn hisse opsiyonu)" },
    { hedef: "sirket:resonant-sciences", tutar_musd: 500, tip: "ma", aciklama: "Joby Aviation'ın Resonant Sciences satın alması (~500 mn $)" },
    { hedef: "sirket:alphabet", tutar_musd: 25000, tip: "finansman", aciklama: "AI altyapısı için 25 mlr $'lık kıdemli tahvil ihracı tamamlandı" }
  ]
});
