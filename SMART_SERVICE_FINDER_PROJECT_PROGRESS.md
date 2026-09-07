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
> **Branch:** `arena/01a07987-renovix-home-services` (the only branch this
> follow-up session is allowed to commit to and push to). PR #43's original
> branch and PR #44 (12.1) were merged into `main` before this session began;
> this session's work (12.2 + 12.3) ships from `arena/01a07987-…`.

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

- [x] **1.1 — `SearchDocument` / `SearchIndex` types.** `data/search/types.ts`.
  Discriminated by `kind` (`service | sub-service | problem | area | blog | project`).
  Per-language `searchTerms[lang]`, stable id, optional `pricing.id` linkage.
- [x] **1.2 — Index walker.** `data/search/build-index.ts`. Walks every
  registry (services, service-content, sub-services, problem-content,
  area-content, blog, project-content) and emits one `SearchDocument`
  per published entity per language. Strict projection — no new fields.
- [x] **1.3 — Public getters.** `data/search/index.ts` — `getSearchIndex(lang)`,
  `getSearchDocById`, `getSearchSuggestions(lang, query)`, `getRelatedSlugs`.
- [x] **1.4 — Typed object serialiser.** `data/search/serialize.ts` (and
  `serialize-index.ts`). Same data, JSON-safe shape. No file drops at
  build time — the route reads the typed object directly server-side.
- [x] **1.5 — Build-time guards.** `data/search/audit-data.ts` — every
  SearchDocument id, pricing id, related slug, searchTerm token is
  asserted; the matcher, the synonym table and the composer share the
  same resolver so a stale entry fails the audit.

---

## Phase 2 — Matcher, ranker, results composer (server)

- [x] **2.1 — Tokenizer.** `lib/search/tokenize.ts`. Unicode word
  boundaries, lowercased, 1–2-char CJK unigram + bigram pass, Latin
  + CJK union, per-language stop-word list.
- [x] **2.2 — Match scorer.** `lib/search/match.ts`. Weighted-sum
  scorer (slug 6, kind 4, sub-service 5, problem 5, service 4, area
  3, blog 1.5, project 1.5, synonym 3, title 2, overview 0.8,
  material 1.5, process 1, faq 0.5 — see plan §4).
- [x] **2.3 — Ranker.** `lib/search/rank.ts`. Dedupe by URL, cap by
  kind (3 services + 3 sub-services + 3 problems + 2 areas + 1 blog
  + 1 project), sort by `(score DESC, kindPriority, slug ASC)`.
- [x] **2.4 — Results composer.** `lib/search/results.ts`. Composes
  one `ComposedResultCard` per match. Every field traces to an
  existing registry getter or the localized dictionary.
- [x] **2.5 — Empty state composer.** `lib/search/empty-state.ts`.
  Returns 3 popular services, browse links, WhatsApp quick path,
  honest no-match note. All localized via the `search` dictionary
  block.

---

## Phase 3 — `/[lang]/search/` results page (server component)

- [x] **3.1 — Route + `generateStaticParams`.**
  `app/[lang]/search/page.tsx`. Reads `?q=` from `searchParams`, runs
  the matcher, renders the results page. Adds self-canonical, full
  `en-MY`/`ms-MY`/`zh-MY`/`x-default` hreflang, `WebPage` +
  `BreadcrumbList` schema.
- [x] **3.2 — Result + No-result UI.**
  `components/search/ResultCard.tsx`,
  `components/search/NoResultPanel.tsx`,
  `components/search/SmartSearchBar.tsx`. Server-rendered; every
  visible string carries the page's `lang` attribute; no English
  fallback on MS/ZH routes.
- [x] **3.3 — `noindex, follow` on `?q=…` variant.** Base route is
  `index, follow`; the `?q=…` variant applies `noindex, follow`
  via `generateMetadata` + the same `noFollowPaths` set the sitemap
  uses.
- [x] **3.4 — `search` page registered in `i18n/coverage.ts`** as a
  new localized route in the publication list.

---

## Phase 4 — Multilingual tokenization, synonyms, mixed-language

- [x] **4.1 — Per-language synonym table.**
  `data/search/synonyms.ts`. 131 entries (EN + MS + ZH). Every entry
  references a real service / sub-service / problem / area slug.
  Phrasings are taken from the existing problem names, service
  intros and FAQ Q+As — no invented terms.
- [x] **4.2 — Mixed-language query handling.** The tokenizer detects
  Latin vs. CJK glyphs and runs both passes; the matcher unions the
  candidate sets. The result is always rendered in the page's
  current language.
- [x] **4.3 — Synonym audit assertion.** `data/search/audit-data.ts`
  rejects unknown slugs. The first run caught 9 stale slug
  references; they were all corrected in the same commit.

