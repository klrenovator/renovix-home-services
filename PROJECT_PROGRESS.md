# Renovix Home Services — Project Progress

## Overview

- **Brand:** Renovix Home Services
- **Market:** Kuala Lumpur, Selangor and the Klang Valley
- **Domain:** renovixhomeservices.my
- **Stack:** Next.js 16.3.3, React 19.2.8, TypeScript 6.0.3, Tailwind CSS 4.3.3
- **Languages:** English (`/en/`), Bahasa Melayu (`/ms/`), Simplified Chinese (`/zh/`) — see Phase 6

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
- Deep content (10 services, 46 problems, 33 area pages) is English-only, so
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

## Notes

- No phone number, WhatsApp number, email, address, prices, reviews, ratings, certifications, licences, warranties, years of experience, projects or team members have been invented.
- Contact details use placeholders:
  - `[PHONE NUMBER]`
  - `[WHATSAPP NUMBER]`
  - `[EMAIL]`
  - `[ADDRESS]`
  - `[BUSINESS HOURS]`
- Dedicated service detail pages were built in Phase 2; problem pages were built in Phase 3; the local SEO area architecture (2 region hubs + 31 unique location guides + areas index) was built in Phase 4. Phase 5 adds the supporting pages and a portfolio framework containing only clearly labelled placeholders. Phase 6 delivered the multilingual architecture and full translations for the core pages; the long-form service, problem and area catalogues remain English-only and the blog is not built. Phase 8 was the quality optimization pass (performance, accessibility, mobile & UX); the advanced quote system remains future work.
- Phase 9 was the final QA audit: full route, multilingual, service, problem, location, conversion, SEO, performance, accessibility and code-quality review. Six genuine defects were fixed (three language-mixing bugs, the redirecting `og:image`, the missing mobile CTA and the on-demand OG route), dead code was removed and two build-time i18n guards were added. Remaining known issues are listed at the end of the Phase 9 section.
