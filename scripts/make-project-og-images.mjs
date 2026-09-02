#!/usr/bin/env node
/**
 * Phase 13 tool — generates the 1.91:1 Open Graph crop for every published
 * project photograph.
 *
 * The crop is derived from the owner-supplied hero photograph of the same
 * job (never from stock, AI or competitor imagery) with libvips' "attention"
 * smart positioning, which keeps the visually salient region — the work
 * itself — inside the 1200×630 social-preview frame.
 *
 * Output: public/images/projects/og/<slug>-og.jpg
 *   (progressive JPEG, quality 82 — the format every social crawler,
 *   including WhatsApp's unfurler, reliably decodes)
 *
 * The generated files are committed, referenced from
 * data/project-content/projects.ts (`ogImage`), and verified by
 * `npm run audit:project-assets`.
 *
 * Requirements: `sharp` is already present in `node_modules` after
 * `npm install`/`npm ci` (Next.js ships it for the image optimizer), so no
 * extra dependency is needed:
 *
 *   node scripts/make-project-og-images.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PROJECTS_FILE = join(ROOT, "data", "project-content", "projects.ts");
const OUT_DIR = join(ROOT, "public", "images", "projects", "og");

const { default: sharp } = await import("sharp");

const source = readFileSync(PROJECTS_FILE, "utf8");

/**
 * Extract `slug` + hero `image.src` pairs from the published entries.
 * The file is a flat literal array, so a structural regex is reliable here;
 * `scripts/audit-project-assets.mjs` re-verifies the real data layer.
 */
const entries = [];
const pattern =
  /slug:\s*"([^"]+)"[\s\S]*?status:\s*"published"[\s\S]*?image:\s*\{\s*src:\s*"([^"]+)"/g;
let match;
while ((match = pattern.exec(source)) !== null) {
  entries.push({ slug: match[1], src: match[2] });
}

if (entries.length === 0) {
  console.error("No published projects found — check data/project-content/projects.ts");
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

for (const { slug, src } of entries) {
  const input = join(ROOT, "public", src.replace(/^\//, ""));
  const output = join(OUT_DIR, `${slug}-og.jpg`);

  const metadata = await sharp(input).metadata();
  const result = await sharp(input)
    .resize(1200, 630, {
      // "attention": crop the region libvips finds most visually salient.
      fit: "cover",
      position: sharp.strategy.attention,
      withoutEnlargement: false,
    })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(output);

  console.log(
    `${slug}: ${metadata.width}x${metadata.height} -> ${result.width}x${result.height} (${result.size} B)`,
  );
}

// A machine-readable sidecar so audit-project-assets.mjs can cross-check
// slugs without re-parsing TypeScript.
writeFileSync(
  join(OUT_DIR, "manifest.json"),
  JSON.stringify(
    entries.map(({ slug, src }) => ({ slug, hero: src, og: `/images/projects/og/${slug}-og.jpg` })),
    null,
    2,
  ) + "\n",
);
console.log(`\nWrote ${entries.length} OG crops + manifest.json to public/images/projects/og/`);
