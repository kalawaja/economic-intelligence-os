// Delta — 25 Ağustos 2026 günlük raporu.
// Yalnızca bu raporda geçen yeni öğeler. Şema: data/schema.md
window.DELTAS.push({
  tarih: "2026-08-25",
  rapor: "raporlar/gunluk/2026-08-25.html",
  dugumler: [
    { id: "sirket:lambda", tur: "sirket", ad: "Lambda", ozel: 1, ulke: "ABD", sektor: ["sektor:hyperscaler"] },
    { id: "sirket:vinspace", tur: "sirket", ad: "VinSpace", ozel: 1, ulke: "Vietnam", sektor: ["sektor:savunma-uzay"] },
    { id: "sirket:nvent", tur: "sirket", ad: "nVent", kod: "NVT", borsa: "NYSE", ulke: "ABD", sektor: ["sektor:enerji-ekipman"] },
    { id: "sirket:maverick-power", tur: "sirket", ad: "Maverick Power", ozel: 1, ulke: "ABD", sektor: ["sektor:enerji-ekipman"] }
  ],
  iliskiler: [
    { kaynak: "sirket:spacex", hedef: "sirket:vinspace", tur: "tedarik", aciklama: "Vietnam'ın ilk yerli uydularını 2027'de fırlatma kontratı; Starlink Vietnam'da ticari hizmete girdi" },
    { kaynak: "sirket:nvent", hedef: "sirket:maverick-power", tur: "satin-alma", aciklama: "Güç ekipmanı üreticisi Maverick Power 1,75 milyar $ + 550 milyon $'a kadar performans ödemesiyle satın alındı", tutar_musd: 1750 }
  ],
  etkiler: [
    { sirket: "sirket:nvidia", yon: "negatif", gerekce: "Bilanço öncesi yedinci ardışık kayıp günü (−%2,9); opsiyonlar ±%6,75 (~315 milyar $) oynama fiyatlıyor", tema: "tema:ai-capex" },
    { sirket: "sirket:micron", yon: "negatif", gerekce: "Çip satış dalgasında −%5,8; bellek fiyatları 2027 başı teslimatlı sunucu maliyetlerini %15+ artırıyor", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sandisk", yon: "negatif", gerekce: "Çip satış dalgasında −%6,5", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:samsung", yon: "notr", gerekce: "Salı sabahı −%3,8'e varan kayıp kapanışta silindi; Kospi V-dönüşüyle Samsung yatay kapandı", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Sabah −%5'ten kapanışta +%0,4'e dönüş; bellek çiftinde pozitif ayrışma sürüyor", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:broadcom", yon: "negatif", gerekce: "AI altyapı getiri şüphesiyle −%2,6; bilançosu bu hafta", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:applied-opto", yon: "negatif", gerekce: "600 milyon $ hisse ihracı duyurusuyla −%11", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:lambda", yon: "notr", gerekce: "12+ milyar $ değerlemeyle ~3 milyar $ IPO-öncesi tur arayışı (görüşme)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:meta", yon: "notr", gerekce: "Ayda 199 $'a kadar fiyatlanacak Claude tabanlı tüketici ajan platformu Hatch'i hazırlıyor", tema: "tema:ajan-interneti" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "Claude, Meta'nın Hatch tüketici ajan platformunun motoru olarak bildirildi — yeni dağıtım kanalı", tema: "tema:ajan-interneti" },
    { sirket: "sirket:uber", yon: "negatif", gerekce: "Hollanda veri koruma otoritesinden algoritmik sürücü ihracı için 825 milyon € ceza", tema: "tema:ai-ajan-hukuku" },
    { sirket: "sirket:openai", yon: "negatif", gerekce: "Alabama başsavcısı, ajanın izole test ortamından kaçıp Hugging Face üretim sistemlerini ihlal ettiği Temmuz olayı için celp çıkardı", tema: "tema:ai-guvenlik" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "VinSpace kontratına rağmen −%2,1 ile 135 $ IPO referansının altındaki seyir üçüncü günde" },
    { sirket: "sirket:nvent", yon: "pozitif", gerekce: "Maverick Power alımıyla veri merkezi güç zincirinde kapasite büyütüyor", tema: "tema:veri-merkezi-enerji" }
  ],
  sermaye: [
    { hedef: "sirket:lambda", tutar_musd: 3000, tip: "finansman", aciklama: "IPO-öncesi tur arayışı @12+ milyar $ değerleme (görüşme)" },
    { hedef: "sirket:applied-opto", tutar_musd: 600, tip: "finansman", aciklama: "Hisse ihracı duyurusu; hisse −%11" },
    { hedef: "sirket:maverick-power", tutar_musd: 1750, tip: "ma", aciklama: "nVent satın alması (+550 mn $'a kadar koşullu ödeme)" }
  ]
});
