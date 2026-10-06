/* ----------------------------------------------------------------------------
 * Responsive image generation.
 *
 * Reads the existing photos in public/ and writes AVIF + WebP variants at a
 * set of widths into public/img/, plus a manifest of intrinsic dimensions at
 * src/generated/images.json that <Picture> uses to emit width/height (so no
 * image can cause layout shift) and srcset/sizes.
 *
 * Originals are never modified or deleted — this only adds files. Re-running
 * is cheap: a variant whose mtime is newer than its source is skipped.
 *
 *   node scripts/responsive-images.mjs            # changed sources only
 *   node scripts/responsive-images.mjs --force    # regenerate everything
 * -------------------------------------------------------------------------- */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

sharp.cache(false)

const PUBLIC = path.resolve('public')
const OUT_DIR = path.join(PUBLIC, 'img')
const MANIFEST = path.resolve('src/generated/images.json')
const FORCE = process.argv.includes('--force')

const WIDTHS = [400, 800, 1200, 1600]

/* Quality is per format: AVIF holds up much lower than WebP at the same
   perceived quality, which is where most of the saving comes from. */
const AVIF = { quality: 50, effort: 4 }
const WEBP = { quality: 76 }

/* Sources to process. Everything the redesigned main pages reference, plus
   team and blog art. Service-page-only art is left alone for now. */
const SOURCES = [
  'hero.webp', 'hero1.webp', 'hero2.webp', 'hero3.webp', 'hero4.webp',
  'kodel-verta-1.webp', 'kodel-verta-2.webp', 'kodel-verta-3.webp',
  'implantacija.webp', 'protezavimas.webp', 'balinimas.webp',
  'higiena.webp', 'plombavimas.webp',
  'poster.webp', 'poster1.webp',
  /* First frame of hero-video.mp4, extracted with ffmpeg. This is the hero
     LCP element: it is preloaded and painted immediately, and the video only
     starts once it has loaded, so the handoff is invisible. */
  'hero-poster-source.png',
  'team/*.jpg',
  /* Clean portraits cropped out of the branded team cards — see
     scripts/team-portraits.mjs. These are what the home page renders. */
  'team-portrait/*.jpg',
  'blog/*.{jpg,png,webp}',
  'musu-darbai/*.jpg',
]

async function expand(patterns) {
  const out = []
  for (const pat of patterns) {
    if (!pat.includes('*')) {
      out.push(pat)
      continue
    }
    const dir = path.dirname(pat)
    const base = path.basename(pat)
    // turn  *.{jpg,png}  into a regex
    const rx = new RegExp(
      '^' +
        base
          .replace(/\./g, '\\.')
          .replace(/\{([^}]+)\}/g, (_, g) => `(?:${g.split(',').join('|')})`)
          .replace(/\*/g, '.*') +
        '$',
      'i'
    )
    let entries = []
    try {
      entries = await fs.readdir(path.join(PUBLIC, dir))
    } catch {
      continue
    }
    for (const e of entries) if (rx.test(e)) out.push(dir === '.' ? e : `${dir}/${e}`)
  }
  return out
}

/** public/team/jonas.jpg -> team__jonas  (flat, collision-free output names) */
const slug = (rel) => rel.replace(/\.[^.]+$/, '').replace(/[/\\]/g, '__').replace(/[^a-zA-Z0-9_-]/g, '-')

async function newerThan(target, source) {
  try {
    const [t, s] = await Promise.all([fs.stat(target), fs.stat(source)])
    return t.mtimeMs >= s.mtimeMs
  } catch {
    return false
  }
}

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true })
  await fs.mkdir(path.dirname(MANIFEST), { recursive: true })

  const rels = await expand(SOURCES)
  const manifest = {}
  let written = 0
  let skipped = 0

  for (const rel of rels) {
    const abs = path.join(PUBLIC, rel)
    let meta
    try {
      meta = await sharp(abs).metadata()
    } catch {
      console.warn('[img] unreadable, skipped:', rel)
      continue
    }
    if (!meta.width || !meta.height) continue

    const name = slug(rel)
    // Never upscale: only widths at or below the original.
    const widths = WIDTHS.filter((w) => w <= meta.width)
    if (widths.length === 0) widths.push(meta.width)

    const entry = {
      w: meta.width,
      h: meta.height,
      ratio: +(meta.width / meta.height).toFixed(4),
      avif: [],
      webp: [],
    }

    for (const w of widths) {
      const h = Math.round((w / meta.width) * meta.height)
      for (const [fmt, opts, list] of [
        ['avif', AVIF, entry.avif],
        ['webp', WEBP, entry.webp],
      ]) {
        const file = `img/${name}-${w}.${fmt}`
        const target = path.join(PUBLIC, file)
        if (!FORCE && (await newerThan(target, abs))) {
          skipped++
        } else {
          await sharp(abs).resize({ width: w, withoutEnlargement: true })[fmt](opts).toFile(target)
          written++
        }
        list.push({ w, h, src: `/${file}` })
      }
    }

    manifest[`/${rel}`] = entry
  }

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  console.log(`[img] ${rels.length} sources · ${written} variants written · ${skipped} up to date`)
  console.log(`[img] manifest -> ${path.relative(process.cwd(), MANIFEST)}`)
}

run().catch((e) => {
  console.error('[img] FAILED:', e)
  process.exit(1)
})
