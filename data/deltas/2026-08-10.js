// Delta — 10 Ağustos 2026 günlük raporu (yalnızca yeni öğeler)
window.DELTAS.push({
  tarih: "2026-08-10",
  rapor: "raporlar/gunluk/2026-08-10.md",
  dugumler: [
    { id: "sirket:aramco", tur: "sirket", ad: "Saudi Aramco", sektor: ["sektor:enerji"] },
    { id: "sirket:taalas", tur: "sirket", ad: "Taalas", sektor: ["sektor:yariiletken", "sektor:yapay-zeka"] },
    { id: "sirket:discovery-loop", tur: "sirket", ad: "Discovery Loop", sektor: ["sektor:yapay-zeka"] }
  ],
  iliskiler: [
    { kaynak: "sirket:amd", hedef: "sirket:taalas", tur: "satin-alma", aciklama: "AMD, AI modellerini silikona gomen (hardwired inference) Toronto merkezli Taalas'i satin aldi; tutar aciklanmadi (6 Agu, gecikmeli kayit)" },
    { kaynak: "sirket:alphabet", hedef: "sirket:discovery-loop", tur: "yatirim", aciklama: "Jeff Dean ve ust duzey arastirmacilar Google'dan ayrilip Discovery Loop'u kurdu; Google kurucu yatirimci (5-6 Agu, gecikmeli kayit)" }
  ],
  etkiler: [
    { sirket: "sirket:aramco", yon: "negatif", gerekce: "Husi IHA saldirisi Jazan rafinerisinde yangin cikardi — savasta Aramco tesislerine ilk dogrulanmis saldiri; hasar sinirli", tema: "tema:iran-enerji-riski" },
    { sirket: "sirket:lockheed", yon: "pozitif", gerekce: "Pentagon (Feinberg mektubu) 21 gun icinde hizlandirilmis uretim plani istedi; Patriot stoklari savas oncesine gore en az %65 eridi", tema: "tema:savunma-neo-prime" },
    { sirket: "sirket:rtx", yon: "pozitif", gerekce: "Patriot/THAAD stok erimesi cok yilli kapasite sozlesmeleri dongusu sinyali uretiyor; fren Kongre'deki butce tikanikligi", tema: "tema:savunma-neo-prime" },
    { sirket: "sirket:tsmc", yon: "pozitif", gerekce: "Temmuz satislari yillik ~%45 artti — AI donanim talebi bellek turbulansina ragmen uretim tarafinda suruyor", tema: "tema:ai-capex" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Pazartesi Kospi rallisinde +%3,09 (1.466.000 won); faiz indirimi beklentisi bellek pozisyonlarini destekledi — akis teyidi bekleniyor", tema: "tema:kore-oynakligi" }
  ],
  sermaye: []
});
