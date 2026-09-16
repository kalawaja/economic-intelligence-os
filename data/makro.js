// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-09-16",
  puan: 3,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 3/18 DÜŞÜK — yeni alarm yok. Fed kartı izlemede: FedWatch %92,5 / swap ~%94, karar 14:00 ET. Eğri +0,33 ve CPI %3,4 izlemede. VIX 17,20; HY OAS 271 bp; S&P zirveden −%3,0; NFCI −0,564; Sahm −0,07. Brent Salı ~108,5 $, Çarşamba erken ~108 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,33 puan",
      durum: "izleme",
      puanli: true,
      detay: "15 Eyl FRED T10Y2Y +0,33 (10Y ~%4,98–5,00 / seans içi %5,041). +0,50 izleme eşiğinin altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "17,20",
      durum: "normal",
      puanli: true,
      detay: "15 Eyl kapanış 17,20 (14 Eyl 17,10). 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "271 bp",
      durum: "normal",
      puanli: true,
      detay: "14–15 Eyl: 271 bp (11 Eyl 265). 300 bp izleme eşiğinin altında.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%3,0",
      durum: "normal",
      puanli: true,
      detay: "15 Eyl nakit 7.585,73 vs 13 Ağu zirve 7.816,70 — −%3,0. Kapanış zirvesi 7.798,99'a göre −%2,7. %10 eşiğinin altında.",
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
      detay: "Ağustos CPI yıllık %3,4 (aylık +%0,4; çekirdek aylık +%0,3). Son PCE manşet Temmuz %3,7 / çekirdek %3,3. %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım %92,5",
      durum: "izleme",
      puanli: true,
      detay: "DFF bandı 3,50-3,75. FedWatch %92,5 / swap ~%94. FOMC karar 16 Eyl 14:00 ET — bu okumada henüz yok.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,65",
      durum: "normal",
      puanli: true,
      detay: "TCMB 15 Eyl 15:30 alış 48,5585 / satış 48,6460. Çarşamba serbest piyasa ~48,66. Aylık ~+%1,6-1,8 — %5 eşiğinin altında.",
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
      detay: "Çeyreklik seri; dönemsel koşuda kontrol edilecek.",
      kaynak: "bis.org"
    }
  ]
};
