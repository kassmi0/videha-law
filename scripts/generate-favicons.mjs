import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import toIco from 'to-ico';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

const INPUT = path.join(PUBLIC_DIR, 'favicon-source.png');

function stripNearWhiteToTransparent({ data }, threshold = 248) {
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const a = out[i + 3];

    // Make near-white pixels transparent (removes screenshot white bg).
    if (a > 0 && r >= threshold && g >= threshold && b >= threshold) {
      out[i + 3] = 0;
    }
  }
  return out;
}

async function writePng({ size, input, name, fit }) {
  const outPath = path.join(PUBLIC_DIR, name);

  await input
    .clone()
    .resize(size, size, {
      fit,
      position: 'centre',
      withoutEnlargement: false,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 1 })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(outPath);
}

async function main() {
  await fs.access(INPUT);

  // 1) Load source as raw RGBA so we can remove white background reliably.
  const raw = await sharp(INPUT).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const cleaned = stripNearWhiteToTransparent(raw, 248);

  const cleanedSharp = sharp(cleaned, {
    raw: { width: raw.info.width, height: raw.info.height, channels: 4 },
  });

  // 2) Aggressively trim transparent edges (removes whitespace around logo).
  //    Using trim() after background removal makes the logo fill the canvas.
  const trimmed = cleanedSharp.trim();

  // 3) Upscale to a large master first, then derive favicon sizes from it.
  //    This prevents the logo being shrunk too early in the pipeline.
  const MASTER_SIZE = 1024;
  const master = trimmed
    .clone()
    .resize(MASTER_SIZE, MASTER_SIZE, {
      fit: 'contain',
      position: 'centre',
      withoutEnlargement: false,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.9 });

  // 4) Output favicons. Use "cover" to maximize fill in tabs while staying centered.
  await writePng({ size: 16, input: master, name: 'icon-16x16.png', fit: 'cover' });
  await writePng({ size: 32, input: master, name: 'icon-light-32x32.png', fit: 'cover' });
  await writePng({ size: 48, input: master, name: 'icon-48x48.png', fit: 'cover' });

  // Use same 32px for dark scheme (transparent background works on both).
  await fs.copyFile(
    path.join(PUBLIC_DIR, 'icon-light-32x32.png'),
    path.join(PUBLIC_DIR, 'icon-dark-32x32.png'),
  );

  // Apple touch icon: contain to avoid edge clipping in iOS masks.
  await writePng({ size: 180, input: master, name: 'apple-icon.png', fit: 'contain' });

  // Multi-size ICO for best compatibility.
  const png16 = await fs.readFile(path.join(PUBLIC_DIR, 'icon-16x16.png'));
  const png32 = await fs.readFile(path.join(PUBLIC_DIR, 'icon-light-32x32.png'));
  const png48 = await fs.readFile(path.join(PUBLIC_DIR, 'icon-48x48.png'));
  const ico = await toIco([png16, png32, png48]);
  await fs.writeFile(path.join(PUBLIC_DIR, 'favicon.ico'), ico);

  console.log('✅ Favicons generated successfully (bold + trimmed + upscaled).');
}

main().catch((err) => {
  console.error('❌ Error generating favicon:', err);
  process.exit(1);
});