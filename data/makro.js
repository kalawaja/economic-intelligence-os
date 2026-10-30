// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-10-30",
  puan: 4,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 4/18 DÜŞÜK — termometre alarmı yok. Saha: Hürmüz kısıtı sürüyor. 10Y 29 Eki ~%4,95-5,00 izlemede; Eylül CPI %3,7 / PCE %3,4 izlemede. VIX ~18-19. Brent ~116 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,30 / 10Y %4,95-5,00",
      durum: "izleme",
      puanli: true,
      detay: "29 Eki TNX ~%4,95-5,00. Seviye %5,00 bandında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "MarketWatch TNX / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~18-19",
      durum: "normal",
      puanli: true,
      detay: "Son kapanış ~18-19. 20 izleme eşiğinin altında; yeni alarm yok.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    }
  ]
};
