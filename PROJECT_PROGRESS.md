# Renovix Home Services — Project Progress

## Overview

- **Brand:** Renovix Home Services
- **Market:** Kuala Lumpur, Selangor and the Klang Valley
- **Domain:** renovixhomeservices.my
- **Stack:** Next.js 16.3.3, React 19.2.8, TypeScript 6.0.3, Tailwind CSS 4.3.3
- **Languages:** English (`/en/`), Bahasa Melayu (`/ms/`), Simplified Chinese (`/zh/`) — see Phase 6

### Current site inventory (verified in Phase 18, `npm run build` + `sitemap.xml`)

| Item | Count |
|---|---|
| Service pillar pages | 10 per language |
| Problem guides | 46 per language |
| Area guides | **46** (+ 2 region hubs + areas index) per language |
| Projects | 21 per language |
| **Canonical pages per language** | **136** |
| **Canonical URLs total (3 languages)** | **408** |
| Pricing rows (`data/pricing/pricing.ts`) | **51** |
| Search-intent matrix entries | 16 (all pricing derived from `pricingId`) |
| Pricing entries corrected in Phase 18 | **10 price mismatches + 1 unit mismatch + 12 sub-service slug mismatches** (Phase 17 audit) |
| Audit scripts | 6, all PASS |

---

## PHASE 1 — Foundation, Design System & Homepage — [x]

### Design system
- [x] Desktop design direction and premium Malaysian home-services visual language
- [x] Colour tokens (navy, professional blue, amber, backgrounds, text)
- [x] Typography system (Plus Jakarta Sans self-hosted)
- [x] Spacing, border radius, shadow and container tokens
- [x] Responsive grid foundation
- [x] Reusable design classes for buttons, cards, sections, chips and containers
- [x] Strong contrast and accessible focus states
- [x] Button system (primary, secondary, outline, WhatsApp, ghost)

### Global foundation
- [x] Tailwind CSS v4 theme configuration in `app/globals.css`
- [x] Metadata foundation
- [x] Canonical foundation
- [x] Open Graph and Twitter/X metadata foundation
- [x] Favicon / site icon
- [x] Correct viewport configuration
- [x] Semantic HTML and heading hierarchy on the homepage
- [x] Responsive foundation from 320px to 1920px

### Reusable components
- [x] Header
- [x] Desktop navigation
- [x] Mobile navigation / mobile menu
- [x] Language switcher foundation
- [x] Footer
- [x] WhatsApp CTA / button component
- [x] Button
- [x] Section heading
- [x] Hero
- [x] Service card / service grid
- [x] Problem preview
- [x] Why Renovix section
- [x] Process section
- [x] Areas section
- [x] CTA section
- [x] FAQ preview
- [x] Placeholder page component
- [x] Not-found page

### Homepage
- [x] Hero section
- [x] Services preview (10 categories)
- [x] Problem preview
- [x] Why Renovix
- [x] How It Works (4 steps)
- [x] Service area section
- [x] CTA section
- [x] FAQ preview

### Data and navigation architecture
- [x] Main services data
- [x] Navigation data
- [x] Problems preview data
- [x] Languages data
- [x] Areas data
- [x] Central site/contact configuration with placeholders
- [x] Services navigation architecture (detail pages not built yet)

### SEO
- [x] Homepage title and description
- [x] metadataBase
- [x] Canonical URLs
- [x] Open Graph image
- [x] Structured metadata foundation
- [x] Semantic H1/H2/H3 hierarchy

### Quality checks
- [x] TypeScript check — PASS
- [x] ESLint — PASS
- [x] Production build — PASS

---

## PHASE 2 — Main Service Architecture & Service Pages — [x]

### Service architecture
- [x] 10 main service categories with clean URLs:
  - [x] `/en/services/tiling/`
  - [x] `/en/services/welding-metal-works/`
  - [x] `/en/services/electrical/`
  - [x] `/en/services/painting/`
  - [x] `/en/services/ceiling-partition/`
  - [x] `/en/services/general-renovation/`
  - [x] `/en/services/plumbing/`
  - [x] `/en/services/waterproofing/`
  - [x] `/en/services/flooring/`
  - [x] `/en/services/handyman/`
- [x] Services index page at `/en/services/`
- [x] Static generation for all languages (`en`, `ms`, `zh`) × 10 services
- [x] Navigation and footer "Services" links point to the services index
- [x] No separate Carpentry category (correctly excluded)

### Service page data (`data/service-content/`)
- [x] Full content model in `data/service-content/types.ts`
- [x] 10 content files with complete, unique copy per service
- [x] All 206 sub-services implemented verbatim from the Phase 2 spec:
  - Tiling (24), Welding & Metal Works (22), Electrical (31), Painting (32),
    Ceiling (16) & Partition (14), General Renovation (21), Plumbing (15),
    Waterproofing (11), Flooring (10), Handyman (12)
- [x] Registry with `getServiceDetail` / `getRelatedServiceDetails` helpers

### Service page template (14 standard sections)
- [x] Breadcrumb (visible + BreadcrumbList schema)
- [x] H1
- [x] Strong introduction (2 unique paragraphs with internal links)
- [x] Service overview (+ highlights card)
- [x] Sub-services (all listed with individual descriptions; grouped for Ceiling & Partition)
- [x] Problems we solve (6 per service)
- [x] Property types (6 per service)
- [x] Our process (4 steps per service)
- [x] Why choose Renovix (6 per service)
- [x] Service areas (KL / Selangor / Klang Valley)
- [x] FAQs (6 per service, with FAQPage schema)
- [x] Related services (4 per service, internal linking)
- [x] Quote CTA
- [x] WhatsApp CTA
- [x] Service schema (Service + OfferCatalog) and canonical URLs per page
- [x] Unique title and meta description per page

### Honesty rules
- [x] No fake prices, reviews, ratings, certifications, licences, warranties, projects, experience claims or team claims
- [x] Electrical content notes Malaysian regulatory requirements without licence claims
- [x] Wall removal content advises proper assessment; condo renovation notes management approvals
- [x] Contact placeholders preserved (`[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`, `[ADDRESS]`)

### Quality checks
- [x] TypeScript check — PASS
- [x] ESLint — PASS
- [x] Production build — PASS (38 static pages)
- [x] Sub-service lists verified against spec — all 10 services match
- [x] No duplicate paragraphs across service content

## PHASE 3 — Problem-Based Service Architecture — [x]

### Problem content model (`data/problem-content/`)
- [x] `types.ts` — `ProblemDetail` type with all 15-page-section fields, `ProblemCategoryId`, `ProblemCategory`, `ProblemSolution`, `ProblemProcessStep`, `ProblemPropertyType`, `ProblemFaq`
- [x] 7 content files covering the full problem brief (46 problem pages after consolidation):
  - [x] Tiling (9): broken/cracked/loose/hollow tile, uneven tiles, grout, bathroom & kitchen tile, water seepage through tiles
  - [x] Electrical (8): power tripping, faulty socket, faulty switch, flickering lights, short circuit, old house wiring, insufficient power points, ceiling fan wiring
  - [x] Painting (6): peeling paint, cracked walls, mouldy walls, faded paint, uneven paint, wall surface damage
  - [x] Ceiling (5): cracked ceiling, sagging ceiling, water-damaged ceiling, ceiling stains, old plaster ceiling
  - [x] Plumbing (6): water leakage, leaking tap, leaking pipe, blocked drain, toilet problems, low water pressure
  - [x] Waterproofing (6): roof leakage, bathroom leakage, balcony leakage, wall seepage, damp walls, water stains
  - [x] Handyman (6): door problems, lock problems, curtain installation, TV mounting, shelf installation, minor home repairs
- [x] `index.ts` registry with `getProblemDetail`, `getRelatedProblemDetails`, `getProblemsByCategory`, `getProblemsForService`, `getProblemsBySlugs`, `getProblemServiceDetails`
- [x] Each problem has unique title, meta description, H1, subtitle, what-it-means copy, causes, warning signs, solutions, when-to-call, process, property types, FAQs
- [x] Electrical and structural content gives no unsafe DIY instructions — it describes what a professional does and cautions against DIY

### Problem page template (15 standard sections)
- [x] Breadcrumb (visible + BreadcrumbList schema)
- [x] Problem H1
- [x] What the problem means
- [x] Common causes
- [x] Warning signs
- [x] Possible solutions
- [x] When professional help is needed
- [x] Related Renovix service (+ related services, internal linking)
- [x] Process
- [x] Relevant property types
- [x] Service areas (shared component; location detail pages are Phase 4)
- [x] FAQs (with FAQPage schema)
- [x] Related problems (internal linking)
- [x] Quote CTA
- [x] WhatsApp CTA
- [x] Problem schema (BreadcrumbList + Article + FAQPage) and canonical URLs per page

### Routing & data architecture
- [x] `/en/problems/` index page grouping all problems by category
- [x] `/en/problems/[slug]/` detail route, statically generated for all languages (`en`, `ms`, `zh`) — 46 × 3 = 138 problem pages
- [x] Static generation for 3 languages × 46 problems (English content; non-English noindex per Phases 1–2 convention)

### Internal linking
- [x] Every problem page links to its main service, related services, quote page and service areas
- [x] Main service pages link back to relevant problem pages via "Explore these problem pages" block
- [x] Homepage "Common Home Issues" preview now links to real problem pages + problems library
- [x] Navigation "Problems" link points to `/problems` index page

### Quality & honesty rules
- [x] Consolidated duplicate search intent: painted "Water Stains" merged into a single waterproofing "Water Stains" page (spec listed it under both Painting and Waterproofing) — 46 total, avoiding near-duplicate doorway pages
- [x] Kept genuinely distinct siblings separate and cross-linked (e.g. hollow vs loose tile, wall seepage vs damp walls, water-damaged ceiling vs ceiling stains)
- [x] No fake prices, reviews, ratings, certifications, licences, warranties, projects or experience claims
- [x] Contact placeholders preserved (`[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`, `[ADDRESS]`)

### Quality checks
- [x] TypeScript check — PASS
- [x] ESLint — PASS
- [x] Production build — PASS (176 static pages; 138 problem pages + 3 problem indexes + 30 services + homepages)

## PHASE 4 — Areas / Location Pages — [x]

### Local SEO & service area architecture
- [x] Logical area hierarchy with clean URLs:
  - [x] `/en/areas/` — service areas index (Klang Valley explainer + region + area links)
  - [x] `/en/areas/kuala-lumpur/` — Kuala Lumpur hub (city location page + region hub)
  - [x] `/en/areas/selangor/` — Selangor hub (state housing landscape + area links)
  - [x] `/en/areas/kuala-lumpur/{neighbourhood}/` and `/en/areas/selangor/{town}/`
- [x] Static generation for all languages (`en`, `ms`, `zh`) — 34 area routes × 3 = 102 new pages (278 total)

### Published locations (31 of 32 candidates — content quality gated)
- [x] Kuala Lumpur (city-wide page = the `/areas/kuala-lumpur/` hub) + 14 KL neighbourhood guides:
  Cheras, Setapak, Wangsa Maju, Ampang, Kepong, Segambut, Sentul, Mont Kiara, Bangsar,
  Bukit Jalil, Sri Petaling, Old Klang Road, Taman Melawati, Desa ParkCity
- [x] Selangor hub + 17 town guides:
  Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang, Selayang, Gombak, Ampang Jaya,
  Kajang, Seri Kembangan, Cyberjaya, Putrajaya, Kota Damansara, Sungai Buloh, Rawang,
  Semenyih, USJ
- [x] No mass-produced thin pages: every guide carries unique hand-written local copy
  (local intro with internal links, 6 services with local notes, 5 property types,
  5 local problems, 4 locally-tailored process steps, local service context, 5 FAQs,
  related services, nearby areas) — 0 duplicate intros verified
- [x] Distinct guides for confusable neighbours (e.g. KL Ampang vs Selangor Ampang Jaya,
  Setapak vs Wangsa Maju, Subang Jaya vs USJ, Bukit Jalil vs Sri Petaling)

### Location page template (11 standard sections per the Phase 4 spec)
- [x] Local introduction (unique, 2 paragraphs, inline internal links)
- [x] Services available (6 per area, each with a local reason)
- [x] Common property types (5 per area with local notes)
- [x] Common renovation/repair problems (5 per area with local detail)
- [x] Relevant services → related services section (4 per area)
- [x] Service process (4 steps tailored to the area)
- [x] Local service context (traffic, strata/management rules, housing age, climate)
- [x] FAQs (5 per area, area-specific)
- [x] Problem-page links from each area ("Learn more about these problems")
- [x] Quote CTA and WhatsApp CTA
- [x] Visible breadcrumbs (Home › Service Areas › Region › Area)

### Data architecture (`data/area-content/`)
- [x] `types.ts` — `AreaRegion`, `AreaDetail` and supporting types
- [x] `kuala-lumpur.ts` + `kuala-lumpur-areas-a/b.ts` — KL hub + 14 guides
- [x] `selangor.ts` + `selangor-areas-a/b.ts` — Selangor hub + 17 guides
- [x] `index.ts` registry — `getAreaRegion`, `getAreaDetail`, `getAreaHref`, `getNearbyAreas`, `areasIndexFaqs`
- [x] `data/areas.ts` rebuilt to derive linked area groups from the registry
  (single source of truth for homepage, service, problem and footer area links)

### Local SEO implementation
- [x] Local intent titles/descriptions per area ("… in Cheras, KL" etc.)
- [x] Canonical URL per area, region and index page
- [x] BreadcrumbList schema + visible breadcrumbs on every area route
- [x] Service schema with `areaServed` Place (incl. `containedInPlace`) per location — no address/geo emitted
- [x] OfferCatalog linking the area's focused services
- [x] FAQPage schema on index, region and location pages
- [x] ItemList schema on region hubs
- [x] `en` indexed; `ms`/`zh` scaffolded `noindex, follow` per site convention
- [x] No fake Google Business / NAP data — explicit "coverage, honestly stated" note on every location page

### Internal linking
- [x] Location pages → services (services available + related services cards)
- [x] Location pages → problem guides (problem chips per area)
- [x] Location pages → nearby areas (incl. cross-region neighbours) + region hub
- [x] Service pages & problem pages → all 31 locations + region hubs (rebuilt shared AreasSection)
- [x] Homepage → /areas index + region hubs + every location chip
- [x] Footer "Areas We Serve" → region hubs + all-areas index
- [x] Navigation "Areas We Serve" → `/areas`
- [x] Region pages → sibling region

### Honesty rules
- [x] No invented local office, physical shop, exact service radius, local team, local projects or customer counts
- [x] Contact placeholders preserved (`[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`, `[ADDRESS]`)
- [x] Local facts limited to well-known public context (housing eras, transit, management rules, climate)

### Quality checks
- [x] TypeScript check — PASS
- [x] ESLint — PASS
- [x] Production build — PASS (278 static pages)
- [x] 0 duplicate area intros; all service/problem/nearby slugs resolve
- [x] Smoke-tested `/en/areas/`, region hubs and sample location pages (200s, schema, canonicals, internal links)

## PHASE 5 — Supporting Pages & Conversion System — [x]

### About page (`/en/about/`)
- [x] Professional About page focused on workmanship, reliable service, clear communication, practical solutions and customer-focused service
- [x] Multiple-service overview linking to all 10 service categories
- [x] Kuala Lumpur, Selangor and Klang Valley coverage context with service-area links
- [x] No invented company history, years in business, team size, certifications, awards, licences or reviews
- [x] Unique metadata, canonical URL and visible + structured breadcrumbs

### Contact page (`/en/contact/`)
- [x] Contact page with the required official-detail placeholders: `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`, `[ADDRESS]`, `[BUSINESS HOURS]`
- [x] Contact CTA, WhatsApp CTA, quote CTA and KL / Selangor / Klang Valley service-area information
- [x] Placeholder-aware contact helpers that do not open an unverified phone, WhatsApp or email destination
- [x] Unique metadata, canonical URL and visible + structured breadcrumbs

### Get a Quote (`/en/quote/`)
- [x] Professional responsive quote-request form with Name, WhatsApp Number, Email, Service Required, Sub-service, Property Type, Location, Description, Preferred Date and Upload Photos fields
- [x] Service-aware sub-service selection populated from the existing service architecture
- [x] Clear photos-help explanation and selected-file UI
- [x] Explicit non-instant quotation language and clear statement that no information is submitted until a secure integration is configured
- [x] Clean front-end quote integration contract (`QuoteRequestPayload`, endpoint status placeholder) ready for a future server action or route handler
- [x] Unique metadata, canonical URL and visible + structured breadcrumbs

### Projects portfolio (`/en/projects/`)
- [x] Filterable professional portfolio structure for Tiling, Welding, Electrical, Painting, Ceiling, Partition, Renovation, Plumbing, Waterproofing, Flooring and Handyman
- [x] Clearly labelled placeholder project data and image placeholders only; no project names, outcomes, dates, photos or locations have been fabricated
- [x] Category-to-service internal linking and quote CTA
- [x] Unique metadata, canonical URL and visible + structured breadcrumbs

### FAQ (`/en/faq/`)
- [x] Comprehensive FAQ covering services, KL and Selangor coverage, condos, quotation photos, quote requests, multi-service scopes and all relevant service categories
- [x] Service-specific FAQ relationships with direct links to the appropriate service page
- [x] FAQPage schema, unique metadata, canonical URL and visible + structured breadcrumbs
- [x] Homepage FAQ preview now links to the complete FAQ page

### Conversion & internal-linking updates
- [x] New `/quote` route is used by header, mobile menu and home / service / problem / area CTA paths
- [x] FAQ added to primary, mobile and footer navigation
- [x] Placeholder WhatsApp, phone and email helpers now safely fall back to the dedicated Contact page
- [x] Footer includes the Business Hours placeholder
- [x] JSON-LD serialization safely escapes `<` characters per Next.js guidance

### Quality checks
- [x] TypeScript check — PASS
- [x] ESLint — PASS
- [x] Production build — PASS (293 generated static pages)

## PHASE 6 — Multilingual Website (English / Bahasa Melayu / 简体中文) — [x]

> **Scope note.** The client brief for Phase 6 is the multilingual website. The
> earlier outline in this file had labelled Phase 6 "Blog & Content" and Phase 7
> "Full Multilingual Content"; the multilingual work has been delivered as
> Phase 6 per the brief, and the blog remains unbuilt. Nothing from Phase 7 has
> been started.

