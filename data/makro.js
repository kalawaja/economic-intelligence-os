// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-04",
  puan: 5,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 5/18 DÜŞÜK — termometre alarmı yok. Saha: Hürmüz kısıtı sürüyor. 10Y 3 Kas ~%4,95 izlemede; Eylül CPI %3,7 / PCE %3,4 izlemede; VIX ~20,83 izlemede. Brent ~104-105 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,30 / 10Y %4,95",
      durum: "izleme",
      puanli: true,
      detay: "3 Kas TNX ~%4,95. Seviye %5,00 bandının altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "MarketWatch TNX / StreetStats"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~20,83",
      durum: "izleme",
      puanli: true,
      detay: "3 Kas kapanış ~20,83. 20 izleme eşiğinin üzerinde; 30 alarm altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    }
  ]
};
