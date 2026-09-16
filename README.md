# Economic Intelligence OS — Ağ Haritası

Günlük ekonomik istihbarat raporlarının görsel hali. Raporda geçen şirketler,
sektörler, işlemler ve etki değerlendirmeleri kümülatif bir ilişki haritasında
birikir. Yazı günlük rapordadır; bu site aynı bilginin haritasıdır.

Canlı panel: [economic-intelligence-os-three.vercel.app](https://economic-intelligence-os-three.vercel.app)
Kaynak: [github.com/kalawaja/economic-intelligence-os](https://github.com/kalawaja/economic-intelligence-os)

Statik sitedir (HTML + JS). Sunucu, veritabanı, build yok. `main`'e push
Vercel'i günceller.

## Panel nasıl okunur

Sol sütun dört sekme:

- **Sektör** — hiyerarşi (sektör → alt sektör → şirket). Tıklayınca harita o dala odaklanır. Turuncu `+N` rozeti o gün dokunulan şirket sayısıdır.
- **Konu** — temalar. O gün geçenler üste çıkar, `bugün N` yazar.
- **Rapor** — günlük ve modül raporlarının HTML ikizleri.
- **Filtre** — etki yönü: pozitif / negatif / nötr / sinyalsiz.

Sekmelerin altında **Bugünün izi** durur: son dolu dilimin tarihi, `etki · düğüm · bağ` sayacı, günün tek cümlelik özeti ve o gün renk değişen şirketler. Satıra tıklayınca sağ panel açılır.

Harita üst çubuğu: **Ağ / Isı / Bugün / Sığdır / + / − / İlişki**.

- **Bugün** açıkken son dilimin şirketleri öne çıkar (turuncu halka); geri kalan solar.
- **İlişki** kapalıyken çizgiler yalnızca seçilen şirkette görünür; açıkken tümü.

Lejant alt şerittedir.

| Gösterge | Anlamı |
|---|---|
| Yeşil / kırmızı / turuncu / gri | Son etki yönü (pozitif, negatif, nötr, sinyalsiz) |
| Sarı halka | İçeriden alım |
| Turuncu halka | Bugün dokunulan düğüm |
| Boyut | Açıklanmış sermaye akışı (capex, M&A, finansman) |
| Çizgi | Seçilen şirketin ilişkisi (İlişki açıksa hepsi) |

Düğüme tıklayınca sağ panel tarih, gerekçe ve kaynak raporu gösterir. Arama şirket adı, borsa kodu veya konu kabul eder.

Haritaya yalnızca raporlarda geçen varlıklar girer.

**Makro Kriz Paneli** (`makro.html`): FRED / CME / TCMB okumaları ve termometre. Üst barda 18 nokta.

## Günlük rapor nasıl yazılır

Hafta içi çıktı. Anlatıdır, telgraf değil: her bölümde tez, makas (ne değişti / ne değişmedi), sınır. Veri **kalın** durur; spekülasyon yazılmaz. İki bağımsız kaynak yoksa `(teyit gerektirir)`.

Sabit iskelet: başlık → Günün Öne Çıkanı → sekiz tema (finansal-güç, ai-ekosistemi, yarıiletken, enerji, savunma-uzay, ma-akisi, politika-regulasyon, makro-gorunum) → kriz termometresi → koşullu risk notları → kaynaklar → uyarı satırı.

Geçmiş günlük dosyalara dokunulmaz. Düzeltme yeni günün raporunda yapılır. Çift sayım yok; Pazartesi hafta sonunu kapsar.

Şablon ve HTML ikizi: `docs/gunluk-akis.md`.

## Günlük push

Aynı commit'te şunlar gider (`rapor: YYYY-AA-GG`):

1. `raporlar/gunluk/YYYY-AA-GG.md` — kanonik metin
2. `raporlar/gunluk/YYYY-AA-GG.html` — okunur ikiz
3. `data/deltas/YYYY-AA-GG.js` — o günün düğüm / bağ / etki / sermaye + isteğe bağlı `ozet`
4. `data/manifest.js` — yeni tarih **eklenir**, eskiler silinmez
5. `data/makro.js` — o günün makro okuması (dosya üzerine yazılır)

Delta şeması: `data/schema.md`. Kimlik kuralı: küçük harf, Türkçe karaktersiz, tireli (`sirket:nvidia`). Var olan id yeniden icat edilmez.

İsteğe bağlı kontrol: `node arac/dogrula.js`

HTML ikizi kısayolu: `python3 arac/rapor-html.py raporlar/gunluk/YYYY-AA-GG.md`

## Teknik not

- Çekirdek harita: `assets/app.js` + `assets/style.css` (kümülatif birleşim, Cytoscape).
- Gün katmanı ve panel düzeni: `assets/bugun.js` + `assets/bugun.css` — `app.js`'e dokunmadan bindirilir. Beğenilmezse bu iki dosya ve `index.html`'deki iki satır (`bugun.css` / `bugun.js`) kaldırılır.
- Makro noktaları: `data/makro.js` → `makro.html` ve üst bar.

## Klasörler

    index.html              ağ haritası
    makro.html              kriz termometresi
    assets/app.js           harita çekirdeği
    assets/bugun.js         Bugün katmanı (overlay)
    assets/bugun.css        overlay + panel düzeni
    assets/style.css        temel stil
    data/manifest.js        delta listesi
    data/deltas/            günlük veri (silinmez, üzerine eklenir)
    data/makro.js           son makro okuma
    data/schema.md          delta şeması
    raporlar/gunluk/        günlük rapor (.md + .html)
    raporlar/moduller/      derin analiz (.md + .html)
    arac/dogrula.js         veri doğrulama
    arac/rapor-html.py      md → html ikiz
    docs/gunluk-akis.md     günlük talimat + html şablonu

---
Bu depo analitik bir görselleştirme çalışmasıdır; **yatırım tavsiyesi değildir**.