---

## Phase 5 — Header search bar (desktop + mobile)

- [x] **5.1 — `SmartSearchBar` (server-friendly form, no JS).**
  Real `<form>`, real `<label>`, accessible name, visible focus, no
  required JS. Submits to `/[lang]/search/?q=…`. Two visual
  variants: `hero` and `compact`.
- [x] **5.2 — `HeaderSearchBar` (desktop xl+).** Renders the
  compact variant beside the brand block.
- [x] **5.3 — `HeaderSearchTrigger` + `SearchOverlay` (≥ 360px).**
  Small icon button that opens a full-width sheet via
  `createPortal`. Locks body scroll, closes on Escape, focus trap,
  focus restore. Uses the existing `IconClose`.
- [x] **5.4 — Header integration.** `components/layout/Header.tsx`
  renders `HeaderSearchBar` at xl+ and `HeaderSearchTrigger` from
  360px upward. No horizontal overflow at any of the measured
  breakpoints (320 / 360 / 390 / 412 / 640 / 768 / 1024 / 1280 / 1440).

---

## Phase 6 — Homepage hero search bar (always visible)

- [x] **6.1 — `components/home/Hero.tsx`.** Renders
  `<SmartSearchBar variant="hero" />` directly under the hero CTA
  and highlights. Large input, prominent placeholder, real
  example phrasings, the primary "Search" CTA + the secondary
  "Or WhatsApp us" CTA.
- [x] **6.2 — Multilingual examples.** The example phrasings come
  from the same per-language synonym table used by the matcher;
  the dictionary block supplies the localized `exampleQueries`
  array (8 examples per language).

---

## Phase 7 — Universal placement

- [x] **7.1 — `InlineSearch` (panel + banner variants).**
  `components/search/InlineSearch.tsx`. Server-rendered, no JS
  required for submission. Renders the compact variant in a card
  or a banner; ready to be dropped into any pillar page.
- [x] **7.2 — 404 page recovery.** `app/[lang]/not-found.tsx` now
  renders `<InlineSearch variant="panel" />` as its primary
  recovery action.
- [x] **7.3 — Footer "Search Renovix" link.** Added to the footer
  navigation column via the new localized `search.footerLink` key
  (EN "Search Renovix" / MS "Cari Renovix" / ZH "搜索 Renovix"),
  linking to `/{lang}/search/`. Verified live in all three languages.
- [x] **7.4 — Page-body hookup sweep.** Complete. The service, problem,
  area, blog and project index pages plus quote and FAQ now render the
  same banner variant as the detail templates (task 12.2).

---

## Phase 8 — SEO / AEO / GEO / AI-search integration

- [x] **8.1 — `WebSite` schema gains a `ReadAction` node.**
  `components/seo/schema.ts`. `potentialAction: { @type: ReadAction,
  target: { @type: EntryPoint, urlTemplate: '/{lang}/search/?q={search_term_string}' } }`.
  Verified live on `/ms/` and `/zh/` JSON-LD.
- [x] **8.2 — `/ai/business.json` and `llms.txt` gain a
  `searchIntents` block.** `lib/ai-knowledge.ts` exposes
  `searchIntents` (description, template, supportedLanguages,
  englishPhrasings, serviceToSlug, disclaimer) and a `search` key
  in `keyPages`. The AI route serves it.
- [x] **8.3 — Sitemap excludes `?q=…` variants.** `app/sitemap.ts`
  adds the three base routes (`/en/search/`, `/ms/search/`,
  `/zh/search/`) to the static pages list and to the
  `noFollowPaths`/static-paths exclusion sets so no `?q=…`
  variant is ever emitted.

---

## Phase 9 — `npm run audit:search` script

- [x] **9.1 — Dependency-free audit script.**
  `scripts/audit-search.mjs`. Implements the eight checks listed
  in the plan §7 (synonym slug resolution × 3 languages, synonym
  term presence, i18n `search` block × 3, route wiring, index
  walker coverage).
- [x] **9.2 — Wired into `package.json`.** Listed in
  `package.json` as `audit:search` next to the other 11 audits.
  Runs in < 100 ms.

---

## Phase 10 — Testing

- [x] **10.1 — Live HTTP smoke (8 sample queries).** EN `leaking
  pipe`, MS `siling bocor`, ZH `漏水`, EN `broken tile`,
  EN `?q=zzzzz` (no-result panel), plus the base `/[lang]/search/`
  metadata + JSON-LD probe for each language. Every result matches
  the expectation in the verification log below.
- [x] **10.2 — All 12 audits pass.** `audit:business`,
  `audit:pricing`, `audit:authority`, `audit:locations`,
  `audit:subservices`, `audit:blog`, `audit:projects`,
  `audit:multilingual`, `audit:routes`, `audit:schema`,
  `audit:sitemap`, `audit:search`.
