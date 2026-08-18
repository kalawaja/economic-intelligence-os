// Makro Kriz İzleme — günlük okuma. Her koşuda yeni değerlerle üretilir.
// Şema: gostergeler[].durum = "normal" | "izleme" | "alarm"
// Puan: izleme=1, alarm=2; puanli:false kartlar termometreye sayılmaz.
window.MAKRO = {
  tarih: "2026-08-18",
  puan: 1,
  azami: 18,
  seviye: "DÜŞÜK",
  ozet: "Termometre 1/18 (DÜŞÜK) — izlemede yalnız enflasyon. Getiri eğrisi +0,53 ile eşik üstünde kaldı; ancak dikleşme bu kez 30 yıllığın %5,31'e satılmasından (2007'den beri zirve) — vade primi/borç arzı kanalı termometre dışı risk olarak izleniyor. Brent 91 $ ve Eylül artırım fiyatlamasının %31-45 bandına geri dönmesi dikkat kalemleri; yeni alarm yok.",
  gostergeler: [
    {
      id: "getiri-egrisi",
      ad: "Getiri Eğrisi (10Y−2Y)",
      deger: "+0,53 puan",
      durum: "normal",
      puanli: true,
      detay: "17 Ağu: +0,53 (ikinci gün izleme eşiği +0,50'nin üzerinde). Dikleşme uzun uç satışından: 30Y %5,31, 10Y ~%4,72 — kaynak arz/vade primi, 'sağlıklı dikleşme' değil.",
      esik: "< +0,50 izleme · < 0 alarm",
      kaynak: "FRED T10Y2Y"
    },
    {
      id: "vix",
      ad: "VIX (Oynaklık)",
      deger: "14,25",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu kapanışı; hafta içinde 15,46'dan geriledi. Tahvil satışına ve petrol sıçramasına rağmen hisse oynaklığı sakin.",
      esik: "≥ 20 izleme · ≥ 30 alarm",
      kaynak: "FRED VIXCLS"
    },
    {
      id: "hy-oas",
      ad: "Yüksek Getirili Tahvil Spreadi (HY OAS)",
      deger: "267 bp",
      durum: "normal",
      puanli: true,
      detay: "14 Ağu: 267 bp (271'den daraldı) — kredi kanalında stres yok; uzun uç satışı şirket spreadlerine yansımadı.",
      esik: "≥ 300 bp izleme · ≥ 500 bp alarm",
      kaynak: "FRED BAMLH0A0HYM2"
    },
    {
      id: "sp500",
      ad: "S&P 500 Zirveden Uzaklık",
      deger: "~%0,3-0,6",
      durum: "normal",
      puanli: true,
      detay: "Pzt kapanışı kaynaklar arasında çelişkili (7.772,93 vs 7.750,48; FRED yarın hakem); zirve 7.798,99 (13 Ağu). Her iki okumada da düzeltme eşiğinin çok uzağında.",
      esik: "≥ %10 düzeltme izleme · ≥ %20 ayı alarm",
      kaynak: "FRED SP500"
    },
    {
      id: "nfci",
      ad: "Finansal Koşullar (Chicago Fed NFCI)",
      deger: "−0,549",
      durum: "normal",
      puanli: true,
      detay: "7 Ağu haftası: ortalamadan belirgin gevşek. Yeni okuma 19 Ağu — uzun uç satışının koşullara geçişkenliği izlenecek.",
      esik: "≥ 0 izleme · ≥ +0,5 alarm",
      kaynak: "FRED NFCI"
    },
    {
      id: "sahm",
      ad: "Sahm Kuralı (Resesyon Göstergesi)",
      deger: "−0,03",
      durum: "normal",
      puanli: true,
      detay: "Temmuz okuması negatif bölgede. Perakende −%0,6 sonrası Ağustos istihdam verisi kritik — ilk pozitif okuma erken sinyal sayılacak.",
      esik: "≥ 0,30 izleme · ≥ 0,50 alarm",
      kaynak: "FRED SAHMREALTIME"
    },
    {
      id: "enflasyon",
      ad: "Enflasyon (CPI / PCE, yıllık)",
      deger: "%3,4",
      durum: "izleme",
      puanli: true,
      detay: "CPI yıllık %3,4 — %3 izleme eşiğinin üzerinde beşinci yıl. Brent'in 91 $'a dönüşü ve İngiltere'deki çip kaynaklı fiyat geçişkenliği yukarı yönlü yeni riskler.",
      esik: "> %3 izleme · ≥ %6 alarm",
      kaynak: "FRED CPIAUCSL"
    },
    {
      id: "fed",
      ad: "Fed Politika Yönü",
      deger: "%3,63 + artırım ~%31-45",
      durum: "normal",
      puanli: true,
      detay: "DFF %3,63 (14 Ağu). Eylül artırımı: FedWatch ~%31 / rateprobability %45,2 (17 Ağu) — perakende sonrası sönen fiyatlama, petrol ve tahvil satışıyla yeniden yükseliyor; %50 eşiği iki kaynakta da aşılmadı. FOMC tutanakları 19 Ağu, Jackson Hole 27-29 Ağu (Warsh).",
      esik: "artırım fiyatlaması > %50 izleme · toplantı-dışı acil hamle alarm",
      kaynak: "FRED DFF (+CME FedWatch)"
    },
    {
      id: "usdtry",
      ad: "USD/TRY (aylık değişim)",
      deger: "47,90",
      durum: "normal",
      puanli: true,
      detay: "18 Ağu: 47,90 (+%0,04 günlük; serbest piyasa 47,78). Aylık değişim ~+%0,6 — eşiklerin çok altında.",
      esik: "aylık ≥ %5 değer kaybı izleme · ≥ %10 alarm",
      kaynak: "dunya.com/finans/doviz"
    }
  ],
  bilgi_kartlari: [
    {
      id: "tcmb-rezerv",
      ad: "TCMB Toplam Rezervleri",
      deger: "178,4 milyar $",
      detay: "Son okuma (7 Ağu haftası bülteni). Yeni haftalık bülten 20 Ağustos Perşembe.",
      kaynak: "tcmb.gov.tr (haftalık bülten Perşembe)"
    },
    {
      id: "bis-kredi",
      ad: "BIS Kredi/GSYH Açığı (çeyreklik)",
      deger: "—",
      detay: "Çeyreklik seri; ilk kontrol Eylül 2026'da yapılacak.",
      kaynak: "bis.org (ilk kontrol Eylül 2026; çeyreklik)"
    }
  ]
};
