/* ----------------------------------------------------------------------------
 * Team portraits.
 *
 * The files in public/team/ are pre-composed marketing cards: each one has the
 * clinician's name, job title, specialisation list and a clinic logo baked
 * into the artwork. Worse, they come in two different brand styles, so placed
 * side by side they read as two different clinics.
 *
 * This lifts a clean 3:4 portrait out of the right-hand side of each card,
 * clear of the baked-in typography. No information is lost: the names and
 * roles already exist as real text in the TEAM array on the home page, so they
 * move from pixels into selectable, translatable, screen-readable markup.
 *
 * Originals in public/team/ are never modified. Output: public/team-portrait/.
 * Crop windows were tuned by eye against a contact sheet; re-tune here if the
 * source artwork is ever replaced.
 *
 *   node scripts/team-portraits.mjs
 * -------------------------------------------------------------------------- */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

sharp.cache(false)

const SRC = path.resolve('public/team')
const OUT = path.resolve('public/team-portrait')

/** Fraction of the source width/height at which the portrait window starts. */
const CROPS = {
  'Donatas_light.jpg': { left: 0.55, top: 0.12 },
  'donataskubilius.jpg': { left: 0.61, top: 0.12 },
  'Jonas-light.jpg': { left: 0.55, top: 0.12 },
  'Odeta-light.jpg': { left: 0.55, top: 0.12 },
  'Rūta_light.jpg': { left: 0.52, top: 0.12 },
}

const RATIO = 0.75 // 3:4 portrait

async function run() {
  await fs.mkdir(OUT, { recursive: true })

  for (const [file, crop] of Object.entries(CROPS)) {
    const src = path.join(SRC, file)
    const meta = await sharp(src).metadata()
    if (!meta.width || !meta.height) {
      console.warn('[team] unreadable, skipped:', file)
      continue
    }

    const left = Math.round(meta.width * crop.left)
    const width = meta.width - left
    const top = Math.round(meta.height * crop.top)
    const height = Math.min(Math.round(width / RATIO), meta.height - top)

    await sharp(src)
      .extract({ left, top, width, height })
      .resize({ width: 900, height: 1200, fit: 'cover' })
      .jpeg({ quality: 88 })
      .toFile(path.join(OUT, file))

    console.log(`[team] ${file} -> ${width}x${height} @ ${left},${top}`)
  }

  console.log('[team] done. Run scripts/responsive-images.mjs next.')
}

run().catch((e) => {
  console.error('[team] FAILED:', e)
  process.exit(1)
})
