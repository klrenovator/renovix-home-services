#!/usr/bin/env python3
"""
Phase 13 tool — regenerates the self-contained Open Graph card fonts.

Artifacts (committed to the repository):

  app/fonts/plus-jakarta-sans-latin-{400,700,800}-og.ttf
      Plus Jakarta Sans (the site's brand face, OFL) converted from the
      `next/font/local` woff2 files to TTF, because satori's bundled
      opentype.js cannot read woff2.
  app/fonts/noto-sans-sc-og-{400,700}.ttf
      Noto Sans SC (OFL, via the `noto-sans-sc` npm package — the Google
      Fonts split-woff2 build) subsetted to the characters the OG card can
      render, including every Latin/CJK punctuation mark those strings use.

Why: `next/og` bundles only Geist Regular (Latin). For the /zh/ OG card the
Chinese glyphs are missing, so satori falls back to downloading Noto Sans SC
from fonts.googleapis.com at build/render time — the "Failed to load dynamic
font" warning in offline builds, and a nondeterministic network dependency
in online ones. With these fonts committed and passed to `ImageResponse`,
every language's card renders fully offline from repository assets, in the
site's brand face with true 400/700/800 weights.

The Noto subsets are intentionally over-provisioned (whole `meta` blocks of
the dictionaries plus every localized catalogue *name* in `data/i18n/lists.ts`
— services, regions, areas, project categories) so routine copy edits cannot
drop a glyph. `npm run audit:og-fonts` verifies coverage against the live
sources and fails loudly if a new character appears.

Regenerating (requires Python with fonttools + brotli, and the
`noto-sans-sc` npm package — `npm i noto-sans-sc` in a scratch directory):

  python3 scripts/make-og-fonts.py \
    --noto /path/to/scratch/node_modules/noto-sans-sc \
    --repo .

Usage of the fonts: app/[lang]/opengraph-image.tsx loads them and passes

  fontFamily: "Plus Jakarta Sans, Noto Sans SC"

so Latin text renders in Plus Jakarta Sans and the Chinese text falls back
per glyph to Noto Sans SC (satori resolves the first font that contains the
glyph). Weight 800 has no Noto equivalent, so the 700 subset is registered
under 800 as well — the usual convention of pairing CJK one weight lighter.
"""

import argparse
import os
import re
import sys
import tempfile

from fontTools import subset
from fontTools.merge import Merger
from fontTools.ttLib import TTFont, woff2

# --------------------------------------------------------------------------
# 1. Character set
# --------------------------------------------------------------------------

# Full printable ASCII — every English/Malay string, digits included.
ASCII = "".join(chr(c) for c in range(0x20, 0x7F))
# Latin/CJK punctuation that the meta strings and catalogue names use, plus
# neighbours, so small copy edits cannot drop a glyph.
PUNCT = (
    "·–—‘’“”…、。，：；！？（）《》【】「」％°&/\\@#*+=<>[]{}|~^_$"
    "\u00A0\u00A9\u00B0\u00B7\u2013\u2014\u2018\u2019\u201C\u201D\u2022\u2026"
)


def file_text(path):
    with open(path, encoding="utf-8") as handle:
        return handle.read()


def quoted_strings(source):
    return re.findall(r'"((?:[^"\\]|\\.)*)"', source)


def build_charset(repo):
    chars = set(ASCII) | set(PUNCT)

    # The whole `meta` block of every dictionary — the OG card renders
    # siteName, brandTagline, ogBadge and the service-name line; the other
    # meta strings are headroom for future card copy.
    for lang in ("en", "ms", "zh"):
        source = file_text(f"{repo}/i18n/{lang}.ts")
        block = re.search(r"meta:\s*\{(.*?)\n  \},", source, re.S)
        for value in quoted_strings(block.group(1)):
            chars.update(value)

    # Localized catalogue *names* (services, regions, areas, project and
    # problem categories): every quoted string in lists.ts that contains CJK
    # and is short — names and labels, not the long descriptions.
    lists = file_text(f"{repo}/data/i18n/lists.ts")
    for value in quoted_strings(lists):
        if len(value) <= 14 and re.search(r"[\u3000-\u9fff\uff00-\uffef]", value):
            chars.update(value)

    # The card renders siteName.toUpperCase() for the brand row.
    chars.update("".join(c for c in chars if c.isalpha()).upper())
    return chars


# --------------------------------------------------------------------------
# 2. Noto Sans SC subset for one weight
# --------------------------------------------------------------------------