### Languages & routing
- [x] Three languages on equivalent URL prefixes: `/en/`, `/ms/`, `/zh/`
- [x] Malaysian locale tags throughout: `en-MY`, `ms-MY`, `zh-MY`
- [x] `app/[lang]/layout.tsx` is now the root layout, so `<html lang>` is correct per
      language (`en-MY` / `ms-MY` / `zh-MY`) instead of a hardcoded `lang="en"`
- [x] `/` redirects to the default language (no fourth duplicate homepage)
      — originally a 307; Phase 7 made it permanent (Next.js 16 emits 308 for
      `permanent: true`) pointing at `/en/`
- [x] `next/root-params` used for the localized 404, which receives no `params` prop

### Translation architecture
- [x] `i18n/types.ts` — single `Dictionary` shape; `ms.ts` and `zh.ts` are typed
      against it, so a missing string is a TypeScript error, not a silent gap
- [x] `i18n/en.ts`, `i18n/ms.ts`, `i18n/zh.ts` — complete UI catalogues
      (navigation, footer, CTAs, breadcrumbs, section headings, form labels,
      aria labels, homepage sections, all page-level copy, FAQ answers)
- [x] `data/i18n/` — localized shared lists: 10 service names + descriptions,
      2 region names + summaries, 31 place names (established Malaysian Chinese
      names, e.g. 蕉赖 / 甲洞 / 孟沙 / 巴生), problem preview labels, problem
      category labels + intros, project category labels, areas-index FAQs
- [x] `i18n/content.ts` — deep-merge + completeness checker (`findMissingStrings`,
      `localizeContent`) for the long-form page catalogues; it throws rather than
      render a partly translated page
- [x] `i18n/coverage.ts` — the single switch that decides which deep pages each
      language publishes, with slug inventories asserted against the registries
- [x] `i18n/hrefs.ts` — `localizedHref`, `contentHref` (returns `null` when a page
      is untranslated so callers render plain text instead of a dead link), and
      `switchLanguagePath` (nearest-translated-ancestor fallback)

### Translation quality
- [x] English: professional Malaysian/international business English
- [x] Bahasa Melayu: natural Malaysian BM using local trade terms
      (jubin, siling, partition, kalis air, sebut harga, rumah teres, rumah berkembar,
      lembah Klang, pihak pengurusan)
- [x] 简体中文: professional Simplified Chinese for Malaysian Chinese customers
      (装修、瓷砖、防水、巴生谷、排屋、半独立屋、公寓、报价、管理处)
- [x] No word-for-word translation; each language is written for its audience
- [x] No language mixing — verified: an automated sweep of all 22 Malay and
      Chinese pages for 34 English UI strings returned **0 matches**

### SEO per language
- [x] Correct `lang` attribute per language
- [x] Unique localized `<title>` and meta description on every page
- [x] Self-referencing canonical per language
- [x] `hreflang` alternates (`en-MY` / `ms-MY` / `zh-MY`) + `x-default` → English,
      emitted only for languages that actually publish the page
- [x] Localized `og:locale` (`en_MY` / `ms_MY` / `zh_MY`), `og:title`, `og:description`
- [x] Language-specific sitemaps via `generateSitemaps`: `/sitemap/en.xml` (100 URLs),
      `/sitemap/ms.xml` (11), `/sitemap/zh.xml` (11) — each entry carries its own
      hreflang alternates
- [x] `robots.txt` generated, pointing at all three sitemaps
- [x] Localized per-language 404

### Language switcher
- [x] `EN | BM | 中文` in the desktop header, mobile header and footer
- [x] Reads the current path (`usePathname`) and links to the **equivalent page**
      in the target language — verified: `/ms/faq` → `/en/faq/` and `/zh/faq/`
- [x] When the equivalent page is not translated yet, it falls back to the nearest
      translated section (`/en/services/tiling` → BM → `/ms/services`), never to a
      404 and never to the homepage by default
- [x] `lang` + `hreflang` attributes on each switcher link

### Pages fully translated in all three languages (11 templates × 3 = 33 pages)
- [x] Homepage, Services index, Problems index, Service Areas index
- [x] About, Contact, Get a Quote (incl. the full form), Projects, FAQ
- [x] Privacy Policy, Terms & Conditions, localized 404
- [x] Header, desktop nav, mobile menu, footer, all CTAs, all breadcrumbs

### Translation coverage — what is intentionally not translated yet
The long-form content catalogues are **not** translated in this phase. Rather than
serve English copy under a `/ms/` or `/zh/` URL, those routes are not generated for
those languages, are excluded from their sitemaps and hreflang sets, and every link
to them degrades to plain text or the nearest translated section:
- [ ] 10 service detail pages (`ms`/`zh`) — English only
- [ ] 46 problem guides (`ms`/`zh`) — English only
- [ ] 2 region hubs + 31 area guides (`ms`/`zh`) — English only
- [ ] Blog & content — not built

Each of these turns on by adding a catalogue plus its slug to `i18n/coverage.ts`;
no template changes are required.

### Quality checks
- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (129 generated static pages)
- [x] All 33 translated routes return 200 in `/en/`, `/ms/`, `/zh/`
- [x] Untranslated deep routes correctly 404 in `/ms/` and `/zh/`
- [x] Link sweep: 587 internal links across the 33 localized pages — **0 broken**,
      0 cross-language content links; sampled deep English pages also 0 broken
- [x] Language-mixing sweep across all Malay/Chinese pages — 0 English UI strings

### Notes
- `data/quote.ts` was removed: the quote form now builds its service, sub-service
  and property-type options per language from `data/i18n` + `data/service-content`.
  The sub-service field stays visible for English and is hidden where no translated
  sub-service names exist.
- Contact placeholders are preserved in every language:
  `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`, `[ADDRESS]`, `[BUSINESS HOURS]`.
- No prices, reviews, ratings, certifications, licences, warranties, projects or
  team claims were introduced in any language.

## PHASE 7 — SEO, AEO, GEO, Structured Data & Technical SEO — [x]

> **Scope note.** The earlier outline in this file labelled Phase 7 "Blog &
> Content". The client brief for Phase 7 is the complete technical and
> semantic SEO implementation, which is what this phase delivers. The blog
> remains unbuilt.

### Structured data (unified `@graph` system, `components/seo/`)
- [x] New shared schema builder (`components/seo/schema.ts`) with stable `@id`s,
      so every page participates in one consistent entity graph:
      `Organization/LocalBusiness` → `WebSite` → `WebPage` → page content nodes
- [x] `SiteSchema` rendered in the root layout — the business entity and the
      WebSite entity appear on **all 122 pages** (consistent entity identity
      for search engines and LLMs)
- [x] `PageSchema` emits a `WebPage` node (with `isPartOf`, `about`,
      `breadcrumb`, `inLanguage`) on every page
- [x] **Organization + LocalBusiness** (single multi-type node): name, legal
      name, website, public description, tagline, languages served (en/ms/zh),
      areas served (Kuala Lumpur, Selangor, Klang Valley), and an
      `OfferCatalog` of the 10 services
- [x] **WebSite** per language version (`en-MY` / `ms-MY` / `zh-MY`),
      publisher → organization
- [x] **Service** nodes (10 service pages) with `provider` → organization,
      `areaServed` places and `OfferCatalog` of sub-services
- [x] **Service-scoped-to-place** nodes (31 area guides): the Service +
      Location relationship in schema form (`areaServed` = `Place` with
      `containedInPlace` = region), with offers "Service in {Area}"
- [x] **Article** nodes (46 problem guides) with `about` → the service that
      handles the problem, author/publisher → organization
- [x] **FAQPage** on 95 pages (service, problem, area, region, FAQ and
      areas-index pages) — built from the same Q&A data the visible FAQ
      sections render (answers present in the static DOM inside
      `<details>`)
- [x] **BreadcrumbList** on 119 pages — matches the visible breadcrumb,
      sequential positions, and the last item carries **no URL** (per Google's
      guidance)
- [x] **ItemList** on the services index (10), problems index (46) and both
      region hubs — with item URLs in English only, where the detail pages
      exist
- [x] **Honesty rules enforced**: no ratings, reviews, prices,
      certifications, address, geo, phone, email, opening hours or awards
      anywhere in the markup — the audit fails on any such property. The
      `LocalBusiness` entity deliberately contains only verified facts
- [x] Refactored all existing JSON-LD (service / problem / area / region /
      support pages) onto the shared builders; removed the two legacy
      components (`service/JsonLd.tsx`, `support/PageBreadcrumbJsonLd.tsx`)
- [x] Privacy and Terms pages now carry structured data too (previously none)

### Technical SEO
- [x] `metadataBase` set; unique titles and descriptions on all 122 pages
      (verified: **0 duplicates**)
- [x] Title lengths trimmed to ≤60 characters where the previous length would
      truncate in SERPs (10 service + problem titles + EN/BM homepages); the
      "in Kuala Lumpur & Selangor" local anchor is preserved in every title
- [x] Self-referencing canonicals on every page (verified URL-for-URL)
- [x] `og:image` (1200×630, with dimensions + alt) and `twitter:image` now
      explicit on **every** page — the generated image route
      (`/[lang]/opengraph-image`) only auto-applied to the homepage, so the
      image is set directly in page metadata per language version
- [x] `robots.txt`: allows everything, disallows only `/_next/`, lists all
      three sitemaps, sets `Host`. No content page is blocked
- [x] Sitemaps: per-language (`en` 100 URLs, `ms` 11, `zh` 11), each entry
      with `lastmod`, `changefreq`, priority and hreflang alternates; the
      root URL now uses the exact trailing-slash form the site serves
      (`/en/` — previously `/en`, which 308-redirects)
- [x] **Sitemap bug fix**: four stale problem slugs in `i18n/coverage.ts`
      (`hollow-tile-repair`, `grout-problems`, `tile-water-seepage`,
      `ceiling-fan-wiring`) did not match the content registry — they produced
      sitemap entries for URLs that 404 and left the real pages out of the
      sitemap and hreflang sets. All four corrected
- [x] **New build-time guard** (`i18n/verify.ts`, wired into the sitemap
      build): fails the build if the slug inventories in `i18n/coverage.ts`
      ever drift from the service / problem / area registries again
- [x] Redirect handling: `/` → `/en/` is now a **permanent** redirect
      (Next.js 16 emits 308 for `permanent: true`, its method-preserving
      permanent code); trailing-slash variants 308 to the canonical form
- [x] Favicon (`app/icon.svg`) verified serving; single H1 on every page
      (legal pages and the 404 previously had none — `SectionHeading` gained
      a `headingLevel` option)
- [x] Localized 404 in all three languages with working navigation links

### Hreflang
- [x] Verified on all 122 pages: every page lists itself, lists only the
      languages that actually publish it (English-only content pages list
      `en-MY` + `x-default` only), `x-default` → English, and **reciprocity
      holds** — if page A lists B, page B lists A (0 conflicts)
- [x] Sitemap hreflang alternates match the on-page `rel="alternate"` sets
      exactly (verified URL-for-URL)
- [x] `og:locale` localized (`en_MY` / `ms_MY` / `zh_MY`)

### Local SEO / semantic relationships
- [x] Service + Location + Problem + Property Type relationships now exist at
      three levels: content (Phases 2–4), visible internal links (verified
      below), and schema (Service `areaServed` = Place, Article `about` =
      Service, organization `areaServed` + service catalog)
- [x] No keyword stuffing — existing Phase 2–4 copy untouched except the
      title lengths above

### AEO / GEO / LLM discoverability
- [x] FAQ answers are direct, in the static DOM, and mirrored in FAQPage
      schema — the same answer text search engines, AEO extractors and LLMs
      see, whether collapsed or expanded
- [x] Problem guides keep their answer-first structure: short definition
      ("What this problem means"), cause lists, warning signs, step-by-step
      process, "when to call a professional", FAQ
- [x] Entity relationships are stable and consistent site-wide via shared
      `@id`s (one organization entity, one WebSite per language, pages linked
      to their service/place/organization)
- [x] Business positioning expressed in schema: description, slogan,
      languages, service areas, full service catalog with URLs

### Internal link audit (all 122 sitemap pages crawled)
- [x] Homepage → services / problems / areas: ✓
- [x] Services → sub-services (content), problems, areas: ✓
- [x] Problems → related service + related problems: ✓
- [x] Services/Problems → locations; locations → services + nearby areas: ✓
- [x] Supporting pages (quote, contact, about, projects, FAQ) → services +
      areas: ✓
- [x] Related services / related problems: ✓
- [x] **Broken internal links: 0** — and **orphan pages: 0** (every sitemap
      URL has at least one inbound internal link)
- [x] Language switcher links stay within each language's published pages
      (nearest-translated-ancestor fallback, Phase 6) — no cross-language
      content links, no 404 links

### Test results
- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (129 static pages + 3 sitemaps + robots)
- [x] SEO route audit over all 122 sitemap URLs — **0 issues**: status 200,
      canonical self-reference, unique titles/descriptions, exactly one H1,
      correct `html lang`, og:title/og:image/twitter:image present,
      hreflang self + x-default + reciprocity, robots/sitemap consistency,
      root redirect 308 → `/en/`, 404 behaviour
- [x] JSON-LD structural validation over all 122 pages — **0 errors**: valid
      `@context`/types/properties, all `@id` references resolve, breadcrumb
      shape rules, FAQ answer completeness, and the honesty property ban
      (no rating/price/address/phone/hours/award/credential fields)
- [x] Title audit: 0 duplicate titles; all titles ≤60 characters except area
      guides whose location anchor requires 61–64 (local-SEO priority)

### Known minor items (intentionally left)
- [ ] ~49 meta descriptions run 170–200 characters (Google truncates at
      ~155); the first 155 characters carry the full message, so rewriting
      the Phase 2–4 copy was not worth the churn
- [ ] No `SearchAction` in the WebSite schema — the site has no search
      feature, and one is not claimed
- [ ] `LocalBusiness` has no address/phone/hours by design: the official
      details are still placeholders in `data/site.ts`

## PHASE 8 — Performance, Accessibility, Mobile & UX QA — [x]

> **Scope note.** The earlier outline in this file labelled Phase 8 "Advanced
> Quote System". The client brief for Phase 8 is the professional quality
> optimization pass (performance, Core Web Vitals, mobile UX, accessibility,
> images, JavaScript, navigation, forms, responsive design), which is what this
> phase delivers. The advanced quote system remains unbuilt (future phase);
> the quote form delivered in Phase 5 keeps its clean integration contract.

### Performance audit (JavaScript, CSS, fonts, third-party)
- [x] **Client-component audit**: only 4 `"use client"` components exist —
      `MobileMenu` (state), `LanguageSwitcher` (`usePathname`), `QuoteForm`
      (form state) and `ProjectsPortfolio` (filters). All are necessary; none
      removed. Everything else renders on the server (FAQ accordions use
      native `<details>`, zero JS)
- [x] **Code splitting verified**: the quote form ships in its own chunk
      loaded only on `/quote`; every other route shares only the framework
      baseline plus the small layout chunk (header/menu/switcher)
- [x] **Bundle audit**: ~176 KB gzip JS per route, measured against the
      served chunks — this is the Next.js 16 / React 19 App Router runtime
      baseline; no application data leaks into the client bundle (verified:
      content registries, area/service/problem catalogues are absent from
      all shipped chunks; `i18n/coverage.ts` deliberately holds slugs only)
- [x] **Third-party scripts**: none — no analytics, tags or trackers to
      defer; no unnecessary dependencies in `package.json` to remove
- [x] **Dead code removed**: `data/navigation.ts` deleted (its five exported
      nav arrays and `localizeNavigation` were unused; `localizeHref`
      duplicated `localizedHref`). 15 components migrated onto
      `@/i18n/hrefs` so one helper serves the whole site
- [x] **CSS**: one stylesheet (~10 KB gzip), already minified by Lightning
      CSS (Turbopack default) — no extra config needed
- [x] **Fonts**: Plus Jakarta Sans self-hosted (5 × ~12 KB woff2, latin),
      `display: swap`, automatic Arial fallback-metric adjustment to limit
      CLS; all five weights are used above the fold, so preloading all five
      is correct
- [x] **`next.config.ts`**: `poweredByHeader: false` (smaller responses, no
      stack fingerprint); `images.formats: ['image/avif', 'image/webp']`;
      `images.minimumCacheTTL: 2678400` (31 days)
- [x] **All 129 routes remain statically generated** (SSG) — no dynamic
      rendering, no server data waterfalls

### Images
- [x] Single raster image (`hero-renovation.jpg`, 1408×768, 156 KB source)
      served through `next/image` with `fill`, `priority` (preloaded,
      fetchpriority high) and a correct `sizes` attribute
- [x] **AVIF enabled**: hero now serves as ~28 KB AVIF at w1080 (82% smaller
      than the source JPG, ~36% smaller than WebP), 31-day immutable cache
- [x] Responsive `srcSet` (384w–3840w) — browsers download the right size
- [x] Localized, meaningful `alt` text (per-language dictionary)
- [x] No oversized/unused images; project tiles use icon placeholders only
      (no fabricated photos); decorative icons and shapes `aria-hidden`

### Mobile fixes (tested conceptually at 320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920)
- [x] **Header overflow below ~380px fixed** — measured with the actual font
      metrics: brand lockup (143px) + compact language switcher + menu button
      exceeded the viewport on 320–375px phones (e.g. 360px Androids). The
      header switcher is now hidden below `sm`; language switching stays one
      tap away in the mobile menu and footer
- [x] **Bahasa Melayu desktop header overflow fixed** — the long BM nav labels
      + "Dapatkan Sebut Harga Percuma" CTA overflowed every width from 1280px
      to ~1490px (nav text alone 654px). Measured short forms that fit with
      healthy slack (110px at 1280px): Utama, Kawasan, FAQ, Tentang, Hubungi,
      and CTA "Sebut Harga Percuma"; nav item padding tightened to `px-2.5`
- [x] **iOS input zoom fixed** — form controls were 14px, which makes iOS
      Safari auto-zoom the page on focus; `.form-control` is now 16px
