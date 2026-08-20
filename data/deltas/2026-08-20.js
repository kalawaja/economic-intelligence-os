// Delta — 2026-08-20 günlük raporu
window.DELTAS.push({
  tarih: "2026-08-20",
  rapor: "raporlar/gunluk/2026-08-20.html",
  dugumler: [
    { id: "sirket:marvell", tur: "sirket", ad: "Marvell Technology", kod: "MRVL", sektor: ["sektor:cip-tasarim"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:fractile", tur: "sirket", ad: "Fractile", sektor: ["sektor:cip-tasarim"], ozel: 1, ulke: "İngiltere" },
    { id: "sirket:moderna", tur: "sirket", ad: "Moderna", kod: "MRNA", sektor: ["sektor:saglik-biyotek"], ulke: "ABD", borsa: "NASDAQ" },
    { id: "sirket:merck", tur: "sirket", ad: "Merck & Co.", kod: "MRK", sektor: ["sektor:saglik-biyotek"], ulke: "ABD", borsa: "NYSE" },
    { id: "sirket:landspace", tur: "sirket", ad: "LandSpace", sektor: ["sektor:savunma-uzay"], ozel: 1, ulke: "Çin" },
    { id: "sirket:munich-re", tur: "sirket", ad: "Munich Re", kod: "MUV2", sektor: ["sektor:finans-yatirim"], ulke: "Almanya", borsa: "Xetra" },
    { id: "sirket:at-bay", tur: "sirket", ad: "At-Bay", sektor: ["sektor:siber-guvenlik"], ozel: 1, ulke: "ABD" }
  ],
  iliskiler: [
    { kaynak: "sirket:alphabet", hedef: "sirket:marvell", tur: "yatirim", aciklama: "Özel AI çıkarım hızlandırıcı ve ağ çipleri anlaşmasına iliştirilmiş ~%7'lik hisse warrant'ı", tutar_musd: 12200 },
    { kaynak: "sirket:anthropic", hedef: "sirket:fractile", tur: "tedarik", aciklama: "~250 mn $'lık çıkarım çipi tedarik anlaşması — Nvidia dışı üçüncü hesaplama bacağı", tutar_musd: 250 },
    { kaynak: "sirket:moderna", hedef: "sirket:merck", tur: "ortaklik", aciklama: "intismeran autogene + Keytruda — ilk başarılı Faz 3 mRNA kanser aşısı (melanom)" },
    { kaynak: "sirket:landspace", hedef: "sirket:spacex", tur: "rekabet", aciklama: "Zhuque-3 ilk kademesinin karada geri kazanımı — Çin'den ilk yörünge sınıfı booster inişi" },
    { kaynak: "sirket:munich-re", hedef: "sirket:at-bay", tur: "satin-alma", aciklama: "Siber sigortacı At-Bay 575 mn $'a satın alınıyor", tutar_musd: 575 }
  ],
  etkiler: [
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "₩40 trilyonluk (~28,6 mlr $) geri alım-iptal programı; hisse +%12,7 ile sidecar kaybını fazlasıyla geri aldı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:samsung", yon: "pozitif", gerekce: "+%9,5 (₩271.000); 100 trilyon ₩ üzeri hissedar getirisi planı dolaşımda ve foundry fiyatlarına %10-15 zam", tema: "tema:kore-oynakligi" },
    { sirket: "sirket:kioxia", yon: "pozitif", gerekce: "Bellek toparlanmasında +%6,0 (¥52.950)", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "ABD seansında +%3 (967,93 $) — iki günlük tersinme üçüncü güne taşmadı", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:sandisk", yon: "pozitif", gerekce: "Toparlanma bacağında +%5 (1.703 $)", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:marvell", yon: "pozitif", gerekce: "Google'dan 12,2 mlr $'lık warrant'lı özel çip anlaşması; hisse sıçradı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:alphabet", yon: "pozitif", gerekce: "Marvell'de ~%7 hisse opsiyonu — özel silikonda Broadcom'a alternatif kanal açtı", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:broadcom", yon: "negatif", gerekce: "Google'ın Marvell'e açılması özel-çip (XPU) tekelini aşındırıyor", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:nvidia", yon: "notr", gerekce: "Özel silikon cephesi genişliyor; bilanço 26 Ağustos'ta — backstop/Intel/SB Energy kalemleri masada", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:anthropic", yon: "pozitif", gerekce: "Fractile'la 250 mn $'lık çıkarım çipi anlaşması — tedarik çeşitlendirmesi", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:fractile", yon: "pozitif", gerekce: "600 mn $ tur (6,5 mlr $ para-öncesi) + Anthropic tedarik anlaşması", tema: "tema:hesaplama-finansmani" },
    { sirket: "sirket:moderna", yon: "pozitif", gerekce: "İlk başarılı Faz 3 mRNA kanser aşısıyla +%177 (174,38 $); piyasa değeri 25→69 mlr $" },
    { sirket: "sirket:merck", yon: "pozitif", gerekce: "Keytruda kombinasyonlu melanom başarısıyla +%12,6 (152,20 $)" },
    { sirket: "sirket:spacex", yon: "negatif", gerekce: "319 mn hisselik kilit gününe −%3,1 (~137,5 $) ile girdi; LandSpace inişi yeniden-kullanılabilirlik tekelini kırdı" },
    { sirket: "sirket:landspace", yon: "pozitif", gerekce: "Zhuque-3 ilk kademesini karada indirdi — Çin ticari uzayında tarihî eşik" },
    { sirket: "sirket:munich-re", yon: "notr", gerekce: "At-Bay satın almasıyla siber risk kapasitesini reasürans bilançosuna taşıyor" },
    { sirket: "sirket:at-bay", yon: "pozitif", gerekce: "Munich Re'ye 575 mn $'a satılıyor — siber-güvenlik temasında ilk büyük çıkış" }
  ],
  sermaye: [
    { hedef: "sirket:fractile", tutar_musd: 600, tip: "finansman", aciklama: "600 mn $ tur — 6,5 mlr $ para-öncesi değerleme" },
    { hedef: "sirket:marvell", tutar_musd: 12200, tip: "finansman", aciklama: "Google'a verilen ~%7'lik hisse warrant'ı (kullanım koşullu opsiyon)" },
    { hedef: "sirket:at-bay", tutar_musd: 575, tip: "ma", aciklama: "Munich Re satın alması" }
  ]
});
