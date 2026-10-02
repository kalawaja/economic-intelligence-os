// Düzeltme — 2026-10-02: Calvert Cliffs PPA karşı tarafı haritada vardı, etki yazılmamıştı.
// 2026-10-02.js Amazon satırına dokunulmaz.
window.DELTAS.push({
  tarih: "2026-10-02",
  rapor: "raporlar/gunluk/2026-10-02.html",
  ozet: "Düzeltme: Calvert Cliffs PPA Constellation kartına ve Amazon ilişkisina bağlandı",
  dugumler: [],
  iliskiler: [
    {
      kaynak: "sirket:constellation",
      hedef: "sirket:amazon",
      tur: "ppa",
      mw: 690,
      gerekce: "Constellation IR 30 Eyl: 20 yıl, Calvert Cliffs 690 MW (190 MW uprate 2030–32); PJM perakende tedarik"
    }
  ],
  etkiler: [
    {
      sirket: "sirket:constellation",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:veri-merkezi-enerji",
      gerekce: "Amazon 20 yıl offtake 690 MW; uprate 190 MW ve >3 mlr $ tesis yatırımı Constellation tarafında; lisans uzatma zemini"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:constellation",
      tur: "sozlesme",
      tutar_musd: 3000,
      kesinlik: 0.8,
      gerekce: "IR: PPA >3 mlr $ Calvert Cliffs yatırımını mümkün kılar; Amazon nakit tutarı açıklanmadı"
    }
  ]
});
