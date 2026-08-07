// Düzeltme deltası — 7 Ağustos 2026
// Sorun: NAND/SSD şirketleri, enerji sektörü altındaki "Depolama (BESS)"
// (batarya depolama) kutusuna bağlanmıştı. Bu delta, yarıiletken altında
// "Veri Depolama (NAND/SSD)" sektörünü tanımlar ve dört şirketi oraya taşır.
// "Depolama (BESS)" enerji altında Tesla (Megapack) ve Fluence ile kalır.
// Geçmiş deltalara dokunulmaz; şema gereği sonraki delta alan güncelleyebilir.
window.DELTAS.push({
  tarih: "2026-08-07",
  rapor: "raporlar/gunluk/2026-08-06.md",
  dugumler: [
    { id: "sektor:veri-depolama", tur: "sektor", ad: "Veri Depolama (NAND/SSD)", ust: "sektor:yariiletken" },
    { id: "sirket:sandisk", tur: "sirket", ad: "SanDisk", kod: "SNDK", sektor: ["sektor:veri-depolama"] },
    { id: "sirket:western-digital", tur: "sirket", ad: "Western Digital", kod: "WDC", sektor: ["sektor:veri-depolama"] },
    { id: "sirket:kioxia", tur: "sirket", ad: "Kioxia", kod: "285A", sektor: ["sektor:veri-depolama"] },
    { id: "sirket:solidigm", tur: "sirket", ad: "Solidigm", kod: null, ozel: true, sektor: ["sektor:veri-depolama"] }
  ],
  iliskiler: [],
  etkiler: [],
  sermaye: []
});
