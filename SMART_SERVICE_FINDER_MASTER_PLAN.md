# Renovix Home Services — Smart Service Finder Master Plan

**Project:** Smart Service Finder (intelligent, multilingual customer search)
**Site:** renovixhomeservices.my · KL & Selangor · Klang Valley
**Status at start:** Phase 26 final audit complete. 665 static pages prerendered,
3 languages (EN / MS / ZH), 10 service pillars, 51 sub-service pages, 57 problem
guides, 53 area guides, 21 published projects, 12 guides, 51 priced rows, 24
intent-matrix entries, 17 audit scripts. No `SearchAction` in the WebSite schema
today — the site has no search feature by design.
**This document is the master plan and the source of truth for the project.**
**Day-to-day progress lives in `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md`.**

---

## 0. Why this project

The brief is to give customers a single, prominent search bar that lets them
type *almost any realistic home-services requirement* in plain language and
get back the most relevant, existing information on the website — services,
sub-services, problem guides, materials, pricing, related services, FAQs and
the right quotation / WhatsApp CTA. The result must work in **English, Bahasa
Melayu and Simplified Chinese** and must **never invent information**: every
field surfaced through search must come from the existing registries.

The site is uniquely well-positioned for this work. It already has the
**typed, multilingual data registries** a smart search needs:

- `data/services.ts` — 10 main services (name, slug, icon, short description)
- `data/service-content/` — full EN/MS/ZH content for every service
- `data/sub-services/` — 51 standalone sub-services with EN/MS/ZH copy and
  `pricingId` linkage to the central pricing registry
- `data/problem-content/` — 57 problem guides across 10 categories, with
  causes, warning signs, solutions, FAQs in EN/MS/ZH
- `data/pricing/pricing.ts` — single source of truth for **every RM figure**
  (51 rows, `isHeadline` flag, `lastReviewed`, scope, includes, factors)
- `data/pricing/translations/{ms,zh}.ts` — fully localized pricing copy
- `data/area-content/` — 53 local guides with EN/MS/ZH copy
- `data/locations/registry.ts` + `intent-matrix.ts` — district hierarchy +
  24 search-intent entries that already bind location + service + sub-service
  + `pricingId`
- `data/site-faqs.ts` — site-wide FAQs in EN/MS/ZH
- `data/blog/` — 12 guides in EN/MS/ZH

The job is therefore **to add the discovery layer** (an index, a matcher, a
ranker, a UI, multilingual affordances, helpful empty states) on top of this
data — *not* to rebuild any of the underlying content. Every page already
exists; the search just makes it findable.

---

## 1. Core principles (binding)

These rules govern every change in this project. They are **not negotiable**
and are encoded mechanically wherever possible.

1. **Never invent.** No new prices, materials, services, warranties,
   certifications, licences, claims, areas, or guarantees. The audit scripts
   `audit:business`, `audit:pricing`, `audit:locations`, `audit:authority`
   and the governance rules in `CONTENT_GOVERNANCE.md` already enforce this
   for the rest of the site; the search feature inherits them.
2. **Single source of truth.** Every price, every localized label, every
   sub-service reference must trace back to its registry. The search index
   reads the same getters the pages render from — it never copies data.
3. **Languages are equal.** EN, MS, ZH must each:
   - accept queries in that language
   - return results in that language
   - support mixed-language queries
   - have a localized UI (placeholder, button label, headings, empty state)
   - keep all four `hreflang` alternates correct
4. **One question per page.** Search results must not duplicate the answer
   the same page already gives in its own FAQ — the Phase 26 §5b regression
   guard (answer-first vs FAQ word overlap) extends to search snippets.
5. **No fake search infrastructure.** No third-party search vendor, no
   external API, no client-side fuzzy-search library that ships 50 KB+ JS.
   The matcher is a small, well-tested, dependency-free TypeScript module
   that runs at build time (index) and on the server (ranking), with a tiny
   client component for live typeahead.
6. **Mobile-first.** The search must be excellent on a 360px phone — large
   input, fast first paint, no horizontal overflow, no jank.
