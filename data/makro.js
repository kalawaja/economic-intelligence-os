// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-24",
  puan: 1,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 1/18 — izlemede yalnız hedef üstü enflasyon. Getiri eğrisi ikinci gün tam eşikte (+0,50) tutundu; uzun uç yüksek ama sakin (10Y %4,71, 30Y %5,25). Kanada'ya %50 tarife yürürlükte ve Bessent'in İran izolasyon paketi bugün 18:00 UTC'de — iki politika şoku da henüz göstergelere yansımadı; Brent 93 $ üstünde üçüncü haftasına girerken CPI patikası ana izleme konusu.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,50 puan",
      durum: "normal",
      puanli: true,
      detay: "21 Ağu kapanışı +0,50 — ikinci gün tam eşikte (kural: <+0,50 izleme). 10Y %4,71, 30Y %5,25 (Pazartesi hafif geri çekilme). Müdahale-artefaktı oynaklığı sürüyor; ±5 bp yeniden izlemeye sokar.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,13",
      durum: "normal",
      puanli: true,
      detay: "Cuma −%5,5 ile 15,13 — eşiğin belirgin altında. Kanada tarife şoku Cuma kapanışından sonra geldi; bugünkü ABD seansı ilk gerçek test.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "275 bp",
      durum: "normal",
      puanli: true,
      detay: "20 Ağu itibarıyla 275 bp (19 Ağu 273) — kredi kanalı tarife ve tahvil gerilimine hâlâ kayıtsız.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~−%1,6",
      durum: "normal",
      puanli: true,
      detay: "Cuma 7.674,37 (+%0,43); 13 Ağu zirvesi 7.798,99'dan −%1,6. Üç büyük endeks haftayı kayıpla kapattı; düzeltme eşiğinin çok uzağında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,559",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu haftası −0,559 — koşullar gevşek; hafif sıkılaşma eğilimi sürse de sıfırın uzağında. Yeni okuma 26 Ağu.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03 — resesyon sinyalinin uzağında; işsizlik başvuruları 206 bin ile güçlü istihdam tablosunu koruyor.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "CPI yıllık %3,4 — hedefin üstü; izleme sürüyor. Kritik veri: çekirdek PCE Çarşamba (26 Ağu). Brent'in 90 $ üstünde üçüncü haftası + Kanada tarifeleri patika riskini artırıyor.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + sabit %63",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63. FedWatch Eylül'de %63 sabit fiyatlıyor (21 Ağu %68,4'ten geriledi); artırım fiyatlaması ~1/3 — %50 eşiğinin altında. Warsh'ın Jackson Hole açılışı 28 Ağu 10:00 ET.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,03",
      durum: "normal",
      puanli: true,
      detay: "Kur 48,03-48,06 bandında; aylık değişim ~+%1 — eşiklerin belirgin altında. EUR/TRY 56,11.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "183,5 milyar $",
      detay: "14 Ağustos haftası resmî bülten: 183,5 milyar $ (haftalık +5,1 milyar $; 5 ayın zirvesi). Yeni haftalık bülten Perşembe (27 Ağu).",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026'da yapılacak.",
      kaynak: "bis.org (ilk kontrol Eylül 2026; çeyreklik)"
    }
  ]
};
