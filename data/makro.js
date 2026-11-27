// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-27",
  puan: 5,
  azami: 18,
  seviye: "YÜKSELMİŞ",
  ozet: "Termometre 5/18 YÜKSELMİŞ — termometre alarmı yok. Saha: Hürmüz kısıtı + Nvidia SE Asya durdurması + S&P CreditWatch. 10Y ~%4,8 izlemede; VIX ~26,8 izlemede. SP500 ~%8 rekor altı.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,16 / 10Y %4,8",
      durum: "izleme",
      puanli: true,
      detay: "26 Kas kapanış 10Y ~%4,8. Seviye %5,00 bandının altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "MarketWatch TNX / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~26,8",
      durum: "izleme",
      puanli: true,
      detay: "26 Kas kapanış ~26,8. ≥20 izleme, ≥30 alarm altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    },
    {
      id: "sp500",
      ad: "S&P 500 Düzeltme",
      deger: "~%8 rekor altı",
      durum: "izleme",
      puanli: true,
      detay: "25 Kas kapanış ~7183, rekor ~7819’un ~%8 altında; düzeltme eşiğinin (%10) dışında.",
      esik: "≥10% düzeltme izleme/alarm",
      kaynak: "S&P Dow Jones"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE)",
      deger: "Eylül CPI %3,7 / PCE %3,4",
      durum: "izleme",
      puanli: true,
      detay: "Son resmi veri Eylül. Kasım verisi bekleniyor.",
      esik: "CPI > %3,5 izleme",
      kaynak: "BLS / BEA"
    },
    {
      id: "brent",
      ad: "Brent Petrol",
      deger: "~91-92 $",
      durum: "normal",
      puanli: true,
      detay: "26-27 Kas bandı ~91-92 $. 100 $ alarm eşiği altında.",
      esik: "> 100 $ izleme/alarm",
      kaynak: "ICE Brent"
    },
    {
      id: "dxy",
      ad: "Dolar Endeksi (DXY)",
      deger: "~103,7",
      durum: "normal",
      puanli: true,
      detay: "Stabil bant.",
      esik: "> 105 izleme",
      kaynak: "ICE"
    },
    {
      id: "altin",
      ad: "Altın",
      deger: "~3.590 $",
      durum: "normal",
      puanli: true,
      detay: "Önceki band.",
      esik: "sert hareket izleme",
      kaynak: "COMEX"
    },
    {
      id: "bitcoin",
      ad: "Bitcoin",
      deger: "~60.000 $",
      durum: "normal",
      puanli: true,
      detay: "Önceki bant.",
      esik: "sert düşüş izleme",
      kaynak: "spot"
    },
    {
      id: "tcmb-rezerv",
      ad: "TCMB Brüt Rezerv",
      deger: "önceki veri",
      durum: "normal",
      puanli: true,
      detay: "Son açıklanan brüt rezerv. Yeni veri bekleniyor.",
      esik: "sert düşüş izleme",
      kaynak: "TCMB"
    }
  ],
  bilgi_kartlari: [
    {
      ad: "Hürmüz AIS",
      deger: "düşük",
      durum: "izleme",
      detay: "26 Kas 2, 27 sabah 0. Kısıt devam ediyor.",
      esik: "20+ gemi normal",
      kaynak: "hormuz.now"
    },
    {
      ad: "Nvidia Yönetişim / İhracat",
      deger: "SE Asya durdurma + S&P watch",
      durum: "izleme",
      detay: "26 Kas SE Asya sunucu sevkiyat durdurması (ABD kuralı). S&P AA CreditWatch negatif (yönetişim).",
      esik: "not indirimi veya lisans teyidi",
      kaynak: "Reuters / FT / S&P"
    },
    {
      ad: "SpaceX GPU Borcu",
      deger: "önceki pencerede fiyatlandı",
      durum: "normal",
      detay: "~$32-44 mlr $, off-BS. Emilim ölçülmedi.",
      esik: "kilit emilim teyidi",
      kaynak: "önceki rapor"
    },
    {
      ad: "Micron HBM",
      deger: "Singapur ekipman önceki",
      durum: "normal",
      detay: "Taoyuan izleniyor. 2027 SCA/kılavuz bekleniyor.",
      esik: "IR teyidi",
      kaynak: "Micron IR"
    }
  ]
};
