# Renovix Home Services — Project Progress

## Overview

- **Brand:** Renovix Home Services
- **Market:** Kuala Lumpur, Selangor and the Klang Valley
- **Domain:** renovixhomeservices.my
- **Stack:** Next.js 16.3.3, React 19.2.8, TypeScript 6.0.3, Tailwind CSS 4.3.3
- **Languages:** English (`/en/`), Bahasa Melayu (`/ms/`), Simplified Chinese (`/zh/`) — see Phase 6

---

## PHASE 1 — Foundation, Design System & Homepage

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

## PHASE 8 — Advanced Quote System — [ ]

## PHASE 9 — Further Conversion & SEO Expansion — [ ]

---

## Notes

- No phone number, WhatsApp number, email, address, prices, reviews, ratings, certifications, licences, warranties, years of experience, projects or team members have been invented.
- Contact details use placeholders:
  - `[PHONE NUMBER]`
  - `[WHATSAPP NUMBER]`
  - `[EMAIL]`
  - `[ADDRESS]`
  - `[BUSINESS HOURS]`
- Dedicated service detail pages were built in Phase 2; problem pages were built in Phase 3; the local SEO area architecture (2 region hubs + 31 unique location guides + areas index) was built in Phase 4. Phase 5 adds the supporting pages and a portfolio framework containing only clearly labelled placeholders. Phase 6 delivered the multilingual architecture and full translations for the core pages; the long-form service, problem and area catalogues remain English-only and the blog is not built.
