#!/usr/bin/env node
/* data/manifest.js yalnızca eklenir; baştan yazılan eksik liste commit'i durdurur.
   Kullanım (repo kökünden):
     node arac/manifest-kontrol.js [--taban <git-rev>] [--asama]
   --taban  karşılaştırılacak önceki revizyon (yoksa HEAD)
   --asama  aday olarak çalışma kopyası yerine indeksdeki (staged) dosyayı okur
*/

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const MANIFEST = "data/manifest.js";

function git(args) {
  return execFileSync("git", args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
}

function parse(code, filename) {
  if (code.includes("PLACEHOLDER_MANIFEST") || code.includes("$(cat")) {
    return {
      error:
        "manifest yer tutucu içeriyor (PLACEHOLDER_MANIFEST veya $(cat ...)); dosyayı baştan yazma, node arac/manifest-ekle.js kullan",
    };
  }
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    vm.runInContext(code, sandbox, { filename });
  } catch (err) {
    return { error: `manifest çalışmıyor (${filename}): ${err.message}` };
  }
  const files = sandbox.window.DELTA_FILES;
  if (!Array.isArray(files)) {
    return {
      error: `window.DELTA_FILES bir dizi değil (${filename}). Dosya baştan yazılmış olabilir; window.MANIFEST kullanılmaz`,
    };
  }
  return { files };
}

function idsFromRev(rev) {
  let code;
  try {
    code = git(["show", `${rev}:${MANIFEST}`]);
  } catch {
    return { missing: true };
  }
  const parsed = parse(code, `${rev}:${MANIFEST}`);
  if (parsed.error) return { missing: true, unreadable: parsed.error };
  return { files: parsed.files };
}

function main() {
  const args = process.argv.slice(2);
  let taban = "HEAD";
  let asama = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--taban" && args[i + 1]) taban = args[++i];
    else if (args[i] === "--asama") asama = true;
    else {
      console.error("Kullanım: node arac/manifest-kontrol.js [--taban <git-rev>] [--asama]");
      process.exit(2);
    }
  }

  let code;
  try {
    code = asama
      ? git(["show", `:${MANIFEST}`])
      : fs.readFileSync(path.join(ROOT, MANIFEST), "utf8");
  } catch (err) {
    console.error("HATA: manifest okunamadı:", err.message);
    process.exit(1);
  }

  const parsed = parse(code, asama ? `:${MANIFEST}` : MANIFEST);
  if (parsed.error) {
    console.error("HATA:", parsed.error);
    process.exit(1);
  }

  const files = parsed.files;
  const errors = [];
  const seen = new Set();
  for (const id of files) {
    if (typeof id !== "string" || !/^\d{4}-\d{2}-\d{2}(-[a-z0-9-]+)?$/.test(id)) {
      errors.push(`geçersiz girdi: ${JSON.stringify(id)}`);
      continue;
    }
    if (seen.has(id)) errors.push(`yinelenen girdi: ${id}`);
    seen.add(id);
    const rel = path.join("data", "deltas", `${id}.js`);
    if (!fs.existsSync(path.join(ROOT, rel))) errors.push(`delta dosyası yok: ${rel}`);
  }

  const onDisk = fs
    .readdirSync(path.join(ROOT, "data", "deltas"))
    .filter((name) => name.endsWith(".js"))
    .map((name) => name.slice(0, -3));
  for (const id of onDisk) {
    if (!seen.has(id)) errors.push(`manifestte yok: ${id}`);
  }

  const prev = idsFromRev(taban);
  if (prev.files) {
    const pos = new Map(files.map((id, i) => [id, i]));
    let last = -1;
    for (const id of prev.files) {
      if (!pos.has(id)) {
        errors.push(`silinmiş girdi (${taban} içinde vardı): ${id}`);
        continue;
      }
      const at = pos.get(id);
      if (at < last) errors.push(`sıra bozuldu (${taban} sırası): ${id}`);
      last = Math.max(last, at);
    }
    if (files.length < prev.files.length) {
      errors.push(`girdi sayısı azaldı: ${prev.files.length} → ${files.length}`);
    }
  } else if (prev.unreadable) {
    console.log(`UYARI: ${taban} manifesti okunamadı (${prev.unreadable}); ekleme kıyası atlandı`);
  }

  if (errors.length) {
    for (const e of errors) console.error("HATA:", e);
    console.error("Manifest baştan yazılamaz. Yalnızca sona ekle: node arac/manifest-ekle.js <id>");
    process.exit(1);
  }
  console.log(`Manifest tamam: ${files.length} girdi, ${onDisk.length} delta dosyası`);
}

main();
