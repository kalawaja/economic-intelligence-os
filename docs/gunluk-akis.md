# Günlük Akış — raporu haritaya işleme talimatı

Bu dosya iki şey içerir: (1) Claude projesinin talimatlarına (ana prompt)
yapıştırılacak blok, (2) push ritüeli.

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
4. Raporun kendisini `raporlar/gunluk/YYYY-AA-GG.md` olarak kaydet.
5. Kullanıcıya push edilecek dosyaların tam listesini ver.

Etki kayıtları spekülasyon içermez; yalnızca rapordaki bilgiye dayanır.
Delta dosyaları geçmişe dönük değiştirilmez, yalnızca eklenir.

---

## 2) Push ritüeli (her rapor sonrası)

Claude üç dosyayı verdikten sonra (delta + manifest + rapor), bunları yerel
klasördeki aynı yerlere koy ve:

    cd ~/Desktop/economic-intelligence-os
    git add -A
    git commit -m "rapor: YYYY-AA-GG"
    git push

1-2 dakika içinde GitHub Pages sitesi de güncellenir; yerelde `index.html`
zaten anında günceldir.

İsteğe bağlı doğrulama (Node kuruluysa): `node arac/dogrula.js`
