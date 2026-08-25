// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-25",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2/18 ile DÜŞÜK; getiri eğrisi +0,46 ile iki günlük tam-eşik duruşunun ardından izleme bandına geri döndü ve hedef üstü enflasyonla birlikte ikinci izleme kartını yaktı. Eylül artırım fiyatlaması ~%40'a tırmanırken tarife ve İran şokları oynaklık/kredi kanallarına hâlâ yansımadı; ilk büyük test Çarşamba çekirdek PCE + Nvidia bilançosu, ardından Cuma Warsh.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,46 puan",
      durum: "izleme",
      puanli: true,
      detay: "24 Ağu: +0,46 — 20-21 Ağu'da iki gün tam +0,50'de kaldıktan sonra izleme bandına geri döndü. 10Y %4,71 / 30Y ~%5,25 platosunda uzun uç Warsh öncesi sakin; kısa uç artırım fiyatlamasıyla destekli.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,13",
      durum: "normal",
      puanli: true,
      detay: "FRED kapanışı 21 Ağu 15,13; Pazartesi gün içi ~15,9'a yükseldi — İran paketi ve çip satışına rağmen 20 izleme eşiğinin belirgin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "275 bp",
      durum: "normal",
      puanli: true,
      detay: "20 Ağu okuması 275 bp — 300 bp izleme eşiğinin altında; kredi kanalı tarife ve İran şoklarına hâlâ kayıtsız.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "zirveden −%1,8",
      durum: "normal",
      puanli: true,
      detay: "Pazartesi 7.658,29 (−%0,28) vs 13 Ağu zirvesi 7.798,99 — çip satışına rağmen %10 düzeltme eşiğinden uzak. (FRED Pazartesi kapanışını henüz yayımlamadı; seviye Trading Economics.)",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,559",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu haftası −0,559 — koşullar ortalamadan gevşek. Yeni okuma 26 Ağu.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03 — istihdam kanalında resesyon sinyali yok.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "CPI yıllık %3,4 — %3 izleme eşiğinin üstünde. Çekirdek PCE Çarşamba: konsensüs a/a %0,2, y/y %3,2-3,3; %0,3+ okuma Eylül artırım olasılığını yükseltir.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%40",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63; FedWatch Eylül'de sabit olasılığını %58,6 fiyatlıyor (24 Ağu %63'ten geriledi) — artırım fiyatlaması ~%40'a yükseldi, %50 izleme eşiğine yaklaşıyor. Warsh Cuma Jackson Hole'da; FOMC karartması ~5 Eylül'de başlıyor.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,08",
      durum: "normal",
      puanli: true,
      detay: "24 Ağu 48,08 — aylık ~+%1, eşik dışı. TCMB haftalık bülteni Perşembe.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "183,5 milyar $",
      detay: "Son resmî okuma; yeni haftalık bülten 27 Ağu Perşembe.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026.",
      kaynak: "bis.org (ilk kontrol Eylül 2026; çeyreklik)"
    }
  ]
};
