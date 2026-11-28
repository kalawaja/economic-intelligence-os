#!/usr/bin/env node
/* data/manifest.js sonuna tek id ekler. Dosyayı baştan yazmaz.
   Kullanım (repo kökünden): node arac/manifest-ekle.js YYYY-AA-GG[-ek]
   Delta dosyası data/deltas/<id>.js olarak duruyor olmalıdır.
*/

const fs = require("fs");
const path = require("path");

const id = process.argv[2];
if (!id || process.argv.length !== 3 || !/^\d{4}-\d{2}-\d{2}(-[a-z0-9-]+)?$/.test(id)) {
  console.error("Kullanım: node arac/manifest-ekle.js YYYY-AA-GG[-ek]");
  process.exit(2);
}

const root = path.join(__dirname, "..");
const manifestPath = path.join(root, "data", "manifest.js");
const deltaPath = path.join(root, "data", "deltas", `${id}.js`);

if (!fs.existsSync(deltaPath)) {
  console.error("HATA: delta dosyası yok: data/deltas/" + id + ".js");
  process.exit(1);
}

const text = fs.readFileSync(manifestPath, "utf8");
if (!text.includes("window.DELTA_FILES")) {
  console.error("HATA: window.DELTA_FILES yok. Manifest baştan yazılmamalı; eldeki dosyayı koru.");
  process.exit(1);
}
if (text.includes(`"${id}"`)) {
  console.log("zaten listede:", id);
  process.exit(0);
}

const closeAt = text.lastIndexOf("\n];");
if (closeAt < 0) {
  console.error("HATA: kapanış `];` bulunamadı. Dosyayı baştan yazma.");
  process.exit(1);
}

let body = text.slice(0, closeAt).replace(/\s*$/, "");
if (body.endsWith(",")) {
  /* son girdinin virgülü duruyor */
} else if (body.endsWith('"')) {
  body += ",";
} else {
  console.error("HATA: son girdi tanınmadı. Dosyayı baştan yazma.");
  process.exit(1);
}

const updated = body + `\n  "${id}"\n];\n`;
fs.writeFileSync(manifestPath, updated);
console.log("eklendi:", id);
