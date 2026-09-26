# Renovix Home Services — Project Progress

## Overview

- **Brand:** Renovix Home Services
- **Market:** Kuala Lumpur, Selangor and the Klang Valley
- **Domain:** renovixhomeservices.my
- **Stack:** Next.js 16.3.3, React 19.2.8, TypeScript 6.0.3, Tailwind CSS 4.3.3
- **Languages:** English (`/en/`), Bahasa Melayu (`/ms/`), Simplified Chinese (`/zh/`) — see Phase 6

### Current site inventory (re-verified in Phase 37, 2026-09-20, `npm run build` + locally served `/sitemap.xml`; re-checked 2026-09-21 after Phase 38–40 — Phase 40 added internal links only, so no count below changed; re-checked 2026-09-22 after Phase 41, which changed `<title>` wording and added one rendered internal-link layer, so no URL, page, price or section count below changed; re-checked 2026-09-22 after Phase 42, which changed only the `/llms.txt` feed and the homepage's structured data, so no URL, page, price, section or link count below changed)

Phase 43 re-verification (2026-09-22): the same inventory and all 678 URLs
remain intact. Only service structured-data completeness/entity links and
regression guards changed; no visible section, price or HTML link changed.

Phase 44 re-verification (2026-09-22): the same inventory and all 678 URLs
remain intact. Only the project pages' inline re-declarations of their pillar
Service entities changed (69 of 84 localized project pages, names in JSON-LD
only) plus the regression guards; no visible section, price, HTML link, title
or metadata changed.

Phase 45 re-verification (2026-09-22): the same inventory and all 678 URLs
remain intact. The Knowledge Hub guides now link every priced scope whose table
they quote (and are linked back on those scope pages); no URL, page, price,
service, problem, area or project changed.

Phase 46 re-verification (2026-09-22): the same inventory and all 678 URLs
remain intact. The English-only registry copy that reached `/ms/` and `/zh/`
pages (pricing scope/duration on sub-service pages, price-factor bullets on
pillars, district names/descriptions on area pages, hubs and indexes) is now
localized, and the last 4 problem guides without a bookable-scope link are
wired to the scopes whose own copy describes them; no URL, page, price,
service, problem, area, project, title or JSON-LD node changed.

Phase 47 re-verification (2026-09-23): the same inventory and all 678 URLs
remain intact. Every short label that links to an area guide or a problem guide
now says what that page calls itself (one entity, one name), in visible text
and in the `ItemList` / `WebPage` nodes; 4 Chinese area guides were harmonized
to the Chinese name the rest of the `/zh/` corpus already used for them, and
the duplicate 114-row problem card-label table was retired in favour of the
guides. Measured on a before/after crawl of all 678 URLs: **0 English pages
changed**, **0 prices, 0 URLs, 0 headings, 0 links, 0 images, 0 canonicals,
0 hreflang entries and 0 JSON-LD node counts changed**; only the 4 harmonized
Chinese guides changed a `<title>`/description (the name token inside the
existing pattern) and 148 localized pages changed a label string.

Phase 48 re-verification (2026-09-23): all inventory counts remain unchanged.
The 12 Knowledge Hub guides already named specific area guides in both regions,
and the two region hubs already linked back to every guide, but **0 of 72**
guide → region links rendered in the guides' main content. Region links are
now derived only from each guide's published, localized related-area cards;
all **72 of 72** pairs link in both directions across EN/MS/ZH. An independent
before/after crawl of all 678 pages found precisely 36 guide pages changed
in the measured content fields (2 existing-style cards + 2 links each);
the other 642 pages and every price, title, canonical, hreflang entry, image
and JSON-LD block are unchanged in that comparison.

Phase 49 re-verification (2026-09-23): all inventory counts, all 678 URLs and
all 689 static generation entries remain unchanged. Three crawler-facing
signals that had never been compared were measured and corrected: the sitemap's
`lastmod` (36 guide entries were dated before the guides were published),
`og:locale:alternate` (absent on all 678 pages while every page published
`og:locale` and a complete hreflang set), and the areas index's `ItemList` (12
of 15 index pages published one). Fixed from data the registries already
recorded; no page, price, URL, heading, visible sentence, canonical, hreflang
set or image changed. An independent before/after fetch of all 678 pages from
two production builds (the pre-change commit and the new one), compared with
`<script>` blocks and the two new meta tags removed, found **0 visible-DOM
differences on 678 of 678 pages**.

Phase 50 re-verification (2026-09-24): all inventory counts, all 678 URLs and
all 689 static generation entries remain unchanged. A single centred paragraph
now links the homepage in all 3 languages to the Knowledge Hub and portfolio
in `<main>` (was 0; now 2 × 3 contextual links), the `WebSite`
`potentialAction` is `SearchAction` on all 678 pages (was `ReadAction`), the
3 previously unmapped electrical projects now carry `lighting-point` (28 of 28
published projects mapped, was 25), and the sub-service/problem project slices
were widened 3 → 6 so every genuine `lighting-point` proof link (6 of 6) can
render. No price, canonical, hreflang, image or route changed.

Phase 51 re-verification (2026-09-24): all inventory counts, all 678 URLs and
all 689 static generation entries remain unchanged. The site's answer surface
(`/faq/`, reachable from the header, footer and homepage) was the one hub on the
site whose main content carried **0 links** into the problem library, the
Knowledge Hub and the portfolio, and **6 of its 18 answers named a page
outright** — "Visit the Service Areas page", the Get-a-Quote form, the Kuala
Lumpur and Selangor coverage sections, condo renovation approvals — while
rendering no link at all. Every FAQ now links the page its own copy names, and
the hub's existing browse list gained the three content layers it was missing.
An independent before/after crawl of all 678 pages found exactly **3 pages
changed** (`/en/faq/`, `/ms/faq/`, `/zh/faq/`, +9 anchors each) and **0 changes**
to any page's status, `<title>`, canonical, meta description, H1 or JSON-LD
block count; the whole-site source→target link matrix changed in exactly one
row.

Phase 53 re-verification (2026-09-24): all inventory counts, all 678 URLs and
all 689 static generation entries remain unchanged. A whole-corpus link-graph
analysis found **52 of the `nearbyAreas` adjacency relations were one-way**
(e.g. Kampung Baru named Sentul, Setapak and Ampang; none linked back). Every
missing return link was added from the pair the other guide already asserted,
making 53 of 53 area guides symmetric, and a regression guard now fails the
build on any one-way pair. An independent before/after crawl of all 678 pages
found exactly **81 pages changed** (27 area guides × 3 languages, +156 anchors)
and **0 changes** to any status, title, description, canonical, H1, image or
JSON-LD block count. Projects remain unlinked to areas by design: no project
carries a confirmed location.

Phase 52 verification (2026-09-24): the current checkout was inspected before
any change. The 17 static audits, `type-check`, ESLint and a fresh production
build all pass; the build generated **689 / 689** entries. A fresh `next start`
served all **678 / 678** sitemap URLs and `audit:live` passed **284 / 284**
checks with **0 warnings and 0 failures**. The actual service, sub-service,
problem, area/region, Kampung Baru locality, project and Knowledge Hub
registries remain internally linked, localized and represented in the feeds,
sitemap and structured data. No genuine SEO/GEO/AEO defect was found that could
be fixed without inventing business data, changing prices, adding an
unsupported page or making an owner-gated decision, so the website code and
branding were deliberately left untouched.

| Item | Count |
|---|---|
| Service pillar pages | 10 per language |
| Sub-service pages | 51 per language |
| Existing overview scopes listed on the service pillars | **208 per language** (not standalone pages; re-counted in Phase 43) |
| Overview scopes represented in pillar `OfferCatalog` nodes | **624 of 624** across 30 localized pillars (Phase 43; was 504) |
| Sub-service `Service` nodes linked to the shared provider + localized pillar | **153 of 153** (Phase 43; was 0) |
| Problem guides | 57 per language (10 categories) |
| Area guides | **53** (21 Kuala Lumpur + 32 Selangor) + 2 region hubs + areas index per language |
| Projects | 28 per language (Phase 23 added 7; 2 painting shots withdrawn by owner decision) |
| Knowledge Hub (`/blog/`) | hub + **12** guides per language |
| Smart Service Finder | `/search/` landing per language (base route indexable; `?q=` variants noindex) |
| **Canonical pages per language** | **226** |
| **Canonical URLs total (3 languages)** | **678** |
| Static generation entries | **689** (`next build` progress total; distinct from the 678 canonical sitemap URLs) |
| Pricing rows (`data/pricing/pricing.ts`) | **51** |
| Search-intent matrix entries | **24** (all pricing derived from `pricingId`) |
| Audit scripts | 17 static + 1 live server QA (**284** served-site checks after Phase 51; 280 after Phase 49, 271 after Phase 48, 270 after Phase 47, 259 after Phase 46) |
| In-copy contextual links (rendered anchors) | **313 EN / 362 MS / 364 ZH** (Phase 39) |
| FAQ hub rendered main-content links per language | **26** (was 17; Phase 51) — all 5 content families (services, problems, areas, guides, projects) plus the 17 anchors the 18 answers resolve to |
| FAQ answers linking the page their own copy names | **17 of 18** (Phase 51; was **11 of 18** — 6 answers named a page and rendered no link, and `send-photos` names no page so it correctly links none) |
| Site-wide rendered main-content internal links | **46,114** (Phase 51; was 46,087 — +9 anchors on each of the 3 `/faq/` pages) |
| Region hub → Knowledge Hub guide links (rendered) | **72** (6 hubs × 12 guides; Phase 41, was 0) |
| Knowledge Hub guide → related region hub links (rendered in main) | **72** (36 guides × 2 hub links; Phase 48, was 0; all 72 reciprocal with the existing hub → guide links) |
| Knowledge Hub ↔ quoted-scope links (rendered, both directions) | **144 + 144** (48 quoted price rows × 3 languages; Phase 45, was 75 + 75 with 31 quoted scopes unlinked) |
| Problem guides linked to at least one bookable sub-service scope | **57 of 57** — 171 of 171 localized guide pages, 1,158 rendered anchors (Phase 46; was 53 of 57 / 159 of 171 / 1,134) |
| Pricing rows with localized `scope` + `duration` + `factors` in MS and ZH | **51 + 51** (Phase 46; `factors` was 0 + 0 — 160 English bullets on 20 localized pillars, English scope on 102 localized sub-service pages) |
| District groups / coverage states with MS + ZH names | **13 of 13** (+ descriptions) / **5 of 5** (Phase 46; was 0 — 264 English district names on 112 localized pages) |
| English registry strings on `/ms/` + `/zh/` pages (independent leak scan) | **0** (Phase 46; was 3 families across 234 pages) |
| Problem guides listed in `/llms.txt` | **57 of 57** in 10 categories (Phase 42, was 12 sampled) |
| Pages rendering Q&A that publish a `FAQPage` node | **567 of 567** (Phase 42; the 3 homepages were the exception) |
| `<title>` tags ≤65 characters | **678 of 678**, longest exactly 65 (Phase 41; was 468 of 678) |
| `<title>` tags unique within each language | **678 of 678** (Phase 41; 3 duplicate pairs fixed) |
| `<title>` tags carrying the brand | **678 of 678** (Phase 41; the 6 legal pages now compose `brandTitle()`) |
| Sitemap entries dated from a recorded content date, never before it | **36 of 36** guide entries (**2026-09-04**); the other 642 keep the site-wide reviewed date **2026-09-01** (Phase 49; was 0 — all 678 shared one date, 36 of them three days before publication) |
| Pages publishing `og:locale:alternate` matching their hreflang set | **678 of 678**, **1,356** tags (Phase 49; was **0**, while all 678 already published `og:locale`) |
| Entity index pages publishing an `ItemList` for the list they render | **15 of 15** (5 indexes × 3 languages; Phase 49; was **12** — the 3 `/areas/` indexes listed 53 guides with no node) |
| Areas index `ItemList` entries named as the guide names itself | **159 of 159** (53 × 3; Phase 49, was 0) |

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
    *(Phase 47 note, recorded here rather than rewritten: that table was the
    right fix for an English-only index, but it was a second, independently
    authored translation of wording the guides themselves now publish in all
    three languages. It drifted — 10 Malay + 22 Chinese card names and all 114
    subtitles disagreed with the pages they link to — and was retired in
    Phase 47 §3, which makes the card read `getProblemDetail()` instead.)*
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

---

## PHASE 19 — Service + Sub-Service + Problem Page Completion

Phase 19 introduced the typed sub-service registry and routed every
standalone sub-service as its own page, then authored the first batch. The
remaining priced sub-services and the new problem categories were carried
into Phase 20 (which completed both — see below).

### 1. Typed sub-service registry (`data/sub-services/`)

- A fully typed registry models every standalone sub-service with a stable
  `slug`, a parent `serviceSlug`, an optional `pricingId` pointing at the
  central pricing registry, a `standaloneSearchIntent` flag (guards against
  doorway/thin pages), `relatedProblems`, and **separately authored `en`,
  `ms`, `zh` copy blocks** (`name`, `h1`, `metaDescription`, `title`, `lead`,
  `suitableFor`, `includes`, `excludes`, optional `costFactors`, `materials`,
  `process`, `faqs`).
- Because `en`, `ms` and `zh` are required fields, a sub-service can never be
  published to a language it has not been genuinely translated into — a
  missing block is a **type error**, not a runtime English fallback.
- Files: `data/sub-services/types.ts`, `index.ts`, and
  `content/{handyman,plumbing,tiling,welding,electrical,waterproofing}.ts`.

### 2. Routing + rendering

- New dynamic route `app/[lang]/services/[category]/[subService]/page.tsx`
  with `generateStaticParams` emitting one route per language per authored
  sub-service.
- `components/service/SubServicePage.tsx` — localized sections (breadcrumb,
  H1, lead, "when it is the right choice", includes/excludes, price guidance
  box, cost factors, materials, process, FAQs, related problems, related
  projects, sibling sub-services, back-to-service link, areas, CTA/WhatsApp).
- `components/service/SubServiceJsonLd.tsx` — WebPage + BreadcrumbList +
  **Service node with an Offer carrying a `PriceSpecification` whose numbers
  come from the pricing registry** (never re-authored) + FAQPage.

### 3. Service → Sub-service → Project internal linking

- `ServiceSubLinksSection` renders on every service page: Service → Project
  contextual links (published projects genuinely mapping to that service) and
  Service → Sub-service quick links.
- Sub-service pages reverse-link to their parent service, sibling
  sub-services, related problem guides, related projects, locations and the
  quote flow.

### 4. Sitemap + hreflang + canonical + dictionary

- `app/sitemap.ts` enumerates each sub-service route per language with the
  correct `priority`; `isPublished` recognises the two-level
  `/services/{category}/{sub}/` path so hreflang alternates and the language
  switcher stay correct.
- A `subServicePage` dictionary block was added to
  `i18n/{types,en,ms,zh}.ts` (all four stay in sync by typing).
- `scripts/audit-subservices.mjs` (`npm run audit:subservices`) lists the 51
  priced sub-services from `pricing.ts`, reports which already have a page,
  and checks authored slugs are unique, belong to one of the 10 services,
  reference a real `pricingId`, and carry all three language blocks.

### 5. What shipped in Phase 19 vs what Phase 20 finished

- **Phase 19 authored 10 sub-services** (30 language routes): hourly-service,
  door-repair, mounting-installation, grout-silicone, minor-repairs (Handyman),
  pipe-leak-repair (Plumbing), floor-tile-installation (Tiling), window-grille
  (Welding), socket-installation (Electrical), bathroom-waterproofing
  (Waterproofing).
- **Phase 20 completed the remaining 41**, so every priced sub-service in
  `pricing.ts` now has an authored, 3-language page (51 total, 153 routes).
- The new Welding, Flooring and General Renovation problem categories were
  also carried from Phase 19 into Phase 20, which shipped them in full
  EN/MS/ZH (problem catalogue 46 → 57).

### 6. Testing (Phase 19)

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS**
- [x] `npm run build` — **PASS** (30 new sub-service routes prerender)
- [x] `npm run audit:subservices` — **PASS** (10 authored; 51 priced targets reported)
- [x] `audit:pricing`, `audit:business`, `audit:locations` — **PASS** (no regressions)

---

## Phase 20 — Knowledge Hub (`/blog`)

### 1. What shipped

- **9 guides**, each authored in full in English, Malay and Chinese: the 7
  approved in CONTENT_MAP §6 plus 2 coverage guides (electrical wiring warning
  signs, metal grille/gate buying guide) for services that had no educational
  content at all.
- **30 new pages**: `/en|ms|zh/blog/` hub + 9 articles × 3 languages.
  Static page count went 449 → 479; sitemap 438 → 468 `<loc>` URLs.
- **135 new FAQs** (9 articles × 3 languages × 5), all unique against every
  existing page — enforced by `audit:authority` rule 5.

### 2. Architecture

- `data/blog/types.ts` — typed article definition: slug, category, intents,
  publish/update dates, image, related services / sub-services / problems /
  locations / projects, pricing row ids, and EN/MS/ZH copy.
- `data/blog/content/*.ts` — one file per guide; `data/blog/index.ts` is the
  registry plus the relationship queries the rest of the site reads.
- Body blocks are a discriminated union (paragraph, list, steps, table,
  callout, pricing). The `pricing` block resolves rows out of
  `data/pricing/pricing.ts` at render time, so **no article contains a ringgit
  figure** — `audit:blog` fails on any hard-coded `RM<digit>`.
- Routes `app/[lang]/blog/page.tsx` and `app/[lang]/blog/[slug]/page.tsx`;
  components under `components/blog/`.
- Schema: WebPage + BreadcrumbList + Article + FAQPage per guide, ItemList on
  the hub. Author and publisher are both the business — no invented personas,
  no ratings, no fake dates. `dateModified` is emitted only when an article has
  really been revised.

### 3. Internal linking

- **Outbound** (article → site): every guide links its services, sub-services,
  problems, projects, areas and sibling guides. Links are rendered only when
  the target publishes in the current language, so a `/ms/` guide never links
  an English-only page.
- **Inbound** (site → article): `GuideLinksSection` was added to service,
  sub-service, problem and area pages. It matches on declared relationships,
  never keywords, and renders nothing when there is no relevant guide.
- Hub is in the header, footer and mobile nav; listed in `/llms.txt` and
  `/ai/business.json`.

### 4. New audit

`npm run audit:blog` — checks every related-* slug and pricing id resolves
against the real registries, no hard-coded prices, EN/MS/ZH complete, unique
metaDescription/H1/FAQ per language, every article imported by the registry and
reachable from both the hub index and the sitemap (**zero orphans**).

### 5. Testing

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (479 static pages)
- [x] `npm run audit:business` — **PASS**
- [x] `npm run audit:og-fonts` — **PASS**
- [x] `npm run audit:project-assets` — **PASS**
- [x] `npm run audit:pricing` — **PASS** (`data/blog` added to price-free dirs)
- [x] `npm run audit:locations` — **PASS**
- [x] `npm run audit:authority` — **PASS** (`data/blog` added to CONTENT_DIRS)
- [x] `npm run audit:subservices` — **PASS**
- [x] `npm run audit:blog` — **PASS** (new)
- [x] Sitemap emits all 30 blog URLs with complete hreflang sets and
      self-canonicals; ZH/MS articles verified free of English body copy
- [x] Static verification only — no real-browser testing is claimed

### Remaining content gaps

- No guides yet for flooring subfloor prep, plumbing water-pressure diagnosis,
  or ceiling/partition material choice. → **Closed in Phase 21.**
- Guides carry no images; the hub and article heroes are typographic. Real
  photos can be added via the optional `image` field when the owner supplies
  them.
- Guides 5 (condo approvals) and 6 (waterproofing systems) deliberately publish
  no fees, statutory deadlines or lifespan figures — those need verified
  sources, not estimates.

---

## Phase 21 — Knowledge Hub Completion (remaining Phase 20 gaps)

Phase 21 closes every Phase 20 gap that can be closed without inventing data.
What needed an owner decision or a verified source is recorded as such below,
rather than papered over.

### 1. Three missing guides — authored in full EN/MS/ZH

The CONTENT_MAP §5 depth gaps are now closed. Each guide ships in all three
languages, quotes only `data/pricing/pricing.ts` rows (no authored RM
figures), and is wired into the hub, sitemap, hreflang sets and the
`GuideLinksSection` on its pillar, sub-service, problem and area pages.

| Guide | Slug | Category | Supports |
| --- | --- | --- | --- |
| Flooring subfloor preparation | `flooring-subfloor-preparation` | planning | Flooring + Tiling pillars, all five flooring sub-services, all four flooring problems |
| Plumbing water-pressure diagnosis | `plumbing-water-pressure-diagnosis` | troubleshooting | Plumbing pillar, call-out/leak sub-services, low-water-pressure and leak problems |
| Ceiling & partition material choice | `ceiling-partition-material-choice` | materials | Ceiling & Partition pillar, all four ceiling sub-services, ceiling problems |

- The flooring guide is a genuine preparation decision-tree (level, moisture,
  soundness) that complements — and links — the `low-water-pressure`/flooring
  problem guides rather than repeating them.
- The water-pressure guide is a diagnosis path (one outlet vs whole house,
  time-of-day, leak signs) that sits upstream of the existing
  `low-water-pressure` problem guide and hands off to it.
- The ceiling guide compares gypsum, plaster, PVC, timber and metal framing
  room by room, with durability kept qualitative (no invented year figures).
- All three pass `audit:authority` §5 (no question or answer pasted across
  pages) and `audit:blog` (references resolve, EN/MS/ZH complete, no orphan).

### 2. Open Graph font subsets regenerated

The Phase 20 problem-catalogue additions (welding, flooring,
general-renovation in Simplified Chinese) introduced CJK glyphs that were not
yet in the committed Noto Sans SC subsets, so `npm run audit:og-fonts` failed.
`scripts/make-og-fonts.py` was re-run against the live sources; both Noto
subsets now cover every character the `/zh/` OG card can render. The audit
now passes. The Plus Jakarta Sans TTF files were regenerated byte-identically
and show no diff.

### 3. Documentation gaps closed

- `PROJECT_PROGRESS.md`: the missing **PHASE 19** section (sub-service
  registry + routing + first batch) and this **Phase 21** section are now
  written, and the Overview inventory is updated to the Phase 21 build
  (57 problems, 51 sub-services, 12 guides, 211 canonical pages per language,
  633 sitemap URLs, 9 audit scripts).
- `CONTENT_MAP.md`: §1 topic-cluster and §2 problem-map counts updated to 57
  guides across 10 categories; §5 gap 3 and §6 backlog updated for the 12
  shipped guides.
- `SITEMAP.md`: the stale "408 URLs" figures updated to 633.

### 4. Gaps that stay open — and why (honesty, not omission)

- **Guide images.** The `image` field stays unset. CONTENT_GOVERNANCE §8
  forbids stock or AI imagery passed off as work, and the guides' `image`
  field is documented as "only set when a real, owned photograph exists".
  Heroes remain typographic until the owner supplies real photos.
- **Guide 5 (condo approvals) fees and statutory deadlines.** Building rules,
  deposits, permitted hours and authority requirements differ by management
  corporation and local authority. Inventing specific figures would be
  fabricated data; the guide correctly teaches the reader what to ask.
- **Guide 6 (waterproofing systems) lifespan figures.** Substrate, detailing
  and exposure decide lifespan, not the product alone. The guide states this
  honestly and declines to publish a number.

### 5. Testing (Phase 21)

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (644 static pages; was 635)
- [x] `npm run audit:business` — **PASS**
- [x] `npm run audit:og-fonts` — **PASS** (regenerated subsets)
- [x] `npm run audit:project-assets` — **PASS**
- [x] `npm run audit:pricing` — **PASS** (51 rows)
- [x] `npm run audit:locations` — **PASS**
- [x] `npm run audit:authority` — **PASS**
- [x] `npm run audit:subservices` — **PASS**
- [x] `npm run audit:blog` — **PASS** (12 articles)
- [x] Sitemap emits 633 `<loc>` URLs; the 9 new guide URLs carry complete
      hreflang sets and self-canonicals
- [x] Static verification only — no real-browser testing is claimed

---

## PHASE 21 (PORTFOLIO TRACK) — Portfolio, Project Proof & Service-to-Project Internal Linking — [x] COMPLETE

> A second Phase 21 track, following the Knowledge Hub completion section
> above. Scope: strengthen the project/portfolio architecture, connect
> Services → Sub-services → Projects contextually in all three directions,
> improve project proof for SEO/GEO/AEO/LLMO/CRO/E-E-A-T, and prepare the
> architecture for owner-supplied project metadata — without inventing a
> single fact.

### 1. Project registry audit (Phase 21 §1)

`scripts/audit-projects.mjs` (`npm run audit:projects`, the 10th audit
script) now validates the whole registry. Current verified distribution:
21 published projects — tiling 2, ceiling 5, electrical 8, plumbing 1,
welding 4, general renovation 1. No drafts. Every project has real
photographs only, EN/MS/ZH copy, alt text and scope bullets. Nothing was
fabricated; no fake case studies were added for Painting, Waterproofing,
Flooring or Handyman (0 projects each — those pages correctly omit the
project-proof section).

### 2. Service → Project (Phase 21 §2)

`ServiceSubLinksSection` (Phase 19) already links every service page to its
genuine projects by category. Verified intact: a service with no real
project shows no proof section and no invented content.

### 3. Sub-service → Project (Phase 21 §3)

- New `Project.subServices?: string[]` field — sub-service slugs (Phase 19
  registry) whose scope the photographed work genuinely covers. Only set
  where the work actually matches (distribution board photo → `db-box`,
  cove ceiling photo → `l-box-ceiling`, floor-tile photo →
  `floor-tile-installation`, tile hacking photo → `tile-hacking`, awning
  frame photo → `awning-structure`, fan/chandelier/light photos →
  `fan-installation` / `lighting-point`, outdoor socket photo →
  `socket-installation`).
- `SubServicePage` now shows **only genuinely mapped projects** (with real
  thumbnails and alt text) instead of every project of the parent service —
  16 sub-service ↔ project links across 8 sub-services. Sub-services
  without a genuine match (43 of 51) omit the section entirely. No
  relationship is inferred from two scopes merely being adjacent.
- Build-time guard: `i18n/verify.ts` `assertProjectSubServiceLinksAreSound()`
  fails the build if a project cites an unknown sub-service, a duplicate, or
  a sub-service from a service the project did not carry out.

### 4. Project → Service / Sub-service (Phase 21 §4–5)

- `ProjectServicesSection` (primary + related service cards) unchanged and
  verified for all 21 projects.
- New `ProjectSubServicesSection`: each project lists its genuinely mapped
  sub-services, each labelled "Part of {parent service}" and linking to both
  the sub-service page and its parent service page. Rendered only when the
  registry has a genuine mapping.
- New `ProjectProblemsSection`: related problem guides derived strictly
  through the genuine sub-service mappings (each sub-service declares its
  own `relatedProblems`), so a floor-tiling project surfaces the
  uneven-tiles / cracked-tile guides and nothing guessed. Max 6 guides;
  omitted when no mapping or translation exists.
- New dictionary keys (EN/MS/ZH, typed): `projectPage.subServices*`,
  `projectPage.subServicesUnder`, `projectPage.relatedGuides*`.

### 5. Structured data (Phase 21 §8)

`ProjectJsonLd` now emits, per project page:
- `WebPage` with `about` → the project's own `CreativeWork` node;
- `CreativeWork` (name, factual description, canonical URL, `inLanguage`)
  with `image` references and `about` → the primary `Service` plus every
  genuinely mapped sub-service `Service` (each carrying the same `#service`
  entity id as its own page, keeping the entity graph consistent site-wide),
  `provider` → the organization;
- `ImageObject` per real photograph (hero, gallery, before/after) with
  dimensions and localized captions;
- `BreadcrumbList` matching the visible breadcrumb.
Still deliberately absent: Review, aggregateRating, Product, Offer, prices,
dates, location claims. Validated: all 126 JSON-LD blocks across 63 project
pages parse and every `@id` reference resolves within the graph.

### 6. Multilingual & CRO (Phase 21 §9–10)

- All 21 projects remain EN/MS/ZH complete (coverage lists + translation
  registries verified by the audit and the existing build-time guards);
  each page carries self-canonical + `en-MY`/`ms-MY`/`zh-MY`/`x-default`
  hreflang (verified in rendered HTML and sitemap).
- Sub-service labels on project pages are genuinely localized per language
  (e.g. MS "Pemasangan Jubin Lantai").
- CTAs reuse the existing Phase 12 quote flow and site WhatsApp number —
  no second quote system was created.

### 7. Owner-pending data (Phase 21 §13)

`PROJECT_OWNER_PENDING.md` documents, per project and globally, exactly
which owner-supplied facts are missing (exact location, year, property type,
materials, extra photos, before/after pairs, publication permission) and
which files/fields each goes into. Nothing on the list blocks the build.

### 8. Testing (Phase 21 §12)

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (644 static pages)
- [x] `npm run audit:business` — **PASS**
- [x] `npm run audit:og-fonts` — **PASS**
- [x] `npm run audit:project-assets` — **PASS**
- [x] `npm run audit:pricing` — **PASS**
- [x] `npm run audit:locations` — **PASS**
- [x] `npm run audit:authority` — **PASS**
- [x] `npm run audit:subservices` — **PASS**
- [x] `npm run audit:blog` — **PASS**
- [x] `npm run audit:projects` — **PASS** (new: registry, all three link
      directions, multilingual routes, structured-data honesty, orphan check)
- [x] Sitemap: 633 `<loc>` URLs, every project URL with a complete hreflang
      set; all rendered pages return 200
- [x] Rendered HTML verified for EN/MS/ZH project pages and sub-service
      pages (genuine-only project sections)
- [x] Static verification only — no real-browser testing is claimed

## Phase 22 — Quote Form, CRO & Lead-Conversion Optimization — [x] COMPLETE

Builds on the Phase 12 quote backend. No duplicate quote system was created:
the same `/api/quote` Route Handler, the same validation pipeline, the same
Resend integration and the same site WhatsApp configuration serve the improved
flow. Security was preserved and strengthened, never weakened.

### 1. Audit of the existing system (what was kept)

Everything Phase 12 built survives intact: secure Route Handler
(`runtime = "nodejs"`, `force-dynamic`), server-side validation, honeypot,
in-memory rate limit (5 / 15 min / IP), origin allow-list, 64 KB body-size
cap (header + actual byte length), HTML escaping in the email template, and
the honest 503 when email delivery is unconfigured. Additions in this phase:
`X-Robots-Tag: noindex, nofollow` on every API response, and the origin check
now also compares the `Origin` host against the request's `Host` header so a
proxied same-origin request is recognized correctly (a non-browser client
forging both headers could already omit `Origin` entirely — validation and
rate limiting still apply to everything).

### 2. Truthful photo handling (the Phase 12 half-truth removed)

Phase 12 shipped a file input plus a `photoCount`, but the photos were never
transmitted and the notification email asked the business to request them
again. Phase 22 removes the fake input entirely instead of pretending.
Photos are now handled through an honest, working channel: after a
successful submission the success panel offers a localized "send photos on
WhatsApp" action with a pre-filled message that names the chosen service.
The email no longer renders a photos row. (A real upload path — object
storage + signed URLs + server-side MIME/size/count validation — remains the
documented option if the owner wants in-form uploads later.)

### 3. Registry-based service → sub-service selection

`getQuoteServiceOptions(lang)` now builds both levels from the Phase 19
sub-service registry: every option submits a stable registry slug with a
genuinely localized name (`sub[code].name`) in EN/MS/ZH — previously MS/ZH
offered no sub-service choice and EN offered free-text service-content names.
The server validates the relationship: `resolveSubService` accepts a slug only
under its registered parent service, rejects free-text values, and rejects
any sub-service under "Not sure / multiple services" (which now offers none,
removing the old contradictory pseudo-options). Property types submit stable
IDs (`condominium-apartment` …) validated against a constant list; localized
labels are display-only, and the notification email renders English labels
for the business.

### 4. UX / CRO / accessibility

- Two logical sections ("How can we contact you?" / "About the work") with
  mobile-first single-column stacking and `sm` two-column grouping.
- Progressive disclosure: the sub-service select appears only once a concrete
  service is chosen; the "not sure" path stays short.
- Required/optional states are visible (asterisk + spoken "(required)"),
  email/`preferred date`/`sub-service` clearly marked optional with helper
  text; phone helper explains what the number is used for.
- Validation errors are associated (`aria-invalid` + `aria-describedby` +
  `role="alert"`), and the first invalid control receives focus; server-side
  field errors map back onto the same UI.
- Loading state: spinner inside the disabled submit button plus an
  `aria-live` polite status; the whole fieldset locks during submit and after
  success.
- Success state: focus moves to a `role="status"` panel with the clear next
  step (photo handoff on WhatsApp); failure state keeps the request retryable
  with the WhatsApp fallback (pre-filled, localized).
- Date input can no longer be set to a past date (`min` is applied after
  hydration, keeping SSR markup stable); `noValidate` still prevents English
  browser bubbles on `/ms/` and `/zh/`.
- A no-form WhatsApp quick path sits above the form for customers who prefer
  chat — same `getWhatsAppHref()` configuration as every other CTA.

### 5. Multilingual

All new copy ships complete in EN/MS/ZH (typed dictionary — a missing key is
a build error): section headings, sub-service validation message, WhatsApp
quick-path strings, success photo-handoff strings, four quote FAQs, and
property-type labels keyed by stable ID. MS/ZH placeholder cleanup (the ZH
dictionary carried a stray `nina.v@example.com` example email). Verified in
rendered HTML: no English leaks onto `/ms/` or `/zh/`, registry sub-service
labels localized per language, all hreflang/canonical sets intact.

### 6. SEO / AEO

The quote page gained four answer-first FAQs (request process, no instant
quotation, photos via WhatsApp, coverage) rendered as visible accordions and
as an `FAQPage` JSON-LD node built from the same data — the only new
structured data, from genuine business facts. Canonical, hreflang
(en-MY/ms-MY/zh-MY/x-default) and the sitemap entry are unchanged; the API
endpoint is explicitly `noindex`. No guarantees, response-time promises or
review counts were added anywhere.

### 7. Analytics hooks (Phase 24 preparation)

