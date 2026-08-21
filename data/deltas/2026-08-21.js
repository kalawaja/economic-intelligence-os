// Ağ Haritası Deltası — 21 Ağustos 2026 günlük raporu
// Yalnızca yeni öğeler ve günün etkileri; mevcut id'ler kimlik envanterinden aynen kullanıldı.
window.DELTAS.push({
  tarih: "2026-08-21",
  rapor: "raporlar/gunluk/2026-08-21.html",
  dugumler: [
    { id: "sektor:perakende", tur: "sektor", ad: "Perakende" },
    { id: "sirket:walmart", tur: "sirket", ad: "Walmart", kod: "WMT", borsa: "NYSE", ulke: "ABD", sektor: ["sektor:perakende"] },
    { id: "tema:tuketici-yavaslamasi", tur: "tema", ad: "Tüketici Yavaşlaması" }
  ],
  iliskiler: [],
  etkiler: [
    { sirket: "sirket:walmart", yon: "negatif", gerekce: "Q2'de kâr beklentiyi aştı ama ABD karşılaştırılabilir satış büyümesi %2,6 ile ~6 yılın en yavaşı; zayıf Q3 kılavuzuyla hisse −%8,6 (104,46 $) — tüketici çatlağı tezi perakendenin en büyük ölçeğinde teyit edildi.", tema: "tema:tuketici-yavaslamasi" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "319 milyon hisselik ikinci kilit tranşında emilim bozuldu; hisse gün içinde %5-7 düşerek 135 $ IPO referansının altına indi. Sonraki tranşlar: 9/24 Eylül, 9/24 Ekim; Kasım'da ~1,3 milyar hisse." },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "Hissedar getirisi planı ~110 trilyon ₩ (~79 milyar $) olarak dolaşıma oturdu (resmî açıklama yok — teyit gerektirir); hisse Cuma +%3,87 (₩281.500) ile rallinin üçüncü gününü taşıdı.", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "₩40 trilyonluk geri alım sonrası Cuma +%2,31 (₩1.730.000); Japonya Miyagi'de üretim tesisi kurmayı değerlendirdiği bildirildi — Kore bellek kapasitesinin ilk büyük denizaşırı genişleme sinyali (erken aşama).", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:moderna", yon: "negatif", gerekce: "Çarşamba'nın +%177'lik tarihî rallisinin ardından Perşembe ~−%20 kâr realizasyonu." },
    { sirket: "sirket:marvell", yon: "notr", gerekce: "Warrant şartnamesi netleşti: 58,97 milyon hisse, 206,58 $ kullanım fiyatı; her 500 milyon $ nitelikli alım için 240.042 hisse, tam kullanım 120 milyar $ alıma bağlı ve Google için bağlayıcı değil — manşet tutar opsiyon merdiveni.", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:alphabet", yon: "notr", gerekce: "Marvell warrant'ında alım taahhüdü yok: sermaye bağı kuruldu ama yükümlülük tek yönlü — vesting tamamen Google'ın sipariş akışına bağlı.", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "Bilançoya 5 gün (26 Ağustos): Hazine müdahalesi kırılganlığı, Marvell warrant emsali ve 3 trilyon $ bilanço-dışı taahhüt tartışmasının ortasında yılın en kritik bilançosu.", tema: "tema:hesaplama-finansmani" }
  ],
  sermaye: []
});
