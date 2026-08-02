# Veri Şeması — Ağ Haritası

Harita, `data/deltas/` içindeki günlük delta dosyalarından oluşur. Her delta,
o günün raporundan çıkarılan yeni bilgileri **ekler**; eski dosyalar asla
değiştirilmez (yalnızca yazım hatası düzeltmeleri hariç). Site tüm deltaları
tarih sırasıyla birleştirir.

## Delta dosyası

Ad: `data/deltas/YYYY-AA-GG.js` (aynı güne ikinci dosya gerekiyorsa
`YYYY-AA-GG-ek-adi.js`). Dosya eklendiğinde `data/manifest.js` listesine
dosya adı (uzantısız) eklenir.

```js
window.DELTAS.push({
  tarih: "2026-07-29",                       // rapor tarihi
  rapor: "raporlar/gunluk/2026-07-29.md",    // kaynak dosya (göreli yol)
  dugumler: [ ... ],
  iliskiler: [ ... ],
  etkiler: [ ... ],
  sermaye: [ ... ]
});
```

## dugumler (düğümler)

Bir düğüm ilk geçtiği deltada tanımlanır; sonraki deltalar aynı `id` ile alan
güncelleyebilir (boş bırakılan alanlar korunur).

```js
// Sektör / alt sektör (ust = bir üst sektörün id'si; sira = zincir sırası, opsiyonel)
{ id: "sektor:yariiletken", tur: "sektor", ad: "Yarıiletken", ust: "sektor:teknoloji" }

// Şirket (kod = borsa kodu, yoksa null; ozel = halka açık değil;
//  sektor = üye olduğu alt sektörler, İLKİ birincildir ve haritadaki kutusunu belirler)
{ id: "sirket:nvidia", tur: "sirket", ad: "NVIDIA", kod: "NVDA", sektor: ["sektor:cip-tasarim"] }
{ id: "sirket:openai", tur: "sirket", ad: "OpenAI", kod: null, ozel: true, sektor: ["sektor:yapay-zeka"] }

// Tema (haritada düğüm olarak çizilmez; arama + vurgulama + etki gerekçesi için)
{ id: "tema:bellek-kitligi", tur: "tema", ad: "Bellek/HBM kıtlığı" }
```

Kimlik kuralı: küçük harf, Türkçe karaktersiz, tire ile (`sirket:sk-hynix`).
**Yeni delta yazmadan önce mevcut deltalarda aynı varlığın id'si var mı bak;
varsa aynısını kullan.**

## iliskiler (şirketler arası bağlar)

```js
{ kaynak: "sirket:uber", hedef: "sirket:delivery-hero", tur: "satin-alma",
  tutar_musd: 14800, aciklama: "Teslimat konsolidasyonu" }
```

`tur` değerleri: `yatirim` (finansman/hisse), `satin-alma`, `tedarik`
(kaynak tedarikçi → hedef müşteri), `ppa` (enerji alım anlaşması; `mw` alanı
kullanılabilir), `ortaklik` (ittifak/JV/işbirliği), `rekabet`.
`tutar_musd` milyon $ cinsindendir (14,8 milyar $ → 14800). Bilinmiyorsa yazma.

## etkiler (renkleri belirleyen değerlendirmeler)

Rapordaki bilgiye dayanan, şirket bazlı, **o güne ait** yön değerlendirmesi.
Bir şirketin haritadaki rengi = en son etki kaydı. Geçmişi panelde görünür.

```js
{ sirket: "sirket:apple", yon: "negatif",
  gerekce: "Bellek fiyatları ve Çin zayıflığı 4. çeyrek öngörüsünü düşürdü",
  tema: "tema:bellek-kitligi" }   // tema opsiyonel ama önerilir
```

`yon`: `pozitif` (yeşil) · `negatif` (kırmızı) · `notr` (turuncu, bilinçli
nötr). Hiç etki kaydı olmayan şirket gri görünür. Gerekçe tek cümle, rapora
dayanmalı; spekülasyon yazılmaz.

## sermaye (akıllı para / sermaye akışı olayları)

Düğüm boyutunu büyütür; `insider` tipi düğüme özel halka ekler.

```js
{ hedef: "sirket:amazon", tutar_musd: 220000, tip: "capex",
  aciklama: "2026 AI altyapı yatırımı" }
```

`tip`: `capex` · `ma` (satın alma/birleşme) · `finansman` (yatırım turu,
garanti) · `insider` (içeriden alım; tutar bilinmiyorsa yazılmaz).

## Günlük akış (özet)

1. Günlük rapor yazılır → `raporlar/gunluk/YYYY-AA-GG.md` **ve** okunabilir
   ikizi `raporlar/gunluk/YYYY-AA-GG.html` (şablon: `docs/gunluk-akis.md`)
2. Rapordan delta çıkarılır → `data/deltas/YYYY-AA-GG.js`
3. `data/manifest.js` listesine dosya adı eklenir
4. Dört dosya push edilir; harita kendini günceller
   (`rapor` alanı her zaman `.md` yolunu gösterir; site linki `.html`e çevirir)

Doğrulama (opsiyonel, Node varsa): `node arac/dogrula.js`
