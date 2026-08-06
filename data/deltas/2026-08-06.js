window.DELTAS.push({
  tarih: "2026-08-06",
  rapor: "raporlar/gunluk/2026-08-06.md",
  dugumler: [
    { id: "sektor:e-ticaret", tur: "sektor", ad: "E-ticaret Platformu", ust: "sektor:teknoloji" },
    { id: "sektor:reklam-teknoloji", tur: "sektor", ad: "Reklam Teknolojisi", ust: "sektor:teknoloji" },
    { id: "sirket:western-digital", tur: "sirket", ad: "Western Digital", kod: "WDC", sektor: ["sektor:depolama"] },
    { id: "sirket:kioxia", tur: "sirket", ad: "Kioxia", kod: "285A", sektor: ["sektor:depolama"] },
    { id: "sirket:solidigm", tur: "sirket", ad: "Solidigm", kod: null, ozel: true, sektor: ["sektor:depolama"] },
    { id: "sirket:shopify", tur: "sirket", ad: "Shopify", kod: "SHOP", sektor: ["sektor:e-ticaret"] },
    { id: "sirket:applovin", tur: "sirket", ad: "AppLovin", kod: "APP", sektor: ["sektor:reklam-teknoloji"] },
    { id: "sirket:hubspot", tur: "sirket", ad: "HubSpot", kod: "HUBS", sektor: ["sektor:kurumsal-bt"] },
    { id: "sirket:disney", tur: "sirket", ad: "The Walt Disney Company", kod: "DIS", sektor: ["sektor:medya-spor"] },
    { id: "tema:tek-tedarikci-baglanmasi", tur: "tema", ad: "Tek tedarikçiye bağlanma (Nvidia münhasırlığı)" },
    { id: "tema:nand-dongu-riski", tur: "tema", ad: "NAND/depolama döngü ve fiyatlama riski" },
    { id: "tema:ai-yikim-korkusu", tur: "tema", ad: "AI'ın uygulama katmanını aşındırma korkusu" },
    { id: "tema:polisilikon-tabani", tur: "tema", ad: "Polisilikon tarifesi ve asgari ithalat fiyatı" }
  ],
  iliskiler: [
    { kaynak: "sirket:nvidia", hedef: "sirket:spacex", tur: "tedarik", aciklama: "Musk: SpaceX AI altyapısını yalnızca Nvidia Vera Rubin mimarisi üzerine kuracak; 2026 sonu 2 GW'ın üzerinde, 2027 sonu ~10 GW compute hedefi" },
    { kaynak: "sirket:nvidia", hedef: "sirket:amd", tur: "rekabet", aciklama: "SpaceX münhasırlık kararı sonrası 5 Ağustos'ta Nvidia +%4,80, AMD −%8; AMD'nin Helios adreslenebilir pazarı daralıyor" },
    { kaynak: "sirket:sk-hynix", hedef: "sirket:solidigm", tur: "yatirim", aciklama: "%100 sahip olunan ABD NAND/kurumsal SSD iştiraki; ~50 trilyon won değerlemeyle 10 trilyon won'a kadar ön-halka arz turu ve Nasdaq kotasyonu hazırlığı" }
  ],
  etkiler: [
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "Musk'ın SpaceX için 'yalnızca Nvidia' kararı sonrası hisse +%4,80; 2027'de ~10 GW'a çıkacak bir müşteri taahhüdü açıklandı", tema: "tema:tek-tedarikci-baglanmasi" },
    { sirket: "sirket:amd", yon: "negatif", gerekce: "SpaceX'in Nvidia münhasırlığı kararıyla 5 Ağustos'ta −%8; veri merkezi gelirinin 6,72 milyar $'a çıkması haberin gölgesinde kaldı", tema: "tema:tek-tedarikci-baglanmasi" },
    { sirket: "sirket:intel", yon: "negatif", gerekce: "SpaceX-Nvidia münhasırlık açıklaması sonrası hızlandırıcı rakipleriyle birlikte ~−%2 geriledi", tema: "tema:tek-tedarikci-baglanmasi" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "Capex endişesiyle 5 Ağustos'ta −%8; bugün ~911,5 milyon hisselik (≈116 milyar $) lockup açılıyor ve AI altyapısı tek tedarikçiye bağlandı", tema: "tema:capex-cezasi" },
    { sirket: "sirket:sandisk", yon: "negatif", gerekce: "Q4 geliri 8,97 milyar $ ve EPS 39,25 $ ile beklentiyi aştı ama gelecek çeyrek öngörüsü konsensüsün 610 milyon $ altında kaldı; seans sonrası −%8", tema: "tema:nand-dongu-riski" },
    { sirket: "sirket:western-digital", yon: "negatif", gerekce: "Geliri 3,75 milyar $ ve EPS 3,56 $ ile beklenti üstü; 4,10 milyar $'lık öngörü orta noktası hayal kırıklığı yarattı, seans sonrası −%14", tema: "tema:nand-dongu-riski" },
    { sirket: "sirket:sk-hynix", yon: "negatif", gerekce: "Depolama öngörü şokuyla 6 Ağustos'ta −%10,37 (1.495.000 won); yabancı yatırımcı Kospi'de 3,35 trilyon won net satış yaptı", tema: "tema:nand-dongu-riski" },
    { sirket: "sirket:samsung", yon: "negatif", gerekce: "Kospi'nin −%4,59'luk düşüşünde −%6,30 (230.500 won); satış endeks geneline değil ağır sıklet yarıiletken pozisyonlarına yoğunlaştı", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:kioxia", yon: "negatif", gerekce: "SanDisk ve Western Digital öngörülerinin ardından Tokyo'da −%10,24 (48.740 yen)", tema: "tema:nand-dongu-riski" },
    { sirket: "sirket:micron", yon: "negatif", gerekce: "Depolama öngörü şokunun sektörel yayılımıyla ABD seansı sonrası ~−%3", tema: "tema:nand-dongu-riski" },
    { sirket: "sirket:softbank", yon: "negatif", gerekce: "Güçlü bilançoya rağmen Asya teknoloji satışında −%4,41 (5.695 yen); sektör duyarlılığı şirket performansının önüne geçti", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:solidigm", yon: "notr", gerekce: "10 trilyon won'a (≈7 milyar $) kadar ön-halka arz turu ve ~50 trilyon won değerleme hedefi; ana şirket hissesi %10 düşerken iştirakin bağımsız değerlemesi masaya kondu", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:shopify", yon: "pozitif", gerekce: "Q2'de gelir +%34, GMV +%32, serbest nakit akışı marjı %18; AI kaynaklı siparişler üç katına çıktı ve hisse sert yükseldi", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:hubspot", yon: "negatif", gerekce: "EPS 3,26 $ ve gelir 911,7 milyon $ ile beklenti üstü olmasına rağmen yıl öngörüsü 3,68 milyar $'a çekildi ve net yeni müşteri 7.000'de kaldı; seans sonrası −%19,7", tema: "tema:ai-yikim-korkusu" },
    { sirket: "sirket:applovin", yon: "negatif", gerekce: "Q2 geliri beklentinin altında kaldı; kapanış sonrası ~%20, açılış öncesi −%15,5 değer kaybetti", tema: "tema:ai-yikim-korkusu" },
    { sirket: "sirket:disney", yon: "pozitif", gerekce: "Mali Q3'te düzeltilmiş EPS 2,06 $ (beklenti 1,86 $) ve deneyimler geliri +%10 ile ~10 milyar $; hisse yükselerek Dow rekoruna katkı verdi" }
  ],
  sermaye: [
    { hedef: "sirket:solidigm", tutar_musd: 7000, tip: "finansman", aciklama: "Nasdaq kotasyonu öncesi ön-halka arz turu; ~35 milyar $ üzeri değerleme hedefi, aracılar Morgan Stanley ve Goldman Sachs" }
  ]
});
