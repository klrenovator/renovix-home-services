# Phase 19 — Service + Sub-Service + Problem Page Completion

**Branch:** `arena/01a06ba3-renovix-home-services`
**Base:** Phase 18 repository state (pricing/data-integrity fixes preserved — not undone).
**Status:** Architecture shipped & verified (build/type-check/lint/all audits green). Content authored for a
first batch of standalone sub-services across six service pillars; the remaining priced sub-services and the
new Problem-category pages are documented as the primary remaining work (see below).

The 10 main service pillars are preserved exactly (Tile & Tiling, Welding & Metal Works, Electrical, Painting,
Ceiling & Partition, General Renovation, Plumbing, Waterproofing, Flooring, Handyman). **No Carpentry pillar was
added.** Every page is single-language and generated separately for `/en-MY/`, `/ms-MY/` and `/zh-MY/`; there is
no combined-language page and no English fallback.

---

## 1. What was built

### 1.1 Typed sub-service registry (`data/sub-services/`)
A fully typed registry that models every standalone sub-service with:
- stable `slug`, parent `serviceSlug`
- optional `pricingId` pointing at the central pricing registry
- `standaloneSearchIntent` flag (guards against doorway/thin pages)
- `relatedProblems` (problem-guide slugs)
- **separately authored `en`, `ms`, `zh` copy blocks** (`name`, `h1`, `metaDescription`, `title`, `lead`,
  `suitableFor`, `includes`, `excludes`, optional `costFactors`, `materials`, `process`, `faqs`)

Because `en`, `ms` and `zh` are all required fields on `SubServiceDefinition`, a sub-service can never be
published to a language it has not been genuinely translated into — a missing block is a **type error**, not a
runtime English fallback.

Files: `data/sub-services/types.ts`, `index.ts`, `content/{handyman,plumbing,tiling,welding,electrical,waterproofing}.ts`.

### 1.2 Routing + rendering
- New dynamic route `app/[lang]/services/[category]/[subService]/page.tsx` with `generateStaticParams` emitting one
  route per language per authored sub-service.
- `components/service/SubServicePage.tsx` — genuine, localized page sections (breadcrumb, H1, lead, “when it is
  the right choice”, includes/excludes, price guidance box, cost factors, materials, process, FAQs, related
  problems, related projects, sibling sub-services, back-to-service link, service areas, CTA/WhatsApp).
- `components/service/SubServiceJsonLd.tsx` — WebPage + BreadcrumbList + **Service node with an Offer carrying a
  `PriceSpecification` whose numbers are pulled from the pricing registry** (never re-authored) + FAQPage.

### 1.3 Pricing integrity (Phase 18 preserved)
Every number shown on a sub-service page comes from `data/pricing/pricing.ts` through `pricingId`. Unit labels,
ranges and starting prices are language-neutral numbers taken from the registry; only wording is localized. No
contradictory price is hard-coded in page copy or JSON-LD.

### 1.4 Service → Sub-service → Project internal linking
- `components/service/ServiceProjectsSection.tsx` (`ServiceSubLinksSection`) now renders on every service page:
  - **Service → Project** contextual “See our {service} project work” links using only *published* projects that
    genuinely map to that service category (the Phase 17 reverse-linking gap).
  - **Service → Sub-service** quick links to that service’s authored standalone sub-service pages.
- Sub-service pages reverse-link to their parent service, sibling sub-services, related problem guides, related
  projects, locations and the quote flow.

### 1.5 Sitemap + hreflang + canonical
`app/sitemap.ts` now enumerates each published sub-service route per language (with correct `priority`) and
`isPublished` recognises the two-level `/services/{category}/{sub}/` path so hreflang alternates and the language
switcher stay correct. Every sub-service page sets its own localized `canonical`, localized `hreflang` set and
localized metadata through `buildPageMetadata`.

### 1.6 Dictionary
A small `subServicePage` block was added to `i18n/{types,en,ms,zh}.ts` (all four stay in sync by typing), keeping
every visible sub-service-page chrome string localized — including Simplified Chinese, which never sees an
English fallback.

### 1.7 Audit
`scripts/audit-subservices.mjs` (`npm run audit:subservices`):
- lists the 51 priced sub-services from `pricing.ts` and reports which already have a standalone page;
- checks authored slugs are unique, belong to one of the 10 services, reference a real `pricingId`, and carry all
  three language blocks.

---

## 2. Pages created by language

Authored standalone sub-service pages (each generated in **en-MY, ms-MY and zh-MY** = 3 routes each):

