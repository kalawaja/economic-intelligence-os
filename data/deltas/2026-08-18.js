// Delta — 18 Ağustos 2026 günlük raporu
window.DELTAS.push({
  tarih: "2026-08-18",
  rapor: "raporlar/gunluk/2026-08-18.html",
  dugumler: [
    { id: "sirket:apr-energy", tur: "sirket", ad: "APR Energy", ozel: 1, ulke: "ABD", sektor: ["sektor:enerji-ekipman"] },
    { id: "sirket:groq", tur: "sirket", ad: "Groq", ozel: 1, ulke: "ABD", sektor: ["sektor:cip-tasarim"] },
    { id: "sirket:fabrinet", tur: "sirket", ad: "Fabrinet", kod: "FN", borsa: "NYSE", ulke: "Tayland", sektor: ["sektor:optik-ag"] },
    { id: "sirket:reddit", tur: "sirket", ad: "Reddit", kod: "RDDT", borsa: "NYSE", ulke: "ABD", sektor: ["sektor:reklam-teknoloji"] }
  ],
  iliskiler: [
    { kaynak: "sirket:spacex", hedef: "sirket:apr-energy", tur: "satin-alma", aciklama: "Mobil gaz türbini filosu (20-500 MW); AI veri merkezi gücü — Temmuz 2026, halka arz dosyasıyla belgelendi", tutar_musd: 1000 },
    { kaynak: "sirket:anthropic", hedef: "sirket:spacex", tur: "tedarik", aciklama: "Colossus 1 kapasite kirası: ayda 1,25 mlr $ (~15 mlr $/yıl; xAI parkının ~%11'i; SEC dosyası)", tutar_musd: 15000 },
    { kaynak: "sirket:nvidia", hedef: "sirket:openai", tur: "yatirim", aciklama: "Ohio ~10 GW kampüsü için borç garantisi (backstop) — 105 mlr $'a kadar (teyit gerektirir)", tutar_musd: 105000 },
    { kaynak: "sirket:spacex", hedef: "sirket:tesla", tur: "tedarik", aciklama: "Colossus için Megapack batarya alımı", tutar_musd: 269 }
  ],
  etkiler: [
    { sirket: "sirket:ge-vernova", yon: "pozitif", gerekce: "Türbin kıtlığı: üretim 50→70-80 adet/yıl'a çıkıyor; SpaceX'in 2,8 mlr $ taahhüdü talebi kalınlaştırıyor", tema: "tema:turbin-kitligi" },
    { sirket: "sirket:siemens-energy", yon: "pozitif", gerekce: "1 mlr $ kapasite yatırımı, tesisler 7/24; türbin bekleme süreleri 1-7 yıl", tema: "tema:turbin-kitligi" },
    { sirket: "sirket:mitsubishi-heavy", yon: "pozitif", gerekce: "2028'e dek türbin çıktısını ikiye katlama planı; fiyatlar 600 $/kW'a gidiyor", tema: "tema:turbin-kitligi" },
    { sirket: "sirket:tesla", yon: "pozitif", gerekce: "SpaceX'e 269 mn $ Megapack satışı — veri merkezi enerji zincirinde batarya bacağı", tema: "tema:veri-merkezi-enerji" },
    { sirket: "sirket:spacex", yon: "pozitif", gerekce: "Anthropic kirası (15 mlr $/yıl) + AI segmenti +%247; hisse 150 $ eşiğinde — 20 Ağu kilidi (319 mn hisse) test", tema: "tema:veri-merkezi-enerji" },
    { sirket: "sirket:anthropic", yon: "notr", gerekce: "Colossus 1 kirası ayda 1,25 mlr $: kapasite kazanımı ↔ ağır kira yükümlülüğü (SEC dosyası)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "OpenAI'ye 105 mlr $ backstop + portföyün %47'si (~30 mlr $) Intel'de — bilanço bağları yoğunlaşıyor", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:openai", yon: "pozitif", gerekce: "Ohio 10 GW kampüs finansmanı Nvidia garantisiyle güvenceye alındı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:intel", yon: "pozitif", gerekce: "Nvidia 13F: ~30 mlr $ pozisyon; Pazartesi +%1,4", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:groq", yon: "negatif", gerekce: "Down round: 350 mn $ tur, değerleme 6,9→3,5 mlr $ (−%49)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:cerebras", yon: "pozitif", gerekce: "GPT-5.6 Sol Ultrafast'ın münhasır hesaplama omurgası (Wedbush); Pazartesi +%15,3", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:anysphere", yon: "pozitif", gerekce: "Cursor Origin lansmanı: AI ajanları için kod barındırma — satın alma sonrası ilk ürün", tema: "tema:ajan-interneti" },
    { sirket: "sirket:sandisk", yon: "pozitif", gerekce: "Lutnick'in Apple-Çin bellek engeli + NBM tabanı 93,9 mlr $ (ikinci kaynak); Pazartesi +%10", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "BofA olumlu notu; Pazartesi +%4,7-6", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:western-digital", yon: "pozitif", gerekce: "Bellek rallisinde +%6", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Kospi tatil dönüşünde +%6,3; yabancı net alımı ₩430 mlr", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "Kospi 7.100 üstü; +%3,3", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:cxmt", yon: "negatif", gerekce: "Lutnick: Apple, CXMT/YMTC'den bellek almasın — Çin ikamesi fiilen kapanıyor", tema: "tema:cin-bellek-rekabeti" },
    { sirket: "sirket:apple", yon: "negatif", gerekce: "Çin bellek tedarik planına Washington engeli (kural yok, beyan var)", tema: "tema:ihracat-kontrolleri" },
    { sirket: "sirket:applied-materials", yon: "pozitif", gerekce: "Pazartesi +%5,9 — mükemmellik cezası satışı kesildi (B. Riley alım çağrısı)", tema: "tema:capex-cezasi" },
    { sirket: "sirket:fabrinet", yon: "negatif", gerekce: "Rekor Q4 (+%45 gelir) ve güçlü kılavuza rağmen −%5,2 — mükemmellik cezası optik zincire sıçradı", tema: "tema:capex-cezasi" },
    { sirket: "sirket:alphabet", yon: "notr", gerekce: "Berkshire eki 17 mlr $ netleşti; Burry karşı tezi — 200 mlr $ AI capex sınavı", tema: "tema:ai-capex" },
    { sirket: "sirket:berkshire", yon: "notr", gerekce: "Alphabet pozisyonu piyasada tartışılıyor; Alphabet-SpaceX zinciriyle dolaylı maruziyet", tema: "tema:ai-capex" },
    { sirket: "sirket:reddit", yon: "pozitif", gerekce: "18 Ağustos'ta S&P 500'e resmi giriş — pasif fon akışı" }
  ],
  sermaye: [
    { hedef: "sirket:apr-energy", tutar_musd: 1000, tip: "ma", aciklama: "SpaceX'in APR Energy satın alması (Temmuz 2026; halka arz dosyasıyla belgelendi)" },
    { hedef: "sirket:spacex", tutar_musd: 2800, tip: "capex", aciklama: "3 yılda doğal gaz türbini taahhüdü (805 mn $ sipariş verildi; hedef 20 GW/2027)" },
    { hedef: "sirket:groq", tutar_musd: 350, tip: "finansman", aciklama: "Down round: 3,5 mlr $ değerleme (önceki 6,9 mlr $)" },
    { hedef: "sirket:openai", tutar_musd: 105000, tip: "finansman", aciklama: "Nvidia backstop — Ohio veri merkezi borç garantisi (teyit gerektirir)" }
  ]
});
