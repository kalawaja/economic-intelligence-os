// Delta: 2026-08-11 günlük raporu
window.DELTAS.push({
  tarih: "2026-08-11",
  rapor: "raporlar/gunluk/2026-08-11.html",
  dugumler: [
    { id: "sirket:blackrock", tur: "sirket", ad: "BlackRock", sektor: ["finans-yatirim"] },
    { id: "sirket:blackstone", tur: "sirket", ad: "Blackstone", sektor: ["finans-yatirim"] },
    { id: "sirket:goldman-sachs", tur: "sirket", ad: "Goldman Sachs", sektor: ["finans-yatirim"] },
    { id: "sirket:rocket-lab", tur: "sirket", ad: "Rocket Lab", kod: "RKLB", sektor: ["savunma-uzay"] },
    { id: "sirket:iridium", tur: "sirket", ad: "Iridium Communications", sektor: ["savunma-uzay"] },
    { id: "sirket:archer", tur: "sirket", ad: "Archer Aviation", kod: "ACHR", sektor: ["savunma-uzay"] },
    { id: "sirket:boeing", tur: "sirket", ad: "Boeing", kod: "BA", sektor: ["savunma-uzay"] },
    { id: "tema:hesaplama-finansmani", tur: "tema", ad: "AI Hesaplama Finansmanı" }
  ],
  iliskiler: [
    { kaynak: "sirket:nvidia", hedef: "sirket:apollo", tur: "ortaklik", aciklama: "AI hesaplama altyapısı finansman platformu (500 mlr $ hedefli girişimin ortağı; MOU)" },
    { kaynak: "sirket:nvidia", hedef: "sirket:blackrock", tur: "ortaklik", aciklama: "AI hesaplama altyapısı finansman platformu (MOU)" },
    { kaynak: "sirket:nvidia", hedef: "sirket:blackstone", tur: "ortaklik", aciklama: "AI hesaplama altyapısı finansman platformu (MOU)" },
    { kaynak: "sirket:nvidia", hedef: "sirket:brookfield", tur: "ortaklik", aciklama: "AI hesaplama altyapısı finansman platformu (MOU)" },
    { kaynak: "sirket:nvidia", hedef: "sirket:goldman-sachs", tur: "ortaklik", aciklama: "AI hesaplama altyapısı finansman platformu (MOU)" },
    { kaynak: "sirket:nvidia", hedef: "sirket:kkr", tur: "ortaklik", aciklama: "AI hesaplama altyapısı finansman platformu (MOU)" },
    { kaynak: "sirket:archer", hedef: "sirket:boeing", tur: "satin-alma", aciklama: "Boeing'in Wisk Aero birimi ile SkyGrid ve Insitu iştiraklerini satın aldı (tutar açıklanmadı)" },
    { kaynak: "sirket:rocket-lab", hedef: "sirket:iridium", tur: "satin-alma", aciklama: "~8 mlr $ nakit+hisse; dikey entegre uzay şirketi (gecikmeli kayıt, 29 Haziran)" }
  ],
  etkiler: [
    { sirket: "sirket:nvidia", yon: "negatif", gerekce: "500 mlr $'lık finansman platformu duyurusuna rağmen dolaşımsal finansman sorularıyla hisse ~%3 geriledi", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:intel", yon: "negatif", gerekce: "15 mlr $ adi hisse ihracı (sulandırma) sonrası hisse %4'ün üzerinde düştü; SOX -%2,94", tema: "tema:ai-capex" },
    { sirket: "sirket:coherent", yon: "negatif", gerekce: "Bilanço öncesi risk azaltımıyla -%12 (parabolik ralli sonrası pozisyon boşaltma)", tema: "tema:ai-capex" },
    { sirket: "sirket:lumentum", yon: "negatif", gerekce: "Bilanço öncesi risk azaltımıyla -%7; FQ4 sonuçları 11 Ağustos kapanış sonrası", tema: "tema:ai-capex" },
    { sirket: "sirket:tsmc", yon: "pozitif", gerekce: "Temmuz satışları NT$467,58 mlr ile aylık rekor (+%44,7 yıllık); AI üretim momentumu sürüyor", tema: "tema:ai-capex" },
    { sirket: "sirket:aramco", yon: "negatif", gerekce: "Jazan rafinerisi (400 bin varil/gün) Husi saldırısı hasarıyla kapandı; restart Ağustos sonuna sarkabilir", tema: "tema:iran-enerji-riski" },
    { sirket: "sirket:rocket-lab", yon: "notr", gerekce: "Rekor gelir (+%62) ve backlog (2,36 mlr $) açıkladı; ancak Q3 marj beklentisi entegrasyon maliyetleriyle geriledi", tema: null },
    { sirket: "sirket:archer", yon: "pozitif", gerekce: "Boeing'in Wisk/SkyGrid/Insitu paketini satın alma duyurusuyla +%18,4", tema: null }
  ],
  sermaye: [
    { hedef: "sirket:nvidia", tutar_musd: 500000, tip: "finansman", aciklama: "Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR ile üçüncü-taraf AI hesaplama finansman platformları (MOU; müşteri alımlarını fonlayacak)" },
    { hedef: "sirket:intel", tutar_musd: 15000, tip: "finansman", aciklama: "15 mlr $ adi hisse ihracı — AI, ileri paketleme ve dökümhane yatırımları için" },
    { hedef: "sirket:iridium", tutar_musd: 8000, tip: "ma", aciklama: "Rocket Lab'in Iridium'u satın alması (~8 mlr $, nakit+hisse; gecikmeli kayıt 29 Haziran)" }
  ]
});