7. **Accessibility.** Real `<form>`, real `<label>`, keyboard navigation,
   visible focus, ARIA live region for results, reduced-motion respected,
   autocomplete hints.
8. **Performance budget.** Adds **at most ~10 KB gzip** of new client JS
   (the search UI). Index is generated at build time and held server-side.
9. **No breaking changes.** Existing routes, schema, sitemap, hreflang,
   analytics events and the Phase 22 quote flow are preserved.
10. **Permanent progress tracking.** Every meaningful task is marked `[x]`
    in `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md` after it is implemented
    and verified, with the files it touched and the next pending task.

---

## 2. Architecture overview

```
                        ┌──────────────────────────────────────────────┐
                        │  Existing typed registries (no new content)  │
                        ├──────────────────────────────────────────────┤
                        │ data/services.ts  data/service-content/      │
                        │ data/sub-services/ data/pricing/             │
                        │ data/problem-content/ data/area-content/     │
                        │ data/locations/  data/blog/  data/projects/  │
                        │ i18n/{en,ms,zh}.ts                            │
                        └──────────────────────────────────────────────┘
                                          │
                                          ▼
                        ┌──────────────────────────────────────────────┐
                        │  NEW: data/search/  (typed, build-time index)│
                        ├──────────────────────────────────────────────┤
                        │ SearchDocument (one per service / sub-       │
                        │  service / problem / area / project / blog)  │
                        │ - stable id, kind, lang, slug, path, href     │
                        │ - title, subtitle, summary                   │
                        │ - searchTerms: per-language tokens + aliases │
                        │ - pricing: id (or undefined) + summary line  │
                        │ - related: services / problems / locations   │
                        │ - faqCount, hasCalculator, cta               │
                        │ - rankingSignals: kind, freshness, etc.      │
                        └──────────────────────────────────────────────┘
                                          │
                                          ▼
                        ┌──────────────────────────────────────────────┐
                        │  NEW: lib/search/  (matcher + ranker +       │
                        │  results composer)                           │
                        ├──────────────────────────────────────────────┤
                        │ tokenize(query, lang)                        │
                        │ score(document, query, lang)                 │
                        │ match(intent → services)                     │
                        │ rank(matches, query)                         │
                        │ emptyState(query, lang)                      │
                        │ - dependency-free, no third-party libs       │
                        │ - bilingual tokenizer (CJK + Latin)           │
                        │ - synonyms per language (driven by registry) │
                        └──────────────────────────────────────────────┘
                                          │
                                          ▼
                        ┌──────────────────────────────────────────────┐
                        │  NEW: routes & UI                            │
                        ├──────────────────────────────────────────────┤
                        │ /{lang}/search/?q=…  (results page)          │
                        │ components/search/SmartSearchBar.tsx (client)│
                        │ components/search/SearchResults.tsx (server) │
                        │ components/search/ResultCard.tsx (server)    │
                        │ components/search/NoResultPanel.tsx (server) │
                        │ promoted on home + every pillar (search bar) │
                        └──────────────────────────────────────────────┘
```

### Data flow

1. **Build time** — a new `lib/search/build-index.ts` walks the existing
   registries and emits a typed `SearchIndex` object (one per language) plus
   a serialized JSON mirror under `data/search/index/{lang}.json` for the
   client-side live typeahead (small, < 60 KB per language gzipped).
2. **Server** — `/[lang]/search/page.tsx` reads the query from `searchParams`,
   runs the matcher on the server, and returns a fully composed results page
   (server component, no JS needed for the static result list).
3. **Client** — `SmartSearchBar` is a tiny client component (`"use client"`)
   that does three things only:
   - submits the form to `/[lang]/search/`
   - shows up to 5 live typeahead suggestions fetched from a small JSON
     mirror at `/[lang]/search-suggestions.json` (optional, generated at
     build time from the same index, ≤ 8 KB gzip per language)
   - announces status changes via `aria-live="polite"`
4. **Empty state** — when nothing matches, instead of a dead end the page
   surfaces: 3 popular services, "browse all services", "describe in more
   detail" (links to contact), the WhatsApp quick path.

### Why this design

