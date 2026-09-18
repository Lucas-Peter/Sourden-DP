/**
 * SOURDEN — placeholder artwork generator
 * ---------------------------------------------------------------------------
 * Run with:  npm run placeholders
 *
 * Reads the image manifest in `src/data/media.js` and writes one clearly
 * labelled SVG per outstanding slot into `public/images/`.
 *
 * WHY A SCRIPT RATHER THAN HAND-DRAWN FILES
 * The manifest is already the single source of truth for paths, dimensions and
 * alt text. Generating from it guarantees the artwork can never drift from the
 * markup, and means every placeholder is labelled with its exact recommended
 * source size.
 *
 * SAFETY
 * Only assets flagged `placeholder: true` are written. Once a real photograph
 * is supplied and the flag is removed, this script will never overwrite it.
 * ---------------------------------------------------------------------------
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// The manifest is plain ESM with no Vite-specific imports, so Node can consume
// it directly — artwork and markup therefore share one source of truth.
import { images } from '../src/data/media.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'images');

/* --- palette (mirrors tokens.css so placeholders feel on-brand) ----------- */

const C = {
  fill: '#EFEDE8', // --stone-soft
  hatch: '#E2DFD8',
  border: '#D5D2C9',
  ink: '#111315',
  ivory: '#F6F5F1',
  brass: '#B49A6C',
  text: '#8E8B84',
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));

const FONT = "'Inter Variable', Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const FONT_DISPLAY = "'Manrope Variable', Manrope, 'Helvetica Neue', Helvetica, Arial, sans-serif";

/**
 * Editorial placeholder: warm stone ground, faint diagonal hatch, hairline
 * border, and a centred three-line label — PLACEHOLDER / the slot name / the
 * recommended source size.
 *
 * WHY EVERYTHING IS CENTRED: these files are displayed with
 * `object-fit: cover`, which crops. The default `object-position` is `center`,
 * so the crop is symmetric and the centre always survives — but a corner
 * marker does not. A 4:3 image shown in a 4:5 frame keeps only ~60% of its
 * width, which was enough to reduce a corner tag reading "PLACEHOLDER" to a
 * clipped "LDER".
 *
 * So the label is centred AND sized to fit inside the safe band, measured per
 * artwork. `SAFE_FRACTION` is set below the worst case on this site (~0.60) to
 * leave a margin for sub-pixel rounding and for the trailing letter-space that
 * SVG adds after the last glyph.
 */
const SAFE_FRACTION = 0.54;

// Per-character advance as a multiple of font-size, for Inter uppercase with
// the tracking applied below. Deliberately generous — over-estimating the
// width only makes the label slightly smaller, whereas under-estimating
// pushes it into the cropped zone.
const ADVANCE_MAIN = 0.85;
const ADVANCE_TAG = 0.86;
const ADVANCE_META = 0.62;

function placeholderSvg({ width, height, label, ratio }) {
  const w = width;
  const h = height;
  const safeW = w * SAFE_FRACTION;

  const main = `[ ${label} ]`;
  const meta = `${w} × ${h} · ${ratio}`;
  const tag = 'PLACEHOLDER';

  // The main label drives the type scale; the secondary lines follow it down
  // and are then clamped individually so no line can outgrow the safe band.
  const idealMain = safeW / (ADVANCE_MAIN * main.length);
  const fs = Math.round(Math.max(11, Math.min(idealMain, w / 18)));

  const fsTag = Math.round(
    Math.max(8, Math.min(fs * 0.46, safeW / (ADVANCE_TAG * tag.length)))
  );
  const fsMeta = Math.round(
    Math.max(8, Math.min(fs * 0.58, safeW / (ADVANCE_META * meta.length)))
  );

  const ls = (0.17).toFixed(3);
  const lsTag = (0.2).toFixed(3);
  const lsMeta = (0.12).toFixed(3);

  const cx = w / 2;

  // Centre the whole three-line stack on the canvas, measured by cap height so
  // the optical centre matches the geometric one.
  const capMain = fs * 0.72;
  const capTag = fsTag * 0.72;
  const capMeta = fsMeta * 0.72;
  const gap1 = fs * 0.46;
  const gap2 = fs * 0.3;

  const stackH = capTag + gap1 + capMain + gap2 + capMeta;
  const top = h / 2 - stackH / 2;

  const yTag = top + capTag;
  const yMain = yTag + gap1 + capMain;
  const yMeta = yMain + gap2 + capMeta;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)} placeholder">
  <title>${esc(label)} — placeholder</title>
  <defs>
    <pattern id="sd-hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="14" stroke="${C.hatch}" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="${w}" height="${h}" fill="${C.fill}" />
  <rect width="${w}" height="${h}" fill="url(#sd-hatch)" />
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" fill="none" stroke="${C.border}" stroke-width="1" />

  <text x="${cx}" y="${yTag.toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${fsTag}" font-weight="600" letter-spacing="${lsTag}em" fill="${C.text}" opacity="0.75">${tag}</text>
  <text x="${cx}" y="${yMain.toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${fs}" font-weight="600" letter-spacing="${ls}em" fill="${C.text}">${esc(main)}</text>
  <text x="${cx}" y="${yMeta.toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="${fsMeta}" font-weight="400" letter-spacing="${lsMeta}em" fill="${C.text}" opacity="0.8">${esc(meta)}</text>
