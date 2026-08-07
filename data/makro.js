// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-07",
  puan: 3,
  azami: 18,
  seviye: "DÜŞÜK", // 0-3 Düşük · 4-8 Yükselmiş · 9+ Yüksek
  ozet: "Alarm yok; üç gösterge izlemede (getiri eğrisi düz, enflasyon hedef üstü, Fed sıkılaşma yönünde). Q2 verimlilik sürprizi (+%1,4) enflasyon kanalı için olumlu; bugünkü Temmuz istihdam raporu (konsensüs +80 bin) Sahm girdisini ve kısa uç faizleri güncelleyecek.",
  gostergeler: [
    {
      id: "getiri-egrisi", ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,45 puan", durum: "izleme", puanli: true,
      detay: "10Y %4,62 − 2Y %4,20 (5 Ağustos). Eylül faiz artırımı fiyatlaması kısa ucu iterse inversiyon riski büyür.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "https://fred.stlouisfed.org/series/T10Y2Y"
    },
    {
      id: "vix", ad: "VIX (Oynaklık)",
      deger: "15,81", durum: "normal", puanli: true,
      detay: "5 Ağustos kapanışı. Bellek/capex satışına rağmen oynaklık rejimi sakin.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "https://fred.stlouisfed.org/series/VIXCLS"
    },
    {
      id: "hy-oas", ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "273 bp", durum: "normal", puanli: true,
      detay: "ICE BofA HY OAS, 4 Ağustos. Kredi piyasası stres fiyatlamıyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "https://fred.stlouisfed.org/series/BAMLH0A0HYM2"
    },
    {
      id: "sp500", ad: "S&P 500 Zirveden Uzaklık",
      deger: "−%0,7", durum: "normal", puanli: true,
      detay: "6 Ağustos kapanışı ~7.726,9; gün içi rekor (5 Ağustos) 7.793,68'in ~%0,9 altında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "https://fred.stlouisfed.org/series/SP500"
    },
    {
      id: "nfci", ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,529", durum: "normal", puanli: true,
      detay: "31 Temmuz haftası; ortalamadan gevşek finansal koşullar.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "https://fred.stlouisfed.org/series/NFCI"
    },
    {
      id: "sahm", ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "0,07", durum: "normal", puanli: true,
      detay: "Haziran verisi 0,07. Bugünkü Temmuz istihdam raporu (işsizlik konsensüsü %4,2) bu girdiyi güncelleyecek.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "https://fred.stlouisfed.org/series/SAHMREALTIME"
    },
    {
      id: "enflasyon", ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,5 / %3,7", durum: "izleme", puanli: true,
      detay: "Haziran: CPI %3,5, PCE %3,7 (çekirdek %2,6 / %3,3). Hedefin üstü; Hürmüz normalleşmesi enerji bileşenini aşağı çekebilir.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "https://fred.stlouisfed.org/series/CPIAUCSL"
    },
    {
      id: "fed", ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım %54,9", durum: "izleme", puanli: true,
      detay: "Efektif faiz %3,63; CME FedWatch Eylül'de artırım olasılığını %54,9 fiyatlıyor. Kriz dizilimi çoğunlukla sıkılaşmayla başlar.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "https://fred.stlouisfed.org/series/DFF"
    },
    {
      id: "usdtry", ad: "USD/TRY (aylık değişim)",
      deger: "47,57", durum: "normal", puanli: true,
      detay: "6 Ağustos. Aylık değişim serisi bu koşudan itibaren birikiyor; ilk tam okuma Eylül başında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "https://www.dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv", ad: "TCMB Toplam Rezervleri",
      deger: "164,4 milyar $",
      detay: "31 Temmuz haftası, haftalık +1,84 milyar $. 4 haftalık ≥ %5 düşüş izlemeye alınır.",
      kaynak: "https://www.tcmb.gov.tr"
    },
    {
      id: "bis-kredi", ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "İlk kontrol: Eylül 2026",
      detay: "Çeyrek başına bir kez modül raporuna işlenir; günlük panelde bilgi kartı olarak durur.",
      kaynak: "https://www.bis.org/statistics/c_gaps.htm"
    }
  ]
};
