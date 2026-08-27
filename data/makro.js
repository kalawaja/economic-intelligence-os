// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-27",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Kompozisyon üçüncü gün aynı: eğri +0,47 ve hedef üstü enflasyon izlemede. Çekirdek PCE a/a %0,2 ile eşik senaryosunu tetiklemedi (manşet %3,7 hafif sıcak); Nvidia kılavuzu risk iştahını destekledi. Yeni alarm yok.",
  gostergeler: [
    { id: "getiri-egrisi", ad: "Getiri Eğrisi (10Y−2Y)", deger: "+0,47 puan", durum: "izleme", puanli: true, detay: "26 Ağu FRED; +0,50 izleme eşiğinin hemen altında yatay. 10Y %4,65 / 2Y %4,22.", esik: "< +0,50 izleme · < 0 alarm", kaynak: "FRED T10Y2Y" },
    { id: "vix", ad: "VIX (Oynaklık)", deger: "15,45", durum: "normal", puanli: true, detay: "25 Ağu kapanış; Nvidia bilançosu öncesi bile 16'nın altında — olay-riski tekil hissede fiyatlandı.", esik: "≥ 20 izleme · ≥ 30 alarm", kaynak: "FRED VIXCLS" },
    { id: "hy-oas", ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)", deger: "270 bp", durum: "normal", puanli: true, detay: "25 Ağu; dar bantta yatay — kredi kanalında stres yok.", esik: "≥ 300 bp izleme · ≥ 500 bp alarm", kaynak: "FRED BAMLH0A0HYM2" },
    { id: "sp500", ad: "S&P 500 Zirveden Uzaklık", deger: "~−%1,6", durum: "normal", puanli: true, detay: "Çarşamba ~7.676 (düz kapanış) vs zirve 7.798,99; Nvidia sonrası vadeliler +%0,4.", esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm", kaynak: "FRED SP500" },
    { id: "nfci", ad: "Finansal Koşullar (Chicago Fed NFCI)", deger: "−0,566", durum: "normal", puanli: true, detay: "21 Ağu haftası (yeni okuma; önceki −0,561) — koşullar gevşek, hafif gevşeme sürüyor.", esik: "≥ 0 izleme · ≥ +0,5 alarm", kaynak: "FRED NFCI" },
    { id: "sahm", ad: "Sahm Kuralı (Resesyon Göstergesi)", deger: "−0,03", durum: "normal", puanli: true, detay: "Temmuz okuması; işgücü tarafında resesyon işareti yok.", esik: "≥ 0,30 izleme · ≥ 0,50 alarm", kaynak: "FRED SAHMREALTIME" },
    { id: "enflasyon", ad: "Enflasyon (CPI / PCE, yıllık)", deger: "%3,4 / %3,7", durum: "izleme", puanli: true, detay: "Temmuz PCE: manşet y/y %3,7 (beklentinin 0,1p üstü), çekirdek %3,3 (uyumlu; a/a %0,2 — eşik senaryosu tetiklenmedi). CPI %3,4.", esik: "> %3 izleme · ≥ %6 alarm", kaynak: "FRED CPIAUCSL" },
    { id: "fed", ad: "Fed Politika Yönü", deger: "%3,63 + artırım ~%40", durum: "normal", puanli: true, detay: "DFF %3,63; FedWatch aynası Eylül'de sabit %58,6 (25 Ağu verisi — PCE sonrası güncelleme belirsiz, tek ayna şerhi). Artırım fiyatlaması %50 izleme eşiğinin altında; Warsh yarın 10:00 ET Jackson Hole'da.", esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm", kaynak: "FRED DFF (+CME FedWatch)" },
    { id: "usdtry", ad: "USD/TRY (aylık değişim)", deger: "48,12", durum: "normal", puanli: true, detay: "Aylık ~+%1 — %5 izleme eşiğinin çok altında; EUR/TRY 56,12.", esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm", kaynak: "dunya.com/finans/doviz" }
  ],
  bilgi_kartlari: [
    { id: "tcmb-rezerv", ad: "TCMB Toplam Rezervleri", deger: "~188,8 milyar $", detay: "21 Ağu haftası basın hesaplaması (+5,3 mlr $; Haziran dibi 149,2'den +39,6). Resmî haftalık bülten bugün TSİ 14:30 — yarınki koşuda kesinleştirilecek.", kaynak: "tcmb.gov.tr" },
    { id: "bis-kredi", ad: "BIS Kredi/GSYH Açığı (çeyreklik)", deger: "—", detay: "Çeyreklik seri; ilk kontrol Eylül 2026.", kaynak: "bis.org" }
  ]
};
