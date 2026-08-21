// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-21",
  puan: 1,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 1/18: izlemede yalnızca hedef üstü enflasyon kaldı. Getiri eğrisi 20 Ağustos'ta tam +0,50'ye açılarak eşik kuralı gereği izlemeden çıktı — ama sınırda ve Hazine müdahalesi artefaktı sürüyor; 30Y ~%5,25'e geri yükseldi. Walmart tüketici yavaşlamasını teyit ederken Philly Fed 5 yılın zirvesinde: veri makası büyüyor, yeni alarm yok.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,50 puan",
      durum: "normal",
      puanli: true,
      detay: "20 Ağu itibarıyla makas tam +0,50 — eşik kuralı (<+0,50 izleme) gereği izlemeden çıktı ama tam sınırda. Düzelme, müdahale sonrası 10Y'nin (~%4,71) geri yükselmesinden geldi; politika artefaktı oynaklığı sürüyor, ±5 bp yeniden izlemeye sokabilir.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,73",
      durum: "normal",
      puanli: true,
      detay: "Walmart satışıyla +%5,7 yükseldi ama 20 eşiğinin belirgin altında; oynaklık kanalı sakin.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "273 bp",
      durum: "normal",
      puanli: true,
      detay: "19 Ağu: 273 bp — tahvil-hisse oynaklığına ve Walmart gününe rağmen kredi kanalı kayıtsız; 300 bp eşiğinin altında.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~−%1,5",
      durum: "normal",
      puanli: true,
      detay: "Kapanış 7.681,27 (−%0,35; Walmart −%8,6 endeksleri çekti); 13 Ağu zirvesi 7.798,99'dan uzaklık −%1,5 — düzeltme eşiğinin çok altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,559",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu haftası: −0,559 — koşullar gevşek; tahvil oynaklığı endekse yansımadı.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03; işsizlik başvuruları 206 bine geriledi — istihdam kanalında resesyon sinyali yok.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 (CPI, Tem)",
      durum: "izleme",
      puanli: true,
      detay: "CPI %3,4 ile hedefin üstünde; Brent 93 $ (ikinci haftalık kazanç) yukarı risk, Walmart'ın 2,9 mlr $ tarife iadesini fiyat indirimine yatırması sınırlı aşağı kanal. Çekirdek PCE 26 Ağu'da.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + sabit ~%68",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63; FedWatch Eylül'de %68,4 sabit fiyatlıyor — artırım fiyatlaması eşiğin çok altında. rateprobability tarafında gün içi savrulma sürüyor (teyit gerektirir). Jackson Hole 27-29 Ağu.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "48,06",
      durum: "normal",
      puanli: true,
      detay: "21 Ağu sabahı 48,06 (+%0,20 günlük); aylık değişim ~+%0,9 — %5 izleme eşiğinin belirgin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "183,5 milyar $",
      detay: "14 Ağu haftası resmî bültenle teyit edildi: haftalık +5,1 milyar $ ile 5 ayın zirvesi — dünkü öncü veri şerhi kapandı.",
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
