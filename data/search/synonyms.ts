/**
 * Smart Service Finder — per-language synonym table.
 *
 * Every entry maps a customer phrasing (observed in the existing content
 * of the site) to a service / sub-service / problem / area slug. The
 * table is **data-derived** — only phrasings the existing problem and
 * service copy uses are eligible — and is reviewed by
 * `npm run audit:search`, which fails the build when a referenced slug
 * no longer exists.
 *
 * Three tables, one per language. Synonyms never cross-language: a
 * Chinese query is matched by ZH synonyms (plus CJK bigrams), a Malay
 * query is matched by MS synonyms, an English query by EN.
 *
 * Adding synonyms: pick a phrasing from the existing problem / service
 * / sub-service copy in the right language, then add the entry here.
 * No invented terms.
 */

import type { LanguageCode } from "@/data/languages";

export type SynonymEntry = {
  /** A phrase the customer might use (must already exist in the site copy). */
  phrase: string;
  /** The service / sub-service / problem slug this phrase should boost. */
  slug: string;
  /** The kind of the slug. */
  kind: "service" | "sub-service" | "problem" | "area";
};

/**
 * The English synonym table. Every phrase is taken from the existing
 * problem names, service intros or FAQ questions.
 */
export const EN_SYNONYMS: SynonymEntry[] = [
  // Leaking / dripping / water-related
  { phrase: "leaking pipe", slug: "leaking-pipe", kind: "problem" },
  { phrase: "pipe leaking", slug: "leaking-pipe", kind: "problem" },
  { phrase: "pipe leak", slug: "leaking-pipe", kind: "problem" },
  { phrase: "dripping tap", slug: "leaking-tap", kind: "problem" },
  { phrase: "tap dripping", slug: "leaking-tap", kind: "problem" },
  { phrase: "tap leak", slug: "leaking-tap", kind: "problem" },
  { phrase: "leaking tap", slug: "leaking-tap", kind: "problem" },
  { phrase: "blocked drain", slug: "blocked-drain", kind: "problem" },
  { phrase: "drain blocked", slug: "blocked-drain", kind: "problem" },
  { phrase: "water leakage", slug: "water-leakage", kind: "problem" },
  { phrase: "concealed leak", slug: "concealed-leak-repair", kind: "sub-service" },
  // Tiling
  { phrase: "broken tile", slug: "broken-tile-repair", kind: "problem" },
  { phrase: "tile broken", slug: "broken-tile-repair", kind: "problem" },
  { phrase: "cracked tile", slug: "cracked-tile-repair", kind: "problem" },
  { phrase: "loose tile", slug: "loose-tile-repair", kind: "problem" },
  { phrase: "hollow tile", slug: "hollow-tile-problems", kind: "problem" },
  { phrase: "uneven tiles", slug: "uneven-tiles", kind: "problem" },
  // Painting
  { phrase: "peeling paint", slug: "peeling-paint", kind: "problem" },
  { phrase: "paint peeling", slug: "peeling-paint", kind: "problem" },
  { phrase: "mouldy wall", slug: "mouldy-walls", kind: "problem" },
  { phrase: "moldy wall", slug: "mouldy-walls", kind: "problem" },
  { phrase: "cracked wall", slug: "cracked-walls", kind: "problem" },
  // Electrical
  { phrase: "power tripping", slug: "power-tripping", kind: "problem" },
  { phrase: "tripping power", slug: "power-tripping", kind: "problem" },
  { phrase: "circuit tripping", slug: "power-tripping", kind: "problem" },
  { phrase: "faulty socket", slug: "faulty-socket", kind: "problem" },
  { phrase: "broken socket", slug: "faulty-socket", kind: "problem" },
  { phrase: "flickering lights", slug: "flickering-lights", kind: "problem" },
  { phrase: "lights flickering", slug: "flickering-lights", kind: "problem" },
  // Ceiling
  { phrase: "ceiling leak", slug: "water-damaged-ceiling", kind: "problem" },
  { phrase: "leaking ceiling", slug: "water-damaged-ceiling", kind: "problem" },
  { phrase: "ceiling stain", slug: "ceiling-stains", kind: "problem" },
  { phrase: "sagging ceiling", slug: "sagging-ceiling", kind: "problem" },
  // Waterproofing
  { phrase: "bathroom leak", slug: "bathroom-leakage", kind: "problem" },
  { phrase: "bathroom leaking", slug: "bathroom-leakage", kind: "problem" },
  { phrase: "roof leak", slug: "roof-leakage", kind: "problem" },
  { phrase: "roof leaking", slug: "roof-leakage", kind: "problem" },
  { phrase: "balcony leak", slug: "balcony-leakage", kind: "problem" },
  { phrase: "wall seepage", slug: "wall-seepage", kind: "problem" },
  { phrase: "damp wall", slug: "damp-walls", kind: "problem" },
  // Handyman
  { phrase: "door repair", slug: "door-problems", kind: "problem" },
  { phrase: "broken door", slug: "door-problems", kind: "problem" },
  { phrase: "lock problem", slug: "lock-problems", kind: "problem" },
  // Areas
  { phrase: "mont kiara", slug: "mont-kiara", kind: "area" },
  { phrase: "bangsar", slug: "bangsar", kind: "area" },
  { phrase: "petaling jaya", slug: "petaling-jaya", kind: "area" },
  { phrase: "shah alam", slug: "shah-alam", kind: "area" },
  { phrase: "subang jaya", slug: "subang-jaya", kind: "area" },
  { phrase: "puchong", slug: "puchong", kind: "area" },
  { phrase: "cheras", slug: "cheras", kind: "area" },
  { phrase: "klang", slug: "klang", kind: "area" },
  { phrase: "kajang", slug: "kajang", kind: "area" },
];