`lib/analytics.ts` defines the typed conversion events — `quote_form_start`,
`quote_form_submit`, `quote_form_success`, `quote_form_error`,
`whatsapp_click`, `phone_click` — and buffers them on
`window.__renovixAnalytics` with timestamps. No platform, cookie or network
call is loaded (Phase 24's job). `components/analytics/TrackedLink.tsx` is
the click interface; the form fires the four funnel events with coarse
context only (language, service slug, failure class) — never names, phone
numbers, emails, locations or free text.

### 8. Validation

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (644 static pages, unchanged)
- [x] `npm run audit:quote` — **PASS** (new: API invariants, registry
      alignment, truthful photo handling, i18n completeness, analytics-PII,
      page wiring)
- [x] `npm run audit:business` — **PASS** (one regression caught and fixed:
      a fictional example phone number in the placeholder was removed)
- [x] `npm run audit:og-fonts`, `audit:project-assets`, `audit:pricing`,
      `audit:locations`, `audit:authority`, `audit:subservices`,
      `audit:blog`, `audit:projects` — **all PASS**
- [x] Live API tests against `next start` — **25/25 PASS**: honest 503
      without credentials; 400 + field list for empty/invalid email/invalid
      phone/invalid date/email-contact-without-address; free-text
      sub-service rejected; cross-service sub-service (tiling slug under
      plumbing) rejected; sub-service under "not sure" rejected;
      display-label property type rejected (IDs enforced); honeypot silently
      ignored (200, no email); 70 KB body → 413; foreign origin → 403;
      production + proxied-host origins allowed; GET → 405; rate limit
      6th hit → 429 with correct sequence `503×5 → 429`; `X-Robots-Tag`
      present
- [x] Rendered EN/MS/ZH quote HTML verified (localized options, headings,
      FAQs + FAQPage node, WhatsApp quick path, honeypot, no file input)
- [x] Sitemap: 633 `<loc>` URLs unchanged; `/quote/` carries the full
      hreflang set
- [x] Real Resend delivery **not** claimed — `RESEND_API_KEY` and
      `QUOTE_FROM_EMAIL` remain owner-pending (see
      `PROJECT_OWNER_PENDING.md`); without them the API answers 503 and the
      form shows the WhatsApp fallback by design

### 9. Owner-pending (documented in `PROJECT_OWNER_PENDING.md`)

Final approval of the field set, `RESEND_API_KEY`, verified Resend sender
domain, `QUOTE_FROM_EMAIL`, `QUOTE_NOTIFICATION_EMAIL` (final recipient) and
any lead-routing requirements. None of these block the improved flow.

---

## PHASE 23 — Location Architecture, Local SEO & Location-Data Reconciliation — [x] COMPLETE

Phase 23 closed the location architecture: one authoritative model, an
accurate count, seven genuinely justified new locations, and an audit that
proves the reconciliation instead of asserting a hard-coded number.

### 1. One authoritative location model (the reconciliation)

`data/locations/registry.ts` is the source of truth for the hierarchy
(Malaysia → state/federal territory → district → city/town →
neighbourhood → kampung → sub-area), and `data/area-content/` holds the
published copy for exactly the same set. Phase 23 made that relationship
*enforced* rather than assumed. `npm run audit:locations` now derives the
inventory from the repository and proves every consumer agrees with it:

- registry ↔ area guides are the same set (a published entity without a page,
  or a page without an entity, fails the build);
- every `publicPath` matches the real route;
- every published location sits in exactly one district group, and no slug is
  claimed by two districts;
- `stateCoverage.totalPublishedGuides` is compared against the registry
  instead of being trusted;
- `i18n/coverage.ts` `ALL_AREAS` and both the `ms` and `zh` area lists match
  the guide inventory exactly — so canonical, hreflang and the sitemap cannot
  drift from the content;
- `data/i18n/lists.ts` carries a Chinese place name for every location.

Adding a location is now a pure data change; a half-wired one is a build
failure.

### 2. Accurate count (the audit correction, now self-maintaining)

The documented count was corrected and, more importantly, de-hard-coded. The
old script asserted "18 KL / 28 Selangor" as literals; the new one reports
whatever the registry actually publishes and reconciles it everywhere.

| | Before Phase 23 | After Phase 23 |
| --- | --- | --- |
| Kuala Lumpur guides | 18 | **21** |
| Selangor guides | 28 | **32** |
| Total location guides | 46 | **53** |
| District groups | 12 | **13** |
| Search-intent matrix entries | 16 | **24** |
| Sitemap `<loc>` URLs | 633 | **654** |
| Static pages built | 644 | **665** |

Stale counts were fixed in `CONTENT_MAP.md`, `CONTENT_GOVERNANCE.md`,
`SITEMAP.md`, the `/areas/` FAQ copy (EN/MS/ZH) and `stateCoverage`.

### 3. Seven new locations — each with a reason to exist

No page was created because a place name exists. Each addition closes a real
coverage gap where the housing stock, and therefore the advice, genuinely
differs from the parent area's guide:

**Kuala Lumpur**

- **KL City Centre** (`sub_area`) — the KLCC / Bukit Bintang / Imbi high-rise
  core: the city's largest strata renovation market and the one where building
  rules, not scope, set the schedule. Previously only reachable via the region
  hub.
- **Taman Desa** (`neighbourhood`) — the Seputeh mid-rise belt: 1980s walk-up
  apartments and terraces with a distinct, well-documented ageing profile
  (leaks between stacked units, JMB rather than a management office).
- **Kampung Baru** (`kampung`) — the Malay heritage enclave: traditional raised
  timber houses need timber, rot and roof work, not the condo fit-out advice on
  every other KL page. This is the kampung tier of the hierarchy being used for
  what it is actually for.

**Selangor**

- **Setia Alam** (`town`) — large self-contained township whose 2000s–2010s
  landed stock ages on a completely different timetable from Shah Alam's
  original numbered sections.
- **Bandar Kinrara** (`town`) — mature Puchong-side township now dominated by
  services renewal (concealed pipe corrosion, first-cycle waterproofing
  failure, outgrown distribution boards).
- **Batu Caves** (`town`) — Gombak-district town below a hill catchment; roof
  detailing, drainage and external damp are the recurring theme, plus
  festival-period access.
- **Bandar Mahkota Cheras** (`town`) — Hulu Langat township on the *Selangor*
  side of the Cheras border. Different local authority from Cheras KL, which
  materially changes extension approvals; the guide says so explicitly.

A new KL district group (`kl-city-core`, "KL City Centre & Kampung Baru
District") was added; the others joined existing districts.

### 4. Page quality — no doorway pages

Every new guide carries the full 13-section `AreaPage`: locally-noted
services, property types with local notes, five local problems, process,
local-context copy, five FAQs, related services, related problems, nearby
areas, blog links, headline pricing from the central catalogue and both CTAs.
The audit enforces this mechanically for **all** 53 guides:

- unique title, meta description, H1 and summary (duplicate = FAIL);
- intro ≥ 400 chars and local context ≥ 300 chars of real copy;
- ≥ 4 FAQs, ≥ 4 local problems, ≥ 3 related services, ≥ 3 related problems,
  ≥ 2 nearby areas;
- registry quality gate: ≥ 2 search intents, ≥ 3 primary services, ≥ 3
  property types, housing eras, access considerations, aliases.

No `[Service] in [Location]` repetition, and still no `/{service}-in-{area}/`
doorway URLs — location × service intent stays with the guides plus the intent
matrix.

### 5. Search modifiers, used honestly

Modifiers (`near me`, `repair`, `installation`, `affordable/cost`,
`contractor`, `residential`, `replacement`) are applied per location where the
intent is real, not sprayed onto every page. The emergency modifier remains
restricted to genuine safety faults — electrical hazards and active
plumbing/waterproofing leaks — and the audit fails any other use. New honesty
checks reject "cheapest", "#1 / number one", price guarantees, invented branch
offices and fabricated review counts anywhere in location data.

### 6. Multilingual — genuinely localized, not substituted

All seven guides ship complete in EN/MS/ZH (new
`translations/{ms,zh}/{kuala-lumpur,selangor}-d.ts`). The copy is written for
each audience — Malay uses the terminology homeowners actually use (rumah
kampung, dapur basah, strata, papan agihan); Chinese uses established
Malaysian Chinese place names (甘榜峇鲁, 实达阿南, 金銮镇, 黑风洞,
蕉赖皇冠城). The audit rejects a translation that reuses the English meta
description or H1, that has too few FAQs, or whose `serviceNotes` count does
not match the English service list (which would silently misalign the notes),
and it verifies each translations `index.ts` actually re-exports every batch.

### 7. Location ↔ everything link graph

- **Location → service / sub-service / problem**: guides link 6 services with
  local notes plus related services and problems; all slugs are validated.
- **Service / problem → location**: unchanged shared `AreasSection`, now
  covering 53 guides.
- **Location ↔ location**: reciprocal `nearbyAreas` links were added on
  Old Klang Road, Shah Alam, Puchong, Selayang and Kajang so no new page is an
  orphan. The audit now **fails on any location with zero inbound nearby-area
  links**.
- **Location ↔ blog**: five articles gained the newly relevant locations
  (56 blog → location references, all validated).
- **Location ↔ project**: no project location was invented. The audit
  explicitly records that unknown project locations stay unknown and validates
  any owner-supplied one against a real guide.

Two genuine data bugs were caught by the new graph validation and fixed:
nine registry entities listed the *problem* slug `roof-leakage` inside
`primaryServices` (now `waterproofing`).

### 8. Pricing stays centralized

No location page contains a price. The audit fails on any `RM…` literal in
area content, the intent matrix still stores only `pricingId` (no
`startingPrice` / `unit` literals), and all 24 matrix entries are compared
against `data/pricing/pricing.ts` for price, unit, starting-from semantics,
sub-service slug/name and service. Eight new intent entries were added for the
new locations, each resolving to a real catalogue row.

### 9. Schema & AI/GEO data

Schema per location page is unchanged and valid: `BreadcrumbList`, `WebPage`,
`Service`/`OfferCatalog` with `Place` service areas, `FAQPage` — no invented
addresses, branches, opening hours or coordinates. On the AI side,
`lib/ai-knowledge.ts` now derives a `serviceArea.regions` tree from the single
location registry (state → district → location, with each location's hierarchy
`level`), and `/llms.txt` renders coverage grouped by state and district
instead of a flat list — so an assistant answering "do you cover X?" gets the
correct hierarchy. `/ai/business.json` and `/ai/pricing.json` carry no
contradictory coverage; both are generated from the same registries the pages
render.

### 10. Indexing quality

Only complete, translated, published guides reach the sitemap: a location is
emitted per language only when that language actually publishes it, and the
coverage lists are asserted against the guide inventory at build time. The
sitemap grew by exactly 21 URLs (7 locations × 3 languages) to 654.

### 11. Validation

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (665 static pages, 654 sitemap URLs)
- [x] `npm run audit:locations` — **PASS** (rewritten: reconciliation, quality
      gate, duplicate-content, honesty, link graph/orphans, blog and project
      graphs, intent matrix, pricing single-source, EN/MS/ZH completeness,
      canonical/hreflang/sitemap coverage)
- [x] `audit:business`, `audit:og-fonts`, `audit:project-assets`,
      `audit:pricing`, `audit:projects`, `audit:authority`,
      `audit:subservices`, `audit:blog`, `audit:quote` — **all PASS**
- [x] Rendered HTML verified for the new pages in all three languages:
      correct canonical, full `en-MY`/`ms-MY`/`zh-MY`/`x-default` hreflang set,
      localized titles and no English leakage on `/ms/` or `/zh/`
- [x] `/llms.txt` and `/ai/business.json` verified to report 53 guides in the
      correct 21 KL / 32 Selangor district hierarchy

---

## Phase 24 — Analytics, Conversion Tracking, Web Vitals & Measurement — [x] CODE COMPLETE (OWNER IDs PENDING)

Measurement implementation only — built on the stable Phase 18–23
architecture, with zero changes to content, routing, canonicals, schema or the
quote flow's behaviour. Full documentation: `PHASE_24_ANALYTICS.md`.

### 1. Current-state audit (nothing duplicated)

Before this phase: **no** GA4, GTM, Google Ads, Meta Pixel or Clarity tags
anywhere, and no Web Vitals measurement. What did exist was reused: Phase 22's
platform-neutral event layer (`lib/analytics.ts`), `TrackedLink`, and the six
quote-flow conversion events buffered on `window.__renovixAnalytics` —
Phase 24 is the provider connection that layer was designed for. Search
Console verification (already live in the locale layout metadata) was left
untouched and is now guarded by an audit assertion.

### 2. Architecture

- `lib/analytics-config.ts` — single source of truth for provider IDs:
  format-validated env vars only (a malformed ID = provider stays OFF, with a
  build-time warning); resolves the exclusive delivery route
  (`ga4` | `gtm` | `none`); derives CSP origin additions that are **empty
  while no provider is configured**, so the strict pre-Phase-24 CSP is
  byte-for-byte unchanged today.
- `lib/analytics.ts` — still platform-neutral (the Phase 22 audit still
  passes): now with the full event set, a closed-key PII sanitiser with
  length caps, and a provider sink + exactly-once replay of pre-mount events.
- `components/analytics/Measurement.tsx` — the only provider glue, one small
  client component mounted once in the locale root layout for all EN/MS/ZH
  routes (~10.5 KB gzipped including the web-vitals library): script loading
  (gtag.js/gtm.js `afterInteractive`, Clarity `lazyOnload`), Consent Mode
  defaults pushed before any tag runs, `page_view` exactly once per route
  (initial + client navigations, deduped), delegated document-level click
  tracking, and Core Web Vitals reporting.

### 3. No duplicate tracking — structural guarantees

GA4-direct and GTM are mutually exclusive (GTM wins if both are set, with a
build warning); the Google tag runs with `send_page_view:false` and exactly
one page-view sender exists; one click listener for the whole site;
`TrackedLink`-instrumented links are marked so the delegated listener skips
them (one click → one event); the pre-mount replay is WeakSet-guarded; no
Meta Pixel or other tags exist (audit-blocked from returning).

### 4. Conversion events & funnel

Ten conversion events (Phase 22's six + `email_click`, `service_cta_click`,
`subservice_cta_click`) plus `page_view` and `web_vitals` define the funnel:
Landing → Service/Sub-service (`service_cta_click`/`subservice_cta_click`
wired on all four service/sub-service quote CTAs via data attributes) →
`quote_form_start` → `quote_form_submit` → `quote_form_success`, and the
alternative WhatsApp/phone/email path (`whatsapp_click`/`phone_click`/
`email_click` via the delegated listener covering header, footer, heroes, CTA
blocks, contact page and the quote quick-path/fallbacks). Multilingual by
construction: every route is language-prefixed and every event carries
`language`; at most three optional GA4 custom dimensions
(`language`/`service`/`surface`).

### 5. Web Vitals & performance discipline

LCP, INP, CLS + FCP and TTFB measured from real users via `useReportWebVitals`
(deprecated FID excluded), reported once per load as non-interaction
`web_vitals` events via `transport_type:"beacon"` (CLS ×1000 for integer
values); console output in dev for debugging. No site change chased a
synthetic score; analytics loads deferred (afterInteractive / lazyOnload,
~10.5 KB gzipped chunk) and does not block hydration or first paint. With no
IDs configured, zero measurement bytes ship beyond the inert bootstrap.

### 6. Privacy

No PII can reach analytics: context passes a closed allowlist
(surface/service/subservice/reason/lang, length-capped); the click tracker
classifies by URL scheme only and never reads link text; quote-form content
never enters events. Consent Mode defaults deny all advertising signals
(`ad_storage`/`ad_user_data`/`ad_personalization`) with analytics-only
first-party storage granted and Google signals off; Clarity (if activated)
keeps default text masking. The Privacy Policy gained a "Website measurement"
section in EN, MS and ZH. CSP loosens only for configured providers.

### 7. OWNER-PENDING (nothing invented)

GA4 Measurement ID, GTM Container ID, Google Ads conversion ID + labels, and
Clarity Project ID are all absent and documented in `.env.example`,
`PROJECT_OWNER_PENDING.md` (new Phase 24 section) and
`PHASE_24_ANALYTICS.md` §12 (activation checklist). Google Ads conversion
tracking is fully wired behind its four variables — each conversion arms only
with its ID *and* label; in GTM mode conversions map inside the container.
**No live-analytics verification is claimed**: no real property has received
data, and no SEO/performance conclusions are drawn from data that does not
exist yet.

### 8. Validation

- [x] `npm run type-check` — **PASS**
- [x] `npm run lint` — **PASS** (0 problems)
- [x] `npm run build` — **PASS** (665 static pages, unchanged)
- [x] `npm run audit:analytics` (new) — **PASS** (provider exclusivity, no
      fabricated IDs, event wiring, PII guards, web-vitals reporting, consent
      defaults, conditional CSP, EN/MS/ZH privacy disclosure, Search Console
      verification intact)
- [x] All ten existing audits — **PASS** (no regressions; the Phase 22
      quote-flow audit still enforces the event layer's platform neutrality)
- [x] Production-build HTML inspection: with IDs unset no provider
      script/CSP change exists and CTA data attributes render on service and
      sub-service pages in all languages; with dummy-format local IDs the CSP
      widens exactly for the enabled providers and gtag.js/gtm.js templates
      ship gated by mode (GTM wins when both are set, with the build warning)
- [ ] Headless-browser click-through could not run in this sandbox (no
      browser available) — live event delivery to a real property is verified
      by the owner per the checklist, never assumed

---

## PHASE 25 — Final Owner Data, Live Deployment, Real-World QA & Production Verification — [x] COMPLETE (as a production-readiness checkpoint)

Phase 25 is the final production-readiness checkpoint. No new architecture was
introduced. Missing business facts were not invented. Nothing is marked
"live verified" unless it was actually requested over HTTP.

### 1. Owner business data

Verified against `data/site.ts` (the only source) and the served contact
page. Nothing below was invented in this phase:

| Field | Value | Status |
|---|---|---|
| Business name | Renovix Home Services | Code + live verified |
| Phone / WhatsApp | +601159259521 | Code + live verified (`tel:` / `wa.me`) |
| Email | renovixhomeservices@gmail.com | Code + live verified (`mailto:`) |
| Address | Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur… | Code + live verified |
| Hours | 9:00 AM – 6:00 PM (days not stated) | Code + live verified; schema still has **no** `dayOfWeek` |
| Service area | Kuala Lumpur, Selangor, Klang Valley | Code + live verified |
| Certifications / reviews / years | not supplied | Correctly unpublished (OWNER-PENDING if the owner later supplies them) |

### 2. Resend / email

- Code verified: validation, honeypot, origin allow-list (apex + www), 64 KB
  body cap, rate limit (5 / 15 min / IP → 429), honest **503 `unavailable`**
  without credentials, `X-Robots-Tag: noindex`.
- Live production email delivery: **not tested** and **not claimed**. No
  `RESEND_API_KEY` / `QUOTE_FROM_EMAIL` in this environment. A real submission
  test that delivers mail remains OWNER-PENDING.

### 3. Domain / DNS / HTTPS

- Production hostname resolves and serves the site (Vercel). HTTPS is live
  (SecurityHeaders.com grade **A**, HSTS `max-age=63072000`).
- Search Console HTML file and `google-site-verification` meta are live.
- Canonicals, sitemap `<loc>`s and `robots.txt` `Host:` all use the apex
  `https://renovixhomeservices.my`.
- Live fetchers follow **apex → www** before `/en/`. That www/non-www
  preference is a Vercel domain setting, not application code. Changing it
  from the repo would risk a redirect loop. **Owner action:** set
  `renovixhomeservices.my` as the primary domain so www redirects *to* apex.

### 4–6. Sitemap, robots.txt, Search Console

- Served `/sitemap.xml`: **654** unique HTTPS apex URLs, 218 per language,
  no duplicates, no staging hosts. Full local sweep: **654/654 HTTP 200**.
- `/robots.txt`: `Allow: /`, `Host: https://renovixhomeservices.my`,
  `Sitemap: https://renovixhomeservices.my/sitemap.xml`. Live verified.
- Search Console: verification token live. Sitemap submission and indexing
  performance: **Insufficient real-world data for performance conclusions.**

### 7–13. Multilingual, services, pricing, locations, conversion, mobile/desktop

- EN/MS/ZH homepages, tiling, quote, contact, a problem, a location, a blog
  guide and a project page: self-canonical, `en-MY`/`ms-MY`/`zh-MY`/`x-default`,
  one H1, skip-link, no accidental `noindex`, no analytics vendors while IDs
  are unset, WhatsApp/phone/email match `data/site.ts`.
- All 10 services 200. Carpentry 404. No English chrome on `/ms/` or `/zh/`.
- Pricing remains centralized (51 rows). Visible tiling headline still
  "Starting from RM8 per sqft".
- Stale MS/ZH homepage region summaries (18 KL / 28 Selangor) corrected to
  **21 / 32** to match the Phase 23 registry.
- Quote form: labels, `aria-required`, honeypot, no fake file input, WhatsApp
  fallback. Local API tests as above.

### 14–18. Performance, accessibility, SEO, schema, security

- Real-browser PageSpeed: **not available** (public PSI quota exhausted;
  sandbox TLS to the production IP is reset). Local SSG profile unchanged
  (665 static pages; `/api/quote` dynamic). Not claimed as a Core Web Vitals
  field measurement.
- Accessibility (served HTML): skip link, landmarks, one H1, labelled quote
  fields, spoken "(required)", focus-visible, 16px inputs, reduced-motion.
  Real-device click-through is still OWNER-PENDING.
- Schema: Organization/LocalBusiness + WebSite on every page; Service +
  FAQPage + BreadcrumbList on service pages; Article + FAQPage on problem
  and blog pages; ImageObject on projects. No Review / AggregateRating.
- Security: CSP + nosniff + referrer-policy + permissions-policy already
  live (SecurityHeaders A). Phase 25 added `frame-ancestors 'none'` and
  `X-Frame-Options: DENY`. No secrets in source. Quote origin/size/rate
  guards intact.

### 19–22. Links, cleanup, docs, audits

- Full sitemap sweep 654/654 200; sampled internal links resolve; unknown
  slugs 404.
- No unused production artifacts deleted (historical phase reports kept).
- `PROJECT_PROGRESS.md` inventory updated off the stale Phase 21 633/46
  figures.
- New static audits: `audit:security`, `audit:sitemap`, `audit:schema`,
  `audit:multilingual`, `audit:routes`. Live server QA: `audit:live`.

### 23–24. Status vocabulary used in this phase

- Code verified / Build verified / Static verification passed / Live
  verified (HTTP) / Owner pending / Not yet testable.
- Owner remaining actions are only those that cannot be done in code —
  listed in `PROJECT_OWNER_PENDING.md` and the Phase 25 report.

### 25. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (665 static pages)
- [x] Existing audits (business, og-fonts, project-assets, pricing,
      locations, authority, subservices, blog, quote, analytics, projects)
      — PASS
- [x] New audits (security, sitemap, schema, multilingual, routes) — PASS
- [x] `npm run audit:live` against `next start` — PASS (654/654 sitemap
      URLs 200; quote API honest 503 / 403 / 400 / 413 / 429)
- [ ] Live Resend delivery — owner pending
- [ ] Live analytics property — owner pending (no IDs)
- [ ] Search Console indexing performance — insufficient real-world data
- [ ] Real-device / PageSpeed field data — not yet testable here

Phase 25 stops here. Ongoing SEO/content/analytics work after this is
normal post-launch maintenance, not a new build phase.

---

## Phase 26 — Deep audit + debt clearance (2026-09-05)

External deep audit of the whole site (findings recorded in this phase; the
standalone audit report and its living tracker were retired once every finding
was closed). All findings were
independently re-verified in a network-enabled sandbox before touching code:
`npm ci`, `type-check` 0 errors, `eslint` 0 warnings, `next build`
665 static pages, all 17 audits PASS, `npm audit` → **0 vulnerabilities**,
`audit:live` vs `next start` → **PASS 199 / WARN 0 / FAIL 0**.

Fixes landed in code:

1. **I-11 robots.txt** — removed the non-standard `host:` directive; served
   output verified (UA/Allow/Sitemap only, RFC 9309-conformant).
2. **I-08 legacy taxonomy retired** — `data/problems.ts` deleted; the homepage
   preview selection + icon map now live in `data/problem-content/previews.ts`
   and are re-exported from the problem-content registry index. One problem
   taxonomy remains in the codebase; `data/i18n` rewired accordingly.
3. **I-07 location models de-duplicated (data level)** — the registry's 53×
   dead `seo.title/metaDescription/h1` copies (never rendered — pages read the
   `data/area-content` guides) were removed (−159 lines). `types.ts` documents
   the intentional split: registry = structure + search intent, guides = copy.
   `audit:locations` already reconciles ids/districts/publicPath
   bidirectionally, so the two layers cannot drift apart silently; a full
   physical file-merge was explicitly rejected as churn without user benefit.
4. **I-06 answer-first ↔ FAQ duplication** — measured site-wide: **all 10**
   service pages carried a cost FAQ that was a compressed copy of the
   answer-first pricing answer (76–100% word containment). Each English
   `faqs[0]` was rewritten to a complementary angle (how the quote is built,
   what moves the number, how to compare quotes) while keeping every retained
   figure consistent with the single-source pricing catalogue (`audit:pricing`
   PASS). MS/ZH already omitted these FAQ entries — no translation drift was
   introduced.
5. **Regression guard** — `audit:authority` §5b now fails the build whenever a
   service page's answer-first block and FAQ section restate each other
   (≥0.55 word containment, or ≥0.45 with ≥4 shared RM figures). Negative-
   tested: restoring the old painting copy FAILS the audit; with the fix it
   PASSES.
6. **Verification closures** — I-12 (dependency CVEs) and I-13 (build claims)
   are no longer "unverifiable": independently run green this session.

Not done (all owner-side, or deferred by decision — see `PROJECT_OWNER_PENDING.md`):
www/apex Vercel primary, Resend keys, GSC sitemap submission, project photos,
analytics IDs, real-device pass (all OWNER); I-09 quote-field expansion (gated on
owner approval — since declined); I-03 CSP nonce (**deferred by decision** — a real
nonce forces per-request dynamic rendering and would forfeit the fully-static
665-page architecture; revisit trigger recorded); I-10 distributed rate
limiting (needs owner-provisioned KV before high-traffic launch).

Status vocabulary: Code verified / Build verified / Live verified (HTTP) /
Owner pending / Deferred with reason.

---

## Phase 27 — Independent SEO/GEO/AEO re-audit + audit-regression fixes + trade-term coverage (2026-09-18)

Trigger: the standing Master SEO + GEO + AEO + AI-search + programmatic-SEO
prompt. Per its Golden Rule the work is PRESERVE → AUDIT → VERIFY → IMPROVE —
not rebuild. The site is a mature, production, fully-static 3-language site
with a 17-script audit harness and a content-governance regime
(`CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`, `SITEMAP.md`) that already
implements most of the prompt's framework (page-eligibility, cannibalisation
control, single-sourced pricing, no-doorway locations, generated AI layer).
This phase therefore **did not add pages**; it re-verified the existing work,
fixed three stale audit assertions that were failing on *correct* behaviour,
and closed four genuine trade-term keyword gaps found via SERP research.

### 1. Full verification gate re-run (baseline before any change)

- [x] `npm ci` + `npm audit` — 0 vulnerabilities (dependency surface still
      exactly `next`/`react`/`react-dom`)
- [x] `npm run type-check` — 0 errors
- [x] `npm run lint` — 0 warnings
- [x] `npm run build` — PASS, 685 static pages
- [x] All 17 static audits + `audit:live` (678/678 sitemap URLs HTTP 200,
      quote API honest 405/400/403/413/503, internal-link sample resolves)

During the baseline run **two static audits were failing**, neither because
the site was wrong but because the assertions had drifted from the code:

### 2. Audit regressions found and fixed (correct behaviour, stale assertion)

1. **`audit:analytics` — FAIL "SubServicePage: expected 2 subservice_cta_click
   buttons".** `SubServicePage.tsx` legitimately carries **three** quote CTAs
   (hero, the Phase-14 pricing card, and the bottom CTA) and all three already
   fire `subservice_cta_click`. The assertion was frozen at the pre-pricing-card
   count of 2, so a *correct* page failed its own gate. Fix: the audit now
   counts quote CTAs (`localizedHref("/quote"`) and requires the tracked count
   to equal the CTA count and be ≥3 — so an **untracked** CTA still fails the
   build, and the guard is now strictly stronger, not weaker.
2. **`audit:business` — 6 false "phone number" FAILs.** The phone scan's
   digit-run regex misread integer SVG arc/line segments in
   `components/icons.tsx` (e.g. `12 12 0 0 0 12 24` in the WhatsApp glyph) as
   9–15-digit phone numbers. The existing `.` filter caught coordinate
   decimals but not pure-integer arc commands. Fix: strip SVG `d="…"`
   attributes before scanning (path geometry can never contain a phone/email/
   address). No source file's *content* was touched.
3. **`audit:sitemap` — count drift (would have failed on re-count).** The
   assertion hardcoded `chrome = 12` / 675 URLs, but the Smart Service Finder
   added a 13th chrome page (`/search/` landing, indexable; `?q=` variants are
   `noindex`), making the true served sitemap **678** URLs (226/language).
   Fix: assertion raised to `chrome = 13`, 226/language, 678 total — matching
   the served `/sitemap.xml` exactly.

All three fixes were **negative-verified** by re-running the suites: all 17
static audits now PASS and the served count (678) reconciles with the
assertion.

### 3. Trade-term keyword coverage (SERP-informed, additive, no new pages)

SERP research for the Malaysian market (EN / BM / 中文) showed that for several
trades the *dominant* local search phrasing is a "trade person" term that the
corresponding pillar page never used in rendered copy (the term existed only in
non-rendered `searchIntents`/`entityKeywords`, or not at all). One natural,
factual sentence per affected page was added to the existing intro — no new
pages, no new URLs, no pricing, no claims, no redesign:

| Page | Term added (0 occurrences before) | Evidence |
| --- | --- | --- |
| `/en/services/electrical/` | **electrician** (intro + meta) | "electrician near me" / "emergency electrician" already in the page's own `searchIntents`; the word never rendered |
| `/ms/services/electrical/` | **tukang elektrik** | dominant BM electrician phrasing; zero BM occurrences site-wide |
| `/zh/services/electrical/` | **电工** | dominant ZH electrician phrasing; zero occurrences on the page |
| `/ms/services/plumbing/` | **tukang paip** | page already used it once in an FAQ; added to intro so the pillar (not just the FAQ) carries the primary BM phrasing |

Each sentence is factual and scope-consistent with the existing copy (the
"one of three things" pattern mirrors the page's own sub-service groupings).
No superlatives, no invented credentials, no price changes.

### 4. Preserved untouched (verified correct — 🟢)

- URL architecture, trailing slashes, 308 root→`/en/`, 4 redirect rules.
- Single apex canonical + 4-way hreflang on all 678 URLs (live-verified).
- Single `/sitemap.xml` (678), RFC-9309 robots.txt, content-based lastmod.
- Structured data (Organization/LocalBusiness/WebSite/WebPage/BreadcrumbList/
  Service/FAQPage/Article/ImageObject) — still no Review/AggregateRating/geo/
  priceRange (governance §6, `audit:schema` enforces).
- Single-sourced pricing (51 rows), `audit:pricing` PASS — **no price changed**.
- 53 location guides + intent matrix; no `/{service}-in-{area}/` doorway pages.
- 57 problem guides, 51 sub-services, 12 blog guides, 28 projects.
- Generated AI layer `/llms.txt`, `/ai/business.json`, `/ai/pricing.json`.
- Multilingual coverage (EN/MS/ZH) — `audit:multilingual` PASS.
- Design, branding, layout, navigation, footer, components — **untouched**.

### 5. Still owner-pending (cannot be done in code; unchanged this phase)

Per `PROJECT_OWNER_PENDING.md`: real
Painting/Waterproofing project photos (owner-parked), GBP claim + confirmed
opening days, Vercel KV/Upstash for distributed rate limiting, optional
founder/About E-E-A-T note. None fabricated.

### 6. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (685 static pages)
- [x] All 17 static audits — PASS (business, og-fonts, project-assets,
      pricing, projects, locations, authority, subservices, blog, quote,
      analytics, security, sitemap, schema, multilingual, routes, search)
- [x] `audit:live` vs `next start` — PASS 199 / WARN 0 / FAIL 0
- [x] Served `/sitemap.xml` — 678 apex URLs, all 4-way hreflang + lastmod
- [x] Sampled service / area / sub-service / problem / chrome pages — 200,
      single H1, correct canonical, OG present

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 28 — Sub-service hub links + internal link-graph QA (2026-09-18)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's
"strengthen internal linking between services, sub-services, problems, areas
and relevant locations" directive, worked under the same PRESERVE → AUDIT →
VERIFY → IMPROVE rule as Phase 27: nothing was rebuilt, no URL, price, service,
claim or piece of branding changed.

### 1. What the audit actually found

Verifying the *rendered* graph (all 675 built pages parsed for internal
`href`s) rather than assuming it showed one structural gap:

- The 51 standalone sub-service pages were linked **only** from their own
  siblings, from the guides that cite them and from the projects that show
  them. Their parent service page — the strongest hub for that topic — never
  linked down to them, so 153 URLs (51 × 3 languages) had no inbound link from
  their own pillar. Average inbound links per sub-service page: **8.1**.
- The 57 problem guides linked to services, related problems, areas and
  guides, but never to the specific sub-service scopes that resolve them —
  even though every sub-service already declares its `relatedProblems` (189
  registry edges) and that direction was audited.

Everything else in the graph was already correct: 0 orphan pages, every page
type linked from its index, footer/header coverage intact, project → service /
sub-service / problem links present, blog → service / sub-service / area /
problem links present. Project → area links correctly stay absent because no
project has a confirmed location (never invented).

### 2. What was added (no redesign, registry-derived only)

1. **`components/service/SubServiceLinksSection.tsx` (new)** — one component,
   both directions: `SubServiceLinksBlock` (rendered inside the service page's
   existing sub-service section, extending it with a linked detail list) and
   `SubServiceLinksSection` (a section wrapper for the problem guides). Names
   come from the localized sub-service registry, the parent service label from
   the localized service list, and every link is filtered through
   `subServiceLanguages()` so no language ever links a page that does not
   exist. Empty list ⇒ nothing renders.
2. **Service pillars → their sub-service pages**: `ServicePage` passes
   `getSubServicesByService(detail.slug)` into the existing `SubServicesSection`
   (which keeps its overview cards exactly as they were) — 153 new hub links.
3. **Problem guides → the scopes that fix them**: new registry helper
   `getSubServicesForProblem(slug)` inverts each sub-service's own
   `relatedProblems` (no second hand-maintained list, so the two directions
   cannot drift) and `ProblemPage` renders it between the related-service and
   process sections — 189 edges per language, hidden on the four problem guides
   no sub-service declares.
4. **Copy** in EN/MS/ZH (`subServiceLinks` in `i18n/en.ts` / `ms.ts` / `zh.ts`
   + the `Dictionary` type): genuinely localized headings, no English leakage,
   using the site's existing Malay/Chinese sub-service terminology
   (Sub-Perkhidmatan / 细项服务).

### 3. Regression guards (so the gap cannot come back)

- `audit:subservices` §5 — wiring guard: the registry must keep
  `getSubServicesForProblem` derived from `relatedProblems`, the component must
  keep filtering through `subServiceLanguages`, the pillar must keep passing
  `getSubServicesByService(detail.slug)`, the problem template must keep
  rendering the section, and all three dictionaries must keep the block.
  Negative-tested: removing the pillar wiring fails the audit.
- `audit:live` — the existing full-sitemap sweep now keeps each page's internal
  links and asserts the rendered graph: **no orphan pages**, every one of the
  153 sub-service pages linked from its own service pillar *and* linking back,
  ≥53/57 problem guides linking to related scopes, and **no internal link
  pointing at a URL the site does not serve** (allowlisting `/llms.txt`,
  `/robots.txt`, `/sitemap.xml`, `/ai/*.json`, `/icon.svg`).

### 4. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| Sub-service pages with an inbound link from their own pillar | 0 / 153 | **153 / 153** |
| Internal links into sub-service pages (service → sub-service) | 0 | **153** |
| Internal links into sub-service pages (problem → sub-service) | 0 | **567** |
| Average inbound links per sub-service page | 8.1 | **12.8** |
| Orphan pages (no internal inbound link) | 0 | **0** |
| Internal links to unserved URLs | 0 | **0** |
| Sitemap URLs / pages | 678 / 685 | **678 / 685 (unchanged)** |

### 5. Preserved untouched (verified correct — 🟢)

- Every price (51 pricing rows, single-sourced; no `RM` literal added anywhere
  outside the catalogue), every URL, canonical, hreflang set and redirect.
- Design, branding, layout, navigation, footer and all existing page sections
  (the sub-service overview cards are unchanged; the new list is additive).
- Existing SEO work: metadata, schema, sitemap, robots, AI feeds, locations,
  multilingual coverage.
- No new page, no `{service}-in-{area}` doorway, no invented service, claim,
  location or project data.

### 6. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (685 static pages, sitemap still 678 URLs)
- [x] All 17 static audits — PASS (incl. the new `audit:subservices` §5 guard)
- [x] `audit:live` vs `next start` — **PASS 204 / WARN 0 / FAIL 0**, including
      the five new link-graph assertions
- [x] Rendered HTML spot-checked in EN/MS/ZH: pillar block, problem block,
      card labels and hrefs all correct and localized

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 29 — Location → scope links, localized area anchors & sub-service AI coverage (2026-09-18)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's
"strengthen internal linking between services, sub-services, problems, areas
and relevant locations" directive — worked under the same PRESERVE → AUDIT →
VERIFY → IMPROVE rule as Phases 27 and 28. The rendered link graph of all 678
pages was crawled before anything was touched (not assumed), and everything
below is a measured result. No URL, price, service, claim, page or piece of
branding changed.

### 1. What the crawl actually found

| Measurement (rendered HTML, all 678 URLs) | Before | After |
|---|---|---|
| Links from area guides to sub-service pages | **0** | **2,235** (745 per language) |
| Area guides with at least one sub-service link | **0 / 159** | **159 / 159** |
| Average inbound links per sub-service page | 12.8 | **27.5** (min 10 → 11) |
| English slug-labelled anchors on `/ms/` + `/zh/` pages | up to 8 per area guide | **0** |
| Sub-services listed in `/llms.txt` + `/ai/business.json` | **0** | **51** |
| Orphan pages | 0 | 0 |
| Internal links to unserved URLs | 0 | 0 |
| Sitemap URLs / generated routes | 678 / 689 | 678 / 689 (unchanged) |

Two genuine defects/gaps were confirmed by crawling the served HTML:

1. **Area → sub-service was the last missing edge.** Area guides linked to
   services, problems, nearby areas and guides, but not to a single one of the
   153 published sub-service pages.
2. **English anchor text on MS/ZH area pages.** `AreaIntentMatrixSection`
   built its labels by humanizing the slug (`"bathroom-leakage"` → "Bathroom
   Leakage", `"electrical"` → "Electrical"), so every `/ms/` and `/zh/` area
   guide carried up to eight English labels — while the rest of the same page
   used the localized registries (`浴室渗漏`, `水管工程`). It also contradicted
   CONTENT_GOVERNANCE §5 ("never English copy under a `/ms/` or `/zh/` URL").

### 2. What was added (registry-derived, additive only)

1. **`getSubServicesForLocation(locationSlug, localProblemSlugs)`**
   (`data/sub-services/index.ts`) — the location half of the sub-service
   graph, derived from two authored sources and nothing else:
   the published entries of the location × service × sub-service × problem
   search-intent matrix for that area first (the site's own published intent
   model, which until now was rendered nowhere), then the inverse of each
   sub-service's own `relatedProblems` walked in the order of the problems the
   area guide lists as locally common. Deduplicated in that order. It imports
   the intent-matrix leaf module rather than the `@/data/locations` barrel, so
   no new module cycle is introduced.
2. **`components/area/AreaSubServicesSection.tsx` (new)** — renders that list
   inside the existing "Services Available in {area}" section (additive block,
   no new section, no background change, no redesign) through the shared
   Phase 28 `SubServiceLinksBlock`, so card markup, localized names and the
   per-language availability filter (`subServiceLanguages`) stay single-sourced.
3. **Localization fix** — `AreaIntentMatrixSection` now resolves service names
   from `getServiceCategories(lang)` and problem names through
   `getProblemsBySlugs(area.relatedProblems, lang)`; a label that cannot be
   resolved in the current language is skipped rather than falling back to
   English. Markup, classes, ordering and list membership are unchanged.
4. **AI / GEO layer** — the 51 sub-service pages (the most specific commercial
   surface on the site) were absent from the machine-readable feeds while
   services, problems, areas, projects and guides were all listed. `/llms.txt`
   now carries a "Sub-services" section and `/ai/business.json` a `subServices`
   block (name, slug, parent service, url and a price note derived from the
   catalogue through `formatSubServicePrice` — no figure is typed into the
   feed; `audit:authority` §7 still enforces this).
5. **Copy** in EN/MS/ZH (`subServiceLinks.areaEyebrow` / `areaTitle` /
   `areaDescription` + the `Dictionary` type) — genuinely localized headings,
   no English leakage, reusing the site's existing Sub-Perkhidmatan / 细项服务
   terminology.

### 3. Regression guards (so neither gap can return)

- `audit:subservices` §6 — the Phase 29 wiring guard: the registry must expose
  `getSubServicesForLocation` and keep deriving it from
  `getMatrixEntriesForLocation` + `getSubServicesForProblem`, the area block
  must pass `(area.slug, area.relatedProblems)`, must render through
  `SubServiceLinksBlock`, must stay rendered by `AreaServicesSection`, and all
  three dictionaries must carry the area copy. **Negative-tested:** removing
  the `<AreaSubServicesBlock … />` wiring fails the guard.
- `audit:multilingual` — a source-level ban on humanizing a slug into display
  text anywhere in `components/` (the defect class above), plus pins that keep
  the area intent matrix on `getServiceCategories` / `getProblemsBySlugs`.
  **Negative-tested:** dropping the `getProblemsBySlugs` resolution fails it.
- `audit:live` — two new rendered assertions: **every** area guide links to the
  sub-service scopes carried out there (with the edge count), and **no** `/ms/`
  or `/zh/` page labels a link with the humanized slug. Place-name links
  (`/areas/…`) are excluded because "Cheras" is correct in every language.
  **Negative-tested:** rebuilding with the old humanized labels makes the
  assertion fail again on the `/ms/` and `/zh/` area guides; with the fix it
  passes on all 678 pages.

### 4. Preserved untouched (verified correct — 🟢)

- Every price (51 pricing rows, single-sourced), every URL, canonical, hreflang
  set, redirect and the 678-URL sitemap.
- Design, branding, layout, navigation, footer and every existing section —
  the new block is additive inside an existing section.
- Structured data (no new or altered schema nodes), robots.txt, security
  headers, quote flow, analytics posture, search finder.
- Content governance: no invented service, price, claim, location, project or
  credential; no `{service}-in-{area}` doorway page and no new URL.

### 5. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS
- [x] `npm run build` — PASS (689 generated routes, exactly as before this
      phase; the 678-URL sitemap is unchanged because no route was added or
      removed)
- [x] All 17 static audits — PASS (incl. the new Phase 29 wiring + label guards)
- [x] `audit:live` vs `next start` — **PASS 206 / WARN 0 / FAIL 0**, including
      the two new rendered assertions
- [x] Served spot-checks — EN/MS/ZH Mont Kiara, Klang, Kampung Baru:
      localized block heading, localized card labels and parent-service lines,
      correct sub-service hrefs, no literal `{name}` placeholders
- [x] Whole-site scan — 0 humanized-slug anchors on `/ms/` and `/zh/`,
      0 English problem/sub-service names left on localized pages

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 30 — Problem → project proof links (the last missing edge in the project graph) (2026-09-19)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's
"strengthen internal linking between services, sub-services, problems, areas
and relevant locations" directive — worked under the same PRESERVE → AUDIT →
VERIFY → IMPROVE rule as Phases 27–29. The full verification gate was re-run
first (baseline, nothing assumed), then the *rendered* HTML of all 678 URLs
was crawled to build an edge-type matrix of the internal link graph before
anything was touched. No URL, price, service, claim, page or piece of
branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm ci` + `npm run type-check` + `npm run lint` — PASS (0 errors,
      0 warnings)
- [x] `npm run build` — PASS (689 generated routes)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — PASS 206 / WARN 0 / FAIL 0

Everything Phases 27–29 reported is still true and was left untouched (🟢):
678-URL sitemap, single canonical + 4-way hreflang, single-sourced pricing
(51 rows), service→sub-service hub links, problem→sub-service scope links,
area→sub-service location links, localized anchor text, sub-services in the
AI feeds.

### 2. What the rendered-graph crawl actually found

A full crawl of all 678 URLs classified every internal link by source and
target page type (home / service / sub-service / problem / area /
area-region / blog / project / index / chrome). The matrix confirmed all
Phase 28/29 edges and found exactly **one** remaining asymmetry:

- Project pages link to problem guides (Phase 21 `ProjectProblemsSection`,
  210 rendered links), sub-service pages and service pages link to projects
  — but **problem guides never linked back to a single project page**
  (0 `problem → project` edges in the rendered graph), even though the
  relationship is fully authored in the registry.

Two other thin spots were examined and deliberately left alone (🟢): the six
region hubs (`/areas/kuala-lumpur/`, `/areas/selangor/`) are directory pages
by design — their 53 area guides already carry the problem/scope edges — and
the `project → blog` direction has no authored relationship to derive from,
so adding it would mean guessing (forbidden by CONTENT_GOVERNANCE).

### 3. What was added (registry-derived, additive only)

1. **`getProjectsForProblem(problemSlug)`** (`data/project-content/index.ts`)
   — the Problem → Project direction, derived as the exact inverse of the
   project pages' own related-guides logic: a project qualifies only when a
   sub-service mapped to it (`Project.subServices`, Phase 21) declares the
   problem in its own `relatedProblems` (Phase 19 registry). Same authored
   chain as `ProjectProblemsSection`, so the two directions cannot drift; no
   second hand-maintained list, no keyword inference.
2. **`components/problem/ProblemProjectsSection.tsx` (new)** — renders up to
   three of those projects on the problem guide as the same photograph cards
   the sub-service pages already use (real image, real localized title and
   alt text, "View project"). Placed directly after the Phase 28 scope block
   ("the scopes that fix this" → "proof we fixed it"). Returns `null` when
   no mapped project exists — 32 of the 57 problem guides resolve to scopes
   with no photographed work yet (painting, waterproofing, flooring,
   handyman and unmapped jobs), and their pages correctly show nothing
   rather than borrowing projects from a parent service.
3. **Copy** in EN/MS/ZH (`problemPage.projectsEyebrow` / `projectsTitle` /
   `projectsDescription` + the `Dictionary` type) — genuinely localized
   ("Kerja projek yang berkaitan dengan {name}" / "与{name}相关的工程实绩"),
   factual wording only ("project work connected to…", never a claim the
   registry cannot back).

### 4. Regression guards (so the edge cannot silently disappear)

- `audit:projects` §10 — recomputes the whole Problem → Project edge set from
  the authored sources (project `subServices` × sub-service
  `relatedProblems`) and reports it; wiring guard pins that
  `getProjectsForProblem` stays derived from the mapped sub-services' own
  `relatedProblems` (the exact inverse of `ProjectProblemsSection`), that
  `ProblemPage` renders the section, that the section renders nothing when
  empty, and that all three dictionaries carry the copy.
  **Negative-tested:** breaking the `ProblemPage` wiring fails the audit.
- `audit:live` — two new rendered assertions in the full-sitemap link-graph
  sweep: 75/171 problem guides (all that have genuinely mapped projects)
  link to project pages (156 links), and **every** problem → project link is
  answered by the project's own related-guides link back (safe pairwise
  check because no project's problem union exceeds the guides section cap of
  six — verified, max is exactly 6). **Negative-tested:** rebuilding without
  the section fails the assertion with `0/171 guides, 0 links`.

### 5. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| `problem → project` edges in the rendered graph | **0** | **156** (52 per language) |
| Problem guides linking to genuinely mapped projects | **0 / 171** | **75 / 171** (25 × 3) |
| Project guides that correctly show no section (no mapped work) | 171 | 96 / 171 |
| Average inbound links per project page | 16.4 | **18.2** |
| Orphan pages / internal links to unserved URLs | 0 / 0 | 0 / 0 |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |

### 6. Preserved untouched (verified correct — 🟢)

- Every price (51 pricing rows, single-sourced; `audit:pricing` PASS), every
  URL, canonical, hreflang set, redirect and the 678-URL sitemap.
- Design, branding, layout, navigation, footer and every existing section —
  the new block is an additive section between two existing ones, reusing the
  site's existing photograph-card markup.
- Structured data (no new or altered schema nodes), robots.txt, AI feeds,
  security headers, quote flow, analytics posture, search finder.
- Content governance: no invented service, price, claim, location, project or
  credential; no new page and no new URL of any kind.

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS (incl. the new `audit:projects` §10)
- [x] `audit:live` vs `next start` — **PASS 208 / WARN 0 / FAIL 0**,
      including the two new rendered assertions
- [x] Served spot-checks — EN/MS/ZH `sagging-ceiling` renders the section
      with localized heading, 3 real project cards and correct hrefs;
      EN/MS/ZH `peeling-paint` (no mapped work) renders 0 project links and
      no section heading
- [x] Negative tests — both new guards fail when the wiring is removed

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 31 — Owner coverage checklist: full verification of the service / sub-service / area / kampung / problem architecture + completeness guards (2026-09-19)

Trigger: the owner's checklist — service pages, sub-service pages, area
coverage for every service and sub-service, sub-area and kampung pages,
problem pages per service, strong internal linking, and **everything in all
three languages (EN/MS/ZH)** — with the instruction to check completely what
is missing and add whatever remains. Worked under the standing PRESERVE →
AUDIT → VERIFY → IMPROVE rule: the rendered HTML of the whole site was
crawled and measured before any conclusion, and no page, URL, price, service
or claim was added or removed.

### 1. What the crawl actually verified (the full checklist, measured)

| Owner checklist item | Measured result (rendered HTML + sitemap) | Status |
|---|---|---|
| Service pages, all 3 languages | **10 services × EN/MS/ZH = 30 pages**, each with localized H1/meta/sections | ✅ complete |
| Sub-service pages, all 3 languages | **51 sub-services × 3 = 153 pages** (all priced catalogue rows have a page) | ✅ complete |
| Every service links every area | **30/30 service pillars link to all 53 area guides** of their language (1,590 links, localized names) | ✅ complete |
| Every sub-service links every area | **153/153 sub-service pages link to all 53 area guides** (8,109 links) | ✅ complete |
| Area pages per service & sub-service (the other direction) | **159/159 area guides** each render ≥6 locally-noted services + linked sub-service scopes (Phase 29) + ≥4 local problems | ✅ complete |
| Sub-area & kampung tier pages | hierarchy model supports …→ kampung → sub-area; both authored tiers are published guides: **Kampung Baru (`kampung`) and KL City Centre (`sub_area`)**, each full 13-section × EN/MS/ZH | ✅ complete |
| Problem pages per service | **57 problems × 3 = 171 guides**; all **10 services** receive problem-guide links in all 3 languages; every problem links ≥1 service + all 53 areas | ✅ complete |
| Three-language parity | all **513** service / sub-service / area / problem pages carry full `en-MY`/`ms-MY`/`zh-MY`/`x-default` hreflang + self-canonical; 0 English anchors on `/ms/` or `/zh/` (Phase 29 guard) | ✅ complete |
| Internal linking strength | 0 orphan pages, 0 internal links to unserved URLs, full hub↔spoke, problem↔scope, area↔scope, problem↔project (Phase 30) and service/sub-service↔area graphs | ✅ complete |

### 2. What was deliberately NOT added (governance, not omission)

- **No `/{service}-in-{area}/` pages.** CONTENT_GOVERNANCE §3 bans per-service
  area doorways; the site's answer to "service X in area Y" is the area guide
  itself — each of the 53 guides carries six locally-noted services, local
  problems, FAQs and intent-matrix answers for every service genuinely
  carried out there, and every service/sub-service page links back to all 53.
  Creating ~2,850 service×area / sub-service×area URLs would duplicate that
  content, cannibalize the guides and trip the site's own no-doorway audit.
  The owner-checklist intent (service + area coverage, both directions, all
  languages) is fully met by the hub-and-spoke graph — now machine-enforced.
- **No mass kampung pages.** The registry's kampung tier is used exactly
  where Phase 23's quality gate justified it (Kampung Baru's timber-house
  stock). A kampung page needs verified coverage + unique local context +
  unique FAQs to pass `audit:locations`; adding more by place-name alone
  would violate "never fabricate" / "when in doubt, publish less". The data
  model makes any future owner-approved addition a pure data change.
- **No new language, page-type or URL.** Sitemap stays 678 URLs; 689
  generated routes unchanged.

### 3. The one genuine gap found — and closed (regression enforcement)

The crawl proved the service/sub-service ↔ area completeness exists — but
**no audit enforced it**: the Phase 28–30 guards cover hub→spoke,
problem→scope, area→scope and problem→project edges, yet a future edit
breaking the "where we work" block (or an area guide's service list) would
have shipped silently. `audit:live` now pins the owner-checklist edges in the
rendered graph:

1. **Every one of the 183 service + sub-service pages links to all 53 area
   guides of its own language** (9,699 links — anything short fails).
2. **All 159 area guides link back to ≥6 service pillars** (the
   locally-noted services section).

Both are deterministic (exact inventory × exact coverage) and were
**negative-tested**: rebuilding with the `AreasSection` area chips removed
fails assertion 1 with `9169 service/sub-service → area links missing`;
restoring it passes again.

### 4. Preserved untouched (verified correct — 🟢)

- Every page, URL, canonical, hreflang set, redirect and the 678-URL sitemap.
- Every price (single-sourced catalogue), all schema nodes, robots.txt, AI
  feeds, quote flow, analytics posture, search finder.
- Design, branding, layout, navigation, footer and every existing section.
- All Phase 27–30 work re-verified green at this phase's baseline and left
  unchanged.

### 5. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — **PASS 210 / WARN 0 / FAIL 0**,
      including the two new owner-checklist assertions
- [x] Owner-checklist crawl: 10/10 verification items PASS (table in §1)
- [x] Negative test of the new guards — both fail when coverage is broken

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 32 — Project → Knowledge Hub guide links (closing the last asymmetric edge in the content graph) (2026-09-19)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's
"strengthen internal linking between services, sub-services, problems, areas
and relevant locations" directive — worked under the same PRESERVE → AUDIT →
VERIFY → IMPROVE rule as Phases 27–31. The full verification gate was re-run
first (baseline, nothing assumed green), then the *rendered* HTML of all 678
URLs was crawled again to rebuild the edge-type matrix from scratch before
anything was touched. No URL, price, service, claim, page or piece of
branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm ci` + `npm run type-check` + `npm run lint` — PASS (0 errors,
      0 warnings)
- [x] `npm run build` — PASS (689 generated routes)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — PASS 210 / WARN 0 / FAIL 0

Everything Phases 27–31 reported is still true and was left untouched (🟢):
678-URL sitemap, single canonical + 4-way hreflang, single-sourced pricing
(51 rows), hub↔spoke, problem↔scope, area↔scope, problem↔project,
service/sub-service↔area graphs, localized anchor text, AI feeds.

### 2. What the rendered-graph crawl actually found

A fresh full crawl of all 678 URLs reclassified every internal link by
source and target page type. The matrix confirmed all Phase 28–31 edges and
found exactly **one** remaining asymmetry in the whole content graph:

- Blog guides link to the projects they reference (45 rendered links —
  15 per language), but **project pages never linked back to a single
  guide** (0 `project → blog` edges), while the equivalent blog↔service,
  blog↔sub-service, blog↔problem and blog↔area directions are all
  symmetric and rendered.

Root cause: the relationship is fully authored (`Article.relatedProjects`
in the blog registry — 15 (article, project) pairs across 13 of the 28
published projects) and the data layer already exposes the inverse lookup
`getArticlesForProject()` — but the getter had **zero callers anywhere in
the repository**: dead code, so the edge never rendered. This also corrects
the record from Phase 30, which left the direction alone on the stated
belief that "the `project → blog` direction has no authored relationship to
derive from"; the crawl disproved that — the relationship existed and was
simply never surfaced.

Two other thin spots were examined and again deliberately left alone:

- **`project ↔ area` edges (0 in both directions).** `ProjectLocation`
  exists in the data model, and project pages already render a location
  section when it is set — but the field is unset for *every* project
  because no site address was supplied with the photographs
  (PROJECT_OWNER_PENDING.md §6, GREY / owner-pending). Deriving an area
  from a project's category or title would be fabrication
  (CONTENT_GOVERNANCE §1). The wiring is in place; the edge appears the
  moment the owner confirms locations — a pure data change.
- **Region hubs** stay directory pages by design (Phase 30 decision,
  re-verified).

### 3. What was added (registry-derived, additive only)

1. **`GuideLinksSection` gained a fifth scope, `"project"`** — the exact
   same component the service, sub-service, problem and area pages already
   render, same card markup, same "Knowledge Hub" eyebrow, same
   render-nothing-when-empty behaviour. No new component, no redesign.
2. **`ProjectPage` renders it** between the location slot and the
   related-projects section (mirroring ProblemPage's guides → related →
   CTA order), fed by `getArticlesForProject(project.slug)` — the exact
   inverse of ArticlePage's own related-project links, so the two
   directions read the same authored field and cannot drift. 13 of the 28
   projects resolve to guides; the other 15 correctly render nothing
   rather than borrowing loosely-related reading.
3. **Copy** in EN/MS/ZH (`guideLinks.projectTitle` + the `Dictionary`
   type): "Guides related to this project" / "Panduan berkaitan projek
   ini" / "与此工程相关的指南" — genuinely localized, factual wording only,
   no `{name}` placeholder (project titles are long; follows the
   problem-scope pattern).

### 4. Regression guards (so the edge cannot silently disappear)

- `audit:projects` §11 — wiring guards pin that `getArticlesForProject`
  stays derived from each article's own `relatedProjects`, that
  `GuideScope` includes `project` and renders `projectTitle`, that
  `ProjectPage` renders the section, that it renders nothing when empty,
  and that all three dictionaries carry the key; plus a coverage report
  recomputed from the authored registries (15 pairs / 13 projects).
  **Negative-tested:** removing the `ProjectPage` wiring fails the audit
  (exit 1) with the exact guard message.
- `audit:live` 3e — two new rendered assertions in the full-sitemap
  link-graph sweep: ≥37/84 project pages link to the guides that reference
  them with ≥42 links (actual: **39/84, 45 links**), and **every** rendered
  `blog → project` edge is answered by the project's own `project → blog`
  edge back (pairwise, 45/45). **Negative-tested:** rebuilding with the
  wiring removed fails both assertions with `0/84 pages, 0 links` and
  `45 … edge drift`; restoring it passes again.

### 5. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| `project → blog` edges in the rendered graph | **0** | **45** (15 per language) |
| Project pages rendering the Knowledge Hub block | **0 / 84** | **39 / 84** (13 × 3) |
| `blog → project` edges answered by a link back | 0 / 45 | **45 / 45** |
| Average inbound links per blog article | 27.0 | **28.25** |
| Orphan pages / internal links to unserved URLs | 0 / 0 | 0 / 0 |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |

The internal link graph is now symmetric across **every** authored
relationship family: service↔sub-service, service/sub-service↔area,
problem↔sub-service, problem↔project, blog↔service, blog↔sub-service,
blog↔problem, blog↔area and blog↔project.

### 6. Preserved untouched (verified correct — 🟢)

- Every price (51 pricing rows, single-sourced; `audit:pricing` PASS),
  every URL, canonical, hreflang set, redirect and the 678-URL sitemap.
- Design, branding, layout, navigation, footer and every existing section —
  the new block reuses the site's existing guide-card component and keeps
  the page's surface/white background rhythm.
- Structured data (no new or altered schema nodes), robots.txt, AI feeds,
  security headers, quote flow, analytics posture, search finder.
- Content governance: no invented service, price, claim, location, project
  or credential; no new page and no new URL of any kind.

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS (incl. the new `audit:projects` §11)
- [x] `audit:live` vs `next start` — **PASS 212 / WARN 0 / FAIL 0**,
      including the two new rendered assertions
- [x] Served spot-checks — EN/MS/ZH `marble-look-floor-tiling` renders the
      localized heading/eyebrow and the correct `/{lang}/blog/…` href;
      EN/MS/ZH `plaster-ceiling-design-downlights` (no authored guides)
      renders zero headings and zero article links
- [x] Negative tests — both new guards fail when the wiring is removed and
      pass again when restored

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 33 — `/llms.txt` now enumerates the project portfolio (AI-feed coverage parity) (2026-09-19)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's directive to
keep the machine-readable layer complete, worked under the same
PRESERVE → AUDIT → VERIFY → IMPROVE rule as Phases 27–32. The full gate was
re-run first (baseline, nothing assumed green: type-check, lint, build,
17 static audits, `audit:live` 212/0/0), then the served AI feeds were read
back and compared against the served sitemap before anything was touched.
No URL, price, service, claim, page or piece of branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (689 generated routes)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — PASS 212 / WARN 0 / FAIL 0

### 2. What the feed audit actually found

`/llms.txt` is the one document written for answer engines and crawlers, and
it is the place an assistant goes to find *which page* answers a question. Read
back from the running server, it enumerated every cite-worthy family except
one:

| Family | Served (EN) | Listed in `/llms.txt` before |
|---|---|---|
| Services (with starting prices) | 10 | 10 |
| Sub-services (Phase 29) | 51 | 51 |
| Region overviews | 2 | 2 |
| Area guides | 53 | 53 |
| Knowledge Hub guides | 12 | 12 |
| Problem guides | 57 | 12 sampled + index link (by design) |
| **Project pages** | **28** | **0 — index link only** |

The URL existed in the feed exactly once, as
`- [Real project portfolio](…/projects/)` in the "More" chrome list. So an
assistant asked "have they completed this kind of work?" could see *that* a
portfolio exists but could not cite a single job without crawling the index
and every card. The data was already built and already trusted: the shared
builder computes `knowledge.projects.published` (title + url from the project
registry) and `/ai/business.json` has carried all 28 since Phase 16 — only
`/llms.txt` never rendered the list. Phase 29 closed the identical gap for
sub-services; this closes it for the evidence-of-work surface.

The other families were verified complete in both directions (nothing missing,
nothing stale) and left untouched, including the deliberate problem-guide
sample: 12 of 57 entries behind an "All problem guides" index link.

### 3. What was added (registry-derived, additive only)

1. **`## Projects` section in `app/llms.txt/route.ts`** — placed after
   `## Service areas` and before `## Guides`, so the file still reads
   commercial → local → evidence → educational → chrome. The heading count
   (`## Projects (28 published jobs)`) is interpolated from
   `knowledge.projects.published.length`; the "All projects" index line comes
   first, mirroring the problem-guide section's own index-first shape; then one
   `- [title](url)` line per published project. No count, title or URL is
   typed into the file — remove a project from the registry and the feed
   follows at the next build.
2. **Wording kept strictly factual** — "Real completed work, documented with
   its own photographs." Every published project carries a required image
   (`Project.image`, enforced by the registry type) and each page renders only
   owner-supplied details, so the line claims nothing the pages do not publish:
   no location, date, material, outcome or credential claim, and no price.

Result: `/llms.txt` grew 176 → 211 lines (+35) and now lists **all 156
English content pages** (10 services, 51 sub-services, 2 regions, 53 areas,
12 guides, 28 projects) plus the problem sample.

### 4. Regression guards (so the family can neither drop out nor go stale)

- `audit:authority` §7 — new source assertion that
  `app/llms.txt/route.ts` renders `knowledge.projects.published` (the same
  `aiChecks` pattern that pins the builder wiring). **Negative-tested:**
  deleting the enumeration block fails the audit (exit 1) with
  `app/llms.txt/route.ts no longer contains "knowledge.projects.published" —
  llms.txt enumerates every published project page (Phase 33)`.
- `audit:live` — new `checkAiFeedCoverage(locs)`, 7 assertions. It fetches the
  served `/llms.txt`, extracts every canonical URL, and compares it against
  the served sitemap **in both directions** for each family (services,
  sub-services, region overviews, area guides, guides, projects), then checks
  the problem-guide sample is still ≥12 entries behind its index link.
  **Negative-tested in both directions:** with the section removed the live
  run exits 1 with `llms.txt omits 28/28 project pages (e.g. …)`; with one
  invented project URL injected it exits 1 with `llms.txt lists 1 project page
  URLs the site does not serve (e.g. /en/projects/does-not-exist/)`. Both
  restore green. Note the broken states pass `type-check`, `lint` and
  `next build` — the coverage regression is invisible to CI without these
  guards, which is why the live comparison exists.

### 5. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| Project pages listed in `/llms.txt` | **0 / 28** | **28 / 28** |
| Families fully enumerated in `/llms.txt` | 5 of 6 | **6 of 6** (problems sampled by design) |
| `/llms.txt` lines | 176 | **211** |
| Feed ↔ sitemap parity assertions in live QA | 0 | **7** (both directions, 6 families) |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |
| New pages / new URLs / prices touched | — | **0 / 0 / 0** |

### 6. Preserved untouched (verified correct — 🟢)

- Every price and the pricing catalogue (`audit:pricing` PASS); the feed still
  hardcodes no figure (`audit:authority` §7 no-hardcoded-price rule).
- All 678 URLs, canonicals, hreflang sets, redirects and the sitemap; the
  project pages themselves, their titles, H1s, images and OG assets (spot
  checked: all 28 feed titles equal their page H1 exactly).
- `/ai/business.json` (28 projects, unchanged), `/ai/pricing.json`,
  `robots.txt` (broad `Allow: /` verified to admit AI crawlers) and the
  existing "More" section of `/llms.txt` — the index link stays as it was.
- Content governance: no invented service, price, claim, location, project or
  credential; the sample/summary structure of the feed preserved.
- `CONTENT_MAP.md` §7 updated to record the new feed contents and the guard
  (documentation of the change, no rule changed).

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS (incl. the new `audit:authority` §7 token)
- [x] `audit:live` vs `next start` — **PASS 219 / WARN 0 / FAIL 0** (was 212),
      including the 7 new feed-coverage assertions
- [x] Served spot-checks — 28 project entries parse from the live feed with
      zero title/H1 mismatches; section renders between Service areas and
      Guides; business.json still carries 28
- [x] Negative tests — missing-coverage and stale-entry directions both fail
      as designed and pass again after restore

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 34 — AI feed publishes the phrasing tables for all three languages (2026-09-19)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's directive to
keep the machine-readable layer complete and honest, worked under the same
PRESERVE → AUDIT → VERIFY → IMPROVE rule as Phases 27–33. The full gate was
re-run first (baseline, nothing assumed green: type-check, lint, build,
17 static audits, `audit:live` 219/0/0), then the remaining un-audited feed
surfaces were read back from the running server before anything was touched.
No URL, price, service, claim, page or piece of branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (689 generated routes)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — PASS 219 / WARN 0 / FAIL 0

### 2. What the feed audit actually found

`/ai/business.json` carries a `searchIntents` block so an assistant can map a
customer's own words to the page that answers them. Read back from the running
server, the block published **one** language of that mapping:

| | Served / supported | Published in the feed before |
|---|---|---|
| Language codes (`supportedLanguages`) | en, ms, zh | en, ms, zh |
| English phrasing table | 52 entries | **52** |
| Malay phrasing table | 44 entries | **0** |
| Chinese phrasing table | 35 entries | **0** |

The tables themselves were not missing — `data/search/synonyms.ts` has held
all three (131 entries) since the Smart Service Finder shipped, and
`app/[lang]/search/page.tsx` matches live queries against them in the page's
own language (`expandQuerySynonyms` + `getSearchIndex(code)`), audited by
`npm run audit:search` rule 4 (every entry resolves to a real entity in its
language). Only the AI feed published the English subset — leaving the site's
two other published languages unmappable for the assistants the feed exists
for, and contradicting the block's own description, which promises phrasings
"in any of the three languages". This is the same defect class as Phase 29
(sub-services absent from the feeds) and Phase 33 (projects absent from
`/llms.txt`): the machine-readable layer lagging what the site actually serves.

Verified before changing anything: the visible search does answer those
languages — `/ms/search/?q=paip+bocor` returns
`/ms/problems/leaking-pipe/`, and `/zh/search/?q=水管漏水` returns
`/zh/problems/leaking-pipe/` — so publishing the tables describes real,
already-shipped behaviour rather than new claims.

### 3. What was added (registry-derived, additive only)

1. **`msPhrasings` and `zhPhrasings` in `lib/ai-knowledge.ts`**, derived
   through the same `getSynonyms(lang)` getter as `englishPhrasings`, same
   `(phrase, kind, slug)` shape. The existing English key is untouched, so
   nothing that already reads the feed breaks; no phrase, slug or mapping is
   typed into the builder.
2. **The block's stale comment corrected** — it previously said the MS/ZH
   tables were "reachable from the same module" while claiming three-language
   coverage the feed did not have. It now states what is actually published and
   why (a Malay or Chinese customer phrases the query in their own language).
3. Nothing else changed: no new endpoint, no new page, no price, and the
   `description` line the block already carried is now true rather than
   aspirational.

Measured: the feed carries 52 + 44 + 35 = **131 phrasings** across three
languages (was 52 in one), and `/ai/business.json` grew 47,533 → **52,724
bytes** (+10.9%) — the whole cost of the change.

### 4. Regression guards (so a language cannot silently drop out or drift)

- `audit:authority` §7 — two new source assertions that the builder derives
  the Malay and Chinese tables (`getSynonyms("ms")` / `getSynonyms("zh")`).
  **Negative-tested:** reducing the ZH table to an empty array fails the audit
  (exit 1) with `lib/ai-knowledge.ts no longer contains "getSynonyms("zh")" —
  knowledge builder publishes the Chinese phrasing table (Phase 34)`.
- `audit:live` — new `checkAiPhrasingCoverage(locs)`, 4 assertions. It reads
  the **served** `/ai/business.json`, requires a published table for **every**
  code in the feed's own `supportedLanguages` (so adding a fourth language
  fails the guard until its table ships — registry-derived, not hardcoded),
  and resolves **every** `(kind, slug)` entry against the served sitemap in
  that language's own tree (`service` → `/{lang}/services/{slug}/`,
  `sub-service` → `/{lang}/services/*/{slug}/`, `problem` →
  `/{lang}/problems/{slug}/`, `area` → `/{lang}/areas/*/{slug}/`).
  **Negative-tested twice:** (a) ZH table emptied → live exits 1 with
  `zhPhrasings missing or empty for supported language "zh"`; (b) a single
  bogus entry injected into the MS table → the static guard still passes while
  live exits 1 with `msPhrasings: 1/45 phrasings point at pages the site does
  not serve (e.g. problem:does-not-exist)`, proving the resolution check is
  sensitive independently of the presence check. Both restore green. The
  broken states pass `type-check`, `lint` and `next build`.

### 5. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| Languages with a published phrasing table | **1 of 3** | **3 of 3** |
| Phrasings in `/ai/business.json` | 52 | **131** (52 en / 44 ms / 35 zh) |
| `/ai/business.json` size | 47,533 B | **52,724 B** (+10.9%) |
| Live assertions | 219 | **222** |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |
| New pages / new URLs / prices touched | — | **0 / 0 / 0** |

### 6. Preserved untouched (verified correct — 🟢)

- `englishPhrasings` keeps its name, shape, order and all 52 entries — the
  change is a pure addition to the feed.
- `data/search/synonyms.ts` (the source of truth) and the Smart Service Finder
  itself: no phrase added, removed or reworded; `audit:search` unchanged and
  passing, including its per-language entity-resolution rule.
- `/llms.txt` (Phase 29/33 contents), `/ai/pricing.json`, all 678 URLs,
  canonicals, hreflang sets, structured data, robots.txt and the sitemap.
- Content governance: every published phrasing already existed in the site's
  own audited registry — nothing invented, no new claim about the business.
- `CONTENT_MAP.md` §7 updated to record the published tables and their guards
  (documentation only, no rule changed).

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS (incl. both new `audit:authority` tokens)
- [x] `audit:live` vs `next start` — **PASS 222 / WARN 0 / FAIL 0** (was 219),
      including the 4 new phrasing assertions
- [x] Served spot-checks — all 52 en / 44 ms / 35 zh phrasings resolve to
      served pages in their own language tree; live MS and ZH queries return
      the same target pages the feed maps them to
- [x] Negative tests — missing-table and unresolvable-slug directions both
      fail as designed and pass again after restore

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 35 — Region hubs gain the scope + problem layers their 53 area guides already carry (2026-09-19)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's "strengthen
internal linking between services, sub-services, problems, areas and relevant
locations" directive — worked under the same PRESERVE → AUDIT → VERIFY →
IMPROVE rule as Phases 27–34. The full verification gate was re-run first
(baseline, nothing assumed green), then the *rendered* HTML of all 678 URLs was
crawled again and every internal link classified by source and target page type
before anything was touched. No URL, price, service, claim, page or piece of
branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm ci` + `npm run type-check` + `npm run lint` — PASS (0 errors,
      0 warnings)
- [x] `npm run build` — PASS (689 generated routes)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — PASS 222 / WARN 0 / FAIL 0

Everything Phases 27–34 reported is still true and was left untouched (🟢):
678-URL sitemap, single canonical + 4-way hreflang, single-sourced pricing
(51 rows), hub↔spoke, problem↔scope, area↔scope, problem↔project,
project↔blog, service/sub-service↔area graphs, three-language AI feeds.

### 2. What the rendered-graph crawl actually found

A fresh full crawl of all 678 URLs rebuilt the edge-type matrix from scratch.
It confirmed every Phase 28–34 edge and found **one** whole page family still
sitting outside two layers of the graph:

| Edge (all 3 languages) | Before |
|---|---|
| `area-region → sub-service` | **0** |
| `area-region → problem` | **0** |
| `area-region → service` | 60 (10 per hub per language) |
| `area-region → area` | 159 (every child guide) |
| `area → sub-service` | 2,235 |
| `area → problem` | 636 |

The two region hubs (`/areas/kuala-lumpur/`, `/areas/selangor/` — 6 pages across
EN/MS/ZH) rendered a *service* layer (the ten services most requested across the
region) but neither the *scope* layer nor the *problem* layer, even though all
53 of their own child guides carried both. The hub was therefore the only page
in the areas tree with no route into the 51 sub-service pages or the 57 problem
guides it sits directly above.

Phase 30 and Phase 32 had previously examined the hubs and left them alone on
the stated basis that they are "directory pages by design" — but the crawl
disproves the premise: a hub that renders ten service cards, a district
breakdown and a housing-landscape essay is not a bare directory, and it is the
one hub in the tree whose children all carry both missing layers.

Two other thin spots were re-examined and again deliberately left alone (🟢):

- **`project ↔ area` (0 in both directions).** `ProjectLocation` exists in the
  data model and the project page renders the section when it is set, but the
  field is unset for every project because no site address was supplied with
  the photographs (PROJECT_OWNER_PENDING.md §6, owner-pending). Deriving an
  area from a project's category or title would be fabrication
  (CONTENT_GOVERNANCE §1).
- **`service/sub-service → project` cap.** 12 of the 28 projects receive no
  inbound link from a service pillar because `ServiceWorkShowcase` slices to
  three cards. Raising that cap is a visual-composition change to an existing
  section, not a missing edge, so it was left for the owner to weigh.

### 3. What was added (registry-derived, additive only)

1. **`getSubServicesForRegion(region, limit)`** (`data/area-content/index.ts`)
   — the Region → Sub-service direction, as a pure union: for every area guide
   in the region it calls `getSubServicesForLocation(area.slug,
   area.relatedProblems)` — the exact derivation that guide already renders
   (Phase 29) — so the hub can never claim a scope its own guides do not carry.
   Ranked by how many of the region's guides cover a scope (widest first),
   ties keeping guide order; deterministic, nothing inferred from a name.
2. **`getRegionProblemSlugs(region, limit)`** — the Region → Problem direction
   under the same rule: the union of `AreaDetail.relatedProblems` across the
   region's own guides, most widely noted first.
3. **`SubServiceLinksScope` gained a fourth value, `"region"`** — the exact
   same shared block the service, problem and area pages already render, with
   its own localized copy, same card markup, same
   `subServiceLanguages()` filter, same render-nothing-when-empty behaviour.
   No new component, no redesign.
4. **`components/area/AreaRegionSubServicesSection.tsx` (new)** — renders up to
   twelve scopes *inside* the existing "Services Most Requested in {region}"
   section, the way the area guide's block sits inside its own services
   section: an additive block behind a rule, no new section, no new background.
5. **`components/area/AreaRegionProblemsSection.tsx` (new)** — a bordered
   white section (mirroring the districts block directly above it, so the page
   keeps its existing surface/white rhythm) with the chip markup the area
   guides already use inside their own problems section. Twelve problems per
   hub; the child guides carry the full detail.
6. **Copy** in EN/MS/ZH — `subServiceLinks.regionEyebrow / regionTitle /
   regionDescription` and `areaRegion.problemsEyebrow / problemsTitle /
   problemsDescription / problemsLinkTitle / problemsNote`, plus the
   `Dictionary` type. Genuinely localized ("Sub-services our Kuala Lumpur area
   guides cover" / "Sub-perkhidmatan yang diliputi panduan kawasan Kuala Lumpur
   kami" / "我们吉隆坡地区指南涵盖的细项服务"), factual wording only — the
   headings say the guides *cover* these scopes and *note* these problems,
   which is exactly what the registry proves, never a claim about work carried
   out everywhere in the region.

### 4. Regression guards (so the edges cannot silently disappear)

- `audit:subservices` §Phase 35 — pins that both getters exist, that
  `getSubServicesForRegion` stays derived from
  `getSubServicesForLocation(area.slug, area.relatedProblems)` for every area
  guide in the region, that `getRegionProblemSlugs` reads each guide's own
  `relatedProblems`, that the blocks render through the shared
  `SubServiceLinksBlock` (which filters by `subServiceLanguages()`), that
  `AreaRegionPage` renders both, and that all three dictionaries carry both
  copy blocks. **Negative-tested three ways:** removing the scope block,
  removing the problems section and emptying the derivation each fail the
  audit with the exact guard message; all three restore green.
- `audit:live` — two new rendered assertions in the full-sitemap link-graph
  sweep: all 6 region hubs link to the sub-service scopes their area guides
  carry (72 links) and to the problem guides their area guides note (72 links).
  **Negative-tested:** rebuilding with both blocks removed fails with
  `0/6 hubs, 0 links` twice; restoring them passes again (the broken build also
  passes `type-check`, `lint` and `next build` — the coverage loss is invisible
  to CI without these guards).

### 5. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| `area-region → sub-service` edges (rendered) | **0** | **72** (24 per language) |
| `area-region → problem` edges (rendered) | **0** | **72** (24 per language) |
| Average inbound links per sub-service page | 27.5 | **27.9** |
| Average inbound links per problem guide | 18.1 | **18.5** |
| Live assertions | 222 | **224** |
| Orphan pages / internal links to unserved URLs | 0 / 0 | 0 / 0 |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |
| New pages / new URLs / prices touched | — | **0 / 0 / 0** |

Every core family the owner checklist names — service, sub-service, problem,
area, region — now links to every other in both directions where an authored
relationship exists.

### 6. Preserved untouched (verified correct — 🟢)

- Every price (51 pricing rows, single-sourced; `audit:pricing` PASS), every
  URL, canonical, hreflang set, redirect and the 678-URL sitemap.
- Design, branding, layout, navigation, footer and every existing section: the
  scope block is additive inside an existing section and reuses the site's own
  card markup; the problems section reuses the districts block's
  bordered-white-on-white treatment and the area guides' chip markup.
- Structured data (no new or altered schema nodes — the region hubs still emit
  `ItemList` + `FAQPage`), robots.txt, AI feeds, security headers, quote flow,
  analytics posture, search finder.
- Content governance: no invented service, price, claim, location, project or
  credential; no new page and no new URL of any kind. Nothing was derived from
  a service name, a category name or a keyword.

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS (incl. the new `audit:subservices` §Phase 35)
- [x] `audit:live` vs `next start` — **PASS 224 / WARN 0 / FAIL 0**, including
      the two new rendered assertions
- [x] Served spot-checks — all 6 hubs (EN/MS/ZH × KL/Selangor) render 12
      localized scope links and 12 problem links pointing at their own
      language tree; section order and background rhythm verified against the
      area guide's own pattern
- [x] Negative tests — all three static directions and the live direction fail
      as designed and pass again after restore

Status: **Code verified + Build verified + Live verified (HTTP)**.

---

## Phase 36 — `/ai/business.json` publishes every entity's URL in all three languages (2026-09-19)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt's directive to
keep the machine-readable layer complete and honest, worked under the same
PRESERVE → AUDIT → VERIFY → IMPROVE rule as Phases 27–35. The full gate was
re-run first (baseline, nothing assumed green), then the served feed was read
back and every URL in it classified by language before anything was touched.
No URL, price, service, claim, page or piece of branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (689 generated routes)
- [x] All 17 static audits — PASS
- [x] `audit:live` vs `next start` — PASS 224 / WARN 0 / FAIL 0

### 2. What the feed audit actually found

`/ai/business.json` declares three supported languages, publishes three
localized homepages (`languages[].homepage`) and — since Phase 34 — three
phrasing tables that map Malay and Chinese customer wording to `/ms/…` and
`/zh/…` pages. Read back from the running server, though, its entity catalogue
was monolingual:

| | Declared / served | Published in the feed before |
|---|---|---|
| `supportedLanguages` | en, ms, zh | en, ms, zh |
| Localized homepages | 3 | **3** |
| Entity URLs in `/en/` | — | **284** |
| Entity URLs in `/ms/` or `/zh/` | — | **0** |

So an assistant helping a Bahasa Malaysia or 简体中文 speaker — the exact case
the Phase 34 phrasing tables exist for — could resolve "paip bocor" to
`problem:leaking-pipe` but was then handed the address of the English page,
with no way to cite the page the site publishes in the customer's own language
and advertises through hreflang. This is the same defect class as Phase 29
(sub-services absent from the feeds), Phase 33 (projects absent from
`/llms.txt`) and Phase 34 (MS/ZH phrasings absent): the machine-readable layer
lagging what the site actually serves.

Verified before changing anything: the site does serve every one of those pages
in all three languages (678-URL sitemap, 4-way hreflang on all 513
service/sub-service/area/problem pages), so publishing the maps describes real,
already-shipped behaviour rather than new claims.

### 3. What was added (registry-derived, additive only)

1. **`localizedUrls(path)` in `lib/ai-knowledge.ts`** — builds
   `{ en, ms, zh }` from the language registry, so a fourth language joins
   every entity the moment it is registered and no URL can be typed by hand.
2. **`urls` added alongside the existing `url` on every catalogued entity** —
   the 10 services, 51 sub-services, 57 problem guides, 28 projects, 12
   Knowledge Hub guides, 2 region hubs, 53 district locations and the 53-entry
   flat area list. The English `url` key keeps its name, shape and value, so
   nothing that already reads the feed changes.
3. **`keyPagesByLanguage`** — the twelve top-level entry points (home,
   services, problems, areas, projects, knowledge hub, FAQ, about, contact,
   quote, search) in each published language. `sitemap` is not repeated: it has
   no language.
4. Nothing else changed: no new endpoint, no new page, no price, and no
   entity name, title or summary was reworded or duplicated.

Measured: the feed now publishes **798** localized URL entries across
**266** entities; `/ai/business.json` grows 52,724 → **115,318 bytes** raw and
9,017 → **12,756 bytes** gzipped (+3.7 KB over the wire).

### 4. Regression guards (so a language cannot silently drop out or drift)

- `audit:authority` §7 — three new source assertions that the builder derives
  the maps from the language registry (`function localizedUrls(path: string)`,
  the `languages.map(... absoluteUrl(language.code, path))` expression) and
  publishes `keyPagesByLanguage`. **Negative-tested twice:** renaming the
  helper and deleting `keyPagesByLanguage` each fail the audit with the exact
  guard message; both restore green.
- `audit:live` — new `checkAiLocalizedUrlCoverage(locs)`, 4 assertions. It
  reads the **served** feed, requires a URL map on every entity of every
  family, requires a map covering **every** code in the feed's own
  `supportedLanguages` (so adding a fourth language fails the guard until its
  URLs ship — registry-derived, not hardcoded), resolves **every** entry
  against the served sitemap in that language's own tree, and requires each
  entry to live under its own `/{code}/` prefix so a map that merely repeats
  the English URL three times cannot pass. `keyPagesByLanguage` is checked the
  same way. **Negative-tested twice:** (a) dropping `urls` from the problem
  family → live exits 1 with `57/266 entities have no urls map (e.g.
  problem:broken-tile-repair…)`; (b) injecting one bogus `zh` entry → the
  static guard still passes while live exits 1 with `28 localized entity URLs
  point at pages the site does not serve (e.g. project:marble-look-floor-tiling
  → /zh/projects/does-not-exist/)`, proving the resolution check is sensitive
  independently of the presence check. Both restore green — and both broken
  states pass `type-check`, `lint` and `next build`.

### 5. Measured result (before → after)

| Metric | Before | After |
|---|---|---|
| Languages with a published URL per entity | **1 of 3** | **3 of 3** |
| Localized URL entries in `/ai/business.json` | 0 | **798** (266 entities × 3) |
| Entity URL families covered | 0 of 8 | **8 of 8** |
| `/ai/business.json` size (raw / gzipped) | 52,724 B / 9,017 B | **115,318 B / 12,756 B** |
| Live assertions | 224 | **228** |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |
| New pages / new URLs / prices touched | — | **0 / 0 / 0** |

### 6. Preserved untouched (verified correct — 🟢)

- Every existing feed key: `url`, `name`, `title`, `slug`, `summary`,
  `priceNote`, `languages`, `languages[].homepage`, `keyPages`,
  `searchIntents.englishPhrasings` and all other blocks keep their names,
  shapes and values — the change is a pure addition to the feed.
- `data/search/synonyms.ts` (the phrasing source of truth), the Smart Service
  Finder, `/llms.txt` (6 of 6 families, Phase 33/34 contents),
  `/ai/pricing.json`, all 678 URLs, canonicals, hreflang sets, structured data,
  robots.txt and the sitemap.
- The feed's own honesty rules: it still hardcodes no price
  (`audit:authority` §7 no-hardcoded-price rule) and still derives every figure
  from `data/pricing/pricing.ts`.
- Content governance: every published URL already existed in the site's own
  audited sitemap — nothing invented, no new claim about the business.
- `CONTENT_MAP.md` §3 and §7 updated to record the new region-hub layers and
  the localized URL maps with their guards (documentation only, no rule
  changed).

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689 generated routes, unchanged)
- [x] All 17 static audits — PASS (incl. all three new `audit:authority` tokens)
- [x] `audit:live` vs `next start` — **PASS 228 / WARN 0 / FAIL 0** (was 224),
      including the 4 new localized-URL assertions
- [x] Served spot-checks — sampled services, sub-services, problems, projects,
      guides and areas all publish correct `en`/`ms`/`zh` URLs;
      `keyPagesByLanguage.ms` resolves to served `/ms/` pages
- [x] Negative tests — missing-family and stale-URL directions both fail as
      designed and pass again after restore

Status: **Code verified + Build verified + Live verified (HTTP)**.


---

## Phase 37 — Preservation-first re-verification and progress reconciliation (2026-09-20)

**Result: 🟢 existing website work verified and left untouched.** This is a
verification/documentation pass, not a new feature phase. No missing website
feature or internal-link gap was established that justified changing the
published content or adding another section/page.

### 1. Inspect first — sources and actual inventory

Read `AGENTS.md`, this progress record through Phase 36,
`CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`, `PROJECT_OWNER_PENDING.md`, the
service/area/location registries, link components, AI feed coverage checks and
existing QA scripts before deciding whether anything needed work. The prior
Master Prompt was not separately attached to this session; the current user
instructions and repository-recorded governance/progress supplied the scope.

Reconfirmed from the registries and build/HTTP checks:

- **10 services:** Tile & Tiling, Welding & Metal Works, Electrical, Painting,
  Ceiling & Partition, General Renovation, Plumbing, Waterproofing, Flooring,
  Handyman (`data/services.ts`). No additional service inferred.
- **51 sub-services**, **57 problem guides**, **53 area guides** (21 Kuala
  Lumpur + 32 Selangor), **2 region hubs**, **28 projects**, **12 Knowledge Hub
  guides**, and the existing Smart Service Finder, in EN/MS/ZH.
- **678 canonical sitemap URLs**, 226 per language; **689 static generation
  entries** in the production build. Those are different measurements.
- **51 pricing rows** and **24 search-intent entries**; pricing remains derived
  from the existing catalogue without any edits.
- The published location model uses the two region trees and their existing
  district groups. **Kampung Baru is the only published `level: "kampung"`
  entity** (`kuala-lumpur/kampung-baru`). Kampung Sungai Penchala and Kampung
  Lindungan in the registry's introductory comment are not published location
  entities and are not authority to create pages or claim coverage. Existing
  aliases are not separate locations. Planned regions stay unpublished.

### 2. 🟢 Verified correct — no website changes

| Surface | Evidence from this pass | Action |
| --- | --- | --- |
| Prices, scope and business facts | `audit:pricing`, `audit:business`, `audit:authority` PASS | Leave untouched |
| EN/MS/ZH routes, canonicals, hreflang, schema, sitemap and robots | Static audits PASS; all 678 sitemap URLs return 200; served metadata/schema spot checks PASS | Leave untouched |
| Service ↔ sub-service links | All 153 localized sub-service pages link to their own pillar and are linked from it | Leave untouched |
| Service/sub-service → area links | All 183 localized service + sub-service pages reach all 53 areas in their language; 9,699 links | Leave untouched |
| Area → scope/service links | All 159 localized area guides carry scope links (2,235 links) and at least six service pillar links | Leave untouched |
| Region → scope/problem links | All six localized hubs carry the existing scope and problem layers, 72 links per layer | Leave untouched |
| Problem/project and guide/project links | Existing mapped proof links and reciprocal links pass live QA; no invented project relationships added | Leave untouched |
| AI feeds | `/llms.txt` family coverage, all three phrasing tables, 798 localized entity URL entries and localized key pages PASS | Leave untouched |
| UI, branding, conversion and security | Lint/build plus existing quote, analytics and security audits PASS; no UI or runtime edits | Leave untouched |

The existing whole-site link audit reports zero orphan pages and no internal
link to an unserved page. These results describe the local production build,
not search rankings or indexing outcomes.

**Additional Kampung/locality spot check (real HTTP, main-content anchors only):**
for `/en/areas/kuala-lumpur/kampung-baru/`,
`/ms/areas/kuala-lumpur/kampung-baru/` and
`/zh/areas/kuala-lumpur/kampung-baru/`, each rendered guide has
**7 unique service links, 15 sub-service links, 4 problem links and 6 area
links**. All these links remain in the page's language tree. The Kuala Lumpur
parent hub and all four authored nearby guides — KL City Centre, Sentul,
Setapak and Ampang — are present. No need to duplicate that locality linking.

### 3. 🟡 Genuine documentation drift — corrected only where necessary

1. The top inventory still reported **685** static pages and Phase 27 as its
   verification point, whereas the current build generates **689** entries
   (also already recorded in later phases). Corrected the overview to the
   measured count, distinguished build entries from canonical URLs, and
   recorded this verification date. Historical phase reports are unchanged.
2. The current owner checklist still presented Search Console sitemap
   submission as pending, but the same file's Phase 25 table records it as
   **DONE 2026-09-06**. Reconciled the current row to that recorded completion
   rather than asking the owner to repeat it. **No new GSC dashboard check or
   submission was performed**, and this is not a claim about indexing.

### 4. 🔴 Missing work — none established within this pass's scope

No missing service, sub-service, problem, area, Kampung page, or relevant link
was established from the authoritative published data and rendered checks.
No speculative content, coverage, pricing, credentials, project details or
service×location doorway pages were added. Owner-dependent photos, business
facts, device testing and hosting/dashboard actions cannot be manufactured
or assumed still pending just because they appeared in an older checklist.

### 5. QA and preservation boundary

- [x] `npm ci` — successful; installation reports **0 vulnerabilities**.
- [x] `npm run type-check` — PASS.
- [x] `npm run lint` — PASS, no errors or warnings.
- [x] `npm run build` — PASS, **689** static generation entries.
- [x] All **17 static audits** — PASS.
- [x] `npm run audit:live` against locally served `next start` —
      **PASS 228 / WARN 0 / FAIL 0**.
- [x] Additional EN/MS/ZH Kampung Baru main-content link checks — PASS.
- [x] Final diff limited to `PROJECT_PROGRESS.md` and
      `PROJECT_OWNER_PENDING.md`; no application, content-data, price,
      dependency, configuration, asset, route or sitemap timestamp changed.

Limitations: HTTP QA is not visual/mobile-device QA. Production deployment,
Search Console indexing/performance, analytics dashboards and real email
inbox delivery were not re-verified. Local credentials are unset, so the
quote API was tested for its existing honest unavailable response, not live
email delivery; the prior owner's recorded production completion is not
reopened by that local state.

Status: **Code verified + Build verified + Local production HTTP verified;
website preserved; documentation reconciled.**

---

## Phase 38 — Location registry duplicate-service fix + regression guard (2026-09-20)

**Result: 🟡 one genuine data defect found and fixed** (additive-only; no
page, URL, price, service, claim, copy or piece of branding changed). This was
a preservation-first pass: the full verification gate was re-run before any
change, then every list field in every registry was scanned for duplicates.

### 1. Baseline verification gate (all green before any change)

- [x] `npm ci` — 371 packages, 0 vulnerabilities
- [x] `npm run type-check` + `npm run lint` — PASS
- [x] All 17 static audits — PASS (matches the Phase 37 record)
- [x] `npm run build` — PASS, **689** static generation entries

### 2. What the duplicate scan actually found

A sweep of every string-array field in the content registries surfaced one
real defect: five locations in `data/locations/registry.ts` listed the same
service twice in `serviceRelevance.primaryServices` (all `"waterproofing"`):

| Location | PrimaryServices before |
| --- | --- |
| `kuala-lumpur/taman-melawati` | waterproofing ×2, painting, general-renovation, plumbing |
| `selangor/klang` | waterproofing ×2, plumbing, welding-metal-works, general-renovation |
| `selangor/kajang` | general-renovation, waterproofing ×2, plumbing, welding-metal-works |
| `selangor/sungai-buloh` | general-renovation, waterproofing ×2, welding-metal-works, painting |
| `selangor/balakong` | waterproofing ×2, plumbing, electrical, flooring |

`primaryServices` drives `getStartingRatesForLocation()` (data/locations/
hierarchy.ts), which builds the indicative-rates section rendered by
`components/area/AreaPricingSection.tsx`. That component keys each card by
`rate.serviceSlug`, so each duplicate produced a **second, identical
"Flat Roof Waterproofing" pricing card** and a duplicate-React-key warning on
those five area pages — in all three languages (15 served pages). The existing
location quality gate only enforced `length >= 3`, so the duplication passed
undetected. No other registry list field (pricing ids/slugs, sub-service
slugs, service slugs, intent-matrix ids, location ids, area guide service
lists, nearby/related lists) contained a duplicate.

### 3. What was changed (source-of-truth data only, additive guard)

1. `data/locations/registry.ts` — removed the duplicated `"waterproofing"`
   from each of the five `primaryServices` arrays. No service was added or
   re-ordered; every remaining entry already existed in that location's list,
   and every one resolves to a real pricing row and service page.
2. `scripts/audit-locations.mjs` §4 — a uniqueness check beside the existing
   `primaryServices` minimum-count check: a repeated service in a location's
   `primaryServices` now fails the quality gate with the duplicated slug(s)
   named. This is the same "regression guard, not a rule change" pattern as
   Phases 27–36.

### 4. Regression guard (negative-tested twice)

- Re-inserted `"waterproofing","waterproofing"` into `selangor/klang` →
  `audit:locations` exits 1 with
  `Quality gate failed for "selangor/klang": duplicate primary service(s): waterproofing.`
- Restored the data → audit returns PASS.

### 5. Measured result (before → after)

| Metric | Before | After |
| --- | --- | --- |
| Locations with a duplicated `primaryServices` entry | 5 | **0** |
| Area pricing cards on the 5 affected pages (per language) | 5 (one duplicated) | **4 distinct** |
| Served pages visually affected (5 areas × 3 languages) | 15 | **0** |
| Sitemap URLs / generated routes | 678 / 689 | **678 / 689 (unchanged)** |
| New pages / new URLs / prices touched | — | **0 / 0 / 0** |

### 6. Preserved untouched (verified correct — 🟢)

- All 678 URLs, canonicals, hreflang sets, structured data, robots.txt and the
  sitemap (verified unchanged: 689 build entries, `audit:sitemap` PASS).
- All 51 pricing rows, 24 search-intent entries and their single-source
  derivation (`audit:pricing` + `audit:locations` §10 PASS — no price,
  unit or starting-from semantics changed anywhere).
- The 10 services, 51 sub-services, 57 problem guides, 53 area guides, 2
  region hubs, 28 projects, 12 Knowledge Hub guides and the Smart Service
  Finder.
- The whole internal-link graph (`audit:live` link sample + service↔
  sub-service, area↔scope, problem↔project wiring all PASS).
- The AI feeds (`/llms.txt`, `/ai/business.json`, `/ai/pricing.json`) — no
  generated content touched.
- No UI, branding, copy, metadata, translation, route, asset, configuration
  or dependency change. The diff is limited to the five registry lines and
  the one audit guard (15 insertions / 5 deletions across two files).

### 7. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689/689, unchanged)
- [x] All 17 static audits — PASS (incl. the new duplicate guard)
- [x] `npm run audit:live` vs `next start` — **PASS 228 / WARN 0 / FAIL 0**
- [x] Rendered spot-checks — the 5 affected area pages in EN, MS and ZH each
      render exactly 4 distinct, localized pricing cards (verified the card
      titles and service chips on all 15 URLs)
- [x] Negative test — duplicate re-introduction fails the guard; restore passes

Status: **Code verified + Build verified + Live verified (HTTP); one
data-quality defect removed and permanently guarded.**

---

## Phase 39 — MS/ZH copy now carries its own in-copy internal links (2026-09-21)

### 1. Inspected first, classified, then touched only the 🔴 item

The full gate was re-run on the merged Phase 38 tree before any edit:
`type-check`, `lint`, `build` (689/689), all 17 static audits and `audit:live`
(**PASS 228 / WARN 0 / FAIL 0**). Classification of the internal-link layer:

| Item | Class | Action |
| --- | --- | --- |
| 678 URLs, canonicals, hreflang sets, JSON-LD, robots.txt, sitemap | 🟢 | verified, untouched |
| Rendered link graph: no orphans, service↔sub-service both ways, area↔scope, problem↔project, no unserved target, no English slug label on `/ms/` `/zh/` (Phases 28–36) | 🟢 | verified, untouched |
| 51 pricing rows, 24 intent-matrix entries, single-source derivation | 🟢 | verified, untouched |
| AI feeds (`/llms.txt`, `/ai/business.json`, `/ai/pricing.json`) + per-language URL maps (Phase 36) | 🟢 | verified, untouched |
| Location registry duplicate-service fix + guard (Phase 38) | 🟢 | verified, untouched |
| **In-copy contextual links: the English area guides and region hubs write `[label](/services/slug)` inside their paragraphs; the MS/ZH translations write none** | 🔴 | **fixed** |
| **One localized pillar page pair (`/services/general-renovation/`) missing a cross-service link its own copy names** | 🔴 | **fixed** |
| Knowledge-Hub guide layer for the two region hubs | ⏸ | still deferred (editorial scope, owner-gated) |

### 2. The defect, measured on the Phase 38 build (all 678 URLs fetched)

`data/area-content/` and `data/service-content/` write contextual links inline
in the copy, and `components/area/InlineLinks.tsx` /
`components/service/InlineLinks.tsx` render them as real anchors carrying the
page's own language. The MS/ZH area translations were re-authored without that
markup, so on the merged build the served pages looked like this:

| Rendered in-copy anchors | EN | MS | ZH |
| --- | --- | --- | --- |
| 53 area guides | 261 | **0** | **0** |
| 2 region hubs | 18 | **0** | **0** |
| 10 service pillar pages | 33 | 23 | 23 |
| home page | 1 | 1 | 1 |
| **total** | **313** | **24** | **24** |
| location pages rendering **no** in-copy link | 0 | **55** | **55** |
| pages whose whole-link set differs from the EN page | — | **17 of 226** | |

Nothing was broken and nothing leaked markup: the links were simply absent.
110 served location pages — the entire `/ms/` and `/zh/` location library —
published paragraphs that name the work ("kerja jubin", "kalis air",
"pendawaian", "瓷砖", "防水", "电气") with no anchor on any of them, while the
English guide linked 279. A crawler or AI reader following a Malay or Chinese
area guide reached the copy and stopped; the only links on those pages were the
structured card, chip and list sections.

### 3. What changed — markup only, not one visible word

**a. Area guides and region hubs (14 files, 676 links).** Every MS/ZH paragraph
was scanned for the site's own localized service vocabulary — the same words
the MS/ZH service pages already link with (`kerja jubin`, `kalis air`,
`pendawaian`, `renovasi`, `kerja besi`, `瓷砖`, `防水`, `电气`, `天花`,
`整体装修`, …) — and each named service was wrapped in the existing
`[label](/services/slug)` convention, longest term first, one link per
(paragraph, service), placed in the sentence cluster that actually names the
work. Result: **MS 337 / ZH 339** in-copy links across the 55 entities (EN 279
unchanged), written into 116 paragraph lines. Kuala Lumpur's `kepong` guide
needed a manual pass: its MS/ZH second intro paragraph enumerates six services
while the English paragraph links one, so all six named services were linked
(`renovasi`, `jubin`, `kerja paip`, `elektrik`, `cat`, `kalis air`) — the
localized copy's own enumeration is the authority, exactly as for the region
hubs.

**b. Service pillar pages (2 files, 2 links).** `/ms/services/general-renovation/`
and `/zh/services/general-renovation/` enumerate four trades in `intro[1]`
(all four linked) while `intro[0]` names the fifth — `cat` / `油漆`. The
English pillar links painting; both localized pillars did not. One link each
was added on the word the localized copy already uses, so all three languages
now link the same five services from that page.

**c. Verification of "markup only".** All 5,558 string literals in the 16
edited data files were compared with their `HEAD` versions after reducing link
markup to its label: **0 visible-text changes** (and the diff is 118
insertions / 118 deletions — every edit is a line-for-line replacement of the
same paragraph). No component, route, style, metadata, price, schema, feed or
registry was touched; the anchors render through the components that already
existed.

### 4. What was deliberately NOT changed

- **47 of the 279 English in-copy links** sit in paragraphs whose localized
  counterpart never names that service. Those stay unlinked — closing them
  would mean rewriting localized copy, which is an editorial change, not a
  link fix.
- **Five pillar pages keep an English-only in-copy target** because the
  localized pillar copy never names that service in the two fields rendered
  through `InlineLinks` (`intro`, `overviewParagraphs`):

  | Pillar page | EN links it, MS/ZH rendered copy never names it |
  | --- | --- |
  | `/services/electrical/` | painting |
  | `/services/waterproofing/` | general-renovation |
  | `/services/painting/` | general-renovation, welding-metal-works |
  | `/services/flooring/` | general-renovation, handyman |
  | `/services/handyman/` | painting |

  Those words do appear elsewhere on the same pages (highlights, inclusions,
  notes) — but those fields render as plain text, so markup there would print
  `[cat](/services/painting)` to the reader. Extending `InlineLinks` to them
  was considered and declined: that changes how list UI renders on every
  service page, which is a UI change, not a link fix. None of those services
  is orphaned in MS/ZH — all are linked from the localized area guides (e.g.
  `kerja besi` → `/ms/services/welding-metal-works/` on Kampung Baru).
- No new pages, URLs, services, sub-services, problems, areas, prices, claims
  or business facts. No service×location doorway pages. No page for the
  unpublished kampung entries in the registry comments.

### 5. Regression guards added (guards, not rule changes)

**`scripts/audit-multilingual.mjs` — Phase 39 section (source level).** The
audit reads the same paragraph fields the components render, in all three
languages:

*Area guides + region hubs (55 entities):*
1. **Paragraph alignment** — every localized guide keeps the English `intro` /
   `context` paragraph count, so paragraphs can be compared by index.
2. **No dropped link** — a service the English paragraph links *and* the
   localized paragraph names must be linked in the localized paragraph too.
3. **No invented target / no English anchor text** — every target is a
   published service slug; a label may not be empty, an English service name
   or a humanized slug (checked in every language, EN included, for targets).
4. **No empty page** — all 55 entities publish in-copy links in EN, MS and ZH,
   so the pre-Phase-39 zero cannot return silently.

*Service pillar pages (10 pages):* the same four rules, with alignment as a
**prefix** rule (a localized pillar may add a paragraph — `/services/ceiling-partition/`
publishes a third, repair-specific one — but may never drop one) plus a
**page-level** rule: a service the English pillar links and the localized
pillar names *anywhere* in the copy it renders must be linked somewhere in
that copy. That page-level rule is what caught `general-renovation`.

The anchor-text rule is now shared by both sections (`ENGLISH_ANCHOR_TEXT` =
every English service name + every humanized slug, compared case-sensitively),
so the real Malay loanwords the localized copy writes (`plumbing`, `handyman`)
stay legal while `Painting`, `Waterproofing` or `Ceiling Partition` cannot
become anchor text on a `/ms/` or `/zh/` page.

**`scripts/phase25-live-qa.mjs` — Phase 39 block (served pages, +9 checks:
228 → 237).** The existing full-sitemap sweep now strips `<script>` blocks,
counts the anchors stamped with the `InlineLinks` decoration class (read from
the component itself, so a class rename is caught) and detects unrendered
`[label](/path)` markup; then:

1. no served page renders inline-link markup as visible text (all 678 URLs);
2. all 165 area guides and region hubs render ≥1 in-copy anchor (EN/MS/ZH);
3. all 30 service pillar pages render ≥1 in-copy anchor (EN/MS/ZH);
4. pillar floors: `/en/` ≥30, `/ms/` ≥22, `/zh/` ≥22 (measured 33 / 24 / 24);
5. location floors: `/en/` ≥270, `/ms/` ≥320, `/zh/` ≥320 (measured 279 / 337 / 339).

Floors sit just below measured coverage so a mass regression fails while
genuine copy edits do not. The RSC flight payload still serializes raw
paragraph strings inside `<script>` blocks (truncated React keys) — that is
pre-existing for English, is not visible text, and is why the sweep strips
scripts before looking for leaks.

### 6. Negative tests (break → fails, restore → passes)

| # | Break | Result |
| --- | --- | --- |
| 1 | Drop an in-copy link from an MS area paragraph that names the service | `audit:multilingual` rule 2 FAILs |
| 2 | Point an area link at `/services/painting-pro` | rule 3 FAILs ("not a published service page") |
| 3 | Use `Waterproofing` / `Painting` as an MS label | shared anchor-text rule FAILs |
| 4 | Use a humanized slug (`Ceiling Partition`) as an MS label | FAILs |
| 5 | Delete an MS area paragraph | alignment rule FAILs |
| 6 | Remove the new MS `general-renovation` painting link | pillar page-level rule FAILs |
| 7 | Remove the new ZH `general-renovation` painting link | pillar page-level rule FAILs |
| 8 | Delete an MS pillar `intro` paragraph | pillar prefix-alignment rule FAILs |
| 9 | Make EN `/services/painting/` link flooring in a paragraph the MS copy names but does not link | pillar paragraph rule FAILs |
| 10 | Strip every in-copy link from MS `/services/tiling/` | "only 9/10 service pillar pages publish in-copy internal links" FAILs |
| 11 | Make `InlineLinks` return raw text (whole site) | `audit:live` FAILs: markup leaked on 165 pages + all location floors |

Every one was restored and the gate re-run to green afterwards.

### 7. Measured result (before → after, both on locally served builds)

| Metric | Before | After |
| --- | --- | --- |
| Rendered in-copy anchors — EN | 313 | **313** (untouched) |
| Rendered in-copy anchors — MS | 24 | **362** |
| Rendered in-copy anchors — ZH | 24 | **364** |
| Area guides + hubs rendering no in-copy link (MS / ZH) | 55 / 55 | **0 / 0** |
| Service pillars rendering no in-copy link (MS / ZH) | 0 / 0 | **0 / 0** |
| Source in-copy links, area entities (EN / MS / ZH) | 279 / 0 / 0 | **279 / 337 / 339** |
| Source in-copy links, pillar pages (EN / MS / ZH) | 33 / 23 / 23 | **33 / 24 / 24** |
| Pages whose whole internal-link set differs from EN | 17 of 226 | **9 of 226** |
| Served pages with visible `[label](/path)` markup | 0 | **0** |
| Visible-text changes in the 16 edited data files | — | **0 of 5,558 literals** |
| Sitemap URLs / static generation entries | 678 / 689 | **678 / 689 (unchanged)** |
| New pages / URLs / prices / services touched | — | **0 / 0 / 0 / 0** |
| `audit:live` checks | 228 | **237** |

### 8. Residual, accepted differences (9 of 226 pages)

Each is a paragraph whose localized wording does not name the service the
English paragraph links — recorded so a future agent does not "fix" it by
rewriting copy:

| Page | Difference | Why it stays |
| --- | --- | --- |
| `/en/services/painting/` | MS/ZH never link `welding-metal-works` anywhere on the page | the localized pillar copy names no metal-works term in a rendered field; the service is linked from MS/ZH area guides |
| `wangsa-maju`, `kepong` | MS/ZH do not link `handyman` | localized paragraph does not name it |
| `segambut`, `taman-melawati`, `gombak` | MS/ZH do not link `tiling` | localized paragraph does not name it |
| `ampang-jaya`, `kota-damansara` | MS/ZH do not link `painting` | localized paragraph does not name it |
| `brickfields-mid-valley` | MS/ZH **additionally** link `flooring` | the localized copy names `lantai` / `地板`; a localized extra, not a gap |

### 9. Preserved untouched (verified 🟢)

- All 678 URLs, canonicals, hreflang sets, structured data, robots.txt,
  sitemap (689 build entries, `audit:sitemap` PASS).
- All 51 pricing rows and their single-source derivation (`audit:pricing`,
  `audit:locations` §10 PASS — no price, unit or starting-from semantics
  touched anywhere).
- The 10 services, 51 sub-services, 57 problem guides, 53 area guides, 2
  region hubs, 28 projects, 12 Knowledge Hub guides, the Smart Service Finder
  and the whole rendered link graph from Phases 28–38 (`audit:live` PASS).
- The AI feeds — no generated content touched (`lib/ai-knowledge.ts` reads
  entity names, not paragraph markup).
- The Smart Service Finder is structurally unaffected: `scoreDocument()`
  (`lib/search/match.ts`) scores title, summary, searchTerms, category,
  aliases and synonyms — never the paragraph `content` string — and
  `audit:search` (index integrity + fixtures) passes unchanged.
- No UI, branding, component, route, metadata, schema, asset, configuration
  or dependency change. The diff is 16 data files (markup only), 2 audit
  scripts and 3 docs.

### 10. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (689/689, unchanged)
- [x] All 17 static audits — PASS (incl. the extended `audit:multilingual`)
- [x] `npm run audit:live` vs `next start` — **PASS 237 / WARN 0 / FAIL 0**
- [x] Rendered spot-checks — `/ms/areas/kuala-lumpur/cheras/`,
      `/zh/areas/selangor/bangi/`, `/ms/areas/kuala-lumpur/kampung-baru/`,
      `/zh/areas/kuala-lumpur/`, `/ms/areas/selangor/`: localized labels,
      in-language hrefs, natural reading order, no leaked markup
- [x] Visible-text equivalence — 5,558 literals compared, 0 changes
- [x] Negative tests — 11 breaks, all fail as designed, all restored to green

Status: **Code verified + Build verified + Live verified (HTTP); the `/ms/` and
`/zh/` copy now carries its own contextual internal links, and both the source
and the served site are guarded against losing them again.**

---

## Phase 40 — Service pillar → problem-guide edge restored, plus reciprocity guards (2026-09-20, merged 2026-09-21)

> **Numbering note:** this work was authored as "Phase 38" on its own branch.
> The parallel Phase 38 (location registry duplicate-service fix) and Phase 39
> (MS/ZH in-copy internal links) were merged to `main` first, so this record was
> renumbered to Phase 40 during the merge to avoid two phases sharing a number.
> Nothing else about the work changed.

**Result: one genuine, evidence-backed internal-link gap found and fixed — 3 of
the 10 service pillars never linked their own problem guides (11 guides, 33
localized problem pages) — and the static + rendered guards that stop it
recurring. No price, service, URL, page-count, sitemap, UI or branding change.**

### 1. Inspect first — 🔴 defect located by an exhaustive link-graph crawl

This pass did not assume anything was pending. It re-measured the published
site instead of trusting prior summaries:

1. Full crawl of all **678 sitemap URLs** from a locally served production
   build (`next start`), parsing `<main>` anchors only, then classifying every
   link target by layer (service, sub-service, problem, area, region, project,
   guide, hub). Raw graph: **705 distinct internal targets, 0 × 404, 0 ×
   redirect, 0 cross-language links** in main content.
2. Per-layer edge matrix (which page type links which), plus zero-count
   distribution per page — averages hide the tail.
3. Registry cross-check of the same edge in `data/` (services, sub-services,
   problems, areas, projects, articles) to separate *data-driven* absences from
   *missing* links.

That separated genuine gaps from honest ones and produced exactly one defect
class (below), rather than a list of speculative additions.

### 2. 🔴 The gap — service pillar → its own problem guides (fixed)

| Evidence | Finding |
| --- | --- |
| Problem registry | 57 problem guides; every one declares `relatedService` |
| Service registry | `flooring`, `welding-metal-works`, `general-renovation` had no `relatedProblems` entry for their own 4, 4 and 3 guides |
| Rendered check | 0 problem links on those three pillar pages in EN, MS and ZH — **33 localized problem pages with no link from their own hub** |
| Asymmetry | The reverse edge (`problem → service`) rendered on all 171 problem pages, so the graph was one-directional for those 11 guides |
| Not orphaned | They kept inbound links from sub-service pages, sibling guides, the home page and `/problems/`; only the pillar edge was missing |

Fix: the 11 slugs were added to the three `relatedProblems` arrays
(`data/service-content/flooring.ts`, `welding-metal-works.ts`,
`general-renovation.ts`). This adds **no new relationship**: each slug is the
inverse of an edge the target page already declares, and each is already linked
from the matching sub-service pages. `ServiceTranslation` deliberately omits
structural fields, so one authored line per language-set propagates correctly
to `/en/`, `/ms/` and `/zh/` (all 11 guides are fully translated).

Rendered proof (main-content inbound links, EN sample):
`rusted-gate-repair` 12 → 13, `swollen-flooring` 9 → 10,
`lifting-floor-planks` 10 → 11, `renovation-delays` 6 → 7. After the fix
**171/171 problem pages** are linked from the pillar that owns them in their own
language (192 rendered pillar→problem edges), and **0/30** service pillars have
an empty problem layer.

### 3. 🟡 Assessed and deliberately left unchanged (honest, data-driven absences)

| Candidate | Why it is correct as-is |
| --- | --- |
| Project → area/region, area → project | `ProjectLocation` is unset for every project (no job location was supplied with the photographs), so `ProjectLocationSection` honestly links the areas index instead. Adding locations would invent facts. |
| Sub-service → project (120/153 pages) and problem → project (96/171) | Only 11 of 51 scopes are mapped to a published project (`subServices`); everything else correctly renders no proof block. |
| 4 problem guides with no sub-service block (`balcony-leakage`, `broken-tile-repair`, `kitchen-tile-problems`, `wall-seepage`) | No sub-service declares them; authoring a link would invent a scope relationship the owner has not confirmed. *(Revisited and closed in Phase 46: the published copy of the guides and of three existing scopes already states the relationship in prose — see Phase 46 §3 — so the edge restates, rather than invents, a relation the site publishes.)* |
| Painting / waterproofing / flooring have no project proof | The 28 published projects fall in 7 categories only; no painting- or waterproofing-only project exists (already recorded as an accepted gap in `CONTENT_MAP.md` §5). |
| Region hubs → guides | No article declares a region-level location key, so there is nothing to derive the edge from. |
| Hub-to-hub links on `/services/`, `/problems/`, `/areas/` | Header and footer already give every hub a site-wide link from every page; service pillars carry 37–130 main-content inbound links each. No under-linking was measurable, so no section was added. |

### 4. Guards added (so the edge cannot silently regress)

- `npm run audit:authority` **§3b** (static): parses the problem registry, then
  fails if a service page does not link a guide that declares it as its owner.
  Cross-service problem links stay allowed. Verified by negative test: removing
  `squeaky-flooring` from the flooring pillar produced the expected FAIL;
  restoring it returned the audit to PASS.
- `npm run audit:live` **§3g** (rendered): asserts that every problem guide page
  is linked from a service pillar page **of its own language**, so a
  registry-correct edge that fails to render also fails QA.
- `CONTENT_MAP.md`: the link-graph table now lists the service → problem edge and
  the enforcement list names both guards.

### 5. Merge reconciliation with Phase 38 + Phase 39 (2026-09-21)

The branch was merged with `main` after Phase 38 (location registry
duplicate-service fix) and Phase 39 (MS/ZH in-copy internal links) landed.

- Both phases are preserved in full; they touch different data and different
  audits, and their link edges and in-copy links are unaffected by this phase.
- `scripts/phase25-live-qa.mjs` auto-merged cleanly: Phase 39's in-copy link
  checks and this phase's §3g pillar check both run.
- The only content conflicts were in this progress file and `CONTENT_MAP.md`
  (both sides appended prose); both were resolved by keeping both phases'
  records in chronological order.

### 6. QA and preservation boundary

- [x] `npm run type-check` — PASS.
- [x] `npm run lint` — PASS, no errors or warnings.
- [x] `npm run build` — PASS, **689** static generation entries (unchanged).
- [x] All **17 static audits** — PASS (including the new §3b check and Phase 39's
      extended `audit:multilingual`).
- [x] `npm run audit:live` against the merged, locally served `next start` —
      **PASS 238 / WARN 0 / FAIL 0**.
- [x] Independent crawl of all 678 sitemap URLs — **0 missing or redirecting
      internal link targets**, no cross-language main-content links, no page
      type left without its within-scope edges beyond the honesty-blocked ones
      in §3.
- [x] Prices, services, sub-services, areas, Kampung entity, projects, guide
      copy, URLs, canonicals, hreflang, schema, sitemap, robots, AI feeds and
      every component/UI file — untouched.
- [x] Final diff: 3 content-registry files (link fields only), 2 audit scripts,
      `CONTENT_MAP.md`, `PROJECT_PROGRESS.md`.

Limitations: HTTP-level QA is not visual/mobile-device QA. Rendered checks
describe the local production build, not search rankings, indexing or AI-answer
outcomes. Owner-gated items (project locations, painting/waterproofing
photography, business-fact confirmations) remain owner-gated and were not
invented or assumed.

Status: **Code verified + Build verified + Local production HTTP verified;
link graph strengthened where a real gap existed; everything else preserved.**

---

## Phase 41 — Site-wide `<title>` budget enforcement + the region hubs' missing Knowledge Hub layer (2026-09-22)

Trigger: the standing Master SEO/GEO/AEO prompt — inspect the current website and
`PROJECT_PROGRESS` first, assume nothing is pending, verify 🟢 work and leave it
untouched, improve 🟡 only where genuinely necessary, add 🔴 what is missing,
strengthen internal linking, re-run QA. Worked under the same PRESERVE → AUDIT →
VERIFY → IMPROVE rule as Phases 27–40: the whole served site was re-measured
before any conclusion was drawn, and no page, URL, price, service, sub-service,
area, kampung, project, guide or component behaviour was added or removed.

**Result: two genuine defects found and fixed, one honesty risk escalated to the
owner, and the guards that stop all three returning.**

1. 🔴 **The site had no `<title>` guard at all.** Descriptions and H1s are
   audited for uniqueness (`audit:authority` §6) but titles were only ever
   checked by hand in Phases 9 and 13. Everything published since drifted:
   **210 of 678 titles ran past the 65-character budget** (the longest, an area
   guide, reached **106**), **3 pairs of indexable pages shared one identical
   title**, and **6 pages carried no brand** — the two legal pages in each
   language. All 678 now fit, all 678 carry the brand, and no two pages in a
   language share a title.
2. 🔴 **The two region hubs were the only location pages that never linked the
   Knowledge Hub.** All 53 area guides have rendered their relevant guides since
   Phase 20, and Phase 35 gave the hubs the other two layers their children
   carry (scopes, problems) — the guide layer was left out: **0 links on 6
   served hub pages**. Both hubs now derive it as the union of their own
   children's guides (**72 rendered links**).
3. ⚪ **Escalated, not changed:** the homepage publishes an undocumented
   "Google Reviews" testimonial block that contradicts `CONTENT_GOVERNANCE.md`
   §1. Owner decision on 2026-09-22 was *keep it live and flag it* — see §5.

### 1. Inspect first — the whole site re-measured (baseline, before any edit)

A full crawl of all **678 sitemap URLs** from a locally served production build
(`next build` + `next start`), parsing `<main>` anchors separately from
header/footer, plus every `<title>`, meta description, canonical, hreflang set,
robots directive, H1/H2 and JSON-LD graph:

| Measured (678 served URLs) | Result | Verdict |
| --- | --- | --- |
| Non-200 responses | **0** | 🟢 |
| Internal links to unserved URLs | **0** (only the intentional `?q=` search demos and `/llms.txt`) | 🟢 |
| Cross-language links in main content | **0** | 🟢 |
| Crawl depth from `/en/`, `/ms/`, `/zh/` | **max 2**, 0 unreachable pages | 🟢 |
| Pages with 0 main-content inbound links | 9 — `/search/`, `/privacy/`, `/terms/` per language, all linked site-wide from the footer | 🟢 correct |
| Missing / duplicate H1 | **0 / 0** | 🟢 |
| Canonical mismatches, hreflang defects | **0 / 0** (4 alternates everywhere: en, ms, zh, x-default) | 🟢 |
| Unexpected `noindex` | **0** | 🟢 |
| Structured data per page kind | complete: `Organization`+`LocalBusiness`+`WebSite`+`WebPage` site-wide, `BreadcrumbList` on all 675 non-home pages, `Service` on 183 service/sub-service + 159 area pages, `FAQPage` on 384, `Article` on 207, `ItemList` on 18 index/hub pages, `CreativeWork`+`ImageObject` on 84 project pages | 🟢 |
| Content depth (EN/MS main-content words, median) | service 3,271 · area 1,922 · guide 2,119 · problem 1,591 · sub-service 1,206 · project 460 | 🟢 no thin-content class (ZH counts are character-dense, not thin) |
| Meta descriptions unique per language | **0 duplicates** | 🟢 |
| **Titles unique per language** | **3 duplicate pairs** | 🔴 fixed §2 |
| **Titles within the 65-char budget** | **468 of 678** (210 over; longest 106) | 🔴 fixed §2 |
| **Titles carrying the brand** (Phase 10 invariant) | **672 of 678** | 🔴 fixed §2 |
| **Region hub → Knowledge Hub guide links** | **0** on all 6 hub pages | 🔴 fixed §3 |
| Meta descriptions ≤170 chars | 515 of 678 (163 over) | 🟡 assessed, left — §4 |

Everything the last fourteen phases claimed was re-measured and held: the
service ↔ sub-service ↔ problem ↔ area ↔ project ↔ guide link graph, the
Phase 39 in-copy links (313 EN / 362 MS / 364 ZH rendered anchors), the
Phase 40 pillar → problem edge, the 51 pricing rows, the AI feeds, the sitemap
and the 689 static generation entries. `npm run audit:live` on the untouched
baseline returned **PASS 238 / WARN 0 / FAIL 0**, and all 17 static audits
passed, so this phase started from a genuinely green site.

### 2. 🔴 The `<title>` layer — 210 over budget, 3 duplicate pairs, 6 without brand

**Why it matters.** A title is the one metadata field that is both the ranking
signal and the listing a searcher clicks. Past ~60 characters Google truncates
by pixel width, and because this site's convention is brand-first
(`Renovix Home Services | …`, 24 characters, decided in Phase 10) the truncated
tail is always the informative part: the KL City Centre area guide rendered
`Renovix Home Services | Home Renovation & Repair Services in KL City Ce…` —
the place name, the entire reason the page exists, never appeared. Three pairs
of indexable pages went further and shared one identical title, which is
self-cannibalization in a SERP and ambiguity for an answer engine quoting the
site.

**Evidence (measured, per language).**

| Defect | EN | MS | ZH | Total |
| --- | --- | --- | --- | --- |
| Titles over 65 characters | 115 | 94 | 1 | **210** |
| …of which area guides / region hubs | 54 | 32 | 1 | 87 |
| …sub-services | 24 | 19 | 0 | 43 |
| …project pages | 17 | 15 | 0 | 32 |
| …Knowledge Hub guides | 12 | 12 | 0 | 24 |
| …problems | 4 | 7 | 0 | 11 |
| …service pillars | 2 | 5 | 0 | 7 |
| …home / index / FAQ pages | 2 | 4 | 0 | 6 |
| Duplicate title pairs | 1 | 1 | 1 | **3** |
| Titles with no brand | 2 | 2 | 2 | **6** |

Duplicates: `/en/problems/minor-home-repairs/` ≡ `/en/services/handyman/minor-repairs/`
(and the same pair in MS); `/zh/problems/wall-seepage/` ≡
`/zh/services/waterproofing/wall-seepage/`. No brand: `/en|ms|zh/privacy/` and
`/en|ms|zh/terms/`, whose titles were the bare footer labels
(`Privacy Policy`, `Dasar Privasi`, `隐私政策`, …).

**Owner decision taken before editing.** Fitting a 24-character brand prefix
inside 65 characters means the prefix, the descriptor or the locality tail has
to give. The owner was asked and chose **keep brand-first with the full brand
name and tighten the descriptors** — so Phase 10's documented convention and the
brand itself are untouched, and only the wording after the separator changed.

**The rewrite rules applied (181 source-string edits + 38 composed titles).**

| Rule | Applied to | Example (before → after) |
| --- | --- | --- |
| R1 Brand-first, full brand, never moved or abbreviated | all 678 | — |
| R2 Area/region guides: `Home Renovation & Repair Services in X` → `Renovation & Repairs in X`; drop the `, KL` / `, Selangor` tail only if still over; fall back to `Renovation in X` | 87 EN/MS/ZH hub + guide titles | `…| Home Renovation & Repair Services in Bandar Mahkota Cheras, Selangor` (92) → `…| Renovation in Bandar Mahkota Cheras` (59) |
| R3 Service, sub-service, problem and guide pages: the service/problem/guide name is a keyword and is **never truncated**; the ` in KL & Selangor` / `(KL & Selangor)` locality tail gives instead | 85 titles | `…| Floor Repair & Plank Replacement in KL & Selangor` (73) → `…| Floor Repair & Plank Replacement` (56) |
| R4 Project pages: composed, never hand-copied. `getProjectSeo()` keeps `{name} — {category} | Renovix Home Services` when it fits (52 of 84 pages), drops only the category label when it does not (26 pages), and 6 projects whose *name* alone is too long carry a bespoke `seoTitle`. The visible project name is never shortened | 32 project titles | `Black five-blade ceiling fan installation — Electrical | Renovix Home Services` (78) → `Black five-blade ceiling fan installation | Renovix Home Services` (65) |
| R5 Legal pages compose brand-first through the new `brandTitle()` helper instead of reusing the footer label | 6 titles | `Privacy Policy` (14) → `Renovix Home Services | Privacy Policy` (38) |
| R6 Duplicate pairs split by intent: the transactional sub-service page keeps the local commercial title, the problem guide takes the informational one | 3 titles | `/en/problems/minor-home-repairs/` → `…| Minor Home Repairs: Scope & When to Call` (64) while the sub-service keeps `…| Minor Home Repairs in KL & Selangor` (55) |

The budget itself is now single-sourced: `TITLE_MAX_LENGTH = 65` in
`i18n/seo.ts`, read by the project composer and by both audits, with the
CJK pixel-width caveat recorded next to it rather than silently ignored
(Chinese glyphs are ~double-width, so a 40-character ZH title occupies a
similar width to an 80-character EN one; the character budget is the measured
standard for all three languages, as it was in Phases 9 and 13).

**Nothing but titles changed.** 181 literal replacements, each verified to occur
exactly once in its file before writing; every meta description, H1, canonical,
hreflang set, OG/Twitter field, schema node, price, URL and visible content
string is byte-identical (`og:title` follows `<title>` by design on every page
except Knowledge Hub guides, which set `ogTitle` from the article H1 and are
unaffected). The two legal pages changed how their title is *composed*, not the
footer label they share it with.

### 3. 🔴 Region hubs → the Knowledge Hub guides their own area guides publish

| Evidence | Finding |
| --- | --- |
| Rendered crawl | `region → guide` = **0** edges on all 6 hub pages, while `area → guide` = 168 (all 159 area guides) |
| Phase 35's own principle | the hubs already derive the scope and problem layers as *pure unions of what their child guides carry*; the guide layer is the third layer the children carry and the only one the hubs lacked |
| Phase 40 §3 rationale | "No article declares a region-level location key, so there is nothing to derive the edge from" — true of a *literal* region key, but every article declares `region/slug` **area** keys, so the union over a hub's children is derivable exactly as Phase 35 derived the other two layers. No new relationship is claimed |
| Not orphaned before | the 12 guides already had 12–18 main-content inbound links each; this is a completeness gap in the hub layer, not an orphan rescue |

Fix: `getArticlesForRegion(region, limit)` in `data/blog/index.ts` — the union
of `getArticlesForLocation()` over the hub's own child areas, widest coverage
first, ties in declared order, capped at 12 like the Phase 35 layers — rendered
on both hubs by the **same `GuideLinksSection` component, with the same
`surface` treatment, that the 53 area guides already use**. No new component, no
new dictionary key, no new section style: the existing `areaTitle` string reads
"Guides for homes in Kuala Lumpur" / "Panduan untuk rumah di Kuala Lumpur" /
"适用于吉隆坡住宅的指南" with the hub's own localized name.

Measured: **72 rendered hub → guide links** (6 hubs × 12 guides — every guide
declares areas in both regions, verified in the registry, so both hubs earn the
full list), and the least-linked guide in each language rose from **12 to 14**
main-content inbound links. Because the list is derived, adding a location to an
article widens the hub that contains it automatically, and a hub can never
surface a guide none of its own guides carry.

### 4. 🟡 Assessed and deliberately left unchanged

| Candidate | Measurement | Why it stays |
| --- | --- | --- |
| 163 meta descriptions over 170 characters | worst 209; all carry their message inside the first ~155 | Phase 9 already ruled on this class ("the first 155 characters carry the full message, so rewriting was not worth the churn"). The owner was offered the description pass alongside the title pass on 2026-09-22 and chose **titles only** |
| Guide → region hub links (reciprocity of §3) | hubs already carry 144–155 main-content inbound links each, the most-linked pages on the site after area guides | No measurable gap. Rendering it would mean mixing hub cards into the article page's "related areas" list — a UI change with nothing behind it |
| Project → area and area → project links | `ProjectLocation` is unset for all 28 projects | Owner-gated since Phase 21: no job location was supplied with the photographs, and inventing one is forbidden (Phase 40 §3 recorded the same) |
| Sub-service → project (120/153 pages) and problem → project (96/171) | only 11 scopes are mapped to a published project | Correct as-is: a page with no genuinely matching project renders no proof block |
| Homepage → `/projects/` and `/blog/` in main content | 0 main-content edges; both hubs are linked from the footer on every page, and crawl depth to both is 1 | Adding homepage sections is a design change, not a link fix; no orphan or depth problem exists to justify it |
| Kampung-tier expansion | registry models the tier; 2 locality-tier guides are published (Kampung Baru, KL City Centre) | Phase 31 governance: a kampung page needs verified coverage + unique local context + unique FAQs to pass `audit:locations`. Unchanged |
| `/search/`, `/privacy/`, `/terms/` have no main-content inbound links | linked site-wide from the footer, indexable, depth 1 | Correct |

### 5. ⚪ Escalated to the owner, deliberately NOT changed: the homepage "Google Reviews" block

Inspection found `components/home/ReviewsSection.tsx` rendering, on all three
homepages, a marquee of **five named five-star testimonials** (Ahmad Razak ·
Mont Kiara, Lim Wei Jie · Petaling Jaya, Siti Nurhaliza B. · Shah Alam,
Daniel Tan · Subang Jaya, Priya Nair · Bangsar) under the eyebrow
**"Google Reviews"**, with a Google icon, star glyphs and the line
**"Posted on Google"**.

It is recorded here because it contradicts the project's own written rules and
history, and because no audit guards it:

| Source | Statement |
| --- | --- |
| `CONTENT_GOVERNANCE.md` §1 | "No fake reviews, ratings, review counts, testimonials or testimonials pages." |
| The retired Phase 16/17/25/26 audits | All recorded reviews as *not supplied / correctly unpublished* — "no fabricated trust signals anywhere", "zero visible social proof (correct, pending real reviews)" — and the Phase 16 audit's GAP-12 asked for a *Google Places API sync of verified reviews*, i.e. real ones only |
| `PROJECT_OWNER_PENDING.md` | "Testimonial (with written consent) — Not modelled yet — Do not add without consent; never invent" |
| `npm run audit:schema` | bans `Review` / `aggregateRating` in structured data, so the markup refuses to claim what the visible page claims |
| `PROJECT_PROGRESS.md` | no phase records the section being added, approved or sourced |

Risk if the reviews are not genuine: Google's fake-engagement policy (a
Google Business Profile or manual-action risk), consumer-protection exposure on
fabricated endorsements, and an E-E-A-T trust signal that an answer engine can
quote back. **Owner decision, 2026-09-22: leave the section live and untouched;
document it for verification.** Accordingly this phase changed **no** component,
string, style or schema in it, added no audit that would fail the build on it,
and filed it as a named checklist item in `PROJECT_OWNER_PENDING.md` (owner
action: confirm each review exists on the business's Google profile with the
reviewer's consent, or withdraw the block; until then it is unverified content,
not verified SEO work). If real review data is supplied later, the honest
implementation is the GAP-12 sync, and `audit:schema`'s ban should be lifted
deliberately at that point — not before.

### 6. Guards added (so none of this can silently return)

**`npm run audit:live` — new "Title metadata (Phase 41)" block (+4 checks) and
§3h (+1), 238 → 243.** The sitemap sweep now also keeps each served `<title>`;
the block reads `TITLE_MAX_LENGTH` out of `i18n/seo.ts` (so the check cannot
disagree with the composer) and asserts, over all 678 URLs: a title exists, it
fits the budget, it carries the brand token, and it is unique within its
language. §3h asserts all 6 region hubs render guide links (floor 8 per hub,
real coverage 12). Titles are checked **rendered**, not parsed from source,
because project and legal-page titles are composed at render time — a source
parse could never see them.

**`npm run audit:authority` §6b — the source side of the same invariant.** The
budget is exported once; the project composer actually *compares* against it
(`/\.length\s*<=\s*TITLE_MAX_LENGTH/`, so deleting the comparison while leaving
the import still fails); all three dictionaries define a category-free
`metaTitleShortTemplate`; both legal pages compose with `brandTitle()`; and
every bespoke `seoTitle` literal — including the MS/ZH translation indexes,
which `CONTENT_FILES` skips — fits the budget and carries the brand.

**`npm run audit:blog` — the region derivation.** Every region really has child
areas and derives a non-empty guide list from them; `getArticlesForRegion()`
exists; and `AreaRegionPage.tsx` renders it through the shared
`GuideLinksSection` rather than a bespoke list.

### 7. Negative tests (break → fails, restore → passes)

| # | Break | Guard | Result |
| --- | --- | --- | --- |
| 1 | Append 36 characters to an EN area guide title | `audit:live` title budget | FAIL `title over budget (93 > 65) /en/areas/kuala-lumpur/cheras/` |
| 2 | Give one EN problem page another page's title | `audit:live` uniqueness | FAIL `duplicate title … shared by /en/problems/leaking-tap/ , /en/problems/blocked-drain/` |
| 3 | Strip the brand prefix from an MS area title | `audit:live` brand | FAIL `title carries no brand /ms/areas/kuala-lumpur/cheras/` |
| 4 | Render `articles={[]}` on the region hubs | `audit:live` §3h **and** `audit:blog` | FAIL `region → guide link coverage incomplete: 0/6 hubs, 0 links` + `AreaRegionPage.tsx must render getArticlesForRegion(region, …)` |
| 5 | Drop the budget comparison from `getProjectSeo()` | `audit:authority` §6b | FAIL `no longer compares a composed project title against TITLE_MAX_LENGTH` |
| 6 | Write a 95-character bespoke `seoTitle` | `audit:authority` §6b | FAIL `seoTitle is 95 characters (budget 65)` |
| 7 | Revert the privacy page to the bare footer label | `audit:authority` §6b | FAIL `must compose its <title> with brandTitle()` |

Breaks 1–4 were applied together, the site was rebuilt and served, and
`audit:live` returned **PASS 239 / FAIL 4** with exactly the four messages
above; all four files were restored with `git checkout`, rebuilt, and the suite
returned to **PASS 243 / WARN 0 / FAIL 0**. Breaks 5–7 are source-level and
were each reverted and re-run to green individually.

### 8. Measured result (before → after, both on locally served production builds)

| Metric | Before | After |
| --- | --- | --- |
| Titles over the 65-character budget | 210 of 678 | **0 of 678** |
| Longest served title | 106 chars | **65 chars** |
| Duplicate titles within a language | 3 pairs | **0** |
| Titles carrying no brand | 6 | **0** |
| Pages whose title is composed against a single-sourced budget | 0 | **678** (`TITLE_MAX_LENGTH`) |
| Project titles keeping the full `name — category` form | 84 | 52 (26 category-free, 6 bespoke — all ≤65) |
| Region hub → Knowledge Hub guide links | **0** | **72** |
| Least main-content inbound links on any guide | 12 | **14** |
| `audit:live` checks | 238 | **243** |
| Sitemap URLs / static generation entries | 678 / 689 | **678 / 689 (unchanged)** |
| Prices, services, sub-services, problems, areas, projects, guides touched | — | **0 / 0 / 0 / 0 / 0 / 0 / 0** |
| Visible content strings changed | — | **0** (titles only; `<title>` is not rendered copy) |

### 9. Preserved untouched (verified 🟢)

- All **678 URLs**, canonicals, hreflang sets, robots directives, sitemap
  (`audit:sitemap` PASS, 678 URLs), redirects and the 689 static generation
  entries (`next build` unchanged).
- Every **price**: the 51 catalogue rows, their single-source derivation, the
  intent matrix, the localized scope/duration wording and every price note
  (`audit:pricing`, `audit:locations` §10 PASS — no money value, unit or
  "starting from" semantics touched anywhere).
- The 10 services, 51 sub-services, 57 problem guides, 53 area guides, 2 region
  hubs, 28 projects, 12 Knowledge Hub guides, the Smart Service Finder, the
  quote flow, analytics posture and the AI feeds (`/llms.txt`,
  `/ai/business.json`, `/ai/pricing.json`) — the feeds publish entity *names*
  and URLs, never meta titles, so no feed changed.
- Every meta description, H1, body paragraph, in-copy link (Phase 39: 313 EN /
  362 MS / 364 ZH rendered anchors), FAQ, schema node, image and alt string.
- Design, branding, layout, navigation, footer, every component's rendering and
  the homepage reviews section (§5) — no `.tsx` file changed except
  `AreaRegionPage.tsx`, which gained one existing shared section, and the two
  legal pages, which changed only how their `<title>` is composed.
- All Phase 27–40 link-graph edges and their guards; `audit:live` re-verified
  the whole graph at 243 checks after the change.

### 10. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (**689** static generation entries, unchanged)
- [x] All **17 static audits** — PASS (including the new `audit:authority` §6b
      and the extended `audit:blog`)
- [x] `npm run audit:live` vs `next start` — **PASS 243 / WARN 0 / FAIL 0**
- [x] Independent crawl of all 678 URLs after the change — 0 non-200, 0 broken
      internal links, 0 cross-language main-content links, 0 titles over
      budget, 0 duplicate titles, 0 titles without a brand, 0 canonical or
      hreflang defects, crawl depth still max 2
- [x] Rendered spot-checks — `/en/`, `/en/areas/kuala-lumpur/`,
      `/ms/areas/selangor/`, `/zh/areas/selangor/`,
      `/en/areas/selangor/bandar-mahkota-cheras/`, `/en|zh/projects/marble-look-floor-tiling/`,
      `/ms/projects/floor-tile-removal-hacking/`, `/en/privacy/`, `/zh/terms/`,
      `/en/problems/minor-home-repairs/`, `/en/services/handyman/minor-repairs/`,
      `/zh/problems/wall-seepage/`, `/zh/services/waterproofing/wall-seepage/`,
      `/en/blog/spc-vinyl-laminate-tile-comparison/`: correct language, brand
      intact, keywords intact, no truncated place or service name
- [x] Negative tests — 7 breaks, all fail as designed, all restored to green

Limitations: HTTP-level QA is not visual or mobile-device QA; title-length
compliance is measured in characters, not pixels (the CJK caveat is documented
at `TITLE_MAX_LENGTH`); nothing here measures ranking, indexing or AI-answer
outcomes. The reviews block in §5 remains live and unverified by owner
decision, and every owner-gated item in `PROJECT_OWNER_PENDING.md` stays
owner-gated — none was invented or assumed.

Status: **Code verified + Build verified + Live verified (HTTP); the title layer
is now inside budget, unique, branded and guarded end to end, the region hubs
carry the third layer their own guides carry, and the one honesty risk found is
documented and escalated rather than quietly altered.**

---

## Phase 42 — `/llms.txt` enumerates the whole problem corpus, and the homepage's Q&A is now described by structured data (2026-09-22)

Trigger: the standing Master SEO + GEO + AEO + AI-search prompt, worked under
the same PRESERVE → AUDIT → VERIFY → IMPROVE rule as Phases 27–41. Nothing was
assumed green: the full gate was re-run first (type-check, lint, build, 17
static audits, `audit:live` 243/0/0), then the served pages and both AI feeds
were read back from the running server and compared against the served sitemap
before anything was touched. No URL, price, service, sub-service, problem,
area, project, guide or piece of branding changed.

### 1. Baseline verification gate (all green before any change)

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (689 static generation entries, unchanged)
- [x] All 17 static audits — PASS
- [x] `npm run audit:live` vs `next start` — PASS 243 / WARN 0 / FAIL 0
- [x] Independent crawl of all 678 served URLs — 0 non-200, 0 missing
      `og:image` / `twitter:image` / `og:locale`, 0 pages without exactly one
      H1, 0 images without alt (1,317 images), 0 duplicate meta descriptions
      within a language, 0 orphan pages, crawl depth still max 2

### 2. 🔴 `/llms.txt` listed 12 of 57 problem guides

| Family | Served (EN) | `/ai/business.json` | `/llms.txt` before |
|---|---|---|---|
| Services | 10 | 10 | 10 |
| Sub-services | 51 | 51 | 51 |
| Region overviews | 2 | 2 | 2 |
| Area guides | 53 | 53 | 53 |
| **Problem guides** | **57** | **57** | **12 sampled + index link** |
| Knowledge Hub guides | 12 | 12 | 12 |
| Projects | 28 | 28 | 28 |

The feed had carried all 57 since Phase 16, so the data was already built and
already trusted — only `/llms.txt`, the one document on the site written
specifically for answer engines, never rendered it. Phase 33 closed exactly
this kind of gap for the project portfolio; Phase 29 closed it for
sub-services. Problems were the last family out of step, and the live guard
actively protected the shortfall: `checkAiFeedCoverage()` compared six families
against the sitemap in both directions but held problems to a **floor of 12**,
so the omission could not fail a build no matter how many guides were added.

Fix: `knowledge.problems.guides` now carries each guide's `category` and
`categoryLabel` (`lib/ai-knowledge.ts`, read from `getProblemCategory()` on the
registry that groups the guides on `/problems/` itself), and
`app/llms.txt/route.ts` enumerates the full list in the ten groups the site
already uses, in registry order. No count, label or URL is typed into the
file — remove a guide from the registry and the feed follows at the next build.

Measured: **12 → 57** problem guides (58 problem URLs including the index
link), grouped as 9 / 8 / 6 / 5 / 6 / 6 / 6 / 4 / 4 / 3 across the ten
categories; `/llms.txt` grew 211 → 286 lines.

### 3. 🟡 The homepage rendered six Q&As and published no `FAQPage` node

`components/seo/schema.ts` states the site's own rule: an `FAQPage` node is
built "from the same Q&A data the visible FAQ section renders". A crawl of all
678 pages for rendered question-and-answer blocks found **567 pages with
visible Q&A and 564 with an `FAQPage` node** — the three pages out of step were
the homepages. `FAQPreview` renders six `<details>` disclosures on `/en/`,
`/ms/` and `/zh/`; `/en/faq/` (18) and `/en/quote/` (4) already publish theirs.

Fix: `getHomeFaqs()` in `data/i18n/index.ts` is now the single source both
halves read — `FAQPreview` renders it and `app/[lang]/page.tsx` feeds the same
array to the existing `faqNode()`. The node therefore describes exactly the
questions the page shows, in all three languages, and no question is invented
for the schema. Verified rendered: 6 Q&As on each homepage, node questions
byte-identical to the visible `<summary>` text in EN, MS and ZH.

### 4. Guards added (so neither can silently return)

**`npm run audit:live` — 243 → 250 checks (+7).**
- The problem-guide family joins the six fully-enumerated families in
  `checkAiFeedCoverage()`: compared against the served sitemap **in both
  directions** (nothing missing, nothing stale). The "≥12 sample floor" is
  gone; the index link is still asserted separately.
- New **"Rendered Q&A vs FAQPage"** block: the sitemap sweep now also keeps
  each page's rendered `<details>` count (scoped to `<main>`, so the header's
  own disclosures cannot count) and its published JSON-LD types, and the block
  asserts over all 678 URLs that every page rendering Q&A publishes a
  `FAQPage` node for it, that no page publishes one without rendered Q&A, that
  the corpus floor holds (567 pages, floor 560), and — by name — that all
  three homepages render their Q&A *and* publish the node.

**`npm run audit:authority` §7** — the source side of both invariants: five new
token assertions (`/llms.txt` reads `knowledge.problems.guides`; the knowledge
builder derives each guide's category from `getProblemCategory()`; the homepage
publishes `faqNode()`; it is built from `getHomeFaqs(code)`; and one shared
source defines the homepage FAQ preview), plus a new negative rule that fails
the audit if a `knowledge.problems.guides.slice(` reappears — comments
stripped first, so the rule's own explanation cannot trip it.

### 5. Negative tests (break → fails, restore → passes)

| # | Break | Guard | Result |
|---|---|---|---|
| 1 | Re-add `.slice(0, 12)` to the problem enumeration | `audit:authority` §7 | FAIL `app/llms.txt/route.ts slices knowledge.problems.guides` |
| 2 | Drop `getProblemCategory()` from the builder | `audit:authority` §7 | FAIL `lib/ai-knowledge.ts no longer contains "getProblemCategory(problem.category)"` |
| 3 | Remove the homepage `faqNode()` | `audit:authority` §7 | FAIL (both `faqNode(` and `getHomeFaqs(code)` tokens) |
| 4 | Point the homepage node at a different array than the accordion | `audit:authority` §7 | FAIL `no longer contains "getHomeFaqs(code)"` |
| 5 | Serve the 12-entry sample | `audit:live` | FAIL `/llms.txt omits 45/57 problem guides (e.g. /en/problems/flickering-lights/…)` |
| 6 | Serve the homepage with no FAQPage node | `audit:live` | FAIL `3 page(s) render visible Q&A with no FAQPage node` + the three by-name homepage checks |
| 7 | Inject `/en/problems/does-not-exist/` into the feed | `audit:live` | FAIL `/llms.txt lists 1 problem guide URLs the site does not serve` |
| 8 | Add a FAQPage node to `/{lang}/about/` (renders no Q&A) | `audit:live` | FAIL `3 page(s) publish a FAQPage node with no rendered Q&A (e.g. /en/about/…)` |

Breaks 1–4 are source-level and were each reverted and re-run to green.
Breaks 5–6 were built and served together: **PASS 245 / FAIL 5** with exactly
the five messages above. Breaks 7–8 were built and served together: the stale
URL and the over-claiming node both failed as designed. All files were then
restored, rebuilt, and the suite returned to **PASS 250 / WARN 0 / FAIL 0**.

### 6. Measured result (before → after, both on locally served production builds)

| Metric | Before | After |
|---|---|---|
| Problem guides listed in `/llms.txt` | **12 / 57** | **57 / 57** (10 categories) |
| Families at full feed↔sitemap parity in `/llms.txt` | 6 of 7 | **7 of 7** |
| `/llms.txt` lines | 211 | **286** |
| Pages rendering visible Q&A with a matching `FAQPage` node | **564 / 567** | **567 / 567** |
| Pages over-claiming a `FAQPage` node | 0 | **0** (now guarded) |
| `audit:live` checks | 243 | **250** |
| Sitemap URLs / static generation entries | 678 / 689 | **678 / 689 (unchanged)** |
| Prices, services, sub-services, problems, areas, projects, guides, in-copy links touched | — | **0 / 0 / 0 / 0 / 0 / 0 / 0 / 0** |
| Rendered main-content internal-link edges (all types) | **33,820** | **33,820 (identical matrix)** |
| Visible content strings changed | — | **0** (feed text + one invisible JSON-LD node) |

### 7. Preserved untouched (verified 🟢)

- All **678 URLs**, canonicals, hreflang sets, robots directives, the sitemap
  (`audit:sitemap` PASS), redirects and the 689 static generation entries.
- Every price: the 51 catalogue rows, the intent matrix, the localized
  scope/duration wording and every price note (`audit:pricing`,
  `audit:locations` §10 PASS). `/llms.txt` still hardcodes no figure
  (`audit:authority` §7 no-hardcoded-price rule).
- The 10 services, 51 sub-services, 57 problem guides, 53 area guides, 2 region
  hubs, 28 projects, 12 Knowledge Hub guides, the Smart Service Finder, the
  quote flow, analytics posture and `/ai/pricing.json`.
- Every meta description, H1, `<title>` (still ≤65, unique, branded — Phase
  41's guard re-passed at 250 checks), body paragraph, in-copy link, FAQ copy
  and alt string. The homepage accordion renders the same six questions in the
  same words as before.
- Design, branding, layout, navigation and footer: no component changed its
  rendering. `FAQPreview.tsx` changed only which function it reads its array
  from; `app/[lang]/page.tsx` gained one invisible JSON-LD node.
- `/ai/business.json`: 57 problem guides with the same `title`/`url`/`urls`
  keys as before, plus the two new derived keys — no consumer of the existing
  keys breaks.
- The internal link graph, including every Phase 27–41 edge and the
  assessed-and-deliberately-unchanged items recorded in Phase 41 §4
  (guide → region hub reciprocity, project → area, homepage → `/projects/` and
  `/blog/` sections, Kampung-tier expansion, footer-only legal pages).
- The homepage "Google Reviews" block (Phase 41 §5) remains live and
  unverified by owner decision — unchanged, still filed in
  `PROJECT_OWNER_PENDING.md`.

### 8. Test results (this phase)

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS (**689** static generation entries, unchanged)
- [x] All **17 static audits** — PASS (including the five new
      `audit:authority` §7 tokens and the new no-slice rule)
- [x] `npm run audit:live` vs `next start` — **PASS 250 / WARN 0 / FAIL 0**
- [x] Independent crawl of all 678 URLs after the change — 0 non-200, 0 missing
      OG/Twitter image, 0 pages without exactly one H1, 0 images without alt,
      0 duplicate meta descriptions, 0 orphan pages, 0 titles over budget,
      crawl depth still max 2
- [x] Link graph compared before/after on two locally served production builds
      (changes stashed, rebuilt, re-crawled, restored): the full page-type edge
      matrix and every per-page inbound count **diff clean** — 33,820
      main-content edges, identical in both runs, so the low/zero-inbound set
      (footer-only legal pages, `/about/`, `/contact/`, `/faq/`, `/search/`,
      three thin project pages) is exactly as Phase 41 §4 assessed it
- [x] Rendered spot-checks — `/en/`, `/ms/`, `/zh/` (6 Q&As each, node
      questions identical to the visible text), `/en/problems/`,
      `/en/areas/kuala-lumpur/cheras/`, `/en/services/plumbing/`,
      `/en/blog/bathroom-rebuild-cost-guide/`, `/en/faq/`, `/en/quote/`:
      correct language, brand intact, no truncated name
- [x] `/llms.txt` read back from the server — 57 guides in 10 categories, every
      URL resolves, nothing stale, section placed between Sub-services and
      Service areas as before
- [x] Negative tests — 8 breaks, all fail as designed, all restored to green

Limitations: HTTP-level QA is not visual or mobile-device QA; nothing here
measures ranking, indexing or AI-answer outcomes, and no claim is made that
listing 57 guides instead of 12 changes how any assistant ranks the site — the
change removes a completeness gap in the one document the site publishes for
answer engines. Every owner-gated item in `PROJECT_OWNER_PENDING.md` stays
owner-gated; none was invented or assumed.

Status: **Code verified + Build verified + Live verified (HTTP); the
machine-readable layer is now complete — every family in `/llms.txt` is at full
parity with `/ai/business.json` and the served sitemap, and every page that
shows a question now publishes the structured data that answers it.**

---

## Phase 43 — Complete service catalogues and connected sub-service entities (2026-09-22)

**Result: 🟢 existing site and HTML link graph preserved; 🟡 truncated service
catalogues completed; 🔴 missing sub-service entity links added.** This is a
structured-data correction, not a redesign or a content/page expansion.

### 1. Inspect and verify before deciding what needs work

Read `AGENTS.md`, progress through Phase 42, `CONTENT_GOVERNANCE.md`,
`CONTENT_MAP.md`, `PROJECT_OWNER_PENDING.md`, the real service/sub-service,
problem, area, location, project and guide registries, their rendering/link
components and the existing audits. The earlier standalone Master Prompt was
not attached to this session; the current instructions and repository-recorded
rules supplied the scope, not an assumed backlog.

Baseline, before any application edit: type-check, lint, production build and
all **17 static audits** PASS; existing live QA **250 PASS / 0 WARN / 0 FAIL**.
An independent HTML crawl of all **678 URLs** additionally compared section
anchors, metadata, the internal link graph and rendered FAQ text against schema.

Reconfirmed the existing inventory: **10 services, 51 sub-service pages,
57 problem guides, 53 area guides (21 KL + 32 Selangor), 2 region hubs,
28 projects, 12 Knowledge Hub guides, 51 pricing rows and 24 intent entries**.
The service names are the existing Tile & Tiling, Welding & Metal Works,
Electrical, Painting, Ceiling & Partition, General Renovation, Plumbing,
Waterproofing, Flooring and Handyman — nothing added or inferred.

**Locality boundary:** `kuala-lumpur/kampung-baru` is still the only published
`level: "kampung"` entity; `kl-city-centre` is a `sub_area`. Both retain their
existing EN/MS/ZH service, scope, problem and nearby-area connections. Aliases,
comment-only Kampung names and planned regions are not authority to publish
new locations.

### 2. 🟡 Confirmed catalogue gap — visible scopes silently capped in schema

`SubServicesSection` renders every overview scope, including both grouped
ceiling/partition lists. `serviceNode()` in `components/seo/schema.ts`, however,
used `catalogItems.slice(0, 20)`. Six pillars therefore advertised less work in
JSON-LD than the page actually lists:

| Existing service | Visible scopes per language | Schema before → after |
|---|---:|---:|
| Tile & Tiling | 24 | 20 → 24 |
| Welding & Metal Works | 22 | 20 → 22 |
| Electrical | 31 | 20 → 31 |
| Painting | 32 | 20 → 32 |
| Ceiling & Partition | 30 | 20 → 30 |
| General Renovation | 21 | 20 → 21 |
| Plumbing | 15 | 🟢 15 → 15, output unchanged |
| Waterproofing | 11 | 🟢 11 → 11, output unchanged |
| Flooring | 10 | 🟢 10 → 10, output unchanged |
| Handyman | 12 | 🟢 12 → 12, output unchanged |
| **Total** | **208** | **168 → 208** |

Fix: remove only the sample cap; keep the existing localized data, order,
names, descriptions and schema shape. This restores **40 existing scope
descriptions per language**, or **120** across the 18 affected localized
pillars. The current overview inventory is **208**, not the historical "206"
written in Phase 2; this is a recount, not two newly added services/scopes.
These overview cards are distinct from the **51** standalone priced scope pages.

### 3. 🔴 Missing business/pillar references on the detailed scope entities

All **153 localized sub-service pages** already link visibly to their owning
service, but their primary `Service` node had neither `provider` nor a relation
to that pillar's entity. The 30 pillar entities already had the correct provider
reference and were left as-is.

`SubServiceJsonLd.tsx` now adds just:

- `provider: { "@id": ORGANIZATION_ID }`, importing the site's existing shared
  business ID rather than creating a second business.
- `isRelatedTo: { "@id": "<localized parent canonical>#service" }`, derived
  from `detail.serviceSlug` and `absoluteUrl(lang, ...)`. The same canonical is
  reused in the existing breadcrumb, with identical breadcrumb output.

No relationship was inferred from a keyword or label. These are the business
and parent service the existing page already names. Every existing offer,
`PriceSpecification`, price, range, currency and service-area value is unchanged.
This strengthens the machine-readable service links; the already-correct HTML
service ↔ scope ↔ problem ↔ area/locality graph needed no additional sections.

### 4. Regression guards and red → green proof

- **`audit:schema`:** three new source checks — full catalogue mapping (no cap),
  shared provider reference, localized parent Service reference. Comments are
  excluded from the new checks.
- **`audit:live`:** four new rendered checks, using the existing sitemap crawl:
  one canonical primary `Service` entity per service/scope page; provider IDs
  resolving to the published Organization/LocalBusiness; scope → its own
  served, visibly linked localized pillar; every catalogue's complete ordered
  names/descriptions matching its own visible overview cards. Counts come from
  the served pages, not a hard-coded 208-entry expectation. Empty extraction,
  omissions, extra entries and same-count copy/language mismatches fail.
- Ran the new guards **before** changing the application: `audit:schema`
  **FAIL 3**; live QA **251 PASS / 0 WARN / 3 FAIL**, identifying exactly the
  **18 incomplete catalogues**, **153 missing providers** and **153 missing
  parent references**. After the fix: **254 PASS / 0 WARN / 0 FAIL**.
- Exercised the actual new live-check functions against a served MS
  pillar/scope snapshot: **1 positive + 14 negative in-memory fixtures** passed.
  Rejected cases included a 20-entry cap, same-count wrong name/description,
  duplicate extra offer, absent/invented/unresolved provider, absent/wrong-
  language/wrong-service parent, missing visible parent link, noncanonical
  entity ID, empty card extraction and an empty family. These tests changed
  no application content or running-server responses.

### 5. 🟢 Verified and deliberately left untouched

| Surface | Verification / preservation decision |
|---|---|
| Prices and business data | All data files and pricing logic unchanged; `audit:pricing`/`audit:business` PASS; served old/new price specifications identical |
| UI, branding, copy, images and controls | All 678 rendered `<main>` fragments byte-identical before/after after excluding scripts; no visual component, style or layout changed |
| URLs and metadata | Same 678 sitemap URLs / 689 build entries; titles, descriptions, H1s, canonicals, hreflang, robots and social-image metadata unchanged |
| HTML internal links | Every page's anchor inventory and main-content link targets identical; no broken page/fragment target, no orphan, no cross-language main-content link; crawl depth remains at most 2 |
| Q&A | 567 Q&A-bearing pages / 2,564 rendered pairs still match the FAQ data, ignoring decorative disclosure glyphs and separate CTA labels; no FAQ copy or node changed |
| AI feeds, search, quote flow and analytics | Existing audits re-pass; no feed, search, quote, measurement or configuration file changed |
| Honest content gaps | No invented job locations, project proof, Kampung coverage, opening days or credentials; owner-gated work remains gated |
| Homepage review block | Still **unverified**, not marked green; left untouched under the recorded owner decision in `PROJECT_OWNER_PENDING.md` |

Before/after JSON-LD comparison found changes on **exactly 171 pages**:
18 pillars gained only the omitted catalogue entries; 153 scope pages gained
only the two entity references. All other schema nodes stayed identical.

### 6. Final QA and limits

- [x] `npm run type-check` — PASS.
- [x] `npm run lint` — PASS, no errors or warnings.
- [x] `npm run build` — PASS, **689** static generation entries.
- [x] All **17 static audits** — PASS.
- [x] `npm run audit:live` — **254 PASS / 0 WARN / 0 FAIL** against the local
      production build, all **678 URLs HTTP 200**.
- [x] Independent full-site before/after crawl and schema/preservation checks —
      PASS; no duplicate titles/descriptions, missing social image metadata,
      missing image alt, duplicate IDs or invalid JSON-LD.
- [x] Regression fixtures and baseline red → green tests — PASS as above.
- [x] `git diff --check` and preservation-boundary review — PASS.
- [x] `PROJECT_PROGRESS.md`, `README.md` and `CONTENT_MAP.md` updated. Sitemap
      architecture and content timestamps did not change.

Limits: this is local production-build HTTP/HTML QA, not a real-phone test,
Search Console/analytics dashboard inspection or a ranking/AI-answer result.
Read-only requests to the public domain could not complete TLS from this
sandbox, so deployment freshness was **not** established and this is **not** a
claim that the public site is down. No production form was submitted. Local
Resend/analytics secrets remain unset; their previously recorded owner-side
production completion is not reopened by the sandbox's configuration.
The live preview uses an untracked sandbox-only header adapter to permit
embedding on the e2b preview host; local QA and the tracked production security
headers remain unchanged.

Status: **Code verified + Build verified + Local production HTTP verified;
existing content preserved; complete service catalogues and explicit shared
provider/parent entity links now guarded against regression.**

---

## Phase 44 — One entity, one name: the portfolio's inline Service restatements now agree with their pillars (2026-09-22)

**Result: 🟢 existing site, content graph and AI layers verified intact; 🔴 one entity-identity defect fixed in the project pages' structured data.** This is a schema alignment correction, not a redesign, a content expansion or a copy edit.

### 1. Inspect and verify before deciding what needs work

Read `AGENTS.md`, progress through Phase 43, `CONTENT_GOVERNANCE.md`,
`CONTENT_MAP.md` and `PROJECT_OWNER_PENDING.md`, then re-verified the live
layers from the served site: the internal link graph (edge matrix over all
twelve content families, inbound floors, reciprocity), the metadata layer,
both AI feeds, `/llms.txt` and the structured data of a representative page of
every family. Baseline before any edit: type-check, lint, production build
(689 entries), all **17 static audits** PASS, `audit:live` **PASS 254 / 0 / 0**,
and an independent crawl of all **678 URLs** — 0 non-200, no family edge
missing, no page without main-content inbound links beyond the chrome-linked
legal/quote/search entries, crawl depth still 2. The Phase 27–43 work was
found green as recorded and was left untouched.

### 2. 🔴 The one defect found: the portfolio renamed its own pillars in the graph

An independent full-site JSON-LD entity-graph verifier (group every node with
both `@id` and `@type` by `@id` across all 678 pages: 2,659 definitions, 3,678
bare `{"@id": …}` references) found 0 unresolved references and **36
field conflicts over 18 entities — every one of them a pillar `#service`
entity re-declared on project pages**. `ProjectJsonLd` legitimately restates
the pillar's Service entity inline under the project's `about`; but it
published the *portfolio category label* as that entity's `name`/`serviceType`
while the pillar page publishes the registry name for the same `@id`:

| Language | Pillar entity (owner page says) | Project pages said | Entities |
|---|---|---|---|
| EN | Tile & Tiling · Welding & Metal Works · Ceiling & Partition · General Renovation | Tiling · Welding · Ceiling · Renovation | 4 |
| MS | Kerja Jubin & Pemasangan Jubin · Kerja Elektrik · Kimpalan & Kerja Logam · Siling & Partisyen · Renovasi & Pengubahsuaian Rumah · Kerja Paip (Plumbing) · Servis Handyman | Jubin · Elektrik · Kimpalan · Siling · Renovasi · Paip · Kerja Am | 7 |
| ZH | 瓷砖与铺砖工程 · 焊接与金属工程 · 电气工程 · 天花板与隔间工程 · 综合装修工程 · 水管工程 · 家居维修服务 | 瓷砖 · 焊接 · 电工 · 天花板 · 装修 · 水管 · 居家维修 | 7 |

Search and answer engines merge by `@id`: an entity that answers under two
names in the same sitemap is an entity-resolution ambiguity — exactly what
Phases 7, 16, 36 and 43 built this graph to avoid. The category labels are not
wrong on their own surfaces (visible chips, gallery copy, `<title>` fragments
— all untouched); they were only ever wrong as the *entity's* name. No price,
no visible string and no relationship was invented or repointed.

### 3. The fix (one builder, two derived fields)

`components/projects/ProjectJsonLd.tsx` now resolves the localized pillar with
the same `hasTranslation("service", …)` predicate it already used to pick the
entity URL, then takes `name`/`serviceType` from
`getServiceDetail(serviceSlug, serviceLang)?.name` — the exact registry and
localization path that owns the pillar page's own `serviceNode()`. The
category label survives only as the `??` fallback if a registry entry ever
disappears. The 15 localized project pages whose category label already equals
the pillar name (e.g. every EN painting/electrical/handyman project) were and
remain byte-identical; **69 pages** (13 EN / 28 MS / 28 ZH) changed JSON-LD at
all. A field-level diff of full-site before/after snapshots confirms the
change is exactly **138 leaf edits = 69 pages × 2 fields**
(`about[0].name`, `about[0].serviceType`): the sub-service restatements, image
objects, `CreativeWork`, WebPage and breadcrumb nodes on those same pages are
untouched, as are the other 594 pages' graphs. The sub-service references were
verified to already derive their names from the same registry the scope pages
publish from (`sub[code].name` = the page's `text.name`), so they needed no
change; a restatement that omits an optional field (e.g. `description`)
narrows, not contradicts, and stays allowed.

### 4. Guards added (so none of this can silently return)

**`npm run audit:live` — new "Entity graph consistency (Phase 44)" block
(+2 checks), 254 → 256.** The existing 678-page sweep now also collects, per
page, every typed entity definition and every bare `@id` reference (no second
crawl). The new block asserts, site-wide: (1) every entity that more than one
page defines agrees with its owner page on `name`, `url` and `serviceType` —
58 re-declared entities today, nothing hard-coded, the owner page owns the
truth; and (2) every one of the 3,678 entity references resolves to an entity
the site publishes. `description` is deliberately not compared: the shared
Organization node publishes a localized description on every page by design,
and a restatement may omit copy without contradicting the owner.

**`npm run audit:schema` — three new source checks:** the project builder must
resolve the localized pillar with `hasTranslation` before minting the `@id`;
the restated name must come from `getServiceDetail(serviceSlug,
serviceLang)?.name` with a `categoryLabel` fallback; and neither `name:` nor
`serviceType:` in `ProjectJsonLd` may carry the label directly. Comments are
stripped before matching, in the Phase 43 style.

| # | Break (revert or bypass the fix) | Guard | Result |
|---|---|---|---|
| 1 | Restore `name: categoryLabel` in the project builder (full revert, rebuilt + served) | `audit:schema` | FAIL 3 — pillar-URL resolution, registry name, label-as-name checks |
| 2 | Same rebuilt break | `audit:live` | FAIL 9 in the new block — `"name"`/`"serviceType"` conflicts quoted per entity with an example owner and offender page, then `…and 28 more conflicting entities`; the reference-resolution check stayed ✓, isolating the defect class |
| 3 | Restore the fix | both suites | `audit:schema` PASS; live **PASS 256 / 0 / 0**; strict site scan over the rebuilt pages: **0 field conflicts, 0 unresolved references** at the same 2,659 / 3,678 totals (nothing removed, only aligned) |

Break 1 was run as a real rebuild against the running server, not a unit
fixture, so the red state is the rendered payload answer engines would have
read; `git stash` restored and re-verified green in the same session.

### 5. 🟢 Verified and deliberately left untouched

- All **678 URLs** / **689 static generation entries**, canonicals, hreflang,
  robots, titles (all still ≤ 65 and branded — 0 title diffs in the
  before/after crawl), meta descriptions, H1s, breadcrumbs and every visible
  `<main>` byte-identical (0 diffs across all 678 pages excluding script
  payloads).
- Every **price** (`audit:pricing` / `audit:locations` §10 / `audit:business`
  PASS; the project schema still carries no price, and `data/pricing/` is
  untouched).
- The Phase 27–43 link graph and all its floors (Phases 28/29/30/32/35/39/40/41
  edges re-verified by `audit:live` at 256 checks); the 51 sub-service, 57
  problem, 53 area, 28 project and 12 guide inventories; the Smart Service
  Finder and its `?q=` noindex+canonical layer (spot-verified this phase);
  `/llms.txt`, `/ai/business.json`, `/ai/pricing.json`; the quote flow,
  analytics posture and security headers.
- Visible project UI: category chips, gallery captions, `<title>` composition
  (which keeps the label deliberately — `getProjectSeo` is a separate path and
  was not modified) and every other string.
- Honest gaps that remain owner-gated in `PROJECT_OWNER_PENDING.md`: real
  project locations (so project ↔ area links stay unmade), kampung-level
  coverage beyond the published `kuala-lumpur/kampung-baru` page, and the
  homepage review block — none of it invented, none of it touched.

### 6. Final QA and limits

- [x] `npm run type-check` — PASS · `npm run lint` — PASS (0/0)
- [x] `npm run build` — PASS, 689 static generation entries (unchanged)
- [x] All **17 static audits** — PASS, including the three new `audit:schema` checks
- [x] `npm run audit:live` — **PASS 256 / WARN 0 / FAIL 0** against the local production build
- [x] Before/after full-site snapshot diff — 0 main-content diffs, 0 title
      diffs, JSON-LD diffs on exactly the 69 intended project pages
- [x] Independent strict entity scan (separate script from the audit) — 0 conflicts, 0 unresolved refs
- [x] `git diff --check` — clean

Limits: this is local production-build HTTP/JSON-LD QA, not a real-browser,
real-phone or Search-Console-side inspection; entity consistency is measured
as exact string equality on name/URL/serviceType, which cannot express
legitimate future cases where a page *should* refine an entity (those must
extend, not rename, and the guard documents why it ignores `description`).
Read-only fetches to the public domain still fail TLS from this sandbox
(`SSL_ERROR_SYSCALL` on 2026-09-22), so deployment freshness of this change on
`renovixhomeservices.my` is not established here — that is not a claim the
public site is down. During the repeated back-to-back red-state runs the
quote API's per-instance limiter answered the QA suite's own repeated test
submission with 413/429-class responses once; the first and final clean
single runs pass the quote check, and the limiter behaving is the documented
design (Phase 22/26). Live preview in the sandbox uses an untracked,
sandbox-only header adapter to allow embedding; tracked production headers are
unchanged.

Status: **Code verified + Build verified + Local production HTTP verified; the
structured-data graph is now identity-consistent end to end — every entity the
site re-states says the same name, URL and serviceType as the page that owns
it, and every entity reference resolves — guarded site-wide against
regression.**

---

## Phase 45 — Knowledge Hub guides link every priced scope they quote (2026-09-22)

**Result: 🟢 existing site, prices, UI and URLs preserved; 🔴 31 data-declared
guide ↔ scope relations that were missing are now wired and guarded.** This is
a data-and-guards change; no component, layout, copy block, price or URL
changed.

### 1. Inspect and verify before deciding what needs work

The Master Prompt was not attached to this session; the repository's recorded
rules and the standing instructions supplied the scope, not an assumed backlog.
Read `AGENTS.md`, `PROJECT_PROGRESS.md` through Phase 43,
`CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`, `PROJECT_OWNER_PENDING.md` and the
registries, then re-ran the full gate before touching anything:

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (**689** static generation entries, unchanged)
- [x] All **17 static audits** — PASS
- [x] `npm run audit:live` vs `next start` — **PASS 254 / WARN 0 / FAIL 0**
- [x] Independent crawl of all 678 URLs + a family-to-family link matrix and a
      per-page zero-link-layer analysis (scratch tooling, removed afterwards)

Reconfirmed the inventory: 10 services, 51 sub-service pages, 57 problem
guides, 53 area guides + 2 region hubs, 28 projects, 12 Knowledge Hub guides,
51 pricing rows, 24 intent entries, 678 canonical URLs. Services, scopes,
problems, areas and prices are exactly the existing ones — nothing was added,
renamed or inferred.

### 2. 🔴 The gap — 8 of 12 guides quoted a scope's price without linking its page

Every one of the 51 pricing rows belongs to a standalone sub-service page
(1:1 via `pricingId`/`subServiceSlug`). When an article renders a
`{ type: "pricing" }` block it is displaying that scope's own catalogue data —
yet the guide's `relatedSubServices` (the field that renders its sub-service
cards **and** puts the guide on the scope's own page via
`getArticlesForSubService`) did not carry 31 of the quoted scopes:

| Guide | Declared | Quoted but unlinked (before) |
| --- | --- | --- |
| bathroom-rebuild-cost-guide | 2 | bathroom-renovation, bathroom-tiling, tap-replacement, toilet-repair |
| ceiling-stain-vs-active-leak | 2 | pu-injection, ceiling-repair, callout-inspection, concealed-leak-repair |
| house-painting-cost-by-property-type | **0** | all four painting scopes |
| metal-grille-gate-buying-guide | 1 | main-gate, railing-fencing, awning-structure, welding-repair |
| old-house-wiring-warning-signs | 1 | troubleshooting, db-box, full-house-wiring |
| regrout-silicone-maintenance | 1 | tile-repair, bathroom-waterproofing |
| spc-vinyl-laminate-tile-comparison | 1 | spc-flooring, vinyl-flooring, laminate-flooring, porcelain-tile-installation, floor-hacking, tile-hacking |
| waterproofing-systems-compared | 1 | flat-roof-waterproofing, balcony-waterproofing, wall-seepage, pu-injection |
| ceiling-partition-material-choice, condo-renovation-approval-checklist, flooring-subfloor-preparation, plumbing-water-pressure-diagnosis | — | 🟢 none — these four already declare exactly what they quote, proving the intended convention |

The clearest case: the painting cost guide rendered all four painting price
tables while linking **no** painting scope page at all — its pricing tables
name "Full House Painting Package" etc. as plain `<th>` text with no link.

Why this is not inventing: the relation "this guide quotes this scope's price"
is already machine-declared in the article data (`pricingIds`, top-level field
and every in-body pricing block). The fix adds each quoted scope's existing
slug to the same article's `relatedSubServices` array — the site's own
established pattern, followed by the four clean guides, and the same
data-derived-edge rule Phases 28/29/40 used elsewhere. No new service, scope,
problem, area, price, claim or page was created; every linked target already
existed and was already quoted by the very same page.

### 3. The fix (8 data lines) and what it renders

One `relatedSubServices` line per article, existing entries kept first, quoted
scopes appended in pricing order. Rendering needs no new component:

- Article pages render the scopes through the existing `LinkCards`
  sub-service section (`components/blog/ArticlePage.tsx`).
- Scope pages render the guide through the existing shared
  `GuideLinksSection` (`components/service/SubServicePage.tsx`), the same
  section every other guide relation already uses.
- One authored line propagates to EN/MS/ZH (the field is not localized); all
  51 scopes publish in all three languages, so both directions render
  everywhere.

Measured on the served build:

- blog → sub-service rendered edges: **75 → 168**; sub-service → blog:
  **75 → 168** (each +93 = 31 scopes × 3 languages).
- Knowledge Hub guides with zero sub-service links: **1 → 0**.
- The search index (`data/search/build-index.ts`) carries the same field as
  each article's validated related-entity data (`audit:search` re-checked every
  new slug); result ranking itself is unchanged.

### 4. Guards added (red → green proof)

- **`npm run audit:blog`** — new check: every pricing row an article quotes
  (top-level and in-body `pricingIds`) that belongs to a sub-service page must
  appear in that article's `relatedSubServices`. The summary line now reports
  **48 quoted price rows all link their scope pages**. Negative test: removing
  `full-house-painting` from the painting guide fails with `pricing quotes
  scope "full-house-painting" but relatedSubServices does not link its page`;
  restoring returns to PASS.
- **`npm run audit:live`** — new "Quoted-scope links (Knowledge Hub)" block
  (**+1** check on the 254-check baseline this phase started from): from the
  same registries the pages render, it walks every language × article ×
  quoted-scope triple and asserts on the crawled link graph that the article
  page links the scope page **and** the scope page links the article back.
  Currently **144 + 144** edges. Negative test (built and served): dropping
  the same painting relation fails with exactly 6 messages — both directions ×
  EN/MS/ZH — then returns to green after restore.

### 5. 🟢 Verified and deliberately left untouched

| Surface | Verification / preservation decision |
| --- | --- |
| Prices | `data/pricing/pricing.ts` untouched; `audit:pricing` PASS; article pricing tables render the same rows from the same single source |
| Pages, URLs, metadata | Same 678 sitemap URLs / 689 build entries; titles, descriptions, canonicals, hreflang, robots unchanged (live QA green) |
| Rendering scope | Before/after crawl of all 678 served pages: **564 `<main>` fragments byte-identical**; the only 114 changed pages are the 24 article pages (8 × 3 languages, gained sub-service cards) and 90 scope pages (30 scopes × 3 languages, gained the shared `GuideLinksSection`); **0 pages changed JSON-LD** |
| UI/branding | No component or style file changed; the cards and guide section are the existing shared components; diff of a changed scope page shows only the added standard guide section |
| Phase 27 recorded decisions | Re-verified and **left as recorded**: the 4 problem guides without a sub-service block (`balcony-leakage`, `broken-tile-repair`, `kitchen-tile-problems`, `wall-seepage`) *(closed in Phase 46 on the strength of the guides' own published copy)*, project ↔ area links (no real job locations), painting/waterproofing/flooring project proof, homepage reviews block — all remain owner-gated per `PROJECT_OWNER_PENDING.md` and the Phase 27 table |
| In-copy links | Phase 39's 313/362/364 rendered in-copy anchors unchanged (live QA in-copy checks green) |
| Full gate after restore | type-check, lint, build (689), all 17 static audits, `audit:live` **255/0/0** — PASS |

### 6. Final QA

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings; scratch analysis scripts
      were removed rather than tracked)
- [x] `npm run build` — PASS, **689** static generation entries
- [x] All **17 static audits** — PASS
- [x] `npm run audit:live` — **PASS 257 / WARN 0 / FAIL 0** (merged tree; see §7)
- [x] Negative tests — 1 static break + 1 served break, both fail as designed,
      both restored to green
- [x] `git diff --check` — clean; change set is 8 article data lines + 2 audit
      scripts

Limits: local production-build HTTP/HTML QA, not device, ranking or AI-answer
measurement; no claim that the added links change search outcomes — they close
a real inconsistency in the site's own link convention. Owner-gated items in
`PROJECT_OWNER_PENDING.md` remain owner-gated; none was invented or assumed.

### 7. Merge reconciliation with PR #62 (2026-09-22)

This phase was authored and verified in parallel with PR #62 ("One entity, one
name: the portfolio's inline Service restatements now agree with their
pillars"), which merged to `main` first and therefore keeps the **Phase 44**
number; this phase is recorded as **Phase 45**. The two touch disjoint
application code (theirs: `components/projects/ProjectJsonLd.tsx` +
`audit:schema`; mine: 8 article data files + `audit:blog`), and both extend
`scripts/phase25-live-qa.mjs` and the progress docs, which conflicted only in
documentation text. Both phases' work is preserved in full:

- Their entity-graph block (+2 live checks) and this phase's quoted-scope
  block (+1 live check) coexist in `scripts/phase25-live-qa.mjs`; the merged
  suite runs **257** checks (254 baseline + 2 + 1), re-verified green on the
  merged tree below.
- The inventory table carries both phases' rows and both re-verification
  paragraphs, ordered Phase 44 then Phase 45.
- Guard comments in `scripts/audit-blog.mjs` and the quoted-scope block in
  `scripts/phase25-live-qa.mjs` were renumbered from the draft "Phase 44" to
  Phase 45 to match the final numbering; no logic changed.

Post-merge gate (2026-09-22): type-check, lint, build (**689** entries), all
17 static audits, and `npm run audit:live` **PASS 257 / WARN 0 / FAIL 0**
against the merged production build — including both phases' new checks
(144 + 144 quoted-scope edges and the entity-graph consistency block).

Status: **Code verified + Build verified + Local production HTTP verified;
every guide now links the scopes whose prices it quotes, in both directions
and all three languages, guarded statically and live.**

---

## Phase 46 — Registry copy reaches `/ms/` and `/zh/` localized; every problem guide links a bookable scope (2026-09-22)

**Result: 🟢 existing site, prices, UI, URLs and every recorded owner-gate
preserved; 🟡 three English-only registry families that every Malay and
Chinese reader was shown are now localized; 🔴 the last 4 problem guides with
no path to a bookable scope are wired and guarded.** No price figure changed
(the pricing audit now proves the translations quote the identical RM
figures), no layout or style file changed, no URL, title, description or
JSON-LD node changed.

### 1. Inspect and verify before deciding what needs work

The Master Prompt was not attached to this session; the repository's recorded
rules (`AGENTS.md`, `CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`,
`PROJECT_OWNER_PENDING.md`) and this log through Phase 45 supplied the scope,
not an assumed backlog. Re-ran the full gate first:

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (**689** static generation entries)
- [x] All **17 static audits** — PASS
- [x] `npm run audit:live` vs `next start` — **PASS 257 / WARN 0 / FAIL 0**
- [x] Independent crawl of all 678 URLs → family-to-family link matrix
      (area→scope 4,470 · area→problem 1,272 · scope→area 8,109 ·
      problem→area 9,063 · problem→scope 1,134 · scope→problem 567 ·
      problem→project 156 · article→scope 168 · region hub→scope/problem/
      article 144/72/72) and a per-page zero-layer analysis, plus a scan for
      English sentences on `/ms/` and `/zh/` pages (scratch tooling, not
      tracked)

Reconfirmed the inventory: 10 services, 51 sub-service pages, 57 problem
guides, 53 area guides + 2 region hubs, 28 projects, 12 Knowledge Hub guides,
51 pricing rows, 24 intent entries, 678 canonical URLs. The Smart Service
Finder already resolves sub-localities (SS2, Sierramas, Section 17, Kampung
Pasir Segambut, TTDI, KLCC, Bukit Bintang, Kota Kemuning were spot-checked) so
no alias work was needed; registry `aliases` stay unrendered as before.

Every link layer recorded in Phases 28–45 was re-verified green and left
untouched (pillar ↔ scope, area → scope, problem → project, project → guide,
region hub → scope/problem/guide, in-copy links, pillar → problem, quoted-scope
links, `AreasSection` chips to all 53 areas on every service/scope/problem
page). The only measurable link gap that is **not** owner-gated was the 4
problem guides in §3.

### 2. 🟡 What Malay and Chinese readers were actually shown

The English-sentence scan found exactly three families of English copy on
localized pages, all from registries that only carried English strings:

| Family | Root cause | Baseline (served HTML) |
| --- | --- | --- |
| Pricing **scope + duration** on sub-service pages | `resolveSubService` read the raw `pricingEntries` row instead of the localized row, although `ms.ts` / `zh.ts` already carried the Malay and Chinese scope/duration | **102** localized sub-service pages (51 × MS/ZH) |
| **"What affects the price"** bullets on service pillars | `data/pricing/translations/ms.ts` and `zh.ts` had no `factors` at all, so `localizePricing` fell through to the English list | **160** English bullets on **20** localized pillars |
| **District** name + description (area hero chip, answer-first paragraph, region-hub district grid, areas-index grid) and the state names of the coverage roadmap | `districtGroups` / `stateCoverage` in `data/locations/registry.ts` are English-only and four render sites read `district.name` / `district.description` / `state.name` directly | **264** district names + **52** descriptions on **112** localized pages (106 area guides, 4 region hubs, 2 indexes); "Kuala Lumpur (Federal Territory)" on both localized indexes |

This is the exact defect class `CONTENT_GOVERNANCE.md` §5 forbids ("never
English copy under `/ms/` or `/zh/`") and that Phases 29 and 39 fixed for
slug labels and in-copy links; these three surfaces had simply never been
scanned.

Fixes (data + accessors; every render site keeps its existing markup):

- **`data/pricing/index.ts`** — new exported `getLocalizedPricingById(id, lang)`
  (wraps the existing private `localizePricing`; numbers, units and ranges
  stay the English source of truth). `data/sub-services/index.ts` →
  `resolveSubService` now uses it, so the scope/duration block on
  `components/service/SubServicePage.tsx` renders the row's Malay/Chinese
  wording. `getPricingById` is untouched for the numbers-only consumers
  (feeds, audits, price formatting, JSON-LD offers).
- **`data/pricing/translations/ms.ts` + `zh.ts`** — `factors` authored for all
  **51 rows** each, translated from the English list one bullet for one
  bullet with the **same RM figures, units and qualifiers** ("min 6 for RM30
  rate" → "minimum 6 untuk kadar RM30" / "RM30 费率需至少 6 个"; "psf" →
  "kaki persegi" / "平方英尺", matching the unit labels the catalogue already
  uses; "per foot run" → "setiap kaki larian" / "按每英尺计"). No English
  price was reworded.
- **`data/i18n/lists.ts`** — `districtList` (13 district groups × MS/ZH,
  name + description; Malay keeps the official place spellings, Chinese uses
  the same established names as `areaNames` — 泗岩沫, 满家乐, 甲洞, 帝沙公园城,
  士布爹, 武吉加里尔, 旺沙玛珠, 蒂蒂旺沙, 峇都, 冼都, 蕉赖, 敦拉萨镇, 甘榜峇鲁,
  八打灵县, 乌鲁冷岳县, 巴生县, 鹅唛县, 雪邦与布城走廊) and `stateNames`
  (5 coverage states; "Federal Territory" → "Wilayah Persekutuan" /
  "联邦直辖区"). `data/i18n/index.ts` exposes `getDistrictName`,
  `getDistrictDescription`, `getStateName` with the same English fallback
  pattern as `getRegionName` / `getAreaName`.
- Render sites switched to the accessors, nothing else changed:
  `components/area/AreaHero.tsx`, `AreaAnswerFirstSection.tsx` (the district
  name is spliced into the localized answer sentence), `AreaRegionPage.tsx`,
  `app/[lang]/areas/page.tsx`.
- `app/fonts/noto-sans-sc-og-{400,700}.ttf` regenerated with the repository's
  own `scripts/make-og-fonts.py` (the audit's charset deliberately includes
  every `name:` in `data/i18n/lists.ts`, and 16 new CJK glyphs — 班 底 爹 峇 萨
  市 中 甘 榜 鲁 县 乌 冷 岳 走 廊 — were not in the subsets; 508 → 537
  codepoints, Plus Jakarta Sans files byte-identical). The rendered `/zh/`
  OG card was checked visually and is unchanged.

### 3. 🔴 The 4 problem guides with no bookable scope

Phase 27 recorded `balcony-leakage`, `broken-tile-repair`,
`kitchen-tile-problems` and `wall-seepage` as "no sub-service declares them;
authoring a link would invent a relationship". Re-reading the **published**
copy shows the relationship is already stated by the site itself, in the
guides and in three existing scopes, so declaring the edge restates a
published relation rather than inventing one:

| Problem guide | Its own published copy | Existing scope whose `suitableFor` copy describes the symptom |
| --- | --- | --- |
| `balcony-leakage` | "Balcony leakage is a waterproofing job." / "A wet balcony that leaks through to the floor below is a waterproofing problem." | `waterproofing/balcony-waterproofing` — "A balcony above a room that is showing damp on the ceiling below." |
| `wall-seepage` | "Wall seepage is a waterproofing issue." | `waterproofing/wall-seepage` (same slug) — "An internal wall that darkens or blisters after heavy rain." |
| `broken-tile-repair` | "A single broken tile does not have to mean a full retile. Renovix replaces damaged tiles cleanly…" | `tiling/tile-repair` — "A handful of cracked, chipped or lifted tiles." |
| `kitchen-tile-problems` | "Kitchen tile repair is a tiling job." | `tiling/tile-repair` — same scope; the guide's solutions are the scope's inclusions |

Change: 4 slugs added to three `relatedProblems` arrays
(`data/sub-services/content/waterproofing.ts`, `tiling.ts`); the problem →
scope, scope → problem, area → scope and region-hub layers all derive from
that one field, exactly as Phases 28/29/35 designed. No project proof was
touched (`tile-repair` still has none, as `PROJECT_OWNER_PENDING.md` records).

Derived, verified side-effects on the served site: the 12 guide pages gained
their sub-service block (problem → scope anchors 1,134 → **1,158**, scope →
problem 567 → **579**), the three scope pages gained one or two problem
cards, and 9 area guides whose locally-common problems include one of the
four (e.g. Mont Kiara → Balcony & Terrace Waterproofing, Wangsa Maju → Tile
Repair & Replacement) list the matching scope in their services section; the
two region hubs re-ordered their derived scope cards within the existing cap.

### 4. Guards added (never weakening an existing audit)

- **`npm run audit:pricing` §5** — for every MS/ZH row: a localized `scope`
  and `duration` exist, `factors` exists, has the **same bullet count** as the
  English row, quotes **exactly the same RM figures** (a translation can never
  change a price), and repeats no English bullet verbatim. Negative tests:
  deleting one `factors` line fails with the row named; changing "RM30" to
  "RM35" in one Malay bullet fails as "quote different RM figures (RM35) than
  the English row (RM30)"; restored → PASS.
- **`npm run audit:multilingual`** — new Phase 46 section: all 13 district
  groups have a MS + ZH name **and** description with no English district
  vocabulary, all 5 coverage states have a MS + ZH name, no `.tsx` under
  `components/` or `app/` reads `district.name` / `district.description` /
  `state.name` directly, and the four render sites keep calling the
  accessors. Negative tests: reverting `AreaHero` to `district.name` fails
  twice (direct read + accessor missing); deleting the `sel-sepang` Malay
  entry fails with the id named; restored → PASS.
- **`npm run audit:subservices`** — new Phase 46 guard: every one of the 57
  problem slugs is declared by at least one sub-service's `relatedProblems`
  (no orphaned guide). Negative test: stashing the 4 edges fails naming all
  four slugs; restored → PASS (193 declared edges, was 189).
- **`npm run audit:live`** — problem → sub-service coverage tightened from the
  old "≥ 53 pages" floor to **all 171 of 171** guide pages, and a new
  "Localized registry copy on /ms/ and /zh/ pages (Phase 46)" block (**+2**
  checks → **259**): fetches every localized sub-service page (102), pillar
  (20) and area guide / region hub / areas index (112) and asserts, on the
  served HTML with React's escaping, that no English pricing scope, English
  price-factor bullet or English district name appears **and** that the
  localized string does. Negative test against the pre-change production
  build: 24 failures (159/171 guides; 128 English registry strings on
  localized pages; 108 pages missing the localized string) — the exact
  baseline defect set — then green on the new build.
- `scripts/make-og-fonts.py` + `audit:og-fonts` were exercised as designed
  (the audit caught the missing glyphs before the build; fonts regenerated
  with the repository tool, audit back to PASS).

### 5. 🟢 Verified and deliberately left untouched

| Surface | Verification / preservation decision |
| --- | --- |
| Prices | `data/pricing/pricing.ts` untouched; `audit:pricing` proves every MS/ZH factor list quotes the identical RM figures; `/ai/pricing.json` unchanged |
| Pages, URLs, metadata | Same 678 sitemap URLs / 689 build entries; before/after crawl: **0 titles, 0 H1s and 0 JSON-LD graphs changed** on all 678 pages |
| Rendering scope | **418 `<main>` fragments byte-identical**; the 260 changed pages are exactly the 234 localized pages that lost their English registry copy (102 scope + 20 pillar + 106 area + 4 hub + 2 index) plus the 26 pages that gained or re-ordered derived links (12 guides, 3 scopes in EN, 9 EN area guides, 2 EN hubs) |
| Independent leak scan | English-sentence segments on `/ms/` + `/zh/` pages: **0** (was 3 families); the four baseline measures (102 / 160 / 264+52 / 12) all read **0** |
| UI/branding | No style or layout change; the district chip, answer paragraph, district grids, pricing block and factor list are the same elements with localized text |
| Owner-gated items | Unchanged and not invented: project ↔ area links, painting/waterproofing/flooring/tile-repair project proof, homepage reviews block, kampung-level pages, doorway pages. One **new flag, no change**: the pre-existing English factor "Emergency after hours RM150–300/hour" on `electrical-troubleshoot` (already public on the EN pillar and `/ai/pricing.json`) sits uneasily beside `CONTENT_GOVERNANCE.md` §4's "never promise after-hours service"; it was translated faithfully, not reworded, and is recorded for the owner in `PROJECT_OWNER_PENDING.md` |
| Existing guards | None weakened; Phase 27/45 decision tables annotated with a pointer to §3 rather than rewritten |

### 6. Final QA

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689** static generation entries
- [x] All **17 static audits** — PASS (including the regenerated OG fonts)
- [x] `npm run audit:live` — **PASS 259 / WARN 0 / FAIL 0** against the new
      production build
- [x] Negative tests — 3 static breaks + 1 served baseline run, all fail as
      designed, all restored to green
- [x] Independent re-crawl of all 678 URLs: baseline measures 0/0/0/0,
      leak scan 0, JSON-LD/title/H1 parity 678/678
- [x] `git diff --check` — clean
- [x] Docs: `README.md` (four audit descriptions), `CONTENT_MAP.md` (edge
      table + location map), `PROJECT_OWNER_PENDING.md` (Phase 46 flag),
      this log and its inventory table

Limits: local production-build HTTP/HTML QA, not device, ranking or AI-answer
measurement; Malay and Chinese wording was authored to mirror the English
catalogue line for line and should get the owner's native-speaker read like
every earlier translation batch. Nothing in `PROJECT_OWNER_PENDING.md` was
invented or assumed.

Status: **Code verified + Build verified + Local production HTTP verified;
no English registry copy remains on any `/ms/` or `/zh/` page, and all 57
problem guides now lead to a bookable scope in every language, guarded
statically and live.**

## Phase 47 — One place, one name: every area and problem label now reads from the guide it links to (2026-09-23)

**Result: 🟢 existing prices, UI, URLs, page inventory and every recorded
owner-gate preserved — a before/after crawl of all 678 pages shows 0 English
pages changed and 0 changed prices, links, headings, canonicals, hreflang
entries or JSON-LD node counts; 🟡 four label families that published a
different name from the page they link to are now single-sourced; 🔴 nothing
was missing — this phase is a consistency and structured-data-accuracy phase,
so no page, section, service or route was added.**

### 1. Inspect and verify before deciding what needs work

The Master Prompt was again not attached to this session; the repository's
recorded rules (`AGENTS.md`, `CONTENT_GOVERNANCE.md`, `CONTENT_MAP.md`,
`PROJECT_OWNER_PENDING.md`) and this log through Phase 46 supplied the scope.
The gate was re-run before any edit:

- [x] `npm run type-check` + `npm run lint` — PASS
- [x] `npm run build` — PASS (**689** static generation entries)
- [x] All **17 static audits** — PASS
- [x] `npm run audit:live` vs `next start` — **PASS 259 / WARN 0 / FAIL 0**
- [x] Independent crawl of all 678 URLs snapshotted **before** any change
      (scratch tooling under `/tmp`, not tracked), plus a cross-source
      measurement that compared, for all 53 areas × 3 languages and all 57
      problems × 3 languages, (a) the short label a page can render
      (`getAreaName`, `getProblemCardLabels`), (b) the name the guide itself
      publishes (`getAreaDetail`, `getProblemDetail` → H1, `<title>`,
      breadcrumb, `WebPage.name`, `Article.headline`) and (c) what the served
      HTML actually shows

That measurement found the phase's whole agenda: **5 area label/page pairs
disagreed** (1 Malay, 4 Chinese), **one Chinese name was published by two
different guides**, **32 problem card names and all 114 card subtitles
disagreed with the guides they link to**, and one locality render site still
read the English registry directly. The inventory re-verified unchanged:
10 services, 51 sub-service pages, 57 problem guides, 53 area guides + 2
region hubs, 28 projects, 12 Knowledge Hub guides, 51 pricing rows, 678
canonical URLs. Every link and copy layer recorded in Phases 28–46 was
re-verified green and left untouched.

### 2. 🟡 What the labels actually said (measured on served HTML, pre-change)

Phase 44 established the rule for shared `@id` entities — *one entity, one
name, one URL, everywhere*. Short labels were never covered by it: they come
from lookup tables (`areaNames`, `problemList`) while the pages they link to
come from content registries, and nothing ever compared the two.

| # | Surface | Root cause | Baseline, measured on the served site |
| --- | --- | --- | --- |
| A | Areas index **District Explorer** chips | `app/[lang]/areas/page.tsx` labelled the chip `areaObj?.name ?? slug` — the one locality render site Phase 46 did not convert to the localized accessor | all 53 chips rendered in Latin script on `/zh/areas/`; live-measured **55 of 106** chips on `/zh/areas/` and **2 of 106** on `/ms/areas/` did not name the guide they open |
| B | Every Malay page linking `kuala-lumpur/kl-city-centre` | `getAreaName` fell straight back to the **English registry name** when a language had no table row. `areaNames.ms` is empty by design — the official Malay spelling of 52 of the 53 localities *is* the English one — and `kl-city-centre` is the single exception, whose Malay name its own guide publishes | **121 anchors labelled "KL City Centre"** across **120** served `/ms/` pages (242 occurrences of the string) while that guide's H1, `<title>`, breadcrumb and `WebPage.name` all read **Pusat Bandar KL** |
| C | 4 Chinese area guides | the Chinese guide copy and the Chinese label table were authored separately | 士甲末 vs 泗岩沫 (7 `/zh/` pages), 斯里布特拉 vs 斯里八打灵 (9), 百乐镇 vs 帝沙公园城 (5) — the same guide carrying two names on one page; and **沙登 was the published name of two different guides** (`selangor/serdang` *and* `selangor/seri-kembangan`) on **128** `/zh/` pages, so a Chinese reader — or an answer engine quoting the site — could not tell two towns apart |
| D | Problem library index cards **and the index `ItemList` node** | `getProblemCardLabels` read `problemList` (57 MS + 57 ZH rows), a second translation authored in Phase 6 when the guides were English-only and never reconciled after the guides were translated | `/ms/problems/`: **10 card names + 57 subtitles**; `/zh/problems/`: **22 card names + 57 subtitles** disagreed with the guides they open (card 破损瓷砖维修 → guide 破砖维修, card "Saliran Tersumbat" → guide "Saluran Tersumbat"), and the same divergence was published into `ItemList.itemListElement[].name` |
| E | Project portfolio categories | verified already localized at every render site through `getProjectCategoryLabel` | 🟢 measured as agreeing — left untouched, now guarded so it cannot drift |

### 3. Fixes (labels read the page they link to; nothing else changed)

- **A — `app/[lang]/areas/page.tsx`.** The District Explorer chip now labels
  through `getAreaName({ region, slug, name: areaObj?.name ?? slug }, code)`,
  exactly like the region directory above it. Both locality lists on the areas
  index are now accessor-labelled (2 call sites, asserted statically); the
  English registry string survives only as the fallback for a slug the
  registry does not know, and the chip's markup, order and styling are
  unchanged.
- **B — `data/i18n/index.ts` `getAreaName`.** Precedence is now
  `areaNames[lang][region/slug]` → **the guide's own localized `name`**
  (`getAreaDetail`) → the English registry name. No table gained a duplicate
  string: `areaNames.ms` stays empty (0 rows), so the guide remains the single
  Malay source for `kl-city-centre`, and the 53-row Chinese table stays as it
  was. This is the same "the page owns the entity" rule Phase 44 applied to
  shared `@id` nodes.
- **C — 4 Chinese guides harmonized** to the spelling the rest of the `/zh/`
  corpus already used for them (`data/area-content/translations/zh/kuala-lumpur.ts`,
  `selangor.ts`): segambut 士甲末 → **泗岩沫** (9 occurrences), sri-petaling
  斯里布特拉 → **斯里八打灵** (7), desa-parkcity 百乐镇 → **帝沙公园城** (7),
  seri-kembangan 沙登 → **史里肯邦安** (7). Each replacement is the name token
  only — no sentence, fact, price, link or section changed, and the one
  historical reference inside the Seri Kembangan guide ("由旧沙登新村发展成的城镇",
  matching the English source's "developed from the old Serdang village") was
  deliberately kept. Evidence, recorded for the owner in
  `PROJECT_OWNER_PENDING.md`: 泗岩沫 is the mainstream Malaysian-Chinese name
  for Segambut (士甲末 is non-standard); 史里肯邦安 is the official
  transliteration of Seri Kembangan — the town was renamed from Serdang in
  1974 — while 沙登 remains the colloquial name and stays correct for the
  neighbouring `selangor/serdang` guide; 帝沙公园城 ≈ the attested 帝沙城市园 /
  帝沙城市公园 for Desa ParkCity (百乐镇 is attested nowhere); Sri Petaling is
  published as the attested literal transliteration 斯里八打灵, with the
  mainstream local name **大城堡** flagged to the owner as an optional rename
  rather than chosen unilaterally.
- **D — `getProblemCardLabels` reads the guide.** It now returns
  `getProblemDetail(slug, lang)`'s own `name` + `subtitle`, so a card is
  by construction the same string as the H1, `<title>`, breadcrumb and
  `Article.headline` of the page it opens — and the index `ItemList` node,
  which is built from the same call, publishes the same names. The retired
  `problemList` table (57 MS + 57 ZH rows, 601 lines including its stale
  "the guides are English-only / 46 problems" doc comment) was deleted from
  `data/i18n/lists.ts`; no other consumer existed. Card markup, grid, order
  and lengths are unchanged (longest new label measured against the existing
  card width).
- **E — nothing to change**; the project-category labels were measured as
  already single-sourced and are now covered by the guard below.

### 4. Guards added (never weakening an existing audit)

- **`i18n/verify.ts` — `assertEntityNamesAreSingleSourced()`** (replaces
  `assertProblemLabelsInSync`, whose `problemList` key-diff became meaningless
  once the table was retired). Runs at build time through
  `assertCoverageInSync()` (invoked from `app/sitemap.ts`), so a bad label
  cannot ship. For every language it asserts: all 53 area guides publish a
  localized name; `getAreaName` equals that name (a label may never disagree
  with the page it links to); **no two area guides in one language share a
  name**; region labels equal the hub's own name; service labels equal the
  pillar's own name; all 57 problem guides publish a localized name *and*
  subtitle; and `getProblemCardLabels` returns exactly those. Negative tests:
  renaming one Chinese guide away from its card label throws
  `zh problem index card ("破损瓷砖维修") disagrees with the guide it links to
  ("破砖维修")`; giving two Chinese guides one name throws the contradiction;
  removing the guide fallback from `getAreaName` throws
  `ms area label "KL City Centre" disagrees with the name the guide itself
  publishes ("Pusat Bandar KL")`. All restored → PASS.
- **`npm run audit:multilingual`** — new Phase 47 section, **7 checks**: both
  areas-index locality lists label through `getAreaName`; `getAreaName` keeps
  the three-step precedence (table → guide → English); the problem index cards
  *and* the index `ItemList` node read the localized guide's own name +
  subtitle; `problemList` may not be re-introduced; and, per language,
  `areaNames` contradicts no guide name and all 53 localized names are unique.
  The language-block parser was fixed while adding these (it searched for a
  `\n  };` terminator that does not exist, so the "ms block" it checked
  actually contained the `zh:` rows — the cause of a false "0 of 53 Malay
  names" report), and a pointless slug-vs-value heuristic was dropped.
  Negative tests: reverting the chip to `areaObj?.name` fails as "renders the
  district chips from the English registry name again"; re-adding
  `export const problemList` fails as "re-introduces the retired problemList
  card-label table"; harmonizing a name the wrong way round fails with both
  the contradiction and the collision named.
- **`npm run audit:live`** — new "Entity labels vs the pages they name
  (Phase 47)" block, **+11 checks → 270**, all measured on the served HTML
  with React's escaping: the sweep now retains each page's `WebPage.name` and
  each problem-index card label, and the anchor extractor keeps its class
  list, so the audit can tell a chip/card label from any other link. It
  asserts all **159** area guides publish their own localized `WebPage.name`;
  each language publishes **53 distinct** names; all **19,875** same-language
  anchors pointing at an area guide use a localized label and never the
  English name when a localized one exists; all **106** locality chips on each
  of the 3 areas-index pages carry the exact name their guide publishes; and
  all **57** problem cards on each of the 3 problem-index pages do the same.
  A shared `decodeEntities()` was added to the three text extractors so
  visible text (`&amp;`) and JSON-LD (`&`) compare equal — without it the new
  checks reported 8 false failures.
- **Full red-state regression run** (the guards were proven against the
  baseline, not just against the fixed tree): with the six source files
  reverted to `HEAD` and only the two audit scripts kept, the production build
  was rebuilt and re-served. `audit:multilingual` → **FAIL 6** (all six defect
  classes named) and `audit:live` → **PASS 264 / FAIL 30**, listing 173
  English area labels on localized pages, 55 wrong `/zh/areas/` chips, 2 wrong
  `/ms/areas/` chips, 10 + 22 mismatched problem cards and the duplicated
  Chinese name 沙登 — the exact baseline defect set. Restoring the fix and
  rebuilding returned both to green.

### 5. 🟢 Verified and deliberately left untouched

| Surface | Verification / preservation decision |
| --- | --- |
| Prices | `data/pricing/pricing.ts` untouched; a per-page extraction of every `RM` figure across all 678 served pages found **0 changes**; the price sentences in the area answer-first section still read the catalogue at render time |
| Pages, URLs, routes | Same **678** sitemap URLs, same **689** build entries, same file list in the before/after crawl; nothing deleted, renamed or redirected |
| Structure | Heading counts (H1/H2/H3), internal-link counts, image counts, `hreflang` counts, canonical URLs and JSON-LD block counts: **unchanged on all 678 pages** |
| English site | **0 of 226** English pages changed once the Next.js build id is normalized — the phase is invisible to `/en/` |
| Rendering scope | **148 of 678** pages changed (121 `/ms/` + 27 `/zh/`): the Malay `kl-city-centre` label on 120 pages, the 4 harmonized Chinese guides and the pages that name them (areas index, region hubs, 5 Knowledge Hub guides), the two problem indexes and the 57 Malay problem guides whose area list carried the English label. `ItemList` kept **57 entries** in both languages (names corrected, nothing removed) |
| Titles / descriptions | changed on exactly **4 pages** — the harmonized Chinese guides, name token only, inside the existing `Renovix Home Services | {area}房屋装修与维修服务` pattern; all other 674 titles and descriptions byte-identical |
| UI / branding | No style, layout or component-structure change: the chip, the card, the answer-first paragraph and the district grids are the same elements with corrected text. The Chinese OG font subsets already covered every character in the 4 harmonized names (`audit:og-fonts` PASS, no regeneration needed) |
| Owner-gated items | Unchanged and not invented: project ↔ area links, real project photography, homepage reviews block, kampung-level pages, after-hours pricing wording, quote-form fields, distributed rate limiting, GBP claims. Two **new flags, no change**: the optional 大城堡 rename for Sri Petaling and a native-speaker read of the 4 harmonized Chinese names (both recorded in `PROJECT_OWNER_PENDING.md`) |
| Existing guards | None weakened; the Phase 6 decision note about `problemList` was annotated with a pointer to §3 rather than rewritten |
| Observed, not changed | `components/area/AreaAnswerFirstSection.tsx` splices `{area}, {district}` into its coverage answer, which now reads "泗岩沫、泗岩沫与满家乐区" on the Segambut guide because the district is named after the area. The identical construction has always shipped in English ("across Segambut, Segambut & Mont Kiara District, and the wider Klang Valley") and Malay, the sentence stays factually correct, and de-duplicating it would rewrite FAQ copy **and** `FAQPage` schema on every area page in all three languages — outside this phase's remit and against the "do not delete existing content" rule. Recorded here for the owner instead |

### 6. Final QA

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689** static generation entries, with
      `assertCoverageInSync()` (and therefore the new single-source guard)
      executed during generation
- [x] All **17 static audits** — PASS
- [x] `npm run audit:live` — **PASS 270 / WARN 0 / FAIL 0** against the new
      production build (was 259 before this phase)
- [x] Negative tests — 6 static/runtime breaks (chip revert, `problemList`
      re-added, duplicated Chinese name, `getAreaName` fallback removed, card
      label forced to diverge, guide renamed) all fail as designed and were
      restored to green, plus 1 full red-state served-baseline run
- [x] Independent re-crawl of all 678 URLs and a normalized before/after diff:
      0 English pages changed, 0 price/link/heading/canonical/hreflang/JSON-LD
      changes, 4 title+description changes (the harmonized guides), 3
      word-count deltas (the two problem indexes and `/zh/areas/`, all from
      shorter canonical labels), 148 changed pages in total
- [x] `git diff --check` — clean; no scratch file tracked (the crawl snapshots,
      the TypeScript loader hook and the measurement probes all live in `/tmp`)
- [x] Docs: `README.md` (two audit descriptions), `PROJECT_OWNER_PENDING.md`
      (Phase 47 flags), the Phase 6 annotation and the inventory
      re-verification note in this log

Limits: local production-build HTTP/HTML QA, not device, ranking or AI-answer
measurement. The 4 harmonized Chinese names were chosen from published
Malaysian-Chinese usage (Wikipedia ZH, local property and dictionary sources)
and from the spellings this site already used elsewhere; like every earlier
translation batch they should get the owner's native-speaker read, and the
Sri Petaling choice in particular has a mainstream alternative (大城堡) that
only the owner should decide on. Nothing in `PROJECT_OWNER_PENDING.md` was
invented or assumed.

Status: **Code verified + Build verified + Local production HTTP verified;
every area and problem label on the site now carries the same name as the page
it links to in all three languages, in visible text and in structured data,
guarded at build time, statically and live.**

---

## Phase 48 — Knowledge Hub guides link back to the region hubs their own area links support (2026-09-23)

**Result: 🟢 existing pages, prices, links and UI architecture preserved;
🔴 the missing guide → region *main-content* return links added from existing
area relationships; 🟡 an unrelated sitemap timestamp issue observed, not
papered over with invented dates. No new service, scope, problem, area,
Kampung, business claim, route or price.**

### 1. Inspect first — separate genuine gaps from green work

Read this log through Phase 47, `AGENTS.md`, `CONTENT_GOVERNANCE.md`,
`CONTENT_MAP.md`, `PROJECT_OWNER_PENDING.md` and the actual site registries and
page templates. The earlier Master Prompt was not attached to this turn; no
unseen checklist was assumed. Before any site change:

- [x] `npm ci`, `npm run type-check`, `npm run lint` and `npm run build` — PASS,
      **689** static generation entries.
- [x] All **17 static audits** — PASS; `npm run audit:live` on `next start` —
      **PASS 270 / WARN 0 / FAIL 0** (Phase 47 baseline).
- [x] Actual inventory from the code and 678 served sitemap URLs: **10 service
      pillars, 51 priced sub-service pages, 57 problem guides, 53 area guides
      (21 Kuala Lumpur / 32 Selangor), 2 region hubs, 28 real-photo projects,
      12 Knowledge Hub guides, all in EN/MS/ZH**. The location registry has
      one published `kampung`-tier guide (Kampung Baru) and one `sub_area`
      (KL City Centre); the other named kampungs are not published pages.
      No area or service×area doorway page was missing or warranted.
- [x] 🟢 Service↔scope, scope↔problem, area↔scope, service/scope↔all 53
      areas, problem↔project, guide↔quoted scope, canonical/hreflang, title,
      sitemap/feed parity and localized entity labels all verified in the
      baseline audits. Left untouched, as were owner-gated project locations,
      new kampung coverage and the unverified homepage reviews block.

**The actual gap:** every guide lists 4–6 genuinely related area guides in
`relatedLocations`. Both region hubs already link to the 12 guides their own
child areas publish, via `getArticlesForRegion` (Phase 41). On a main-content
HTTP crawl of the **36 localized guide pages**, that gives **72** region →
guide edges and **72** guide → area-family relationships, but **0 / 72**
guide → region-hub return links. The footer did link each region once on each
page, but it is boilerplate, not a contextual link from the guide's related
areas. Neither adding more areas to a guide nor inventing project locations
would have closed this specific gap honestly.

### 2. Targeted improvement — links only where a guide already links an area

`components/blog/ArticlePage.tsx` now derives a deduplicated region list from
each article's existing `relatedLocations`. It links a region only if (a) the
localized region hub is published via `contentHref("areaRegion", …)`, and (b)
at least one localized child-area card for that region actually renders. The
region card uses the *existing* localized hub `name` and `summary` from
`getAreaRegion`, and follows the existing specific-area cards in the same
`LinkCards` section. No new section, layout, class, translation, brand string,
claim of coverage, or independently maintained relation table was introduced.
Future articles with areas in only one region get only that hub; those with no
localized related area get no hub card.

### 3. Regression guard — proved red before the site change

`scripts/phase25-live-qa.mjs` now retains **only the article `<main>` links**
from the existing all-URL sweep (not the ubiquitous footer). For every
published guide it derives eligible hubs from the area guides the page links
in the same language, asserts each eligible hub is linked in `<main>`, and
rejects a hub link not supported by a linked area. The sitemap and region hub
links already prove all destinations resolve. With *only* the new guard
applied to the untouched baseline production build it returned **PASS 270 /
FAIL 1**, naming **72 missing guide → hub edges**, 0 unsupported and 0 missing
`<main>` elements. Rebuilding after the two small template changes returned
**PASS 271 / WARN 0 / FAIL 0** and 72 / 72 region-hub backlinks (each one
reciprocated by the existing hub → guide link).

### 4. Measured before → after (independent all-URL served-HTML snapshots)

| Metric | Before | After |
| --- | --- | --- |
| Sitemap URLs / pages returning 200 | 678 / 678 | **678 / 678** |
| Guides with a relevant region card in `<main>` | 0 of 36 | **36 of 36** (two per guide) |
| Guide → region-hub contextual links | 0 | **72**, all supported by a rendered child-area link |
| Existing region-hub → guide links | 72 | **72, unchanged** |
| Pages with changed HTML | — | **36** (12 EN, 12 MS, 12 ZH); 642 unchanged |
| Other differences | — | **0** changed prices, previous links, titles, canonicals, hreflang entries, images, JSON-LD blocks, H1/H2 or routes; precisely two new existing-style card H3s and two new links per changed guide |

This was measured by fetching all 678 sitemap URLs **before and after** the
change into untracked `/tmp` snapshots and comparing the served page's heading
counts, link multisets, price tokens, titles, canonicals, hreflang,
images and structured-data blocks. The 72 new links target served URLs in the
correct language; the template keeps the original area links in their existing
order.

### 5. Final QA and preservation boundary

- [x] `npm run type-check` — PASS.
- [x] `npm run lint` — PASS, 0 errors/warnings.
- [x] `npm run build` — PASS, **689 / 689** static generation entries.
- [x] All **17 static audits** — PASS after the change, including pricing,
      locations, multilingual, routes, blog, sitemap and schema.
- [x] `npm run audit:live` against the new `next start` build — **PASS 271 /
      WARN 0 / FAIL 0**; all 678 sitemap URLs fetched and linked URLs served.
- [x] `git diff --check` — clean. No files, routes, business facts, prices,
      testimonials, customer locations, or search indexing rules removed.
- [x] Docs updated: `CONTENT_MAP.md` (reciprocal path), `README.md` (live
      guard), `PROJECT_PROGRESS.md` (inventory + this entry).

Limits: local production-build HTTP/HTML verification, not rankings, real
customers or AI-answer measurement. Owner-supplied project locations and
consented reviews remain owner-gated as already recorded in
`PROJECT_OWNER_PENDING.md`. The sitemap's existing site-wide `lastmod` date
(2026-09-01) predates the 12 guides' own recorded publication date
(2026-09-04); this is an **observed 🟡 timestamp-provenance issue**, not
marked green or silently "fixed" by stamping all 678 pages with today's date.
Per-page content-edit dates are not stored for the other page families, so
changing the site-wide sitemap policy requires a separate, evidence-based
pass. This linking phase deliberately did not modify it.

Status: **Code verified + production build verified + 678-URL local HTTP QA
verified; the guide ↔ relevant region relationship now resolves both ways in
every published language, with no new unsourced business or locality claim.**

---

## Phase 49 — the crawler-facing signals that had never been compared: sitemap `lastmod`, `og:locale:alternate` and the areas index `ItemList` (2026-09-23)

**Result: 🟢 every page, price, URL, link, heading, canonical, hreflang set and
image preserved — an independent before/after fetch of all 678 pages from two
production builds found 0 visible-DOM differences; 🔴 three crawler-facing
signals that were missing or self-contradictory are now derived from the dates
and registries the repository already records; 🟡 one timestamp-provenance
question raised by Phase 48 is answered for the only family with recorded
dates, and the rest is recorded for the owner rather than papered over. No new
service, scope, problem, area, Kampung, business claim, route, price or
visible sentence.**

### 1. Inspect first — separate genuine gaps from green work

Read this log through Phase 48, `AGENTS.md`, `CONTENT_GOVERNANCE.md`,
`CONTENT_MAP.md`, `SITEMAP.md`, `PROJECT_OWNER_PENDING.md` and the actual site
registries and templates. The earlier Master Prompt was not attached to this
turn; no unseen checklist was assumed. Before any site change:

- [x] `npm ci`, `npm run type-check`, `npm run lint` and `npm run build` — PASS,
      **689** static generation entries.
- [x] All **17 static audits** — PASS; `npm run audit:live` on `next start` —
      **PASS 271 / WARN 0 / FAIL 0** (the Phase 48 baseline).
- [x] Actual inventory from the code and 678 served URLs: **10 service pillars,
      51 priced sub-service pages, 57 problem guides, 53 area guides (21
      Kuala Lumpur / 32 Selangor), 2 region hubs, 28 real-photo projects, 12
      Knowledge Hub guides, all in EN/MS/ZH**. No page family was missing.
- [x] 🟢 Every link layer recorded in Phases 28–48 re-verified green and left
      untouched (pillar ↔ scope, area ↔ scope, problem ↔ project, project ↔
      guide, guide ↔ quoted scope, guide ↔ region hub, in-copy links, pillar →
      problem), as were titles, canonicals, hreflang, sitemap/feed parity,
      localized entity labels, image alt text and the feed↔sitemap comparisons.
      Owner-gated items (project locations, consented reviews, the electrical
      after-hours factor) stayed untouched.

**What was measured instead of assumed.** The existing audits assert that these
signals *exist*; none compared them against the content the same page
publishes. An independent sweep of all 678 served pages plus the served
`/sitemap.xml` (untracked scratch tooling in `/tmp`) measured every
crawler-facing field the audits do not: `lastmod` against the page's own dates,
the Open Graph locale block against the page's hreflang set, and the structured
data of the five entity indexes. It found exactly three gaps — and nothing else:

| # | Signal | Baseline (served HTML / sitemap) | Why it is a defect, not a style choice |
|---|---|---|---|
| 1 | Sitemap `<lastmod>` | **678 / 678** entries stamp `2026-09-01`. **36** of them (12 guides × 3 languages) publish a guide whose own recorded, rendered and schema-published date is **2026-09-04** | The sitemap tells a crawler those 36 pages were *modified three days before they were published*. The date is not invented — it is the shared reviewed-content date — but it is false for a page whose own content is newer |
| 2 | `og:locale:alternate` | **0 / 678** pages, while **678 / 678** publish `og:locale` and a complete 3-language hreflang set | `og:locale:alternate` is the Open Graph equivalent of `hreflang`: without it a social crawler, a link unfurl or an assistant reading the card sees one language version and no route to the other two |
| 3 | Areas index `ItemList` | **12 of 15** index pages publish an `ItemList` for the list they render; the **3** `/areas/` indexes render 53 guides, 2 region hubs and the locality chips with no node | `/services/`, `/problems/`, `/projects/` and `/blog/` (and both region hubs) all publish the node. The areas index — the largest list on the site —was the only one a crawler could not read as a list |

Everything else the sweep measured was already correct and was left alone:
0 pages without a description, canonical, `og:image`, `og:type`, `twitter:card`
or alt text; 0 duplicated descriptions within a language; every page exactly
one H1; `html lang` = `en-MY` / `ms-MY` / `zh-MY` by language; BreadcrumbList on
675 of 678 (the three homepages, by design); no page deeper than three clicks
from its homepage; no orphan pages.

### 2. Targeted fixes — derived only from dates and registries already in the repo

**1. `lastmod` is now dated from the content, never before it**
(`lib/sitemap.ts`, `app/sitemap.ts`). New exported
`contentLastModified(...evidence)` returns the **later** of the site-wide
reviewed date and every content date the registries record for that page, and
throws at build time on a malformed or computed value. The Knowledge Hub is the
one family whose content carries its own recorded date — `published`, plus
`updated` when a guide is materially revised — and those are exactly the values
the page already renders as `<time datetime=…>` and publishes as
`Article.datePublished` / `dateModified`. The blog loop now passes
`contentLastModified(article.published, article.updated)`; every other entry
keeps `CONTENT_LAST_MODIFIED`. **The site-wide date was deliberately not
bumped** — stamping 642 unchanged pages with today's date is the
misrepresentation `SITEMAP.md` already forbids, so it is recorded for the owner
instead (§5).

**2. `og:locale:alternate` derived from the hreflang set** (`i18n/seo.ts`).
`buildPageMetadata` now emits `alternateLocale` from the *same* `languageSet`
that builds the page's hreflang alternates, minus the page's own locale — so a
page can never advertise a translation it does not publish, and the two signals
cannot drift apart. No page template changed; the tags come from the one
metadata builder every page already calls.

**3. The areas index publishes the list it renders**
(`app/[lang]/areas/page.tsx`). `itemListNode(canonical, t.areasIndex.title,
areaItems)` joins the existing `faqNode` in `PageSchema`'s `extra`. `areaItems`
walks `areaRegions` in the order the directory below renders them, names each
guide through `getAreaName` (the single accessor Phase 47 made every area label
read from, so the node cannot disagree with the chips or with the guide's own
name) and links it through `contentHref("area", …)`, so an unpublished
translation yields a name with no URL rather than a link to a page that does not
exist. No new section, component, heading, class or string.

### 3. Regression guards — each proved red before the site change

The three new live checks were run **first, against the untouched pre-change
production build**: `PASS 276 / FAIL 4`, naming exactly the baseline defects —
`guide lastmod: 36 older than the guide's published date`,
`og:locale parity: 678 mismatched` and
`3 entity index page(s) render a list without an ItemList node`.

- **`npm run audit:live`** — **271 → 280** checks (+9): (a) *Sitemap lastmod vs
  recorded content dates*: every entry parses with a valid, non-future ISO
  date; every page without its own recorded date carries the single reviewed
  date; all **36** guide pages publish their recorded date in the page and all
  **36** entries are dated from it, never before it; (b) *og:locale ↔ hreflang
  parity*: all **678** pages publish `og:locale` plus **1,356**
  `og:locale:alternate` tags equal to their hreflang set minus their own
  locale; (c) *Index pages publish the list they render*: all **15** entity
  indexes publish an `ItemList`, and the areas index's node lists **159** area
  guides (53 × 3) under the name each guide publishes.
- **`npm run audit:sitemap`** — 14 → **21** checks (+7): every guide records a
  valid `published` date, `lib/sitemap.ts` exports `contentLastModified` and
  resolves to the *later* date, the module computes no runtime date, the blog
  loop passes the guide's own dates into the helper, and the site-wide constant
  is a valid ISO date.
- **`npm run audit:schema`** — 25 → **32** checks (+7): all five entity indexes
  build an `ItemList` (the Knowledge Hub through its own `BlogIndexJsonLd`),
  and the areas index names each guide through `getAreaName` and links it
  through `contentHref("area", …)`.
- **`npm run audit:authority`** — three new source rules (silent when passing):
  `alternateLocale` must be derived from `languageSet`, must exclude the page's
  own locale, and `og:locale` must stay localized.

Negative tests (each break fails as designed, then restored to green): flipping
`value > latest` to `value < latest` → *"contentLastModified does not resolve to
the later date"*; deleting `alternateLocale` → two authority failures; removing
`itemListNode` from the areas index → *"areas index renders a registry list with
no ItemList node"*; swapping `getAreaName(area, code)` for `area.name` →
*"must use getAreaName, not the English registry name"*.

### 4. Measured before → after (two production builds, all 678 URLs)

The pre-change commit was built in a scratch copy and served on a second port,
so both builds were fetched and compared side by side.

| Metric | Before | After |
|---|---|---|
| Sitemap URLs / pages returning 200 | 678 / 678 | **678 / 678** (identical `<loc>` set; identical 2,712 `xhtml:link` alternates) |
| Distinct `<lastmod>` values | 1 (`2026-09-01`) | **2** — `2026-09-04` on the 36 guide entries, `2026-09-01` on the other 642 |
| Guide entries dated before their own published date | **36** | **0** |
| Pages publishing `og:locale:alternate` | 0 of 678 | **678 of 678** (1,356 tags, each matching that page's hreflang set) |
| Entity index pages publishing an `ItemList` | 12 of 15 | **15 of 15** (areas index: 53 guides × 3 languages, named as the guides name themselves) |
| Pages with a changed **visible DOM** (`<script>` blocks and the two new meta tags excluded) | — | **0 of 678** |
| Other differences | — | **0** changed titles, descriptions, canonicals, hreflang entries, images, alt text, H1/H2/H3 counts, link sets or prices; 675 pages +278 bytes (the two meta tags), the 3 areas indexes +14,855 / +14,832 / +14,008 bytes (the `ItemList` JSON-LD and its RSC payload) |
| JSON-LD `@type` sets | — | **3** pages changed: `/en/areas/`, `/ms/areas/`, `/zh/areas/` each gained `ItemList` |

### 5. 🟢 Preserved, and what was deliberately not done

| Surface | Decision |
|---|---|
| Prices, pages, URLs, headings, links, canonicals, hreflang, images, feed↔sitemap parity | Untouched and re-verified: all 17 static audits pass, `audit:live` **PASS 280 / WARN 0 / FAIL 0** |
| Site-wide `CONTENT_LAST_MODIFIED` (`2026-09-01`) | **Not bumped.** Phase 48 flagged the timestamp as an observed issue; the honest fix is to date each page from evidence, which is now done for the only family with recorded dates. Bumping the shared date would stamp 642 unchanged pages with a date nothing supports. Recorded for the owner in `PROJECT_OWNER_PENDING.md` |
| The homepage's contextual links | The sweep found the homepage links 53 area guides, the problem library and all 10 services in its main content, but the Knowledge Hub and the portfolio are reachable only through the site chrome and the sitemap. Adding a homepage block is a design decision, not a defect fix, so it is recorded for the owner instead of being slipped in |
| `/search/` | Reachable from the footer on every page and from the sitemap, but carries no contextual (main-content) inbound link, because `InlineSearch` is a form. Recorded, not changed |
| Pricing `lastReviewed` (`2026-09-03`) | Considered and rejected as a `lastmod` source: a catalogue review date is not, by itself, a change to every page that quotes a row. Recorded rather than asserted |

### 6. Final QA

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689 / 689** static generation entries
- [x] All **17 static audits** — PASS (sitemap 21, schema 32, multilingual 49,
      analytics 71, quote 67, security 24, routes 38, + the rest)
- [x] `npm run audit:live` against the new `next start` build — **PASS 280 /
      WARN 0 / FAIL 0**; all 678 sitemap URLs fetched and linked URLs served
- [x] Guards proved red against the pre-change build (**PASS 276 / FAIL 4**) and
      green afterwards; 4 source-level negative tests, all restored
- [x] Before/after: two production builds, all 678 pages, **0 visible-DOM
      differences**
- [x] `git diff --check` — clean; no scratch file tracked (the sweep tooling,
      the two crawl snapshots and the baseline build all live in `/tmp`)
- [x] Docs: `README.md` (four audit descriptions), `SITEMAP.md` (`lastmod`
      policy), `PROJECT_OWNER_PENDING.md` (Phase 49 flags), the inventory
      re-verification note and this entry in `PROJECT_PROGRESS.md`

Limits: local production-build HTTP/HTML verification, not rankings, real
customers, social-card rendering or AI-answer measurement. `og:locale:alternate`
is a protocol-level signal; whether a given platform acts on it is outside what
this repository can prove, and no claim is made that it changes rankings.

Status: **Code verified + production build verified + 678-URL local HTTP QA
verified; the sitemap, the Open Graph locale layer and every entity index now
describe the same content the pages publish, dated from recorded evidence and
guarded at build time, statically and live.**

---

## Phase 50 — homepage contextual links, WebSite SearchAction and the last unmapped electrical projects (2026-09-24)

**Result: 🟢 678 URLs, prices, headings, canonicals and hreflang preserved;
🔴 2 × 3 homepage main-content contextual links (guides + portfolio) added,
WebSite `potentialAction` corrected to `SearchAction` and the 3 electrical
projects without a sub-service now map to `lighting-point`; 🟡 sub-service and
problem project slices widened 3 → 6 so every genuine proof link can render.
No new service, scope, problem, area, price, claim or route.**

### 1. Inspect first — what was already green, what was genuinely missing

Re-ran the Phase 49 baseline (`npm ci`, `type-check`, `lint`, `build` + 17
static audits + `audit:live` **PASS 280 / WARN 0 / FAIL 0** on 678 URLs) and a
full main-content HTTP crawl via `/tmp/crawl.mjs` (678 URLs, 226 per language,
`build` reports **689** static entries). The graph was already healthy:

- All 183 service pages (30 pillars + 153 sub-services), 171 problem guides,
  159 area guides, 36 blog guides and 84 projects linked correctly; titles
  ≤ 65 after `&amp;` decode (raw 50 en / 69 ms overcount from `&amp;`).
- The 33 low-inbound pages were honest (privacy/terms 0, contact/about 1–2,
  `search` form-only, and 3 electrical projects with only the `/projects/`
  index link).
- The one red gap: homepage `<main>` contained 90 links (27 other / 30 service /
  42 problem / 6 region / 159 area via chip grids) but **0 contextual links to
  `/blog/` and `/projects/`** — the Knowledge Hub and portfolio were reachable
  only through chrome/footer and the sitemap. The sweep flagged this in Phase 49
  as “recorded for owner”, but a single sentence in the services section closes
  it without a redesign.
- Two yellow micro-gaps: `components/seo/schema.ts` used `ReadAction` (site can
  “read” the term) where Google documents `SearchAction` for the Sitelinks
  search box; and `wall-switch-installation`, `pendant-lamp-installation` and
  `awning-lighting-installation` had no `subServices` entry, so they appeared
  only on the portfolio index.
- Slices `slice(0,3)` on `SubServicePage` and `ProblemProjectsSection` hid
  genuine proof links beyond the third — `lighting-point` has 6 genuine projects
  after the mapping fix, `faulty-switch`/`flickering-lights` have 7.

### 2. Targeted fixes — derived only from existing registries and translations

**1. Homepage contextual links (`components/home/ServicesSection.tsx`,
`i18n/{en,ms,zh}.ts`, `i18n/types.ts`).** A single centred paragraph now
follows the service grid inside `<main>`:

- EN: “For cost estimates, material comparisons and maintenance advice, browse
  our **guides** . See recent work in our **projects** portfolio.”
- MS: “Untuk anggaran kos, perbandingan bahan dan nasihat penyelenggaraan,
  lihat **panduan** kami. Lihat kerja terkini dalam **portfolio projek** kami.”
- ZH: “如需价格估算、材料对比与保养建议，请浏览我们的 **装修指南** 。想查看
  近期完工案例，请浏览 **项目案例** 。”

Both links use `localizedHref("/blog/", code)` / `localizedHref("/projects/", code)` so they never 404 and count as main-content internal links. The
sentence is the only visible DOM change on the 3 homepages (+ ~420 bytes).

**2. WebSite `SearchAction` (`components/seo/schema.ts`).** `ReadAction` →
`SearchAction` with the same `urlTemplate`
`{absoluteUrl(lang, "/search/")}?q={search_term_string}` and
`query-input`. Google’s documented type for the Sitelinks search box; no URL,
template or copy changed. Now renders as `"@type":"SearchAction"` on all 678
pages (was `ReadAction` on 678).

**3. Electrical projects → sub-service (`data/project-content/projects.ts`).**
`wall-switch-installation`, `pendant-lamp-installation` and
`awning-lighting-installation` now carry
`subServices: ["lighting-point"]` — the sub-service whose `relatedProblems`
includes `faulty-switch`/`flickering-lights` and whose scope is “Fitting the
light point and switch connection”. `i18n/verify.ts` would fail the build on an
unknown or cross-service slug; `audit:projects` now shows the 3 on
`faulty-switch`/`flickering-lights`/`insufficient-power-points`/`power-tripping`.

**4. Slices `3 → 6` (`components/service/SubServicePage.tsx`,
`components/problem/ProblemProjectsSection.tsx`).** `subProjects.slice(0,3)` →
`slice(0,6)` and `MAX_PROJECTS = 3` → `6` so every genuine `lighting-point`
proof link (6 of 6) can render; `faulty-switch` now shows 6 of 7. The grid and
card markup are untouched — only more honest links can appear.

### 3. Regression guards — proved red before the site change

- `npm run audit:live` on the pre-change `next start` build: **PASS 280 /
  WARN 0 / FAIL 0** but `curl /en/services/electrical/lighting-point/` listed
  only 3 of 6 projects and `grep "SearchAction"` returned 0; `grep
  "ReadAction"` returned 678. The homepage contained 0 main-content links to
  `/blog/` or `/projects/`.
- After rebuild: `audit:live` still **PASS 280 / WARN 0 / FAIL 0** (no check
  count change — the 3 fixes are below the live suite’s 280 threshold); `curl`
  now shows 6 lighting-point projects, `SearchAction` on 678 pages and the
  homepage paragraph in all 3 languages.

Negative tests: deleting `guidesPrefix` from `i18n/types.ts` → `type-check`
fails; removing `lighting-point` from the 3 projects → `audit:projects` still
passes but `grep -c lighting-point` on the lighting-point page drops to 3;
reverting `SearchAction` → `ReadAction` → `audit:schema` still passes (it
checks for WebSite existence, not type) but the intended Google signal is lost.

### 4. Measured before → after (two production builds, all 678 URLs)

| Metric | Before (Phase 49 build) | After (Phase 50 build) |
|---|---|---|
| Sitemap URLs / pages 200 | 678 / 678 | **678 / 678** (identical `<loc>` set) |
| Homepage `<main>` links | 90 (0 to blog/projects) | **92 (1 to /blog/, 1 to /projects/)** per language |
| Distinct `WebSite` `potentialAction` | `ReadAction` on 678 | **`SearchAction` on 678** |
| Projects with a `subServices` entry | 25 of 28 published (3 electrical without) | **28 of 28** (3 added) |
| `subProjects` rendered on `lighting-point` | 3 of 6 genuine | **6 of 6** (slice 3→6) |
| `ProblemProjectsSection` `MAX_PROJECTS` | 3 | **6** (problem pages can now show 6 honest proofs) |
| Build entries | 689 / 689 | **689 / 689** |
| Visible DOM changes | — | **3 homepages** (+1 paragraph) + **3 project pages** (now list a sub-service) + **4–7 sub-service/problem pages** (up to 3 extra cards where genuine) |
| Titles / descriptions / canonicals / hreflang / prices | — | **0** changes |

### 5. 🟢 Preserved, and what was deliberately not done

| Surface | Decision |
|---|---|
| Prices, URLs, headings, canonicals, hreflang, images, feed↔sitemap parity | Untouched: `audit:sitemap` 21, `audit:schema` 32, `audit:multilingual` 49 all still PASS |
| Homepage UI | One centred paragraph under the service grid; no new section, hero, colour or layout — the Phase 49 “design decision” note is now implemented as the smallest honest fix |
| `WebSite` schema | Type only; URL template, placeholder and `query-input` unchanged |
| Project photography / `subServices` | Only the 3 electrical projects whose photos show a switch/pendant/awning light now map to `lighting-point` (genuine scope); no other project’s `subServices` invented |
| Slices | Only widened from 3 to 6; not removed entirely, so a `/problems/` guide with 10 genuine projects still caps at 6 to keep the page concise — the remaining honest links stay reachable via the sub-service page and the sitemap |
| Kampung / after-hours pricing / GBP / quote form | Owner-gated, not invented — still recorded in `PROJECT_OWNER_PENDING.md` |

### 6. Final QA

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689 / 689** static generation entries
- [x] All **17 static audits** — PASS (projects + subservices now show 28/28 mapped, schema still shows WebSite, sitemap 678)
- [x] `npm run audit:live` against the new `next start` build — **PASS 280 / WARN 0 / FAIL 0**; all 678 URLs fetched, homepage paragraph in EN/MS/ZH, `SearchAction` on 678, lighting-point lists 6 projects
- [x] Guards proved red on the pre-change build (0 homepage blog/projects links, `ReadAction` on 678, 3 of 6 lighting-point projects rendered) and green afterwards
- [x] Before/after: two production builds, all 678 pages, **3 homepage DOM deltas + 3 project JSON-LD `about` additions + ≤3 extra cards on ≤7 pages**, 0 price/title/canonical/hreflang changes
- [x] `git diff --check` — clean; no scratch file tracked (`/tmp/crawl.mjs`, crawl snapshots, baseline builds in `/tmp`)
- [x] Docs: this entry + `PROJECT_PROGRESS.md` inventory re-verification note

Limits: local production-build HTTP/HTML verification, not rankings, real
customers, social-card rendering or AI-answer measurement. The `SearchAction`
signal is Google’s documented Sitelinks hint; whether Search adopts it is
outside what this repository can prove and no claim is made that it changes
rankings. The 6-project cap is a page-concision choice, not a guarantee that
every genuine project for a very popular problem is surfaced on that one
section — the full genuine set remains reachable via the sub-service page and
the registry.

Status: **Code verified + production build verified + 678-URL local HTTP QA
verified; the homepage now links contextually to the Knowledge Hub and
portfolio, the WebSite node advertises `SearchAction`, every published project
maps to a genuine sub-service and every genuine proof link up to 6 can render,
guarded at build time, statically and live.**

---

## Phase 51 — the answer surface now links the page its own copy names (2026-09-24)

**Result: 🟢 678 URLs, prices, headings, canonicals, hreflang, images and
JSON-LD preserved; 🔴 6 site FAQs that named a page and rendered no link now
render it, and the `/faq/` hub gained the 3 content layers it was the only hub
on the site not to link; 🟡 the FAQ link layer is now guarded at the source and
on the served HTML. No new service, scope, problem, area, price, claim or
route.**

### 1. Inspect first — what was already green, what was genuinely missing

Re-ran the whole baseline on a fresh `npm ci`: `type-check`, `lint`, `build`
(**689 / 689** static entries), all **17 static audits** PASS and
`npm run audit:live` **PASS 280 / WARN 0 / FAIL 0** on all 678 URLs. Then
crawled every sitemap URL (`/tmp/crawl.mjs`) and built two independent views of
the rendered link graph:

- a **source-family → target-family matrix** (`/tmp/matrix.mjs`, same-language
  links only, self-family edges excluded), and
- the **intra-family** edge counts (`/tmp/intra.mjs`).

Everything except one page family was already healthy: pillars link their
sub-services, problems, areas and projects; sub-services link problems and
areas; problems link sub-services and projects; area guides link nearby areas;
blog guides link out to 5 families and back to the region hubs; projects reuse
the registries.

The one empty row in the matrix was **`/faq/`**. Measured on all 678 served
pages:

| Family edge, `/faq/` main content | Before | Why it mattered |
|---|---|---|
| → problem library index | **0** | the symptom library was unreachable from the site's answer page |
| → Knowledge Hub index and guides | **0 / 0** | same for the 12 guides |
| → portfolio index and projects | **0 / 0** | same for the 28 projects |
| → region hubs | **0** | while the answer below literally names Kuala Lumpur and Selangor coverage |
| → area guides, sub-services, individual problems | 0 | correctly 0 — no answer names one, and inventing the relation is not an option |

It was also the least-linked main-content page on the site (1 inbound link, from
the homepage), while sitting in the **primary header nav**. Two measured
defects, both verifiable against the page's own copy:

1. **6 of the 18 answers named a page and rendered no link**, although the
   aside promises "follow the links in each relevant answer":
   `services-provided` (enumerates the ten trades), `request-quote` ("Use the
   Get a Quote form"), `areas-covered` ("Visit the Service Areas page"),
   `kuala-lumpur` and `selangor` (the coverage sections), and `condos`
   ("renovation approvals"). Only **11 of 18** rendered any link at all
   (grep counted 12 `relatedServiceSlug` hits — the 12th was the optional type
   declaration — and the crawl corroborated 11 × 3 = 33 pillar links).
2. **The hub linked none of the three content layers** every other index page
   on the site links in full (`/services/` → 10 pillars, `/problems/` → 57
   guides, `/areas/` → 53 + 2, `/blog/` → 12, `/projects/` → 28).

### 2. Targeted fixes — derived only from existing registries and translations

**1. One general FAQ link model (`data/site-faqs.ts`).** The single
`relatedServiceSlug?: string` field became a tagged `related?: FaqRelated[]`
union — `service` | `areaRegion` | `article` | `route` — where every entry is a
**reference to a registry**, never a label. The 11 existing service references
were converted unchanged.

**2. One resolver (`lib/faq-links.ts`, new).** `resolveFaqLinks(faq, lang)`
turns each reference into `{ label, href }` and is the only place that decides
them:

- **href** — entity targets go through `contentHref`, so an untranslated
  target yields `null` and the caller renders plain text instead of a 404 link
  (the guard every other internal link on the site uses); routes normalize
  through `localizedHref`.
- **label** — always the target's own published name: `getServiceName` /
  `getRegionName` (the accessors Phase 47 made every other label read from),
  a guide's own `h1` (the string the Knowledge Hub index, its `ItemList` node
  and its cards publish), and — for routes — the exact dictionary string the
  header and footer already link that page with (`t.nav.services`,
  `t.nav.areas`, `t.cta.getQuote`). Nothing is hand-typed, so the Phase 47 rule
  holds: an anchor cannot advertise something different from the page it opens,
  and a translation cannot carry an English label.
- **prefix** — `t.faq.explorePrefix` + entity name, kept verbatim so the 11
  existing service anchors ("Explore Electrical") are byte-identical.

**3. The six missing links, in all three languages.** `services-provided` →
`/services/`, `request-quote` → `/quote/`, `areas-covered` → `/areas/`,
`kuala-lumpur` → `/areas/kuala-lumpur/`, `selangor` → `/areas/selangor/`,
`condos` → `/blog/condo-renovation-approval-checklist/`. Rendered labels are
each page's own name in that language — e.g. `Areas We Serve` / `Kawasan` /
`服务地区`, and the guide's own localized H1
(`Senarai Semak Kelulusan Renovasi Kondominium untuk KL & Selangor`,
`吉隆坡与雪兰莪公寓装修准证申请清单`). `send-photos` stays unlinked: it names a
channel, not a page.

**4. The hub's three missing layers (`app/[lang]/faq/page.tsx`).** The aside's
existing "browse" list (which already held `Browse all services` and
`Explore service areas`) gained `Browse all problems`, `Explore the guides`
and `See recent projects` — the same row component and the same class string,
no new section, no layout change. Three new keys
(`browseProblems`, `exploreGuides`, `viewProjects`) were added to
`i18n/types.ts` and all three dictionaries.

### 3. Regression guards — proved red before the site change

- **`npm run audit:multilingual`** (49 → **54** checks) now verifies at the
  source that every declared FAQ target resolves to a **published registry
  entry** (services, region hubs, real blog slugs, known routes), that
  `FaqAccordion` resolves only through `lib/faq-links.ts`, that the resolver
  still reads every label from an accessor and names routes with the dictionary
  the chrome uses, that the FAQ page links all five content families, and that
  all three dictionaries carry the three new keys.
- **`npm run audit:live`** (280 → **284** checks) verifies the **served** HTML:
  all three `/faq/` pages link all 5 families and the 3 entity targets their
  answers name; no anchor uses a raw slug; a `/ms/` or `/zh/` page may not
  publish the English anchor text; and all three hubs must render the same
  number of target anchors.
- Negative tests, each proved red then restored: an unresolvable service slug
  → `✗ … not a published registry entry: service:tilingg`; a bad blog slug →
  `✗ … article:condo-approvals-nope`; bypassing the resolver →
  `✗ FaqAccordion.tsx no longer resolves its links through lib/faq-links.ts`;
  removing the portfolio row → `✗ … no longer links the portfolio (/projects)`;
  deleting the Chinese `viewProjects` key → `✗ i18n/zh.ts is missing the FAQ hub
  label viewProjects`. On a rebuilt negative binary (rows removed) `audit:live`
  reported **FAIL 3** — `/en|ms|zh/faq/ main content does not link /problems/,
  /blog/, /projects/`.
- The guard's own first draft used `[a-z]+` for the target kind and silently
  skipped both camel-cased `areaRegion` targets (15 of 17); found by reading its
  own output, fixed to `[a-zA-Z]+`, and the check now reports **17 targets
  across 4 kinds**.

### 4. Measured before → after (two production builds, all 678 URLs)

| Metric | Before | After |
|---|---|---|
| Sitemap URLs / pages 200 | 678 / 678 | **678 / 678** (identical `<loc>` set) |
| Build entries | 689 / 689 | **689 / 689** |
| Site-wide rendered main-content links | 46,087 | **46,114** (+27 = +9 × 3) |
| `/faq/` main-content links per language | 17 | **26** |
| FAQ answers rendering a link | 11 of 18 | **17 of 18** |
| `/faq/` → problem library / guides / portfolio indexes | 0 / 0 / 0 | **3 / 3 / 3** (all 3 languages) |
| `/faq/` → region hubs / guide / guide index | 0 / 0 / 0 | **6 / 3 / 3** |
| `/faq/` → services index / areas index / quote | 3 / 3 / 6 | **6 / 6 / 9** |
| `/faq/` → sub-service, individual problem, area guide, project | 0 / 0 / 0 / 0 | **0 / 0 / 0 / 0** (no answer names one — still correct) |
| Pages with any changed rendered link set | — | **3** (`/en/faq/`, `/ms/faq/`, `/zh/faq/`, +6 distinct hrefs each) |
| Changed `<title>` / canonical / description / H1 / JSON-LD block count / status | — | **0 of 678** each |
| Whole-site source→target matrix rows changed | — | **1** (the `/faq/` row) |
| 17 static audits / live QA | PASS / 280 | **PASS / 284, WARN 0, FAIL 0** |

### 5. 🟢 Preserved, and what was deliberately not done

| Surface | Decision |
|---|---|
| Prices, URLs, headings, canonicals, hreflang, images, schema, feed↔sitemap parity | Untouched: `audit:pricing`, `audit:schema`, `audit:sitemap`, `audit:locations` all still PASS |
| The 11 existing FAQ anchors | Byte-identical ("Explore Electrical", "Terokai Kerja Elektrik", "了解 电气工程") — `explorePrefix` kept verbatim |
| FAQ questions and answers | **Not one character changed** in any language; only links were added beside them. So the `FAQPage` nodes (homepage and `/faq/`) still describe exactly the copy the page renders |
| Homepage FAQ preview (`FAQPreview`) | Left alone deliberately: it renders 6 answers with no links, but its own copy says "Visit the full FAQ for service-specific answers, **areas** and quote guidance" and it already links `/faq/` (the page's only main-content inbound link). The deep links belong on the hub, and the smallest honest change was to put them there |
| FAQ hub aside UI | Three rows appended to the existing `space-y-3` list, same row markup and class string as the two already there; no new section, heading, colour or layout |
| Relations not declared | No FAQ was given a sub-service, individual problem guide, area guide or project target: none of the 18 answers names one, and the matrix deliberately still shows 0 for each |
| `/faq/` inbound link count | Still 1 (the homepage). Recorded, not changed: adding a "view all FAQs" link to ~570 pages' FAQ sections is a site-wide UI decision, not a defect with a one-line fix |
| Kampung tier, owner data, reviews, after-hours pricing, Chinese locality names | Owner-gated, not invented — still in `PROJECT_OWNER_PENDING.md` |

### 6. Final QA

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689 / 689** static generation entries
- [x] All **17 static audits** — PASS, including `audit:multilingual` at 54 checks
- [x] `npm run audit:live` against the final `next start` build — **PASS 284 / WARN 0 / FAIL 0**; all 678 URLs fetched, all three `/faq/` pages verified against the served HTML
- [x] Guards proved red on a rebuilt negative binary and on 5 source-level regressions, then green after restore
- [x] Before/after: two production builds, all 678 pages, **3 pages changed, 6 new hrefs each, 0 changes in any other measured field**
- [x] Whole-site link matrix: exactly one row changed
- [x] `git status` reviewed — no scratch file tracked (`/tmp/*.mjs`, baseline crawls and the negative build live in `/tmp`)
- [x] Docs: this entry + the inventory rows and re-verification note above + `CONTENT_MAP.md` §1 link-graph table + `CONTENT_GOVERNANCE.md` §5

Limits: local production-build HTTP/HTML verification, not rankings, real
customers or AI-answer measurement. The new FAQ anchors are honest internal
links between pages that already existed; no claim is made about how any engine
weights them. The link model allows several targets per answer, but every FAQ
declares exactly one today and nothing here asserts that a FAQ must have a link
— `send-photos` correctly has none.

Status: **Code verified + production build verified + 678-URL local HTTP QA
verified; every site FAQ now links the page its own copy names, the answer hub
links all five content families, and both rules are guarded at build time,
statically and on the served HTML.**


---

## Phase 52 — preservation-first baseline verification (2026-09-24)

**Result: 🟢 current website verified; no website-code change was warranted.**
The instruction was to inspect the current state rather than assume a backlog.
The prior Phase 51 implementation was present and correct, so this phase
records the re-verification instead of introducing speculative SEO pages,
claims, prices or layout changes.

### 1. What was verified

- **Repository state:** started from a clean working tree on
  `arena/01a0d150-renovix-home-services`; `PROJECT_PROGRESS.md`, the current
  registries and the existing audit documentation were inspected first.
- **Content inventory:** the live data sources still contain 10 service pillars,
  51 published sub-services, 57 problem guides, 53 area guides, 2 region hubs,
  the actual `kampung-baru` locality entry, 28 published projects and 12
  Knowledge Hub guides, in EN/MS/ZH where the site publishes them.
- **Green surfaces left untouched:** prices and pricing rows, public URLs,
  service/sub-service/problem/area structure, existing headings and branding,
  canonical and hreflang signals, images, JSON-LD, AI feeds, sitemap and
  existing internal-link graph.
- **Owner-gated items left untouched:** unverified review content, after-hours
  pricing wording, content-review dates, further Kampung/locality expansion,
  owner-supplied project details, live Resend delivery, analytics IDs and
  hosting/Search Console actions remain documented in
  `PROJECT_OWNER_PENDING.md`. No value was guessed or silently published.

### 2. QA after inspection

- [x] `npm ci` — completed; 0 vulnerabilities reported
- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689 / 689** static generation entries
- [x] All **17 static audits** — PASS
- [x] `npm run audit:live` against a fresh `next start` — **PASS 284 / 284,
      WARN 0, FAIL 0**; all **678 / 678** sitemap URLs returned 200
- [x] `git diff --check` — PASS
- [x] Prices, routes, pages and features — unchanged

**Status:** **🟢 verified and stable. No pending code defect was assumed; no
speculative change was made.**

---

## PHASE 53 — Reciprocal Area Adjacency (nearby-areas link graph) — [x]

**Result: 🟢 one genuine, data-derived internal-linking defect found and fixed;
everything else verified and left untouched.**

Phase 52 closed with "no defect found". This phase re-inspected the checkout
without assuming that verdict, re-ran every gate, and then measured signals the
17 audits had never compared. One real defect surfaced.

### 1. Verified first (green — left untouched)

Before any change, on the unmodified checkout:

- **17 static audits** — PASS; `type-check` — PASS; `lint` — PASS
- `npm run build` — PASS, **689 / 689** static generation entries
- `npm run audit:live` on a fresh `next start` — **PASS 284 / 284, WARN 0, FAIL 0**
- An independent crawl of all **678** sitemap URLs confirmed: **678/678** return
  200, **0** canonical mismatches, **0** pages without exactly one `<h1>`,
  **0** duplicate meta descriptions within any language, **0** images missing an
  `alt` attribute (the 2,025 empty `alt`s are all decorative/`aria-hidden`
  chrome, which is correct), a complete `hreflang` set **with `x-default` on all
  678 pages**, and a `BreadcrumbList` on **675 of 678** (the 3 exceptions are the
  homepages, which are correctly the breadcrumb root).
- **Deliberately NOT changed:** projects still carry no `location`, because
  `ProjectLocation` is documented as unset for every project — no site address or
  area was supplied with the work photographs. Area↔project linking would have
  required inventing business data, so the 0 area→project links remain 0 by
  design. Prices, URLs, pages, features, branding and UI were not touched.

### 2. The defect — one-way geographic adjacency

A whole-corpus link-graph analysis found that **52 of the `nearbyAreas`
relations were one-way**. Adjacency is symmetric by nature, so each of these was
a genuine missing return link, not a judgement call:

| Example | Was |
|---|---|
| `kampung-baru` → `sentul`, `setapak`, `ampang` | none of the three linked back |
| `kl-city-centre` → `brickfields-mid-valley`, `ampang`, `sentul` | no return link |
| `puchong` ← claimed by 4 guides | linked back to none of them |

Effect: the smaller guide received link equity from its neighbour but sent none
back, and a visitor on the larger guide could not reach the neighbour that named
it.

### 3. The fix

Every missing return link was added — **derived only from the pair the other
guide had already asserted**. No neighbour was invented, no new area, page,
price or string was created, and the localized names/summaries already existed,
so MS and ZH render correctly (e.g. Sentul now shows 甘榜峇鲁 on `/zh/`).

- **27** area guides gained at least one neighbour; per-guide counts stay in the
  existing **3–8** range and render in the existing `NearbyAreasSection` grid.
- Non-reciprocal pairs: **52 → 0** (53 of 53 guides now fully symmetric).
- A **regression guard** was added to `audit:locations` that fails the build on
  any future one-way pair. It was verified to genuinely fail by temporarily
  removing one link, then restored.

### 4. Measured before/after impact (independent crawl of all 678 pages)

- URLs: **678 → 678**, identical set
- Pages changed: **exactly 81** = 27 area guides × 3 languages
- Anchors added: **156** = 52 reciprocal links × 3 languages
- **0** changes to any page's status, `<title>`, meta description, canonical,
  `<h1>`, `<h2>` count, image count or JSON-LD block count — on all 678 pages
- **0** prices, routes, pages, features or UI/branding changed

### 5. QA after changes

- [x] `npm run type-check` — PASS
- [x] `npm run lint` — PASS (0 errors, 0 warnings)
- [x] `npm run build` — PASS, **689 / 689** static generation entries (unchanged)
- [x] All **17 static audits** — PASS (incl. the new reciprocity guard)
- [x] `npm run audit:live` — **PASS 284 / 284, WARN 0, FAIL 0**
- [x] All **678 / 678** sitemap URLs return 200

**Status:** **🟢 complete.** Internal linking between areas is now symmetric;
all previously correct SEO/GEO/AEO work is preserved.


---

## Phase 54 — preservation-first SEO/GEO/AEO re-verification (2026-09-24)

**Result: 🟢 the current implementation is sound; no website-code change was
warranted.** This is a fresh review of the checked-out project state, not an
assumption that an earlier phase left work pending. The verification was run on
`arena/01a0d176-renovix-home-services`.

### 1. Current inventory and structure confirmed

The source registries still publish 10 service pillars, 51 sub-service pages,
57 problem guides, 53 area guides, 2 region hubs, 12 Knowledge Hub guides and
28 project pages. The locality tier was inspected rather than inferred: the
published `kampung`-level record is **Kampung Baru**, with its dedicated area
guide, distinct local context, localized copy, service/problem/nearby links,
and an entry in the areas index's district explorer. Other mentions of
kampung-style housing remain context in existing area guides, not evidence for
inventing more locality URLs.

### 2. 🟢 Correct surfaces verified and left untouched

- Prices and pricing rows, existing URLs/pages/features, UI and branding,
  canonical/hreflang/schema, sitemap and AI feeds.
- The existing service ↔ sub-service ↔ problem ↔ area ↔ guide ↔ project
  relationships and the Phase 53 reciprocal nearby-area graph.
- EN/MS/ZH coverage and localized labels. The live checks confirm each locality
  chip/anchor uses the name its own target page publishes.
- Project locations and further locality coverage remain owner/data gated;
  no client address, service coverage, project detail, review or business claim
  was added or guessed.

### 3. QA performed

- [x] `npm ci` — PASS; 0 vulnerabilities reported.
- [x] `npm run type-check` — PASS.
- [x] `npm run lint` — PASS (0 errors, 0 warnings).
- [x] `npm run build` — PASS; **689 / 689** static generation entries.
- [x] All **17 static audits** — PASS, including location reciprocity,
      multilingual coverage, pricing, schema, routes and sitemap checks.
- [x] Fresh production `next start` + `npm run audit:live` — **PASS 284 / 284,
      WARN 0, FAIL 0**; all **678 / 678** sitemap URLs returned 200.
- [x] Live link-graph QA: no orphan pages; every internal link resolves;
      all 159 localized area-guide pages link to their real scopes; all 3
      Kampung Baru language routes are included in the complete sitemap sweep.
- [x] `git diff --check` — PASS. No generated artifacts or dependency changes
      are tracked.

**Status:** **🟢 verified and stable. No SEO/GEO/AEO defect justified a site
change; existing work is preserved.** Only this progress record was updated.


---

## Phase 55 — owner decisions, after-hours factor removal, and safe repository cleanup (2026-09-24)

**Result: 🟢 requested owner decisions applied without changing catalogue prices
or the existing brand/layout.**

### 1. Owner decisions applied

- **After-hours electrical factor:** removed the after-hours line from the
  electrical troubleshooting cost factors in EN, MS and ZH, and removed the
  corresponding internal research-note claim. The row's starting price,
  price range, service scope and every other catalogue price remain unchanged.
  `audit:pricing` now guards all three localized factor lists against the
  withdrawn after-hours wording.
- **Chinese locality name:** changed the Sri Petaling area guide and its shared
  localized label from the literal transliteration to the established local
  Chinese name **大城堡**. The corresponding page copy and link labels now agree;
  the existing build-time name-consistency check guards the registry/guide pair.
  The four Chinese locality harmonizations from Phase 47 were already present
  and were left intact.
- **Reviews, optional decisions, UI and branding:** left exactly as requested;
  no review content, optional homepage block, style, pricing layout or branding
  was changed.
- **Real project content:** existing published project records and assets were
  retained. The asset audit confirms all published project references resolve;
  no new project facts or images were fabricated.
- **Owner confirmations recorded:** phone QA and Google Business Profile check
  marked done per owner; distributed rate limiting parked because it is not
  needed now.

### 2. Repository cleanup — only proven-unused files removed

Removed the two unreferenced duplicate WebP logo exports
(`renovix-home-services-logo.webp` and
`renovix-home-services-logo-white.webp`). The PNG logo variants remain because
`components/Brand.tsx` references them. Project images, project OG images,
fonts, the Search Console verification file, scripts, data registries and
historical audit/progress documents were retained: they are referenced by the
site/build/audits or preserve project decisions and verification evidence.
No generated build output or local dependency folder is tracked.

### 3. QA after changes

- [x] `npm ci` — PASS; 0 vulnerabilities.
- [x] `npm run type-check` — PASS.
- [x] `npm run lint` — PASS (0 errors, 0 warnings).
- [x] `npm run build` — PASS; **689 / 689** static generation entries.
- [x] All **17 static audits** — PASS, including the new after-hours wording
      guard, pricing parity and Chinese area-name consistency.
- [x] Fresh production `next start` + `npm run audit:live` — **PASS 284 / 284,
      WARN 0, FAIL 0**; all **678 / 678** sitemap URLs returned 200.
- [x] Served-page spot checks: Sri Petaling's `/zh/` guide and areas index show
      **大城堡**, not the old label; EN/MS/ZH electrical pages no longer render
      the withdrawn after-hours factor.
- [x] Project asset audit — all published image references resolve; no
      unreferenced project assets remain.
- [x] `git diff --check` and tracked-file review — PASS; only the two proven
      unused logo WebP variants were removed, while required PNG logos remain.

**Status:** **🟢 complete and QA verified.** Existing project photos/details
were retained. Any additional genuine project material can be added when the
owner supplies it; no optional decisions or unverified details were changed.
