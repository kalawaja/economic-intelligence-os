#!/usr/bin/env node
/* Delta dosyalarını yükleyip bütünlük kontrolü yapar.
   Kullanım: node arac/dogrula.js   (repo kökünden) */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
sandbox.window.DELTAS = [];

function loadJs(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  vm.runInContext(code, sandbox, { filename: rel });
}

loadJs("data/manifest.js");
const files = sandbox.window.DELTA_FILES || [];
for (const f of files) loadJs(`data/deltas/${f}.js`);

const deltas = sandbox.window.DELTAS;
const errors = [];
const warn = [];

const YON = new Set(["pozitif", "negatif", "notr"]);
const ILISKI = new Set(["yatirim", "satin-alma", "tedarik", "ppa", "ortaklik", "rekabet"]);
const TIP = new Set(["capex", "ma", "finansman", "insider"]);

const nodes = new Map();
for (const d of deltas) {
  if (!d.tarih || !/^\d{4}-\d{2}-\d{2}$/.test(d.tarih)) errors.push(`tarih hatalı: ${d.tarih}`);
  if (d.rapor && !fs.existsSync(path.join(ROOT, d.rapor)))
    warn.push(`${d.tarih}: rapor dosyası yok: ${d.rapor}`);
  for (const n of d.dugumler || []) {
    if (!n.id || !n.tur || !n.ad) errors.push(`${d.tarih}: eksik düğüm alanı: ${JSON.stringify(n)}`);
    const prev = nodes.get(n.id);
    nodes.set(n.id, Object.assign({}, prev, n));
  }
}
for (const [id, n] of nodes) {
  if (n.tur === "sektor" && n.ust && !nodes.has(n.ust))
    errors.push(`sektör üst referansı yok: ${id} -> ${n.ust}`);
  if (n.tur === "sirket") {
    for (const s of n.sektor || []) {
      if (!nodes.has(s)) errors.push(`şirket sektör referansı yok: ${id} -> ${s}`);
      else if (nodes.get(s).tur !== "sektor") errors.push(`${id}: ${s} bir sektör değil`);
    }
    if (!n.sektor || !n.sektor.length) warn.push(`şirketin sektörü yok: ${id}`);
  }
}
for (const d of deltas) {
  for (const e of d.iliskiler || []) {
    if (!nodes.has(e.kaynak)) errors.push(`${d.tarih}: ilişki kaynağı yok: ${e.kaynak}`);
    if (!nodes.has(e.hedef)) errors.push(`${d.tarih}: ilişki hedefi yok: ${e.hedef}`);
    if (!ILISKI.has(e.tur)) errors.push(`${d.tarih}: bilinmeyen ilişki türü: ${e.tur}`);
  }
  for (const t of d.etkiler || []) {
    if (!nodes.has(t.sirket)) errors.push(`${d.tarih}: etki şirketi yok: ${t.sirket}`);
    if (!YON.has(t.yon)) errors.push(`${d.tarih}: bilinmeyen yön: ${t.yon}`);
    if (!t.gerekce) errors.push(`${d.tarih}: gerekçesiz etki: ${t.sirket}`);
    if (t.tema && !nodes.has(t.tema)) errors.push(`${d.tarih}: tema referansı yok: ${t.tema}`);
  }
  for (const s of d.sermaye || []) {
    if (!nodes.has(s.hedef)) errors.push(`${d.tarih}: sermaye hedefi yok: ${s.hedef}`);
    if (!TIP.has(s.tip)) errors.push(`${d.tarih}: bilinmeyen sermaye tipi: ${s.tip}`);
  }
}

const sirketler = [...nodes.values()].filter((n) => n.tur === "sirket").length;
const sektorler = [...nodes.values()].filter((n) => n.tur === "sektor").length;
const temalar = [...nodes.values()].filter((n) => n.tur === "tema").length;
const iliskiToplam = deltas.reduce((a, d) => a + (d.iliskiler || []).length, 0);
const etkiToplam = deltas.reduce((a, d) => a + (d.etkiler || []).length, 0);

console.log(`Delta: ${deltas.length} · Şirket: ${sirketler} · Sektör: ${sektorler} · Tema: ${temalar} · İlişki: ${iliskiToplam} · Etki: ${etkiToplam}`);
for (const w of warn) console.log(`UYARI: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`HATA: ${e}`);
  process.exit(1);
}
console.log("Doğrulama başarılı ✓");