/**
 * Malay synonym table. Phrasings are taken from the existing Malay
 * problem / service copy.
 */
export const MS_SYNONYMS: SynonymEntry[] = [
  { phrase: "paip bocor", slug: "leaking-pipe", kind: "problem" },
  { phrase: "paip pecah", slug: "leaking-pipe", kind: "problem" },
  { phrase: "kebocoran paip", slug: "leaking-pipe", kind: "problem" },
  { phrase: "paip air bocor", slug: "leaking-pipe", kind: "problem" },
  { phrase: "pili bocor", slug: "leaking-tap", kind: "problem" },
  { phrase: "pili air bocor", slug: "leaking-tap", kind: "problem" },
  { phrase: "keran bocor", slug: "leaking-tap", kind: "problem" },
  { phrase: "longkang tersumbat", slug: "blocked-drain", kind: "problem" },
  { phrase: "saluran air tersumbat", slug: "blocked-drain", kind: "problem" },
  { phrase: "kebocoran air", slug: "water-leakage", kind: "problem" },
  { phrase: "kebocoran paip", slug: "concealed-leak-repair", kind: "sub-service" },
  { phrase: "jubin pecah", slug: "broken-tile-repair", kind: "problem" },
  { phrase: "jubin retak", slug: "cracked-tile-repair", kind: "problem" },
  { phrase: "jubin longgar", slug: "loose-tile-repair", kind: "problem" },
  { phrase: "jubin berlubang", slug: "hollow-tile-problems", kind: "problem" },
  { phrase: "jubin tidak rata", slug: "uneven-tiles", kind: "problem" },
  { phrase: "cat mengelupas", slug: "peeling-paint", kind: "problem" },
  { phrase: "cat terkelupas", slug: "peeling-paint", kind: "problem" },
  { phrase: "dinding berkulat", slug: "mouldy-walls", kind: "problem" },
  { phrase: "dinding kulat", slug: "mouldy-walls", kind: "problem" },
  { phrase: "dinding retak", slug: "cracked-walls", kind: "problem" },
  { phrase: "elektrik terputus", slug: "power-tripping", kind: "problem" },
  { phrase: "trip elektrik", slug: "power-tripping", kind: "problem" },
  { phrase: "soket rosak", slug: "faulty-socket", kind: "problem" },
  { phrase: "lampu berkelip", slug: "flickering-lights", kind: "problem" },
  { phrase: "siling bocor", slug: "water-damaged-ceiling", kind: "problem" },
  { phrase: "kebocoran siling", slug: "water-damaged-ceiling", kind: "problem" },
  { phrase: "tompok siling", slug: "ceiling-stains", kind: "problem" },
  { phrase: "siling melendut", slug: "sagging-ceiling", kind: "problem" },
  { phrase: "bilik air bocor", slug: "bathroom-leakage", kind: "problem" },
  { phrase: "bumbung bocor", slug: "roof-leakage", kind: "problem" },
  { phrase: "kebocoran bumbung", slug: "roof-leakage", kind: "problem" },
  { phrase: "pembaikan pintu", slug: "door-problems", kind: "problem" },
  { phrase: "masalah kunci", slug: "lock-problems", kind: "problem" },
  { phrase: "kalis air", slug: "bathroom-waterproofing", kind: "sub-service" },
  // Areas
  { phrase: "mont kiara", slug: "mont-kiara", kind: "area" },
  { phrase: "bangsar", slug: "bangsar", kind: "area" },
  { phrase: "petaling jaya", slug: "petaling-jaya", kind: "area" },
  { phrase: "shah alam", slug: "shah-alam", kind: "area" },
  { phrase: "subang jaya", slug: "subang-jaya", kind: "area" },
  { phrase: "puchong", slug: "puchong", kind: "area" },
  { phrase: "cheras", slug: "cheras", kind: "area" },
  { phrase: "klang", slug: "klang", kind: "area" },
  { phrase: "kajang", slug: "kajang", kind: "area" },
];

