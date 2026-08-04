window.DELTAS.push({
  tarih: "2026-08-04",
  rapor: "raporlar/moduller/optik-transceiver-tedarik-zinciri.md",
  dugumler: [
    { id: "sektor:optik-ag", tur: "sektor", ad: "Optik Ağ & Fotonik", ust: "sektor:teknoloji" },
    { id: "sirket:coherent", tur: "sirket", ad: "Coherent", kod: "COHR", sektor: ["sektor:optik-ag"] },
    { id: "sirket:lumentum", tur: "sirket", ad: "Lumentum", kod: "LITE", sektor: ["sektor:optik-ag"] },
    { id: "sirket:applied-opto", tur: "sirket", ad: "Applied Optoelectronics", kod: "AAOI", sektor: ["sektor:optik-ag"] },
    { id: "sirket:corning", tur: "sirket", ad: "Corning", kod: "GLW", sektor: ["sektor:optik-ag"] },
    { id: "sirket:innolight", tur: "sirket", ad: "Zhongji Innolight", kod: null, sektor: ["sektor:optik-ag"] },
    { id: "sirket:eoptolink", tur: "sirket", ad: "Eoptolink", kod: null, sektor: ["sektor:optik-ag"] },
    { id: "tema:cin-optik-yasagi", tur: "tema", ad: "Çin optik modül yasağı (FCC taslağı)" }
  ],
  iliskiler: [
    { kaynak: "sirket:innolight", hedef: "sirket:coherent", tur: "rekabet", aciklama: "Küresel transceiver liderliğinde uzun süredir baş rakipler; Innolight %27 pazar payıyla önde" },
    { kaynak: "sirket:innolight", hedef: "sirket:lumentum", tur: "rekabet", aciklama: "ABD hyperscaler optik siparişlerinde doğrudan rekabet; olası yasakta sipariş kayması adayı" },
    { kaynak: "sirket:innolight", hedef: "sirket:applied-opto", tur: "rekabet", aciklama: "AAOI, Teksas'ta 800G/1.6T kapasitesiyle Çinli üreticilerin ABD-yerli ikamesi olarak konumlanıyor" },
    { kaynak: "sirket:eoptolink", hedef: "sirket:coherent", tur: "rekabet", aciklama: "2024'te %175 büyümeyle 3.'lüğe yükselen Çinli uzman; ABD pazarında aynı segmentte" }
  ],
  etkiler: [
    { sirket: "sirket:coherent", yon: "pozitif", gerekce: "FCC'nin Çin optik modül yasağı taslağı haberiyle hisse gün içi +%11-18; Çinli olmayan tedarikçilere muafiyet bekleniyor", tema: "tema:cin-optik-yasagi" },
    { sirket: "sirket:lumentum", yon: "pozitif", gerekce: "Hisse +%6-14; büyük bulut şirketlerine hâlihazırda aynı sınıf transceiver satıyor, sipariş kaymasının doğal adresi", tema: "tema:cin-optik-yasagi" },
    { sirket: "sirket:applied-opto", yon: "pozitif", gerekce: "Hisse +%17-20; Houston bölgesinde ~900.000 ft² ayak izi ve 2027 sonu için ayda 700.000 adet 800G/1.6T kapasite hedefi", tema: "tema:cin-optik-yasagi" },
    { sirket: "sirket:corning", yon: "pozitif", gerekce: "Optik altyapı yan etkisiyle hisse ~+%8", tema: "tema:cin-optik-yasagi" },
    { sirket: "sirket:innolight", yon: "negatif", gerekce: "Küresel pazarın %27'sini tutarken FCC taslağı yeni nesil modüllerinin ABD veri merkezlerine girişini engelleyebilir; taslak henüz kesinleşmedi", tema: "tema:cin-optik-yasagi" },
    { sirket: "sirket:eoptolink", yon: "negatif", gerekce: "ABD hyperscaler satışlarıyla büyüyen Çinli uzman; taslak yasa kapsamına girme riski taşıyor", tema: "tema:cin-optik-yasagi" }
  ],
  sermaye: []
});
