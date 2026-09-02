import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { languages } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";
import { getDictionary } from "@/i18n";

export const alt = "Renovix Home Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Without this the route is the site's only on-demand render: every social
 * crawler request would re-rasterize the card. Enumerating the languages
 * prerenders the three PNGs at build time, so the whole site is static.
 */
export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

/**
 * Self-contained card fonts, loaded from the repository at build time.
 *
 * `next/og` bundles only Geist Regular (Latin). The Chinese card previously
 * relied on satori's fallback, which *downloads* Noto Sans SC from Google
 * Fonts while rendering — a build-time network dependency that fails (and
 * drops the glyphs) in offline environments. These files make every language
 * render fully offline, and put the card in the site's brand face with true
 * 400/700/800 weights:
 *
 * - Plus Jakarta Sans (OFL) — the `next/font/local` brand font, converted to
 *   TTF because satori's opentype.js cannot read woff2.
 * - Noto Sans SC (OFL) — subsetted to the characters the card can render,
 *   regenerated with `scripts/make-og-fonts.py`; coverage is guarded by
 *   `npm run audit:og-fonts`.
 *
 * Noto Sans SC has no 800, so the 700 subset is registered under 800 as well
 * — CJK is conventionally paired one weight lighter than Latin.
 */
function loadCardFonts() {
  const fontsDir = join(process.cwd(), "app", "fonts");

  const pjs = (weight: 400 | 700 | 800) =>
    readFileSync(
      join(fontsDir, `plus-jakarta-sans-latin-${weight}-og.ttf`),
    );

  const noto400 = readFileSync(join(fontsDir, "noto-sans-sc-og-400.ttf"));
  const noto700 = readFileSync(join(fontsDir, "noto-sans-sc-og-700.ttf"));

  return [
    { name: "Plus Jakarta Sans", data: pjs(400), weight: 400 as const, style: "normal" as const },
    { name: "Plus Jakarta Sans", data: pjs(700), weight: 700 as const, style: "normal" as const },
    { name: "Plus Jakarta Sans", data: pjs(800), weight: 800 as const, style: "normal" as const },
    { name: "Noto Sans SC", data: noto400, weight: 400 as const, style: "normal" as const },
    { name: "Noto Sans SC", data: noto700, weight: 700 as const, style: "normal" as const },
    { name: "Noto Sans SC", data: noto700, weight: 800 as const, style: "normal" as const },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const serviceLine = getServiceCategories(lang)
    .map((service) => service.name)
    .join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#0B1F33",
          color: "#FFFFFF",
          // Latin glyphs resolve to Plus Jakarta Sans; Chinese glyphs fall
          // back per character to the Noto Sans SC subset (satori picks the
          // first font in the stack that contains the glyph).
          fontFamily: "Plus Jakarta Sans, Noto Sans SC",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#F4B942",
          }}
        >
          {t.meta.siteName.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            maxWidth: "900px",
            fontSize: "56px",
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          {t.meta.brandTagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "28px",
            color: "#B8C7D6",
          }}
        >
          {serviceLine}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: "34px",
            padding: "12px 24px",
            borderRadius: "12px",
            backgroundColor: "#F4B942",
            fontSize: "24px",
            fontWeight: 700,
            color: "#0B1F33",
          }}
        >
          {t.meta.ogBadge}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: loadCardFonts(),
    },
  );
}
