# Renovix Home Services — Smart Service Finder — Project Progress

> **Living document.** Every meaningful task is recorded here as soon as it
> is implemented and verified. Use the same convention as the main
> `PROJECT_PROGRESS.md`:
>
> - `[x]` Completed
> - `[~]` In progress
> - `[ ]` Pending
> - `[!]` Blocked / Needs business decision
>
> **Authoritative plan:** `SMART_SERVICE_FINDER_MASTER_PLAN.md`. This file is
> the day-to-day status; the plan is the source of truth for *why* and *how*.
>
> **Branch:** `arena/01a07898-renovix-home-services` (the only branch this
> session is allowed to commit to and push to).

---

## How to use this file at the start of a new AI session

1. Read `SMART_SERVICE_FINDER_MASTER_PLAN.md` (the architecture / rules).
2. Read this file end-to-end (what was done, what is open, what is blocked).
3. Inspect the repo: `git status`, `git log --oneline -20`,
   `ls data/search/`, `ls lib/search/`, `ls components/search/`,
   `ls app/[lang]/search/`.
4. Find the last completed task (the highest `[x]` in this file).
5. Find the next pending task (the first `[ ]` or `[~]`).
6. Continue from that exact point. **Do not restart completed work.**
7. After every meaningful completed task, update this file, mark the
   task `[x]`, add a short completion note, record the affected files,
   and commit when appropriate.

---

## Phase 0 — Audit, planning and project-management documentation

- [x] **0.1 — Repository audit.**
  - Read `README.md`, `AGENTS.md`, `CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`,
    `SITEMAP.md`, the 17 audit scripts in `scripts/`, and the existing
    `PROJECT_PROGRESS.md` (Phases 1–26). The site is in Phase 26 final
    state: 665 static pages prerendered, 3 languages, 10 service pillars,
    51 sub-services, 57 problem guides, 53 area guides, 21 published
    projects, 12 guides, 51 priced rows, 24 intent-matrix entries, 17
    audit scripts. **No existing `SearchAction`, no existing search bar,
    no existing search routes** — the site has no search feature today.
  - Confirmed: 3 runtime deps only (`next`, `react`, `react-dom`); the
    multilingual i18n dictionary is fully typed (`i18n/types.ts`); the
    data registries are typed and registry-driven; `audit:authority` and
    `audit:pricing` exist and pass.
- [x] **0.2 — Existing project-management / AI instruction files reviewed.**
  - `AGENTS.md`, `README.md`, `CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`,
    `SITEMAP.md`, `PHASE_26_DEEP_AUDIT_2026-09-05.md` and
    `PHASE_26_IMPLEMENTATION_PLAN.md` all read.
- [x] **0.3 — `SMART_SERVICE_FINDER_MASTER_PLAN.md` created.**
  - File: `SMART_SERVICE_FINDER_MASTER_PLAN.md` (≈ 12 KB). Captures the
    core principles, architecture, multilingual policy, ranking, file
    layout, phasing, risks, out-of-scope and acceptance criteria.
- [x] **0.4 — `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md` created.**
  - This file.
- [x] **0.5 — `npm install` run.**
  - 371 packages, 0 errors, lockfile in sync. Working tree clean
    (`git status`).

---

## Phase 1 — Typed search index and registry walker

- [ ] **1.1 — Define `SearchDocument` / `SearchIndex` types.**
  - File: `data/search/types.ts`. One discriminated `SearchDocument` per
    `kind`: `service | sub-service | problem | area | blog | project`.
    Per-language search terms. Stable id. Optional `pricing.id` linkage.
  - Status: pending.
- [ ] **1.2 — Build the index walker.**
  - File: `data/search/build-index.ts`. Walks every existing registry
    (services, service-content, sub-services, problem-content,
    area-content, blog, project-content) and emits one `SearchDocument`
    per published entity, per language.
  - No invented fields; the document is a strict projection of what the
    page already renders.
  - Status: pending.
- [ ] **1.3 — Public getters (`getSearchIndex(lang)`, etc.).**
  - File: `data/search/index.ts`.
  - Status: pending.
