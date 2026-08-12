// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-12",
  puan: 3,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 3/18 ile dünle aynı: getiri eğrisi +0,47 ile eşiğin hemen altında düz, enflasyon hedef üstü ve Eylül artırım fiyatlaması ~%57 ile eşik üstünde. Temmuz CPI bugün 12:30 UTC'de açıklanacak — çekirdekte sıcak bir okuma + 89 $ Brent, Fed kanalını alarma yaklaştırır; kredi ve oynaklık kanalları ise stressiz.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,47 puan",
      durum: "izleme",
      puanli: true,
      detay: "10 Ağu kapanışı; +0,50 eşiğinin hemen altında düz seyir. 10Y ~%4,69'da; bugünkü CPI sonrası kısa ucun tepkisi inversiyon riskinin ana belirleyicisi.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,46",
      durum: "normal",
      puanli: true,
      detay: "10 Ağu kapanışı; 20 eşiğinin belirgin altında. CPI arifesinde endeksler zirveye yakın, oynaklık kanalı sakin.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "270 bp",
      durum: "normal",
      puanli: true,
      detay: "10 Ağu; 300 bp izleme eşiğinin altında ve daralma eğilimi korunuyor. Nvidia tahvil spreadlerinin %25-sınırı açıklamasıyla daralması kredi kanalındaki rahatlığı teyit ediyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0,4",
      durum: "normal",
      puanli: true,
      detay: "11 Ağu kapanışı 7.728,20; zirve 7.757,64 (7 Ağu). CPI öncesi üç günlük sınırlı geri çekilme, düzeltme eşiğinin çok uzağında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,529",
      durum: "normal",
      puanli: true,
      detay: "31 Temmuz haftası; ortalamadan belirgin gevşek. Yeni haftalık okuma bugün yayımlanıyor.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz değeri (7 Ağu güncellemesi); negatif bölgede, resesyon sinyali yok. Cuma istihdam şokunun katılım kaynaklı olduğu okuması korunuyor.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,5 / %3,7",
      durum: "izleme",
      puanli: true,
      detay: "Haziran yıllık değerleri hedefin üstünde. Temmuz CPI bugün 12:30 UTC'de: konsensüs manşet aylık ~+%0,1-0,2 (yıllık ~%3,4), çekirdek +%0,2; petrol şoku Ağustos nowcast'ını (+%0,38 manşet) yukarı itiyor.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%57",
      durum: "izleme",
      puanli: true,
      detay: "Efektif faiz %3,63; Eylül artırım fiyatlaması ~%57 ile üçüncü gündür %50 eşiğinin üstünde ve tırmanıyor (piyasa-türevi, gün içi ±3-5 puan oynak). Bugünkü CPI belirleyici.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,74",
      durum: "normal",
      puanli: true,
      detay: "12 Ağu satış kuru; aylık değişim ~+%0,4 ile eşiklerin çok altında, kontrollü seyir.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "164,4 milyar $",
      detay: "31 Temmuz haftası (+1,84 milyar $). Yeni haftalık bülten yarın (13 Ağustos Perşembe) — 7 Ağustos haftası verisi.",
      kaynak: "tcmb.gov.tr"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik gösterge; ilk kontrol Eylül 2026'da yapılacak.",
      kaynak: "bis.org"
    }
  ]
};
