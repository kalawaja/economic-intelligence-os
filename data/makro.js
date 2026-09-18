// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-09-18",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2/18 DÜŞÜK — yeni alarm yok. Eğri +0,27 ve CPI %3,4 izlemede. VIX 15,44; S&P zirveden ~−%2,3; 10Y %4,94; Brent settle 104,82 $. TCMB resmî brüt 178,7 mlr $ (−5,5). Fed Ekim +25 bp ~%40 bandında.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,27 puan",
      durum: "izleme",
      puanli: true,
      detay: "17 Eyl FRED T10Y2Y +0,27 (10Y ~%4,94). Kısa uç sıkışık kaldı; +0,50 izleme eşiğinin altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,44",
      durum: "normal",
      puanli: true,
      detay: "17 Eyl kapanış 15,44 (16 Eyl 17,71). 20 izleme eşiğinin altında; FOMC sonrası gevşeme.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS / Cboe"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "276 bp",
      durum: "normal",
      puanli: true,
      detay: "15 Eyl: 276 bp (son yayın). 300 bp izleme eşiğinin altında; güncelleme bekleniyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%2,3",
      durum: "normal",
      puanli: true,
      detay: "17 Eyl nakit 7.637,76 vs 13 Ağu zirve 7.816,70 — ~−%2,3. %10 eşiğinin altında; Perşembe sindirim rallisi.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500 / piyasa"
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
      detay: "Ağustos CPI yıllık %3,4. SEP medyan PCE 2026 yılsonu %3,7 / çekirdek %3,4. %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,88 + Ekim ~%40",
      durum: "normal",
      puanli: true,
      detay: "16 Eyl 25 bp teslim; bant 3,75-4,00. FedWatch Ekim +25 bp ~%40 / hold ~%60 — %50 izleme eşiğinin altında.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "~48,7",
      durum: "normal",
      puanli: true,
      detay: "TCMB 17 Eyl civarı ~48,7 bandı. Aylık değişim %5 eşiğinin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "TCMB / piyasa"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "178,7 milyar $",
      detay: "11 Eyl haftası resmî bülten (17 Eyl): brüt 178,7 (−5,5 vs 184,2); net 62,2; swap hariç ~50; döviz 68,4 / altın 110,3.",
      kaynak: "tcmb.gov.tr (haftalık bülten)"
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
