# Modül Raporu — Makro Kriz İzleme (Erken Uyarı Sistemi)

*Economic Intelligence OS — Makro finansal kriz göstergeleri: yöntem, eşikler ve ilk okuma (6 Ağustos 2026)*

---

## Amaç ve Kapsam

Ağ Haritası bugüne kadar şirket-ilişki düzeyinde çalışıyordu; sistemik riski (resesyon, kredi krizi, piyasa çökmesi) izleyen bir katmanı yoktu. Bu modül o boşluğu dolduruyor: **Makro Kriz Paneli** (`makro.html`), her günlük koşuda güncellenen `data/makro.js` dosyasından beslenen bir erken uyarı panosudur. Geçmiş krizlerde getiri eğrisi inversiyonu, kredi spreadlerinin genişlemesi ve oynaklık sıçramaları çöküşlerden **6-24 ay öncesine kadar** sinyal üretmiştir; panel bu öncü göstergeleri tek ekranda, eşikli ve renkli durumlarla izler.

Her gösterge üç durumdan birindedir: **● Normal** (yeşil), **▲ İzleme** (turuncu), **■ Alarm** (kırmızı). Bileşik **Kriz Termometresi** puanı, izleme=1 ve alarm=2 puan sayılarak hesaplanır (bugünkü azami: 18). 0-3 Düşük, 4-8 Yükselmiş, 9+ Yüksek. Eşik aşımı olan her gösterge, o günün raporundaki **Risk Engine Notları**na işlenir.

## Veri Kaynakları — İstenen ve Uygulanan

Talep edilen kaynak listesinin bir bölümü ücretli veya anahtar gerektiriyor; aşağıdaki tablo hangi kaynağın neyle karşılandığını belgeler:

| İstenen kaynak | Durum | Uygulanan çözüm |
|---|---|---|
| Fed FRED API (tahvil, enflasyon, işsizlik) | ✅ Ücretsiz | FRED serileri: T10Y2Y, DGS10/DGS2, DFF, CPIAUCSL, PCEPI, UNRATE + SAHMREALTIME |
| Bloomberg/Eikon (S&P 500, VIX, HY spread) | ❌ Ücretli | FRED'deki ücretsiz kopyalar: SP500, VIXCLS, BAMLH0A0HYM2 (ICE BofA HY OAS) |
| BIS küresel kredi büyümesi | ⚠️ Ücretsiz ama çeyreklik/gecikmeli | Çeyrek başına bir kez elle kontrol (kredi/GSYH açığı); panelde "çeyreklik" kartı |
| TCMB/döviz (kur, rezervler) | ⚠️ EVDS API anahtar ister | Kur ve haftalık rezerv bülteni finans basınından okunur; EVDS anahtarı eklenirse otomatikleşir |
| EPFR fon akışları | ❌ Ücretli | Haftalık fon-akışı verisi, EPFR'yi aktaran finans haberlerinden (BofA "Flow Show" vb.) izlenir |

CDS spreadleri için ücretsiz ve güvenilir günlük kaynak yoktur; kredi riski kanalı HY OAS ile temsil edilir.

## Göstergeler ve Eşik Gerekçeleri

**1. Getiri Eğrisi (10Y−2Y, FRED T10Y2Y).** En bilinen resesyon öncüsü: 1990, 2001, 2008 ve 2020 resesyonlarının hepsinden önce negatife döndü. Eşik: **< 0 alarm**; +0,50'nin altı "düz eğri" olarak izleme.

**2. VIX (FRED VIXCLS).** 30 üzeri kapanışlar tarihsel olarak stres dönemleriyle örtüşür (2008: 80+, Mart 2020: 82). Eşik: **≥ 30 alarm, ≥ 20 izleme**.

**3. Yüksek Getirili Tahvil Spreadi (FRED BAMLH0A0HYM2).** Kredi piyasasının risk fiyatlaması. Talimattaki 300 bp eşiği **izleme** eşiği olarak alındı; çünkü 300 bp tarihsel ortalamaya yakındır (2008'de 2.000 bp'ye, 2020'de ~1.100 bp'ye çıktı). **≥ 500 bp alarm** olarak tanımlandı — bu ayrım bilinçlidir ve tartışmaya açıktır.

**4. S&P 500 Zirveden Uzaklık (FRED SP500).** ≥ %10 düzeltme (izleme), ≥ %20 ayı piyasası (alarm). Momentum göstergesi; tek başına öncü değil, teyit edicidir.

**5. Chicago Fed NFCI (FRED NFCI).** 105 değişkenli haftalık bileşik finansal koşullar endeksi — para piyasaları, borç/hisse piyasaları ve gölge bankacılığı kapsar; EPFR'nin izleyeceği "finansal sıkışma" kanalının ücretsiz en iyi vekilidir. **≥ 0 izleme** (ortalamadan sıkı), **≥ +0,5 alarm**.

