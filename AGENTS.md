# Ajan kuralları

## data/manifest.js yalnız eklenir

`data/manifest.js` baştan yazılmaz. Liste bellekten, eski sohbetten, `/tmp`
kopyasından veya takvimden üretilmez. `PLACEHOLDER_MANIFEST`, `$(cat ...)`,
`window.MANIFEST` yazılmaz.

Rapor ajanı depodaki güncel dosyayı göremiyorsa manifest içeriği üretmez.
Yalnızca eklenecek uzantısız id'yi söyler. Eklemeyi klonun olduğu makine yapar:

    node arac/manifest-ekle.js YYYY-AA-GG

Betik `window.DELTA_FILES` sonuna tek satır ekler. Var olan satır silinmez,
sırası değişmez.

Commit öncesi (ve kanca, kuruluysa):

    node arac/manifest-kontrol.js

Önceki bir id eksikse, sırası bozulduysa, JS ayrışmıyorsa veya id'nin
`data/deltas/<id>.js` dosyası yoksa komut 1 ile çıkar. Kanca kurulumu:

    git config core.hooksPath .githooks

`durum-notu.md` commit edilmez. `git add -A` kullanılmaz.
