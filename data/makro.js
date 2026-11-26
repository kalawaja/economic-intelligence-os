// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-11-26",
  puan: 5,
  azami: 18,
  seviye: "YÜKSELMİŞ",
  ozet: "Termometre 5/18 YÜKSELMİŞ — termometre alarmı yok. Saha: Hürmüz kısıtı + Nvidia SEC/CA devam. 10Y ~%4,85 izlemede; VIX ~28,3 izlemede. SP500 düzeltmeden çıktı.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,16 / 10Y %4,85",
      durum: "izleme",
      puanli: true,
      detay: "25 Kas kapanış 10Y ~%4,85. Seviye %5,00 bandının altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "MarketWatch TNX / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "~28,3",
      durum: "izleme",
      puanli: true,
      detay: "25 Kas kapanış ~28,3. ≥20 izleme, ≥30 alarm altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    },
    {
      id: "sp500",
      ad: "S&P 500 Düzeltme",
      deger: "~%7 rekor altı",
      durum: "izleme",
      puanli: true,
      detay: "25 Kas kapanış rekorun ~%7 altında; düzeltme eşiğinin (%10) dışında.",
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
      deger: "~90-91 $",
      durum: "normal",
      puanli: true,
      detay: "25-26 Kas bandı ~90-91 $. 100 $ alarm eşiği altında.",
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
      detay: "25-26 Kas bandı.",
      esik: "sert hareket izleme",
      kaynak: "COMEX"
    },
    {
      id: "bitcoin",
      ad: "Bitcoin",
      deger: "~60.000 $",
      durum: "normal",
      puanli: true,
      detay: "25 Kas ~58-60 bin bant.",
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
      detay: "23-26 Kas AIS görünürlüğü düşük. Kısıt devam ediyor.",
      esik: "20+ gemi normal",
      kaynak: "hormuz.now"
    },
    {
      ad: "Nvidia Yönetişim",
      deger: "Huang geri, soruşturma sürüyor",
      durum: "izleme",
      detay: "23 Kas kurul Huang’ı CEO olarak geri getirdi. SEC muhasebe + CA subpoena ofseti devam.",
      esik: "suçlama ofseti derinleşir",
      kaynak: "Nvidia IR / Reuters"
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
      detay: "Taoyuan 26 Kas izleniyor. 2027 SCA/kılavuz bekleniyor.",
      esik: "IR teyidi",
      kaynak: "Micron IR"
    }
  ]
};
