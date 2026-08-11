// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-11",
  puan: 3,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2'den 3'e yükseldi: petrolün +%5 sıçraması sonrası Eylül artırım fiyatlaması ~%52 ile %50 eşiğini yeniden aştı ve Fed göstergesi izlemeye döndü. Getiri eğrisi (+0,46) ve hedef üstü enflasyon izlemede; Çarşamba Temmuz CPI belirleyici.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,46 puan",
      durum: "izleme",
      puanli: true,
      detay: "7 Ağu kapanışı. 10Y Pazartesi %4,692'ye yükseldi (petrol kaynaklı enflasyon endişesi); +0,50 'düz eğri' eşiğinin hâlâ altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "14,90",
      durum: "normal",
      puanli: true,
      detay: "7 Ağu kapanışı; hafta boyunca 15-16,5 bandından gevşedi. Petrol şokuna rağmen hisse oynaklığı sakin.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "270 bp",
      durum: "normal",
      puanli: true,
      detay: "7 Ağu; hafta içinde 278'den daraldı. Kredi piyasası istihdam şokunu da petrol şokunu da sistemik risk olarak fiyatlamıyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0,1",
      durum: "normal",
      puanli: true,
      detay: "Pazartesi kapanış 7.753,11; Cuma rekoru 7.757,64'ün hemen altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,529",
      durum: "normal",
      puanli: true,
      detay: "Koşullar ortalamadan belirgin gevşek; haftalardır −0,52/−0,53 bandında.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz: işsizlik %4,1'e gerilediği için negatif; ancak düşüş katılım kaynaklı (%61,4) — sinyal değeri düşük.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,5 / %3,7",
      durum: "izleme",
      puanli: true,
      detay: "Haziran verileri; Temmuz CPI Çarşamba (nowcast manşet +%0,09 aylık, ~%3,42 yıllık). Petrol +%5, Ağustos nowcast'ini (+%0,38) yukarı itiyor.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%52",
      durum: "izleme",
      puanli: true,
      detay: "Eylül artırım fiyatlaması Cuma ~%44'ten petrol şokuyla ~%52'ye çıktı — %50 eşiğinin yeniden üzerinde (teyit gerektirir; kaynaklar %52-55 aralığında).",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,71",
      durum: "normal",
      puanli: true,
      detay: "11 Ağu satış kuru; aylık değişim ~%0,5 ile eşiklerin çok altında, seyir yatay.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "164,4 milyar $",
      detay: "31 Temmuz haftası (+1,84 mlr $). Yeni haftalık bülten Perşembe 13 Ağustos'ta.",
      kaynak: "tcmb.gov.tr"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026'da yapılacak.",
      kaynak: "bis.org"
    }
  ]
};
