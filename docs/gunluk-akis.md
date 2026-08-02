# Günlük Akış — raporu haritaya işleme talimatı

Bu dosya iki şey içerir: (1) Claude projesinin talimatlarına (ana prompt)
yapıştırılacak blok, (2) push ritüeli, (3) rapor HTML şablonu.

## 1) Proje talimatına yapıştırılacak blok

---

### Ağ Haritası güncelleme kuralı

Her günlük rapor yazıldığında, aynı yanıt içinde raporun ağ haritası
deltasını da üret:

1. Repo'daki `data/schema.md` şemasına birebir uyan
   `data/deltas/YYYY-AA-GG.js` dosyasını oluştur. İçine yalnızca o raporda
   geçenleri koy: yeni şirket/sektör/tema düğümleri, şirketler arası
   ilişkiler (yatırım, satın alma, tedarik, PPA, ortaklık, rekabet), her
   ilgili şirket için etki kaydı (`pozitif`/`negatif`/`notr` + rapora dayanan
   tek cümle gerekçe + varsa tema) ve sermaye olayları (capex, M&A,
   finansman, içeriden alım).
2. Kimlik tutarlılığı için önce `data/deltas/` içindeki son dosyalara bak;
   var olan varlıklar için aynı id'yi kullan (`sirket:sk-hynix` gibi), yeni
   varlıklara aynı kurala uygun yeni id ver.
3. `data/manifest.js` listesinin sonuna yeni dosya adını (uzantısız) ekle.
4. Raporu iki biçimde kaydet: `raporlar/gunluk/YYYY-AA-GG.md` (kanonik metin)
   ve `raporlar/gunluk/YYYY-AA-GG.html` (okunabilir ikiz —
   `docs/gunluk-akis.md` içindeki şablona markdown aynen gömülür; şablondaki
   `{md}` yerine rapor metni, `{on}` yerine `../..` yazılır).
5. Kullanıcıya push edilecek dosyaların tam listesini ver
   (delta + manifest + .md + .html = 4 dosya).

Etki kayıtları spekülasyon içermez; yalnızca rapordaki bilgiye dayanır.
Delta dosyaları geçmişe dönük değiştirilmez, yalnızca eklenir.

---

## 2) Push ritüeli (her rapor sonrası)

Claude dört dosyayı verdikten sonra, bunları yerel klasördeki aynı yerlere
koy ve:

    cd ~/Desktop/economic-intelligence-os
    git add -A
    git commit -m "rapor: YYYY-AA-GG"
    git push

1-2 dakika içinde GitHub Pages sitesi de güncellenir; yerelde `index.html`
zaten anında günceldir.

İsteğe bağlı doğrulama (Node kuruluysa): `node arac/dogrula.js`
(.html ikizi eksikse uyarı verir.)

## 3) Rapor HTML şablonu

`{on}` = kökten göreli önek (günlük ve modül klasörleri için `../..`),
`{md}` = raporun markdown metni aynen (içinde `</script` geçerse
`<\/script` yapılır). Bilgisayar erişimi olan oturumlar kısayol olarak
`python3 arac/rapor-html.py raporlar/gunluk/YYYY-AA-GG.md` çalıştırabilir.

```html
<!doctype html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rapor — Ağ Haritası</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Fragment+Mono&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="{on}/assets/rapor.css" />
</head>
<body>
  <nav class="rapor-ust"><a href="{on}/index.html">← Ağ Haritası</a></nav>
  <article id="rapor"></article>
  <script type="text/markdown" id="icerik">
{md}
  </script>
  <script src="{on}/assets/vendor/marked.min.js"></script>
  <script src="{on}/assets/rapor-goruntule.js"></script>
</body>
</html>
```
