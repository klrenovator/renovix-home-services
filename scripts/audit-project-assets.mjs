#!/usr/bin/env node
/**
 * Project image asset audit for Renovix Home Services.
 *
 * Verifies the portfolio's image layer against the files actually on disk:
 *
 *  1. Every image referenced by a *published* project — hero, OG crop,
 *     gallery, before/after — exists under `public/`.
 *  2. The declared intrinsic dimensions match the real file (so `next/image`
 *     reserves the correct box and the page never shifts).
 *  3. Every published project's `ogImage` is exactly 1200×630 (the 1.91:1
 *     Open Graph / Twitter Card frame).
 *  4. No unknown files lurk in `public/images/projects/` (nothing stock or
 *     unaccounted can slip in unnoticed).
 *  5. The generation manifest under `public/images/projects/og/` still lists
 *     exactly the published projects.
 *
 * Run with: npm run audit:project-assets
 *
 * Dimensions are read with a tiny built-in WebP/JPEG header parser — no
 * dependencies, so this runs anywhere Node runs.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");
const PROJECTS_FILE = join(ROOT, "data", "project-content", "projects.ts");
const PROJECT_IMAGES_DIR = join(PUBLIC_DIR, "images", "projects");

/* ------------------------------------------------------------------------ */
/* Image header parsing                                                      */
/* ------------------------------------------------------------------------ */

function webpDimensions(buffer) {
  if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF"
      || buffer.toString("ascii", 8, 12) !== "WEBP") {
    throw new Error("not a WebP file");
  }
  const chunk = buffer.toString("ascii", 12, 16);
  if (chunk === "VP8X") {
    // Extended format: 24-bit canvas size minus one, little-endian.
    const width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16));
    const height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16));
    return { width, height };
  }
  if (chunk === "VP8 ") {
    // Lossy: after the 20-byte chunk header, the frame tag is 3 bytes and
    // the start code 3 bytes; width/height are 14-bit little-endian.
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return { width, height };
  }
  if (chunk === "VP8L") {
    // Lossless: 1-byte signature, then 14-bit width-1 and height-1.
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }
  throw new Error(`unsupported WebP chunk ${chunk}`);
}

function jpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    throw new Error("not a JPEG file");
  }
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    // SOF0..SOF15 except DHT (0xc4), JPG (0xc8) and DAC (0xcc).
    const isSOF =
      marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isSOF) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd7) || marker === 0x01) {
      offset += 2; // standalone markers carry no length
    } else {
      offset += 2 + length;
    }
  }
  throw new Error("no SOF marker found");
}

function imageDimensions(path) {
  const buffer = readFileSync(path);
  if (path.endsWith(".webp")) return webpDimensions(buffer);
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return jpegDimensions(buffer);
  throw new Error(`unsupported image format: ${path}`);
}

/* ------------------------------------------------------------------------ */
/* Portfolio data extraction (flat literal array → structural regex)        */
/* ------------------------------------------------------------------------ */

function parseProjects() {
  const source = readFileSync(PROJECTS_FILE, "utf8");
  const entries = [];
  const pattern =
    /slug:\s*"([^"]+)"[\s\S]*?status:\s*"([^"]+)"([\s\S]*?)(?=\n  \{\n|\n\];)/g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    const [, slug, status, body] = match;
    const images = [];

    const hero = body.match(/image:\s*\{\s*src:\s*"([^"]+)",\s*width:\s*(\d+),\s*height:\s*(\d+),\s*\}/);
    if (hero) {
      images.push({ kind: "hero", src: hero[1], width: +hero[2], height: +hero[3] });
    }

    const og = body.match(/ogImage:\s*\{\s*src:\s*"([^"]+)",\s*width:\s*(\d+),\s*height:\s*(\d+),\s*\}/);
    if (og) {
      images.push({ kind: "ogImage", src: og[1], width: +og[2], height: +og[3] });
    }

    const galleryPattern = /src:\s*"([^"]+)",\s*width:\s*(\d+),\s*height:\s*(\d+)/g;
    let galleryMatch;
    while ((galleryMatch = galleryPattern.exec(body)) !== null) {
      // Hero/OG already captured above with the same `src:` shape.
      if (images.some((image) => image.src === galleryMatch[1])) continue;
      images.push({
        kind: "gallery/before-after",
        src: galleryMatch[1],
        width: +galleryMatch[2],
        height: +galleryMatch[3],
      });
    }

    entries.push({ slug, status, images });
  }
  return entries;
}

