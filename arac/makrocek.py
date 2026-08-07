#!/usr/bin/env python3
"""Makro göstergelerin güncel değerlerini FRED'den çeker ve özet basar.
data/makro.js'i elle güncellerken yardımcıdır; normal akışta gerekli değildir.
Kullanım: python3 arac/makro-cek.py
"""
import csv, io, urllib.request

SERILER = [
    ("T10Y2Y",        "Getiri Eğrisi 10Y-2Y (puan)"),
    ("VIXCLS",        "VIX"),
    ("BAMLH0A0HYM2",  "HY OAS (yüzde; bp = x100)"),
    ("SP500",         "S&P 500"),
    ("NFCI",          "Chicago Fed NFCI"),
    ("SAHMREALTIME",  "Sahm Kuralı"),
    ("DFF",           "Efektif Fed Faizi (%)"),
    ("CPIAUCSL",      "CPI (endeks; yıllık % için 12 ay önceye bölün)"),
    ("PCEPI",         "PCE (endeks)"),
]

def son_deger(seri):
    url = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=" + seri
    with urllib.request.urlopen(url, timeout=30) as r:
        metin = r.read().decode("utf-8", "replace")
    satirlar = [s for s in csv.reader(io.StringIO(metin))][1:]
    dolu = [(t, v) for t, v in satirlar if v not in (".", "")]
    return dolu[-1] if dolu else ("-", "-")

if __name__ == "__main__":
    print(f"{'Seri':14} {'Tarih':12} {'Değer':>12}  Açıklama")
    print("-" * 70)
    for seri, ad in SERILER:
        try:
            tarih, deger = son_deger(seri)
        except Exception as hata:
            tarih, deger = "HATA", str(hata)[:24]
        print(f"{seri:14} {tarih:12} {deger:>12}  {ad}")
    print("-" * 70)
    print("Not: CME FedWatch, USD/TRY ve TCMB rezervleri bu betikte yoktur;")
    print("gunluk kosu bunlari web'den okur. Degerleri data/makro.js'e isleyin.")