- **No new third-party dep** (FlexSearch / Fuse / lunr all 5–30 KB gzip and
  untested against CJK; our tokenizer is ~80 lines and is multilingual by
  construction).
- **Index lives next to the data** — a registry change is reflected on the
  next `next build`, and `npm run audit:search` proves the index is in sync.
- **Server ranking** keeps the client bundle small and the results
  crawlable. The home/hero search bar still renders, submits and works
  without JS.
- **The search results page is a real, indexed URL** that search engines
  can crawl (`/en/search/?q=leaking+pipe`), supporting SEO without
  creating thin doorway pages (each result links to a real, content-rich
  page, and a `noindex` rule is applied to `?q=…` to prevent query-
  parameter explosion in the index).

---

## 3. Multilingual search

### What "3-language search" means in practice

1. **Indexing.** Every `SearchDocument` carries a `lang` field and a
   `searchTerms` array built **only from that language's copy**:
   - service `name`, `shortDescription`, `intro` paragraph 1
   - problem `name`, `h1`, `subtitle`, first sentence of `whatItMeans`
   - sub-service `name`, `h1`, `lead`
   - area `name`, `summary`, `intro` paragraph 1
   - localized `searchIntents` from the service content if present
   - registry aliases (`data/locations/registry.ts` `aliases` is already
     localized, and `data/i18n/lists.ts` carries Chinese place names)
2. **Tokenization.** The matcher splits the query on Unicode word
   boundaries and lowercases. CJK is split on a 1–2 character unigram +
   bigram pass so a Chinese search like "漏水" (leaking) matches
   "漏水维修" even when only the longer term is in the index.
3. **Synonyms.** Per language, the matcher applies a small synonym table
   (a *typed* data file under `data/search/synonyms.ts`) that maps
   common home-services terms to the canonical service slugs. Example
   (MS): `paip bocor`, `paip pecah`, `kebocoran paip` → `plumbing`.
   Example (ZH): `漏水`, `渗水`, `滴水` → `waterproofing` + `plumbing`.
   These are NOT invented — they are derived from the **existing
   copy** of every problem and service in the three languages, so the
   synonym table is data, not opinion.
4. **Mixed-language query.** When the tokenizer detects both Latin and
   CJK glyphs in a single query, the matcher runs **both** language
   passes and unions the result sets. The result is rendered in the
   page's current language (en/ms/zh), not in the query's language.
5. **No-result state.** Localized in all three languages; surfaces
   "popular services", "describe in more detail" and WhatsApp.

### Synonym-table policy

- Synonyms come from **observed customer phrasing in the existing
  content**, never from external glossaries.
- `npm run audit:search` enforces: every synonym entry references a
  real service slug or sub-service slug; a typo or stale entry fails
  the build.
- Owners may add new synonyms when a real customer phrasing is
  observed, but only by editing the typed table.

---

## 4. Match, rank and result shape

### Matching strategy (per language)

Each `SearchDocument` is scored against the tokenized query. The score
is a weighted sum of:

| Signal | Weight | Notes |
|---|---|---|
| Title / H1 token match | 3.0 | Strong intent match |
| Subtitle / summary match | 2.0 | |
| First sentence of "what it means" / lead / intro | 1.5 | |
| Service category label | 1.0 | |
| Synonym hit | 1.0 | Each synonym contributes 1.0 |
| FAQ question match (problem / service / sub-service / site) | 0.7 | |
| Local alias hit (place names, Chinese variants) | 0.7 | |
| Material / scope word match | 0.4 | |
| Bare substring match (non-token) | 0.2 | Low-signal fallback |

A document is included when its total score ≥ 1.0. A small
`--explain` mode (dev-only) prints the score breakdown for QA.

### Ranking

After scoring, the candidate set is sorted by `(score DESC, kindPriority,
slug ASC)` where `kindPriority` orders: `service > sub-service > problem >
area > blog > project`. Multi-service queries return the **top N
distinct services** (capped at 3) plus the **top N distinct problems**
(capped at 3) plus the **top N distinct areas** (capped at 2) plus any
clearly relevant blog / project matches, deduplicated by target URL.