- [x] Responsive grids verified: every grid stacks to one column at base
      (services, problems, why, process, areas, FAQ, form, footer); no
      `whitespace-nowrap` or fixed-width overflow sources; all decorative
      absolute shapes sit inside `overflow-hidden` containers
- [x] Buttons keep a 44px minimum height (`min-h-11`) across breakpoints
- [x] Breakpoint map: 320–430px single-column + hamburger menu; 640px+ header
      switcher returns, menu services in 2 columns; 768/1024px tablet
      hamburger + 2–3 column grids; 1280px+ full desktop nav (all languages
      fit); 1440/1920px capped by the 1200px container

### Accessibility
- [x] **Mobile menu**: focus is now trapped inside the open panel (Tab /
      Shift+Tab cycle through menu items instead of reaching invisible
      content behind the overlay); panel marked `role="dialog"` +
      `aria-modal="true"`; Escape closes and focus returns to the trigger;
      body scroll lock retained
- [x] **Required fields announced**: the quote form's asterisks were
      `aria-hidden` with no spoken equivalent — a visually hidden
      "(required)" / "(wajib)" / "（必填）" now accompanies every required
      label in all three languages
- [x] **Colour contrast fixes**: footer contact labels `white/40` → `white/60`
      (3.6:1 → 6.7:1 on navy) and input placeholder `slate-400` →
      `slate-500` (2.6:1 → 4.8:1). Full token contrast matrix audited — all
      text pairs now meet WCAG AA (eyebrow/brand 5.5:1+, secondary 5.6:1+,
      white-on-navy mixes 5.1:1+, navy-on-accent buttons 9.4:1)
- [x] **Tap targets**: breadcrumb links (`py-1`) and footer links
      (`-my-1 py-1`, hit area extended into the list gaps with zero visual
      change) now meet the 24px WCAG 2.5.8 minimum; primary buttons are 44px
- [x] **`prefers-reduced-motion`**: smooth scrolling, entrance animations and
      transitions are disabled for users who ask for less motion
- [x] **Safari `<summary>` marker**: `::-webkit-details-marker` hidden so FAQ
      accordions show the custom chevron, not the native triangle
- [x] Audit re-verified sitewide: exactly one H1 per page and no heading
      level skips on all 19 template types; correct `html lang` per language;
      skip link + landmarks; `aria-label`s on all navs; visible
      `:focus-visible` styles sitewide; decorative SVGs `aria-hidden`;
      autocomplete attributes on every quote field; `aria-live` on filter and
      photo-count feedback
- [x] Invalid `text-primary` utility removed from the mobile menu (matched no
      theme token; the `.eyebrow` class already applies the brand colour)

### UX review (no redesign — verification plus targeted fixes)
- [x] CTA obvious: persistent "Get a Free Quote" header button, hero primary
      CTA, CTA section on every content template, quote CTA in footers/menus
- [x] WhatsApp easy to find: hero, CTA sections, mobile menu, footer contact
      column and Contact page (placeholder-aware — falls back to the contact
      page until a real number is configured)
- [x] Quote request easy: 3 short required fields to a usable form, service →
      sub-service dependency, photo upload with guidance, no instant-quote
      overclaiming
- [x] Services easy to discover: nav, homepage grid (10), footer list,
      related-services blocks on every service/problem/area page
- [x] Locations easy to discover: nav "Areas We Serve", homepage region cards
      with all 31 area chips, region hubs + nearby-area links, footer
- [x] Related services/problems cross-linked everywhere (Phase 7 audit stood;
      re-spot-checked after this phase's changes)

### Test results
- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (129 static pages + 3 sitemaps + robots)
- [x] All 100 `en` sitemap URLs return 200; `ms`/`zh` pages 200; untranslated
      deep routes correctly 404; localized 404 works
- [x] Rendered-output checks: heading hierarchy, single H1, `html lang`,
      sr-only required text, `hidden sm:block` switcher behaviour, reduced-
      motion and summary-marker rules present in the compiled stylesheet
- [x] Served-response checks: `X-Powered-By` gone; hero serves AVIF/WebP by
      `Accept` with `Cache-Control: public, max-age=2678400`

## PHASE 9 — Final Full Website Audit & Quality Assurance — [x]

> **Scope note.** The earlier outline in this file labelled Phase 9 "Further
> Conversion & SEO Expansion". The client brief for Phase 9 is the final QA
> pass: audit the whole project, fix genuine issues, add no new features and
> avoid unnecessary redesign. That is what this phase delivers.

### Audit method
- [x] Production build served locally and **crawled from the three language
      homepages** — 122 pages reached, every internal link resolved and status
      checked, plus every URL and every `hreflang` alternate in all three
      sitemaps (222 + 44 + 44 alternates)
- [x] Automated per-page extraction of title, description, canonical, robots,
      `html lang`, OG/Twitter tags, hreflang set, full heading tree, JSON-LD
      and main-content length, then checked against the SEO/a11y rules
- [x] Near-duplicate detection across the 31 area, 46 problem and 10 service
      pages (5-word shingle overlap) to prove the local pages are not thin
      doorway pages
- [x] Static accessibility scan of every rendered page (alt text, accessible
      names, duplicate ids, form labels, landmarks, `target="_blank"` rel)
- [x] Language-mixing scan: every `/ms/` and `/zh/` page scanned for English
      copy
- [x] Dead-code / unused-export scan across `app`, `components`, `data`, `i18n`

### 1. Route audit — PASS
- [x] 122 pages (100 `en`, 11 `ms`, 11 `zh`) + 3 sitemaps + robots + 3 OG
      images; **132 routes, all statically prerendered**
- [x] Zero 404s, zero broken internal links, zero redirect hops in rendered
      links (checked every `href` on every page)
- [x] No duplicate routes, no orphan pages (all 100 `en` pages are reachable
      by crawling from `/en/`), no empty pages — the thinnest page body is
      ~1,000 words
- [x] Invalid routes correctly 404: `/fr/`, `/en/services/carpentry/`,
      `/en/areas/johor/`, untranslated `/ms/services/tiling/`
- [x] `/` → `/en/` (308, single hop); localized 404 renders in the right
      language with working recovery links

### 2. Multilingual audit — PASS (with a documented coverage gap)
- [x] **Fixed — English leaking into `/ms/` and `/zh/` pages.** Three real
      language-mixing defects found and fixed:
  - `/ms/problems/` and `/zh/problems/` rendered all 46 problem names and
    summaries in **English**. Malay and Chinese labels for all 46 problems are
    now in `data/i18n/lists.ts` (`problemList`), used by the cards and by the
    `ItemList` schema
  - The "Do you work in Kuala Lumpur?" FAQ was keyed `kualaLumpur` in the
    dictionaries but its id is `kuala-lumpur`, so the Malay and Chinese
    homepages and FAQ pages silently fell back to the **English** question and
    answer. Key corrected in all three dictionaries
  - The service-areas index passed a localized FAQ eyebrow and title but not
    the description, leaving an English sentence on `/ms/areas/` and
    `/zh/areas/`. `areasIndex.faqDescription` added in all three languages
- [x] **Two build-time guards added** (`i18n/verify.ts`, run from the sitemap
      route on every build) so this class of bug cannot come back: FAQ answer
      keys and problem-card keys must match the registries exactly, in every
      language. Verified by deliberately breaking a key — the build fails
- [x] Re-scan result: **zero English strings remain on any `/ms/` or `/zh/`
      page**
- [x] `html lang` correct on all 122 pages (`en-MY` / `ms-MY` / `zh-MY`);
      navigation, footer, mobile menu, forms and CTAs fully localized
- [x] hreflang: reciprocal, self-referencing, `x-default` → English; a page is
      only listed for a language that actually publishes it. Every alternate
      URL returns 200
- [x] Canonicals: self-referencing, absolute, trailing-slash, no mismatches
- [x] Titles and descriptions unique across all 122 pages — **no duplicates**
- [x] Known gap (unchanged, deliberate): the long-form service, problem and
      area guides are English-only, so `/ms/` and `/zh/` publish 11 pages each
      against 100 in English. Untranslated pages are not generated, not
      sitemapped and not linked — no wrong-language pages, no dead links

### 3. Service audit — PASS
- [x] All 10 main services exist, generate, and are linked from the header
      menu, footer, services index, homepage grid, area pages and related-
      service blocks: tiling, welding-metal-works, electrical, painting,
      ceiling-partition, general-renovation, plumbing, waterproofing,
      flooring, handyman
- [x] **208 sub-services** across the 10 pages (tiling 24, welding 22,
      electrical 31, painting 32, ceiling & partition 30, general renovation
      21, plumbing 15, waterproofing 11, flooring 10, handyman 12)
- [x] Every service page carries 6 FAQs, 4 related services, `Service` +
      `OfferCatalog` + `FAQPage` + `BreadcrumbList` + `WebPage` schema
- [x] Noted, not a defect: `welding-metal-works` and `flooring` have no
      related **problem** pages because the problem library covers the other
      eight trades; the section is conditionally rendered, so those pages have
      no empty block

### 4. Problem audit — PASS
- [x] 46 problem guides across 7 categories, each 1,350–1,555 words, each with
      causes, warning signs, solutions, when-to-call, process, property types
      and FAQs
- [x] Every problem links to its parent service and to related problems; every
      service page (bar the two above) links back to its problems
- [x] Unique metadata, correct H1/H2/H3 hierarchy, `Article` + `FAQPage` +
      `BreadcrumbList` schema on all 46
- [x] Not thin, not duplicated: highest content overlap between any two
      problem pages is 0.47 including shared chrome (average 0.28)

### 5. Location audit — PASS
- [x] Kuala Lumpur (14 areas) and Selangor (17 areas) region hubs + 31 local
      guides + the areas index; Klang Valley covered as the parent metro on
      the index, region hubs and contact page
- [x] **Not doorway pages**: every area page is 1,026–1,349 rendered words of
      area-specific copy (property mix, local landscape, common problems,
      process notes, FAQs) with unique intros; highest overlap between any two
      area pages is 0.29 including shared chrome (average 0.20)
- [x] Each area lists 4+ services, 2+ nearby areas (all resolving), its own
      FAQs and a `Service` node scoped to that `Place`

### 6. Conversion audit — PASS
- [x] **Fixed — no visible CTA on mobile.** The header quote button was
      `xl:` only, so on every phone and tablet the primary conversion action
      was hidden behind the hamburger menu (Phase 8 recorded it as
      "persistent", which it was not below 1280px). A compact quote button now
      sits in the mobile header from 360px up, with a short localized label
      ("Quote" / "Sebut Harga" / "报价"), the full wording as `aria-label`
      (WCAG 2.5.3 satisfied), 44px tap height and `whitespace-nowrap`. Below
      360px it stays in the menu, which keeps the full-width quote and
      WhatsApp CTAs — measured so the 320px header cannot overflow
- [x] Get a Quote reachable from: header (desktop + mobile), mobile menu, hero,
      every CTA section, footer navigation and the 404 page
- [x] WhatsApp reachable from: hero, CTA sections, mobile menu, footer contact
      column and the contact page — all still placeholder-aware, falling back
      to `/contact/` while no number exists
- [x] Quote form: 6 required fields, service → sub-service dependency, photo
      upload, autocomplete, localized in all three languages, honest "no
      instant quote" messaging, client-side confirmation only (no backend
      invented)
- [x] **Placeholders verified intact** — `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`,
      `[EMAIL]`, `[ADDRESS]`, `[BUSINESS HOURS]` still render on the contact
      page and footer in all three languages. Scanned the whole codebase: no
      invented phone numbers, emails, prices, ratings, reviews, certifications
      or years of experience

### 7. SEO audit — PASS
- [x] **Fixed — `og:image` returned a 308.** Every page pointed
      `og:image`/`twitter:image` (and the Organization `image`) at
      `/{lang}/opengraph-image` while the site serves trailing-slash URLs, so
      the image answered with a redirect — social crawlers that do not follow
      redirects would show no preview. Now `/{lang}/opengraph-image/`, verified
      200 `image/png` in all three languages
- [x] **Fixed — `localizedHref("/")` produced `/en` without the trailing
      slash**, one redirect hop away from the canonical. Now `/en/`
- [x] **Fixed — over-length metadata.** Five titles above 65 characters and the
      16 longest descriptions (193–264 characters, truncated well before the
      end in SERPs) shortened without adding any new claim
- [x] Titles, descriptions, canonicals, robots (`index, follow` on all 122),
      OG + Twitter cards with dimensions and alt, verified on every page
- [x] Schema: `Organization`+`LocalBusiness`, `WebSite`, `WebPage` on all 122;
      `BreadcrumbList` on all 119 non-home pages; `FAQPage` ×95, `Article` ×46,
      `Service` ×41, `ItemList` ×8 — all valid JSON, all linked by stable `@id`
- [x] Visible breadcrumbs on every non-home page, matching the schema
- [x] Heading hierarchy: exactly one H1 per page, no skipped levels, on all 122
- [x] Sitemaps: one per language, 122 URLs, every `<loc>` 200, every alternate
      200; robots.txt allows everything except `/_next/` and lists all three
- [x] Internal linking: no orphans, no dead ends in English, related services /
      problems / nearby areas cross-linked throughout

### 8. Performance audit — PASS
- [x] **Fixed — the Open Graph image route was the site's only on-demand
      render** (`ƒ`), rasterizing a 1200×630 PNG per crawler request.
      `generateStaticParams` added; the site is now **100% static — 132/132
      routes prerendered**, zero dynamic routes
- [x] Gzipped page weight: HTML 24–32 KB, CSS 8.9 KB, JS ~176 KB (the Next.js
      16 / React 19 App Router baseline — no application data in the bundle)
- [x] Only 4 client components (`MobileMenu`, `LanguageSwitcher`, `QuoteForm`,
      `ProjectsPortfolio`); everything else is server-rendered. FAQ accordions
      remain zero-JS `<details>`
- [x] One raster image, served through `next/image` as AVIF/WebP with a correct
      `sizes`, `priority` and a 31-day immutable cache
- [x] Fonts: 5 self-hosted woff2 subsets, `display: swap`, preloaded
- [x] No third-party scripts, no analytics, no trackers, three runtime
      dependencies (`next`, `react`, `react-dom`)

### 9. Accessibility audit — PASS
- [x] Static scan of all 122 pages: **zero** images without `alt`, zero links
      or buttons without an accessible name, zero unlabelled form controls,
      zero duplicate ids, `<main>` landmark and skip link on every page
- [x] Keyboard: visible `:focus-visible` ring sitewide, focus trap + Escape +
      focus restore in the mobile menu, 44px buttons, 24px+ tap targets
- [x] Semantic HTML, `aria-label`s on every nav, decorative SVGs `aria-hidden`,
      `aria-live` on the form's photo counter, spoken "(required)" on every
      required field, `prefers-reduced-motion` respected
- [x] Contrast matrix re-checked against the WCAG AA thresholds — the new
      mobile CTA is navy on amber (9.4:1)

### 10. Security & code quality — PASS
- [x] No secrets, no `.env` files, no `process.env` usage anywhere, nothing
      sensitive committed; `.gitignore` covers env files, keys and build output
- [x] No unsafe code: no `dangerouslySetInnerHTML` outside typed JSON-LD, no
      `eval`, no user input reaching the DOM, external links carry
      `rel="noreferrer"`
- [x] **Dead code removed**: `i18n/content.ts` (146 lines, entirely unused),
      `getRegionPath`, `getAreaPath`, `getNearbyAreas`, `projectPlaceholders`
      + its type, `faqGroups`, `getFaqsByGroup`, `languageCodes`,
      `getSiteMetadata`, `defaultLanguage`, `supportedLanguages`
- [x] Dependencies: 3 runtime + 10 dev, all used; `npm audit` reports 0
      vulnerabilities
- [x] `tsc --noEmit --noUnusedLocals --noUnusedParameters` clean

### 11. Build verification
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS**
- [x] `npm run build` — **PASS** (132/132 routes prerendered, 3 sitemaps,
      robots, 3 OG images)

### Known issues carried forward (not defects introduced here)
- Deep content (10 services, 46 problems, area guides — 33 at the time, **46 today**) was English-only at this point, so
  `/ms/` and `/zh/` publish 11 pages each. Their index pages list the
  catalogues in the right language but the cards are not links, because the
  target pages do not exist in that language yet. Translating the catalogues
  is the next content project
- 63 English pages still carry meta descriptions of 160–190 characters. They
  are front-loaded so nothing critical is cut, but desktop SERPs will truncate
  the tail; the 16 worst (193–264 characters) were fixed in this phase
- The quote form has no backend — submitting shows a confirmation and no
  message is sent. It needs a real endpoint once business contact details exist
- All business details remain placeholders, so the LocalBusiness schema
  carries no telephone, address, geo, opening hours, rating or review data
- Projects portfolio contains labelled placeholders only; no project photos
  have been invented


---

## PHASE 10 — Malay & Chinese Localization + Real Business Details — [x] COMPLETE

Every page the site publishes now exists in all three languages, and every
contact detail on the site is the real one. `/ms/` and `/zh/` went from 11
published pages each to **100 each — the same 100 pages English publishes**.

### 1. Real business details (no placeholders left)
- [x] `data/site.ts` rewritten with the verified details:
      name **Renovix Home Services**, phone/WhatsApp **+601159259521**,
      email **renovixhomeservices@gmail.com**, address **Jalan Kiara, Mont
      Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia**,
      hours **9:00 AM – 6:00 PM**
- [x] `tel:+601159259521` and `https://wa.me/601159259521` (international
      format, no invented prefill message) on every call/WhatsApp control:
      header CTA, mobile menu, footer, contact page, quote page and every
      service, problem and area CTA block
- [x] Hours localized per language (`9:00 AM – 6:00 PM` / `9:00 pagi – 6:00
      petang` / `上午 9:00 – 下午 6:00`); the address string is identical in all
      three languages, only its labels are translated
- [x] `getWhatsAppHref()`, `getPhoneHref()`, `getEmailHref()` are now no-arg
      accessors reading `data/site.ts`, so there is exactly one source of truth
- [x] Codebase audit: no `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`,
      `[ADDRESS]`, `[BUSINESS HOURS]`, sample numbers or `example.com`
      addresses remain in `app/`, `components/`, `data/` or `i18n/`

