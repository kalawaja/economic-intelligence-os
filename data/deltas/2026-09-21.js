// Delta — 2026-09-21 günlük raporu (pencere: 18 Eyl Cuma sonrası + hafta sonu + 21 Eyl Pazartesi sabah)
// SpaceX takvim kayması + Siemens Energy backlog + Nvidia birim yorumu; Yanbu teyitsiz.
// Düzeltme: etki alanı sirket; tema id mevcut/yeni düğümle örtüşür.
window.DELTAS.push({
  tarih: "2026-09-21",
  rapor: "raporlar/gunluk/2026-09-21.html",
  ozet: "Starship 14 → 28 Eyl; Siemens Energy rekor güç siparişi; Yanbu teyitsiz — sıkılaşan darlık ayakta",
  dugumler: [
    { id: "tema:uzay-firlama", tur: "tema", ad: "Uzay fırlatma takvimi" },
    { id: "tema:kuantum", tur: "tema", ad: "Kuantum hesaplama" }
  ],
  iliskiler: [],
  etkiler: [
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:uzay-firlama",
      gerekce: "Flight 14 NET 22’den 28 Eyl’e kaydı; 24 Eyl kilit öncesi emilim baskısı arttı, operasyonel risk uzadı"
    },
    {
      sirket: "sirket:siemens-energy",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:turbin-kitligi",
      gerekce: "Q3 sipariş €17,9 mlr ve backlog €162 mlr; AI veri merkezi gaz türbini/şebeke talebi rekor seviye"
    },
    {
      sirket: "sirket:nvidia",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:ai-capex",
      gerekce: "Huang gelecek yıl birim satışlarının ikiye katlanabileceğini açıkladı; kılavuz revizyonu yok"
    }
  ],
  sermaye: []
});
