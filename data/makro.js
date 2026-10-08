// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-10-08",
  puan: 4,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 4/18 DÜŞÜK — termometre alarmı yok. Saha alarmı: Katar açıklarında tanker isabeti. 10Y 7 Eki kapanış %5,277 izlemede; PCE %3,4 / çekirdek %3,0 izlemede. VIX 15,08. Brent kapanış 100,20 $.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "~+0,45 / 10Y %5,28",
      durum: "izleme",
      puanli: true,
      detay: "7 Eki TNX kapanış 52,77 (%5,277); gün içi 53,64 (%5,364). 6 Eki %5,269. Eğim önceki ~+0,45; yeni 2Y baskısı yok. Seviye %5,10 üstü.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "YCharts TNX / H.15"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "15,08",
      durum: "normal",
      puanli: true,
      detay: "7 Eki kapanış 15,08 (önceki 15,01). 20 izleme eşiğinin altında.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "Cboe VIX"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "276 bp",
      durum: "normal",
      puanli: true,
      detay: "Son yayın 276 bp. Pencerede yeni FRED baskısı yok. 300 bp izleme eşiğinin altında.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "rekorun %0,2 altı",
      durum: "normal",
      puanli: true,
      detay: "7 Eki S&P 7.801,77 (−%0,22). 6 Eki rekor 7.818,93. %10 eşiğinin altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "piyasa"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,564",
      durum: "normal",
      puanli: true,
      detay: "Son yayın −0,564 — koşullar ortalamadan gevşek. Yeni haftalık yok.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,07 / işsizlik %4,2",
      durum: "normal",
      puanli: true,
      detay: "Son Sahm −0,07. Eylül işsizlik %4,2 (önceki %4,1). 0,30 izleme eşiğine tek aylık sıçrama yetmez; yeni Sahm baskısı yok.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME / BLS"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,4",
      durum: "izleme",
      puanli: true,
      detay: "Ağustos CPI yıllık %3,4. Ağustos PCE yıllık %3,4; çekirdek PCE %3,0. Ücret yıllık %3,0. %3 izleme eşiğinin üzerinde.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL / BEA PCE / BLS"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,88 / yıl sonu eğilimi",
      durum: "normal",
      puanli: true,
      detay: "7 Eki tutanak: 16 Eyl 25 bp oybirliği; çoğu katılımcı yıl sonuna bir artırım daha görüyor. Ekim fiyatı 6 Eki %22; yeni CME baskısı yok. Toplantı-dışı hamle yok.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FOMC tutanakları 7 Eki / Reuters"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "~49,13",
      durum: "normal",
      puanli: true,
      detay: "4 Eki Xe ~49,13. Aylık değişim %5 eşiğinin altında. Pencerede yeni baskı yok.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "Xe / piyasa"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "171,2 milyar $",
      detay: "25 Eyl haftası: brüt 171,2 (18 Eyl 174,4; 11 Eyl 178,7). İki haftada −7,5. Döviz 61,6; altın 109,6. Yeni haftalık yok.",
      kaynak: "TCMB haftalık / Endeks24 (4 Eki)"
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
