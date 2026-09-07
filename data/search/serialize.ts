/**
 * Smart Service Finder — client-side JSON mirror.
 *
 * `data/search/index.ts` holds the full `SearchDocument` objects used by
 * the server-side matcher. The client (the home / header typeahead) only
 * needs a much smaller projection:
 *
 *   - `id`           stable identifier
 *   - `kind`         which surface
 *   - `title`        localized headline
 *   - `summary`      one-line summary
 *   - `category`     sub-label
 *   - `href`         the URL
 *   - `pricingLine`  the localized "Starting from RM…" sub-line
 *
 * This keeps the wire payload small (one tiny JSON per language) and
 * avoids shipping the full search terms to the browser.
 *
 * The mirror is computed at build time, not at request time, and the
 * payload is committed under `public/search/{lang}.json` for the static
 * `next start` server. (See `scripts/build-search-mirror.mjs` — wired
 * into `npm run build` once a future phase lands.)
 */

import type { SearchDocument, SearchIndex } from "./types";
import type { LanguageCode } from "@/data/languages";
import { buildSearchIndex } from "./build-index";
import { getDocumentPricingLine } from "./build-index";

/** The minimum projection shipped to the client. */
export type SearchMirrorEntry = {
  id: string;
  kind: SearchDocument["kind"];
  title: string;
  summary: string;
  category?: string;
  href: string;
  pricingLine?: string;
};

export type SearchMirror = {
  lang: LanguageCode;
  builtAt: string;
  entries: SearchMirrorEntry[];
};

/** Convert one `SearchDocument` to a `SearchMirrorEntry`. */
function toMirrorEntry(document: SearchDocument, lang: LanguageCode): SearchMirrorEntry {
  const entry: SearchMirrorEntry = {
    id: document.id,
    kind: document.kind,
    title: document.title,
    summary: document.summary,
    href: document.href,
  };
  if (document.category) entry.category = document.category;
  const pricingLine = getDocumentPricingLine(document, lang);
  if (pricingLine) entry.pricingLine = pricingLine;
  return entry;
}

/** Build the full search mirror for one language. */
export function buildSearchMirror(lang: LanguageCode): SearchMirror {
  const index: SearchIndex = buildSearchIndex(lang);
  return {
    lang,
    builtAt: index.builtAt,
    entries: index.documents.map((doc) => toMirrorEntry(doc, lang)),
  };
}
