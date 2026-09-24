# renovix-home-services

Renovix Home Services – Home Renovation & Improvement Services in Kuala Lumpur & Selangor

## Technical foundation

| Package | Installed version |
| --- | --- |
| Next.js | 16.3.3 |
| React / React DOM | 19.2.8 |
| TypeScript | 6.0.3 |
| Tailwind CSS | 4.3.3 |
| @tailwindcss/postcss | 4.3.3 |
| PostCSS | 8.5.26 |
| ESLint | 9.39.5 |
| eslint-config-next | 16.3.3 |
| @types/node | 26.4.0 |
| @types/react | 19.2.18 |
| @types/react-dom | 19.2.5 |

## Requirements

- Node.js >= 20.9.0 (Next.js 16 requirement)
- npm

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Generate Next.js route types, then TypeScript check (`next typegen && tsc --noEmit`) |
| `npm run audit:business` | Business information audit — one verified phone, WhatsApp, email, address and opening-hours source; no placeholders, no invented SEO signals |
| `npm run audit:og-fonts` | Verifies every character the OG cards render is covered by the committed font subsets |
| `npm run audit:project-assets` | Verifies every published project image exists, matches its declared dimensions and nothing unreferenced is published |
| `npm run audit:pricing` | Pricing audit — prices single-sourced in `data/pricing/pricing.ts`, coherent ranges, full MS/ZH row coverage, nothing presented as a final price, every service-page price claim backed by a row, no prices outside the catalogue; Phase 46 — every MS/ZH row also carries a localized `scope`, `duration` and `factors` list with the same bullet count and exactly the same RM figures as the English row and no verbatim English bullet (the localized pillar and sub-service pages render these) |
| `npm run audit:locations` | Location audit — area hierarchy, quality gates, the search-intent matrix (pricing derived from `pricingId`, never duplicated) and multilingual coverage |
| `npm run audit:authority` | Search + AI authority audit — no fabricated claims, urgency language only where genuine, all cross-references resolve, index pages iterate the registries, one question per page, unique metadata per language, AI feeds in sync (`/llms.txt` enumerates every problem guide and may not slice the list, and the homepage's FAQPage node is built from the same array its accordion renders), alt text everywhere; the title layer is single-sourced (one exported `TITLE_MAX_LENGTH`, the project composer really compares against it, all three dictionaries define a category-free `metaTitleShortTemplate`, the legal pages compose `brandTitle()`, and every bespoke `seoTitle` literal fits the budget and carries the brand); Phase 49 — the Open Graph locale layer is single-sourced too (`og:locale:alternate` is derived from the same published-language set as the hreflang alternates, excludes the page's own locale, and `og:locale` stays localized) |
| `npm run audit:subservices` | Sub-service audit — lists the 51 priced sub-services, verifies authored pages are unique, belong to a real service, reference a real `pricingId` and carry all three language blocks, that the service pillar → sub-service page, problem → sub-service, area guide → sub-service (Phase 29) and region hub → sub-service + problem (Phase 35) link wiring stays registry-derived and language-filtered, and — Phase 46 — that every one of the 57 problem guides is declared in at least one sub-service's `relatedProblems` (no guide may publish with zero links to a bookable scope) |
| `npm run audit:blog` | Blog audit — every related slug and pricing id resolves, no hard-coded prices, EN/MS/ZH complete, unique metadata per language, no orphan articles; both region hubs derive a non-empty guide list from their own child areas and render it through the shared `GuideLinksSection`; every priced scope an article quotes is linked from `relatedSubServices` (Phase 45) |
| `npm run audit:quote` | Quote-flow audit — API security invariants, registry integrity, truthful photo handling, i18n completeness, conversion-event hooks, quote-page SEO |
| `npm run audit:analytics` | Analytics audit — provider exclusivity (GA4 xor GTM, single `page_view`), no fabricated IDs, all conversion events wired, PII cannot reach events, Web Vitals reporting, consent defaults, conditional CSP, privacy disclosure in EN/MS/ZH |
| `npm run audit:security` | Security audit — CSP/clickjacking headers, quote-endpoint guards, no secrets in source, env gitignore |
| `npm run audit:sitemap` | Sitemap/robots source-of-truth audit — 678 URLs from the registries, apex host, no invented lastmod; Phase 49 — `lastmod` truthfulness: the helper resolves to the *later* of the site-wide reviewed date and every content date the registries record for that page, the module computes no runtime date, and the Knowledge Hub loop dates each guide from its own `published`/`updated` values |
| `npm run audit:schema` | Structured-data honesty — required entity types present, no reviews/ratings/awards/opening days; pillar OfferCatalogs must map the full visible scope list without a sample cap, sub-service Service nodes must reference the shared business provider and their own localized parent Service (Phase 43), and project pages must name the pillar Service they re-declare from the service-content registry, never from the portfolio category label (Phase 44; rendered parity enforced by `audit:live`); Phase 49 — every entity index (`/services/`, `/problems/`, `/areas/`, `/projects/`, `/blog/`, ×3 languages) publishes the `ItemList` node for the registry list it renders, and the areas index names each guide through `getAreaName` and links it through `contentHref("area", …)` |
| `npm run audit:multilingual` | EN/MS/ZH coverage complete; stale 18/28 location counts cannot return; no component may build display text by humanizing a slug (that is how English labels reached `/ms/` and `/zh/` pages); the in-copy internal links the English area guides write as `[label](/services/slug)` survive translation — paragraph structure stays aligned, a service the English paragraph links and the localized paragraph names must be linked there too, every in-copy target is a published service, no label is a slug or an English service name, and all 55 area entities publish in-copy links in all three languages; the same rules cover the 10 service pillar pages (prefix-aligned paragraphs, plus a page-level rule: a service the English pillar links and the localized pillar names anywhere in the copy it renders must be linked there too); Phase 46 — the 13 district groups and 5 coverage states of the location registry have a Malay and Chinese name (+ district description) in `data/i18n/lists.ts`, and no component or page reads `district.name` / `district.description` / `state.name` directly — the four render sites must go through `getDistrictName` / `getDistrictDescription` / `getStateName`; Phase 47 — one place, one name: both areas-index locality lists label through `getAreaName`, which must keep the precedence label table → the guide's own localized name → English registry name, the problem index cards *and* the index `ItemList` node must read the localized guide's own name + subtitle (the retired `problemList` table may not come back), and per language `areaNames` may contradict no guide name while all 53 localized area names stay unique |
| `npm run audit:routes` | App Router tree matches the intended public architecture; no Carpentry category |
| `npm run audit:live` | Live QA against a running `next start` (all 678 sitemap URLs fetched, SEO/schema spot checks, quote API, security headers, and — Phases 28–36 — the rendered internal link graph (no orphan pages, every sub-service page linked from its own service pillar and back, every area guide and region hub linked to the sub-service scopes carried out there, no English slug label anywhere on `/ms/` or `/zh/`, no internal link to an unserved URL), plus feed↔sitemap parity and the per-language URL maps every catalogued entity publishes (Phase 36), plus — Phase 39 — the rendered in-copy links: all 165 area guides, region hubs and all 30 service pillar pages render them in EN/MS/ZH, the `/ms/` and `/zh/` corpora are not smaller than the English one, and no served page ships `[label](/path)` markup as visible text, plus — Phase 41 — the title layer on all 678 served pages (a title exists, it fits the budget exported from `i18n/seo.ts`, it carries the brand token, it is unique within its language) and the region hubs' Knowledge Hub links (all 6 hubs render at least 8 guides each), plus — Phase 42 — `/llms.txt` enumerating all 57 problem guides (compared in both directions, like every other family) and the rendered-Q&A layer: every page that renders question-and-answer copy publishes a `FAQPage` node for it, no page publishes one without rendered Q&A, and all three homepages are checked by name), plus — Phase 43 — all 30 pillar OfferCatalogs matching every rendered overview scope name/description (no omission, stale entry or language drift) and all 153 sub-service entities referencing their shared business provider and visibly linked, localized parent Service, plus — Phase 44 — site-wide entity-graph consistency: every entity `@id` that multiple pages define must agree with its owner page on name, URL and serviceType across all 678 pages, and every bare `{"@id": …}` reference must resolve to an entity the site publishes, plus — Phase 45 — the quoted-scope layer: every Knowledge Hub guide links the sub-service page behind each price row it renders, and each such scope page links the guide back, in every language (144 + 144 rendered edges), plus — Phase 46 — all 171 problem guide pages link to at least one bookable sub-service scope, and the registry copy reaches `/ms/` and `/zh/` localized: none of the 102 localized sub-service pages renders an English pricing scope, none of the 20 localized pillars renders an English price-factor bullet, none of the 112 localized area guides / region hubs / area indexes renders an English district name — and each renders the localized string instead, plus — Phase 47 — entity labels vs the pages they name: all 159 area guides publish their own localized `WebPage.name`, each language publishes 53 distinct area names, all 19,875 same-language anchors pointing at an area guide use a localized label and never its English name, and all 106 locality chips on each areas index plus all 57 problem cards on each problem index carry the exact name the guide they open publishes, plus — Phase 48 — every Knowledge Hub guide links from its main content to the region hubs supported by its own related area links (72 guide → hub links, all 72 already linked back; no footer links counted and no unsupported region links) , plus — Phase 49 — the crawler-facing signals compared against the page's own content: every sitemap `<lastmod>` is a valid, non-future ISO date and no guide entry is dated before the guide's published date (36 entries), all 678 pages publish `og:locale` plus the `og:locale:alternate` set matching their hreflang set (1,356 tags), and all 15 entity index pages publish an `ItemList` — the areas index listing all 53 area guides per language under the name each guide publishes |

## Pricing data

Indicative *starting* prices live in one place, `data/pricing/pricing.ts`. Malay
and Chinese files under `data/pricing/translations/` reword the scope and
duration only — they cannot contain a price, and `npm run audit:pricing` fails
the build if one appears. The same entries feed every consumer so they can
never disagree: the pricing table on each service page, the answer-first copy,
the location pricing sections, and the machine-readable feeds at
`/ai/pricing.json` and `/ai/business.json` for answer engines (plus the
crawler summary at `/llms.txt`, linked from the footer). All three documents
are generated at build time from `lib/ai-knowledge.ts`, which derives every
fact from the same registries the pages render. `npm run audit:authority`
additionally fails if any AI-feed file hardcodes a price, and if any price
appears anywhere outside the service pages and the catalogue.

## Quote form email (production)

The `/en/quote/`, `/ms/quote/` and `/zh/quote/` form posts to a Next.js Route Handler at `/api/quote/`. The handler validates the submission on the server and emails a lead notification through [Resend](https://resend.com).

Without the variables below, the website still runs. Quote submissions then fail with a localized error and a WhatsApp fallback — they never show a fake success state.

Copy `.env.example` to `.env.local` for local development, or set the same keys in Vercel.

| Variable | Required for delivery | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Resend API key. Server-side only. |
| `QUOTE_FROM_EMAIL` | Yes | From address on a domain verified in Resend, e.g. `Renovix Home Services <noreply@renovixhomeservices.my>`. |
| `QUOTE_NOTIFICATION_EMAIL` | No | Inbox for new leads. Defaults to `renovixhomeservices@gmail.com`. |

Do not commit real API keys or `.env.local`.

## Analytics & measurement (Phase 24)

Measurement is **code-complete but OWNER-PENDING**: with no measurement IDs
configured, *no* analytics script loads at all and the site behaves exactly as
before. All IDs come from environment variables (documented in
`.env.example`); none are hardcoded and none were invented. GA4 loads either
through the Google tag directly (`NEXT_PUBLIC_GA4_MEASUREMENT_ID`) **or**
through Google Tag Manager (`NEXT_PUBLIC_GTM_CONTAINER_ID`) — never both.
Core Web Vitals (LCP, INP, CLS + FCP, TTFB) are measured from real users via
`next/web-vitals` and reported as non-interaction events. Conversion events
carry no personal data — see `PHASE_24_ANALYTICS.md` for the full event
catalogue, funnel definition, privacy posture and the owner activation
checklist, and `npm run audit:analytics` for the enforced invariants.

## Version notes

- Tailwind CSS v4 uses the `@tailwindcss/postcss` plugin. `autoprefixer` is not installed — Tailwind v4 handles vendor prefixing internally.
- ESLint is on the 9.x line because the plugins bundled with `eslint-config-next@16.3.3` (`eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`) do not yet support ESLint 10.
- TypeScript is pinned to 6.0.3: the `typescript-eslint` toolchain used by `eslint-config-next` declares a peer range of `<6.1.0`, so TypeScript 7.0.x (npm `latest`) is not yet compatible with the official Next.js lint setup.
- `@types/node` 26.4.0 matches the TypeScript 6.0 series (`ts6.0` dist-tag).
