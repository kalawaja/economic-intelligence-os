// Delta — 2026-08-13 Günlük Rapor
// Yalnızca bu raporda yeni olan öğeler. Geçmişe dönük değişiklik yok.
window.DELTAS.push({
  tarih: "2026-08-13",
  rapor: "raporlar/gunluk/2026-08-13.html",
  dugumler: [
    { id: "sirket:nebius", tur: "sirket", ad: "Nebius", kod: "NBIS", sektor: ["hyperscaler", "yapay-zeka"], ulke: "Hollanda", borsa: "NASDAQ" },
    { id: "sirket:wendys", tur: "sirket", ad: "Wendy's", kod: "WEN", sektor: ["e-ticaret"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:trian", tur: "sirket", ad: "Trian Fund Management", sektor: ["finans-yatirim"], ozel: 1, ulke: "ABD" }
  ],
  iliskiler: [
    { kaynak: "sirket:nebius", hedef: "sirket:nvidia", tur: "tedarik", aciklama: "Vera Rubin rack'i Finlandiya'da devrede; Nvidia GPU altyapısıyla AI bulut kapasitesi" },
    { kaynak: "sirket:nebius", hedef: "sirket:bloom-energy", tur: "tedarik", aciklama: "AI veri merkezi için Bloom yakıt hücresi güç tedariki (şebeke beklemeden yerinde üretim)" },
    { kaynak: "sirket:trian", hedef: "sirket:wendys", tur: "satin-alma", aciklama: "Peltz/Trian take-private teklifi hazırlığı (FT/Reuters; koşullar açıklanmadı, teyit gerektirir)" }
  ],
  etkiler: [
    { sirket: "sirket:nebius", yon: "pozitif", gerekce: "Q2 gelir +%454 (582 mn $), FAVÖK pozitife döndü; sözleşmeli güç hedefi 5 GW'a çıktı", tema: "tema:ai-capex" },
    { sirket: "sirket:bloom-energy", yon: "pozitif", gerekce: "Nebius'un AI veri merkezi için yakıt hücrelerini seçmesiyle hisse +%13", tema: "tema:veri-merkezi-enerji" },
    { sirket: "sirket:coherent", yon: "pozitif", gerekce: "FQ4 gelir 2,045 mlr $ (+%33,8) ve güçlü FQ1 kılavuzu; hisse +%13 — 'mükemmellik fiyatlandı' testi geçildi" },
    { sirket: "sirket:lumentum", yon: "pozitif", gerekce: "Kusursuz bilançoya gecikmeli tepki: hisse +%14, optikte ikinci satış bacağı gelmedi" },
    { sirket: "sirket:coreweave", yon: "pozitif", gerekce: "Bilanço sonrası prim seansta korundu: +%19", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:super-micro", yon: "pozitif", gerekce: "Rekor kılavuz sonrası hisse seansta +%19" },
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "SMH +%2 ile CPI sonrası ralliye öncülük; Nemotron 4 ile model katmanına iniyor (teyit gerektirir)", tema: "tema:ai-capex" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "Temasek etkisinin ikinci günü: +%4,89 (268.000 won); Kospi boğa piyasasına girdi", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "+%5,92 (1.593.000 won); bellek rallisi dördüncü gününde", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:kioxia", yon: "pozitif", gerekce: "Japonya kanadında bellek rallisi: +%3,87", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:temasek", yon: "notr", gerekce: "Samsung/SK Hynix alımında tutar ve takvim ikinci günde de açıklanmadı (teyit gerektirir)", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:spacex", yon: "pozitif", gerekce: "Hisse +%12 ile 146,15 $'a — IPO fiyatının üzerine döndü; ilk kilit açılışı emildi (kaynaklar arası fark; teyit gerektirir)" },
    { sirket: "sirket:palantir", yon: "pozitif", gerekce: "Feinberg imzalı 244 mn $'a kadar ihalesiz Pentagon sözleşmesi; no-bid pipeline büyüyor", tema: "tema:savunma-neo-prime" },
    { sirket: "sirket:wendys", yon: "pozitif", gerekce: "Trian take-private hazırlığı haberiyle +%12" },
    { sirket: "sirket:alphabet", yon: "pozitif", gerekce: "Gemini 1 milyar aylık aktif kullanıcıya ulaştı — şirketin en hızlı büyüyen ürünü" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "Sonbaharda olası halka arz öncesi yatırımcı görüşmeleri başladı (teyit gerektirir)", tema: "tema:ai-ipo-yarisi" },
    { sirket: "sirket:ibm", yon: "pozitif", gerekce: "Together AI ile ~2.000 Blackwell çipli çıkarım kümesi için 240 mn $'lık anlaşma", tema: "tema:ai-capex" }
  ],
  sermaye: [
    { hedef: "sirket:nebius", tutar_musd: 22500, tip: "capex", aciklama: "2026 capex kılavuzu 20-25 mlr $ (orta nokta); Q2 gerçekleşme 5,7 mlr $ — 5 GW sözleşmeli güç hedefi" }
  ]
});
