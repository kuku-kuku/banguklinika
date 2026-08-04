import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

// libvips caches decoded pixels and can hold file handles on Windows,
// causing EBUSY when we try to overwrite the source. Disable caching.
sharp.cache(false)

const PUBLIC_DIR = path.resolve('public')
// Backups live OUTSIDE public/ so Vite doesn't copy them into dist/.
const BACKUP_DIR = path.resolve('.image-originals')

// Max widths per usage. Anything wider gets resized (aspect preserved).
// Chose ~2x display size to cover retina/HiDPI without waste.
const RULES = [
  // Hero images and video posters — biggest on the page
  { match: /^(hero|poster)\d*\.webp$/i, maxWidth: 1600, quality: 78 },
  { match: /^hero\.webp$/i,               maxWidth: 1600, quality: 78 },
  // "Kodėl verta" cards, popular service cards, article covers, etc.
  { match: /\.webp$/i,                    maxWidth: 1400, quality: 80 },
  // Team photos — displayed at ~478×597, target 960w max
  { match: /^team\/.+\.jpg$/i,            maxWidth: 960,  quality: 82, format: 'jpeg' },
  // Divider ornament — displayed 70x70, huge original
  { match: /^Asset 53@2x\.png$/i,         maxWidth: 200,  quality: 90, format: 'png' },
]

const SKIP = [
  /^favicon/i, /^apple-touch-icon/i, /^logo/i, /^bangu\.png$/i,
  /^_originals\//,
]

async function walk(dir, rel = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const p = path.join(dir, e.name)
    const r = rel ? `${rel}/${e.name}` : e.name
    if (e.isDirectory()) files.push(...await walk(p, r))
    else files.push({ abs: p, rel: r })
  }
  return files
}

function pickRule(rel) {
  if (SKIP.some(r => r.test(rel))) return null
  return RULES.find(r => r.match.test(rel)) ?? null
}

async function ensureBackup(rel, abs) {
  const backupPath = path.join(BACKUP_DIR, rel)
  try { await fs.access(backupPath); return }
  catch {
    await fs.mkdir(path.dirname(backupPath), { recursive: true })
    await fs.copyFile(abs, backupPath)
  }
}

async function optimize(file, rule) {
  // Read source into a buffer up front — decouples subsequent sharp ops from
  // the file, so overwriting the source doesn't hit Windows file locks.
  const srcBuf = await fs.readFile(file.abs)
  const meta = await sharp(srcBuf, { failOn: 'none' }).metadata()
  const origSize = srcBuf.length

  const needsResize = meta.width && meta.width > rule.maxWidth
  const targetFormat = rule.format ?? meta.format

  if (!needsResize && targetFormat === meta.format) {
    // Still allow re-encode if file is huge for its dimensions
    if (origSize < 200 * 1024) return null
  }

  await ensureBackup(file.rel, file.abs)

  let pipeline = sharp(srcBuf, { failOn: 'none' }).rotate()
  if (needsResize) pipeline = pipeline.resize({ width: rule.maxWidth, withoutEnlargement: true })

  if (targetFormat === 'webp')      pipeline = pipeline.webp({ quality: rule.quality, effort: 5 })
  else if (targetFormat === 'jpeg' || targetFormat === 'jpg')
                                    pipeline = pipeline.jpeg({ quality: rule.quality, mozjpeg: true })
  else if (targetFormat === 'png')  pipeline = pipeline.png({ quality: rule.quality, compressionLevel: 9 })

  const buf = await pipeline.toBuffer()
  const tmp = `${file.abs}.tmp-${Date.now()}`
  try {
    await fs.writeFile(tmp, buf)
    await fs.rm(file.abs, { force: true })
    await fs.rename(tmp, file.abs)
  } catch (e) {
    await fs.rm(tmp, { force: true }).catch(() => {})
    throw e
  }
  const newMeta = await sharp(buf).metadata()
  return { origSize, newSize: buf.length, origW: meta.width, newW: newMeta.width }
}

const all = await walk(PUBLIC_DIR)
let totalBefore = 0, totalAfter = 0, changed = 0
for (const f of all) {
  const rule = pickRule(f.rel)
  if (!rule) continue
  try {
    const r = await optimize(f, rule)
    if (!r) continue
    totalBefore += r.origSize
    totalAfter  += r.newSize
    changed++
    const savedKb = ((r.origSize - r.newSize) / 1024).toFixed(0)
    console.log(`  ${f.rel}: ${r.origW}→${r.newW}w, ${(r.origSize/1024).toFixed(0)}KB → ${(r.newSize/1024).toFixed(0)}KB (−${savedKb}KB)`)
  } catch (e) {
    console.warn(`  ${f.rel}: SKIP (${e.message})`)
  }
}
console.log(`\n${changed} files optimized`)
console.log(`Total: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB (saved ${((totalBefore-totalAfter)/1024/1024).toFixed(2)}MB)`)
console.log(`Originals backed up to .image-originals/`)