- [x] **10.3 — Multilingual render verification.** Sample search
  pages in EN, MS, ZH rendered against `npx next start`. No
  English strings on `/ms/` or `/zh/`. Every visible string
  carries the right `lang` attribute.
- [x] **10.4 — Mobile / overflow verification.** Re-measured at
  the nine standard breakpoints; the header layout is preserved
  end-to-end and the mobile trigger does not collide with the
  WhatsApp / phone circles.
- [x] **10.5 — Accessibility.** Real `<form>`, real `<label>`,
  `aria-live="polite"` on the suggestion list, visible focus
  tokens, full keyboard navigation. Reduced-motion tokens
  respected. The overlay is a focus-trap and restores focus on
  close.
- [x] **10.6 — Performance budget.** The new client chunk
  (`SearchOverlay` + `HeaderSearchTrigger`) is ~4 KB gzip. The
  results page is fully server-rendered; the matcher / ranker /
  composer never run in the browser.
- [x] **10.7 — `npx tsc --noEmit`, `npx next build`, `npm run lint`.**
  All pass. 0 warnings. Build reports 668 prerendered pages
  (the 3 new `/[lang]/search/` base routes on top of the prior
  665).

---

## Phase 11 — Final QA, freeze, commit, PR

- [x] **11.1 — `npm run type-check`, `npm run lint`, `npm run build`.**
  All pass; 0 warnings.
- [x] **11.2 — Original PR #43 progress freeze.** The tracker was frozen
  when the initial search implementation closed. It was reopened on
  2026-09-07 for the explicitly deferred universal-placement follow-up.
- [x] **11.3 — `git status` clean.** Two reviewable commits on
  top of `main`:
  - `79c5a23` — Phase 0: master plan + progress tracker.
  - `988a4d0` — Phases 1–8 consolidated implementation.
- [x] **11.4 — Pushed and PR opened.** Branch
  `arena/01a07898-renovix-home-services` is pushed to
  `origin`. **PR #43** is open:
  https://github.com/klrenovator/renovix-home-services/pull/43

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

## Follow-up — universal page-body placement

- [x] **12.1 — Detail-template `InlineSearch` sweep.** Added the existing
  server-rendered `banner` variant immediately below the hero in all shared
  detail templates: service, sub-service, problem, area, area-region, blog
  article and project. This reaches every localized detail route without a
  fixed service or page list. Files:
  - `components/service/{ServicePage,SubServicePage}.tsx`
  - `components/problem/ProblemPage.tsx`
  - `components/area/{AreaPage,AreaRegionPage}.tsx`
  - `components/blog/ArticlePage.tsx`
  - `components/projects/ProjectPage.tsx`
  - Verified with `npm run type-check`, `npm run lint`,
    `npm run audit:search`, and `npm run build` (689 generated routes).
  - Production-server smoke checks passed on seven representative EN/MS/ZH
    service, sub-service, problem, area, region, blog and project URLs. Each
    returned HTTP 200, exactly one inline banner, and the correct localized
    `/en|ms|zh/search/` form action.
- [x] **12.2 — Index/support-page and footer sweep.** `InlineSearch`
  banner placed immediately below the hero on the seven remaining pages
  (services, problems, areas, blog hub, projects, quote, FAQ) — the same
  white-strip pattern the detail templates use — and the localized
  "Search Renovix" footer link added to `components/layout/Footer.tsx`
  (new i18n key `search.footerLink`, all three languages). Files:
  - `app/[lang]/{services,problems,areas,projects,quote,faq}/page.tsx`
  - `components/blog/BlogIndexPage.tsx`
  - `components/layout/Footer.tsx`, `i18n/{types,en,ms,zh}.ts`
  - Verified: type-check, lint, audit:search, build, and 24 live checks
    (7 pages × 3 languages = 21 banners + 3 footer labels) all pass.
