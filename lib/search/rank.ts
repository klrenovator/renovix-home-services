/**
 * Smart Service Finder — ranker.
 *
 * Pure function: sorts and caps the candidate results so the page never
 * returns an overwhelming set. Deduplicates by URL, prioritizes service
 * surfaces over others, and surfaces related-services as a follow-on
 * view through the result card.
 *
 * Caps (per Master Plan §4):
 *   - services           3
 *   - sub-services       3
 *   - problems           3
 *   - areas              2
 *   - blog               1
 *   - project            1
 *   - total visible      8
 */

import type { SearchDocumentKind, SearchResult } from "@/data/search/types";

const CAPS: Record<SearchDocumentKind, number> = {
  service: 3,
  "sub-service": 3,
  problem: 3,
  area: 2,
  blog: 1,
  project: 1,
};

const TOTAL_CAP = 8;

export type RankedResults = {
  results: SearchResult[];
  /** Total number of documents considered (before capping). */
  totalCandidates: number;
  /** True when the input was over the cap and we trimmed. */
  truncated: boolean;
};

/** Sort by score DESC, then by document weight, then by slug ASC. */
function sortResults(a: SearchResult, b: SearchResult): number {
  if (b.score !== a.score) return b.score - a.score;
  if (b.document.weight !== a.document.weight) return b.document.weight - a.document.weight;
  return a.document.slug.localeCompare(b.document.slug);
}

export function rankResults(input: SearchResult[]): RankedResults {
  const totalCandidates = input.length;

  // Deduplicate by URL — two registry entries can point at the same page
  // (e.g. a service and a sub-service whose pricing row also surfaces the
  // service). Keep the higher-scoring one.
  const deduped = new Map<string, SearchResult>();
  for (const result of input) {
    const existing = deduped.get(result.document.href);
    if (!existing || existing.score < result.score) {
      deduped.set(result.document.href, result);
    }
  }
  const sorted = Array.from(deduped.values()).sort(sortResults);

  // Apply per-kind caps.
  const counts: Record<SearchDocumentKind, number> = {
    service: 0,
    "sub-service": 0,
    problem: 0,
    area: 0,
    blog: 0,
    project: 0,
  };
  const capped: SearchResult[] = [];
  for (const result of sorted) {
    if (capped.length >= TOTAL_CAP) break;
    const kind = result.document.kind;
    if (counts[kind] >= CAPS[kind]) continue;
    counts[kind] += 1;
    capped.push(result);
  }

  return {
    results: capped,
    totalCandidates,
    truncated: totalCandidates > capped.length,
  };
}
