window.DELTAS.push({
  tarih: "2026-08-27",
  rapor: "raporlar/gunluk/2026-08-27.html",
  dugumler: [
    { id: "tema:sebeke-guvenligi", tur: "tema", ad: "Şebeke Güvenliği (EO 14420)" },
    { id: "sirket:salesforce", tur: "sirket", ad: "Salesforce", kod: "CRM", sektor: ["sektor:kurumsal-bt"], ulke: "ABD", borsa: "NYSE" },
    { id: "sirket:okta", tur: "sirket", ad: "Okta", kod: "OKTA", sektor: ["sektor:siber-guvenlik"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:enflame", tur: "sirket", ad: "Enflame Technology", ozel: 1, sektor: ["sektor:cip-tasarim"], ulke: "Çin" }
  ],
  iliskiler: [
    { kaynak: "sirket:salesforce", hedef: "sirket:anthropic", tur: "yatirim", aciklama: "Salesforce Ventures azınlık payı — Q2 FY27 bilançosuna değerleme kazancı olarak yansıdı (CNBC)" }
  ],
  etkiler: [
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "Q2 96,2 mlr $ / EPS 2,22 / marj %75; Q3 kılavuzu 108 mlr $ ±%2 (ilk 100 mlr $'lık çeyrek kılavuzu); FY28 ~%70 büyüme öngörüsü; seans sonrası +%4,7", tema: "tema:ai-capex" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "Nvidia'nın 'arz kısıtlı' nitelemesi HBM/bellek talebine yapısal teyit", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "Nvidia kılavuzu sonrası +%1,90; HBM zinciri darboğaz fiyatlaması", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "BOK ikinci artırım + büyüme tahmini %2,6→%3,3; Kospi 6.928 (+%1,76); Samsung +%1,34", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:marvell", yon: "notr", gerekce: "Bilanço bu akşam — Google-warrant sonrası özel-silikon kılavuzu, satıcı-finansmanı tezinin ikinci sınavı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "Salesforce, Anthropic payından değerleme kazancı yazdı — çapraz-hissedarlık ağının bilanço görünürlüğü", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:salesforce", yon: "pozitif", gerekce: "Q3 kılavuzu 11,5 mlr $ beklenti üstü; Agentforce ARR 1,2 mlr $ (+%205); seans sonrası +%14", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:okta", yon: "pozitif", gerekce: "Q2 805 mn $ (beklenti üstü); yıl kılavuzu 3,22 mlr $'a yükseltildi; agentic-AI talebi vurgusu; +%16,3", tema: "tema:kurumsal-ai-talebi" },
    { sirket: "sirket:intuit", yon: "negatif", gerekce: "Çarşamba −%9,2 ile ikinci satış günü — agentic gelir kanıtı gösteremeyen yazılımcı 'AI kurbanı' fiyatlanıyor", tema: "tema:ai-yikim-korkusu" },
    { sirket: "sirket:groq", yon: "pozitif", gerekce: "Groq 3 LPX çıkarım hızlandırıcısı tam üretimde — dünkü 'Nvidia Groq' belirsizliği çözüldü; ürün Groq'un", tema: "tema:ai-capex" },
    { sirket: "sirket:nebius", yon: "pozitif", gerekce: "Groq 3 LPX'in ilk bulut müşterisi", tema: "tema:ai-capex" },
    { sirket: "sirket:enflame", yon: "pozitif", gerekce: "6 mlr ¥ (892 mn $) STAR halka arzı — abonelik 2 Eylül; YMTC'nin ardından Çin çip-IPO dalgasının ikinci halkası", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:intel", yon: "negatif", gerekce: "Xeon 7 'Diamond Rapids' (256 çekirdek) 2027'ye kaydı — AI-sunucu döngüsünde yeni gecikme" },
    { sirket: "sirket:spacex", yon: "pozitif", gerekce: "SPCX 136,80 $ (+%1,3) — 135 üstünde ikinci gün; D.E. Shaw 912 mn $ pay açıkladı" },
    { sirket: "sirket:aramco", yon: "notr", gerekce: "İran-Umman Hürmüz suları anlaşması (teyit gerektirir) + Brent 87,20 $ (dördüncü düşüş günü); haftalık geçiş hâlâ 73 gemi", tema: "tema:iran-enerji-riski" },
    { sirket: "sirket:alcoa", yon: "notr", gerekce: "Kanada karşı-tarife listesi resmîleşti: 27,6 mlr $, %15/25/50, yürürlük 8 Eylül — çelik/demir kapsamda", tema: "tema:tarife-hukuku" }
  ],
  sermaye: [
    { hedef: "sirket:enflame", tutar_musd: 892, tip: "finansman", aciklama: "Şanghay STAR halka arzı 6 mlr ¥ — talep toplama 2 Eylül'de başlıyor" }
  ]
});
