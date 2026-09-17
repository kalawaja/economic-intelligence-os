// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-09-17",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2/18 DÜŞÜK — yeni alarm yok. Fed kartı izlemeden çıktı: 25 bp teslim, Ekim +25 bp %40,1. Eğri +0,27 ve CPI %3,4 izlemede. VIX 17,71; HY OAS 276 bp; S&P zirveden −%3,4; NFCI −0,564; Sahm −0,07. Brent settle 105,83 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,27 puan",
      durum: "izleme",
      puanli: true,
      detay: "16 Eyl FRED T10Y2Y +0,27 (10Y %5,003). Kısa uç Warsh sonrası sıkıştı; +0,50 izleme eşiğinin altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "17,71",
      durum: "normal",
      puanli: true,
      detay: "16 Eyl kapanış 17,71 (15 Eyl 17,20; seans içi 18,94). 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "276 bp",
      durum: "normal",
      puanli: true,
      detay: "15 Eyl: 276 bp (14 Eyl 271). 16 Eyl henüz yok. 300 bp izleme eşiğinin altında.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%3,4",
      durum: "normal",
      puanli: true,
      detay: "16 Eyl nakit 7.551,81 vs 13 Ağu zirve 7.816,70 — −%3,4. Kapanış zirvesi 7.798,99'a göre −%3,2. %10 eşiğinin altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,564",
      durum: "normal",
      puanli: true,
      detay: "4 Eyl haftası: −0,564 — koşullar ortalamadan gevşek. 11 Eyl haftası Cuma yayımlanır.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,07",
      durum: "normal",
      puanli: true,
      detay: "Ağustos okuması −0,07 — resesyon sinyali yok; Ağustos bordro +162 bin, işsizlik %4,1.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,7",
      durum: "izleme",
      puanli: true,
      detay: "Ağustos CPI yıllık %3,4. SEP medyan PCE 2026 yılsonu %3,7 / çekirdek %3,4 (Haziran'dan yukarı). %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,88 + Ekim %40,1",
      durum: "normal",
      puanli: true,
      detay: "16 Eyl 25 bp teslim; bant 3,75-4,00. FedWatch Ekim +25 bp %40,1 / hold %59,5 — %50 izleme eşiğinin altında. Aralık kümülatif +25 bp %54.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,67",
      durum: "normal",
      puanli: true,
      detay: "TCMB 16 Eyl 15:30 alış 48,5779 / satış 48,6654. Perşembe serbest piyasa ~48,67. Aylık ~+%1,6-1,8 — %5 eşiğinin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "183,8 milyar $",
      detay: "11 Eyl haftası basın hesabı (Dünya/Halk TV, TCMB verisi): 183,8 milyar $ (4 Eyl 184,2'den ~−0,5). Resmî Perşembe bülteni teyit bekler.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; dönemsel koşuda kontrol edilecek.",
      kaynak: "bis.org"
    }
  ]
};
