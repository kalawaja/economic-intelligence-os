// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-10",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK", // 0-3 Düşük · 4-8 Yükselmiş · 9+ Yüksek
  ozet: "Alarm yok; iki gösterge izlemede (getiri eğrisi düz, enflasyon hedef üstü). Temmuz istihdam şoku (−23 bin) sonrası Eylül artırım fiyatlaması ~%44'e düştü — Fed göstergesi izlemeden çıktı, puan 3'ten 2'ye indi. Sahm Temmuz'da −0,03'e döndü ama düşüş katılım kaynaklı; 12 Ağustos Temmuz CPI kritik eşik.",
  gostergeler: [
    {
      id: "getiri-egrisi", ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,46 puan", durum: "izleme", puanli: true,
      detay: "7 Ağustos. İstihdam şoku sonrası kısa uç hızlı düştü — hafif dikleşme, inversiyon riski geriledi; +0,50 düz-eğri eşiğinin hâlâ altında.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "https://fred.stlouisfed.org/series/T10Y2Y"
    },
    {
      id: "vix", ad: "VIX (Oynaklık)",
      deger: "15,15", durum: "normal", puanli: true,
      detay: "6 Ağustos kapanışı. İstihdam şokuna ve Orta Doğu tırmanışına rağmen oynaklık rejimi sakin.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "https://fred.stlouisfed.org/series/VIXCLS"
    },
    {
      id: "hy-oas", ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "271 bp", durum: "normal", puanli: true,
      detay: "ICE BofA HY OAS, 6 Ağustos. Hafta içinde daraldı; kredi piyasası istihdam şokunu sistemik risk olarak fiyatlamadı.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "https://fred.stlouisfed.org/series/BAMLH0A0HYM2"
    },
    {
      id: "sp500", ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0", durum: "normal", puanli: true,
      detay: "7 Ağustos rekor kapanış 7.757,64; 10 Ağustos yatay (+%0,01) — endeks zirve bölgesinde.",
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
      deger: "−0,03", durum: "normal", puanli: true,
      detay: "Temmuz güncellemesi (7 Ağustos): işsizlik %4,1'e indi ama katılım %61,4'e düştüğü için bu 'iyileşme' sinyal değeri taşımıyor; Sahm bu evrede geç kalabilir.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "https://fred.stlouisfed.org/series/SAHMREALTIME"
    },
    {
      id: "enflasyon", ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,5 / %3,7", durum: "izleme", puanli: true,
      detay: "Haziran: CPI %3,5, PCE %3,7 (çekirdek %2,6 / %3,3). Hedefin üstü; 12 Ağustos Temmuz CPI (konsensüs aylık +%0,2) belirleyici.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "https://fred.stlouisfed.org/series/CPIAUCSL"
    },
    {
      id: "fed", ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%44", durum: "normal", puanli: true,
      detay: "Efektif faiz %3,63. İstihdam şoku sonrası CME FedWatch Eylül artırım fiyatlaması %57'den ~%44'e düştü (7 Ağustos) — %50 eşiğinin altında, izlemeden çıktı.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "https://fred.stlouisfed.org/series/DFF"
    },
    {
      id: "usdtry", ad: "USD/TRY (aylık değişim)",
      deger: "47,70", durum: "normal", puanli: true,
      detay: "10 Ağustos serbest piyasa ~47,70 (6 Ağustos: 47,57). Aylık değişim eşiklerin belirgin altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "https://www.dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv", ad: "TCMB Toplam Rezervleri",
      deger: "164,4 milyar $",
      detay: "31 Temmuz haftası, haftalık +1,84 milyar $. Yeni haftalık bülten 13 Ağustos Perşembe; 4 haftalık ≥ %5 düşüş izlemeye alınır.",
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