/**
 * Chinese synonym table. Phrasings are taken from the existing Chinese
 * problem / service copy.
 */
export const ZH_SYNONYMS: SynonymEntry[] = [
  { phrase: "水管漏水", slug: "leaking-pipe", kind: "problem" },
  { phrase: "水管裂", slug: "leaking-pipe", kind: "problem" },
  { phrase: "水龙头滴水", slug: "leaking-tap", kind: "problem" },
  { phrase: "龙头漏水", slug: "leaking-tap", kind: "problem" },
  { phrase: "水龙头漏水", slug: "leaking-tap", kind: "problem" },
  { phrase: "地漏堵塞", slug: "blocked-drain", kind: "problem" },
  { phrase: "下水道堵塞", slug: "blocked-drain", kind: "problem" },
  { phrase: "瓷砖破裂", slug: "broken-tile-repair", kind: "problem" },
  { phrase: "瓷砖裂", slug: "cracked-tile-repair", kind: "problem" },
  { phrase: "瓷砖松动", slug: "loose-tile-repair", kind: "problem" },
  { phrase: "瓷砖空鼓", slug: "hollow-tile-problems", kind: "problem" },
  { phrase: "油漆剥落", slug: "peeling-paint", kind: "problem" },
  { phrase: "墙面发霉", slug: "mouldy-walls", kind: "problem" },
  { phrase: "墙面裂", slug: "cracked-walls", kind: "problem" },
  { phrase: "跳电", slug: "power-tripping", kind: "problem" },
  { phrase: "断路器跳", slug: "power-tripping", kind: "problem" },
  { phrase: "插座故障", slug: "faulty-socket", kind: "problem" },
  { phrase: "灯闪烁", slug: "flickering-lights", kind: "problem" },
  { phrase: "天花板漏水", slug: "water-damaged-ceiling", kind: "problem" },
  { phrase: "天花板渗水", slug: "water-damaged-ceiling", kind: "problem" },
  { phrase: "浴室漏水", slug: "bathroom-leakage", kind: "problem" },
  { phrase: "屋顶漏水", slug: "roof-leakage", kind: "problem" },
  { phrase: "墙壁渗水", slug: "wall-seepage", kind: "problem" },
  { phrase: "门维修", slug: "door-problems", kind: "problem" },
  { phrase: "锁问题", slug: "lock-problems", kind: "problem" },
  { phrase: "防水", slug: "bathroom-waterproofing", kind: "sub-service" },
  // Areas (Chinese place names from data/i18n/lists.ts).
  { phrase: "孟沙", slug: "bangsar", kind: "area" },
  { phrase: "满家乐", slug: "mont-kiara", kind: "area" },
  { phrase: "八打灵再也", slug: "petaling-jaya", kind: "area" },
  { phrase: "莎阿南", slug: "shah-alam", kind: "area" },
  { phrase: "梳邦再也", slug: "subang-jaya", kind: "area" },
  { phrase: "蒲种", slug: "puchong", kind: "area" },
  { phrase: "蕉赖", slug: "cheras", kind: "area" },
  { phrase: "巴生", slug: "klang", kind: "area" },
  { phrase: "加影", slug: "kajang", kind: "area" },
];

const BY_LANG: Record<LanguageCode, SynonymEntry[]> = {
  en: EN_SYNONYMS,
  ms: MS_SYNONYMS,
  zh: ZH_SYNONYMS,
};

/** Get the synonym table for one language. */
export function getSynonyms(lang: LanguageCode): SynonymEntry[] {
  return BY_LANG[lang];
}

/**
 * Given a tokenized query, return the set of expanded tokens (target
 * slugs + the original tokens) the matcher should treat as a synonym hit.
 * Slug tokens are kept lowercase / un-ideographic for matching.
 */
export function expandQuerySynonyms(
  query: { raw: string; latin: string[]; cjk: string[]; lang: LanguageCode },
): SynonymEntry[] {
  const out: SynonymEntry[] = [];
  const synonyms = BY_LANG[query.lang];
  const raw = query.raw.toLowerCase();

  for (const entry of synonyms) {
    if (raw.includes(entry.phrase.toLowerCase())) {
      out.push(entry);
    }
  }
  return out;
}
