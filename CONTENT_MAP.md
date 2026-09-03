# Search + AI Content Map — Renovix Home Services (Phase 16)

The strategic map for SEO, AEO, GEO and LLM authority growth. Every row is a
real page that exists today, in English, Malay and Simplified Chinese, unless
the Status column says otherwise. This map is the reference for deciding what
to build next — and what *not* to build.

Conventions: `{lang}` = `en` (canonical), `ms`, `zh`. All URLs end with `/`.

## 1. Topic clusters (one pillar per service)

Each of the 10 services is a pillar page at `/{lang}/services/{slug}/`.
Supporting content links to its pillar, and the pillar links back. Figures are
current as of Phase 16.

| Pillar (service) | Problem guides linked | Pricing rows | Project proof | Status |
| --- | --- | --- | --- | --- |
| Tiling | 9 (broken, cracked, loose, hollow, uneven, grout, bathroom, kitchen, seepage-through-tiles) | 5 | Tiling projects | Complete |
| Electrical | 8 (tripping, socket, switch, flickering, short circuit, old wiring, power points, fan wiring) | 6 | Electrical projects | Complete |
| Painting | 6 (peeling, cracked, mouldy, faded, uneven, surface damage) | 4 | — (no painting-only project yet) | Complete; project proof wanted |
| Ceiling & Partition | 5 (cracked, sagging, water-damaged, stains, old plaster) | 4 | Ceiling projects | Complete |
| General Renovation | 6 (cross-trade) | 5 | Renovation projects | Complete |
| Plumbing | 6 (leakage, tap, pipe, drain, toilet, pressure) | 7 | Plumbing projects | Complete |
| Waterproofing | 6 (roof, bathroom, balcony, wall seepage, damp, stains) | 5 | — (no waterproofing-only project yet) | Complete; project proof wanted |
| Flooring | 0 dedicated (inbound links from tiling problem guides) | 5 | Flooring projects | Accepted gap (see §5) |
| Welding & Metal Works | 0 dedicated | 5 | 4 welding projects | Accepted gap (see §5) |
| Handyman | 6 (door, lock, curtain, TV mount, shelf, minor repairs) | 5 | — (handyman rarely photographed) | Complete |

Pillar page anatomy (every service): answer-first Q&A → overview → pricing
table (centralized) → materials → cost factors → duration → includes/excludes
→ sub-services → problems → property types → process → areas → FAQs → related
services → quote + WhatsApp CTAs. Every section exists in all 3 languages.

## 2. Problem-first map (46 guides at `/{lang}/problems/{slug}/`)

Each guide: what it means → causes → warning signs → solutions → when to call
a professional → linked service(s) → process → property types → areas → FAQs
→ related problems → CTAs. Problem → service intent mapping:

| Problem category | Primary service | Also served by |
| --- | --- | --- |
| Tiling (9) | Tiling | Waterproofing, plumbing, flooring, general renovation |
| Electrical (8) | Electrical | General renovation |
| Painting (6) | Painting | Waterproofing (mould/seepage causes) |
| Ceiling (5) | Ceiling & Partition | Waterproofing, plumbing (leak sources) |
| Plumbing (6) | Plumbing | Waterproofing, tiling (reinstatement) |
| Waterproofing (6) | Waterproofing | Plumbing, tiling, painting |
| Handyman (6) | Handyman | Electrical, plumbing (specialist referral) |

Real customer questions answered first ("Why is my ceiling leaking?" →
ceiling stains / water-damaged ceiling; "Why is my tap leaking?" → leaking
tap; "Why is my wall paint peeling?" → peeling paint). Emergency framing is
restricted to the audited triage set (power faults, active pipe bursts, the
sagging-ceiling safety question) — see CONTENT_GOVERNANCE.md.

## 3. Location map (46 guides + 2 hubs + index)

`/{lang}/areas/` → `/{lang}/areas/kuala-lumpur/` + `/{lang}/areas/selangor/`
→ 18 KL neighbourhood guides + 28 Selangor town guides. Every guide carries
district context (Phase 15 hierarchy), 6 locally-noted services, property
types, local problems, process, pricing from the centralized catalogue
(rendered through `getPricingById` / `getStartingRatesForLocation` — never
typed into the page), FAQs and nearby-area links.

