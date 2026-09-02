import type { LanguageCode } from "@/data/languages";

/**
 * Translation coverage for the deep content pages.
 *
 * English is the source language and is always complete, so only the languages
 * that still need a catalogue entry are listed here. A page whose translation
 * is not complete is *not generated* for that language — it is never rendered
 * with English copy underneath a `/ms/` or `/zh/` URL, and it is left out of
 * that language's sitemap and hreflang set.
 *
 * This module deliberately holds only slugs (no copy) so it is safe to import
 * from client components such as the language switcher.
 */
export type ContentKind = "service" | "problem" | "area" | "areaRegion" | "project";

/** Slugs whose translations are complete, per non-English language. */
export const translatedContent: Record<
  Exclude<LanguageCode, "en">,
  Record<ContentKind, string[]>
> = {
  ms: {
    service: [
      "tiling",
      "welding-metal-works",
      "electrical",
      "painting",
      "ceiling-partition",
      "general-renovation",
      "plumbing",
      "waterproofing",
      "flooring",
      "handyman",
    ],
    problem: [
      "broken-tile-repair",
      "cracked-tile-repair",
      "loose-tile-repair",
      "hollow-tile-problems",
      "uneven-tiles",
      "tile-grout-problems",
      "bathroom-tile-problems",
      "kitchen-tile-problems",
      "water-seepage-through-tiles",
      "power-tripping",
      "faulty-socket",
      "faulty-switch",
      "flickering-lights",
      "short-circuit",
      "old-house-wiring",
      "insufficient-power-points",
      "ceiling-fan-wiring-problems",
      "peeling-paint",
      "cracked-walls",
      "mouldy-walls",
      "faded-paint",
      "uneven-paint",
      "wall-surface-damage",
      "cracked-ceiling",
      "sagging-ceiling",
      "water-damaged-ceiling",
      "ceiling-stains",
      "old-plaster-ceiling",
      "water-leakage",
      "leaking-tap",
      "leaking-pipe",
      "blocked-drain",
      "toilet-problems",
      "low-water-pressure",
      "roof-leakage",
      "bathroom-leakage",
      "balcony-leakage",
      "wall-seepage",
      "damp-walls",
      "water-stains",
      "door-problems",
      "lock-problems",
      "curtain-installation",
      "tv-mounting",
      "shelf-installation",
      "minor-home-repairs",
    ],
    area: [
      "kuala-lumpur/cheras",
      "kuala-lumpur/setapak",
      "kuala-lumpur/wangsa-maju",
      "kuala-lumpur/ampang",
      "kuala-lumpur/kepong",
      "kuala-lumpur/segambut",
      "kuala-lumpur/sentul",
      "kuala-lumpur/mont-kiara",
      "kuala-lumpur/bangsar",
      "kuala-lumpur/bukit-jalil",
      "kuala-lumpur/sri-petaling",
      "kuala-lumpur/old-klang-road",
      "kuala-lumpur/taman-melawati",
      "kuala-lumpur/desa-parkcity",
      "selangor/petaling-jaya",
      "selangor/subang-jaya",
      "selangor/shah-alam",
      "selangor/puchong",
      "selangor/klang",
      "selangor/selayang",
      "selangor/gombak",
      "selangor/ampang-jaya",
      "selangor/kajang",
      "selangor/seri-kembangan",
      "selangor/cyberjaya",
      "selangor/putrajaya",
      "selangor/kota-damansara",
      "selangor/sungai-buloh",
      "selangor/rawang",
      "selangor/semenyih",
      "selangor/usj",
    ],
    areaRegion: ["kuala-lumpur", "selangor"],
    project: [
      "marble-look-floor-tiling",
      "floor-tile-removal-hacking",
      "plaster-ceiling-cove-lighting",
      "plaster-ceiling-design-downlights",
      "plaster-ceiling-pendant-lighting",
      "timber-look-ceiling-beams",
      "suspended-ceiling-grid",
      "ceiling-fan-and-light-installation",
      "chandelier-and-ceiling-fan-installation",
      "high-ceiling-light-installation",
      "electrical-distribution-board-wiring",
      "electrical-db-panel-installation",
      "electrical-cable-wiring-installation",
      "wall-switch-installation",
      "outdoor-switch-socket-wiring",
      "toilet-and-basin-installation",
      "structural-metal-welding-fabrication",
      "pipe-and-valve-welding-works",
      "on-site-metal-frame-welding",
      "metal-awning-frame-installation",
      "office-renovation-ceiling-and-tiling",
    ],
  },
  zh: {
    service: [
      "tiling",
      "welding-metal-works",
      "electrical",
      "painting",
      "ceiling-partition",
      "general-renovation",
      "plumbing",
      "waterproofing",
      "flooring",
      "handyman",
    ],
    problem: [
      "broken-tile-repair",
      "cracked-tile-repair",
      "loose-tile-repair",
      "hollow-tile-problems",
      "uneven-tiles",
      "tile-grout-problems",
      "bathroom-tile-problems",
      "kitchen-tile-problems",
      "water-seepage-through-tiles",
      "power-tripping",
      "faulty-socket",
      "faulty-switch",
      "flickering-lights",
      "short-circuit",
      "old-house-wiring",
      "insufficient-power-points",
      "ceiling-fan-wiring-problems",
      "peeling-paint",
      "cracked-walls",
      "mouldy-walls",
      "faded-paint",
      "uneven-paint",
      "wall-surface-damage",
      "cracked-ceiling",
      "sagging-ceiling",
      "water-damaged-ceiling",
      "ceiling-stains",
      "old-plaster-ceiling",
      "water-leakage",
      "leaking-tap",
      "leaking-pipe",
      "blocked-drain",
      "toilet-problems",
      "low-water-pressure",
      "roof-leakage",
      "bathroom-leakage",
      "balcony-leakage",
      "wall-seepage",
      "damp-walls",
      "water-stains",
      "door-problems",
      "lock-problems",
      "curtain-installation",
      "tv-mounting",
      "shelf-installation",
      "minor-home-repairs",
    ],
    area: [
      "kuala-lumpur/cheras",
      "kuala-lumpur/setapak",
      "kuala-lumpur/wangsa-maju",
      "kuala-lumpur/ampang",
      "kuala-lumpur/kepong",
      "kuala-lumpur/segambut",
      "kuala-lumpur/sentul",
      "kuala-lumpur/mont-kiara",
      "kuala-lumpur/bangsar",
      "kuala-lumpur/bukit-jalil",
      "kuala-lumpur/sri-petaling",
      "kuala-lumpur/old-klang-road",
      "kuala-lumpur/taman-melawati",
      "kuala-lumpur/desa-parkcity",
      "selangor/petaling-jaya",
      "selangor/subang-jaya",
      "selangor/shah-alam",
      "selangor/puchong",
      "selangor/klang",
      "selangor/selayang",
      "selangor/gombak",
      "selangor/ampang-jaya",
      "selangor/kajang",
      "selangor/seri-kembangan",
      "selangor/cyberjaya",
      "selangor/putrajaya",
      "selangor/kota-damansara",
      "selangor/sungai-buloh",
      "selangor/rawang",
      "selangor/semenyih",
      "selangor/usj",
    ],
    areaRegion: ["kuala-lumpur", "selangor"],
    project: [
      "marble-look-floor-tiling",
      "floor-tile-removal-hacking",
      "plaster-ceiling-cove-lighting",
      "plaster-ceiling-design-downlights",
      "plaster-ceiling-pendant-lighting",
      "timber-look-ceiling-beams",
      "suspended-ceiling-grid",
      "ceiling-fan-and-light-installation",
      "chandelier-and-ceiling-fan-installation",
      "high-ceiling-light-installation",
      "electrical-distribution-board-wiring",
      "electrical-db-panel-installation",
      "electrical-cable-wiring-installation",
      "wall-switch-installation",
      "outdoor-switch-socket-wiring",
      "toilet-and-basin-installation",
      "structural-metal-welding-fabrication",
      "pipe-and-valve-welding-works",
      "on-site-metal-frame-welding",
      "metal-awning-frame-installation",
      "office-renovation-ceiling-and-tiling",
    ],
  },
};

