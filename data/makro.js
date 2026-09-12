// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-09-12",
  puan: 3,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 3/18 DÜŞÜK — Fed kartı yeni izleme: 11 Eyl CPI sonrası Eylül artırım ~%85-87. Getiri eğrisi +0,33 (izleme) ve CPI %3,4 (izleme) duruyor. VIX 15,84; HY OAS 270 bp; S&P zirveden −%2,0; NFCI −0,564; Sahm −0,07. Yeni alarm yok. Brent 104,61 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,33 puan",
      durum: "izleme",
      puanli: true,
      detay: "11 Eyl: +0,33 (10Y %4,96 / 2Y %4,63). 28 Ağu +0,47'den daraldı — kısa uç Warsh + CPI ile yukarı geldi; +0,50 izleme eşiğinin altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,84",
      durum: "normal",
      puanli: true,
      detay: "11 Eyl kapanışı 15,84 (10 Eyl 17,84'ten geriledi) — 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "270 bp",
      durum: "normal",
      puanli: true,
      detay: "10 Eyl: 270 bp — 300 bp izleme eşiğinin altında; kredi kanalı sakin.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%2,0",
      durum: "normal",
      puanli: true,
      detay: "11 Eyl kapanışı 7.656,98 vs 13 Ağu zirve 7.816,70 — mesafe −%2,0; %10 izleme eşiğinin belirgin altında.",
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
      deger: "%3,63 + artırım ~%85-87",
      durum: "izleme",
      puanli: true,
      detay: "DFF bandı 3,50-3,75. 11 Eyl CPI sonrası CME FedWatch Eylül 25 bp artırım ~%85-87 (kaynak bandı %85-91). %50 izleme eşiği aşıldı — kart 28 Ağu'daki 'normal'den izlemeye geçti. FOMC 15-16 Eyl.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,43",
      durum: "normal",
      puanli: true,
      detay: "11 Eyl TCMB gösterge alış 48,4305 / satış 48,5178; aylık değişim ~+%1 — %5 izleme eşiğinin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "184,2 milyar $",
      detay: "4 Eyl haftası resmî bülten: 184,247 milyar $ (28 Ağu 188,198'den −3,951; altın −3,248). 21 Ağu 188,4'ten iki haftalık gerileme.",
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
