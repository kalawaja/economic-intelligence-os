// Düzeltme deltası — 19 Ağustos 2026 (18 Ağu panel denetimi kararı).
// sirket:cisco 2026-08-14 deltasında yanlışlıkla sektor:teknoloji ile bildirilmişti;
// doğru sınıflama kurumsal-bt. birlestir() son geleni üzerine yazar; bu dosya
// manifest'te 2026-08-19'dan sonra yüklenerek düğümü düzeltir.
window.DELTAS.push({
  tarih: "2026-08-19",
  rapor: "raporlar/gunluk/2026-08-19.html",
  dugumler: [
    { id: "sirket:cisco", tur: "sirket", ad: "Cisco", kod: "CSCO", sektor: ["sektor:kurumsal-bt"], ulke: "ABD", borsa: "NASDAQ" }
  ],
  iliskiler: [],
  etkiler: [],
  sermaye: []
});
