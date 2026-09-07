/**
 * Smart Service Finder — regression fixtures (Master Plan §12).
 *
 * Each entry pairs a realistic customer query (in one of the three
 * published languages) with the result the matcher must surface in its
 * top 3 cards. Every expectation below was captured empirically from the
 * live production build on 2026-09-07 — nothing here is invented; it is
 * what the registries + matcher actually return.
 *
 * `auditQueryFixtures()` in `data/search/audit-data.ts` replays every
 * fixture through the real pipeline (tokenize → synonym expansion →
 * match → rank) at build time and fails the build when the expected
 * entity drops out of the top 3 (or when an empty-result fixture starts
 * returning results). Update this file only when the content registries
 * legitimately change ranking.
 */

import type { LanguageCode } from "@/data/languages";

export type SearchQueryFixture = {
  /** The page language the query is evaluated in. */
  lang: LanguageCode;
  /** The customer query (as typed, including case where relevant). */
  query: string;
  /**
   * A href that must appear among the first 3 ranked result cards
   * (e.g. `/en/problems/leaking-pipe/`). Omit for queries that must
   * return zero results.
   */
  expectedTopHref?: string;
};

export const SEARCH_QUERY_FIXTURES: SearchQueryFixture[] = [
  // --- English -----------------------------------------------------------
  { lang: "en", query: "leaking pipe", expectedTopHref: "/en/problems/leaking-pipe/" },
  { lang: "en", query: "broken tile", expectedTopHref: "/en/problems/broken-tile-repair/" },
  { lang: "en", query: "power tripping", expectedTopHref: "/en/problems/power-tripping/" },
  { lang: "en", query: "ceiling leak", expectedTopHref: "/en/blog/ceiling-stain-vs-active-leak/" },
  { lang: "en", query: "painting cost", expectedTopHref: "/en/blog/house-painting-cost-by-property-type/" },
  { lang: "en", query: "bathroom waterproofing", expectedTopHref: "/en/services/waterproofing/bathroom-waterproofing/" },
  { lang: "en", query: "door repair", expectedTopHref: "/en/services/handyman/door-repair/" },
  { lang: "en", query: "Mont Kiara", expectedTopHref: "/en/areas/kuala-lumpur/mont-kiara/" },
  { lang: "en", query: "floor tile installation", expectedTopHref: "/en/services/tiling/floor-tile-installation/" },
  { lang: "en", query: "kitchen cabinet", expectedTopHref: "/en/services/general-renovation/kitchen-renovation/" },
  { lang: "en", query: "repaint exterior", expectedTopHref: "/en/services/painting/exterior-painting/" },
  { lang: "en", query: "zzzzz" },

  // --- Bahasa Melayu -----------------------------------------------------
  { lang: "ms", query: "paip bocor", expectedTopHref: "/ms/problems/leaking-pipe/" },
  { lang: "ms", query: "jubin pecah", expectedTopHref: "/ms/problems/broken-tile-repair/" },
  { lang: "ms", query: "elektrik terputus", expectedTopHref: "/ms/services/electrical/" },
  { lang: "ms", query: "siling bocor", expectedTopHref: "/ms/blog/ceiling-stain-vs-active-leak/" },
  { lang: "ms", query: "kos mengecat", expectedTopHref: "/ms/services/painting/" },
  { lang: "ms", query: "kalis air bilik air", expectedTopHref: "/ms/services/waterproofing/bathroom-waterproofing/" },
  { lang: "ms", query: "Mont Kiara", expectedTopHref: "/ms/areas/kuala-lumpur/mont-kiara/" },
  { lang: "ms", query: "pembaikan pintu", expectedTopHref: "/ms/services/handyman/door-repair/" },
  { lang: "ms", query: "pemasangan jubin lantai", expectedTopHref: "/ms/services/tiling/floor-tile-installation/" },
  { lang: "ms", query: "kabinet dapur", expectedTopHref: "/ms/services/general-renovation/kitchen-renovation/" },
  { lang: "ms", query: "zzzzz" },

  // --- 简体中文 -----------------------------------------------------------
  { lang: "zh", query: "漏水", expectedTopHref: "/zh/services/plumbing/pipe-leak-repair/" },
  { lang: "zh", query: "瓷砖破裂", expectedTopHref: "/zh/problems/cracked-tile-repair/" },
  { lang: "zh", query: "跳电", expectedTopHref: "/zh/problems/power-tripping/" },
  { lang: "zh", query: "天花板漏水", expectedTopHref: "/zh/services/ceiling-partition/" },
  { lang: "zh", query: "油漆价格", expectedTopHref: "/zh/blog/house-painting-cost-by-property-type/" },
  { lang: "zh", query: "浴室防水", expectedTopHref: "/zh/services/waterproofing/bathroom-waterproofing/" },
  { lang: "zh", query: "满家乐", expectedTopHref: "/zh/areas/kuala-lumpur/mont-kiara/" },
  { lang: "zh", query: "门维修", expectedTopHref: "/zh/services/handyman/door-repair/" },
  { lang: "zh", query: "地砖安装", expectedTopHref: "/zh/services/tiling/floor-tile-installation/" },
  { lang: "zh", query: "橱柜", expectedTopHref: "/zh/services/general-renovation/kitchen-renovation/" },
  { lang: "zh", query: "zzzzz" },
];