/* ------------------------------------------------------------------------ */
/* Audit                                                                     */
/* ------------------------------------------------------------------------ */

function listFiles(dir, prefix = "") {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...listFiles(full, `${prefix}${entry}/`));
    } else {
      out.push(`${prefix}${entry}`);
    }
  }
  return out;
}

function main() {
  const problems = [];
  const projects = parseProjects();
  const published = projects.filter((project) => project.status === "published");

  const referenced = new Set();

  for (const project of published) {
    for (const image of project.images) {
      const path = join(PUBLIC_DIR, image.src.replace(/^\//, ""));
      referenced.add(image.src.replace(/^\//, ""));

      let exists = true;
      try {
        statSync(path);
      } catch {
        exists = false;
      }
      if (!exists) {
        problems.push(`${project.slug} ${image.kind}: missing file ${image.src}`);
        continue;
      }

      let actual;
      try {
        actual = imageDimensions(path);
      } catch (error) {
        problems.push(`${project.slug} ${image.kind}: ${image.src} — ${error.message}`);
        continue;
      }

      if (actual.width !== image.width || actual.height !== image.height) {
        problems.push(
          `${project.slug} ${image.kind}: ${image.src} declares ${image.width}×${image.height} ` +
            `but the file is ${actual.width}×${actual.height}`,
        );
      }

      if (image.kind === "ogImage" && (image.width !== 1200 || image.height !== 630)) {
        problems.push(
          `${project.slug} ogImage: ${image.width}×${image.height} is not the 1200×630 (1.91:1) social frame`,
        );
      }
    }
  }

  // Unknown files in the project image directories.
  const onDisk = listFiles(PROJECT_IMAGES_DIR);
  for (const file of onDisk) {
    if (!referenced.has(`images/projects/${file}`) && file !== "og/manifest.json") {
      problems.push(`unreferenced file in public/images/projects: ${file}`);
    }
  }

  // The OG generation manifest must list exactly the published projects.
  try {
    const manifest = JSON.parse(
      readFileSync(join(PROJECT_IMAGES_DIR, "og", "manifest.json"), "utf8"),
    );
    const manifestSlugs = manifest.map((entry) => entry.slug).sort();
    const publishedSlugs = published.map((project) => project.slug).sort();
    if (JSON.stringify(manifestSlugs) !== JSON.stringify(publishedSlugs)) {
      problems.push(
        "public/images/projects/og/manifest.json does not match the published projects — " +
          "rerun scripts/make-project-og-images.mjs",
      );
    }
    for (const entry of manifest) {
      referenced.add(`images/projects/og/${entry.slug}-og.jpg`);
    }
  } catch (error) {
    problems.push(`cannot read og/manifest.json: ${error.message}`);
  }

  const imageCount = published.reduce(
    (total, project) => total + project.images.length,
    0,
  );

  console.log(
    `Published projects: ${published.length}; referenced images: ${imageCount}; ` +
      `files on disk: ${onDisk.length}.`,
  );

  if (problems.length > 0) {
    console.error(`\nFAIL — ${problems.length} problem(s):`);
    for (const problem of problems) {
      console.error(`  - ${problem}`);
    }
    process.exit(1);
  }

  console.log("PASS — all project images exist, match their declared dimensions, and nothing unreferenced is published.");
}

main();
