// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-10-02",
  puan: 4,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 4/18 DÜŞÜK — yeni alarm yok. 10Y gün içi %5,34 / kapanış ~%5,26 izlemede; PCE %3,4 / çekirdek %3,0 izlemede. Brent Aralık 102,31 $; VIX 16,39. Amazon PPA; Çin yakıt ihracı askıda. İstihdam 08:30 ET henüz yok.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,2 / 10Y %5,26",
      durum: "izleme",
      puanli: true,
      detay: "1 Eki gün içi %5,3445 (2002’den beri tepe, Reuters). Kapanış GuruFocus ~%5,26; 5Y ~%5,02. Eğim +0,50 izleme eşiğinin altında, seviye yüksek.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y / Reuters / GuruFocus"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "16,39",
      durum: "normal",
      puanli: true,
      detay: "1 Eki kapanış 16,39. Gün içi 17,59. 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "276 bp",
      durum: "normal",
      puanli: true,
      detay: "Son yayın 276 bp. 300 bp izleme eşiğinin altında; güncelleme bekleniyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~−%1–3 / rekor yakın",
      durum: "normal",
      puanli: true,
      detay: "1 Eki seansı getiri baskısına rağmen teknoloji ile toparlandı. %10 eşiğinin altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "piyasa"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,564",
      durum: "normal",
      puanli: true,
      detay: "Son yayın −0,564 — koşullar ortalamadan gevşek. Yeni haftalık bekleniyor.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,07",
      durum: "normal",
      puanli: true,
      detay: "Ağustos okuması −0,07. Eylül istihdamı 2 Eki 08:30 ET — henüz yok.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,4",
      durum: "izleme",
      puanli: true,
      detay: "Ağustos CPI yıllık %3,4. Ağustos PCE yıllık %3,4; çekirdek PCE %3,0. %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL / BEA PCE"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,88 + Ekim bölünmüş",
      durum: "normal",
      puanli: true,
      detay: "16 Eyl 25 bp teslim; bant 3,75-4,00. PCE sürprizi Ekim aciliyetini düşürdü; toplantı-dışı hamle yok. İstihdam henüz yok.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "~48,7",
      durum: "normal",
      puanli: true,
      detay: "Son bant ~48,7. Aylık değişim %5 eşiğinin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "TCMB / piyasa"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "174,4 milyar $",
      detay: "18 Eyl haftası resmî (24 Eyl yayın): brüt toplam 174,4 (−4,3 vs 178,7); döviz 62,8; altın 111,6. Net 55,8.",
      kaynak: "tcmb.gov.tr (haftalık bülten)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; dönemsel koşuda kontrol edilecek.",
      kaynak: "bis.org"
    }
  ]
};