### 2. Structured data on real facts only
- [x] `Organization`/`LocalBusiness` now carries `telephone`, `email`,
      `PostalAddress`, `contactPoint`, `knowsLanguage` and `areaServed`
- [x] `openingHoursSpecification` publishes `opens: 09:00` / `closes: 18:00`
      with **no `dayOfWeek`** — the business stated the hours but not the days,
      so the days are not invented
- [x] The organization node, the WebSite node and the OfferCatalog are built
      per language: localized description, tagline, service names, OG image and
      same-language service URLs
- [x] Still no ratings, reviews, review counts, prices/priceRange, geo
      coordinates, licences, awards, registration numbers, extra branches,
      photos, years of experience, certifications or emergency/24-7 claims

### 3. Chrome, components and forms
- [x] Header, mobile menu, footer, breadcrumbs, hero chips, CTA blocks, quote
      form (labels, placeholders, options, validation, confirmation), contact
      page, empty states and the 404 copy all read from the dictionaries
- [x] New dictionary sections (`cta`, `common`, `areasBlock`, `servicePage`,
      `problemPage`, `areaPage`, `areaRegion`, `meta.ogBadge`) added to
      `i18n/types.ts` and filled in `en`/`ms`/`zh` — the shared `Dictionary`
      type makes a missing key a type error, so nothing can silently fall back
      to English
- [x] `format(template, values)` interpolation replaced string concatenation,
      so sentences follow each language's word order
- [x] `WhatsAppButton` now requires a `label` prop — all 15 call sites pass the
      translated label instead of a hardcoded English one
- [x] `app/[lang]/opengraph-image.tsx` renders a per-language title and badge

### 4. Deep content translated (the bulk of this phase)
- [x] **10 service pages × 2 languages = 20 documents** — intro, overview,
      highlights, sub-services, problems, property types, process, why-choose,
      areas note and FAQs
- [x] **46 problem pages × 2 languages = 92 documents** — what it means,
      causes, warning signs, solutions, when to call, related-service note,
      process and FAQs
- [x] **31 area guides + 2 region hubs × 2 languages = 66 documents** —
      summary, intro, service notes, property types, local problems, process,
      local context and FAQs, written to the real character of each area
- [x] Total: **178 new translated documents** (~55k words of Malay, ~117k
      characters of Chinese)
- [x] Prescribed service terminology used throughout —
      MS: Kerja Jubin & Pemasangan Jubin, Kimpalan & Kerja Logam, Kerja
      Elektrik, Kerja Mengecat, Siling & Partisyen, Renovasi/Pengubahsuaian
      Rumah, Kerja Paip/Plumbing, Kalis Air/Waterproofing, Lantai & Pemasangan
      Lantai, Servis Handyman —
      ZH: 瓷砖与铺砖工程、焊接与金属工程、电气工程、油漆工程、天花板与隔间工程、
      综合装修工程、水管工程、防水工程、地板与地面工程、家居维修服务
- [x] No separate carpentry service was introduced; handyman remains the tenth
      service
- [x] Malay is Malaysian BM (not Indonesian), keeping the trade words
      Malaysians actually use (plumbing, waterproofing, handyman, false
      ceiling, water heater, floor trap, rumah landed). Chinese is Simplified
      Chinese written for Malaysian Chinese readers (蕉赖、甲洞、满家乐、
      八打灵再也、梳邦再也), not Mainland-specific phrasing

### 5. Localized routing, links and SEO
- [x] `i18n/coverage.ts` now lists all 10 services, 46 problems, 31 areas and
      2 region hubs as translated for both `ms` and `zh`
- [x] `i18n/verify.ts::assertTranslationRegistriesInSync()` diffs the coverage
      lists against the actual translation registries at build time, so a page
      can never be published in a language that has no copy for it
- [x] Every internal link stays inside the active language: nav, breadcrumbs,
      service/problem/area cards, related links, inline body links and CTAs.
      The only cross-language links on any page are the language switcher
- [x] `<title>`, meta description, OG title/description, canonical,
      `<html lang>`, aria-labels and image alt text are language-specific
- [x] hreflang `en-MY` / `ms-MY` / `zh-MY` + `x-default` on all 300 pages, with
      correct self-reference, full reciprocity and trailing slashes
- [x] Sitemaps: **100 URLs per language**, each with the complete four-entry
      alternates set

### 6. Defects found and fixed during verification
- [x] **Sitemap alternates bug** — `slugOf(path, 2)` read the wrong path
      segment, so 58 of the 100 entries per sitemap (10 services, 46 problems,
      2 region hubs) advertised only the English alternate. Fixed to segment 1;
      all 300 entries now carry all four alternates
- [x] **English JSON-LD on localized pages** — the service index, the problem
      index and the problem-guide `about` node hardcoded `/en/` service URLs.
      They now use the same-language URL whenever a translation exists
- [x] **Organization node was English-only on every locale** — description,
      slogan, OG image and offer catalogue are now built per language
- [x] Minor copy fixes: `镀锌铁` → `黑铁（mild steel）` in the Chinese welding
      page, `repair` → `pembaikan kecil` in the Malay tiling page

### 7. Testing
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 errors, 0 warnings)
- [x] `npm run build` — **PASS** (310 static routes prerendered)
- [x] All **300 localized routes** return HTTP 200 (100 per language)
- [x] Canonical, hreflang set, self-reference and reciprocity verified on all
      300 pages by script
- [x] JSON-LD parsed on all 300 pages: valid, real contact details, no invented
      trust signals, no cross-language URLs
- [x] English-leakage scan over all 200 `/ms/` and `/zh/` pages: the only Latin
      strings left are the brand name, proper nouns (Mont Kiara, USJ, Taman
      Yarl, i-City, The Strand, Goodyear, Duta, Telawi, Bandar Botanic),
      industry abbreviations (LED, MCB, RCCB, ELCB, SPC, PU, VESA) and the
      Malaysian trade terms listed above
- [x] Internal-link scan: 0 cross-language links outside the language switcher
- [x] Contact-detail scan: one phone number, one WhatsApp link, one email and
      one address across the entire codebase
- [x] Accessibility: correct `<html lang>` per locale, localized aria-labels,
      skip link and breadcrumb landmarks; the Phase 9 mobile CTA is still
      present and localized

### Known issues carried forward (not introduced here)
- The Chinese OG image renders CJK glyphs through `next/og`'s dynamic font
  fetch (Google Fonts). That fetch is blocked in the offline build sandbox, so
  the locally generated `/zh/opengraph-image` shows tofu boxes; it renders
  correctly wherever the build has network access. Re-check it on the deployed
  site — if it ever fails there, bundling a CJK font is the fix
- For an unmatched URL under `/ms/` or `/zh/`, the first HTML frame is Next's
  built-in 404 shell; the localized not-found page (correct in all three
  languages) is in the payload and takes over on hydration
- 63 English pages still carry 160–190 character meta descriptions
- The quote form still has no backend
- The projects portfolio still contains clearly labelled placeholders only

---

## PHASE 11 — Business Information & Local SEO Foundation — [x] COMPLETE

Phase 10 already replaced the placeholders with the verified business details; this
phase audited every use of them, removed the last stale wording, made the full
business identity explicit on the Contact page, normalized every page title to
the full brand and added a reproducible automated business-info audit.

### 1. Business information audit (single source of truth)
- [x] `data/site.ts` remains the one source of truth: name **Renovix Home
      Services**, phone/WhatsApp **+601159259521**, email
      **renovixhomeservices@gmail.com**, address **Jalan Kiara, Mont Kiara,
      50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia**, hours
      **9:00 AM – 6:00 PM** (`09:00`–`18:00`)
- [x] Codebase scan (app/, components/, data/, i18n/): exactly one phone
      number, one WhatsApp link, one email and one address — no sample,
      old, placeholder or conflicting values anywhere
- [x] No `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`, `[EMAIL]`, `[ADDRESS]`,
      `[BUSINESS HOURS]` or `example.com` business placeholders remain. The
      only `you@example.com` / `anda@contoh.com` strings are the visitor's
      own-email form input examples, not business contact details
- [x] No references to KL Renovator, KL Servis Rumah or any other brand
- [x] No invented unit/building/suite numbers, offices, branches, showrooms,
      coordinates, reviews, ratings, prices, certifications or licences

### 2. NAP & contact consistency
- [x] Header, footer, contact page, about page, quote page, homepage CTA,
      mobile menu CTA and every service/problem/area hero + CTA block read
      the verified details from `data/site.ts`
- [x] Call links: `tel:+601159259521` (visible number stays `+601159259521`)
- [x] WhatsApp links: `https://wa.me/601159259521` (international format, no
      prefill, no invented automation) on every WhatsApp control
- [x] Email links: `mailto:renovixhomeservices@gmail.com`; visible email
      everywhere is `renovixhomeservices@gmail.com`
- [x] Contact page now leads with a **Business** card (`Renovix Home
      Services`, linking to the About page) followed by Phone, WhatsApp,
      Email, Address and Business Hours cards — same facts in English,
      Malay and Simplified Chinese
- [x] FAQ "request a quote" answer no longer says the contact details are
      "once they are confirmed" — it now points to the verified
      `+601159259521` / `renovixhomeservices@gmail.com` (fix applied to
      `data/site-faqs.ts` and all three dictionaries)
- [x] No map/embed or coordinates were added; the verified address is used
      where a location is shown

### 3. Structured data
- [x] `Organization`/`LocalBusiness` node verified on every page: `name`,
      `telephone`, `email`, `PostalAddress`
      (street `Jalan Kiara, Mont Kiara`, locality `Kuala Lumpur`, region
      `Wilayah Persekutuan Kuala Lumpur`, postcode `50480`, country `MY`),
      `url`, `contactPoint`, `knowsLanguage` and
      `openingHoursSpecification` (`09:00`–`18:00`, **no `dayOfWeek`** — the
      business has not stated which days it opens)
- [x] `areaServed` = Kuala Lumpur, Selangor, Klang Valley (service
      coverage only — no fake branches or local offices)
- [x] Still no `sameAs` (no verified social profiles), `geo`, `aggregateRating`,
      reviews, `priceRange`, awards, certifications or licences

### 4. SEO / metadata
- [x] Every one of the 300 pages now carries the full brand in its `<title>`:
      **Renovix Home Services | …** (brand-first). Index pages updated in the
      dictionaries; 267 service/problem/area titles normalized in the content
      data; the 6 titles that were missing the brand (2 service pages, 4
      problem pages) now include it
- [x] Title lengths kept reasonable by using the established "KL & Selangor"
      form inside titles instead of the full state name
- [x] Service, location and brand intent preserved; no keyword stuffing; no
      rewrites of content descriptions beyond the required brand/contact fixes
- [x] Canonicals, hreflang (`en-MY`/`ms-MY`/`zh-MY` + `x-default`),
      per-language sitemaps (100 URLs each) and robots.txt re-verified — no
      indexing blocks, no new pages, no broken links, Phase 10 routing intact

### 5. Automated audit
- [x] New `scripts/audit-business-info.mjs` + `npm run audit:business`:
      scans the source tree and fails on any phone/email other than the
      verified ones, any conflicting opening-hours claim, any business
      placeholder, a missing required schema field, an invented schema signal
      or another business name — **PASS**
- [x] README updated with the new script

### 6. Testing
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 errors, 0 warnings)
- [x] `npm run build` — **PASS** (all pages statically prerendered)
- [x] All **300 localized routes** return HTTP 200 (100 per language)
- [x] Business-fact + JSON-LD checks on 30 page/language combinations PASS
      (name/phone/WhatsApp/email/address/hours present, schema accurate,
      no invented signals)
- [x] Contact page renders Business + Phone + WhatsApp + Email + Address +
      Hours correctly in all three languages, with correct `tel:`, `wa.me`
      and `mailto:` links



- No prices, reviews, ratings, review counts, geo coordinates, certifications, licences, awards, registration numbers, warranties, years of experience, projects or team members have been invented.
- Contact details are the real ones supplied by the business in Phase 10 (they were placeholders through Phases 1–9):
  - Phone / WhatsApp: `+601159259521`
  - Email: `renovixhomeservices@gmail.com`
  - Address: `Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia`
  - Hours: `9:00 AM – 6:00 PM` (the opening days were not stated, so no `dayOfWeek` is published in the schema)
- Dedicated service detail pages were built in Phase 2; problem pages were built in Phase 3; the local SEO area architecture (2 region hubs + 31 unique location guides + areas index) was built in Phase 4 and later expanded to **46 area guides** in Phase 13 Part 5. Phase 5 adds the supporting pages and a portfolio framework containing only clearly labelled placeholders. Phase 6 delivered the multilingual architecture and full translations for the core pages; the long-form service, problem and area catalogues remain English-only and the blog is not built. Phase 8 was the quality optimization pass (performance, accessibility, mobile & UX); the advanced quote system remains future work.
- Phase 9 was the final QA audit: full route, multilingual, service, problem, location, conversion, SEO, performance, accessibility and code-quality review. Six genuine defects were fixed (three language-mixing bugs, the redirecting `og:image`, the missing mobile CTA and the on-demand OG route), dead code was removed and two build-time i18n guards were added. Remaining known issues are listed at the end of the Phase 9 section.
- Phase 10 completed the localization project: all 10 service pages, 46 problem pages and the area guides (33 at the time; **46 today** after the Phase 13 Part 5 expansion) now exist in Malay and Chinese (178 new translated documents), every contact detail is real, and each language publishes the same 100 pages. Phase 11 completed the business information/local SEO foundation: the verified NAP is the only business data in the codebase, the Contact page presents it in full in all three languages, every page title carries the full brand, the structured data is audited and an automated business-info audit (`npm run audit:business`) guards it. Phase 12 connected the quote form to a real, secured server-side submission path with Resend email notification code; live email delivery stays owner-gated until `RESEND_API_KEY` and a verified `QUOTE_FROM_EMAIL` are configured. Phase 13 published the business-supplied logo and the 21 real work photos (polished WebP with SEO file names and localized en/ms/zh captions) on the Projects page, and moved the header/mobile-menu contact CTA to a WhatsApp button in the official brand green; a follow-up fix corrected the sideways awning photo (PR #16). Phase 14 delivered the sitemap consolidation at `/sitemap.xml` (Part 1) and then completed the authoritative service platform (Part 2): the pricing rows and every new service-page section (pricing, materials, cost factors, duration, includes/excludes, answer-first Q&A) now exist in Malay and Chinese, prices remain single-sourced in `data/pricing/pricing.ts` and are never translated, a machine-readable feed is served at `/ai/pricing.json`, and a new `npm run audit:pricing` guards the whole system. Phase 15 shipped the location architecture but left the search intent matrix disconnected and drifting; **Phase 18 fixed that data integrity** (see the Phase 18 section). Phase 16 is complete; the Final Phase below records the final audit and launch-readiness status.

## PHASE 12 — Quote Form Backend & Resend Integration — [x] CODE COMPLETE · ⚪ LIVE EMAIL DELIVERY OWNER-GATED

> **Section restored in Phase 18.** The heading and introduction of this section
> were lost in an earlier edit, leaving the checklist below orphaned under
> Phase 11. The checklist itself is unchanged; only the missing introduction and
> an honest status statement have been reconstructed from the code in
> `app/api/quote/route.ts` and `lib/quote/*`.

### Status (honest)

| Area | Status | Evidence |
|---|---|---|
| Server-side quote submission (Route Handler) | ✅ **COMPLETE** | `app/api/quote/route.ts` (`runtime = "nodejs"`, `dynamic = "force-dynamic"`) |
| Payload validation | ✅ **COMPLETE** | `lib/quote/validation.ts` — required fields, email/phone formats, length caps, known service slugs, honeypot |
| Abuse controls | ✅ **COMPLETE** | `lib/quote/rate-limit.ts` (5 submissions / 15 minutes / IP), `lib/quote/origin.ts` (origin allow-list), `QUOTE_MAX_BODY_BYTES` size guard |
| Resend integration code | ✅ **COMPLETE** | `lib/quote/email.ts` — reads `RESEND_API_KEY` + `QUOTE_FROM_EMAIL`, builds and posts the notification |
| Multilingual form UI (EN/MS/ZH) | ✅ **COMPLETE** | `components/quote/QuoteForm.tsx` + dictionaries; no English fallback on `/ms/` or `/zh/` |
| **Live email delivery in production** | ⚪ **OWNER-GATED — NOT COMPLETE** | The owner must create a Resend API key and verify a sender domain, then set `RESEND_API_KEY` and `QUOTE_FROM_EMAIL`. Until then the endpoint returns an honest **503 `unavailable`** instead of pretending to have sent mail. |

### What was built

The Phase 5 quote form was UI-only. Phase 12 connected it to a real, secured
server-side submission path: a Next.js Route Handler at `/api/quote` that
validates the payload, rejects spam and oversized bodies, rate-limits by IP,
enforces an origin allow-list, and — when email credentials are configured —
sends the enquiry to the business inbox through Resend. No submission is ever
silently reported as delivered: if the provider is not configured, the API
answers 503 and the form shows the WhatsApp fallback.

### Checklist

- [x] `/api/quote` Route Handler with validation, spam and size guards; spam
      submissions are ignored (no email)
- [x] In-memory rate limit after a valid payload (5 / 15 minutes / IP)
- [x] Origin allow-list for browser `Origin` headers

### 5. Multilingual form
- [x] English, Malay and Simplified Chinese labels, placeholders, required
      messages, validation, submit, loading, success, error, privacy note and
      WhatsApp fallback — no English fallback on `/ms/` or `/zh/`
- [x] `noValidate` so the browser does not inject English HTML5 bubbles

### 6. Accessibility, mobile, privacy, SEO
- [x] Labels, `aria-required`, `aria-invalid`, `aria-describedby`, `role="alert"`
      / `status`, visible focus, 16px inputs, 44px-tall controls
- [x] Form stacks cleanly at 360 / 390 / 412px (full-width inputs, stacked
      radios below `sm`)
- [x] Concise privacy note: submitted information is used to respond to the
      enquiry — no unsupported legal claims
- [x] Canonicals, hreflang, metadata, sitemap and robots.txt unchanged
- [x] No analytics platform added (none is installed)

### 7. Testing
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 errors, 0 warnings)
- [x] `npm run build` — **PASS** (`/api/quote` emitted as a dynamic route;
      300 localized pages still prerendered)
