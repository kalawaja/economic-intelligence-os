# Ağ Haritası — economic-intelligence-os

Günlük ekonomik istihbarat raporlarının **görsel hali**: raporlarda geçen
şirketler, sektörler, işlemler ve etki değerlendirmeleri kümülatif bir ilişki
haritasında birikir. "Günlük Rapor" yazı halidir; bu site aynı bilginin
haritasıdır.

## Haritayı açmak

- **İnternetten:** GitHub Pages açıksa `https://kalawaja.github.io/economic-intelligence-os`
- **Bilgisayardan:** `index.html` dosyasına çift tıklamak yeterli. İnternet
  yoksa da çalışır (yalnızca yazı tipleri sistem varsayılanına döner).

## Nasıl okunur?

- **Renkler** = son rapora göre etki yönü: yeşil pozitif · kırmızı negatif ·
  turuncu bilinçli nötr · gri henüz sinyalsiz. Düğüme tıklayınca "neden bu
  renk" sorusunun cevabı — tarih, gerekçe ve kaynak raporla — açılır.
- **Düğüm boyutu** = raporlarda açıklanmış sermaye akışı (capex, M&A,
  finansman). **Sarı halka** = içeriden alım sinyali.
- **Çizgiler** = şirketler arası ilişkiler: yatırım, satın alma, tedarik,
  PPA (enerji anlaşması), ortaklık, rekabet. Kalınlık tutarla artar.
- **Kutular** = alt sektörler; soldaki ağaç tam hiyerarşiyi
  (sektör → alt sektör → şirket) verir ve tıklayınca haritayı o dala odaklar.
- **Arama** şirket adı, borsa kodu veya konu (tema) kabul eder.

Haritaya yalnızca raporlarda geçen varlıklar girer; bir şirket burada yoksa
sebebi henüz bir raporda yer almamış olmasıdır.

## Günlük akış

1. Günlük rapor yazılır → `raporlar/gunluk/YYYY-AA-GG.md`
2. Aynı oturumda rapordan delta çıkarılır → `data/deltas/YYYY-AA-GG.js`
   (şema: `data/schema.md`)
3. `data/manifest.js` listesine dosya adı eklenir
4. Üç dosya push edilir — harita kendini günceller

Ayrıntılı talimat ve Claude projesine yapıştırılacak blok:
`docs/gunluk-akis.md`. Veri bütünlüğü kontrolü (opsiyonel):
`node arac/dogrula.js`

## Klasörler

    index.html            harita (tek sayfa)
    assets/               stil, uygulama, cytoscape (offline çalışsın diye pakete dahil)
    data/manifest.js      delta listesi
    data/deltas/          günlük veri dosyaları (asla silinmez, üzerine eklenir)
    data/schema.md        veri şeması
    raporlar/gunluk/      günlük raporlar (yazı hali)
    raporlar/moduller/    derin analiz modülleri
    arac/dogrula.js       veri doğrulama aracı
    docs/gunluk-akis.md   günlük güncelleme talimatı

---
Bu depo analitik bir görselleştirme çalışmasıdır; **yatırım tavsiyesi değildir**.
