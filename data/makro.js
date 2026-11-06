// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-06",
  puan: 4,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 4/18 DÜŞÜK — termometre alarmı yok. Saha: Hürmüz kısıtı + ABD data center sürtünmeyle. 10Y sonrası düşüş izlemede; Eylül CPI %3,7 / PCE %3,4 izlemede; VIX yükseldi (satış) normal bant. Brent ~94-100 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,30 / 10Y %4,90",
      durum: "izleme",
      puanli: true,
      detay: "4 Kas TNX ~%4,90. Seviye %5,00 bandının altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED DGS10 / MarketWatch TNX"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~16,74",
      durum: "normal",
      puanli: true,
      detay: "4 Kas kapanış ~16,74. 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "276 bp",
      durum: "normal",
      puanli: true,
      detay: "Son yayın 276 bp. Pencerede yeni FRED baskısı yok. 300 bp izleme eşiğinin altında.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "rekorun %1 altı",
      durum: "normal",
      puanli: true,
      detay: "Son seans. %10 eşiğinin altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "piyasa"
    }
  ]
};