**6. Sahm Kuralı (FRED SAHMREALTIME).** İşsizlik oranının 3 aylık ortalaması, son 12 ayın dip değerinin **0,50 puan** üzerine çıktığında resesyon fiilen başlamış sayılır (1970'ten beri yanlış pozitifi yok denecek kadar az). **≥ 0,50 alarm, ≥ 0,30 izleme**.

**7. Enflasyon (CPI/PCE, FRED CPIAUCSL, PCEPI).** Doğrudan kriz göstergesi değil, politika kanalı: hedefin belirgin üstünde enflasyon, Fed'i sıkılaştırmaya zorlayarak diğer göstergeleri tetikler. **> %3 izleme, ≥ %6 alarm**.

**8. Fed Politika Yönü (FRED DFF + CME FedWatch).** Efektif faiz + piyasanın fiyatladığı yön. Artırım fiyatlaması > %50 ise izleme; toplantı-dışı acil hamle alarm.

**Türkiye bloğu:** USD/TRY (aylık ≥ %5 değer kaybı izleme, ≥ %10 alarm) ve TCMB toplam rezervleri (4 haftada ≥ %5 düşüş izleme, ≥ %10 alarm). EVDS API anahtarı eklenirse reel efektif kur ve swap hariç net rezerv de otomatikleştirilebilir.

## İlk Okuma — 6 Ağustos 2026: Puan 3/18, Seviye DÜŞÜK

Alarm veren gösterge yok. Üç gösterge izlemede:

- **Getiri eğrisi +0,45 puan ile düz** (10Y %4,62 − 2Y %4,20, 5 Ağustos): Eylül faiz artırımı fiyatlaması kısa ucu iterse inversiyon riski yılın ikinci yarısının ana makro izleme konusu.
- **Enflasyon hedef üstü:** CPI %3,5 / PCE %3,7 (Haziran, yıllık); çekirdek CPI %2,6, çekirdek PCE %3,3. Hürmüz normalleşmesi enerji bileşenini aşağı çekebilir — ama aynı kanaldan geri de dönebilir.
- **Fed sıkılaşma yönünde:** Efektif faiz %3,63; CME FedWatch Eylül'de artırım olasılığını %54,9 fiyatlıyor. Tarihsel kriz dizilimi çoğunlukla "sıkılaşma → eğri inversiyonu → kredi olayı" sırasıyla ilerler; dizilimin ilk halkası aktif.

Sağlıklı taraf: **VIX 15,81** (5 Ağustos), **HY OAS 273 bp** (4 Ağustos), **NFCI −0,529** (31 Temmuz haftası, gevşek), **Sahm 0,07** (Haziran), S&P 500 zirvesinin yalnızca %0,7 altında. Kredi ve oynaklık kanalları, hisse piyasasındaki bellek/capex türbülansını şimdilik sistemik risk olarak fiyatlamıyor — 6 Ağustos günlük raporundaki Kore satışı ve "capex cezası" bu çerçevede *pozisyonel* kalıyor, *sistemik* değil.

Türkiye: USD/TRY 47,57 (6 Ağustos); TCMB toplam rezervi 164,4 milyar $ (31 Temmuz haftası, +1,84 milyar $). Yön pozitif; aylık kur değişimi bir sonraki koşulardan itibaren hesaplanacak.

**Bugünkü sinyal özeti:** "Yüksek alarm" veren gösterge yok; dizilimin başındayız. En kritik tekil izleme konusu, Cuma istihdam verisi sonrası **kısa uç faizlerin getiri eğrisini düzleştirme hızı**.

## İşleyiş (Günlük Akışa Eklenen Adımlar)

1. Her günlük koşuda göstergeler FRED sayfalarından okunur, `data/makro.js` yeni değerlerle üretilir ve rapor dosyalarıyla birlikte teslim edilir.
2. Eşik aşımı varsa günlük raporun Risk Engine bölümüne numaralı sinyal olarak girer; **yeni bir alarm** doğduğunda bildirim mesajının ilk cümlesine taşınır.
3. Panel (`makro.html`) statiktir; yalnızca `data/makro.js` değiştiği için push ritüeli aynen korunur. Site Vercel'de olduğundan push sonrası panel kendiliğinden güncellenir.
4. `arac/makro-cek.py`, FRED verilerini bilgisayarınızdan güncellemek isterseniz kullanılabilir (repo kökünde: `python3 arac/makro-cek.py`); normal akışta gerekli değildir.
5. BIS kredi/GSYH açığı çeyrek başına bir kez bu modül raporuna işlenir (ilk kontrol: Eylül 2026).

## Kaynaklar

- [FRED — 10-Year Minus 2-Year Treasury Spread (T10Y2Y)](https://fred.stlouisfed.org/series/T10Y2Y)
- [FRED — CBOE Volatility Index (VIXCLS)](https://fred.stlouisfed.org/series/VIXCLS)
- [FRED — ICE BofA US High Yield OAS (BAMLH0A0HYM2)](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)
- [FRED — Chicago Fed National Financial Conditions Index (NFCI)](https://fred.stlouisfed.org/series/NFCI)
- [FRED — Sahm Rule Recession Indicator (SAHMREALTIME)](https://fred.stlouisfed.org/series/SAHMREALTIME)
- [FRED — Effective Federal Funds Rate (DFF)](https://fred.stlouisfed.org/series/DFF)
- [FRED — Unemployment Rate (UNRATE)](https://fred.stlouisfed.org/series/UNRATE)
- [Advisor Perspectives — CPI: Inflation at 3.5% in June 2026](https://www.advisorperspectives.com/dshort/updates/2026/07/14/cpi-consumer-price-index-inflation-june-2026)
- [Fox Business — June 2026 PCE inflation](https://www.foxbusiness.com/economy/june-2026-pce-inflation)
- [Dünya — 6 Ağustos 2026 döviz kurları](https://www.dunya.com/finans/dolar/dolar-kac-tl-oldu-euro-ne-kadar-6-agustos-persembe-doviz-kurlari-haberi-835138)
- [Borsanın Gündemi — TCMB rezervlerinde son durum (31 Temmuz haftası)](https://www.borsaningundemi.com/haber/tcmb-rezervlerinde-son-durum-nedir-1904247)
- [BIS — Credit-to-GDP gaps](https://www.bis.org/statistics/c_gaps.htm)

*Bu modül analitik bir izleme aracıdır; yatırım tavsiyesi değildir.*
