// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-20",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Hazine'nin geri alım müdahalesi (2→4 mlr $, 10-30Y) uzun ucu çevirdi: 30Y %5,20'ye, 10Y %4,66'ya indi; S&P üç günlük düşüşü kırdı, Kospi +%5,9 toparlandı. Paradoks: 10Y'nin hızlı düşüşü 10Y−2Y makasını +0,46'ya düzleştirip getiri eğrisini yeniden izlemeye soktu — puan 1→2. Kredi ve oynaklık kanalları gevşek (VIX 14,89; HY OAS 275 bp); yeni alarm yok.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,46 puan",
      durum: "izleme",
      puanli: true,
      detay: "19 Ağu: Hazine geri alım duyurusu 10Y'yi (−5,1 bp, %4,655) 2Y'den (+0,6 bp, %4,181) hızlı indirince makas üç gün sonra yeniden +0,50 altına düzleşti. Politika kaynaklı düzleşme; 30Y %5,196.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "14,89",
      durum: "normal",
      puanli: true,
      detay: "19 Ağu kapanışı −%6 ile 14,89 — müdahale sonrası oynaklık geri çekildi; 20 eşiğinin belirgin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "275 bp",
      durum: "normal",
      puanli: true,
      detay: "18 Ağu: 275 bp (+5 bp) — iki günlük hisse tersinmesinde bile 300 bp eşiğinin altında; kredi kanalı satışı sistemik olarak fiyatlamadı.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%1,2",
      durum: "normal",
      puanli: true,
      detay: "19 Ağu kapanışı 7.707,98 (+%0,2; üç günlük düşüş serisi kırıldı) — zirve 13 Ağu 7.798,99'dan yalnızca −%1,2.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,559",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu haftası (19 Ağu yayını): −0,559 — koşullar gevşemeye devam ediyor; tersinme haftasında bile sıkılaşma izi yok.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03; işsizlik %4,2'de yatay. Katılım düşüşü nedeniyle sinyal değeri sınırlı — yapısal olarak geç kalan gösterge.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "CPI %3,4 (Tem) — hedef üstü; FOMC tutanakları tarife, Ortadoğu enerji maliyeti ve AI talebini kalıcı baskı olarak saydı. Çekirdek PCE 26 Ağu'da.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım fiyatlaması çözüldü",
      durum: "normal",
      puanli: true,
      detay: "Tutanaklar şahin (9-3; üç bölge başkanı artırım istedi) ama bayat: FedWatch Eylül'de %68,4 sabit; rateprobability artık %34,4 İNDİRİM fiyatlıyor — makas yön değiştirdi. Artırım olasılığı eşiğin çok altında.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,95",
      durum: "normal",
      puanli: true,
      detay: "20 Ağu: 47,95 (+%0,07); aylık değişim ~+%0,7 — eşiklerin belirgin altında, kontrollü seyir.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "183,5 milyar $ (öncü)",
      detay: "14 Ağu haftası öncü tahmini: +5,1 mlr $ ile 183,5 mlr $ — 5 ayın zirvesi. Resmî haftalık bülten bugün 14:30 TSİ'de; teyit sonraki koşuda işlenecek.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026'da. AI dolaşımsal finansman modülünün dış çapalarından.",
      kaynak: "bis.org"
    }
  ]
};
