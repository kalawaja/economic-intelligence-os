// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-09-15",
  puan: 3,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 3/18 DÜŞÜK — yeni alarm yok. Fed kartı izlemede sıkılaştı: FedWatch ~%90-93, JPM/HSBC/DB 25 bp. Eğri +0,32 ve CPI %3,4 izlemede. VIX 17,10; HY OAS 265 bp; S&P zirveden −%2,5; NFCI −0,564; Sahm −0,07. Brent kapanış ~106 $, Salı ~107,5 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,32 puan",
      durum: "izleme",
      puanli: true,
      detay: "14 Eyl FRED T10Y2Y +0,32 (10Y ~%4,97 / 2Y ~%4,65). 10Y seans içi %5,014. +0,50 izleme eşiğinin altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "17,10",
      durum: "normal",
      puanli: true,
      detay: "14 Eyl kapanış 17,10 (Cuma 15,84). 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "265 bp",
      durum: "normal",
      puanli: true,
      detay: "11 Eyl: 265 bp (10 Eyl 270). 300 bp izleme eşiğinin altında; 14 Eyl FRED henüz yok.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%2,5",
      durum: "normal",
      puanli: true,
      detay: "14 Eyl nakit 7.619,98 vs 13 Ağu zirve 7.816,70 — −%2,5. %10 eşiğinin altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,564",
      durum: "normal",
      puanli: true,
      detay: "4 Eyl haftası: −0,564 — koşullar ortalamadan gevşek.",
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
      detay: "Ağustos CPI yıllık %3,4 (aylık +%0,4; çekirdek aylık +%0,3). Son PCE manşet Temmuz %3,7 / çekirdek %3,3. %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%90-93",
      durum: "izleme",
      puanli: true,
      detay: "DFF bandı 3,50-3,75. FedWatch Pazartesi NY ~%90-93. JPM/HSBC/DB 25 bp. FOMC 15-16 Eyl, karar Çarşamba 14:00 ET.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,62",
      durum: "normal",
      puanli: true,
      detay: "TCMB 14 Eyl 15:30 alış 48,5343 / satış 48,6218. Salı serbest piyasa ~48,63-48,64. Aylık ~+%1,5-1,8 — %5 eşiğinin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "184,2 milyar $",
      detay: "4 Eyl haftası resmî bülten: 184,247 milyar $ (28 Ağu 188,198'den −3,951). 11 Eyl haftası bülteni Perşembe yayımlanır.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; 16 Eylül dönemsel koşusunda kontrol edilecek.",
      kaynak: "bis.org"
    }
  ]
};
