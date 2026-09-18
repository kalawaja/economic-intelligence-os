// Delta — Kuantum Teknolojileri modülü kayıt deltası, 2026-09-19
// Yeni düğüm yok (v2.1: rezerve id olay+iki kaynakla doğar; ionq/d-wave rezerve durur).
// Yalnız haritada duran ve raporda adı geçen şirketlere etki.
window.DELTAS.push({
  tarih: "2026-09-19",
  rapor: "raporlar/moduller/kuantum.html",
  ozet: "Kuantum modülü: yarış mantıksal qubit + hibrit yığın + algılama/foundry ikinci hatta",
  dugumler: [],
  iliskiler: [],
  etkiler: [
    { sirket: "sirket:nvidia", yon: "pozitif", gerekce: "QPU üretmiyor; CUDA-Q Logical (14 Eyl) + NVQLink ile QPU↔GPU kod çözümü/kalibrasyon katmanını standartlaştırıyor. Infleqtion, IQM, Quantinuum, Rigetti entegrasyon ortakları.", tema: "tema:kuantum" },
    { sirket: "sirket:microsoft", yon: "notr", gerekce: "Azure Quantum çoklu donanım pazarı duruyor; Majorana 2 şirket iddiası (güvenilirlik, 4-qubit hücre) faydalı hesaba dönüşmedi. 2029 takvimi şirket hedefi.", tema: "tema:kuantum" },
    { sirket: "sirket:ibm", yon: "pozitif", gerekce: "Kendi platform + Nighthawk r2 (120Q, 100 bin+ devre/sn şirket verisi); Starling 200 mantıksal 2029 takvimi. CHIPS paketinde IBM'e ayrı büyük kalem duyuruldu, kesinleşme izlenir.", tema: "tema:kuantum" }
  ],
  sermaye: []
});