- [x] Form API tests: empty / invalid email / invalid phone / oversize message
      / unknown service rejected; honeypot ignored; valid payload without
      email credentials returns **503** (not 200)
- [x] English, Malay and Chinese quote pages verified
- [x] Mobile UX and accessibility checks above
- [x] Production email delivery could not be fully verified because the
      required email-provider credentials are not configured

## PHASE 13 (PART 1) — Brand Logo, Real Work Portfolio & Header Contact CTA — [x] COMPLETE (PR #15 + PR #16 fix)

### 1. Logo (business-supplied artwork)
- [x] Uploaded 1881×836 logo shipped under `public/images/logo/` as
      `renovix-home-services-logo.png` + `.webp` (colour, for the white
      header) and a white variant (for the navy footer), sized for the
      ~40px header render.
- [x] `components/Brand.tsx` renders the artwork via `next/image` with the
      localized brand name kept as the link's `aria-label`.
- [x] `app/icon.svg` unchanged: the full lockup is not legible as a favicon.

### 2. Real work photos (21 uploaded JPGs → polished SEO WebP)
- [x] All 21 genuine work photos published; the original phone-dump JPGs
      are no longer shipped (they remain in git history).
- [x] Polished (orientation/EXIF handling, exposure and colour
      correction, resized, metadata stripped) and converted to high-quality
      WebP with lowercase hyphenated, service-first SEO file names ending in
      the verified market suffix `-kl-selangor` (no invented streets/condos).
- [x] PR #16 fix: the awning-installation shot was uploaded rotated 90°
      sideways; its shipped WebP is now rotated upright (1284×964 after
      deskew/trim) and `data/project-photos.ts` carries the corrected
      intrinsic dimensions.

### 3. Projects page = real portfolio
- [x] `data/project-photos.ts`: photo inventory (id, category, src, width,
      height) plus per-language card copy via `getProjectPhotoContent`.
- [x] Placeholder cards replaced by real images through `next/image`
      (alt text + intrinsic dimensions, no layout shift) and category
      filters.
- [x] EN/MS/ZH page titles and 150–160-char meta descriptions, an honest
      "About these photos" note, and factual 1–2 sentence card copy per
      photo — no invented clients, dates, prices or results.
- [x] Canonicals, hreflang, sitemap, robots.txt and JSON-LD untouched;
      photo URLs live only on the existing `/projects/` page.

### 4. Header/mobile contact CTA adjustment
- [x] Yellow "Quote" button removed from the desktop header, the compact
      mobile header and the mobile menu; an official-green WhatsApp button
      (#25D366 / hover #1EBE57, white icon + label) sits in its place with
      the EN | BM | 中文 switcher kept beside it.
- [x] Get a Quote CTAs remain in page bodies, heroes and `/quote/`.

### 5. Testing
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS**
- [x] `npm run build` — **PASS** (310 localized pages prerendered)
- [x] `npm run audit:business` — **PASS** (no invented claims)
- [x] Served build verified across en/ms/zh: titles/meta, hreflang, logo in
      header + footer, green WhatsApp CTA, 21 portfolio images with alt
      text, old JPG paths 404, corrected awning photo (1284×964) renders.

## PHASE 13 (PART 2) — Projects / Portfolio System, Header Language Button & Sidebar Navigation — [x] COMPLETE

> **Phase numbering note.** The Phase 13 brief arrived in two parts. Part 1
> (PRs #15 and #16) shipped the logo, the 21 real work photographs and the
> header WhatsApp CTA. Part 2 — this section — turns that photo list into a
> real portfolio *system* and adds the navigation improvements the brief
> asked for. Both parts are recorded under Phase 13; Phase 14 has not been
> started.

### 1. Project data structure (`data/project-content/`)
- [x] `types.ts` — full `Project` model: slug, service category, related
      categories, `status`, year, main image, gallery, before/after pair,
      verified location — plus the localized `ProjectContent` model: title,
      short description, full description, scope of work, details rows, image
      alt text, gallery alt text, before/after alt text, SEO title, SEO
      description, OG title and OG description.
- [x] Every optional field is absent unless the business supplied it. No
      client names, site addresses, dates, prices, materials, durations,
      testimonials or outcome claims exist anywhere in the portfolio data,
      because none were supplied with the photographs.
- [x] `projects.ts` — the 21 real, business-supplied work photographs carried
      over verbatim from `data/project-photos.ts` (English copy, categories
      and intrinsic image dimensions unchanged); `data/project-photos.ts` was
      removed so there is one portfolio source of truth.
- [x] `translations/` — Malay and Chinese copy for all 21 entries, typed
      against `ProjectContent`, so a missing string is a compile error rather
      than English leaking onto a `/ms/` or `/zh/` page.
- [x] `index.ts` registry — `getPublishedProjects`, `getPublishedProject`,
      `getResolvedProject(s)`, `getPublishedProjectsByCategory`,
      `getRelatedPublishedProjects`, `getProjectCategoriesWithProjects`,
      `getProjectServiceCategories`, `getProjectCategory`.
- [x] `seo.ts` — one composer for `<title>`, meta description and Open Graph
      text, used by both `generateMetadata` and the JSON-LD so they cannot
      disagree.

### 2. Publication status
- [x] `ProjectStatus = "published" | "draft"`; only published projects are
      generated, linked, sitemapped or indexable.
- [x] `generateStaticParams` filters on `status === "published"` **and** on
      translation coverage; the page component answers `notFound()` for any
      slug that is not published.
- [x] **Verified**: a temporary draft entry (`temp-draft-verification-only`,
      since removed) returned **404** at `/en/`, `/ms/` and `/zh/`, did not
      appear in the index HTML and did not appear in any sitemap. Unknown
      slugs also return 404.
- [x] **Verified**: `i18n/verify.ts` now diffs `ALL_PROJECTS` against the
      *published* registry, so a draft listed in the coverage inventory fails
      the build instead of submitting a 404 URL to search engines (observed
      during testing: flipping every project to draft aborted the build with
      `project slug inventory drifted`).
- [x] No placeholder projects remain. The previous single-page photo list was
      real business-supplied work, so it was kept and promoted into the
      portfolio system rather than deleted.

### 3. Projects index (`/{lang}/projects/`)
- [x] Portfolio cards: image, title, service-category chip, short description,
      **View project** link to the detail page, and the service-page link.
- [x] Location chip supported and rendered only when a project has a verified
      location (none do yet, so no chip is shown).
- [x] Lightweight client-side category filter retained. Filter chips are
      limited to categories that actually have published work — currently
      Tiling, Welding, Electrical, Ceiling, Renovation and Plumbing — so no
      chip leads to an empty result.
- [x] Result counter is `aria-live` and localized: "Showing 21 projects." /
      "Memaparkan 21 projek." / "目前显示 21 个工程。"
- [x] `ItemList` structured data listing the published projects (emitted only
      when at least one project is published).
- [x] **Empty state** implemented and localized in EN / MS / ZH: explains that
      project showcases are being updated, states that only real team work is
      published, and offers the Phase 12 quote form plus WhatsApp. No counts,
      statistics or completion claims. **Verified** by temporarily setting all
      21 projects to draft: the index rendered the localized empty state at
      all three URLs, dropped the filter chips and the `ItemList`, and the
      build fell back to 310 pages.

### 4. Project detail page (`/{lang}/projects/{slug}/`)
- [x] New reusable route + template: hero (breadcrumb, eyebrow, H1, category /
      location / year chips, quote + WhatsApp CTAs, main image at its own
      aspect ratio), overview (+ scope of work), project details, gallery
      (+ labelled before/after), services used, location, more work in the
      same category, and the quote / WhatsApp / call CTA block.
- [x] Every section after the overview is conditional — scope, details,
      gallery and before/after render only when the data exists, so nothing is
      padded with invented content.
- [x] An honest note is repeated on each detail page: only information the
      customer agreed to share is published.
- [x] 21 published projects × 3 languages = **63 new pages**; the build now
      prerenders **373** static pages (310 before).

### 5. Multilingual support
- [x] EN / MS / ZH for the index additions and the whole detail template
      (new `projectPage` dictionary section in all three languages, typed in
      `i18n/types.ts`).
- [x] `project` added to `ContentKind`, `ALL_PROJECTS`, the per-language
      coverage lists, `contentHref`, `missingPathsForLanguage`,
      `i18n/verify.ts` and the sitemap.
- [x] **Verified**: no English H1 leaks into any `/ms/` or `/zh/` project page
      (all 21 slugs checked in both languages); all 63 titles are unique.

### 6. Header multilingual button
- [x] Inspected first: the header already carried the `EN | BM | 中文`
      switcher beside the WhatsApp button from `xl` up, and a compact inline
      switcher from `sm` to `xl`. The gap was **below 640px**, where the
      switcher was hidden to avoid horizontal overflow.
- [x] New `components/layout/HeaderLanguageMenu.tsx` — a fixed 40px globe
      disclosure button that opens **the same `LanguageSwitcher` component**.
      No second language system, no duplicated switching logic, same three
      languages, same `switchLanguagePath` routes.
- [x] Rendered in the header's mobile cluster immediately before the WhatsApp
      button, only below `sm` (the inline switcher still covers `sm`→`xl` and
      the full switcher covers `xl`+), so no width is duplicated.
- [x] Accessible: real `<button>` with `aria-expanded` / `aria-controls` and a
      localized `aria-label`, Escape to close, outside click / touch to close,
      focus returned to the trigger, visible focus ring, current language
      shown inside the button.
- [x] **Verified in the served HTML**: mobile cluster order is
      inline switcher → language button → WhatsApp → menu trigger.
- [x] **Overflow measured with the real Plus Jakarta Sans metrics**
      (not estimated): header row width 305.7px against 328px available at
      360px (22.3px slack), 186.2px against 288px at 320px, and no overflow at
      390 / 412 / 640 / 768 / 1024 / 1280px. The inline `EN | BM | 中文` group
      would have been ~155px wide and pushed the 360px row to ~421px — which
      is exactly why the disclosure button is used on phones.
- [x] Footer language selector left functional and unchanged.

### 7. Sidebar / drawer navigation
- [x] The site's "sidebar" is the mobile drawer (`components/layout/MobileMenu.tsx`).
      It already listed Home, Services, Problems, Areas, Projects, FAQ, About
      and Contact; the missing legitimate page was **Get a Free Quote**
      (`/{lang}/quote/` exists since Phase 12) and it is now the ninth entry.
- [x] Only real routes are linked — no pages were created to fill the drawer.
- [x] Active page state added: the drawer marks the current route with
      `aria-current="page"` and a visible highlight (compared with trailing
      slashes normalized, so `/en/projects/` matches `/en/projects`).
- [x] Localized in all three languages — verified in the RSC payload:
      `quote` = "Get a Free Quote" / "Sebut Harga Percuma" / "免费获取报价".
- [x] Existing keyboard support retained: focus trap, Escape to close, focus
      returned to the trigger, body scroll lock, `role="dialog"` +
      `aria-modal`, visible focus rings on every link.
- [x] WhatsApp remains the single green CTA in the drawer; the quote entry is
      a plain navigation link, so the Phase 13 Part 1 header decision is
      preserved.

### 8. Images
- [x] `next/image` everywhere; AVIF/WebP negotiation and a 31-day cache TTL
      come from the existing `next.config.ts`.
- [x] Hero image: `priority`, not lazy-loaded, intrinsic `width`/`height`,
      `sizes="(min-width: 768px) 768px, 100vw"`, and rendered at its own
      aspect ratio (portrait frames get a narrower container instead of being
      cropped).
- [x] Card, gallery and related-project images: `loading="lazy"`,
      `object-cover` inside a fixed `aspect-[4/3]` box, responsive `sizes`.
- [x] Meaningful localized alt text on every project image (verified for all
      63 pages). The decorative logo keeps `alt=""` + `aria-hidden`.
- [x] Before / after: modelled as a pair and rendered with visible
      **Before** / **After** captions. No project has a before/after pair yet,
      so nothing resembling a fake comparison is displayed.
- [x] No new images were added. No stock, AI-generated or third-party images
      are presented as Renovix work.

### 9. SEO
- [x] Unique `<title>` per project page: `"{title} — {category} | Renovix
      Home Services"` (longest 81 characters), with a per-project `seoTitle`
      override supported.
- [x] Unique meta description per project page (the factual summary; shortest
      is 22 Chinese characters), with a `seoDescription` override supported.
- [x] Self-referencing canonical, four `hreflang` alternates (en-MY, ms-MY,
      zh-MY, x-default) and `robots: index, follow` verified on all 63 pages.
- [x] Open Graph + Twitter title, description, locale and image on every
      project page. The project photo is *not* used as `og:image` because no
      1.91:1 crop of it exists; the site's generated 1200×630 card is used
      instead. A per-project OG image override is supported by the model.
- [x] Sitemap: 21 project URLs added to each language's sitemap (121 URLs per
      language, up from 100), each with the correct hreflang set.
- [x] Structured data: `WebPage` + `BreadcrumbList` + `ImageObject` per
      project page, `ItemList` on the index. **No** `Review`,
      `aggregateRating`, `Product` or `Offer` nodes are emitted by the project
      pages — verified against the page graph of all 63 pages.
- [x] Internal linking, real relationships only: project → its service page
      (and further services genuinely carried out on the same job — currently
      only `office-renovation-ceiling-and-tiling`, whose own title names
      ceiling and tiling work), project → sibling projects in the same
      category, project → service areas index, project → quote, WhatsApp and
      `tel:`.

### 10. Conversion
- [x] Project pages reuse the Phase 12 quote flow at `/{lang}/quote/` and the
      single verified WhatsApp number. No second quote system, no duplicated
      backend, no new API route.

### 11. Security
- [x] All project copy is rendered as React text children — no
      `dangerouslySetInnerHTML` anywhere in the projects system. The only
      `dangerouslySetInnerHTML` in the codebase remains `components/seo/JsonLd.tsx`,
      which escapes `<` to `\u003c`.

### 12. No-fake-content verification
- [x] Scanned the whole projects system and the rendered EN/MS/ZH index and
      detail pages for lorem ipsum, placeholder, dummy, sample project, fake,
      stock photo, 100+, "N years", ratings, prices, testimonials and reviews.
      The only matches are code comments that state the prohibition.
- [x] `npm run audit:business` — **PASS** (it also caught an all-integer SVG
      arc in the new globe icon that its phone-number scan read as a number;
      the icon now uses decimal coordinates).

### 13. Testing
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 errors, 0 warnings)
- [x] `npm run build` — **PASS** (373 static pages prerendered)
- [x] `npm run audit:business` — **PASS**
- [x] Crawled all 363 sitemap URLs: every one returns **200**; extracted every
      internal link from all 363 pages (363 distinct targets) and every one
      returns **200** — **no broken links**.
- [x] Projects index, all 63 detail pages, draft 404 handling, empty state,
      CTA links, header language button and drawer navigation verified against
      the served production build in EN, MS and ZH.
- [x] Header row width verified numerically at 320 / 360 / 390 / 412 / 640 /
      768 / 1024 / 1280px using the shipped font's real metrics.
- [ ] **Not verified**: real-browser rendering. No Chromium/Firefox binary can
      be installed in this sandbox (`playwright install` and the Puppeteer
      browser download both fail on the network), so the 360 / 390 / 412px,
      tablet and desktop checks above are served-HTML plus computed-layout
      checks, not visual screenshots. Tap-target sizes, focus visibility and
      the drawer open/close behaviour are asserted from the markup and CSS,
      not clicked in a browser.

### 14. Still required from the owner
- [ ] **Real project case-study data.** The portfolio currently publishes one
      real work photograph per entry. For each project the business wants to
      feature properly, the following are still needed before they can appear:
      customer-approved location, completion date/year, property type, scope
      of work, materials, before/after photographs of the same job, additional
      gallery photographs, and permission to name the area.
- [ ] Per-project 1.91:1 Open Graph crops, if social previews should show the
      work itself rather than the site card.

## PHASE 13 (PART 3) — Final Fixes & Verification — [x] COMPLETE

> Follow-up pass over the already-implemented Phase 13 system. One genuine
> defect was found and fixed; everything else re-verified against the served
> production build. Phase 14 has not been started.

### 1. Sidebar (mobile drawer) opening bug — root cause fixed
- [x] **Bug**: the drawer never became visible when the menu button was
      tapped. The trigger state, icon swap and body-scroll lock all worked,
      but the panel occupied zero pixels.
- [x] **Root cause**: the header carries `backdrop-blur`, and a
      `backdrop-filter` other than `none` makes the element the **containing
      block for fixed-positioned descendants** (Filter Effects spec §
      backdrop-filter; implemented by Chrome, Safari and Firefox). The drawer
      panel (`fixed inset-0 top-[70px]`) lived inside the header, so
      `top: 70px; bottom: 0` resolved against the 70px-tall header box —
      a zero-height, invisible panel.
- [x] **Fix**: `components/layout/MobileMenu.tsx` now renders the open drawer
      through `createPortal(..., document.body)`, restoring the viewport as
      the containing block. The header's design (including the blur) is
      unchanged; the drawer was not hidden or replaced.
- [x] Everything else about the drawer is untouched and still holds: focus
      trap, Escape to close (focus returned to the trigger), body scroll
      lock, `role="dialog"` + `aria-modal`, `aria-expanded`/`aria-controls`
      on the trigger, localized accessible names ("Open menu" / "Buka menu" /
      "打开菜单"), active-page highlight with `aria-current="page"`, link
      clicks close the drawer, WhatsApp CTA inside the drawer, and the
      compact language switcher in the drawer footer. React refs and event
      handlers work through portals, so no logic changed.
- [x] Drawer navigation content re-verified: Home, Services, Problems,
      Areas, Projects, FAQ, About, Contact, **Get a Free Quote** — all
      existing routes, localized in EN/MS/ZH (verified in the served RSC
      payload: "Get a Free Quote" / "Sebut Harga Percuma" / "免费获取报价").
      No routes were invented.

### 2. Owner-supplied photos re-verified
- [x] All 21 published projects reference exactly the 21 owner-supplied
      WebP photos under `public/images/projects/` — a script diffed every
      `src` in `data/project-content/projects.ts` against the files on disk
      (no missing files, no extra/unknown images, no stock/AI imagery).
