// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-14",
  puan: 2,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 2/18 ile düşük bölgede sabit. Temmuz PPI'ın yatay gelmesiyle Eylül artırım fiyatlaması FedWatch'ta %35'in altına indi; Fed göstergesi izleme dışında kaldı. İzlemede yalnızca düz getiri eğrisi (+0,48) ve hedef üstü enflasyon (CPI %3,4) var; S&P 500 rekorda, kredi ve oynaklık kanalları sakin. TCMB rezervi altın değerlemesiyle 178,4 milyar $'a sıçradı.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,48 puan",
      durum: "izleme",
      puanli: true,
      detay: "12 Ağustos: +0,48 (11 Ağu +0,48; 10 Ağu +0,47). Üçüncü gündür +0,50 eşiğinin hemen altında düz seyir; PPI sonrası kısa uç baskısı hafifledi ama eğri henüz eşiğin üzerine çıkmadı.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "14,55",
      durum: "normal",
      puanli: true,
      detay: "12 Ağustos kapanışı 14,55 — haftadır 14,5-15,5 bandında; rekor endeks kapanışıyla uyumlu düşük oynaklık.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "271 bp",
      durum: "normal",
      puanli: true,
      detay: "12 Ağustos: 271 bp (270-272 bandında yatay). Kredi piyasası AI bilanço oynaklığını sistemik risk olarak fiyatlamıyor.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0",
      durum: "normal",
      puanli: true,
      detay: "13 Ağustos: 7.798,99 ile yeni rekor kapanış (+%0,65) — zirveden uzaklık sıfır. Bir kaynak kapanışı 7.781,59 veriyor; iki değer de rekor bölgesinde.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,549",
      durum: "normal",
      puanli: true,
      detay: "7 Ağustos haftası: −0,549 (önceki −0,546) — koşullar ortalamadan gevşek ve hafif gevşemeye devam ediyor.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması −0,03 — resesyon sinyalinden uzak; Temmuz'daki −23 bin istihdam kaybına rağmen işsizlik 3 aylık ortalaması dip bölgesinde.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4 / %3,7",
      durum: "izleme",
      puanli: true,
      detay: "Temmuz CPI %3,4 (çekirdek %2,5); PCE %3,7 (Haziran). Temmuz PPI yatay geldi ve yıllık %5,5'ten %4,7'ye indi — yön aşağı ama manşet %3 eşiğinin üzerinde. PPI verisi Temmuz başında toplandı; ay sonu petrol sıçraması bu okumada yok.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım <%35",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63. PPI sonrası Eylül'de artırım fiyatlaması FedWatch'ta %35'in altına indi (sabit ~%63); rateprobability %49 — kaynak makası ±10 puana açıldı, eşik FedWatch'la değerlendirildi. Aralık'a kümülatif ~−58 bp gevşeme fiyatlı.",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,89",
      durum: "normal",
      puanli: true,
      detay: "14 Ağustos: 47,89 (serbest piyasa ~47,77). Aylık değişim ~+%0,6 — eşiklerin çok altında, istikrarlı seyir.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "178,4 milyar $",
      detay: "7 Ağustos haftası: 178,366 milyar $ — haftalık +13,918 milyar $ (+%8,5) ile rekor sıçrama; +7,2 milyar $ döviz (71,0 milyar $), +6,7 milyar $ altın değerlemesi (107,3 milyar $; ons ~4.415 $). Rezervin %60'ından fazlası altın.",
      kaynak: "tcmb.gov.tr (haftalık bülten)"
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
