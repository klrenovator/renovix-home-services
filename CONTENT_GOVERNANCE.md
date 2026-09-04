# Content Governance — Renovix Home Services (Phase 16)

Rules for every future agent, editor and content addition. These rules are
enforced mechanically where possible (`npm run audit:business`,
`audit:pricing`, `audit:locations`, `audit:authority`, `audit:project-assets`,
`audit:og-fonts`); the rest is enforced by review. When in doubt, publish
less — quality over page count.

## 1. Never fabricate

- No fake reviews, ratings, review counts, testimonials or testimonials pages.
- No fake projects, photos, locations, dates, measurements, materials lists,
  before/after claims or outcomes. Project fields stay empty until the owner
  supplies and approves them.
- No registration numbers, licences, certifications, awards, geo coordinates,
  years of experience, team members or branch offices.
- No ranking claims of any kind: never "rank #1", "guaranteed ranking",
  "first page", "guaranteed AI overview", awards or credentials the business
  has not supplied. (`audit:authority` §1 fails the build on these.)
- Contact details, hours and address come only from `data/site.ts`.

## 2. Prices: one source, always indicative

- Every RM figure the business quotes lives in `data/pricing/pricing.ts` and
  nowhere else. Translations reword scope/duration only.
- Service pages, area pages, guides, FAQs, components and AI feeds render
  prices through the catalogue getters (`getPricingForService`,
  `getPricingById`, `getStartingRatesForLocation`, …). Typing a price into
  copy, a component or a feed is a defect — see the Phase 16
  `AreaAnswerFirstSection` fix.
- Every price is "starting from", beside its scope, unit, cost factors,
  disclaimer and `LAST_REVIEWED` date. Never "fixed", "final", "guaranteed"
  or "cheapest".
- Problems, areas, projects, FAQs and dictionaries quote no prices at all.
- `lastReviewed` / `CONTENT_LAST_MODIFIED` are content dates, bumped by hand
  when content materially changes — never `now()`, never the build date.
  Never display an "updated" date the content did not earn.

### 2a. Search-intent pricing derives — it never duplicates (Phase 18, binding)

- **The search intent matrix (`data/locations/intent-matrix.ts`) must NEVER
  maintain an independent price or unit source.** It stores `pricingId` and
  nothing else about money.
- The chain is one-directional and non-negotiable:
  **`pricingId` → `data/pricing/pricing.ts` → derived effective price / unit /
  sub-service** via `resolveIntentPricing()`. Adding `startingPrice:` or
  `unit:` back to a matrix entry is a defect, and the locations audit fails on it.
- The same rule applies to any future registry that references pricing
  (sub-service pages, blog cost guides, schema `priceSpecification`): reference
  the row, derive the value; never copy the number.
- **Audits must compare effective values, not merely reference existence.**
  Verifying that a `pricingId` resolves is not sufficient. `audit:locations`
  compares price, unit, `starting_from` semantics, sub-service slug, sub-service
  label and the owning service, and `audit:authority` validates the references
  themselves. Any future pricing drift must FAIL the audit.
- Semantic mapping is part of correctness: an intent may only reference a
  pricing row that describes the same work. Re-point the intent, or add a
  genuine catalogue row supported by the existing research methodology — never
  keep a convenient but unrelated row, and never invent a price to fit.
- Never weaken an audit rule to turn a FAIL into a PASS. Fix the data.

## 3. No thin, doorway or mass-generated pages

- No keyword-stuffed copy, no exact-match anchor repetition, no stuffing
  "near me / best / cheap / emergency" where it does not belong.
- No `/{service}-in-{area}/` or per-keyword doorway pages. Location intent is
  served by the 53 area guides + the intent matrix (`audit:locations` enforces
  the quality gate: unique metadata, real local context, FAQs and inbound
  links, so a thin location page cannot ship).
- No new page for every theoretical keyword. Map intent to the correct
  existing page (see CONTENT_MAP.md §4). New pages only for genuinely new,
  valuable coverage, in EN+MS+ZH together with unique metadata.
- One question per page; no pasted answers across pages
  (`audit:authority` §5).

## 4. Honest urgency and safety language

- "Emergency" framing only for genuine safety-critical faults: power
  tripping/short circuits, active pipe bursts/severe leaks, and the
  sagging-ceiling safety question — plus fire-escape design context.
  (`audit:authority` §2 allowlists these.)
- Never promise 24/7, after-hours or same-day service: business hours are
  9:00 AM – 6:00 PM, days unstated, and the owner has stated no rapid-response
  policy. Scheduling language must stay conditional ("mention it when you
  enquire and the earliest slot will be offered").
- Electrical and structural content describes what a professional does and
  cautions against DIY; it never gives unsafe instructions.

## 5. Multilingual discipline

- English is canonical. MS/ZH ship together with the English page or not at
  all — never English copy under a `/ms/` or `/zh/` URL, never untranslated
  strings (the build-time coverage guard + type-checked translations enforce
  this).
- Numbers are never translated: MS/ZH quote only figures the English page
  states (`audit:pricing` §8). Localized area names use the established
  inventory in `data/i18n/lists.ts`.
- Unique metadata per language; correct hreflang + self-canonical on every
  page (via `buildPageMetadata`).

## 6. Structured data honesty

- Schema nodes only from verified facts: Organization/LocalBusiness, WebSite,
  WebPage, BreadcrumbList, Service, Article, FAQPage where valid. Stable
  `@id`s keep one entity graph site-wide.
- Never emit Review, AggregateRating, Offer prices, geo coordinates,
  dayOfWeek hours, or any credential the business has not supplied.

## 7. AI-readable layer stays generated

- `/llms.txt`, `/ai/business.json`, `/ai/pricing.json` are built from
  `lib/ai-knowledge.ts` + `data/pricing/pricing.ts` at build time. Never
  hand-edit generated content, never hardcode a price into a feed, never
  publish AI claims the site does not make. (`audit:authority` §7.)

## 8. Images and media

- Real business/project photography only where imagery is required; never
  stock passed off as work, never AI-generated "project photos".
- Descriptive filenames, accurate alt text on every image, compressed and
  responsively served (`audit:project-assets`, `audit:authority` §8).

## 9. Conversion without dark patterns

- CTAs (WhatsApp, Request Quote, Contact) use the existing infrastructure at
  natural high-intent points. No duplicate booking systems, no fake success
  states, no countdowns, no invented scarcity, no pre-ticked anything.

## 10. Change checklist (every content PR)

1. `npm run type-check`, `npm run lint`, `npm run build` — all pass.
2. All six audits pass: `audit:business`, `audit:pricing`, `audit:locations`,
   `audit:authority`, `audit:project-assets`, `audit:og-fonts`.
3. Served-site check: new/changed URLs return 200, canonicals match the
   sitemap, hreflang resolves, JSON-LD valid, no console errors.
4. `git status` / `git diff` reviewed: no debug code, temp files, secrets,
   accidental edits or (especially) parallel-edit corruption — verify hunk
   counts and file tails.
5. PROJECT_PROGRESS.md updated; SITEMAP.md / CONTENT_MAP.md updated if the
   architecture changed.