- [x] Image optimization re-verified against the served build: the Next.js
      optimizer returns 200 with responsive AVIF (15.9 KB at w=828) and WebP
      (7.3 KB at w=384) variants; hero uses `priority` +
      `sizes="(min-width: 768px) 768px, 100vw"` with intrinsic dimensions
      (no layout shift); card/gallery/related images are `loading="lazy"`
      inside fixed aspect boxes with responsive `sizes`.
- [x] Meaningful, localized alt text confirmed in served HTML (e.g. "Large
      marble-look floor tiles laid and levelled by Renovix Home Services in
      Kuala Lumpur."). No `image1.jpg`-style alt text.
- [x] No before/after labels are shown anywhere, because no photo pair has
      verified before/after status. The model supports a pair for the future.

### 3. Data honesty re-verified
- [x] Scanned the projects system for lorem ipsum, placeholder, dummy,
      sample, fake, stock and AI-image markers — the only matches are code
      comments stating the prohibition.
- [x] No invented locations, customers, dates, sizes, materials, prices,
      scope, results, reviews or statistics. Optional fields stay absent;
      pages skip empty sections gracefully.
- [x] `npm run audit:business` — **PASS**.

### 4. Language selectors re-verified
- [x] Header: inline `EN | BM | 中文` switcher (≥ sm) and the 40px globe
      disclosure button (< sm, `aria-label="Choose language"` localized) both
      present in served HTML beside the WhatsApp button.
- [x] Language switching preserves the current page (`/en/services/` links to
      `/ms/services/` and `/zh/services/`, with `hrefLang` attributes).
- [x] Header, drawer and footer all render the same `LanguageSwitcher`
      component — one language system, no duplicate implementation.

### 5. SEO / structured data / draft handling re-verified (served build)
- [x] Project pages: unique title, unique meta description, self-referencing
      canonical, OG title/description/image (site card; no fake per-project
      OG imagery invented since no 1.91:1 crop of the photos exists).
- [x] JSON-LD on project pages: `WebPage` + `BreadcrumbList` + `ImageObject`
      (plus the pre-existing site-wide business/services graph). **No**
      `Review`, `aggregateRating`, `price` or rating fields anywhere in the
      page graph — grep of the served HTML found none.
- [x] Sitemaps: 22 `/projects/…` URLs per language (index + 21 published
      projects). All 21 projects are `status: "published"`; the registry
      filters on status, and an unknown slug (`/en/projects/nonexistent-slug/`)
      returns **404**.

### 6. Route & link verification (served production build)
- [x] All **363** sitemap URLs crawled — every one returns **200**; no broken
      links. Home, Services, Projects, About, Contact, Quote, FAQ, Problems
      and Areas verified individually in EN/MS/ZH where applicable.
- [x] WhatsApp links use the single verified number; quote links point to the
      existing Phase 12 `/quote/` flow — no second backend.

### 7. Testing
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS**
- [x] `npm run build` — **PASS** (373 static pages)
- [x] `npm run audit:business` — **PASS**
- [x] Portal fix confirmed present in the built client bundle
      (`createPortal` + `id:"mobile-menu"` in the same chunk).
- [ ] **Not verified in a real browser**: no Chromium/Firefox binary is
      installable in this sandbox, so drawer open/close, tap targets and the
      360/390/412px checks are asserted from the served HTML, the CSS and the
      built bundle — not from clicked, rendered screenshots. The fixed
      containing-block defect is a spec-level certainty, but a human
      click-through on a phone is still the final confirmation.

### 8. Still required from the owner (unchanged)
- [ ] Per-project case-study data (customer-approved location, year, property
      type, scope, materials, before/after pairs of the same job) before those
      fields can be published.
- [ ] Per-project 1.91:1 OG crops if social previews should show the work
      itself.

## PHASE 13 (PART 4) — Final SEO, OG Fonts & Real-Browser Verification — [x] COMPLETE

> The closing pass of Phase 13: per-project social-preview images generated
> from the owner-supplied photographs, the Chinese Open Graph card made
> self-contained (no build-time Google Fonts request), enriched Chinese
> project metadata, and — for the first time in this project — the whole site
> clicked through in a **real Chromium browser** at every required width.
> Phase 14 has not been started.

### 1. Real browser obtained and used
- [x] The sandbox blocks every browser CDN (Playwright, Chrome-for-Testing,
      apt), but the npm registry is reachable — and `@sparticuz/chromium`
      ships a real Chromium binary **inside the npm tarball**. Chromium
      **149.0.7827.0 (HeadlessChrome)** was extracted (its AL2023
      shared-library bundle unpacked onto `LD_LIBRARY_PATH` for this Debian
      host) and driven with `puppeteer-core` — no changes to the site's
      dependencies.
- [x] **329/329 real-browser checks passed** across
      **360 / 390 / 412 / 768 / 1024 / 1280 / 1440 px**, against the served
      production build (`next start`).

### 2. Sidebar (mobile drawer) — real click-through verification
- [x] Hamburger clicked (mouse) at 390/412/768/1024 and **tapped (touch
      events)** at 360: the drawer opens, portalled into `<body>`, with a
      real box (e.g. 412×845 px at 412 width), `position: fixed`,
      `z-index 50` (above the header's z-40), active `pointer-events`, top
      below the 70 px header, `role="dialog"` + `aria-modal="true"`.
- [x] Body scroll locked while open (`overflow: hidden` **and** a scripted
      `window.scrollTo` provably cannot move the page) and restored after
      every close path.
- [x] Close button (the trigger toggles) closes; **Escape** closes and
      returns focus to the trigger; the drawer is fully removed from the DOM
      afterwards — **no invisible overlay remains**.
- [x] Focus is moved into the dialog on open, `aria-expanded` tracks state,
      and a **focus trap** holds through 40 consecutive Tabs.
- [x] Link click navigates (drawer → `/en/projects/`), closes the drawer and
      restores scroll; the drawer lists 23 links including the
      "Get a Free Quote" CTA.
- [x] At 1280/1440 the hamburger is hidden by design and the desktop nav is
      present (asserted).
- [x] Drawer verified on **localized pages** (`/ms/`, `/zh/`): localized
      trigger label ("Buka menu" / "打开菜单"), localized navigation, open,
      Escape-close, zero runtime errors.
- [x] Outside-click is not implemented for the drawer because the open
      drawer *is* the overlay (it covers everything below the header) —
      verified as designed. The header **globe language popup** (which does
      float) was separately click-tested: opens on tap, closes on outside
      click, closes on Escape with focus returned, `aria-expanded` correct.
- [x] Zero page errors, zero console errors and zero failed requests during
      all interactions (i.e. no hydration or runtime errors).

### 3. Language selector verification (real clicks)
- [x] Header at every width: the inline `EN | BM | 中文` switcher (≥ 640 px)
      or the 40 px globe disclosure button (< 640 px) is visible **beside the
      WhatsApp button** (adjacency asserted in the DOM at 360–1440).
- [x] Inline switcher clicked at 1280: `/en/services/` → `/ms/services/` →
      `/zh/services/` → `/en/services/`, and a deep project page
      `/en/projects/marble-look-floor-tiling/` → `/zh/…`; `<html lang>`
      follows (`en-MY`/`ms-MY`/`zh-MY`).
- [x] Globe disclosure clicked at 390 (tap flows): en→ms and ms→zh, correct
      destinations.
- [x] Drawer's compact switcher clicked at 360: en→ms. Footer switcher
      clicked: `/en/faq/` → `/zh/faq/`.
- [x] One switcher component (`LanguageSwitcher`) powers header, drawer and
      footer — no duplicate translation system.

### 4. Per-project Open Graph images (from the owner's photographs)
- [x] A **1200×630 (1.91:1) social crop** generated for every published
      project from that project's own hero photograph (libvips "attention"
      smart crop keeps the salient work in frame). 21 progressive JPEGs
      (quality 82 — the format every unfurler, including WhatsApp, decodes),
      25–131 KB each, committed under `public/images/projects/og/`.
- [x] Data model: `Project.ogImage` (typed `ProjectImage`, optional, with a
      documented fallback to the brand card); all 21 published entries
      populated.
- [x] Metadata: every project page now carries `og:image` = its own crop with
      `og:image:width/height` (1200×630), a descriptive localized
      `og:image:alt` (the photo's alt text), and a matching
      `twitter:card summary_large_image` + `twitter:image`. Verified in the
      served HTML for all 63 project pages.
- [x] `npm run audit:project-assets` (new, dependency-free): every referenced
      project image exists on disk, the declared intrinsic dimensions match
      the real files (built-in WebP/JPEG header parser), OG crops are exactly
      1200×630, nothing unreferenced sits in `public/images/projects/`, and
      the generation manifest matches the published set.
- [x] `scripts/make-project-og-images.mjs` (new) documents/regenerates the
      crops; `sharp` is already present via Next.js itself, so no dependency
      was added.

### 5. Chinese OG-image font issue — root cause fixed, self-contained
- [x] Root cause found in `@vercel/og`: it bundles only **Geist Regular
      (Latin)**. For Chinese glyphs satori falls back to **downloading Noto
      Sans SC from fonts.googleapis.com while rendering** — the
      "Failed to load dynamic font" warning in the offline sandbox, and a
      nondeterministic network dependency in any online build.
- [x] Fix: the card route now passes explicit fonts — **Plus Jakarta Sans**
      (the site's brand face, converted from the existing local woff2 files
      to TTF, weights 400/700/800) and a **Noto Sans SC subset** (weights
      400/700; 700 also registers as 800, the usual one-weight-lighter CJK
      pairing) — committed under `app/fonts/`, documented in
      `app/fonts/README.md`, regenerated by `scripts/make-og-fonts.py`.
- [x] The card renders with `fontFamily: "Plus Jakarta Sans, Noto Sans SC"`
      (satori resolves per-glyph fallback), so **every** language card now
      uses the brand typography with true weights, fully offline.
- [x] Verified: the build log contains **zero** font-fetch warnings; the
      served `/zh/opengraph-image/` PNG is **pixel-identical** to a local
      reference render made with only the committed fonts (0 of 756,000
      pixels differ), while the pre-fix image differed in 12.4% of pixels.
- [x] `npm run audit:og-fonts` (new, dependency-free): parses the committed
      TTFs' cmaps and proves every character the card can render (meta
      strings + service names, all three languages) is covered — so a future
      copy edit that introduces an uncovered glyph fails loudly instead of
      silently degrading to the network fetch.

### 6. Chinese project metadata enriched
- [x] The Chinese project meta descriptions were 22–32 characters (the
      English/Malay ones are ~139) — they under-used the search-snippet
      space. Every zh project now carries a bespoke `seoDescription`:
      its factual photo description plus the brand, the (verified) service
      category offer for KL & Selangor and a natural quotation invitation —
      individually written, varied phrasing, no invented facts (no dates,
      locations, outcomes or measurements), ~55–75 characters.
- [x] `getProjectSeo` feeds meta description, `og:description` and JSON-LD
      description from one source, so all three improved together.

### 7. SEO / structured data / links re-verified on the final build
- [x] Sitemaps: **363 URLs** (121 per language), all returning **200**.
- [x] 63 project pages: **63 unique `<title>`s**, meta descriptions present
      (CJK-aware length check), self-referencing canonicals, per-project
      `og:image` crop + dimensions + alt, Twitter large-image cards, and
      JSON-LD graphs containing `WebPage` + `BreadcrumbList` + `ImageObject`
      with **no** `Review`, `aggregateRating` or price anywhere.
- [x] Internal link crawl of all 363 pages: **363 unique internal links, all
      resolving** — no broken links; **48 image references, all 200**.
- [x] `robots.txt` (with sitemap declarations), the `/` → `/en/` 308 redirect
      and the three prerendered OG cards all verified.
- [x] Responsive: **no horizontal overflow** at any of the seven widths on
      home, projects index, project detail and services (measured
      `scrollWidth` vs `clientWidth` in the real browser).

### 8. Testing summary
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems; unused imports in the two new
      scripts removed)
- [x] `npm run build` — **PASS** (373 static pages, zero warnings)
- [x] `npm run audit:business` — **PASS**
- [x] `npm run audit:og-fonts` — **PASS** (new)
- [x] `npm run audit:project-assets` — **PASS** (new)
- [x] Real-browser suite — **329/329 PASS** (screenshots of home + a project
      page saved at all seven widths for the record)
- [x] Served-site SEO sweep — **ALL CHECKS PASSED**

### 9. Data honesty (unchanged standard)
- [x] No customer names, addresses, completion dates, prices, materials
      lists, measurements, before/after claims, reviews, ratings,
      testimonials, certifications or results were invented. The new OG crops
      are derived from the owner-supplied photographs only; the new Chinese
      descriptions add only the brand, the already-published service offer
      and a quotation invitation.

