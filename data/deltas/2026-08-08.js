// Delta — 8 Ağustos 2026 günlük raporu (yalnızca yeni öğeler)
// NOT: 11 Ağu'da yeniden üretildi (orijinal dosya kaybolduğu için); içerik
// 2026-08-08 raporuna ve kimlik envanteri kaydına birebir dayanır.
window.DELTAS.push({
  tarih: "2026-08-08",
  rapor: "raporlar/gunluk/2026-08-08.md",
  dugumler: [
    { id: "sirket:easyjet", tur: "sirket", ad: "easyJet", sektor: ["sektor:tasima-lojistik"] },
    { id: "tema:bolgesel-guvenlik", tur: "tema", ad: "Bölgesel Güvenlik (Mekke Paktı)" }
  ],
  iliskiler: [
    { kaynak: "sirket:apollo", hedef: "sirket:easyjet", tur: "satin-alma", aciklama: "Apollo Global, easyJet'i 5,7 milyar sterline (~7,7 milyar $) satin aliyor; Castlelake cekildi, yonetim destekliyor" },
    { kaynak: "sirket:tesla", hedef: "sirket:spacex", tur: "ortaklik", aciklama: "Terafab: Grimes County TX'te ortak AI cip fabrikasi; ilk faz 16,8 milyar $, SpaceX tarafi 119 milyar $'a dek; mantik VE bellek uretimi hedefi" }
  ],
  etkiler: [
    { sirket: "sirket:spacex", yon: "pozitif", gerekce: "Lockup emiliminin ardindan Cuma +%16 (~133 $); Argus 160 / Bernstein 248 / Citi 200 hedef; Terafab ile cip arzini icsellestirme hamlesi", tema: "tema:capex-cezasi" },
    { sirket: "sirket:sk-hynix", yon: "negatif", gerekce: "Cuma kapanis -%4,88 (1.422.000 won); yabanci gun sonunda 863,3 milyar won net satici — pozisyonel tasfiye bitmedi", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:intel", yon: "pozitif", gerekce: "TechCrunch'a gore Terafab projesine katkida bulunacak (rolun kapsami belirsiz; teyit gerektirir)", tema: "tema:capex-cezasi" }
  ],
  sermaye: [
    { hedef: "sirket:easyjet", tutar_musd: 7700, tip: "ma", aciklama: "Apollo Global satin almasi (£5,7 mlr)" },
    { hedef: "sirket:spacex", tutar_musd: 16800, tip: "capex", aciklama: "Terafab ilk faz yatirimi (Tesla+SpaceX, Grimes County TX)" }
  ]
});
