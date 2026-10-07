// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-10-07",
  puan: 4,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 4/18 DÜŞÜK — termometre alarmı yok, yeni saha alarmı yok. 10Y 6 Eki %5,269 izlemede; PCE %3,4 / çekirdek %3,0 izlemede. VIX 15,01. Brent 6 Eki Reuters sabah 98,31 $. Google–Constellation 890 MW uprate.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,45 / 10Y %5,27",
      durum: "izleme",
      puanli: true,
      detay: "6 Eki Tradeweb %5,269 (5 Eki kapanış %5,31). Tek seans gerileme. Eğim önceki ~+0,45; yeni 2Y baskısı yok. Seviye hâlâ %5,10 üstü.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "YCharts / GuruFocus / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,01",
      durum: "normal",
      puanli: true,
      detay: "6 Eki kapanış MarketWatch 15,01 (önceki 15,52). 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX / MarketWatch"
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
      deger: "rekor",
      durum: "normal",
      puanli: true,
      detay: "6 Eki S&P 7.818,93 rekor (+%0,58); Nasdaq rekor. %10 eşiğinin altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "piyasa"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,564",
      durum: "normal",
      puanli: true,
      detay: "Son yayın −0,564 — koşullar ortalamadan gevşek. Yeni haftalık yok.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,07 / işsizlik %4,2",
      durum: "normal",
      puanli: true,
      detay: "Son Sahm −0,07. Eylül işsizlik %4,2 (önceki %4,1). 0,30 izleme eşiğine tek aylık sıçrama yetmez; yeni Sahm baskısı yok.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME / BLS"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,4",
      durum: "izleme",
      puanli: true,
      detay: "Ağustos CPI yıllık %3,4. Ağustos PCE yıllık %3,4; çekirdek PCE %3,0. Ücret yıllık %3,0. %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL / BEA PCE / BLS"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,88 / Ekim artırım zayıf",
      durum: "normal",
      puanli: true,
      detay: "16 Eyl 25 bp teslim; bant 3,75–4,00. Reuters 6 Eki: Ekim artırım fiyatı %22. Tutanaklar 7 Eki ABD akşamı. Toplantı-dışı hamle yok.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF / Reuters"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "~49,13",
      durum: "normal",
      puanli: true,
      detay: "4 Eki Xe ~49,13. Aylık değişim %5 eşiğinin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "Xe / piyasa"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "171,2 milyar $",
      detay: "25 Eyl haftası: brüt 171,2 (18 Eyl 174,4; 11 Eyl 178,7). İki haftada −7,5. Döviz 61,6; altın 109,6.",
      kaynak: "TCMB haftalık / Endeks24 (4 Eki)"
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