### Result shape

Each result card is rendered server-side and contains **only data that
exists in the source registry**:

```
┌────────────────────────────────────────────────────────────┐
│ [service icon]   TILE & TILING                              │
│                                                              │
│ Tile repair & replacement in KL & Selangor                  │
│ Why this matches: leaking pipe, bathroom, retile…           │
│                                                              │
│ Starting from  RM 150 / job                                │
│ Final quotation depends on site condition.                  │
│                                                              │
│ What's included  · Materials  · Process  · 5 FAQs            │
│ Related: Waterproofing · Plumbing · Bathroom leak            │
│ [View service →]    [WhatsApp]   [Get a free quote]         │
└────────────────────────────────────────────────────────────┘
```

The card never invents a fact; the price comes from
`getHeadlinePricingEntry()`; the "What's included" bullet list comes
from the matching pricing row's `includes` (EN/MS/ZH); the FAQs link
to the same page the FAQ is already on (not duplicated here); the
related services come from the service's existing `relatedServices`
list (or the problem's `relatedServices` for problem results).

### Empty / weak-result fallback

When `score < 1.0` for everything, the page renders the
`NoResultPanel` (localized in all three languages):

- 3 popular services (the three highest `isHeadline` services)
- "Browse all services" / "Browse all problems" links
- "Describe in more detail" — pre-filled WhatsApp message
- "Or request a free quote" — `/quote/`
- An honest note: "We could not find a match for '{query}'. Tell us
  in your own words on WhatsApp and we'll point you to the right
  person."

The fallback never fabricates a service that doesn't exist, never
suggests a price it cannot back, and never claims a guarantee.

---

## 5. Where the search bar lives

- **Header (desktop)**: compact search input that expands on focus, sits
  next to the WhatsApp circle, between the brand and the nav (Phase 9
  header overflow numbers re-verified before shipping).
- **Header (mobile)**: a search icon button in the mobile cluster that
  opens a full-width search overlay (no horizontal overflow at 320px).
- **Homepage hero**: an always-visible, large search bar under the H1
  ("Describe your requirement in your own words — tiling, leaking
  pipe, broken socket, full renovation…"). The home hero already has
  CTAs; this is *added*, not replacing them.
- **Every service / sub-service / problem / area / project / blog
  page**: a smaller "Find something specific" search bar in the
  page's right rail (desktop) or as a sticky bottom-bar on mobile.
- **404 page**: a search bar as the primary recovery action.
- **Footer**: a "Search Renovix" link to `/[lang]/search/`.

Every search bar submits the same `/[lang]/search/?q=…` URL.

---

## 6. SEO, AEO, GEO, AI-search implications

- `/[lang]/search/?q=…` is a real, crawlable route; it carries the
  same `WebPage` + `BreadcrumbList` schema, self-canonical, and the
  full `en-MY`/`ms-MY`/`zh-MY`/`x-default` hreflang set.
- A `noindex, follow` robots rule is applied to the **query-string**
  variant of the URL, so search engines can crawl the search route
  once for discovery but never index thousands of parameter
  combinations (avoids the doorway trap).
- The WebSite `SearchAction` schema is added **honestly**: the
  template `/{lang}/search/?q={search_term_string}` and the action
  is `ReadAction` (the site can "read" — i.e. surface — the term;
  it does not host external results).
- The search page renders the actual content of each matching
  document's first paragraph in static HTML, so LLMs/AEO extractors
  can read the result without executing JS. The typeahead suggestions
  on the home page are not visible to crawlers (server-rendered
  results page is).
- The `llms.txt` and `ai/business.json` feeds gain a new
  `search_intents` block — derived from the same synonym table —
  so AI assistants can answer "what kind of job do you do for X?".

---

## 7. Data-honesty and "no fabrication" integration

The existing audits already enforce the no-fabrication rule for the
rest of the site. The search feature introduces a **new dedicated
audit**:

`npm run audit:search` — verifies:

1. Every `SearchDocument.id` resolves to a real entity in the
   registries (services, sub-services, problems, areas, blog, projects).
2. Every `SearchDocument.pricing.id` (when present) resolves to a row
   in `data/pricing/pricing.ts`.
3. Every `SearchDocument.related.*` slug resolves to a real entity.
4. The synonym table contains only entries that map to a real slug.
5. The serialized JSON mirror under `data/search/index/{lang}.json`
   has the same document count as the live index.
6. No `SearchDocument.title/subtitle/summary` introduces a string
   that is not present in the source registry's localized copy
   (a strict substring check on the source paragraph).
7. The search page renders for the three published languages (EN,
   MS, ZH) and never falls back to English.
8. The home/header search bar is reachable by keyboard, the input
   has a real `<label>`, the results region is `aria-live`, and
   the empty state is localized.

The audit is run in `package.json` and on every `next build` via
`lib/verify.ts` (analogous to `i18n/verify.ts`).

---

## 8. Phasing (work order)

The work is delivered in clearly named phases. Each phase produces a
small, testable, committable change. The order is chosen so each
phase leaves the site in a buildable, deployable state and produces
visible value.

| Phase | Name | What it adds | Status |
|---|---|---|---|
| **0** | Audit + planning | Master Plan + Progress files (this file) | [x] |
| **1** | Typed search index & registry walker | `data/search/`, `lib/search/build-index.ts`, build-time index for all 3 languages, no UI yet | [ ] |
| **2** | Matcher, ranker and results composer (server) | `lib/search/match.ts`, `lib/search/rank.ts`, results JSON for the 3 languages | [ ] |
| **3** | `/[lang]/search/` results page (server component) | Renders the results page with rich result cards, empty state, popular-services fallback | [ ] |
| **4** | Multilingual tokenization & synonym table (typed, data-derived) | CJK tokenizer, per-language synonym table from existing content, mixed-language query handling | [ ] |
| **5** | Header search bar (desktop + mobile) + search overlay | Small client component, accessible form, typeahead from JSON mirror, no horizontal overflow | [ ] |
| **6** | Homepage hero search bar (always visible) | The brief's "highly prominent" search bar | [ ] |
| **7** | Search bar on service / sub-service / problem / area / project / blog / 404 / footer | Universal placement, no JS duplication | [ ] |
| **8** | SEO/AEO integration — `SearchAction` schema, `noindex` on `?q=…`, llms.txt + ai/business.json search_intents, breadcrumb + WebPage schema on the search page | [ ] |
| **9** | `npm run audit:search` — full search-audit script, wired into `package.json` and `lib/verify.ts` | [ ] |
| **10** | Testing — multilingual queries, short / long / typo / multi-service / no-result queries, mobile, accessibility, performance budget, all 17 existing audits still pass | [ ] |
| **11** | Final QA, progress freeze, git commit, and PR | [ ] |

The phases can be partially combined into a single PR when they are
small and individually testable. The progress file records every
status flip.

---

## 9. File-by-file plan (where new code lives)

```
data/search/
├── types.ts                 — SearchDocument, SearchIndex, SearchResult, Token, …
├── build-index.ts           — walks registries, builds the typed index per language
├── serialize.ts             — JSON mirror for the client (typeahead)
├── synonyms.ts              — per-language synonym table, data-derived
├── index.ts                 — public getters (getSearchIndex, etc.)
└── audit-data.ts            — what the audit script introspects

lib/search/
├── tokenize.ts              — language-aware tokenizer (Latin + CJK)
├── match.ts                 — score(document, query, lang)
├── rank.ts                  — sort, dedupe, cap, group by kind
├── results.ts               — composes the SearchResult the page renders
├── empty-state.ts           — popular services + WhatsApp fallback data
└── verify.ts                — the build-time guard

app/[lang]/search/
├── page.tsx                 — server component, reads ?q=…, renders results
└── opengraph-image.tsx      — local OG card (optional)

components/search/
├── SmartSearchBar.tsx       — the form (server-friendly), no JS required
├── SearchOverlay.tsx        — mobile full-width overlay (client)
├── Typeahead.tsx            — small client component for live suggestions
├── ResultCard.tsx           — server-rendered rich result card
├── ResultGroup.tsx          — groups by kind (services / problems / areas)
├── NoResultPanel.tsx        — empty state, all 3 languages
├── SearchCta.tsx            — quote / WhatsApp / call CTAs
└── SearchIcon.tsx           — small SVG icon for the search trigger

scripts/
└── audit-search.mjs         — the new audit script

i18n/
├── en.ts                    — add `search.*` dictionary block
├── ms.ts                    — add `search.*` dictionary block
├── zh.ts                    — add `search.*` dictionary block
└── types.ts                 — add `search: { … }` to `Dictionary`

content/security/
└── (CSP unchanged)          — no new providers, no `unsafe-eval`, no third-party
```

---

## 10. Risks, trade-offs, and explicit "do not"

- **Risk:** the search results page becomes a thin doorway. **Mitigation:**
  every result links to a real, content-rich page; the query-string variant
  is `noindex, follow`; the page itself is `index, follow`; the result card
  duplicates zero content from the target page (only the headline and a
  short snippet + the existing FAQ/schema links).
- **Risk:** adding JS to the header breaks the Phase 8/9/13 mobile overflow
  numbers. **Mitigation:** the search bar is opt-in (icon button on phones
  that opens a full-width overlay); the home hero search bar is below the
  existing CTAs, not a replacement; the header bar measures ≤ 5 KB gzip
  of new JS.
- **Risk:** CJK tokenizer bugs (over-segmentation, under-segmentation).
  **Mitigation:** a 1–2 character unigram + bigram pass is the standard
  approach for short home-services queries; the test suite covers
  "漏水" → waterproofing, "瓷砖空鼓" → tiling, "电插座" → electrical.
- **Risk:** synonym table drifts. **Mitigation:** synonyms are only
  added by editing the typed `synonyms.ts`; `audit:search` fails on
  any entry that does not resolve.
- **Do not** introduce a third-party search vendor, a hosted fuzzy
  library, a CDN search script, or any client-side bundle > 10 KB
  gzip.
- **Do not** index the query-string variant in the sitemap.
- **Do not** add a "trending searches" feature that requires an
  analytics ID (the brief is explicitly progressive disclosure, not
  personalization).
- **Do not** publish a search-results page that the customer would
  reasonably interpret as a quotation or a guarantee.

---

## 11. Out of scope (deliberately not started)

These are *not* part of this project and are tracked separately:

- Real Resend delivery (Phase 12 / 25 — owner pending).
- Real project photos for painting / waterproofing / flooring / handyman
  (owner pending).
- GA4 / GTM / Clarity IDs (Phase 24 — owner pending).
- GBP integration, geo, reviews (governance forbids invention).
- Per-`?q=` SEO pages (intentional `noindex, follow`).
- Voice search, image search, AI chat assistant.
- Distributed rate limiting (Phase 25 / I-10 — owner pending).
- Live field CWV / PageSpeed data (owner pending).

---

## 12. Acceptance criteria (the work is "done" when)

- [ ] All 11 phases above are marked `[x]` in
  `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md`.
- [ ] `npm run type-check`, `npm run lint`, `npm run build` pass.
- [ ] All 17 existing audits + the new `npm run audit:search` pass.
- [ ] The home hero shows a large, prominent, multilingual search bar.
- [ ] The header (desktop and mobile) exposes a working search input.
- [ ] `/[lang]/search/?q=…` renders rich, multilingual results
  grounded in existing registry data for the three published languages.
- [ ] A search with zero results shows a helpful, localized fallback
  (popular services + browse + WhatsApp + describe in more detail),
  not a dead end.
- [ ] At least 25 example queries (5 languages × 5 categories) return
  the expected top result; the audit script captures these as
  fixtures.
- [ ] No new client bundle over the budget (~10 KB gzip); the search
  page works without JS (form submit) and is enhanced with JS
  (typeahead) when available.
- [ ] The SearchAction schema, llms.txt block and ai/business.json
  search_intents block are live.
- [ ] The progress file is frozen, the branch is committed, and a PR
  is opened from `arena/01a07898-renovix-home-services`.