/** True when `id` has a complete translation in `lang`. */
export function hasTranslation(
  kind: ContentKind,
  id: string,
  lang: LanguageCode | string,
): boolean {
  if (lang === "en") {
    return true;
  }

  if (lang !== "ms" && lang !== "zh") {
    return false;
  }

  return translatedContent[lang][kind].includes(id);
}

/**
 * Language codes that have a complete translation of this page, in site order.
 * Used for `hreflang` alternates and the language switcher.
 */
export function languagesWithTranslation(
  kind: ContentKind,
  id: string,
): LanguageCode[] {
  return (["en", "ms", "zh"] as LanguageCode[]).filter((lang) =>
    hasTranslation(kind, id, lang),
  );
}

/**
 * Path suffixes (without the language prefix) that are missing in a language.
 * The switcher uses this to avoid pointing at a route that would 404.
 */
export function missingPathsForLanguage(lang: LanguageCode | string): string[] {
  if (lang === "en") {
    return [];
  }

  if (lang !== "ms" && lang !== "zh") {
    return [];
  }

  const coverage = translatedContent[lang];
  const missing: string[] = [];

  for (const service of ALL_SERVICES) {
    if (!coverage.service.includes(service)) {
      missing.push(`/services/${service}`);
    }
  }

  for (const problem of ALL_PROBLEMS) {
    if (!coverage.problem.includes(problem)) {
      missing.push(`/problems/${problem}`);
    }
  }

  for (const area of ALL_AREAS) {
    if (!coverage.area.includes(area)) {
      missing.push(`/areas/${area}`);
    }
  }

  for (const project of ALL_PROJECTS) {
    if (!coverage.project.includes(project)) {
      missing.push(`/projects/${project}`);
    }
  }

  for (const region of ALL_AREA_REGIONS) {
    if (!coverage.areaRegion.includes(region)) {
      missing.push(`/areas/${region}`);
    }
  }

  return missing;
}

