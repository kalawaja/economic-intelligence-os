// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-24",
  puan: 5,
  azami: 18,
  seviye: "YÜKSELMİŞ",
  ozet: "Termometre 5/18 YÜKSELMİŞ — termometre alarmı yok. Saha: Hürmüz kısıtı + Nvidia SEC/CA devam. 10Y ~%4,92 izlemede; VIX ~26,6 izlemede. SP500 düzeltmeden çıktı.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,29 / 10Y %4,92",
      durum: "izleme",
      puanli: true,
      detay: "23 Kas kapanış 10Y ~%4,92. Seviye %5,00 bandının altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "MarketWatch TNX / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~26,6",
      durum: "izleme",
      puanli: true,
      detay: "23 Kas kapanış ~26,62 (Cuma 35,89’dan düştü). ≥20 izleme, ≥30 alarm altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    },
    {
      id: "sp500",
      ad: "S&P 500 Düzeltme",
      deger: "~%7,4 rekor altı",
      durum: "izleme",
      puanli: true,
      detay: "23 Kas +%4,73 ile rekorun ~%7,4 altında; düzeltme eşiğinin (%10) dışında.",
      esik: "≥10% düzeltme izleme/alarm",
      kaynak: "S&P Dow Jones"
    }
  ]
};
