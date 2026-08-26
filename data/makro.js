// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-26",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2/18: eğri +0,47 ile izleme bandında, enflasyon hedef üstü (CPI %3,4; hanehalkı beklentisi %5,8'e yükseldi). Hürmüz koridor diplomasisi Brent'i 87 $'a indirdi; 10Y %4,63'e geriledi. PCE ve Nvidia bilançosu bugün — %0,3+ çekirdek PCE fed kartını yakabilir.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,47 puan",
      durum: "izleme",
      puanli: true,
      detay: "25 Ağu: +0,47 (24 Ağu +0,46'dan hafif dikleşme) — +0,50 izleme eşiğinin altında üçüncü gün. 10Y %4,63'e indi (Salı −6,5 bp); de-eskalasyon uzun ucu gevşetti, kısa uç artırım fiyatlamasıyla destekli.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,85",
      durum: "normal",
      puanli: true,
      detay: "24 Ağu kapanışı 15,85; Salı seansında ~15,5'e geriledi. Nvidia bilançosu (±%6,75 opsiyon fiyatlaması) öncesi endeks oynaklığı kayıtsız.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "270 bp",
      durum: "normal",
      puanli: true,
      detay: "21 Ağu: 270 bp (275'ten daraldı) — kredi piyasası tarife ve İran şoklarını sistemik risk olarak fiyatlamıyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%1,6",
      durum: "normal",
      puanli: true,
      detay: "Salı kapanışı 7.674,99 (+%0,32) — zirve 7.798,99'un %1,6 altında. Nvidia öncesi risk iştahı döndü; çip satışı durdu.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,559",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu haftası: −0,559 — ortalamadan belirgin gevşek; yeni haftalık okuma bugün yayımlanıyor.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03 — işaret yok. Yumuşak veri (güven 89,4, konut −%10,5) henüz istihdam kanalına yansımadı.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "CPI %3,4 (Temmuz) hedef üstü; hanehalkı 12 ay beklentisi %5,8'e yükseldi (Conference Board). Çekirdek PCE bugün (kons. a/a %0,2 / y/y %3,2-3,3) — pompa 4,10 $/galon ile enerji kanalı açık.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%40",
      durum: "normal",
      puanli: true,
      detay: "FedWatch: Eylül'de sabit %58,6 (yatay); artırım fiyatlaması ~%40 — %50 izleme eşiğinin altında. PCE %0,3+ gelirse eşik test edilir; karartma ~5 Eylül'de başlıyor.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,10",
      durum: "normal",
      puanli: true,
      detay: "USD/TRY 48,10 (25 Ağu kapanışa doğru) — aylık değişim ~+%1, eşiklerin belirgin altında; seyir istikrarlı.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "183,5 milyar $",
      detay: "Son resmî okuma 183,5 milyar $; yeni haftalık bülten yarın (27 Ağu Perşembe) yayımlanacak.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik gösterge; ilk kontrol Eylül 2026'da yapılacak.",
      kaynak: "bis.org (çeyreklik)"
    }
  ]
};
