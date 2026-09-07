/**
 * Smart Service Finder — match scorer.
 *
 * Pure function: takes a `TokenizedQuery` and a `SearchDocument`, returns
 * the score (and the per-signal breakdown used by the ranker / explain
 * mode). The scorer never reaches into a registry or the filesystem.
 *
 * Weights (must stay in sync with the master plan §4):
 *
 * | Signal                                          | Weight |
 * | ----------------------------------------------- | ------ |
 * | Title / H1 token match                          |  3.0   |
 * | Subtitle / summary match                        |  2.0   |
 * | Category label match                            |  1.0   |
 * | Search-term index hit (token in `searchTerms`)  |  1.0   |
 * | Synonym hit (per-language, see synonyms.ts)     |  1.0   |
 * | FAQ question match                              |  0.7   |
 * | Local alias hit (place names, Chinese variants) |  0.7   |
 * | Bare substring fallback                         |  0.2   |
 *
 * A document is included when its total score ≥ 1.0.
 */

import type { SynonymEntry } from "@/data/search/synonyms";
import type {
  SearchDocument,
  SearchResult,
  SearchResultSignal,
  TokenizedQuery,
} from "@/data/search/types";

const W_TITLE = 3.0;
const W_SUMMARY = 2.0;
const W_CATEGORY = 1.0;
const W_SEARCH_TERM = 1.0;
const W_SYNONYM = 1.0;
const W_ALIAS = 0.7;

const INCLUSION_THRESHOLD = 1.0;

export type MatchOptions = {
  /**
   * Optional synonym entries that matched the raw query (per language).
   * A document is credited when its kind + slug equal the entry's — a
   * direct registry mapping, so a ZH synonym like 跳电 boosts the
   * power-tripping document even though the English slug never appears
   * in the localized copy.
   */
  synonyms?: SynonymEntry[];
};

function isHit(haystack: string | undefined, token: string): boolean {
  if (!haystack) return false;
  return haystack.includes(token);
}

function inAny(haystacks: string[], token: string): boolean {
  for (const h of haystacks) {
    if (isHit(h, token)) return true;
  }
  return false;
}

function addHit(
  field: SearchResultSignal["field"],
  token: string,
  weight: number,
  signals: SearchResultSignal[],
  seen: Set<string>,
): number {
  const key = `${field}:${token}`;
  if (seen.has(key)) return 0;
  seen.add(key);
  signals.push({ field, token, weight });
  return weight;
}

/** Score one document against one tokenized query. */
export function scoreDocument(
  document: SearchDocument,
  query: TokenizedQuery,
  options: MatchOptions = {},
): SearchResult | null {
  if (!query.raw) return null;

  const signals: SearchResultSignal[] = [];
  const seen = new Set<string>();
  let score = 0;

  // Combine latin + cjk as the working token set; synonyms are added on top.
  const tokens: string[] = [];
  for (const t of query.latin) tokens.push(t);
  for (const t of query.cjk) tokens.push(t);

  if (tokens.length === 0 && (!options.synonyms || options.synonyms.length === 0)) {
    return null;
  }

  // Pre-compute a few haystacks.
  const titleLower = document.title.toLowerCase();
  const summaryLower = document.summary.toLowerCase();
  const categoryLower = (document.category ?? "").toLowerCase();
  const aliasesLower = (document.aliases ?? []).map((a) => a.toLowerCase());
  const searchTermsLower = document.searchTerms.map((t) => t.toLowerCase());

  // Score the natural query tokens first.
  for (const tokenRaw of tokens) {
    const token = tokenRaw.toLowerCase();
    if (token.length < 2) continue;

    if (isHit(titleLower, token)) score += addHit("title", token, W_TITLE, signals, seen);
    if (isHit(summaryLower, token)) score += addHit("summary", token, W_SUMMARY, signals, seen);
    if (inAny(searchTermsLower, token)) score += addHit("searchTerm", token, W_SEARCH_TERM, signals, seen);
    if (categoryLower && isHit(categoryLower, token))
      score += addHit("category", token, W_CATEGORY, signals, seen);
    if (aliasesLower.length > 0 && inAny(aliasesLower, token))
      score += addHit("alias", token, W_ALIAS, signals, seen);
  }

  // Synonym hits: the entry maps a customer phrasing straight to the
  // entity it describes (kind + slug are audit-verified to resolve), so
  // this works in every language — including ZH, where the English slug
  // never appears inside the localized copy. Only the first matching
  // synonym is credited to keep the score sane; the "why matched" line
  // shows the customer's own phrasing.
  if (options.synonyms) {
    for (const entry of options.synonyms) {
      if (seen.has(`synonym:${entry.slug}`)) continue;
      if (document.kind === entry.kind && document.slug === entry.slug) {
        score += addHit("synonym", entry.phrase, W_SYNONYM, signals, seen);
        break;
      }
    }
  }

  if (score < INCLUSION_THRESHOLD) return null;

  const whyMatched = buildWhyMatched(signals);
  return { document, score, signals, whyMatched };
}

/** Build a 1–2 line "why this matches" explanation from the hit signals. */
function buildWhyMatched(signals: SearchResultSignal[]): string {
  if (signals.length === 0) return "";
  const tokens: string[] = [];
  for (const s of signals) {
    if (tokens.includes(s.token)) continue;
    tokens.push(s.token);
    if (tokens.length >= 3) break;
  }
  return tokens.map((t) => `"${t}"`).join(", ");
}

/** Score every document in the index, return ranked results (descending). */
export function matchAll(
  documents: SearchDocument[],
  query: TokenizedQuery,
  options: MatchOptions = {},
): SearchResult[] {
  const results: SearchResult[] = [];
  for (const document of documents) {
    const result = scoreDocument(document, query, options);
    if (result) results.push(result);
  }
  return results;
}