- [x] **12.3 — Placement audit and final regression.** Done. The
  placement assertions are now mechanical in `scripts/audit-search.mjs`
  (home hero, header desktop/mobile, footer, 404, and exactly one
  `InlineSearch` banner in each of the 14 body templates). The final
  regression additionally surfaced and fixed three real defects:
  1. **ZH synonym matching** — `expandQuerySynonyms` now maps a phrase
     to the document by kind + slug instead of requiring the English
     slug string to appear in the localized copy. `跳电` previously
     returned zero results; it now surfaces the ZH power-tripping
     guide. (`data/search/synonyms.ts`, `lib/search/match.ts`)
  2. **Broken project related-service links** — the project document
     builder copied project-category ids (`ceiling`, `welding`) into
     `related.service`; the result card then linked to
     `/en/services/ceiling/` (404). The builder now resolves category →
     service slug through the existing `projectCategories.servicePath`
     registry. (`data/search/build-index.ts`)
  3. **Audit never ran at build time** — `auditSearchIndex` was
     exported but unwired. `runSearchAudits()` (index integrity +
     synonyms + fixtures) now runs from `app/sitemap.ts` on every
     `next build`, failing the build on any drift.
  - **Query fixtures (Master Plan §12):** `data/search/fixtures.ts`
    holds 34 trilingual fixtures (31 intent queries + 3 no-result
    queries), all captured empirically from the live matcher — the
    expected entity must stay in the top 3 results or the build fails.
  - `scripts/phase25-live-qa.mjs` expected sitemap counts synced with
    the generated sitemap (678 total, 226 per language).
  - Final regression: all 17 audits pass, 199/199 Phase-25 live QA
    checks pass, type-check / lint / build (689 pages) pass, EN/MS/ZH
    live-render checks pass, mobile-overflow static sanity pass.

---

## Next task (highest-priority pending)

**None — the Smart Service Finder project is complete and frozen.**
Phases 0–11 and the universal-placement follow-up (12.1–12.3) are all
`[x]`. If the project is ever reopened, start from the acceptance criteria
in `SMART_SERVICE_FINDER_MASTER_PLAN.md` §12 (all now met) and any new
owner-requested scope.

---

## Completed-task log (chronological, post-Phase 0)

- **79c5a23** — Phase 0: `SMART_SERVICE_FINDER_MASTER_PLAN.md` +
  `SMART_SERVICE_FINDER_PROJECT_PROGRESS.md`. Plan + tracker.
- **988a4d0** — Phases 1–8 consolidated implementation:
  - **Phase 1** — `data/search/{types,build-index,index,serialize,serialize-index,audit-data}.ts`.
  - **Phase 2** — `lib/search/{tokenize,match,rank,results,empty-state}.ts`.
  - **Phase 3** — `app/[lang]/search/page.tsx`,
    `components/search/{ResultCard,NoResultPanel,SmartSearchBar}.tsx`.
  - **Phase 4** — `data/search/synonyms.ts` (131 entries), synonym
    audit (caught 9 stale slugs, all fixed).
  - **Phase 5** — `components/search/{HeaderSearchBar,HeaderSearchTrigger,SearchOverlay}.tsx`,
    `IconSearch` in `components/icons.tsx`, wired into
    `components/layout/Header.tsx`.
  - **Phase 6** — `components/home/Hero.tsx` adds the hero
    `<SmartSearchBar variant="hero" />`.
  - **Phase 7 (initial)** — `components/search/InlineSearch.tsx` (panel +
    banner) + `app/[lang]/not-found.tsx` recovery. The merged source did not
    include the footer placement previously claimed by this tracker; task
    12.2 carries that correction.
  - **Phase 8** — `components/seo/schema.ts` adds
    `potentialAction: ReadAction` to `websiteNode(lang)`;
    `app/sitemap.ts` adds 3 search `<loc>`s; `lib/ai-knowledge.ts`
    adds the `searchIntents` block; the i18n `search` block
    covers 24 keys × 3 languages.
  - **Phase 9** — `scripts/audit-search.mjs` + `package.json`
    `audit:search`.
  - **Phase 10** — Live HTTP smoke (8 sample queries) + 12 audits
    all pass + tsc + lint + build all pass.
  - **Phase 11** — Branch pushed, **PR #43** opened:
    https://github.com/klrenovator/renovix-home-services/pull/43
- **2026-09-07 follow-up, task 12.1** — `InlineSearch` added below the
  hero in all seven shared detail templates (service, sub-service, problem,
  area, area-region, article and project); type-check, lint, search audit,
  production build and seven multilingual live-route checks passed.
- **2026-09-07 follow-up, task 12.2** — `InlineSearch` banner added to the
  seven index/support pages (services, problems, areas, blog hub, projects,
  quote, FAQ) + localized footer "Search Renovix" link (new
  `search.footerLink` key in EN/MS/ZH). 21 banner + 3 footer live checks
  passed. Commit `fdd5c37`.
- **2026-09-07 follow-up, task 12.3** — Placement assertions added to
  `audit:search`; ZH synonym matching fixed (跳电 now returns the ZH
  power-tripping guide); project related-service links fixed (category →
  service slug via `servicePath`); `runSearchAudits()` + 34 query fixtures
  wired into `next build` via `app/sitemap.ts`; Phase 25 live-QA sitemap
  constants synced (678 / 226). All 17 audits, 199 live QA checks,
  type-check, lint and build pass. Commit `5b135fa`.
