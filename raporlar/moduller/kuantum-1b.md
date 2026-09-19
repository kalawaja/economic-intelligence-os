## Modalite tablosu: kim neyle iddia ediyor

| Modalite | Kim | İddia + kanıt türü | Kısıt |
|---|---|---|---|
| Sıkışmış iyon | IonQ, Quantinuum, Oxford Ionics (IonQ içinde) | Yüksek 2Q sadakat; all-to-all. Quantinuum Helios: 98 fiziksel / ~48 mantıksal, ~2:1, 99,921% 2Q (31 Ara 2025, şirket + Ransford) | Yavaş kapı; lazer yığını; çip + foundry |
| Nötr atom | Infleqtion, Pasqal, planqc, QuEra | Aynı tür atom, kalibrasyon yükü düşük. Infleqtion Sqale: 1.600 site, 99,73% dolaşıklık, 12 mantıksal (2025) | Atom taşıma; mantıksal ölçek iyonun gerisinde |
| Süperiletken | IBM, Google, Rigetti, IQM, D-Wave (tavlama + dual-rail) | Nanosaaniye kapı; CMOS-benzeri fab; HPC komşuluğu | Gürültü; yüzey kodu oranı; soğutma |
| Fotonik | PsiQuantum, Xanadu ($XNDU), QUBT | Silikon fotonik hattı (GFS Malta) | PsiQuantum NISQ kutu satmıyor |
| Silikon spin | Quantum Motion, Diraq, Intel hattı | Transistör foundry'sine oturur | Mantıksal kanıt erken |
| Topolojik | Microsoft Majorana 2 | Şirket: 20 sn ortalama ömür, 4-qubit hücre | Faydalı hesap yok |

Sadakat skoru tek başına alım gerekçesi olmaz. Teslim ve gelir ayrı satır.

---

## Halka açık kuantum hisseleri: 18 Eylül kesiti

Piyasa değeri anlık fotoğraf. Yön cümlesi değil. Kaynak: QuantumMarketCap 18 Eylül + şirket IR.

| Şirket | Ticker | Modalite | Piyasa (kesit) | Gelir / kılavuz | Not |
|---|---|---|---|---|---|
| IonQ | IONQ | İyon + foundry | ~15,4 mlr $ | 2026 kılavuz **450–460 mn $** (SkyWater 31 Tem kapanışından) | 2025 GAAP 130 mn $ |
| Quantinuum | QNT | İyon (QCCD) | ~14,3 mlr $ | FY ~31 mn $ | Nasdaq IPO Haz 2026 |
| D-Wave | QBTS | Tavlama + gate | ~6,6 mlr $ | FY ~25 mn $; 1Y26 rezervasyon 35,5 mn $ | QCI alımı Oca 2026 |
| Rigetti | RGTI | Süperiletken chiplet | ~5,3 mlr $ | FY ~7 mn $ | Cepheus-1 108Q (Nis 2026) |
| Infleqtion | INFQ | Nötr atom + algılama | ~3,1 mlr $ | 2026 kılavuz **43 mn $** | NYSE Şub 2026 |
| Xanadu | XNDU | Fotonik | ~2,3 mlr $ | — | Nasdaq Mar 2026 |
| Pasqal | PSQL | Nötr atom | (Ağu 28 listelendi) | 7 kurulu QPU | SPAC; kapanışta ~360 mn $ nakit |
| QUBT | QUBT | Fotonik / yazılım | ~1,9 mlr $ bandı | küçük | |
| IQM | IQMX | Süperiletken | — | sipariş defteri 102 mn € | 54Q Brezilya 1Ç27 |

Kapalı tarafta PsiQuantum duruyor: ~7 mlr $ değerleme (2025 turu), Nvidia NVentures katıldı, DARPA 125 mn $ (Tem 2026). QuEra, SandboxAQ, Atom Computing aynı rafta. Hiperscaler katmanı IBM, Google Willow + Boulder ekibi, Azure + Majorana, Braket + Ocelot.

IonQ "saf kuantum" değil. SkyWater foundry + Vector Atomic + ağ alımları. 2026 kılavuzu foundry ile şişti. Kuantum payını ayrı sor.

---

## Nvidia kuantum bilgisayar yapmıyor

Soru yanlış kuruluyor. Nvidia QPU üretmiyor.

Teyitli katman:

- CUDA-Q (hibrit programlama)
- **NVQLink** (QPU↔GPU düşük gecikme, Eki 2025)
- **CUDA-Q Logical** (14 Eyl 2026)
- Ising modelleri: kalibrasyon ve sendrom ön-kod çözümü

Infleqtion hattı üst üste binen işler:

- Mantıksal qubit ile malzeme gösterimi
- Sqale + NVQLink, Illinois parkı; 2027 teslim, başlangıç 50 mantıksal hedef
- Ising ön-kod çözücü Sqale/Leaky simülasyonuna gömüldü (Nis 2026)
- 14 Eylül: qLDPC + Logical. Infleqtion ~6 fiziksel veri qubit / 1 mantıksal diyor. Next Platform: 98 veri / 18 mantıksal, %18,4. Sahada 30 mantıksal (2026 sonu hedefi) teslim değil
- GTC'de Sqale, NVQLink lansman ortaklarından (Quantinuum ve Rigetti ile)

Neden bu katman? Faydalı kuantum, mikrosaniye ölçeğinde sendrom ister. Bu iş klasik hızlandırıcı işi. Hangi modalite kazanırsa GPU + derleyici satılır. Jensen'in cümlesi duruyor: kuantum bilgisayar yapmıyoruz, yığına gömülüyüz.

Sermaye: NVentures PsiQuantum turunda. Quantinuum özel turuna katılım haberleri var. Infleqtion IR'de "Nvidia hisse aldı" cümlesi yok. İlişki ürün + ortak gösterim.

Harita etkisi mevcut düğümde: `sirket:nvidia` — GPU talep sınıfı değil. Denetim, kod çözümü, NVQLink kilit sınıfı.

---
