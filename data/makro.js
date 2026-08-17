// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-17",
  puan: 1,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2'den 1'e geriledi: getiri eğrisi +0,51 ile izleme eşiğinin üzerine dikleşti ve izlemeden çıktı; izlemede yalnız hedef üstü enflasyon (CPI %3,4) kaldı. Perakende −%0,6 ve Michigan 51,0 artırım fiyatlamasını söndürdü — büyüme momentumu yeni dikkat kalemi; yeni alarm yok.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,51 puan",
      durum: "normal",
      puanli: true,
      detay: "Üç günlük +0,48 platosunun ardından 14 Ağu'da +0,51'e dikleşti; izleme eşiğinin (+0,50) üzerine çıktı. Perakende verisi sonrası kısa ucun gevşemesiyle sağlıklı kanaldan dikleşme.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "14,63",
      durum: "normal",
      puanli: true,
      detay: "13 Ağu kapanışı 14,63; 14-15 bandında yatay. Rekor bölgesinde düşük oynaklık rejimi sürüyor.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "271 bp",
      durum: "normal",
      puanli: true,
      detay: "13 Ağu: 271 bp; hafta boyunca 270-272 bandında. Kredi kanalında stres yok.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0,2",
      durum: "normal",
      puanli: true,
      detay: "Cuma 7.785 kapanış; 13 Ağu rekoru 7.798,99'un ~%0,2 altında. S&P ve Nasdaq üçüncü haftayı da artıda kapattı; Russell 2000 rekor tazeledi.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,549",
      durum: "normal",
      puanli: true,
      detay: "7 Ağu haftası: −0,549; koşullar ortalamadan belirgin gevşek. Yeni okuma bu hafta.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03; tetik uzak. Perakende −%0,6 ve Michigan 51,0 sonrası Ağustos istihdam verisi kritikleşti — ilk pozitif okuma erken sinyal sayılacak.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "Temmuz CPI %3,4 (önceki %3,5); PPI'ın %4,7'ye gerilemesi yönü destekliyor ama manşet %3 eşiğinin üzerinde. Ağustos verisi petrol geçişkenliğinin ilk gerçek testi.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım <%40",
      durum: "normal",
      puanli: true,
      detay: "Perakende −%0,6 + Michigan 51,0 sonrası Eylül artırım fiyatlaması geriledi: FedWatch <%35, rateprobability %40 (16 Ağu) — kaynak makası sürüyor, iki kaynakta da %50 eşiği aşılmıyor. Aralık'a ~−58 bp gevşeme fiyatlı.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,90",
      durum: "normal",
      puanli: true,
      detay: "17 Ağu: 47,90 (+%0,04 günlük); aylık ~+%0,6 — eşiklerin çok altında, kontrollü seyir.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "178,4 milyar $",
      detay: "Son okuma 7 Ağu haftası: 178,4 mlr $ (haftalık +13,9 mlr $ — döviz +7,2, altın değerlemesi +6,7). Yeni bülten 20 Ağustos Perşembe.",
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