</svg>
`;
}

/**
 * Open Graph card. This one is a real brand asset (typography only, no
 * fabricated evidence), so it is rendered as a proper Ink card rather than a
 * grey placeholder block.
 */
function socialSvg({ width, height }) {
  const w = width;
  const h = height;
  const pad = Math.round(w * 0.075);
  const fsWord = Math.round(w * 0.083);
  const fsTag = Math.round(w * 0.031);
  const fsSub = Math.round(w * 0.019);
  const fsTagSmall = Math.round(w * 0.0115);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="SOURDEN — China Sourcing. Done.">
  <title>SOURDEN — China Sourcing. Done.</title>
  <rect width="${w}" height="${h}" fill="${C.ink}" />
  <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="${C.brass}" stroke-opacity="0.35" stroke-width="1" />

  <text x="${pad * 1.6}" y="${h / 2 - fsWord * 0.35}" font-family="${FONT_DISPLAY}" font-size="${fsWord}" font-weight="700" letter-spacing="${(fsWord * 0.2).toFixed(1)}" fill="${C.ivory}">SOURDEN</text>

  <line x1="${(pad * 1.6).toFixed(1)}" y1="${h / 2 + fsTag * 0.35}" x2="${(pad * 1.6 + w * 0.16).toFixed(1)}" y2="${h / 2 + fsTag * 0.35}" stroke="${C.brass}" stroke-width="1.5" />

  <text x="${pad * 1.6}" y="${h / 2 + fsTag * 1.55}" font-family="${FONT_DISPLAY}" font-size="${fsTag}" font-weight="500" letter-spacing="${(fsTag * 0.05).toFixed(1)}" fill="${C.brass}">China Sourcing. Done.</text>
  <text x="${pad * 1.6}" y="${h / 2 + fsTag * 1.55 + fsSub * 1.9}" font-family="${FONT}" font-size="${fsSub}" font-weight="400" letter-spacing="${(fsSub * 0.06).toFixed(1)}" fill="${C.ivory}" opacity="0.72">Sourcing Without the Barriers.</text>

  <text x="${w - pad * 1.6}" y="${h - pad * 1.6}" text-anchor="end" font-family="${FONT}" font-size="${fsTagSmall}" font-weight="500" letter-spacing="${(fsTagSmall * 0.22).toFixed(1)}" fill="${C.brass}" opacity="0.8">PLACEHOLDER · REPLACE WITH RASTER 1200 × 630 PNG</text>
</svg>
`;
}

/* --- main ----------------------------------------------------------------- */

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let written = 0;
  let skipped = 0;
  const lines = [];

  for (const [, asset] of Object.entries(images)) {
    const ext = asset.file.split('.').pop().toLowerCase();

    if (!asset.placeholder) {
      skipped += 1;
      lines.push(`  skip  ${asset.file.padEnd(38)} real asset in place`);
      continue;
    }

    if (ext !== 'svg') {
      skipped += 1;
      lines.push(`  skip  ${asset.file.padEnd(38)} non-SVG placeholder`);
      continue;
    }

    const svg =
      asset.role === 'social'
        ? socialSvg({ width: asset.width, height: asset.height, label: asset.label })
        : placeholderSvg(asset);

    await writeFile(join(OUT_DIR, asset.file), svg, 'utf8');
    written += 1;
    lines.push(
      `  write ${asset.file.padEnd(38)} ${asset.width}×${asset.height}  ${asset.role}`
    );
  }

  console.log('\nSOURDEN — placeholder artwork\n');
  console.log(lines.join('\n'));
  console.log(`\n${written} written · ${skipped} skipped (already real)\n`);
  console.log(`Output: ${OUT_DIR}\n`);
  console.log('Reminder: Open Graph cards must be raster before launch —');
  console.log('most platforms do not render SVG. See IMAGES.md.\n');
}

main().catch((err) => {
  console.error('\n[generate-placeholders] failed:', err.message, '\n');
  process.exitCode = 1;
});
