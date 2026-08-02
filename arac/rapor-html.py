#!/usr/bin/env python3
"""Bir .md raporunun yanına okunabilir .html ikizini üretir.
Kullanım: python3 arac/rapor-html.py raporlar/gunluk/2026-07-31.md [...daha fazla .md]"""
import os, sys

SABLON = """<!doctype html>
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
"""

def uret(yol):
    md = open(yol, encoding="utf-8").read().replace("</script", "<\\/script")
    on = os.path.relpath(".", os.path.dirname(yol)).replace(os.sep, "/")
    cikti = yol[:-3] + ".html"
    open(cikti, "w", encoding="utf-8").write(SABLON.format(on=on, md=md))
    print("üretildi:", cikti)

if __name__ == "__main__":
    for yol in sys.argv[1:]:
        if yol.endswith(".md"):
            uret(yol)
