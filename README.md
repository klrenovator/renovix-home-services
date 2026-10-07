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
| `npm run audit:citations` | Lead-generation Task 3.3 — guards owner-only listing status, HTTPS direct-profile URLs on the expected domains, the conditional EN/MS/ZH contact-page links, the privacy-safe directory click event, and the honest `[PENDING]` external registration gate; rejects search/share/home/claim links and never claims an off-site listing is live |
| `npm run audit:subservices` | Sub-service audit — lists the 51 priced sub-services, verifies authored pages are unique, belong to a real service, reference a real `pricingId` and carry all three language blocks, that the service pillar → sub-service page, problem → sub-service, area guide → sub-service (Phase 29) and region hub → sub-service + problem (Phase 35) link wiring stays registry-derived and language-filtered, and — Phase 46 — that every one of the 57 problem guides is declared in at least one sub-service's `relatedProblems` (no guide may publish with zero links to a bookable scope) |
| `npm run audit:blog` | Blog audit — every related slug and pricing id resolves, no hard-coded prices, EN/MS/ZH complete, unique metadata per language, no orphan articles; both region hubs derive a non-empty guide list from their own child areas and render it through the shared `GuideLinksSection`; every priced scope an article quotes is linked from `relatedSubServices` (Phase 45) |
| `npm run audit:cro` | CRO-surface audit (Lead-generation Task 1.1) — the floating WhatsApp CTA builds its link from the single site number through `lib/whatsapp.ts`, fires `whatsapp_click` through `TrackedLink`, carries a registry-derived localized pre-fill (`{name}`/`{service}` slots, real MS/ZH copy, ≤ 200 characters) on every service, sub-service, problem, area, region, guide and project page plus the index pages, is absent on the quote page (which owns its own quick path), and stays accessible and non-intrusive (visible localized label, decorative icon, 44 px target, safe-area offset below the header/overlay z-index, hidden from print); Lead-generation Task 1.3 — the "Fast Photo Quote" banner sits directly under the pricing table of every service pillar page and under the price block of every sub-service page, builds its link through the same `buildWhatsAppHref` helper, fires the same tracked `whatsapp_click` event with a coarse `photo_quote_banner_*` surface (plus the page's registry slugs), carries all seven `photoQuote` keys in genuine EN/MS/ZH with `{name}`/`{service}` slots and length caps, never renders on the quote flow, and keeps a visible localized CTA label with decorative camera/WhatsApp icons hidden from assistive tech |
| `npm run audit:quote` | Quote-flow audit — API security invariants, registry integrity, truthful photo handling, i18n completeness, conversion-event hooks, quote-page SEO; Lead-generation Task 1.2 — the instant WhatsApp quote route: the form-aware banner above the form recomposes its tracked `wa.me` link from the entered service, sub-service, property type and location through the localized templates in EN/MS/ZH, the error fallback carries the same details into the chat, and the retired static pre-form quick path cannot return; Lead-generation Task 2.1 — the lead-notification pipeline guide (`QUOTE_EMAIL_SETUP.md`) names all three variables, documents domain verification, Vercel scoping + redeploy, the end-to-end test, the WhatsApp fallback and the server-side-only rule with no secrets, while the code still reads the documented variables and fails honestly without them |
| `npm run audit:analytics` | Analytics audit — provider exclusivity (GA4 xor GTM, single `page_view`), no fabricated IDs, placeholder-shaped IDs rejected in the app and in the verifier, all conversion events wired, PII cannot reach events, Web Vitals reporting, consent defaults, conditional CSP, privacy disclosure in EN/MS/ZH; Lead-generation Task 2.2 follow-up — the deployed-site verifier stays read-only and offline-honest (an unreachable host is never reported as a pass), and the guide must keep the placeholder explanation, the `empty dashboard` checklist (Realtime window, property, collection toggle, filters, blocking, CSP completeness) and point owners at DevTools → Network rather than the (always empty) page source; CSP completeness — every origin Google documents for GA4 without Ads and Microsoft documents for Clarity is present in the config, the two CSP lists cannot drift, and the live check turns a missing origin into a defect; Lead-generation Task 2.2 — the measurement activation guide (`ANALYTICS_SETUP.md`) must name every variable and cover GA4 stream creation, Clarity setup, the Vercel + redeploy step, the live verification gate and the removal path with no fabricated IDs, the two verify scripts must stay wired and free of any real ID, and the browser harness must cover the four business events, block all external DNS and stub the quote endpoint instead of sending a real lead |
| `npm run audit:security` | Security audit — CSP/clickjacking headers, quote-endpoint guards, no secrets in source, env gitignore |
| `npm run audit:sitemap` | Sitemap/robots source-of-truth audit — 678 URLs from the registries, apex host, no invented lastmod; Phase 49 — `lastmod` truthfulness: the helper resolves to the *later* of the site-wide reviewed date and every content date the registries record for that page, the module computes no runtime date, and the Knowledge Hub loop dates each guide from its own `published`/`updated` values |
| `npm run audit:schema` | Structured-data honesty — required entity types present, no reviews/ratings/awards/opening days; pillar OfferCatalogs must map the full visible scope list without a sample cap, sub-service Service nodes must reference the shared business provider and their own localized parent Service (Phase 43), and project pages must name the pillar Service they re-declare from the service-content registry, never from the portfolio category label (Phase 44; rendered parity enforced by `audit:live`); Phase 49 — every entity index (`/services/`, `/problems/`, `/areas/`, `/projects/`, `/blog/`, ×3 languages) publishes the `ItemList` node for the registry list it renders, and the areas index names each guide through `getAreaName` and links it through `contentHref("area", …)` |
| `npm run audit:multilingual` | EN/MS/ZH coverage complete; stale 18/28 location counts cannot return; no component may build display text by humanizing a slug (that is how English labels reached `/ms/` and `/zh/` pages); the in-copy internal links the English area guides write as `[label](/services/slug)` survive translation — paragraph structure stays aligned, a service the English paragraph links and the localized paragraph names must be linked there too, every in-copy target is a published service, no label is a slug or an English service name, and all 55 area entities publish in-copy links in all three languages; the same rules cover the 10 service pillar pages (prefix-aligned paragraphs, plus a page-level rule: a service the English pillar links and the localized pillar names anywhere in the copy it renders must be linked there too); Phase 46 — the 13 district groups and 5 coverage states of the location registry have a Malay and Chinese name (+ district description) in `data/i18n/lists.ts`, and no component or page reads `district.name` / `district.description` / `state.name` directly — the four render sites must go through `getDistrictName` / `getDistrictDescription` / `getStateName`; Phase 47 — one place, one name: both areas-index locality lists label through `getAreaName`, which must keep the precedence label table → the guide's own localized name → English registry name, the problem index cards *and* the index `ItemList` node must read the localized guide's own name + subtitle (the retired `problemList` table may not come back), and per language `areaNames` may contradict no guide name while all 53 localized area names stay unique |
| `npm run audit:routes` | App Router tree matches the intended public architecture; no Carpentry category |
| `npm run audit:live` | Live QA against a running `next start` (all 678 sitemap URLs fetched, SEO/schema spot checks, quote API, security headers, and — Phases 28–36 — the rendered internal link graph (no orphan pages, every sub-service page linked from its own service pillar and back, every area guide and region hub linked to the sub-service scopes carried out there, no English slug label anywhere on `/ms/` or `/zh/`, no internal link to an unserved URL), plus feed↔sitemap parity and the per-language URL maps every catalogued entity publishes (Phase 36), plus — Phase 39 — the rendered in-copy links: all 165 area guides, region hubs and all 30 service pillar pages render them in EN/MS/ZH, the `/ms/` and `/zh/` corpora are not smaller than the English one, and no served page ships `[label](/path)` markup as visible text, plus — Phase 41 — the title layer on all 678 served pages (a title exists, it fits the budget exported from `i18n/seo.ts`, it carries the brand token, it is unique within its language) and the region hubs' Knowledge Hub links (all 6 hubs render at least 8 guides each), plus — Phase 42 — `/llms.txt` enumerating all 57 problem guides (compared in both directions, like every other family) and the rendered-Q&A layer: every page that renders question-and-answer copy publishes a `FAQPage` node for it, no page publishes one without rendered Q&A, and all three homepages are checked by name), plus — Phase 43 — all 30 pillar OfferCatalogs matching every rendered overview scope name/description (no omission, stale entry or language drift) and all 153 sub-service entities referencing their shared business provider and visibly linked, localized parent Service, plus — Phase 44 — site-wide entity-graph consistency: every entity `@id` that multiple pages define must agree with its owner page on name, URL and serviceType across all 678 pages, and every bare `{"@id": …}` reference must resolve to an entity the site publishes, plus — Phase 45 — the quoted-scope layer: every Knowledge Hub guide links the sub-service page behind each price row it renders, and each such scope page links the guide back, in every language (144 + 144 rendered edges), plus — Phase 46 — all 171 problem guide pages link to at least one bookable sub-service scope, and the registry copy reaches `/ms/` and `/zh/` localized: none of the 102 localized sub-service pages renders an English pricing scope, none of the 20 localized pillars renders an English price-factor bullet, none of the 112 localized area guides / region hubs / area indexes renders an English district name — and each renders the localized string instead, plus — Phase 47 — entity labels vs the pages they name: all 159 area guides publish their own localized `WebPage.name`, each language publishes 53 distinct area names, all 19,875 same-language anchors pointing at an area guide use a localized label and never its English name, and all 106 locality chips on each areas index plus all 57 problem cards on each problem index carry the exact name the guide they open publishes, plus — Phase 48 — every Knowledge Hub guide links from its main content to the region hubs supported by its own related area links (72 guide → hub links, all 72 already linked back; no footer links counted and no unsupported region links) , plus — Phase 49 — the crawler-facing signals compared against the page's own content: every sitemap `<lastmod>` is a valid, non-future ISO date and no guide entry is dated before the guide's published date (36 entries), all 678 pages publish `og:locale` plus the `og:locale:alternate` set matching their hreflang set (1,356 tags), and all 15 entity index pages publish an `ItemList` — the areas index listing all 53 area guides per language under the name each guide publishes |

| `npm run verify:quote-email` | Lead-notification configuration check (Lead-generation Task 2.1) — formats of `RESEND_API_KEY` / `QUOTE_FROM_EMAIL` / `QUOTE_NOTIFICATION_EMAIL`, freemail and public-prefix mistakes; sends nothing, prints no secrets, always exits 0 |
| `npm run verify:analytics` | Measurement configuration check (Lead-generation Task 2.2) — ID formats identical to `lib/analytics-config.ts`, the GA4-xor-GTM delivery route, the exact CSP origins the build will allow, misnamed variables; loads no script, makes no network call |
| `npm run verify:analytics:e2e` | End-to-end conversion-event verification (Lead-generation Task 2.2) — serves the real production build, drives a real headless Chromium over CDP and asserts `whatsapp_click` (EN/MS/ZH), `phone_click`, `quote_form_submit`, `quote_form_success`, `quote_form_error`, the consent defaults and the no-PII allowlist each hold exactly once; `-- --configured` rebuilds into a throwaway `.next-analytics-e2e/` with TEST-format IDs and additionally asserts the provider hop (gtag.js + Clarity tags, CSP, `page_view` dedupe, `window.dataLayer`, web vitals) with every external hostname unresolvable |
| `npm run verify:local-seo` | Local authority readiness check (Lead-generation Task 3.1) — prints the exact NAP block, phone, website and hours a Google Business Profile and every Malaysian citation must use, read live from `data/site.ts` so profile and site cannot diverge; lists the 53 published locality guides grouped by region as the service-area reference; reports whether the homepage reviews link is armed with a verified profile URL. Contacts no Google service, prints only supplied facts, always exits 0 |
| `npm run verify:citations` | Local citation readiness (Lead-generation Task 3.3) — reports Yellow Pages Malaysia, Hotfrog, BusinessList.my and Facebook Page status; validates any owner-declared direct HTTPS profile URL; does not contact directories or claim listings are live/approved |
| `npm run verify:project-locations` | Project Area Tagging verification (Lead-generation Task 3.4) — inspects all 28 published projects in `data/project-content/projects.ts` for confirmed neighbourhood locations, validates region and area guide slugs against published KL/Selangor guides, and reports tagged vs pending projects. Enforces non-fabrication rules |
| `npm run verify:analytics:live` | Deployed-site measurement check (Lead-generation Task 2.2 follow-up) — fetches the live page, reads the served CSP and the Next.js client bundles and prints the GA4 Measurement ID (and GTM/Clarity/Ads IDs) the deployment actually reports to, flags a documentation placeholder that could never report, verifies the served policy against the complete origin list Google and Microsoft document (the `CSP completeness` line; a missing origin is reported as a defect, because the tag then loads while its data traffic is dropped), and supports `--expect G-…` to compare against GA4 → Admin → Data streams. Read-only: no writes, no credentials; an unreachable host is reported as "not a verdict" (exit 0), and exit 1 is reserved for a defect observed in the deployment |
| `npm run verify:search-console` | Search Console readiness check (Lead-generation Task 3.2) — reads the HTML-file verification token, `app/robots.ts` (one canonical `Sitemap:` line), `lib/sitemap.ts`, `app/sitemap.ts` and the retired-URL redirects from the repository, then prints the owner steps that remain; `-- --live` also fetches `/robots.txt`, `/sitemap.xml` and the verification file to prove Google's three fetches answer. Draws no conclusion about submission/processing — that is only visible in the owner's Search Console |
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

Full step-by-step activation guide (Lead-generation Task 2.1): `QUOTE_EMAIL_SETUP.md` — Resend account, sending-domain verification, API key, Vercel variables, redeploy, and the end-to-end production test. Local format check (sends nothing, prints no secrets): `npm run verify:quote-email`.

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

Step-by-step activation (Lead-generation Task 2.2): **`ANALYTICS_SETUP.md`** —
GA4 property and web data stream, Microsoft Clarity project, the Vercel
variables, the mandatory redeploy (`NEXT_PUBLIC_*` values are inlined at build
time), optional Google Ads conversions and GTM, troubleshooting, and the live
verification gate. Two local checks come with it:

| Command | What it proves |
| --- | --- |
| `npm run verify:analytics` | The configured IDs have the shapes `lib/analytics-config.ts` accepts, which delivery route will load, and exactly which CSP origins the build adds. Loads nothing, calls nothing. |
| `npm run verify:analytics:e2e` | A real headless browser performs the customer actions against the real production build: `whatsapp_click` on `/en/`, `/ms/` and `/zh/`, `phone_click`, `quote_form_start` / `submit` / `success`, and `quote_form_error` (`reason: unavailable`) against the real unstubbed 503 — each exactly once, with no customer data in any parameter. |
| `npm run verify:analytics:e2e -- --configured` | The provider half of the chain, using clearly-marked TEST-format IDs in a throwaway `.next-analytics-e2e/` build: `gtag.js` and Clarity load, the CSP allows exactly those origins, one `page_view` per route plus one per client-side navigation, every event reaches `window.dataLayer`, web vitals arrive — with every non-loopback hostname unresolvable, so nothing is ever sent. |
| `npm run verify:analytics:live` | The deployed build, read-only: the served CSP proves whether a provider is configured, and the client bundles reveal *which* GA4 Measurement ID production reports to (plus GTM/Clarity/Ads and the Phase-24 event layer). `-- --expect G-…` compares it with the property in GA4 → Admin → Data streams; a documentation placeholder is flagged, because such a value loads a tag that can never report. |

None of these claims live dashboard data: that is the owner's to confirm in
GA4 Realtime / DebugView and Clarity (`ANALYTICS_SETUP.md` §5.2–§5.3). The
deployed build was observed on 2026-10-06 to carry a GA4 Measurement ID
(GTM/Clarity/Ads unconfigured) — `ANALYTICS_SETUP.md` §2.1 records exactly what
that evidence does and does not prove.

## Local SEO (Google Business Profile)

The website's half of local search is complete and enforced: one name, address,
phone number, email and hours range published from `data/site.ts`
(`npm run audit:business` fails the build if a second set appears), a
`LocalBusiness` entity on every page (`components/seo/schema.ts`, with no
`geo`, `rating` or `sameAs` — those signals have not been supplied), and 53
locality guides under `/areas/`.

What remains is the Google Business Profile itself, which only the business's
own Google account can create and verify. Full owner guide (Lead-generation
Task 3.1): **`LOCAL_SEO_SETUP.md`** — categories, service areas, hours, the
real-photos rule, verification, the first-30-days routine and the live
verification checklist. Print the exact details with:

```bash
npm run verify:local-seo
```

The homepage reviews block ("Posted on Google") links to the live profile as
soon as one verified URL is supplied — set `googleReviewsUrl` in `data/site.ts`
(`LOCAL_SEO_SETUP.md` §6). Until then it renders no link at all, and
`audit:authority` fails the build on a guessed, templated, search-shaped or
hardcoded profile URL. Following the link fires a tracked
`review_profile_click` event (`surface: home_reviews`) in all three languages.

Local directory citations (Lead-generation Task 3.3) remain an owner action.
`LOCAL_SEO_SETUP.md` §5 gives the duplicate/claim-first workflow and exact NAP
rules for Yellow Pages Malaysia, Hotfrog, BusinessList.my and Facebook Local
Business. `npm run verify:citations` validates only the repository's pending /
published status and any direct profile URL; it cannot prove a listing exists or
is approved. The Contact page's localized EN/MS/ZH directory block is hidden
until the owner marks a public listing as published and supplies its direct
URL. Its outbound `directory_profile_click` event contains only a fixed
platform ID, language and page surface.

## Search Console (indexing)

The site's half of Search Console is deployed and continuously checkable: the
HTML-file verification token is served from `public/`, `robots.txt` names the
single canonical sitemap (`app/robots.ts` → `lib/sitemap.ts` →
`https://renovixhomeservices.my/sitemap.xml`), `app/sitemap.ts` generates that
sitemap from the content registries with hreflang alternates and two build-time
guards, and the retired per-language sitemap URLs still redirect. Owner guide
(Lead-generation Task 3.2): **`SEARCH_CONSOLE_SETUP.md`** — confirm-or-submit
(never resubmit blindly), what each sitemap status means, URL Inspection on the
money pages, linking Search Console to GA4, the monthly query routine and
troubleshooting. Check the repository half, and the live fetches, with:

```bash
npm run verify:search-console
npm run verify:search-console -- --live
```

Whether the sitemap is submitted and processed, and what is indexed, is only
visible in the owner's own Search Console account — no script here claims it.

## Project Area Tagging (Local Proof & CRO)

Owner guide (Lead-generation Task 3.4): **`PROJECT_LOCATIONS_SETUP.md`** — step-by-step
mapping instructions for the 28 published projects in `data/project-content/projects.ts`.
The repository provides full bidirectional architecture: when a project is tagged with a
confirmed `location: { region, area? }`, it appears with real photos and case study links on
that area's guide (`AreaProjectsSection`), on the region hub (`AreaRegionProjectsSection`),
and links back from the project detail page. Untagged projects cleanly omit the section so no
fake case studies or placeholders are ever rendered. Check current progress with:

```bash
npm run verify:project-locations
```


## Version notes

- Tailwind CSS v4 uses the `@tailwindcss/postcss` plugin. `autoprefixer` is not installed — Tailwind v4 handles vendor prefixing internally.
- ESLint is on the 9.x line because the plugins bundled with `eslint-config-next@16.3.3` (`eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`) do not yet support ESLint 10.
- TypeScript is pinned to 6.0.3: the `typescript-eslint` toolchain used by `eslint-config-next` declares a peer range of `<6.1.0`, so TypeScript 7.0.x (npm `latest`) is not yet compatible with the official Next.js lint setup.
- `@types/node` 26.4.0 matches the TypeScript 6.0 series (`ts6.0` dist-tag).
