/**
 * Generates the static social-sharing image at public/og.jpg.
 *
 * Page photography is optimised automatically by Astro's image pipeline
 * (src/assets → _astro/*.avif|webp). However Open Graph / Twitter cards need a
 * stable, unhashed absolute URL, so this script derives that single file from
 * the ridge panorama before every build.
 */
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'src/assets/gallery/yun-lai-viewpoint-1.jpg');
const target = resolve(root, 'public/og.jpg');

await mkdir(dirname(target), { recursive: true });

const info = await sharp(source)
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 80, mozjpeg: true, progressive: true })
  .toFile(target);

console.log(`og.jpg → ${info.width}x${info.height} (${Math.round(info.size / 1024)} KB)`);