| Service | Sub-service slug | EN | MS | ZH |
|---|---|---|---|---|
| Handyman | hourly-service | ✔ | ✔ | ✔ |
| Handyman | door-repair | ✔ | ✔ | ✔ |
| Handyman | mounting-installation | ✔ | ✔ | ✔ |
| Handyman | grout-silicone | ✔ | ✔ | ✔ |
| Handyman | minor-repairs | ✔ | ✔ | ✔ |
| Plumbing | pipe-leak-repair | ✔ | ✔ | ✔ |
| Tiling | floor-tile-installation | ✔ | ✔ | ✔ |
| Welding & Metal Works | window-grille | ✔ | ✔ | ✔ |
| Electrical | socket-installation | ✔ | ✔ | ✔ |
| Waterproofing | bathroom-waterproofing | ✔ | ✔ | ✔ |

**Total authored sub-services: 10 → 30 language routes.**

Existing pages (10 service pages, 46 problem pages, areas, projects, quote, etc.) remain intact and continue to
generate in all three languages.

---

## 3. Sub-services not yet published (registered targets)

The registry architecture supports all **51 priced sub-services**; the audit lists every priced scope that still
needs an authored, 3-language page. Because the phase explicitly forbids thin / doorway / AI-spun pages, those
remaining scopes were **not** faked into existence this pass — each needs genuine localized copy before it is
added to `data/sub-services/content/{service}.ts` (and then it is routed + sitemapped automatically):

- Plumbing: callout-inspection, concealed-leak-repair, tap-replacement, toilet-repair, drain-unblock,
  water-heater-installation
- Waterproofing: pu-injection, flat-roof-waterproofing, balcony-waterproofing, wall-seepage
- Tiling: porcelain-tile-installation, bathroom-tiling, tile-repair, tile-hacking
- Painting: interior-painting, exterior-painting, full-house-painting, wall-repair-painting
- Electrical: lighting-point, fan-installation, db-box, full-house-wiring, troubleshooting
- Flooring: spc-flooring, vinyl-flooring, laminate-flooring, floor-hacking, floor-repair
- Ceiling & Partition: flat-plaster-ceiling, l-box-ceiling, drywall-partition, ceiling-repair
- Welding & Metal Works: main-gate, welding-repair, railing-fencing, awning-structure
- General Renovation: minor-refresh, mid-range-renovation, kitchen-renovation, bathroom-renovation,
  house-extension

Run `npm run audit:subservices` to see the live list.

---

## 4. Remaining work — new Problem pages (not completed this pass)

The existing 46 problem pages are intact. Phase 19 asks for genuinely useful, fully localized (EN/MS/ZH) problem
pages in **Welding**, **Flooring** and **General Renovation** (e.g. rusted gate, swollen floor, SPC/vinyl lifting,
squeaky floor, renovation hacking, condo approval, kitchen/bathroom remodel). Each requires authoring a full
`ProblemDetail` in English plus a complete `ProblemTranslation` in `ms` and `zh`, and synchronising:
`data/problem-content/types.ts` (category union), `data/problem-content/index.ts` (category list + registry),
`data/problem-content/{welding,flooring,general-renovation}.ts`, the `ms/` & `zh/` translation modules and their
`index.ts`, `data/i18n/lists.ts` (category + card labels), and `i18n/coverage.ts` (`ALL_PROBLEMS` + per-language
arrays). This was intentionally left as follow-up rather than shipped half-authored, because the phase’s own rules
(no thin pages, no English leakage under `/ms/`/`/zh/`) take precedence over page count.

---

## 5. Verification

Run: `npm run type-check` — **PASS**
Run: `npm run lint` — **PASS**
Run: `npm run build` — **PASS** (30 new sub-service routes prerender; sitemap coverage guard passes)
Run: `npm run audit:subservices` — **PASS** (10 authored, all 3-language; 51 priced targets reported)
Run: `npm run audit:pricing`, `audit:business`, `audit:locations` — **PASS** (no regressions)

## 6. Files changed (summary)

- `data/sub-services/` — new (types, index, 6 content files)
- `app/[lang]/services/[category]/[subService]/page.tsx` — new route
- `components/service/SubServicePage.tsx`, `SubServiceJsonLd.tsx`, `ServiceProjectsSection.tsx` — new
- `components/service/ServicePage.tsx` — wiring of Service→Project/Sub-service links
- `app/sitemap.ts` — sub-service sitemap + hreflang parity
- `i18n/{types,en,ms,zh}.ts` — `subServicePage` dictionary block
- `scripts/audit-subservices.mjs` + `package.json` script — new audit
- `PHASE_19_AUDIT_REPORT.md` — this report
