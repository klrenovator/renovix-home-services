#!/usr/bin/env node
/**
 * Open Graph card font audit for Renovix Home Services.
 *
 * The OG image route (`app/[lang]/opengraph-image.tsx`) renders the social
 * card from repository fonts so that no Google Fonts request happens at
 * build or render time (the offline-build "Failed to load dynamic font"
 * failure mode). The Noto Sans SC subsets committed under `app/fonts/` only
 * contain the characters they were generated with, so this audit proves that
 * every character the card can currently render — the `meta` strings it
 * displays plus the service-name line, in all three languages — is actually
 * present in the committed font files.
 *
 * Run with: npm run audit:og-fonts
 *
 * If it fails after a copy edit, regenerate the subsets:
 * see scripts/make-og-fonts.py (requires Python fonttools and the
 * `noto-sans-sc` npm package).
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const FONTS_DIR = join(ROOT, "app", "fonts");

const FONT_FILES = [
  "plus-jakarta-sans-latin-400-og.ttf",
  "plus-jakarta-sans-latin-700-og.ttf",
  "plus-jakarta-sans-latin-800-og.ttf",
  "noto-sans-sc-og-400.ttf",
  "noto-sans-sc-og-700.ttf",
];

/* ------------------------------------------------------------------------ */
/* Minimal TrueType cmap reader (formats 0, 4, 6 and 12 — enough for the     */
/* Google Fonts and fontTools-produced files used here). Returns the set of  */
/* covered Unicode codepoints.                                               */
/* ------------------------------------------------------------------------ */

function readCmap(buffer) {
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);

  function u16(offset) {
    return view.getUint16(offset, false);
  }
  function u32(offset) {
    return view.getUint32(offset, false);
  }

  // 1. Locate the `cmap` table through the outer table directory. Other
  //    entries (a stale DSIG record left by the woff2 conversion can point
  //    past EOF) are skipped.
  const numTables = u16(4);
  let cmapStart = -1;
  for (let index = 0; index < numTables; index += 1) {
    const entry = 12 + index * 16;
    const tag = String.fromCharCode(
      view.getUint8(entry),
      view.getUint8(entry + 1),
      view.getUint8(entry + 2),
      view.getUint8(entry + 3),
    );
    if (tag === "cmap") {
      cmapStart = u32(entry + 8);
      break;
    }
  }
  if (cmapStart === -1) {
    throw new Error("No cmap table found");
  }

  // 2. Pick the richest Unicode subtable. (3, 10) format 12 and (3, 1)
  //    format 4 are the Unicode Windows tables; (0, x) is the Unicode
  //    platform. Subtable offsets are relative to the cmap table start.
  const subtableCount = u16(cmapStart + 2);
  let bestOffset = -1;
  let bestScore = 0;
  for (let index = 0; index < subtableCount; index += 1) {
    const record = cmapStart + 4 + index * 8;
    const offset = cmapStart + u32(record + 4);
    const format = u16(offset);
    const score =
      format === 12 ? 3 : format === 4 ? 2 : format === 6 || format === 0 ? 1 : 0;
    if (score > bestScore) {
      bestOffset = offset;
      bestScore = score;
    }
  }
  if (bestOffset === -1) {
    throw new Error("No supported cmap subtable found");
  }

  const codepoints = new Set();
  const format = u16(bestOffset);

  if (format === 4) {
    const segCount = u16(bestOffset + 6) / 2;
    const endOffset = bestOffset + 14;
    const startOffset = endOffset + segCount * 2 + 2;
    for (let segment = 0; segment < segCount; segment += 1) {
      const start = u16(startOffset + segment * 2);
      const end = u16(endOffset + segment * 2);
      for (let cp = start; cp <= end && cp !== 0xffff; cp += 1) {
        codepoints.add(cp);
      }
    }
  } else if (format === 12) {
    const groups = u32(bestOffset + 12);
    for (let group = 0; group < groups; group += 1) {
      const entry = bestOffset + 16 + group * 12;
      const start = u32(entry);
      const end = u32(entry + 4);
      for (let cp = start; cp <= end; cp += 1) {
        codepoints.add(cp);
      }
    }
  } else if (format === 6) {
    const first = u16(bestOffset + 6);
    const count = u16(bestOffset + 8);
    for (let index = 0; index < count; index += 1) {
      codepoints.add(first + index);
    }
  } else if (format === 0) {
    for (let index = 0; index < 256; index += 1) {
      codepoints.add(index);
    }
  } else {
    throw new Error(`Unsupported cmap subtable format ${format}`);
  }

  return codepoints;
}

/* ------------------------------------------------------------------------ */
/* The strings the card renders, extracted from the live sources.            */
/* ------------------------------------------------------------------------ */

function read(path) {
  return readFileSync(join(ROOT, path), "utf8");
}

function quotedValues(source) {
  const values = [];
  const pattern = /"((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    values.push(JSON.parse(`"${match[1]}"`));
  }
  return values;
}

/** `name:` values — used for the service-name line and catalogue names. */
function nameValues(source) {
  const values = [];
  const pattern = /\bname:\s*"((?:[^"\\]|\\.)*)"/g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    values.push(JSON.parse(`"${match[1]}"`));
  }
  return values;
}

function cardStrings() {
  const strings = new Set();

  for (const lang of ["en", "ms", "zh"]) {
    const source = read(`i18n/${lang}.ts`);
    const block = source.match(/meta:\s*\{(.*?)\n  \},/s);
    if (!block) {
      throw new Error(`Could not locate the meta block of i18n/${lang}.ts`);
    }
    for (const value of quotedValues(block[1])) {
      strings.add(value);
      strings.add(value.toUpperCase()); // the brand row renders uppercased
    }
  }

  // English service names come from data/services.ts; Malay and Chinese from
  // data/i18n/lists.ts. Both files' `name:` values are a superset of what the
  // card renders, which keeps the audit strict.
  for (const file of ["data/services.ts", "data/i18n/lists.ts"]) {
    for (const value of nameValues(read(file))) {
      strings.add(value);
    }
  }

  // The service line joins names with this separator.
  strings.add(" · ");

  return strings;
}

/* ------------------------------------------------------------------------ */
/* Audit.                                                                    */
/* ------------------------------------------------------------------------ */

function main() {
  const strings = cardStrings();
  const needed = new Set();
  for (const value of strings) {
    for (const char of value) {
      needed.add(char);
    }
  }

  const coverage = new Set();
  for (const file of FONT_FILES) {
    const buffer = readFileSync(join(FONTS_DIR, file));
    for (const cp of readCmap(buffer)) {
      coverage.add(cp);
    }
  }

  const missing = [...needed].filter((char) => !coverage.has(char.codePointAt(0)));

  console.log(
    `OG card strings: ${strings.size} (${needed.size} unique characters); ` +
      `font coverage: ${coverage.size} codepoints across ${FONT_FILES.length} files.`,
  );

  if (missing.length > 0) {
    console.error(
      "\nFAIL — characters rendered by the OG card are missing from the committed fonts:",
    );
    console.error(`  ${missing.join(" ")}`);
    console.error(
      "\nRegenerate them with scripts/make-og-fonts.py (see its docstring), then re-run this audit.",
    );
    process.exit(1);
  }

  console.log("PASS — every character the OG card renders is covered by the committed fonts.");
}

main();