/* -------------------------------------------------------------------------- */
/* Slug inventories — mirrored from the content registries and asserted at     */
/* build time by `i18n/verify.ts` so the lists cannot drift.                   */
/* -------------------------------------------------------------------------- */

export const ALL_SERVICES = [
  "tiling",
  "welding-metal-works",
  "electrical",
  "painting",
  "ceiling-partition",
  "general-renovation",
  "plumbing",
  "waterproofing",
  "flooring",
  "handyman",
] as const;

export const ALL_AREA_REGIONS = ["kuala-lumpur", "selangor"] as const;

export const ALL_PROJECTS = [
  "marble-look-floor-tiling",
  "floor-tile-removal-hacking",
  "plaster-ceiling-cove-lighting",
  "plaster-ceiling-design-downlights",
  "plaster-ceiling-pendant-lighting",
  "timber-look-ceiling-beams",
  "suspended-ceiling-grid",
  "ceiling-fan-and-light-installation",
  "chandelier-and-ceiling-fan-installation",
  "high-ceiling-light-installation",
  "electrical-distribution-board-wiring",
  "electrical-db-panel-installation",
  "electrical-cable-wiring-installation",
  "wall-switch-installation",
  "outdoor-switch-socket-wiring",
  "toilet-and-basin-installation",
  "structural-metal-welding-fabrication",
  "pipe-and-valve-welding-works",
  "on-site-metal-frame-welding",
  "metal-awning-frame-installation",
  "office-renovation-ceiling-and-tiling",
] as const;

export const ALL_PROBLEMS = [
  "broken-tile-repair",
  "cracked-tile-repair",
  "loose-tile-repair",
  "hollow-tile-problems",
  "uneven-tiles",
  "tile-grout-problems",
  "bathroom-tile-problems",
  "kitchen-tile-problems",
  "water-seepage-through-tiles",
  "power-tripping",
  "faulty-socket",
  "faulty-switch",
  "flickering-lights",
  "short-circuit",
  "old-house-wiring",
  "insufficient-power-points",
  "ceiling-fan-wiring-problems",
  "peeling-paint",
  "cracked-walls",
  "mouldy-walls",
  "faded-paint",
  "uneven-paint",
  "wall-surface-damage",
  "cracked-ceiling",
  "sagging-ceiling",
  "water-damaged-ceiling",
  "ceiling-stains",
  "old-plaster-ceiling",
  "water-leakage",
  "leaking-tap",
  "leaking-pipe",
  "blocked-drain",
  "toilet-problems",
  "low-water-pressure",
  "roof-leakage",
  "bathroom-leakage",
  "balcony-leakage",
  "wall-seepage",
  "damp-walls",
  "water-stains",
  "door-problems",
  "lock-problems",
  "curtain-installation",
  "tv-mounting",
  "shelf-installation",
  "minor-home-repairs",
] as const;

export const ALL_AREAS = [
  "kuala-lumpur/cheras",
  "kuala-lumpur/setapak",
  "kuala-lumpur/wangsa-maju",
  "kuala-lumpur/ampang",
  "kuala-lumpur/kepong",
  "kuala-lumpur/segambut",
  "kuala-lumpur/sentul",
  "kuala-lumpur/mont-kiara",
  "kuala-lumpur/bangsar",
  "kuala-lumpur/bukit-jalil",
  "kuala-lumpur/sri-petaling",
  "kuala-lumpur/old-klang-road",
  "kuala-lumpur/taman-melawati",
  "kuala-lumpur/desa-parkcity",
  "selangor/petaling-jaya",
  "selangor/subang-jaya",
  "selangor/shah-alam",
  "selangor/puchong",
  "selangor/klang",
  "selangor/selayang",
  "selangor/gombak",
  "selangor/ampang-jaya",
  "selangor/kajang",
  "selangor/seri-kembangan",
  "selangor/cyberjaya",
  "selangor/putrajaya",
  "selangor/kota-damansara",
  "selangor/sungai-buloh",
  "selangor/rawang",
  "selangor/semenyih",
  "selangor/usj",
] as const;
