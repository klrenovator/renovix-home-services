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
| `npm run audit:authority` | Search + AI authority audit — no fabricated claims, urgency language only where genuine, all cross-references resolve, index pages iterate the registries, one question per page, unique metadata per language, AI feeds in sync, alt text everywhere |

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

## Version notes

- Tailwind CSS v4 uses the `@tailwindcss/postcss` plugin. `autoprefixer` is not installed — Tailwind v4 handles vendor prefixing internally.
- ESLint is on the 9.x line because the plugins bundled with `eslint-config-next@16.3.3` (`eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`) do not yet support ESLint 10.
- TypeScript is pinned to 6.0.3: the `typescript-eslint` toolchain used by `eslint-config-next` declares a peer range of `<6.1.0`, so TypeScript 7.0.x (npm `latest`) is not yet compatible with the official Next.js lint setup.
- `@types/node` 26.4.0 matches the TypeScript 6.0 series (`ts6.0` dist-tag).
