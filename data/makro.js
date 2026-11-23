// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-23",
  puan: 6,
  azami: 18,
  seviye: "YÜKSELMİŞ",
  ozet: "Termometre 6/18 YÜKSELMİŞ — termometre alarmı yok. Saha: Hürmüz kısıtı + Nvidia SEC/CA + SpaceX borç. 10Y ~%5,0 izlemede; enflasyon izlemede. VIX ~36 alarm. SP500 düzeltme.",
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
      deger: "~36",
      durum: "alarm",
      puanli: true,
      detay: "Cuma kapanış ~35,89 (+%26). ≥30 alarm eşiğinin üzerinde.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    }
  ]
};
