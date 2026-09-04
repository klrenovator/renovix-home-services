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
| `npm run audit:pricing` | Pricing audit — prices single-sourced in `data/pricing/pricing.ts`, coherent ranges, full MS/ZH row coverage, nothing presented as a final price, every service-page price claim backed by a row, no prices outside the catalogue |
| `npm run audit:locations` | Location audit — area hierarchy, quality gates, the search-intent matrix (pricing derived from `pricingId`, never duplicated) and multilingual coverage |
| `npm run audit:authority` | Search + AI authority audit — no fabricated claims, urgency language only where genuine, all cross-references resolve, index pages iterate the registries, one question per page, unique metadata per language, AI feeds in sync, alt text everywhere |
| `npm run audit:subservices` | Sub-service audit — lists the 51 priced sub-services, verifies authored pages are unique, belong to a real service, reference a real `pricingId` and carry all three language blocks |
| `npm run audit:blog` | Blog audit — every related slug and pricing id resolves, no hard-coded prices, EN/MS/ZH complete, unique metadata per language, no orphan articles |
| `npm run audit:quote` | Quote-flow audit — API security invariants, registry integrity, truthful photo handling, i18n completeness, conversion-event hooks, quote-page SEO |
| `npm run audit:analytics` | Analytics audit — provider exclusivity (GA4 xor GTM, single `page_view`), no fabricated IDs, all conversion events wired, PII cannot reach events, Web Vitals reporting, consent defaults, conditional CSP, privacy disclosure in EN/MS/ZH |
| `npm run audit:security` | Security audit — CSP/clickjacking headers, quote-endpoint guards, no secrets in source, env gitignore |
| `npm run audit:sitemap` | Sitemap/robots source-of-truth audit — 654 URLs from the registries, apex host, no invented lastmod |
| `npm run audit:schema` | Structured-data honesty — required entity types present, no reviews/ratings/awards/opening days |
| `npm run audit:multilingual` | EN/MS/ZH coverage complete; stale 18/28 location counts cannot return |
| `npm run audit:routes` | App Router tree matches the intended public architecture; no Carpentry category |
| `npm run audit:live` | Live QA against a running `next start` (654 sitemap URLs, SEO/schema spot checks, quote API) |

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
