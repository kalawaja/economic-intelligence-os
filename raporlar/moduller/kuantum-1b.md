## 4) Halka Açık Evren (18 Eyl 2026 kesiti)

Piyasa değeri anlık; yön değildir. Kaynak: QuantumMarketCap 18 Eyl kesiti + şirket IR.

| Şirket | Ticker | Modalite | Piyasa (kesit) | Gelir / kılavuz | Not |
|---|---|---|---|---|---|
| IonQ | IONQ | İyon + foundry | ~15,4 mlr $ | 2026 kılavuz **450–460 mn $** (SkyWater 31 Tem kapanışından) | 2025 GAAP 130 mn $ |
| Quantinuum | QNT | İyon (QCCD) | ~14,3 mlr $ | FY ~31 mn $ | Nasdaq IPO Haz 2026, ~1,63–1,68 mlr $ |
| D-Wave | QBTS | Tavlama + gate | ~6,6 mlr $ | FY ~25 mn $; 1Y26 rezervasyon 35,5 mn $ | QCI alımı Oca 2026 |
| Rigetti | RGTI | Süperiletken chiplet | ~5,3 mlr $ | FY ~7 mn $ | Cepheus-1 108Q (Nis 2026) |
| Infleqtion | INFQ | Nötr atom + algılama | ~3,1 mlr $ | 2026 kılavuz **43 mn $** (Q2'de yükseltildi) | NYSE Şub 2026 |
| Xanadu | XNDU | Fotonik | ~2,3 mlr $ | — | Nasdaq Mar 2026 |
| Pasqal | PSQL | Nötr atom | (Ağu 28 listelendi) | 7 kurulu QPU | Nasdaq SPAC; kapanışta ~360 mn $ nakit |
| QUBT | QUBT | Fotonik / yazılım | ~1,9 mlr $ bandı | küçük | |
| IQM | IQMX | Süperiletken | — | sipariş defteri 102 mn € (Ağu) | Avrupa; 54Q Brezilya 1Ç27 |

Özel / büyük kapalı: **PsiQuantum** (~7 mlr $ değerleme, 2025 turu; Nvidia NVentures katıldı; DARPA 125 mn $, Tem 2026). **QuEra**, **SandboxAQ**, **Atom Computing**. Hiperscaler: IBM (kendi bulut + Nighthawk r2 120Q), Google Willow + Boulder nötr-atom ekibi, Microsoft Azure + Majorana, Amazon Braket + Ocelot.

IonQ artık "saf kuantum" değil: SkyWater foundry + Vector Atomic (algılama) + ağ alımları. Infleqtion baştan çift hat (hesap + algılama).

---

## 5) Nvidia–Kuantum: QPU Yapmıyor, Denetim ve Kod Katmanını Tutuyor

**Ne yaptı (teyitli):** QPU üretmiyor. CUDA-Q (hibrit programlama), **NVQLink** (QPU↔GPU düşük gecikme, Eki 2025), **CUDA-Q Logical** (14 Eyl 2026, IEEE Quantum Week — mantıksal qubit orkestrasyonu), Ising AI modelleri (kalibrasyon + sendrom ön-kod çözümü).

**Infleqtion hattı (üst üste binen, teyitli işler):**
- Mantıksal qubit ile malzeme bilimi uygulaması (ortak yayımlanan gösterim).
- Sqale + NVQLink: Illinois Quantum & Microelectronics Park; 2027 teslim, başlangıç 50 mantıksal hedef, modüler 100.
- Ising ön-kod çözücü Sqale/Leaky simülasyonuna gömüldü (Nis 2026).
- 14 Eyl 2026: qLDPC + CUDA-Q Logical. Infleqtion: ~6 fiziksel veri qubit / 1 mantıksal (yüzey koduna göre ~5× kod oranı). Next Platform: 98 veri / 18 mantıksal, %18,4 kod oranı. Yazılım + cebir doğrulaması; sahada 30 mantıksal (2026 sonu hedefi) henüz teslim değil.
- GTC: Sqale, Nvidia stantında NVQLink lansman ortaklarından (Quantinuum ve Rigetti ile).

**Neden bu katman:** Faydalı kuantum, mikrosaniye ölçeğinde sendrom kod çözümü ister. Bu iş klasik hızlandırıcı işidir. Hangi modalite kazanırsa kazansın GPU + derleyici satılır. Jensen hattı: "kuantum bilgisayar yapmıyoruz, yığına gömülüyüz."

**Sermaye tarafı (Nvidia):** PsiQuantum turuna NVentures katıldı; Quantinuum özel turuna katılım haberleri var. Infleqtion'da halka açık "Nvidia hisse aldı" IR cümlesi yok — ilişki ürün entegrasyonu + ortak gösterim. Kotasyon yorumu yazılmaz.

**Beklenti (Nvidia ağzından, ürün):** NVQLink + CUDA-Q Logical'ı modalite-agnostik standart yapmak; QPU üreticisini CUDA-Q'ya kilitlemek. Infleqtion, IQM, Quantum Motion, Fermilab ilk Logical kullanıcıları.

Harita etkisi (mevcut düğüm): `sirket:nvidia` — kuantum, GPU talep sınıfı değil; **denetim/kod çözümü + NVQLink kilit** sınıfı. QPU satışına bağlı gelir yok.

---

## 6) Avrupa

**Quantinuum (İngiltere köken + Honeywell ABD).** Cambridge Quantum + Honeywell Quantum, 2021. Helios 98Q / ~48 mantıksal. CHIPS 100 mn $ imzalı (8 Eyl) — GlobalFoundries 300 mm iyon tuzağı + Monarch Quantum lazer. Oracle Cloud'a Helios yerleştirme (Ağu 2026). Apollo FT mimarisi 2029 şirket takvimi.

**Pasqal (Fransa, PSQL).** Nobel (Aspect) kurucu çevresi. 7 QPU sahada, 2 fabrika (FR/CA), hedef 13 QPU/yıl. BMW, BASF, CINECA. 17 Eyl: $USAR + Riven ile nadir toprak ayırıcı keşfi — **molekül araması, maden sahası ölçümü değil**.

**IQM (Finlandiya/Almanya, IQMX).** Süperiletken; Avrupa HPC + 17 teslim sistem. CUDA-Q Logical + NVQLink (150Q Halocene). Eldorado/Brezilya 54Q Spark, 1Ç27.

**planqc (Almanya).** Nötr atom; DLR 29 mn € sipariş; LRZ'de 1.000Q MAQCS (20 mn €). Mar 2026: Saarland + BMW + Infineon, QIAPO 2,3 mn € (üretim eniyileme).

**QuantumDiamonds (Münih).** NV-elmas mikroskop — gelişmiş paket içi hata. 91 mn € (15 öz + 76 Chips Act devlet yardımı); 152 mn € Münih fabrikası. ABD ve Tayvan'da 2026 Bahar kurulum; 10 büyük üreticiden 9'u ile PoC (şirket). Ürün: **ölçüm ekipmanı**, QPU değil.

**Infineon (Almanya/Avusturya).** Villach fab: iyon tuzağı wafer (6–12 inç). Müşteri/işbirliği: Quantinuum, eleQtron, ZuriQ, Oxford Ionics (2022). CHAMP-ION pilot hattı Villach. PQC güvenlik denetleyici sertifikası. QUTAC kurucu. Çip satışı QPU satışı değil — **temel teknoloji**.

---