def parse_chunks(weight_dir):
    """Map chunk filename -> list of (start, end) codepoint ranges."""
    css = file_text(f"{weight_dir}/css.css")
    chunks = {}
    for block in re.finditer(
        r"src: url\(([^)]+\.woff2)\)[^}]*unicode-range: ([^;]+);", css
    ):
        spans = []
        for item in block.group(2).split(","):
            item = item.strip().replace("U+", "")
            start, _, end = item.partition("-")
            spans.append((int(start, 16), int(end or start, 16)))
        chunks[block.group(1)] = spans
    return chunks


def noto_subset(weight_dir, chars, out_path):
    chunks = parse_chunks(weight_dir)
    needed = set()
    for char in chars:
        cp = ord(char)
        for fname, spans in chunks.items():
            if any(start <= cp <= end for start, end in spans):
                needed.add(fname)
                break
    print(f"  Noto chunks needed: {len(needed)}")

    with tempfile.TemporaryDirectory(prefix="noto-chunks-") as tmp:
        paths = []
        for fname in sorted(needed):
            ttf = os.path.join(tmp, fname + ".ttf")
            woff2.decompress(os.path.join(weight_dir, fname), ttf)
            paths.append(ttf)

        # The chunks cover disjoint unicode ranges, so a plain merge is safe.
        merged = Merger().merge(paths) if len(paths) > 1 else TTFont(paths[0])

        options = subset.Options()
        options.name_IDs = ["*"]
        options.name_languages = ["*"]
        options.recalc_bounds = True
        options.drop_tables += ["FFTM"]
        sub = subset.Subsetter(options=options)
        sub.populate(text="".join(sorted(chars)))
        sub.subset(merged)
        merged.save(out_path)


def pjs_ttf(repo, weight, out_path):
    src = f"{repo}/app/fonts/plus-jakarta-sans-latin-{weight}-normal.woff2"
    woff2.decompress(src, out_path)


# --------------------------------------------------------------------------
# 3. Driver
# --------------------------------------------------------------------------


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--noto", required=True,
                        help="node_modules/noto-sans-sc from a scratch install")
    parser.add_argument("--repo", default=".",
                        help="repository root (default: cwd)")
    args = parser.parse_args()

    chars = build_charset(args.repo)
    cjk = [c for c in chars if ord(c) > 0x7F]
    print(f"Charset: {len(chars)} unique characters ({len(cjk)} beyond ASCII)")

    outputs = [
        (f"{args.repo}/app/fonts/plus-jakarta-sans-latin-400-og.ttf", "pjs", 400),
        (f"{args.repo}/app/fonts/plus-jakarta-sans-latin-700-og.ttf", "pjs", 700),
        (f"{args.repo}/app/fonts/plus-jakarta-sans-latin-800-og.ttf", "pjs", 800),
        (f"{args.repo}/app/fonts/noto-sans-sc-og-400.ttf", "noto", "regular"),
        (f"{args.repo}/app/fonts/noto-sans-sc-og-700.ttf", "noto", "bold"),
    ]

    for out, kind, weight in outputs:
        print(f"Building {os.path.basename(out)} …")
        if kind == "pjs":
            pjs_ttf(args.repo, weight, out)
        else:
            noto_subset(
                f"{args.noto}/noto_sans_sc_{weight}", chars, out
            )

    # Verify: every charset codepoint must exist in each font that needs it.
    failures = []
    for out, kind, weight in outputs:
        if kind == "pjs":
            continue  # Latin-only font; CJK is covered by the Noto subsets
        cmap = TTFont(out).getBestCmap()
        gaps = sorted(c for c in chars if ord(c) > 0x7F and ord(c) not in cmap)
        latin_cmap = {
            cp
            for w in (400, 700, 800)
            for cp in TTFont(
                f"{args.repo}/app/fonts/plus-jakarta-sans-latin-{w}-og.ttf"
            ).getBestCmap()
        }
        latin_gaps = sorted(c for c in chars if ord(c) <= 0x7F and ord(c) not in latin_cmap)
        if gaps or latin_gaps:
            failures.append((os.path.basename(out), gaps, latin_gaps))

    if failures:
        for name, gaps, latin_gaps in failures:
            if gaps:
                print(f"!! {name} missing {len(gaps)} CJK glyphs: {''.join(gaps[:40])}")
            if latin_gaps:
                print(f"!! Plus Jakarta Sans missing Latin glyphs: {''.join(latin_gaps[:40])}")
        sys.exit(1)

    print("Coverage verified: every charset character is present.")


if __name__ == "__main__":
    main()
