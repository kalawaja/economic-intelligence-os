// Delta — 2026-10-01 günlük raporu (pencere: 30 Eyl kapanış + 1 Eki sabah)
// Micron FQ4/FQ1 + HBM 2027 bağları; PCE soğudu; Hormüz ekstrem sürüyor.
window.DELTAS.push({
  tarih: "2026-10-01",
  rapor: "raporlar/gunluk/2026-10-01.html",
  ozet: "Micron HBM 2027 bit arzının çoğunu bağladı; PCE 3,4/çekirdek 3,0; 10Y ~%5,29 — sıkılaşan darlık ayakta",
  dugumler: [],
  iliskiler: [
    {
      kaynak: "sirket:micron",
      hedef: "sirket:nvidia",
      tur: "tedarik",
      gerekce: "Micron çağrı: Nvidia ile sektörün ilk özel HBM uygulaması; 2027 HBM bit arzı büyük ölçüde anlaşmalı"
    }
  ],
  etkiler: [
    {
      sirket: "sirket:micron",
      yon: "pozitif",
      buyukluk: 1.5,
      tema: "tema:bellek-kitligi",
      gerekce: "FQ4 gelir 54,23 mlr $; FQ1 kılavuz 61,5±1,5 mlr $; 2027 HBM bit arzının büyük kısmı anlaşmalı, fiyat YoY yüksek"
    },
    {
      sirket: "sirket:nvidia",
      yon: "pozitif",
      buyukluk: 1,
      tema: "tema:bellek-kitligi",
      gerekce: "Micron: ilk özel HBM uygulaması Nvidia ile; HBM bit kısıtı 2027’ye bağlandı"
    },
    {
      sirket: "sirket:spacex",
      yon: "notr",
      buyukluk: 1,
      tema: "tema:uzay-firlama",
      gerekce: "24 Eyl dilim emilimi açık; sonraki kilit 9 Eki / 24 Eki — yeni uçuş/kilit olayı yok"
    }
  ],
  sermaye: [
    {
      sirket: "sirket:micron",
      tur: "sozlesme",
      tutar_musd: null,
      kesinlik: 1.0,
      gerekce: "26 SCA imzalı; takvim 2027 HBM bit arzının büyük kısmı sözleşmeli (tutar toplanmadı)"
    }
  ]
});