- [ ] **1.4 — JSON mirror for the client typeahead.**
  - File: `data/search/serialize.ts`. Same data, JSON-serializable,
    dropped to `data/search/index/{lang}.json` at build time (only when
    the search UI is wired up; for now it's a typed object).
  - Status: pending.
- [ ] **1.5 — Build-time guard for the index.**
  - File: `lib/search/verify.ts`. Asserts every `SearchDocument` resolves
    to a real entity; pricing ids resolve; related slugs resolve; mirror
    is in sync.
  - Status: pending.

---

## Phase 2 — Matcher, ranker, results composer (server)

- [ ] **2.1 — Tokenizer (Latin + CJK).**
  - File: `lib/search/tokenize.ts`. Unicode word boundaries; lowercased;
    1–2 char CJK unigram + bigram pass; stop-words list per language
    (kept small and explicitly listed).
  - Status: pending.
- [ ] **2.2 — Match scorer.**
  - File: `lib/search/match.ts`. Weighted-sum scorer (see plan §4);
    pure function, no I/O, unit-testable.
  - Status: pending.
- [ ] **2.3 — Ranker.**
  - File: `lib/search/rank.ts`. Dedupe by URL, cap by kind
    (3 services + 3 sub-services + 3 problems + 2 areas + 1 blog + 1
    project), sort by `(score DESC, kindPriority, slug ASC)`.
  - Status: pending.
- [ ] **2.4 — Results composer.**
  - File: `lib/search/results.ts`. Composes a `SearchResult` per match
    (title, kind, why-it-matches, pricing line, included bullets, FAQ
    count, related links, CTA hrefs). Everything traces back to an
    existing registry getter.
  - Status: pending.
- [ ] **2.5 — Empty state composer.**
  - File: `lib/search/empty-state.ts`. Returns the 3 popular services,
    browse links, WhatsApp quick path, honest no-match note. All
    localized.
  - Status: pending.

---

## Phase 3 — `/[lang]/search/` results page (server component)

- [ ] **3.1 — Route + `generateStaticParams`.**
  - File: `app/[lang]/search/page.tsx`. Reads `?q=` from `searchParams`,
    runs the matcher, returns the results page. Adds self-canonical,
    full `en-MY`/`ms-MY`/`zh-MY`/`x-default` hreflang, `WebPage` +
    `BreadcrumbList` schema.
  - Status: pending.
- [ ] **3.2 — `ResultCard`, `ResultGroup`, `NoResultPanel`.**
  - Files: `components/search/ResultCard.tsx`,
    `components/search/ResultGroup.tsx`,
    `components/search/NoResultPanel.tsx`. Server-rendered; carry
    the right `lang` attribute for every visible string; no English
    fallback.
  - Status: pending.
- [ ] **3.3 — `noindex, follow` on `?q=…` variant.**
  - The base route is `index, follow`; the query-string variant
    applies `noindex, follow` (handled via `generateMetadata` + a
    server-side `robots` directive on the rendered HTML).
  - Status: pending.
- [ ] **3.4 — Add `search` page to the `i18n/coverage.ts` registry.**
  - Status: pending.

---

## Phase 4 — Multilingual tokenization, synonyms, mixed-language

- [ ] **4.1 — Per-language synonym table.**
  - File: `data/search/synonyms.ts`. Every entry references a real
    service / sub-service / problem / area slug. Built from observed
    customer phrasing in the existing content (problem names, service
    intros, FAQ Q+As). No invented terms.
  - Status: pending.
- [ ] **4.2 — Mixed-language query handling.**
  - When the tokenizer detects both Latin and CJK glyphs, run both
    language passes and union the result sets. The result is rendered
    in the page's current language.
  - Status: pending.
- [ ] **4.3 — Synonym audit assertion.**
  - `lib/search/verify.ts` rejects unknown slugs; a stale entry fails
    the build.
  - Status: pending.

---

## Phase 5 — Header search bar (desktop + mobile)

- [ ] **5.1 — `SmartSearchBar.tsx` (server-friendly form, no JS).**
  - File: `components/search/SmartSearchBar.tsx`. Real `<form>`, real
    `<label>`, accessible name, autocomplete hint, visible focus, no
    required JS. Submits to `/[lang]/search/?q=…`.
  - Status: pending.
- [ ] **5.2 — `Typeahead.tsx` (small client component, ~3 KB gzip).**
  - File: `components/search/Typeahead.tsx`. Fetches
    `/[lang]/search-suggestions.json` once, renders up to 5
    suggestions on input, keyboard navigable, `aria-live="polite"`.
  - Status: pending.
- [ ] **5.3 — `SearchOverlay.tsx` (mobile full-width overlay).**
  - File: `components/search/SearchOverlay.tsx`. Triggered by the
    header icon, opens a full-width sheet, locks body scroll, closes
    on Escape and outside click, focus trap, focus restore.
  - Status: pending.
- [ ] **5.4 — Header integration.**
  - File: `components/layout/Header.tsx`. Desktop: compact input
    beside the WhatsApp circle. Mobile: icon button in the cluster
    that opens `SearchOverlay`. No horizontal overflow at 320–360px
    (re-verify with the Phase 8 measurements).
  - Status: pending.

---

## Phase 6 — Homepage hero search bar (always visible)

- [ ] **6.1 — Add the search bar to the home hero.**
  - File: `components/home/HomePage.tsx` (or a new
    `components/home/HeroSearchSection.tsx`). Large input, big
    placeholder, localized examples below it, a primary "Search" CTA
    plus a secondary "Or WhatsApp us" CTA.
  - Status: pending.
- [ ] **6.2 — Multilingual examples (placeholder + helper text).**
  - Examples for EN, MS, ZH are derived from real problem names in
    the existing registries, not invented.
  - Status: pending.

---

## Phase 7 — Universal placement

- [ ] **7.1 — Service, sub-service, problem, area, blog, project pages.**
  - A small "Find something specific" search bar in the right rail
    (desktop) or as a sticky bottom-bar on mobile. Server-rendered,
    no JS required for submission.
  - Status: pending.
- [ ] **7.2 — 404 page recovery.**
  - The localized 404 (`app/[lang]/not-found.tsx` and
    `app/[lang]/layout.tsx`) gains a search bar as its primary
    recovery action.
  - Status: pending.
- [ ] **7.3 — Footer "Search Renovix" link.**
  - File: `components/layout/Footer.tsx`. Localized label.
  - Status: pending.

---

## Phase 8 — SEO / AEO / GEO / AI-search integration

- [ ] **8.1 — `WebSite` schema gains a `SearchAction` node.**
  - File: `components/seo/schema.ts`. The action is `ReadAction`
    targeting `/{lang}/search/?q={search_term_string}`. The base
    WebSite node already exists; this is an additive `potentialAction`.
  - Status: pending.
- [ ] **8.2 — `llms.txt` and `/ai/business.json` gain a
  `search_intents` block.**
  - File: `lib/ai-knowledge.ts` + `app/llms.txt/route.ts`. The block
    is derived from the synonym table and the existing problem list.
  - Status: pending.
- [ ] **8.3 — Sitemap excludes `?q=…` variants.**
  - File: `app/sitemap.ts`. The base `/[lang]/search/` route is added
    (one per language) without query strings.
  - Status: pending.

---

## Phase 9 — `npm run audit:search` script

- [ ] **9.1 — Dependency-free audit script.**
  - File: `scripts/audit-search.mjs`. Implements the eight checks
    from the plan §7.
  - Status: pending.
- [ ] **9.2 — Wire into `package.json` and `lib/verify.ts`.**
  - The audit runs on every `next build` and is listed in
    `package.json` next to the other audits.
  - Status: pending.

---

## Phase 10 — Testing

- [ ] **10.1 — 25-query fixture suite.**
  - At least 25 example queries covering short / long / typo /
    multi-service / no-result / CJK-only / Latin-only / mixed /
    sub-service-specific / pricing-specific / location-specific /
    material-specific queries. The audit script loads the fixtures
    and asserts the expected top result.
  - Status: pending.
- [ ] **10.2 — All 17 existing audits still pass.**
  - Re-run every `npm run audit:*` after the search feature is
    wired in. No regression.
  - Status: pending.
- [ ] **10.3 — Multilingual render verification.**
  - Sample search pages in EN, MS, ZH. No English strings on
    `/ms/` or `/zh/`.
  - Status: pending.
- [ ] **10.4 — Mobile / overflow verification.**
  - The search bar does not push any existing header breakpoint
    into horizontal overflow at 320 / 360 / 390 / 412 / 640 / 768 /
    1024 / 1280 / 1440px (re-measure with the same method as
    Phase 8 / 13 / 26).
  - Status: pending.
- [ ] **10.5 — Accessibility.**
  - Real `<form>`, `<label>`, `aria-live`, focus visible, keyboard
    navigation works end-to-end (input → typeahead → Enter → result
    page → result card → CTA), reduced-motion respected, contrast
    tokens re-verified for the new components.
  - Status: pending.
- [ ] **10.6 — Performance budget.**
  - `next build` measures the search-related client chunk ≤ 10 KB
    gzip. The search results page is fully server-rendered.
  - Status: pending.

---

## Phase 11 — Final QA, freeze, commit, PR

- [ ] **11.1 — `npm run type-check`, `npm run lint`, `npm run build`**
  all pass.
- [ ] **11.2 — `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md` is frozen**
  with every task `[x]` and a one-line note.
- [ ] **11.3 — `git status` clean; the branch**
  `arena/01a07898-renovix-home-services` carries a single,
  reviewable commit set covering phases 1–10.
- [ ] **11.4 — Push to `origin/arena/01a07898-renovix-home-services`.**
  - Open or update a PR (no PR creation if the session is
    blocked from doing so — recorded instead).

---

## Out-of-scope / blocked items

- [!] **Owner-supplied real Resend API key + verified sender domain.**
  Not part of this project; the search results page links to the
  existing `/quote/` flow which remains owner-gated.
- [!] **Real project photos for painting / waterproofing / flooring /
  handyman.** Not part of this project; would unlock a richer
  result card for those four services.
- [!] **GA4 / GTM / Clarity IDs.** Not part of this project; the
  search results page emits the same `service_cta_click`,
  `subservice_cta_click`, `whatsapp_click`, `phone_click` events
  that Phase 24 already wires up (event surface unchanged).

---

## Next task (highest-priority pending)

**Phase 1.1** — Define `SearchDocument` / `SearchIndex` types in
`data/search/types.ts`.

A new AI session should:

1. Read this file in full.
2. Read `SMART_SERVICE_FINDER_MASTER_PLAN.md` §0–§4 and §8–§9.
3. Inspect the existing registries (`data/service-content/`,
   `data/sub-services/`, `data/problem-content/`, `data/area-content/`,
   `data/blog/`, `data/project-content/`, `data/pricing/`).
4. Continue from **1.1**.

---

## Completed-task log (chronological, post-Phase 0)

The Phase 0 checklist above is the only completed set so far. As each
later phase lands, the matching items will be moved from `[ ]` to `[x]`
with a one-line completion note (files touched + verification result)
appended here in chronological order.
