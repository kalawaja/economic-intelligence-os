// Delta — İleri Paketleme Modülü (TCB + CPO) kayıt deltası, 2026-08-13
// Yalnızca modül raporunda geçen yeni öğeler. Geçmişe dönük değişiklik yok.
window.DELTAS.push({
  tarih: "2026-08-13",
  rapor: "raporlar/moduller/ileri-paketleme.html",
  dugumler: [
    { id: "sirket:besi", tur: "sirket", ad: "Besi", kod: "BESI", sektor: ["ekipman-eda"], ulke: "Hollanda", borsa: "Euronext Amsterdam" },
    { id: "sirket:asmpt", tur: "sirket", ad: "ASMPT", kod: "0522", sektor: ["ekipman-eda"], ulke: "Singapur", borsa: "HKEX" },
    { id: "sirket:kulicke-soffa", tur: "sirket", ad: "Kulicke & Soffa", kod: "KLIC", sektor: ["ekipman-eda"], ulke: "Singapur", borsa: "NASDAQ" },
    { id: "sirket:hanmi-semiconductor", tur: "sirket", ad: "Hanmi Semiconductor", kod: "042700", sektor: ["ekipman-eda"], ulke: "Guney Kore", borsa: "KRX" },
    { id: "sirket:hanwha-semitech", tur: "sirket", ad: "Hanwha Semitech", sektor: ["ekipman-eda"], ozel: 1, ulke: "Guney Kore" },
    { id: "sirket:broadcom", tur: "sirket", ad: "Broadcom", kod: "AVGO", sektor: ["cip-tasarim", "optik-ag"], ulke: "ABD", borsa: "NASDAQ" }
  ],
  iliskiler: [
    { kaynak: "sirket:sk-hynix", hedef: "sirket:hanmi-semiconductor", tur: "tedarik", aciklama: "İlk HBM4 TC bonder siparişi: 44,2 mlr won, TC Bonder 4.5 Griffin (Haziran 2026)", tutar_musd: 31 },
    { kaynak: "sirket:sk-hynix", hedef: "sirket:asmpt", tur: "tedarik", aciklama: "HBM4 TC bonder tedarik çeşitlendirmesi (Aralık 2025) — Kore'li tedarikçilerden dışa açılım" },
    { kaynak: "sirket:micron", hedef: "sirket:besi", tur: "tedarik", aciklama: "HBM4 TCB'de Besi'ye konsolidasyon — jeopolitik + sub-1µm hassasiyet gerekçesi (teyit gerektirir)" },
    { kaynak: "sirket:broadcom", hedef: "sirket:tsmc", tur: "tedarik", aciklama: "CoWoS tahsisinin ~%15'i (Google/Meta özel ASIC'leri) + COUPE/SoIC-X CPO üretimi" },
    { kaynak: "sirket:besi", hedef: "sirket:asmpt", tur: "rekabet", aciklama: "TCB ve hibrit bond'lama pazarında başa baş rekabet; HBM4 sub-1µm eşiği ikisini de öne çıkarıyor" },
    { kaynak: "sirket:hanmi-semiconductor", hedef: "sirket:hanwha-semitech", tur: "rekabet", aciklama: "Kore TC bonder pazarında patent davası + SK Hynix sipariş payı rekabeti" }
  ],
  etkiler: [
    { sirket: "sirket:besi", yon: "pozitif", gerekce: "Q2'de rekor sipariş girişi 292,9 mn € (+%128,8); hibrit bond'lama müşterisi 15→21; hisse tepkisi −%7 (marj/döngü endişesi)", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:asmpt", yon: "pozitif", gerekce: "H1 sipariş 1,63 mlr $ (+%85,1); ileri paketleme rekor 339 mn $; Temmuz'da 50+ TCB toplu siparişi; CPO işbirlikleri", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:kulicke-soffa", yon: "pozitif", gerekce: "FQ3 gelir 330,4 mn $ (+%123); fluxless TCB rekoru +%20; FY27 TCB hedefi 150-200 mn $", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:hanmi-semiconductor", yon: "pozitif", gerekce: "SK Hynix'ten 44,2 mlr won'luk ilk HBM4 Griffin siparişi; HBM4 siparişleri toparlanıyor (teyit gerektirir)", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:hanwha-semitech", yon: "negatif", gerekce: "SK Hynix çeşitlendirmesinde pay kaybı riski + Hanmi ile patent cephesi (teyit gerektirir)", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:broadcom", yon: "pozitif", gerekce: "Modüler CPO stratejisi (Tomahawk/Jericho) + CoWoS tahsisinin ~%15'i", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:tsmc", yon: "pozitif", gerekce: "CoWoS kapasitesi 2026 sonunda ~130 bin wafer/ay hedefi (~4x 2024); AP7 Chiayi en büyük paketleme kampüsü", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "CoWoS tahsisinin ~%60'ı + Quantum-X/Spectrum-X Photonics CPO platformu", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:sk-hynix", yon: "pozitif", gerekce: "HBM4 rampası TC bonder siparişleriyle hızlanıyor; tedarik tabanı çeşitlendi", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:samsung", yon: "notr", gerekce: "SEMES ile içeride kalıyor; HBM5 hibrit bond'lama geçişine kadar TCB pazarına kapalı", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:micron", yon: "pozitif", gerekce: "HBM4/HBM4E ile 100 mlr $'lık HBM pazarında pay hedefi; TCB tedarikini Besi'de konsolide ediyor (teyit gerektirir)", tema: "tema:bellek-kitligi" },
    { sirket: "sirket:coherent", yon: "pozitif", gerekce: "CPO harici lazer kanalının ana halka açık adreslerinden; pluggable'dan CPO'ya geçişte çift taraflı konum", tema: "tema:paketleme-darbogazi" },
    { sirket: "sirket:lumentum", yon: "pozitif", gerekce: "CPO lazer kaynakları büyüme kanalı (FQ4 çağrısında yönetim vurgusu)", tema: "tema:paketleme-darbogazi" }
  ],
  sermaye: []
});
