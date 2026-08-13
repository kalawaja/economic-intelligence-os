// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-13",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Temmuz CPI tam beklentide (manşet %3,4, çekirdek %2,5) gelince Eylül artırım fiyatlaması ~%38'e indi ve Fed göstergesi izlemeden çıktı; termometre 3'ten 2'ye geriledi. İzlemede getiri eğrisi (+0,48) ve hedef üstü enflasyon kaldı; oynaklık, kredi ve Türkiye kanalları sakin.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,48 puan",
      durum: "izleme",
      puanli: true,
      detay: "11 Ağu: +0,48 — +0,50 izleme eşiğinin hemen altında; hafta boyu +0,44/+0,48 bandında. CPI sonrası kısa uç gevşedi, dikleşme sınırlı.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,28",
      durum: "normal",
      puanli: true,
      detay: "11 Ağu kapanışı 15,28 — 20 eşiğinin belirgin altında; CPI günü öncesi bile oynaklık talebi düşük kaldı.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "272 bp",
      durum: "normal",
      puanli: true,
      detay: "11 Ağu: 272 bp — 300 bp izleme eşiğinin altında; kredi kanalında stres yok, ICE/Nvidia tahvil ihraçları sorunsuz emiliyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0,1",
      durum: "normal",
      puanli: true,
      detay: "12 Ağu kapanışı 7.748,50 — rekor 7.757,64'ün ~%0,1 altında; CPI sonrası zirve yeniden menzilde.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,529",
      durum: "normal",
      puanli: true,
      detay: "31 Tem haftası: −0,529 — ortalamadan belirgin gevşek; koşullar sıkılaşma işareti vermiyor.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03 — eşiklerin altında; zayıf istihdama (−23 bin) rağmen kural tetiklenmedi. Ağustos verisi Eylül başında.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,7",
      durum: "izleme",
      puanli: true,
      detay: "Temmuz CPI %3,4 (aylık +%0,1), çekirdek %2,5 (+%0,2) — tam beklentide; PCE %3,7 (Haziran). Manşet %3 eşiğinin üzerinde kaldığı için izleme sürüyor; petrol geçişkenliği Ağustos verisi için ana risk.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%38",
      durum: "normal",
      puanli: true,
      detay: "CPI sonrası Eylül artırım fiyatlaması ~%48'den ~%38'e indi (FedWatch; rateprobability ~%45 — kaynaklar arası fark, teyit gerektirir); %50 eşiğinin altına dönünce gösterge izlemeden çıktı. Aralık'ta ~%45 artırım fiyatlaması duruyor. DFF %3,63.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,78",
      durum: "normal",
      puanli: true,
      detay: "13 Ağu: 47,78 (satış) — aylık değişim ~+%0,4; %5 izleme eşiğinin çok altında, kur kanalı sakin.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "164,4 milyar $",
      detay: "31 Temmuz haftası. Yeni haftalık bülten bugün (13 Ağu, 14:30 TSİ) — koşu saatinde henüz yayımlanmamıştı; yarınki koşuda güncellenecek.",
      kaynak: "tcmb.gov.tr"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026'da.",
      kaynak: "bis.org"
    }
  ]
};
