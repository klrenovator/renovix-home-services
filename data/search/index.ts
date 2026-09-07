/**
 * Smart Service Finder — public surface.
 *
 * The renderer / matcher imports from here. `data/search/build-index.ts`
 * is the engine; this file is the door.
 */

import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import { buildSearchIndex, getDocumentPricingLine } from "./build-index";
import type { SearchIndex, SearchDocument } from "./types";

/** In-memory cache so the build does not re-walk the registries per call. */
const cache = new Map<LanguageCode, SearchIndex>();

/** Build (or return the cached) search index for one language. */
export function getSearchIndex(lang: LanguageCode | string): SearchIndex {
  const code = getLanguageCode(lang);
  const cached = cache.get(code);
  if (cached) return cached;

  const index = buildSearchIndex(code);
  cache.set(code, index);
  return index;
}

/** Find a single document by id. */
export function getSearchDocument(
  id: string,
  lang: LanguageCode | string,
): SearchDocument | undefined {
  return getSearchIndex(lang).documents.find((doc) => doc.id === id);
}

/** Find a single document by kind + slug (e.g. for cross-references). */
export function findSearchDocument(
  kind: SearchDocument["kind"],
  slug: string,
  lang: LanguageCode | string,
): SearchDocument | undefined {
  return getSearchIndex(lang).documents.find(
    (doc) => doc.kind === kind && (doc.slug === slug || doc.slug.endsWith(`/${slug}`)),
  );
}

export { getDocumentPricingLine };

export * from "./types";
