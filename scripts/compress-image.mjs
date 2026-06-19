import { createRequire } from 'module';
import { resolve } from 'path';

const require = createRequire(import.meta.url);
const [,, input, output] = process.argv;
if (!input || !output) {
  console.error('Usage: node scripts/compress-image.mjs <input> <output>');
  process.exit(1);
}

const sharp = require('sharp');

const info = await sharp(resolve(input))
  .resize({ width: 1200, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(resolve(output));

console.log(`Done: ${output}`);
console.log(`Size: ${(info.size / 1024).toFixed(0)} KB`);
