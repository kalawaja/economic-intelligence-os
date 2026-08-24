// Delta — 24 Ağustos 2026 günlük raporu (yalnızca yeni öğeler)
window.DELTAS.push({
  tarih: "2026-08-24",
  rapor: "raporlar/gunluk/2026-08-24.html",
  dugumler: [
    { id: "sirket:poolside", tur: "sirket", ad: "Poolside", ozel: 1, ulke: "ABD", sektor: ["sektor:yapay-zeka"] },
    { id: "sirket:alibaba", tur: "sirket", ad: "Alibaba", kod: "BABA", borsa: "NYSE", ulke: "Çin", sektor: ["sektor:teknoloji"] }
  ],
  iliskiler: [
    { kaynak: "sirket:nvidia", hedef: "sirket:poolside", tur: "yatirim", aciklama: "6 mlr $ model-üretim yazılımı lisansı + 12 mlr $ ön-değerlemeyle 1 mlr $ yatırım; ~109 çalışana iş teklifi (lisans+kadro modeli)", tutar_musd: 7000 },
    { kaynak: "sirket:nvidia", hedef: "sirket:perplexity", tur: "yatirim", aciklama: "30+ mlr $ değerlemeyle yatırım görüşmesi (Eylül 2025'ten bu yana +%50; ARR 750+ mn $)" },
    { kaynak: "sirket:broadcom", hedef: "sirket:anthropic", tur: "tedarik", aciklama: "Özel AI çip programı; 100 mlr $'a uzanan borç paketiyle SPV-kira kapasite finansmanı (görüşme; Blackstone/Apollo)" },
    { kaynak: "sirket:broadcom", hedef: "sirket:openai", tur: "tedarik", aciklama: "Özel AI çip programı; aynı satıcı-finansmanı platformunun ikinci müşterisi" }
  ],
  etkiler: [
    { sirket: "sirket:alcoa", yon: "negatif", gerekce: "Kanada'ya %50 tarife 22 Ağu'da yürürlüğe girdi; Kanada izabe maruziyeti + 8 Eylül çelik/alüminyum misillemesi zinciri iki yönlü vuruyor", tema: "tema:tarife-hukuku" },
    { sirket: "sirket:broadcom", yon: "pozitif", gerekce: "100 mlr $'a yaklaşan borç paketi Anthropic/OpenAI özel çip siparişlerinin kapasite finansmanını üstleniyor — sipariş görünürlüğü güçleniyor (görüşme aşamasında)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:anthropic", yon: "notr", gerekce: "Broadcom SPV-kira yapısı capex yükünü bilanço dışına taşıyor; ~65 mlr $ yıllıklandırılmış gelir iddiası tek kaynak (teyit gerektirir); Google TPU kurucusu Amir Salek kadroya katıldı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:openai", yon: "notr", gerekce: "Broadcom özel çip kapasitesinin ikinci müşterisi; SoftBank'ın ~1 trln ¥ perakende tahvili OpenAI köprü kredilerini kapatacak", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "Poolside 6+1 mlr $ lisans-yatırım modeli + Perplexity görüşmesi; hisse haftayı −%5 kapattı, bilanço 26 Ağu (konsensüs 91,85 mlr $)", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:poolside", yon: "pozitif", gerekce: "Nvidia'dan 6 mlr $ lisans + 1 mlr $ yatırım; kalan şirket 12 mlr $ ön-değerlemeyle fiyatlandı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:perplexity", yon: "pozitif", gerekce: "Nvidia 30+ mlr $ değerlemeyle yatırım görüşmesinde; ARR 750 mn $'ı aştı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:alibaba", yon: "pozitif", gerekce: "Tam-yığın AI için 80 mlr HK$ (10,2 mlr $) hisse plasmanı — Hong Kong'un en büyük ikincil arzı", tema: "tema:ai-capex" },
    { sirket: "sirket:softbank", yon: "notr", gerekce: "~1 trln ¥ (6,3 mlr $) Japonya'nın en büyük perakende tahvili hazırlığı — OpenAI köprü kredileri + fiziksel AI alımları", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:hugging-face", yon: "notr", gerekce: "~13 mlr $ değerlemeyle satış/stratejik seçenek arayışı (2023'ün ~3 katı; erken aşama — teyit gerektirir)" },
    { sirket: "sirket:samsung", yon: "negatif", gerekce: "110 trln ₩ hissedar getirisi planı resmî onay aldı ama Pazartesi hisse −%6 — dört haftalık rallide ilk 'habere sat' kırılması", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Kospi −%1+ düşerken +~%2 ile pozitif ayrıştı; 40 trln ₩ geri alım programı destekliyor", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "Hafta −%2+, 135 $ IPO referansının altında/sınırında; Starship yeniden-uçuşu 2026 sonu-2027 başına kaydı; Kasım ~1,3 mlr hisselik tranş ana stres noktası" },
    { sirket: "sirket:moderna", yon: "pozitif", gerekce: "Cuma +%17 ile Perşembe kâr realizasyonunun önemli kısmını geri aldı" }
  ],
  sermaye: [
    { hedef: "sirket:broadcom", tutar_musd: 100000, tip: "finansman", aciklama: "60-70 mlr $ kıdemli teminatlı + ~30 mlr $ ikincil borç görüşmesi (Blackstone/Apollo); Anthropic/OpenAI özel çip kapasitesi için SPV-kira platformu" },
    { hedef: "sirket:poolside", tutar_musd: 1000, tip: "finansman", aciklama: "Nvidia yatırımı, 12 mlr $ ön-değerleme (6 mlr $ lisans ödemesi ayrı)" },
    { hedef: "sirket:alibaba", tutar_musd: 10200, tip: "finansman", aciklama: "80 mlr HK$ hisse plasmanı — tam-yığın AI (çip, altyapı, model)" },
    { hedef: "sirket:softbank", tutar_musd: 6300, tip: "finansman", aciklama: "~1 trln ¥ perakende tahvili hazırlığı (%4+ getiri); OpenAI köprü kredilerinin geri ödemesi" }
  ]
});