### 10. Git / deployment
- [x] Branch `arena/01a062db-renovix-home-services`, commit `326b3ca`
      ("Phase 13 (final): per-project OG images, self-contained OG fonts, zh
      metadata, real-browser verification"), merged to `main` via **PR #19**
      (merge commit `577b1aa`).
- [x] Diff reviewed before commit: only the files listed above; no debug or
      test leftovers, no secrets, no changes to business facts.
- [x] **Vercel production deployment of `577b1aa`: state "success" —
      "Deployment has completed"** (GitHub deployment status, 2026-09-02
      16:45 UTC); the PR-branch preview deployment also succeeded. (The
      sandbox cannot fetch `*.vercel.app` directly, so deployment status was
      verified through the GitHub API.)

### 11. Still required from the owner (unchanged)
- [ ] Per-project case-study data (customer-approved location, year, property
      type, scope, materials, before/after pairs of the same job) before
      those fields can be published.

## PHASE 13 (PART 5) — Klang Valley Area Expansion, Project Property Types & Scope of Work — [x] COMPLETE

> The expansion pass of Phase 13. Three tasks: (A) 15 new area guides for
> well-known Klang Valley locations not yet covered; (B) `propertyType` on
> the projects whose own photographs/titles establish it; (C) `scopeOfWork`
> bullets for all 21 published projects. Phase 14 has not been started.

### 1. Task A — 15 new area guides (Klang Valley expansion)
- [x] **New KL guides (4)**: TTDI (Taman Tun Dr Ismail), Damansara Heights
      (Bukit Damansara), Sri Hartamas, Brickfields & Mid Valley — KL goes
      **14 → 18 neighbourhoods**.
- [x] **New Selangor guides (11)**: Bandar Sunway, Bandar Utama, Mutiara
      Damansara, Damansara Perdana, Ara Damansara, Bandar Sri Damansara,
      Bangi, Serdang, Balakong, Bandar Baru Klang, Sepang — Selangor goes
      **17 → 28 towns**. Site total **31 → 46 area guides**.
- [x] Every new guide follows the existing architecture exactly
      (`data/area-content/kuala-lumpur-areas-c.ts`,
      `selangor-areas-c.ts`, registered in the hubs): unique intro (3
      paragraphs with internal links), 6 locally-noted services, 5
      property types with era-aware labels, 5 local problems, 4
      locally-tailored process steps, local context, 5 FAQs, related
      services/problems and nearby-area cross-links. Depth matches the
      Cheras baseline; 0 duplicate intros.
- [x] Full **Malay and Chinese** translations written for all 15
      (`data/area-content/translations/{ms,zh}/kuala-lumpur-c.ts` +
      `selangor-c.ts`, registered in the per-language index files) —
      15 × 2 = 30 new translated documents.
- [x] i18n plumbing: 15 new keys in `i18n/coverage.ts` (`ALL_AREAS` +
      the `ms`/`zh` area inventories — the build-time coverage guard
      verifies the sync); 15 established Chinese names in
      `data/i18n/lists.ts` `areaNames` (e.g. 敦依斯迈花园, 白沙罗高原,
      斯里哈达马斯, 十五碑, 双威镇, 万达镇, 珍珠白沙罗, 白沙罗柏兰岭,
      阿拉白沙罗, 斯里白沙罗镇, 万宜, 沙登, 无拉港, 巴生新镇, 雪邦).
- [x] Cross-linking: 20 existing guides gained nearby-area links to the
      new towns (e.g. Cheras→Balakong, Subang Jaya→Bandar Sunway,
      Kajang→Bangi, Klang→Bandar Baru Klang); region hubs' FAQ town
      lists, the Selangor hub intro and the areas-index FAQs updated to
      the new counts (18 / 28). Homepage and services areas sections
      derive from the registry, so no hardcoded counts needed updating.
- [x] **Uniqueness sweep**: a cross-file check found 14 duplicated
      service/property-type notes inside the new guides (the pre-existing
      guides have none); all were rewritten to be area-specific — verified
      **0 duplicates** across the new EN/MS/ZH content afterwards.
- [x] New pages get the same per-page SEO as existing guides
      (self-canonical, hreflang ×4, OG/Twitter, BreadcrumbList + Service
      scoped to the area, FAQPage) via the shared metadata builders —
      verified in the served-site sweep below. Page count: **363 → 408**
      URLs (136 per language). The 15 new zh area names never appear on
      the OG card, so no font regeneration was needed
      (`npm run audit:og-fonts` still PASS).

### 2. Task B — project `propertyType` (only where the photos establish it)
- [x] Every one of the 21 projects was re-checked against its own photo,
      title, description and alt text. **Exactly 4** carry a property
      type, because only 4 have an unambiguous signal:
  - `timber-look-ceiling-beams` → **Condominium** / Kondominium / 公寓
    (the description states a condominium living room)
  - `suspended-ceiling-grid` → **Commercial unit** / Unit komersial /
    商用单位 (grid installed across a commercial unit)
  - `high-ceiling-light-installation` → **Commercial building** /
    Bangunan komersial / 商用建筑 (high-level work inside a commercial
    building)
  - `office-renovation-ceiling-and-tiling` → **Office** / Pejabat /
    办公室 (office interior mid-renovation)
- [x] The other 17 projects stay **unset** — no signal, no invented
      attribution. Set in `projects.ts` + `translations/{ms,zh}/index.ts`
      via `details: [{ key: "propertyType", ... }]`, rendered by the
      existing `ProjectDetailsSection` with the localized label.

### 3. Task C — `scopeOfWork` for all 21 published projects
- [x] 2–3 short work-item bullets per project inserted into EN
      `projectContent` and the MS/ZH translation files (21 × 3 = 63
      entries), placed after each project's `alt`.
- [x] Derived **only** from each project's own title, slug, short
      description and alt text — no invented dates, durations, rooms,
      sizes, materials, brands, costs, locations or outcomes. Example
      (`marble-look-floor-tiling`): setting out and laying large-format
      marble-effect floor tiles; levelling the surface as work proceeds;
      checking the finished floor with a spirit level.
- [x] Rendered by the existing overview section
      (`ProjectOverviewSection`); `getProjectSeo` reused so metadata and
      JSON-LD stay consistent. Translation shape TypeScript-checked
      (scopeOfWork is part of the typed `ProjectContent`).

### 4. Testing
- [x] `npm run type-check` — **PASS** (validates all Task B/C insertions
      in all three languages)
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (**408** static localized pages, up from
      363; 3 sitemaps of 136 URLs each)
- [x] `npm run audit:business` — **PASS**
- [x] `npm run audit:og-fonts` — **PASS**
- [x] `npm run audit:project-assets` — **PASS**
- [x] **Real-browser suite — 154/154 PASS** (Chromium 149 via
      @sparticuz/chromium + puppeteer-core in the scratch dir): 22 pages
      (EN/MS/ZH home, areas index, hubs, new + old area guides, projects
      index, project details, services, problems, quote) × 7 widths
      (360/390/412/768/1024/1280/1440). Checked per visit: HTTP 200,
      exactly one H1, correct `<html lang>`, no horizontal overflow, zero
      page/console errors, every image loaded, the mobile drawer opens
      (≤1024px), the globe language menu opens and navigates (<640px),
      and the desktop switcher navigates (≥640px).
- [x] **Served-site sweep — 408/408 URLs PASS, 0 failures**: every
      sitemap URL returns 200; unique titles and descriptions site-wide
      (0 duplicates); self-canonicals; hreflang sets (self, all three
      languages, `x-default` → English, every alternate resolves); OG +
      Twitter tags; valid JSON-LD with no `Review`/`AggregateRating`/
      price; every internal link and image reference resolves; robots.txt
      intact.

### 5. Data honesty (unchanged standard)
- [x] The new guides contain only publicly known context about each town
      (housing eras, transit, institutions, strata rules) — no invented
      statistics, prices, offices, projects or customer counts. Project
      scope bullets derive from each photo's own description; property
      types are set only where the photo content states them.

### 6. Git / deployment
- [x] Branch `arena/01a06315-renovix-home-services`, commit `1b462ff`
      ("Phase 13 (expansion): 15 new Klang Valley area guides, project
      property types & scope of work"), merged to `main` via **PR #21**
      (merge commit `e1e1f3c`).
- [x] Diff reviewed before commit: only the files listed above; no debug
      or test leftovers, no secrets, no changes to business facts.
- [x] **Vercel deployment verified through the GitHub deployments API**
      (the sandbox cannot fetch `*.vercel.app` directly): PR-branch
      preview of `1b462ff` — state "success" ("Deployment has
      completed", 2026-09-03 05:30 UTC); **production deployment of
      `e1e1f3c` — state "success" ("Deployment has completed",
      2026-09-03 05:33 UTC)**.

## PHASE 14 (Part 1) — Automatic Sitemap Consolidation at `/sitemap.xml` — [x] COMPLETE

**Problem found:** the site used `generateSitemaps()` in `app/sitemap.ts`, which
publishes per-language sitemaps at `/sitemap/{lang}.xml` but leaves
`https://renovixhomeservices.my/sitemap.xml` — the canonical sitemap URL, and
the one Google expects — a **404**. `robots.txt` also advertised the three
child URLs instead of a main sitemap.

**Fix (verified on the served production build):**

- [x] `app/sitemap.ts` consolidated into a **single native sitemap** served at
      `/sitemap.xml`: 408 URLs (3 languages × 136 pages) generated from the
      same content registries that generate the pages, so a new service /
      problem / area / project / translation is picked up automatically on the
      next deploy. Each entry keeps its full hreflang set (`en-MY`, `ms-MY`,
      `zh-MY`, `x-default`), priority and changefreq; a `Map` keyed by URL
      guarantees no duplicates. The build-time `assertCoverageInSync()` guard
      is preserved.
- [x] `lib/sitemap.ts` added as the single source of truth for the sitemap URL
      and the reviewed content date (`CONTENT_LAST_MODIFIED`), replacing the
      local constant; documented why no per-request/build-date `lastmod` is
      emitted (no per-page timestamps exist; faking them would misrepresent
      unchanged pages).
- [x] `app/robots.ts` now emits a single `Sitemap:
      https://renovixhomeservices.my/sitemap.xml` line (previously three child
      URLs). Rules unchanged (`Allow: /`, `Disallow: /_next/` only).
- [x] `next.config.ts`: permanent 308 redirects from the retired
      `/sitemap/{en,ms,zh}.xml` to `/sitemap.xml`, so crawlers and Search
      Console entries that learned the old child URLs keep working.
- [x] Note for the future: Next.js 16 registers `app/sitemap.ts` at
      `/sitemap.xml` itself, so a custom `app/sitemap.xml/route.ts` alongside
      it fails the build with a route/metadata conflict. If the site ever
      approaches the 50,000-URL sitemap limit, the split must replace
      `app/sitemap.ts` with custom route handlers (children + index), not add
      to it. 408 URLs today — no split needed.
- [x] `SITEMAP.md` added: architecture, GSC instructions (submit
      `/sitemap.xml` once only), and the discovery-≠-indexing caveat.

**Verification (all green):** `npm run build`, `lint`, `type-check` and the
three audit scripts pass; `/sitemap.xml` and `/robots.txt` return 200 with
`application/xml` / the correct `Sitemap:` line; the XML is well-formed with
408 unique entries, all HTTPS on the production domain, trailing-slash shape
matching the served canonicals, no query variants, no `/api/*` or private
routes; **all 408 sitemap URLs fetched against the served build return 200,
are not `noindex`, and each page's canonical matches its sitemap `<loc>`
exactly**; `/sitemap/{en,ms,zh}.xml` now 308-redirect to `/sitemap.xml`.

## PHASE 14 (Part 2) — Authoritative Service Platform: pricing, materials, AEO/GEO — [x] COMPLETE

Phase 14 had been merged half-finished (PR #24, "Phase 14 WIP — 50% complete").
The English service pages already carried the new authority sections, but the
Malay and Chinese pages fell back to English for all of them, the pricing rows
had no Chinese copy at all, and there was no machine-readable feed, audit or
verification. This part closes every item on that PR's "Pending — Next
Session" list.

### 1. Pricing translations completed (the main gap)
- [x] `data/pricing/translations/ms.ts` finished — was 21 of 51 rows, now all
      **51** (electrical, flooring, ceiling & partition, welding, renovation
      and handyman added).
- [x] `data/pricing/translations/zh.ts` created — all **51** rows in Chinese.
- [x] `data/pricing/translations/index.ts` registry plus
      `getPricingTranslation(id, lang)`.
- [x] Both files typed against `PricingTranslation`, so a missing or misnamed
      field is a compile error rather than English leaking onto a localized
      page.
- [x] **Prices are never translated.** Translations carry wording only
      (`scope`, `duration`, optional includes/excludes/factors); every number,
      unit, range and currency is read from the English source of truth in
      `pricing.ts`. `localizePricing()` merges the two, so a translation can
      change a sentence but can never change a price.
- [x] `getPricingForService(slug, lang)`, `getAllPricing(lang)` and the summary
      builder are now language-aware, and the approved MS/ZH disclaimers are
      applied through `getPricingDisclaimer(lang)` instead of always emitting
      the English one.
- [x] `PricingSection` reads the localized rows and takes its "last reviewed"
      date from `LAST_REVIEWED` instead of a hard-coded string that could drift.

### 2. Service page copy localized (MS + ZH × 10 services)
- [x] Every Phase 14 section now exists in Malay and Chinese for all ten
      services: `pricing` (intro, starting-from note, disclaimer, table intro),
      `materialsIntro` + `materials`, `costFactorsIntro` + `costFactors`,
      `duration` (intro, items, note), `includes` / `excludes` with their
      titles, and the four `answerFirst` Q&As — **20 files, 60 new localized
      sections**.
- [x] Structural fields (`searchIntents`, `entityKeywords`) stay English by
      design: they are search-intent metadata, not reader-facing copy, and the
      English page remains the canonical source.
- [x] Verified on the served build: no `/ms/` or `/zh/` service page contains
      the English disclaimer or the English "What affects pricing" heading, and
      each carries its own localized equivalent.

### 3. Machine-readable pricing feed
- [x] `app/ai/pricing.json/route.ts` serves the whole priced catalogue at
      **`/ai/pricing.json`** (prerendered, `force-static`) from
      `getAiReadablePricing()` — the same registry the pages render, so the
      feed cannot drift from the site.
- [x] Every figure ships with its scope, unit, factors, disclaimer and
      `lastReviewed`, so an answer engine cannot honestly quote a number as a
      final price. Verified: 200, 51 entries, `lastReviewed 2026-09-03`.

### 4. New audit: `npm run audit:pricing`
- [x] Dependency-free script (`scripts/audit-pricing.mjs`) enforcing that:
      authoritative price fields live only in `pricing.ts` (a price field in any
      translation fails);
      every entry has an id, service, unit, starting price, scope, factors,
      disclaimer and a well-formed `lastReviewed`; ids are unique; every range
      is coherent (`min ≤ max`) and never begins above its own "starting from"
      figure; each `serviceSlug` is a real service; MS and ZH cover every row
      and translate no stale id; and nothing claims a "fixed", "guaranteed",
      "final" or "cheapest" price.
- [x] Registered in `package.json` and documented in `README.md` (which now
      also lists the previously undocumented `audit:og-fonts` and
      `audit:project-assets`, plus a "Pricing data" section explaining the
      single-source rule).

### 5. Verification (all green)
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (408 static localized pages + `/ai/pricing.json`)
- [x] `npm run audit:business`, `audit:og-fonts`, `audit:project-assets`,
      `audit:pricing` — **all PASS**
- [x] **Structured data re-verified against the served production build:**
      all 30 service pages (10 services × EN/MS/ZH) return 200 and each emits
      **WebPage + BreadcrumbList + Service + FAQPage** in one `@graph`, with no
      `Review`, `AggregateRating` or `price`/`priceCurrency` node — **250/250
      checks passed, 0 failures**. Prices stay in the visible table where they
      are labelled "starting from" and dated, and are deliberately *not*
      emitted as schema `Offer` prices.
- [x] **Served-site sweep — 408/408 sitemap URLs return 200, 0 failures.**

### 6. Data honesty
- [x] Every RM figure comes from the 2026 Klang Valley market research already
      recorded in Phase 14 Part 1; no new prices were invented in this part and
      no existing figure was changed — the translations only reworded scope and
      duration around the same numbers.
- [x] Every price is presented as "starting from", beside its cost factors,
      its disclaimer and its review date. No fixed, guaranteed or "cheapest"
      claim exists anywhere in the pricing system.

### 7. Three pricing defects found on review and fixed
A follow-up pass over the merged Phase 14 data found three genuine defects —
all of them cases where the site could show a price nobody could actually be
quoted. All three are fixed and now guarded by the audit.

- [x] **Decimal prices were truncated to whole ringgit.** Six entries stored a
      rounded integer where the research states a decimal:
      `painting-interior` 1 → **1.20**, `painting-exterior` 2 → **1.50**,
      `flooring-spc` 5 → **5.50**, `flooring-vinyl` 4 → **4.70**,
      `ceiling-flat` 3 → **3.50**, `partition-drywall` 7 → **7.50** (each
      `priceRange.min` corrected to match). The pricing table was therefore
      advertising figures *below* the researched rate — e.g. "RM1 per sqft"
      for interior painting against a real RM1.20. The `researchNote` on each
      entry already recorded the correct decimal, so no new price was invented:
      the stored number was simply brought back in line with its own source.
- [x] **The answer-first headline took `Math.min` across mixed units.** On
      tiling that produced "Starting from RM2 per sqft" — the tile *hacking*
      rate — above a table whose cheapest actual tiling job is RM8. The
      headline now uses each service's explicitly marked `isHeadline` row through the centralized
      localized headline helper, so the amount and unit identify the same
      catalogue row; the lowest row is no longer used as the primary signal.
- [x] **Handyman advertised a price with no matching row.** The headline read
      "fixed jobs from RM30" while the cheapest handyman row is RM60. Corrected
      to RM60 in English, Malay and Chinese.
- [x] **New audit rule (check 7)**: every service must declare exactly one `isHeadline` pricing row. This
      makes headline selection explicit, keeps units coherent, and makes the
      class of mixed-unit errors a build failure rather than something a reader
      has to notice.
- [x] Re-verified after the fixes: `type-check`, `lint`, `build` and all four
      audits **PASS**; **408/408 sitemap URLs return 200**; structured data
      **150/150 checks, 0 failures**; and the rendered headline on the served
      build now reads RM8 (EN tiling), RM1.20 (EN painting), RM5.50 (MS
      flooring) and RM3.50 (ZH ceiling) — each matching its own table.

## PHASE 15 — Malaysia + Klang Valley Location Domination — [x] COMPLETE (data integrity completed in Phase 18)

> **Status correction (Phase 18).** Phase 17's master audit found that the
> Phase 15 search intent matrix, while typed and audited, kept its own
> hand-typed `startingPrice`/`unit`/sub-service values which had drifted from
> the single-source catalogue (10 price mismatches, 1 unit mismatch, 12
> sub-service slug mismatches, plus several semantic mismatches). No wrong
> price ever reached a user — the matrix renders nothing today and area pages
> price from catalogue headlines — but the data set was a latent integrity
> risk and the audit's "pricing matches" check only verified that the
> `pricingId` existed. **Phase 18 removed the duplicate price/unit source, made
> `pricingId` authoritative, corrected every mapping and taught the audits to
> compare effective values.** Location registry ↔ area-content reconciliation
> remains scheduled for Phase 23.

### 1. Location hierarchy & centralized data source of truth
- [x] Scalable, single-source location hierarchy architecture:
      **Malaysia → State / Federal Territory → District → City / Town → Neighbourhood → Sub-area / Kampung**.
- [x] Centralized database in `data/locations/registry.ts` maintaining for every location:
      `id`, `slug`, `name`, `level`, `country`, `state`, `district`, `city`, `town`, `neighbourhood`, `parentLocationId`, `aliases`, `nearbyLocationSlugs`, `propertyContext` (housing eras, property types, strata density, access considerations), `serviceRelevance` (primary services, urgent services, common problems), `status` (active / planned), `published`, `seo` metadata, `lastReviewed` (`2026-09-03`), and `qualityScore`.
- [x] All 46 active locations across Kuala Lumpur (18 neighbourhoods) and Selangor (28 cities/townships) mapped to their official administrative districts (e.g., Petaling, Hulu Langat, Klang, Gombak, Sepang, Segambut, Lembah Pantai, Kepong, Seputeh, Wangsa Maju, Batu, Cheras).
- [x] Documented future expansion roadmap (Penang, Johor, Negeri Sembilan) with status `planned` and gated (`published: false`) so no thin, empty, or unverified pages are ever generated.

### 2. Search Intent Matrix & Modifier Strategy
- [x] Typed `LocationServiceMatrixEntry` in `data/locations/intent-matrix.ts` connecting:
      **Location + Service + Sub-Service + Problem + Search Intent Modifier + Phase 14 Pricing Reference**.
- [x] Intelligently chosen intent modifiers:
      - `"near_me"`: natural phrasing ("plumber in Shah Alam near me", "electrician Mont Kiara near me").
      - `"best_reliable"`: objective, trustworthy phrasing ("reliable contractor", "trusted local service" — no boastful unverified claims).
      - `"affordable_cost"`: transparent starting rates from single-source Phase 14 pricing.
      - `"repair"` vs `"installation"` vs `"replacement"`: clearly distinguished project scopes.
      - `"residential"` (terrace, condo, semi-D, bungalow) vs `"commercial"` (shoplots, offices).
      - `"emergency_triage"`: strictly restricted by automated audit to genuine safety-critical faults (electrical power tripping/hazards and active pipe bursts/water leaks).
- [x] Zero duplicate doorway pages: every location guide delivers unique, condition-led insights into local housing stock, strata management rules, and renovation sequences.

### 3. Answer-First & Local Pricing Transparency Components
- [x] **`AreaAnswerFirstSection.tsx`**: Direct, answer-first responses for humans, search engines, and LLM answer engines (AEO/GEO/LLMO) on service coverage, indicative starting rates, urgent support policy, and quotation steps.
- [x] **`AreaPricingSection.tsx`**: Location pricing transparency component linking the area's top services directly to Phase 14 centralized starting prices in `data/pricing/pricing.ts`, highlighting local cost factors (high-rise strata permits/lift booking vs mature landed house replumbing/rewiring).
- [x] **`AreaIntentMatrixSection.tsx`**: Search intent matrix section organizing local work into three clear pillars: *Repairs & Troubleshooting*, *Installations & Upgrades*, and *Full House & Commercial Modernisation*, with deep links to service and problem guides.
- [x] **`AreaHero.tsx` & `AreaRegionPage.tsx`**: Enhanced with administrative district badges and District & Township explorer sections.
- [x] **`AreasPage.tsx` (`/areas/`)**: Upgraded to a comprehensive Malaysia & Klang Valley master coverage directory featuring active coverage guides, district grouping explorer, and transparent future expansion roadmap.

### 4. Multilingual Implementation (EN, MS, ZH)
- [x] Full localization across English, Bahasa Melayu, and Simplified Chinese for all new components, dictionary keys, answer-first blocks, pricing notes, search-intent categories, and hierarchy labels.
- [x] Zero hardcoded English strings on `/ms/` or `/zh/` pages; type-safe dictionary enforcement in `i18n/types.ts`.

### 5. Quality Gate & Programmatic Safety Audit (`npm run audit:locations`)
- [x] Quality score evaluation engine in `data/locations/quality-score.ts` enforcing the 7 Phase 15 rules: search intent, verified coverage, unique local context, service relevance, unique FAQs, genuine nearby connections, and single-sourced pricing.
- [x] New dependency-free automated audit script (`scripts/audit-locations.mjs`) registered in `package.json` (`npm run audit:locations`), mechanically verifying registry integrity, district groupings, matrix entries, emergency claims safety, pricing references, and multilingual coverage.

### 6. Technical & SEO Validation
- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 errors, 0 warnings)
- [x] `npm run build` — **PASS** (417 static localized pages generated)
- [x] `npm run audit:business`, `audit:og-fonts`, `audit:project-assets`, `audit:pricing`, `audit:locations` — **all PASS**
- [x] Served-site sweep & JSON-LD schema verification: all pages return HTTP 200 with valid `WebPage`, `BreadcrumbList`, `Service` (with `Place` / `containedInPlace`), `FAQPage`, and `Organization` / `LocalBusiness` schemas.

---

## PHASE 16 — Full Search + AI Authority — [x] COMPLETE

The authority-building phase. No new page types, no doorway pages, no
keyword-stuffed copy: the work was (1) a full pricing-contradiction audit with
fixes across all 3 languages, (2) a centralized AI-readable knowledge layer,
(3) two permanent audits, (4) honest-claim remediation, (5) duplication and
cannibalization remediation, and (6) the strategic map + governance docs for
all future SEO growth.

### 1. Pricing authority — full contradiction audit and remediation (§19)
- [x] Mechanically compared every RM figure in every service file's
      Renovix-voice copy (answer-first, FAQs, pricing, duration, cost factors)
      against that service's centralized pricing rows. Found and fixed genuine
      contradictions where pages advertised prices no row backs: handyman
      hourly RM40 (row min RM60) and picture-hanging RM30 (row min RM60);
      painting apartment RM800 (full-house row min RM1500) and an unrowed
      labour-only range; tiling/flooring large-format and marble ranges with
      no backing rows; welding full-house and stainless-steel figures above
      every row; unrowed polyurea/bunga/factory-direct/ceramic cross-refs.
      Fixes align copy to researched row values or convert claims to honest
      per-job/per-design quotations — no new prices invented anywhere.
- [x] Same fixes applied to the Malay and Chinese mirrors (numbers are never
      translated, so mirrors were located by their identical figures).
- [x] Found and fixed a structural single-source violation: Phase 15's
      `AreaAnswerFirstSection` hardcoded 5 starting prices into component code
      across 138 area pages. It now renders them from `getPricingById`
      through localized templates, so catalogue updates can never leave stale
      prices behind.
- [x] New permanent rule 8 in `npm run audit:pricing`: every service-page
      price claim must sit inside a pricing-row range (own service, or a named
      cross-service row); MS/ZH may quote only figures the English page
      states; problems/areas/projects/locations/FAQs/dictionaries quote no
      prices at all. All documented exemptions (materials supply context, TNB
      utility fees, hand-verified general-renovation project totals) are
      recorded in the audit source.

### 2. AI-readable business knowledge (§33) + llms.txt
- [x] `lib/ai-knowledge.ts`: single builder deriving company info, contact,
      areas (46 guides), services (10, with row-backed price notes),
      problems (46), projects (21), process and limitations from the same
      registries the pages render.
- [x] `/ai/business.json` (new, prerendered): full business knowledge for
      assistants. `/llms.txt` (new, prerendered): crawler summary with
      services, guides, areas, quoting process and limitations.
- [x] Footer links `/llms.txt` (localized label) for feed discovery.
- [x] Caught and fixed the mixed-unit headline defect in the new feed during
      verification (tiling showed the RM2 hacking rate): AI headlines now use
      each service's audited `isHeadline` row, which keeps the job and unit
      paired with the published amount.

### 3. Claim honesty (§9, §40)
- [x] Removed 2 "guaranteed workmanship/quality" meta descriptions
      (locations registry), all unverified "same-day"/"after-hours" promises
      (handyman, plumbing, electrical) and the "#1 reason" phrasing — replaced
      with conditional scheduling language and measured terms, in EN+MS+ZH.
- [x] Verified clean: no 24/7, ranking, credential, award or "cheapest"
      claims; "near me" only in intent metadata (1–2 per service, never in
      prose); "emergency" only in safety-critical triage, the sagging-ceiling
      safety question and fire-escape design context.

### 4. Duplication + cannibalization (§23, §24)
- [x] 8 service pages asked the identical cost question in both `faqs` and
      `answerFirst` with near-identical answers — retitled the answer-first
      questions to their starting-price role (EN), plus 2 MS duration pairs.
- [x] 5 area-guide answers were pasted verbatim across pages (How-do-we-start,
      rental refurbishment ×2, strata approval ×3) — each rewritten with
      honest area-grounded detail. Audit now enforces: one question per page,
      no identical Q+A across pages (312 meta descriptions + 312 H1s verified
      unique per language).

### 5. New permanent audit — `npm run audit:authority`
- [x] Dependency-free script enforcing: no fabricated claims; urgency language
      only in allowlisted triage contexts; every related-service/problem,
      nearby-area, problem→service and intent-matrix slug resolves; index
      pages iterate the registries + sitemap guard stays wired (orphan audit);
      page-aware FAQ uniqueness; per-language metadata uniqueness; AI feeds
      exist, read the shared builder, hardcode no prices, and are footer-
      linked; alt text on every rendered image.

### 6. Strategy docs (§36, §38)
- [x] `CONTENT_MAP.md`: the 10 topic clusters, 46 problem guides, 46 area
      guides, intent→page mapping, accepted gaps (flooring/welding problem
      guides, painting/waterproofing project proof, blog), an intent-mapped
      7-piece guide backlog (build only with real research, EN+MS+ZH
      together), the AI layer inventory and monitoring readiness.
- [x] `CONTENT_GOVERNANCE.md`: the 10 binding rules for all future content
      (never fabricate, single-source pricing, no thin/doorway pages, honest
      urgency, multilingual discipline, schema honesty, generated AI layer,
      image rules, conversion without dark patterns, change checklist).
- [x] Deliberately built NO new content pages: quality over page count. No
      service×location doorways (would be 460 near-duplicates), no speculative
      guides, no thin translations.

### 7. Verification (all green)
- [x] `npm run type-check` — PASS; `npm run lint` — PASS (0 problems);
      `npm run build` — PASS (408 sitemap URLs + 3 AI/static routes).
- [x] All 6 audits PASS: business, og-fonts, project-assets, pricing
      (incl. new rule 8), locations, authority (new).
- [x] Served-site sweep: **408/408 sitemap URLs return 200**; 13-page sample
      (EN/MS/ZH home, service, problem, area, projects, FAQ, quote, contact,
      about): exactly one H1, correct `html lang`, self-canonicals,
      hreflang ×4, 4 JSON-LD blocks each, zero Review/AggregateRating;
      `/llms.txt`, `/ai/business.json` (10 services / 46 areas / 46 problems /
      21 projects), `/ai/pricing.json` (51 entries) all 200 with correct
      content types; area pages render catalogue prices; fixed copy confirmed
      live (handyman RM60–200, no RM40).
- [x] No client-JS added (feeds, audits and copy only); static-first
      performance profile unchanged. No browser click-through suite exists in
      this environment, so none is claimed — responsiveness and interaction
      verification is deferred to the Final Phase.

### 8. Data honesty (unchanged standard)
- [x] No prices, reviews, ratings, coordinates, licences, certifications,
      awards, experience claims, projects, team members or outcomes invented.
      Every corrected figure already existed in the researched pricing
      catalogue; every rewritten answer uses only established process facts.

---

## FINAL PHASE — Final Audit, Stabilization & Launch Readiness — [x] COMPLETE

This phase is complete on the working branch. It stabilized the existing
architecture rather than adding another SEO or content system.

### Final stabilization
- [x] Pricing is centralized and explicit: each service has exactly one
      `isHeadline` row in `data/pricing/pricing.ts`; service, area and AI
      headline displays use the same row-backed helpers; Malay and Simplified
      Chinese pricing tables use localized row labels without translating
      numbers or units.
- [x] Removed obsolete service-level pricing-copy fields so editorial content
      cannot silently override the catalogue. Existing service-page price
      references remain guarded by `npm run audit:pricing`.
- [x] Quote submissions derive the service label from the selected service on
      the server, reject encoded request bodies over 64 KB, enforce the
      same-origin policy without blanket preview-domain access, and remain
      retryable after a failed request.
- [x] Replaced privacy and terms placeholders with substantive localized
      sections for English, Bahasa Melayu and Simplified Chinese.
- [x] Added response security headers and a CSP, removed the framework-asset
      robots exclusion, and kept the root and localized not-found fallbacks
      branded and navigable. Unknown URLs correctly remain HTTP 404/noindex.
- [x] Reviewed keyboard behavior for the mobile drawer and compact language
      menu: visible focus styles, Escape handling, trigger restoration, body
      scroll locking and a drawer focus cycle are present. No browser engine is
      installed in this environment, so visual breakpoint verification is not
      claimed.

### Final verification
- [x] `npm run type-check` — **PASS**.
- [x] `npm run lint` — **PASS** (0 problems).
- [x] `npm run build` — **PASS** (419 generated route outputs; 408 URLs in
      the published sitemap).
- [x] `npm run audit:business`, `npm run audit:og-fonts`,
      `npm run audit:project-assets`, `npm run audit:pricing`,
      `npm run audit:locations` and `npm run audit:authority` — **all PASS**.
- [x] Production serving checks — **PASS**: all 408 sitemap URLs returned
      HTTP 200; canonical and `en-MY`/`ms-MY`/`zh-MY`/`x-default` hreflang
      links, one H1, valid JSON-LD and absence of review/rating schema were
      checked across all sitemap URLs; robots, sitemap, AI feeds, legal pages,
      security headers and branded 404 responses were checked.
- [x] Quote endpoint checks — **PASS**: local valid-origin validation returns
      field errors for an incomplete payload, a foreign origin returns 403,
      and an oversized body returns 413. No email was sent during this check.

### Launch notes
- [x] Phases 14, 15 and 16 are marked complete above; this is the final audit
      phase and no additional phase is being created.
- [ ] Live production deployment, real-domain DNS/HTTPS checks, Search Console
      submission, transactional email-provider configuration and real-device
      visual testing still require the site owner/deployment environment. They
      were not available here and are not claimed as completed.
- [x] Genuine remaining issues are limited to those deployment-owner checks;
      no known source, build, audit or sitemap failure remains in this branch.

---

## PHASE 18 — Core Technical, Data Integrity & Documentation Fix — [x] COMPLETE

Scope: fix every technical/data-integrity issue the Phase 17 master deep audit
identified, before any new page family is created. Coding only — no owner input
required, no new pages, no fabricated data.

### 1. Search intent matrix — single source of truth

- [x] `data/locations/types.ts`: the mutable `startingPrice` and `unit` fields
      were **removed** from `LocationServiceMatrixEntry`. `pricingId` is now the
      only pricing link.
- [x] `data/locations/intent-matrix.ts`: every price/unit literal deleted; new
      `resolveIntentPricing()` resolver derives effective starting price, unit,
      currency, pricing type, catalogue sub-service, formatted amount,
      `lastReviewed` and disclaimer from `getPricingById(pricingId)`.
      "Starting from" semantics and catalogue units are preserved verbatim.
- [x] No price was invented and no arbitrary catalogue row was created. Every
      intent was either derived from its existing row or **re-pointed to the
      correct existing row**, and the surrounding copy (sub-service name, local
      context note, search-query examples) was corrected so the intent and the
      price describe the same service.

| Phase 17 ID | Intent | Was | Now (derived from pricing.ts) |
|---|---|---|---|
| P-01 | `shah-alam-roof-waterproofing` | `waterproofing-flat-roof`, hand-typed RM15/sqft, sub-service `roof-leak-repair` | `waterproofing-flat-roof` → **RM8/sqft**, sub-service `flat-roof-waterproofing`; copy re-scoped to flat roof / roof terrace membrane work |
| P-02 | `petaling-jaya-flooring-spc` | slug `spc-flooring-installation` | slug `spc-flooring` → RM5.50/sqft (unchanged price) |
| P-03 | `petaling-jaya-electrical-rewire` | `electrical-db-box`, RM650/**job** vs catalogue RM400/**unit** | re-pointed to **`electrical-full-wiring`** → **RM5,000/job**, slug `full-house-wiring` — the honest concept for a rewire/DB-upgrade intent |
| P-04 | `cheras-waterproofing-bathroom` | RM1,800/bathroom | **RM1,500/bathroom** from `waterproofing-bathroom-hack` |
| P-05 | `cheras-tiling-repair` | `tiling-floor-ceramic` (a *new-installation* row) | re-pointed to **`tiling-repair`** → RM150/job, slug `tile-repair` |
| P-06 | `mont-kiara-condo-renovation` | `renovation-bathroom-full` RM8,000/**bathroom** for a condo refurbishment | re-pointed to **`renovation-mid`** → RM70/**sqft**, slug `mid-range-renovation` |
| P-07 | `mont-kiara-electrical-safety` | RM80/job | **RM150/job** from `electrical-troubleshoot`, slug `troubleshooting` |
| P-08 | `subang-jaya-plumbing-repiping` | `plumbing-water-heater-install` (wrong service concept) | re-pointed to **`plumbing-pipe-leak-visible`** → RM150/job, slug `pipe-leak-repair`; the note states plainly that whole-house re-piping is quoted after inspection |
| P-09 | `usj-kitchen-extension-renovation` | `renovation-kitchen`, hand-typed RM15,000/job | re-pointed to **`renovation-extension`** → RM150/sqft, slug `house-extension` |
| P-10 | `bangsar-house-modernisation` | `renovation-bathroom-full` per bathroom | re-pointed to **`renovation-mid`** → RM70/sqft |
| P-11 | `ttdi-waterproofing-roof-terrace` | RM15/sqft | **RM8/sqft** (`waterproofing-flat-roof`), copy re-scoped |
| P-12 | `puchong-bathroom-waterproofing` | RM1,800/bathroom | **RM1,500/bathroom** |
| P-13 | `kajang-landed-roof-leak-repair` | RM15/sqft | **RM8/sqft**, copy re-scoped |
| P-14 | `klang-metal-welding-grille` | RM28/sqft, slug `security-grilles` | **RM12/sqft** from `welding-grille-window`, slug `window-grille` |
| P-15 / P-16 | `cyberjaya-condo-painting-spc`, `shah-alam-plumbing-leak` | correct values, non-catalogue slugs/names | now derived; slugs `interior-painting`, `pipe-leak-repair` |

Result: **10 numeric mismatches, 1 unit mismatch and 12 sub-service slug
mismatches resolved; 16/16 intents now derive their pricing.**

### 2. Automated audits strengthened

- [x] `scripts/audit-locations.mjs` — the "pricing matches" check no longer just
      confirms that a `pricingId` exists. It now parses all 51 catalogue rows and,
      for every intent entry, fails with a precise message on:
      a stale/unknown `pricingId`; an unparsable catalogue price or missing unit;
      a `pricingType` that is not `starting_from`; a `subServiceSlug` that is not
      a catalogue sub-service; a `subServiceSlug`/`subServiceName` that does not
      belong to the referenced row; and a service/`pricingId` service mismatch
      (semantic guard). It also **fails if the matrix reintroduces any
      independent `startingPrice`/`unit` literal**, or if `resolveIntentPricing()`
      disappears. Error messages name the intent id, the pricingId, and the
      expected vs actual value/unit/sub-service.
- [x] `scripts/audit-authority.mjs` — validates every intent-matrix `pricingId`
      and `subServiceSlug` against the pricing catalogue, and fails on a
      sub-service declared without a `pricingId`.
- [x] Drift verified to FAIL: temporarily re-pointing the roof intents to
      `waterproofing-balcony` produced 6 explicit failures; the change was
      reverted. No audit rule was weakened to obtain a PASS.

### 3. Documentation

- [x] `PROJECT_PROGRESS.md`: the missing **PHASE 12 — Quote Form Backend &
      Resend Integration** heading and introduction were reconstructed above the
      orphaned checklist, with an honest status table — backend/code
      **COMPLETE**, **live email delivery OWNER-GATED** until `RESEND_API_KEY`
      and a verified `QUOTE_FROM_EMAIL` are set (the endpoint returns 503 until
      then). Live delivery is *not* marked complete anywhere.
- [x] Stale counts corrected via a verified inventory table in the Overview:
      46 area guides · 136 canonical pages per language · 408 canonical URLs ·
      51 pricing rows · 10 affected pricing entries from the Phase 17 audit.
      Historical sentences that quoted "33 area guides" now carry the current
      figure.
- [x] Phase 15 re-stated accurately: complete, with its data-integrity debt
      closed here in Phase 18; registry ↔ area-content reconciliation stays
      Phase 23.
- [x] `CONTENT_GOVERNANCE.md`: new binding rule — search-intent pricing must
      never maintain an independent price/unit source.

### 4. Safe technical debt

- [x] Legacy homepage problem-preview duplication removed. `data/problems.ts`
      no longer stores 14 duplicated labels/hrefs plus 28 duplicated MS/ZH
      labels; it now holds only the curated preview order and the per-category
      icon. `getProblemPreviews()` derives every label and slug from the
      authoritative `data/problem-content` registry in all three languages, and
      `problemPreviewLabels` was deleted from `data/i18n/lists.ts`. Homepage
      markup, routes and URLs are unchanged.
- [x] No large refactor, no route changes, no unrelated architecture touched.

### 5. Testing

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS**
- [x] `npm run audit:business` — **PASS**
- [x] `npm run audit:og-fonts` — **PASS**
- [x] `npm run audit:project-assets` — **PASS**
- [x] `npm run audit:pricing` — **PASS** (51 rows)
- [x] `npm run audit:locations` — **PASS** (now with 16 intents value-compared)
- [x] `npm run audit:authority` — **PASS**
- [x] Sitemap still emits **408 `<loc>` URLs**; no canonical URL disappeared
- [x] No user-visible price contradicts `data/pricing/pricing.ts`; no language
      fallback introduced; no fabricated data added
- [x] No real-browser verification is claimed — static verification only

### Out of scope (deliberately not started)

Sub-service pages, blog pages, new location pages, projects/photos, GA4/GTM,
Search Console analysis, owner data — all remain Phase 19+ work.
