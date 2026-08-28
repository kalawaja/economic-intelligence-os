// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-28",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2/18 — kompozisyon dördüncü gün aynı: getiri eğrisi (+0,47) ve hedef üstü enflasyon (çekirdek PCE %3,3 / manşet %3,7) izlemede. Nvidia günüyle riskli varlıklar gevşedi (VIX 15,21; HY OAS 267 bp; S&P zirveden −%0,9); Warsh bugün 14:00 UTC'de ilk Jackson Hole konuşmasını yapıyor — Eylül'de bekleme ~%58,6-65, Aralık'a kadar artırım fiyatlaması >%70 (kaynak makası şerhli). Yeni alarm yok.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,47 puan",
      durum: "izleme",
      puanli: true,
      detay: "27 Ağu: +0,47 — üç gündür sabit, +0,50 izleme eşiğinin hemen altında. 10Y %4,68 / 2Y %4,24 (28 Ağu sabahı); Warsh konuşması kısa uçta oynaklık yaratabilir.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,21",
      durum: "normal",
      puanli: true,
      detay: "26 Ağu kapanışı 15,21 (25 Ağu 15,45'ten geriledi) — Nvidia bilançosu olay riski sorunsuz geçti; 20 izleme eşiğinin belirgin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "267 bp",
      durum: "normal",
      puanli: true,
      detay: "26 Ağu: 267 bp (270'ten daralma) — kredi kanalı sakin; 300 bp izleme eşiğinin altında.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%0,9",
      durum: "normal",
      puanli: true,
      detay: "27 Ağu kapanışı 7.730,99 (+%0,72) vs zirve 7.798,99 — Nvidia rallisiyle mesafe −%1,6'dan −%0,9'a kapandı; ama eşit-ağırlık seans içinde eksiydi (dar liderlik).",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,566",
      durum: "normal",
      puanli: true,
      detay: "21 Ağu haftası: −0,566 — koşullar ortalamadan gevşek; sıfırın belirgin altında.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03 — resesyon sinyali yok; haftalık işsizlik başvuruları 203 bin (207 binden düşüş), istihdamda kırılma görünmüyor.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,3",
      durum: "izleme",
      puanli: true,
      detay: "CPI %3,4 (Tem); çekirdek PCE %3,3, manşet PCE %3,7 (Tem — manşet iki ölçümde de +0,1 sıcak). %3 izleme eşiğinin üzerinde; Warsh'ın bugünkü konuşmasının ana malzemesi.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%35-40",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63. Eylül toplantısında bekleme ~%58,6-65 (Beansprout 25 Ağu %58,6 — bayat; TE ~%65), Eylül artırımı ~%35-40 ile %50 izleme eşiğinin altında; ama Aralık'a kadar artırım fiyatlaması >%70 (TE). Warsh Jackson Hole konuşması bugün 14:00 UTC — koşu sonrası.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,13",
      durum: "normal",
      puanli: true,
      detay: "27 Ağu: 48,13 (gün içi +%0,05); aylık değişim ~+%1 — %5 izleme eşiğinin belirgin altında, kontrollü seyir.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "188,4 milyar $",
      detay: "21 Ağu haftası RESMÎ bülten: +4,9 milyar $ artışla 188,4 milyar $ (dünkü basın hesabı ~188,8 hafif yukarıdaydı — düzeltildi). Haziran dibi 149,2'den toplam artış ~39 milyar $.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
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
