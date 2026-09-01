# Renovix Home Services — Project Progress

## Overview

- **Brand:** Renovix Home Services
- **Market:** Kuala Lumpur, Selangor and the Klang Valley
- **Domain:** renovixhomeservices.my
- **Stack:** Next.js 16.3.3, React 19.2.8, TypeScript 6.0.3, Tailwind CSS 4.3.3
- **Primary language:** English (homepage); Malay and Chinese routes scaffolded for later phases

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

## PHASE 4 — Areas / Location Pages — [ ]

## PHASE 5 — Projects Portfolio — [ ]

## PHASE 6 — Blog & Content — [ ]

## PHASE 7 — Full Multilingual Content — [ ]

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
- Dedicated service detail pages were built in Phase 2; problem pages were built in Phase 3. Location pages, projects, blog and full multilingual content are intentionally not built yet (Phases 4–7).
