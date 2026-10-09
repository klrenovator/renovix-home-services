import type { LanguageCode } from "@/data/languages";

/**
 * Authored natural search phrasings — the one hand-written input to the
 * keyword research database (`data/keywords/index.ts` composes every row
 * from these plus the site's verified registries).
 *
 * Provenance of the phrasings:
 *
 *  - **en** — the master brief's own core-keyword research examples
 *    (Section 4A: "renovation contractor Kuala Lumpur", "tile repair Kuala
 *    Lumpur", "electrician Kuala Lumpur", "house painting Selangor",
 *    "plaster ceiling contractor Kuala Lumpur", "flooring contractor
 *    Selangor", "waterproofing contractor Kuala Lumpur", "handyman services
 *    Selangor", "plumbing services Selangor") and the natural service nouns
 *    for the remaining categories ("plumber", "metal gate welding").
 *  - **ms** — the master brief's Bahasa Malaysia research examples (Section 5:
 *    "kontraktor renovasi rumah", "servis paip" / "tukang paip", "baiki
 *    jubin", "servis mengecat rumah", "pemasangan siling plaster", "servis
 *    wiring elektrik", "baiki lantai", "servis waterproofing", "tukang
 *    rumah") plus the natural welding phrase "kimpalan pagar".
 *  - **zh** — natural short search forms consistent with the localized service
 *    names in `data/i18n/lists.ts` (瓷砖维修, 铁门焊接, 电工服务, 油漆粉刷,
 *    天花板工程, 装修承包商, 水管维修, 防水工程, 地板工程, 家居维修).
 *
 * These are *research hypotheses*, not measured data: every row composed from
 * them carries `searchVolume: null` and `researchStatus: "derived"` until a
 * real source (Search Console, autocomplete, People Also Ask, Trends) is
 * recorded. `npm run audit:keywords` fails if a phrasing is missing for any
 * service or language, and `npm run build` fails if the table drifts from the
 * service registry.
 *
 * To change a phrasing: edit it here, then re-run `npm run audit:keywords`
 * and `npm run build`. Never add a phrasing you have not seen a real customer
 * or a real research source use.
 */
export const coreServicePhrases: Record<LanguageCode, Record<string, string>> = {
  en: {
    tiling: "tile repair",
    "welding-metal-works": "metal gate welding",
    electrical: "electrician",
    painting: "house painting",
    "ceiling-partition": "plaster ceiling contractor",
    "general-renovation": "renovation contractor",
    plumbing: "plumber",
    waterproofing: "waterproofing contractor",
    flooring: "flooring contractor",
    handyman: "handyman services",
  },
  ms: {
    tiling: "baiki jubin",
    "welding-metal-works": "kimpalan pagar",
    electrical: "servis wiring elektrik",
    painting: "servis mengecat rumah",
    "ceiling-partition": "pemasangan siling plaster",
    "general-renovation": "kontraktor renovasi rumah",
    plumbing: "tukang paip",
    waterproofing: "servis waterproofing",
    flooring: "baiki lantai",
    handyman: "tukang rumah",
  },
  zh: {
    tiling: "瓷砖维修",
    "welding-metal-works": "铁门焊接",
    electrical: "电工服务",
    painting: "油漆粉刷",
    "ceiling-partition": "天花板工程",
    "general-renovation": "装修承包商",
    plumbing: "水管维修",
    waterproofing: "防水工程",
    flooring: "地板工程",
    handyman: "家居维修",
  },
};