Location × service intent is served by the existing guides plus the intent
matrix (`data/locations/intent-matrix.ts`), NOT by service×location doorway
pages. No `/{service}-in-{area}/` URLs exist and none are planned: 10 × 46 =
460 near-duplicate pages would destroy more authority than they create.

## 4. Intent → page mapping (where each intent ranks/answers)

| Intent | Authoritative page | Supporting |
| --- | --- | --- |
| Informational (what/why) | Problem guide | Service overview, area context |
| Commercial investigation (vs/best/material) | Service materials + cost factors + FAQs | Projects, problem solutions |
| Transactional (hire/book/quote) | Service page CTAs, `/quote/`, `/contact/`, WhatsApp | Homepage, area CTAs |
| Local ("near me", town) | Area guide | Service areas section, footer |
| Emergency (genuine only) | Electrical/plumbing pages + area triage block | Problem "when to call" |
| Cost/price | Service pricing section + `/ai/pricing.json` | Area pricing section, answer-first |
| Comparison/materials | Service materials section | Projects (real finishes) |
| Maintenance | Service + problem guides | FAQs |

One intent = one authoritative page. When two pages chase the same intent,
merge, redirect, differentiate or re-scope — never run two weak pages
(`npm run audit:authority` fails on duplicate questions, duplicate metadata
and pasted answers).

## 5. Known gaps (accepted, with rationale)

1. **Flooring and welding have no dedicated problem guides.** Flooring
   problems are answered on the flooring pillar (FAQs, answer-first) and the
   tiling problem guides link to the flooring service where surfaces overlap.
   Welding faults are answered on the welding pillar; 4 real welding projects
   carry the proof. Dedicated guides will only be added if genuine,
   distinct search demand appears — not speculatively.
2. **No painting-only or waterproofing-only project yet.** Publish one only
   when the owner supplies real photos and approves the details. Never stage
   or stock them.
3. **No blog/guides section yet.** The backlog below is approved in
   principle; each piece needs real research and all 3 languages before it
   ships. A thin English-only article helps nothing.

## 6. Guide backlog (intent-mapped, build only with real research)

1. Cost guide: full bathroom rebuild (bathroom waterproofing + tiling rows) —
   commercial intent → waterproofing + tiling pillars.
2. Cost guide: full house painting by property type (painting rows) —
   commercial intent → painting pillar.
3. Repair guide: diagnosing ceiling stains vs active leaks (problem-first) →
   waterproofing + ceiling + plumbing.
4. Material guide: SPC vs vinyl vs laminate vs tile (flooring + tiling rows) →
   flooring + tiling pillars.
5. Planning checklist: condo renovation approvals in KL/Selangor (strata
   rules, no invented procedures) → general renovation + area guides.
6. Comparison: cementitious vs PU vs torch-on waterproofing (systems already
   on the waterproofing page) → waterproofing pillar.
7. Maintenance guide: regrout/silicone intervals (handyman rows) → handyman.

Every guide must link its pillar service(s), quote only catalogue prices,
pass both audits, and ship in EN+MS+ZH together.

## 7. AI authority layer (machine-readable, auto-synchronized)

| Document | Source | Purpose |
| --- | --- | --- |
| `/llms.txt` | `lib/ai-knowledge.ts` | Crawler summary: services, prices, guides, areas, process, limits |
| `/ai/business.json` | `lib/ai-knowledge.ts` | Full business knowledge for assistants |
| `/ai/pricing.json` | `data/pricing/pricing.ts` | Price catalogue with scope, disclaimer, review date |
| `/sitemap.xml` | content registries | Crawl discovery (see SITEMAP.md) |

All four derive from the registries at build time. Nothing is hand-maintained,
so nothing can drift. `npm run audit:authority` fails if any AI file hardcodes
a price or stops reading the shared builder.

## 8. Monitoring readiness (Search Console / analytics)

Architecture is ready to measure: one canonical URL per page per language,
hreflang sets, self-canonicals, unique titles/descriptions, single sitemap.
Submit `/sitemap.xml` once in Search Console (see SITEMAP.md), then watch
impressions, clicks, CTR, indexed pages, queries and conversions per
cluster above. Discovery ≠ indexing; quality decides. No performance data is
fabricated anywhere in this repo.
