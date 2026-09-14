import type { ImageMetadata } from 'astro';

/**
 * Ordered gallery assets.
 *
 * Files follow the descriptive naming convention `<place>-<subject>-<view>-<n>.jpg`
 * (e.g. `yun-lai-viewpoint-1.jpg` … `yun-lai-viewpoint-16.jpg`). They live under
 * `src/assets` so Astro's image pipeline can emit right-sized AVIF/WebP variants
 * at build time instead of shipping multi-megabyte camera originals.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>('./yun-lai-viewpoint-*.jpg', {
  eager: true,
});

const ordered = Object.entries(modules)
  .map(([path, mod]) => {
    const match = path.match(/-(\d+)\.jpg$/i);
    return { index: match ? Number(match[1]) : 0, image: mod.default };
  })
  .sort((a, b) => a.index - b.index);

/** Every gallery photo, ordered by its file index. */
export const galleryImages: ImageMetadata[] = ordered.map((entry) => entry.image);

/** Look up a single photo by its file index (e.g. 5 → `yun-lai-viewpoint-5.jpg`). */
export const getGalleryImage = (index: number): ImageMetadata =>
  ordered.find((entry) => entry.index === index)?.image ?? ordered[0].image;

/** Primary hero visual (the widest ridge panorama). */
export const heroImage: ImageMetadata = getGalleryImage(1);
