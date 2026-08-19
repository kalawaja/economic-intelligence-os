// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-19",
  puan: 1,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Kospi −%6,4 (sidecar) ve ABD'de üçüncü düşüş gününe karşın kredi/oynaklık kanalları sakin: VIX 15,76, HY OAS 270 bp — satış pozisyonel, sistemik değil. 30Y gün içi %5,33 (19 yıl zirvesi) ile vade primi kanalı termometrenin kör noktası olmayı sürdürüyor; izlemede tek gösterge hedef üstü enflasyon.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,52 puan",
      durum: "normal",
      puanli: true,
      detay: "18 Ağu; üçüncü gün +0,50 bandının üstünde — ama dikleşme uzun uç satışından (30Y gün içi %5,33, 2007'den beri zirve). Vade primi/arz kanalı göstergenin ölçmediği asıl risk.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,76",
      durum: "normal",
      puanli: true,
      detay: "Salı kapanışı +%3,8 — Kospi sidecar'ına ve tekno satışına karşın 20 eşiğinin belirgin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "270 bp",
      durum: "normal",
      puanli: true,
      detay: "17 Ağu, +3 bp — kredi piyasası bellek tersinmesini sistemik risk olarak fiyatlamıyor; 300 bp izleme eşiği uzak.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%1,4",
      durum: "normal",
      puanli: true,
      detay: "Salı kapanışı 7.691,76 (−%0,7; üçüncü düşüş günü); zirve 13 Ağu 7.798,99 (FRED hakemliğiyle kapanış çelişkileri çözüldü).",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,549",
      durum: "normal",
      puanli: true,
      detay: "7 Ağu haftası — gevşek; yeni okuma bugün (19 Ağu) yayımlanır, tersinme sonrası ilk hakem.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması — resesyon sinyali yok; istihdam momentumu zayıflasa da (3 aylık ort. ~20 bin) eşik uzak.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "CPI (Tem) hedefin belirgin üstünde; Brent 91,5 $ (4. yükseliş günü) enerji bileşeni üzerinden yukarı risk. Çekirdek PCE 26 Ağu.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%31-41",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63; Eylül artırım fiyatlaması FedWatch ~%31 / rateprobability ~%41 — kaynak makası sürüyor, ikisi de %50 altında. FOMC Temmuz tutanakları bugün 18:00 UTC.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,92",
      durum: "normal",
      puanli: true,
      detay: "Günlük +%0,04; aylık ~+%0,7 — eşiklerin çok altında, seyir sakin.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "178,4 milyar $",
      detay: "Son okuma; yeni haftalık bülten yarın (20 Ağu Perşembe).",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026. BIS yıllık raporundaki dolaşımsal finansman uyarısına WSJ'nin ~3 trln $ bilanço-dışı taahhüt analizi eklendi.",
      kaynak: "bis.org"
    }
  ]
};
