// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-20",
  puan: 5,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 5/18 DÜŞÜK — termometre alarmı yok. Saha: Hürmüz kısıtı + Nvidia geçici CEO + SpaceX borç akışı. 10Y ~%5,05 izlemede; Eylül CPI %3,7 / PCE %3,4 izlemede. VIX ~28 izlemede. Brent ~90 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,29 / 10Y %5,05",
      durum: "izleme",
      puanli: true,
      detay: "Son TNX ~%5,05. Seviye %5,00 bandında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "MarketWatch TNX / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~28",
      durum: "izleme",
      puanli: true,
      detay: "19 Kas kapanış ~28. 20 izleme eşiğinin üzerinde; 30 alarm altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    }
  ]
};
