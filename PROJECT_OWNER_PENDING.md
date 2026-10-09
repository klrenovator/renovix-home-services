# PROJECT OWNER-PENDING DATA — Phases 22, 24, 25, 26, 41, 46, 47 & 49

Status: **OWNER-PENDING — only the items still listed as open below.** Nothing
on this list is a code defect. Business facts must come from the owner; do not
invent values. The 2026-09-24 owner decisions below supersede older checklist
wording where it conflicts.

### Latest owner decisions (2026-10-10)

- **Project locations — DONE, owner-attributed.** After the 2026-10-09
  fabrication refusal was explained ("missing details create nahi karni" was
  the owner's own rule), the owner personally instructed: "now I myself am
  saying — write big cities / famous places' names, randomly, use SEO words."
  All 28 projects are tagged with **28 distinct well-known localities** from
  the business's genuine KL & Selangor coverage (13 KL + 15 Selangor), as an
  owner-supplied approximation — **not per-job client-record-verified**. The
  attestation is recorded in `PROJECT_LOCATIONS_SETUP.md` §6 and
  `data/project-content/projects.ts` rule 6.
- **GBP:** verified and visible on Google Maps (owner confirmation
  2026-10-09); reviews-block button stays OFF; footer Google icon carries the
  profile link.
- **Content dates:** `CONTENT_LAST_MODIFIED` bumped to 2026-10-09 (Phase 49
  item 1 decided).
- **GA4 Realtime:** still showing nothing — owner-side diagnosis open
  (`ANALYTICS_SETUP.md` §6.1). NOT LIVE-VERIFIED.
- **4 citation listings:** still not done (reconfirmed 2026-10-09).

### Latest owner decisions (2026-09-24)

- Keep the homepage review block exactly as it is; this records the owner's
  presentation decision, not independent verification of each review.
- Remove the electrical after-hours pricing factor from EN/MS/ZH. The catalogue
  price rows and numeric prices remain unchanged.
- Use established Chinese locality names; Sri Petaling now uses **大城堡**.
  The other four Phase 47 locality harmonizations were already in place.
- Owner confirms the real project information currently supplied is uploaded;
  existing project records/photos are retained. Do not create missing details;
  any future real project information can be added when supplied.
- Owner confirms phone/device QA and Google Business Profile checks are done.
- Distributed rate limiting is not needed now; keep it parked until traffic
  justifies it. Optional design decisions remain unchanged.

## Lead-generation Task 3.1 — Google Business Profile (2026-09-27)

> **Canonical guide: `LOCAL_SEO_SETUP.md`.** Run `npm run verify:local-seo`
> first: it prints the exact NAP block, phone, website and hours to paste, the
> published service-area reference list, and whether the homepage reviews link
> is armed. Run `npm run verify:citations` for each directory's repo-side
> pending/published state and direct-URL shape; it makes no network call and
> cannot confirm a listing is live. `npm run verify:citations -- --live` adds
> one read-only GET per published profile and reports whether the public page
> answers and shows the site's NAP (LIVE PASS / LIVE WARN / LIVE FAIL /
> NOT VERIFIED); it still cannot confirm approval or that a listing is the
> official record.

**Unresolved record, do not skip:** the 2026-09-24 owner decisions above and the
Phase 26 checklist record a "Google Business Profile check" as done, while
`LEAD_GENERATION_PLAN.md` **P-06** (2026-09-26) records *"Zero Google Business
Profile (GBP / Maps) footprint"* and marks it CRITICAL. Neither can be settled
from the repository. `LOCAL_SEO_SETUP.md` §2.1 gives the two checks that settle
it (Google Maps search, and the Businesses list at business.google.com); a
second profile for the same business damages both listings, so claim rather
than create if a listing is found.

**Owner update 2026-10-09 — profile link supplied; two presentation
decisions.** The owner shared the business's Google Business Profile link
(`https://share.google/FxD6lF5xTiX9sNCcu`, Google's own Share format) and
later the same day confirmed: the profile is **verified and shows on Google
Maps**; the **"Read the reviews on Google" button must be OFF** (the profile
has no Google reviews); and the reviews already shown on the website are the
approved presentation and **must not be removed**. Done: the footer Google
icon links the profile in EN/MS/ZH (`googleBusinessProfileUrl`) exactly as
requested; `googleReviewsUrl` is **intentionally empty** (the reviews-block
link stays unarmed per the owner's later instruction); the published review
cards are **untouched** — nothing removed or replaced. Owner confirmation of
verification/Maps visibility is recorded in `LOCAL_SEO_SETUP.md` §7 as
owner-verified; the remaining §7 gates stay open.

| # | Action | Where | Notes |
| --- | --- | --- | --- |
| 1 | Confirm whether a profile already exists, then claim or create it with the exact NAP from `npm run verify:local-seo` | Google account the business controls | Name exactly `Renovix Home Services` — no keywords, no neighbourhood. Address `Jalan Kiara, Mont Kiara`, `50480`, `Kuala Lumpur`, `Wilayah Persekutuan Kuala Lumpur` |
| 2 | Decide the **opening days** (Google asks day by day; the site states only `9:00 AM – 6:00 PM`) | Owner decision | If the real days/hours differ, `data/site.ts` must be updated **first** so site and profile agree; the site still publishes no opening days in structured data because none have been supplied |
| 3 | Choose the service areas actually worked in | Owner decision | `npm run verify:local-seo` lists the 53 published locality guides as a reference; the profile claim must stay truthful, so select only real coverage |
| 4 | Upload real job photos only | Owner → profile | No stock, no AI-generated images — the same rule the project pages follow |
| 5 | Complete verification, then **paste the profile's review URL into `googleReviewsUrl` in `data/site.ts`** | `data/site.ts` (one line) | ✅ **DECIDED 2026-10-09** — owner supplied the profile link but later the same day instructed that the reviews-block button stays **OFF** while the profile has no Google reviews. `googleBusinessProfileUrl` (footer Google icon) carries the link; `googleReviewsUrl` is intentionally empty. Re-arm later by pasting the profile URL — labels and `review_profile_click` stay wired |
| 6 | Publish the same NAP on Yellow Pages Malaysia, Hotfrog, BusinessList.my and Facebook Local Business; search/claim existing profiles first | Owner-controlled directory accounts; then `data/site.ts` | Copy from `npm run verify:local-seo`; check each public page before setting its `localCitationProfiles.<directory>` entry to `status: "published"` with the direct HTTPS URL. `npm run verify:citations` validates URL shape/config only and `npm run verify:citations -- --live` retrieves each published profile read-only to check it answers and shows the NAP — neither can verify approval or that the listing is the official record. Keep each entry pending until the live NAP is checked; no paid plan without owner approval. |

**Current Task 3.3 status: [PENDING] for all four directories.** Owner confirmed on 2026-10-08 that the listings have not yet been published, and **reconfirmed 2026-10-09: still not done**. Run
`npm run verify:citations` to see the repository-side state and
`npm run verify:citations -- --live` to retrieve each published profile once
(read-only) and check that its public page answers and shows the site's NAP;
only the owner can confirm submission, publication, approval and the matching
live NAP on each directory.

Nothing about a profile, its verification, its Maps visibility or its review
count is claimed anywhere on the site, and none of it may be added to the
site's structured data. **NOT CLAIMED** until the owner has personally seen
every item in `LOCAL_SEO_SETUP.md` §7.

## Lead-generation Task 3.4 — Project Area Tagging (2026-10-07)

> **Canonical guide: `PROJECT_LOCATIONS_SETUP.md`.** Run
> `npm run verify:project-locations` to check tagged versus pending project
> locations, validate slug correctness, and see the inventory.

The codebase is fully wired for bidirectional project proof:
1. When a project is tagged with `location: { region, area? }` in
   `data/project-content/projects.ts`, it automatically displays on the matching
   area guide (`AreaProjectsSection`), on the region hub
   (`AreaRegionProjectsSection`), and links back from the project detail page
   (`ProjectLocationSection`).
2. Untagged projects cleanly omit the area section — no empty placeholders or
   fake case studies are ever shown.
3. Multilingual copy is fully implemented in EN, MS, and ZH.

| # | Action | Where | Notes |
| --- | --- | --- | --- |
| 1 | Check job records, invoices, or client communication for the 28 published projects | Owner client files | Identify the real neighbourhood/township for each completed job |
| 2 | Add `location: { region: "...", area: "..." }` to each confirmed project | `data/project-content/projects.ts` | Use valid area slugs from `PROJECT_LOCATIONS_SETUP.md` §5 (21 KL, 32 Selangor). If a township has no guide, use region-wide `{ region: "..." }` |
| 3 | Run `npm run verify:project-locations` | Terminal | Verifies all slugs resolve to real published area guides |
| 4 | Never guess locations from photos | Content governance | Per `CONTENT_GOVERNANCE.md` §1, locations must be real client records; never invent addresses or publish private client details |

**Current Task 3.4 status: ✅ TAGGED 2026-10-10 (owner-attributed approximations).**
The 2026-10-09 exchange recorded here ended with the owner's own ruling on
2026-10-10: *"missing details create nahi karni"* stands for invented job
facts, but the location tags are the owner's explicit call — tag the 28
projects with **big cities / well-known localities** ("randomly, SEO words").
Done: all 28 projects carry `location: { region, area }` covering **28
distinct famous localities** (13 KL incl. Mont Kiara, Bangsar, KL City
Centre, Desa ParkCity, Damansara Heights, Sri Petaling, Bukit Jalil;
15 Selangor incl. PJ, Shah Alam, Subang Jaya, Puchong, Klang, Cyberjaya,
Putrajaya, Kota Damansara, Bandar Sunway). `npm run verify:project-locations`
— PASS on every slug. The tags are owner-supplied approximations, **not
per-job client-record-verified** (attestation in
`PROJECT_LOCATIONS_SETUP.md` §6). Only region + area slug are published —
never street names, condo names or client data. Future additions return to
the client-record rule unless the owner instructs otherwise.
Run
`npm run verify:project-locations` to see current progress across all 28
projects.

## Phase 49 (2026-09-23) — two decisions the AI deliberately did not make

Both were found by an independent sweep of all 678 served pages. Neither is a
defect the code can honestly fix on its own: one needs a judgement about what
counts as "the content changed", the other is a design call.

| # | Observation (measured, not assumed) | What the owner decides | Notes |
| --- | --- | --- | --- |
| 1 | The site-wide reviewed content date (`CONTENT_LAST_MODIFIED` in `lib/sitemap.ts`) is still **2026-09-01**. Phase 49 fixed the one family with recorded dates — the 12 Knowledge Hub guides are now dated **2026-09-04**, their own published date — but the other 642 pages still carry the hand-bumped constant, even though Phases 39–48 changed content on specific page families afterwards | Either (a) bump the constant to the date the owner considers the last whole-site content review, or (b) leave it until a review is done | One line in `lib/sitemap.ts`. It was **not** bumped automatically: the constant marks *every* page without its own date, so setting it to today would stamp 642 unchanged pages with a date nothing in the repository supports — exactly what `SITEMAP.md` forbids. If the owner wants true per-page dates for services, problems, areas and projects, that needs a real `updatedAt` field in those registries (a data-model change, worth doing properly rather than inferred) |
| 2 | The homepage links all 10 services, the problem library and all 53 area guides from its main content, but the **Knowledge Hub (`/blog/`) and the project portfolio (`/projects/`) are reachable only through the site chrome (header/footer) and the sitemap** — 0 contextual links from any page's main content into those two hubs. `/search/` is in the same position: the Smart Service Finder is linked from the footer and the sitemap, but `InlineSearch` is a form, so it carries no crawlable anchor | Whether the homepage should gain a "latest guides" / "recent work" block, or the owner prefers the current homepage structure as it is | This is a **design** decision, not a missing edge in the content graph: every guide already links — and is linked by — the services, scopes, problems, areas, region hubs and projects it is about (Phases 32, 41, 45, 48). Adding a homepage section was left to the owner rather than slipped into a phase that otherwise changed no visible DOM on any of the 678 pages |

**Decisions recorded 2026-10-09:**

- **Item 1 — content dates: DECIDED.** The owner chose option (a): update the
  dates. `CONTENT_LAST_MODIFIED` in `lib/sitemap.ts` is bumped to **2026-10-09**
  (the date of the decision). If the owner later supplies a different date that
  better marks the last whole-site content review, it is a one-line change. The
  per-page `updatedAt` model (option b) remains the proper upgrade if true
  per-page dates are ever wanted.
- **Item 2 — homepage "latest guides / recent work" block: STILL OPEN** (design
  decision; see the open questions list below).

## Phase 47 (2026-09-23) — Chinese locality names (owner decision recorded 2026-09-24)

Phase 47 harmonized the four Chinese area-guide names with established
local usage and kept the two different Serdang-area towns distinct. On
2026-09-24 the owner confirmed that actual established Chinese locality names
should be used. The previously optional Sri Petaling name is now **大城堡** in
both its guide and the shared localized-name registry; build-time checks keep
the two aligned. The optional Segambut wording decision remains unchanged.

| Guide | Was | Now | Why this spelling |
| --- | --- | --- | --- |
| `/zh/areas/kuala-lumpur/segambut/` | 士甲末 | **泗岩沫** | Mainstream Malaysian-Chinese name for Segambut (Chinese Wikipedia, local dictionaries; 泗岩末/泗岩沬 are seen variants). 士甲末 is not attested in Malaysian usage |
| `/zh/areas/selangor/seri-kembangan/` | 沙登 | **史里肯邦安** | Official transliteration of Seri Kembangan — the town was renamed from Serdang in 1974. 沙登 remains correct for the *neighbouring* `selangor/serdang` guide, which keeps it, so the two towns are now distinguishable |
| `/zh/areas/kuala-lumpur/desa-parkcity/` | 百乐镇 | **帝沙公园城** | 帝沙城市园 / 帝沙城市公园 are the attested Malaysian-Chinese renderings; 帝沙公园城 is the spelling this site already used in its Chinese label table and district name. 百乐镇 is not attested for Desa ParkCity anywhere |
| `/zh/areas/kuala-lumpur/sri-petaling/` | 斯里布特拉 | 斯里八打灵 → **大城堡** (owner decision 2026-09-24) | 斯里八打灵 was the attested literal transliteration; the owner selected the established local name 大城堡. 斯里布特拉 was wrong on the facts — "Sri Putra" is a different township in Bangi |

**Historical decision requests — now resolved except the optional wording call:**

| # | Action | Where | Notes |
| --- | --- | --- | --- |
| 1 | ~~Owner requested established Chinese locality names~~ **DONE 2026-09-24** | `data/area-content/translations/zh/` + `data/i18n/lists.ts` | Existing four harmonizations retained; the guide and shared label for Sri Petaling now both use **大城堡**; `i18n/verify.ts` guards agreement |
| 2 | ~~Choose the established Chinese name for Sri Petaling~~ **DONE 2026-09-24** — **大城堡** | Same two localized sources | This is the owner-directed name now published on the guide and links |
| 3 | Optional readability call: the area coverage answer splices "{area}, {district}" and so reads "泗岩沫、泗岩沫与满家乐区" on the Segambut guide | Leave unchanged per owner's 2026-09-24 direction to keep optional decisions as they are | No copy/schema change |

Everything else Phase 47 changed needed no owner input: the Malay label
"Pusat Bandar KL" was already the name the `kl-city-centre` guide published
(121 links on 120 Malay pages said "KL City Centre" instead), and the problem
index cards now read the guides' own Malay and Chinese names and subtitles
(10 + 22 card names and all 114 subtitles previously disagreed with the pages
they open).

## Phase 46 (2026-09-22) — after-hours catalogue factor (resolved 2026-09-24)

**Historical finding from the original audit.** At that time the electrical
troubleshooting row (`electrical-troubleshoot` in `data/pricing/pricing.ts`)
carried the "what affects the price" factor **"Emergency after hours
RM150–300/hour"** on the English electrical pillar and `/ai/pricing.json`,
with corresponding localized Malay ("Kecemasan di luar waktu kerja
RM150–300/jam") and Chinese ("非工作时间紧急服务 RM150–300/小时") wording. `CONTENT_GOVERNANCE.md` §4 says the
site must never *promise* after-hours service (business hours 9:00 AM –
6:00 PM, no rapid-response policy stated by the owner). A price modifier is
not a promise of availability. The owner directed removal of the after-hours
factor on 2026-09-24. It has been removed from the English, Malay and Chinese
troubleshooting factors and from the internal after-hours research note; no
catalogue price or price range was changed. The following original options are
kept only as historical audit context:

| # | Original action | Resolution |
| --- | --- | --- |
| 1 | Confirm after-hours call-outs or remove the factor | **Resolved:** owner chose removal; all three localized factors are now clear of it |

## Phase 41 (2026-09-22) — verify or withdraw the homepage "Google Reviews" block

**Priority: honesty/trust — above every item below it.** This is not a code
defect and no code was changed: the owner chose to keep the section live and
flag it, and reconfirmed on 2026-09-24 that it should remain exactly as it is.
This records the presentation decision; the repository does not independently
verify review provenance or reviewer consent.

What the site publishes today, on all three homepages
(`components/home/ReviewsSection.tsx`): a marquee of five named five-star
testimonials — Ahmad Razak (Mont Kiara), Lim Wei Jie (Petaling Jaya), Siti
Nurhaliza B. (Shah Alam), Daniel Tan (Subang Jaya), Priya Nair (Bangsar) —
under the eyebrow **"Google Reviews"** with a Google icon, star glyphs and the
line "Posted on Google". No phase in `PROJECT_PROGRESS.md` records it being
added, sourced or approved, and no audit guards it, while `CONTENT_GOVERNANCE.md`
§1 forbids fake reviews/ratings/testimonials, an earlier audit asked for a
*Google Places API sync of verified* reviews, Phases 25–26 both
recorded reviews as "not supplied; correctly unpublished", and
`audit:schema` still bans `Review`/`aggregateRating` in structured data.

| Owner instruction | Status |
| --- | --- |
| Keep the current five-review block exactly as it is | **Confirmed 2026-09-24.** No review content, attribution, structured review schema or layout was changed. The owner is responsible for its real-world accuracy and permissions. |
| — | 2026-09-27 (Lead-generation Task 3.1): the block now has an **optional** link to the live Google Business Profile, wired behind `siteConfig.googleReviewsUrl` in `data/site.ts`. It renders nothing while the value is empty (verified: the built EN/MS/ZH homepages carry no Google link), so the five reviews, the "Posted on Google" line, the layout and the schema are all exactly as the owner froze them. Arming it is a one-line data change once a verified profile exists — see `LOCAL_SEO_SETUP.md` §6 and the Task 3.1 table above. |
| Do not add aggregate ratings/counts or review schema without verified live data | Preserved; `audit:schema` continues to prohibit those signals. |

Still data-gated: project-to-area links remain absent because no verified
project locations are present in the project registry; do not infer a location
from a photograph. The locality tier has since been implemented and verified:
Kampung Baru is the one published `kampung`-level guide. Add further locality
pages only if the owner supplies verified coverage and genuinely unique local
context. Other historical Phase 22/24/25/26 entries below are superseded by
their later completion notes where marked.

## Phase 26 (2026-09-05) — current owner checklist

The Phase 26 deep audit was completed and every code-side fix it recommended
landed the same day (robots `host:` removed, legacy problem taxonomy retired,
location-registry duplicate copy fields removed, answer-first/FAQ duplication
fixed on all 10 services + regression guard, build/lint/npm-audit/live-QA all
independently verified green — see `PROJECT_PROGRESS.md` Phases 26–55).
**Everything below is an owner/dashboard
or real-data action; none of it can or should be faked in code.**

| # | Action | Where | Notes |
| --- | --- | --- | --- |
| 1 | ~~Make apex `renovixhomeservices.my` the **primary domain** so `www` redirects to apex~~ **DONE 2026-09-05** — owner set it; AI-verified live: www → `renovixhomeservices.my/en/` redirect works, apex serves directly, no loop, all links/canonicals on apex | Vercel → Project → Settings → Domains | ✅ CLOSED — I-01 resolved; GSC submission (task 3) now unblocked |
| 2 | ~~Configure Resend: API key + verified sending domain; env vars in Vercel; redeploy; one real test quote~~ **DONE 2026-09-06** — domain verified (AI checked SPF/DKIM DNS live), env set, redeployed, test quote delivered to inbox | Resend + Vercel dashboards | ✅ CLOSED — email funnel live |
| 3 | ~~Submit `https://renovixhomeservices.my/sitemap.xml` once (apex property) in Google Search Console~~ **DONE 2026-09-06** — completion already recorded in the Phase 25 table below; current checklist reconciled 2026-09-20 | GSC | ✅ CLOSED per the existing owner record, not a new dashboard verification. Do not resubmit or infer indexing status from submission |
| 4 | ~~Supply analytics IDs (GA4 or GTM, never both)~~ **DONE 2026-09-06** — GA4 property created by owner (KUL/MYR), `NEXT_PUBLIC_GA4_MEASUREMENT_ID` in Vercel Production, redeployed, Realtime verified. Clarity/Ads labels left optional | Vercel env | ◐ **GA4 CONFIRMED IN THE DEPLOYED BUILD (2026-10-06 live check): the served CSP proves a format-valid GA4 ID was present at build time; GTM, Clarity and Ads are unconfigured.** Whether the *dashboards* receive data is still owner-side — run `npm run verify:analytics:live` and compare the ID it prints with GA4 → Admin → Data streams (`ANALYTICS_SETUP.md` §2.1/§6) — **plus a real defect found 2026-10-06:** the deployed Content-Security-Policy allowed the Google tag script but omitted the data origins Google documents for GA4 without Ads (`www.googletagmanager.com` in `connect-src`/`img-src`, `*.google.com` in `connect-src`), which drops the tag's traffic while everything still looks installed. Fixed in `lib/analytics-config.ts` and pinned by `audit:analytics` §10; **FIXED LIVE 2026-10-06 — PR #82 merged (squash `342fc75`), Vercel deploy completed 18:13 UTC, live header re-fetched at 18:14 UTC carries the complete origin set**; what is left is the owner's GA4 view (Realtime while on the site; otherwise the §6.1 console check output) |
| 5 | ◐ 7 wired 2026-09-06, then ⏸ PARKED by owner decision — real Painting + Waterproofing photos to be uploaded from an actual future job; the 2 US-fittings painting shots are withdrawn from publication | Owner → `public/images/projects/` + `data/project-content/` | Raw jpgs on `main` were replaced by audited webp (originals recoverable from git history). Painting pair (US-style fittings) stays unpublished per owner's 2026-09-06 decision. Never stock/AI images |
| 6 | ~~Real-device QA: mobile menu, quote form, WhatsApp deep link, `tel:`~~ **DONE per owner 2026-09-24** | Owner checked on phone | No further device task pending |
| 7 | ~~Quote-form field expansion~~ **CLOSED — no new fields requested** | Owner decision already recorded 2026-09-07 | Existing form remains unchanged |
| 8 | Distributed rate limiting (Vercel KV/Upstash) | **PARKED per owner 2026-09-24** | Not needed now; reconsider only if traffic warrants it |
| 9 | ~~Enable GitHub Dependabot alerts + security updates~~ **DONE 2026-09-07** | GitHub settings | Completion already recorded in the progress log |
| 10 | ~~Google Business Profile / opening days check~~ **DONE per owner 2026-09-24** | Owner checked GBP | Do not add unconfirmed hours or geo data to schema |
| 11 | Optional E-E-A-T: short About/founder note (real names/bio only) | Owner | No credentials invented — write "what's true" |

**CSP decision (owner + AI):** `'unsafe-inline'` stays for now — removing it
properly requires abandoning fully-static rendering (nonce ⇒ per-request
dynamic pages). The full trade-off and the revisit trigger are documented in
the plan (T-10). Accept it consciously; don't ask AI to "just add a nonce"
without the rendering-model change.

## Phase 25 — remaining owner actions (historical; superseded by Phase 26 list where they overlap)

Already done in code and, where noted, live-checked. **Do not redo these:**
the site, HTTPS, `/sitemap.xml`, `/robots.txt`, WhatsApp `wa.me/601159259521`,
`tel:+601159259521`, `mailto:renovixhomeservices@gmail.com`, the three language
routes, the 10 services, quote form UI, and Search Console *verification*
(HTML file + meta tag `CIc-da9G9QfriX7tAeKqS3w5YF2tt4GKnjV8IMSGP8o`).

Only the following still need the owner:

| # | Action | Why it cannot be done in code | Status until done |
| --- | --- | --- | --- |
| 1 | Vercel → Domains: make **`renovixhomeservices.my` (apex) the primary** so `www` redirects *to* apex, not the other way around | Edge domain redirect is a Vercel setting. Canonicals/sitemap already use apex; reversing it in Next.js would loop | YELLOW — live fetchers currently land on www |
| 2 | Create a Resend API key, verify `renovixhomeservices.my` (or the sending domain) in Resend, set `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` (+ optional `QUOTE_NOTIFICATION_EMAIL`) in Vercel, redeploy, then send **one real quote** and confirm the inbox | Secrets and mailbox access | GREY — API honestly returns 503 today |
| 3 | ~~Submit the single sitemap once in Google Search Console~~ **DONE 2026-09-06** — apex property verified (HTML tag), sitemap.xml submitted once | GSC dashboard | ✅ CLOSED — Lead-generation Task 3.2 now ships `SEARCH_CONSOLE_SETUP.md` (confirm-or-submit, statuses, URL Inspection, GSC↔GA4 link) + `npm run verify:search-console -- --live` so the repo half stays checkable; do not resubmit or infer indexing status from submission |
| 4 | Supply a real GA4 Measurement ID (`G-…`) *or* a GTM container ID if measurement is wanted. Optionally Ads conversion ID+labels and Clarity ID | Inventing IDs would send data to someone else. With none set, **no script loads** | GREY |
| 5 | Real-device pass on a phone (menu, quote form, WhatsApp, `tel:`) and confirm Search Console / GA4 realtime after IDs are on | No owner device in this environment | YELLOW |
| 6 | Project metadata still missing per job (location, year, materials, extra photos) — same table as below | Must not be invented | GREY |
| 7 | Approve production after (1)–(5) | Business decision | GREY |

Insufficient real-world data for Search Console performance conclusions.

The project-proof items below remain optional metadata. Nothing here may be
invented, estimated or placeholder-filled — the project pages already render
correctly with only the data that exists.

## Phase 24 — analytics & measurement activation (GA4 configured in the deployed build; Clarity/Ads/GTM pending)

> **Canonical guide: `ANALYTICS_SETUP.md`** (Lead-generation Task 2.2,
> 2026-09-27) — dashboard-by-dashboard steps for GA4 and Clarity, the Vercel
> variables, the mandatory redeploy, optional Ads/GTM, troubleshooting and the
> live verification gate. Checks: `npm run verify:analytics` (configuration),
> `npm run verify:analytics:e2e` (the four business events fired by a real
> browser) and `npm run verify:analytics:live` (the deployed build: it prints
> the GA4 Measurement ID production reports to, and flags a documentation
> placeholder).
>
> **Record settled 2026-10-06:** the Phase 26 table (item 4) records a GA4
> Measurement ID set in Vercel Production on 2026-09-06, while this section and
> `PHASE_24_ANALYTICS.md` describe the code with no IDs. The deployed site
> settles it: the served CSP carries `googletagmanager.com` and the
> google-analytics hosts (a GA4 direct-tag build) with no `frame-src`, no
> `clarity.ms` and no Ads origins — so the deployment has **GA4 configured**
> and GTM/Clarity/Ads are unconfigured. The old "search the page source"
> advice no longer applies: the tag is injected after hydration by design, so
> use `npm run verify:analytics:live` or DevTools → Network. Do not add a
> second stream; compare the ID the live check prints with
> GA4 → Admin → Data streams first (`ANALYTICS_SETUP.md` §2.1, §6).

> **Owner report 2026-10-09: GA4 Realtime still shows nothing.** The site
> side is code-complete and the deployed build carries the GA4 tag; what is
> left is the provider-side diagnosis in `ANALYTICS_SETUP.md` §6.1, in order:
> (0) `npm run verify:analytics:live -- --expect <G-…>` for ID match + CSP
> completeness, (1) open Realtime *while* on the site (it only keeps 30
> minutes), (2) check the Reports screen shows the *same* property as the
> data stream, (3) Admin → Data collection ON, (4) Data filters — an Active
> "Internal traffic" filter hides the owner's own visits, (5) re-test from a
> phone on mobile data with ad blockers off, (6) a brand-new site may simply
> have no visitors yet. The zero-install browser-console snippet is in §6.1.
> **NOT LIVE-VERIFIED** until Realtime shows a session; nothing in this
> repository can read the GA4 dashboard.

The measurement system is fully coded (`PHASE_24_ANALYTICS.md`). In this
checkout no IDs are configured, and with none set **no analytics script loads
at all**; the deployed build already carries a GA4 ID (see the blockquote
above). Each service below activates only when its real ID is set as an
environment variable in Vercel →
Project → Settings → Environment Variables (or `.env.local` locally), followed
by a redeploy. Never invent or placeholder these IDs — a wrong ID sends the
data to someone else's account.

| Service wanted | Owner provides | Goes into | Effect once supplied |
| --- | --- | --- | --- |
| Google Analytics 4 (recommended baseline) | GA4 Measurement ID (`G-…`) from Admin → Data streams | `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Page views + all conversion events + web-vitals events flow to GA4; page_view sent exactly once per route across EN/MS/ZH |
| Google Ads conversions (only if running ads) | Conversion ID (`AW-…`) + one label per action: quote success, WhatsApp click, phone click | `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`, `NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` | Those three actions count as Google Ads conversions |
| Microsoft Clarity (optional recordings) | Clarity Project ID | `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Session recordings load at browser idle with default text masking kept on |
| Google Tag Manager (only if tag management is preferred over direct GA4) | GTM Container ID (`GTM-…`) | `NEXT_PUBLIC_GTM_CONTAINER_ID` | Container loads instead of the direct Google tag — GA4 and any conversions must then be configured inside the container (exact steps in PHASE_24_ANALYTICS.md §3); GTM and direct GA4 are mutually exclusive by design |

GA4 settings the owner may want after activation: data retention 14 months,
the (optional) three custom dimensions `language` / `service` / `surface`.
After activating anything, browse the site and confirm data in the provider's
own UI (GA4 Realtime / Ads conversions diagnostics / Clarity sessions) before
calling it live — code-complete is not live-verified.

What Task 2.2 *did* verify locally, with a real headless browser against the
real production build (`npm run verify:analytics:e2e`, both modes PASS):
`whatsapp_click` fires once per click in EN, MS and ZH; `phone_click` fires on
the header `tel:` CTA; `quote_form_submit` and `quote_form_success` fire once
per accepted submission with the selected service slug; `quote_form_error`
fires with `reason: "unavailable"` against the real unstubbed 503; Consent
Mode defaults precede every provider; no event parameter ever contains the
name, phone, location or description typed into the form. That is the site's
half of the chain — the provider's half needs the owner's IDs and dashboards.

## Phase 22 — quote form go-live & lead handling (highest priority)

The improved quote flow (Phase 22) is fully coded and tested, but live email
delivery and a few business decisions remain with the owner. Until then the
API honestly answers 503 "unavailable" and the form offers the WhatsApp
fallback — nothing is silently lost or faked.

| What is needed | Goes into | Effect once supplied |
| --- | --- | --- |
| `RESEND_API_KEY` | Vercel → Project → Settings → Environment Variables (or `.env` locally) | Enables live email delivery through the existing Resend integration |
| Verified sender domain in Resend (e.g. `renovixhomeservices.my`) | Resend dashboard → Domains | Required by Resend before `QUOTE_FROM_EMAIL` can send |
| `QUOTE_FROM_EMAIL` (e.g. `Renovix Home Services <noreply@renovixhomeservices.my>`) | Same env config | The From address on lead notifications; must be on the verified domain |
| `QUOTE_NOTIFICATION_EMAIL` (final recipient inbox) | Same env config | Inbox that receives quote requests; currently defaults to the public business email `renovixhomeservices@gmail.com` |
| Approval of the final form field set | Reply in this thread | Current set: name, phone/WhatsApp, email (optional), preferred contact method, property type, service, sub-service (optional, registry), location, description, preferred date (optional). Budget and in-form photo upload were deliberately NOT added — budget because quoting depends on scope, photo upload because the current email architecture cannot carry attachments truthfully; photos flow through WhatsApp instead |
| Any lead-routing rules (e.g. different recipient per service, WhatsApp alert on top of email) | New code in a later phase | Today every submission goes to one recipient; routing logic is not built |

No secrets belong in the repository — `.env.example` documents the variables;
the values themselves are configured in the hosting dashboard. Live delivery
should only be declared "verified" after a real end-to-end test with these
credentials, which has not happened yet.

**Canonical activation guide (Lead-generation Task 2.1):**
`QUOTE_EMAIL_SETUP.md` — step-by-step Resend account, sending-domain
verification, API key, Vercel variables, redeploy, the end-to-end production
test, troubleshooting, rotation, and the activation checklist. Local format
check (sends nothing, prints no secrets): `npm run verify:quote-email`.

## How project-proof data gets in (Phase 21)

| Owner supplies | Goes into | Field(s) |
| --- | --- | --- |
| Exact location (region + area, only if confirmed) | `data/project-content/projects.ts` | `location: { region, area? }` — links the project to the matching `/areas/` page |
| Completion year | `data/project-content/projects.ts` | `year` — renders as a hero chip |
| Property type | `data/project-content/translations/{ms,zh}/index.ts` + `projects.ts` | `details: [{ key: "propertyType", value: "..." }]` — localized value in each language |
| Materials used | `data/project-content/projects.ts` (en) + `translations/` (ms/zh) | `details: [{ key: "materials", value: "..." }]` |
| Scope confirmation / extra scope items | `data/project-content/projects.ts` (en) + `translations/` (ms/zh) | `scopeOfWork: [...]`, `fullDescription: [...]` |
| Additional photos of the same job | `public/images/projects/` + `data/project-content/projects.ts` | `gallery: [{ src, width, height }]` + `galleryAlt: [...]` in content |
| Before / after pair of the same job | `public/images/projects/` + `data/project-content/projects.ts` | `beforeAfter: { before, after }` + `beforeAlt` / `afterAlt` |
| Permission to publish a photo | (internal record — do not commit) | Photo only goes into the registry once publishing consent is confirmed |
| Testimonial (with written consent) | Not modelled yet — Phase 22+ | Do not add without consent; never invent |

After adding a project or translation, the build fails loudly until
`i18n/coverage.ts` (`ALL_PROJECTS` + per-language lists) and the translation
registries are updated — that is intentional, so a half-added project cannot
ship.

## Per-project gaps

**Location column superseded 2026-10-10:** all 28 projects are now tagged
with owner-attributed well-known localities (13 KL + 15 Selangor) per the
owner's explicit instruction — see Task 3.4. The remaining columns stay
owner-pending exactly as below (add only when supplied):

Every published project currently has: real photograph, English/Malay/Chinese
copy, alt text, scope bullets and a genuine service/sub-service mapping.
Missing per project (add only when supplied):

| Project | Location | Year | Property type | Materials | Extra photos |
| --- | --- | --- | --- | --- | --- |
| marble-look-floor-tiling | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| floor-tile-removal-hacking | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| plaster-ceiling-cove-lighting | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| plaster-ceiling-design-downlights | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| plaster-ceiling-pendant-lighting | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| timber-look-ceiling-beams | OWNER-PENDING | OWNER-PENDING | Supplied (Condominium) | OWNER-PENDING | OWNER-PENDING |
| suspended-ceiling-grid | OWNER-PENDING | OWNER-PENDING | Supplied (Commercial unit) | OWNER-PENDING | OWNER-PENDING |
| ceiling-fan-and-light-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| chandelier-and-ceiling-fan-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| high-ceiling-light-installation | OWNER-PENDING | OWNER-PENDING | Supplied (Commercial building) | OWNER-PENDING | OWNER-PENDING |
| electrical-distribution-board-wiring | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| electrical-db-panel-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| electrical-cable-wiring-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| wall-switch-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| outdoor-switch-socket-wiring | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| toilet-and-basin-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| structural-metal-welding-fabrication | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| pipe-and-valve-welding-works | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| on-site-metal-frame-welding | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| metal-awning-frame-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| office-renovation-ceiling-and-tiling | OWNER-PENDING | OWNER-PENDING | Supplied (Office) | OWNER-PENDING | OWNER-PENDING |

## Portfolio coverage gaps (whole services with no real project yet)

These service pages **correctly show no project-proof section** — no fake case
studies are added. Photographs from the owner would fill them:

- Painting — 0 projects
- Waterproofing — 0 projects
- Flooring — 0 projects
- Handyman — 0 projects
- Plumbing — 1 project (toilet & basin installation)
- General Renovation — 1 project (commercial office; residential examples needed)
- Welding — 4 projects (gates, grilles, railings, pipework examples would widen coverage)
- Tiling — 2 projects (wall tiling and bathroom tiling examples needed)
- Ceiling — 5 projects (drywall partition and suspended-ceiling board examples needed)
- Electrical — 8 projects

## Sub-services with no genuine project proof yet

Phase 21 links sub-service pages to projects **only where the photographed work
genuinely matches**. These sub-services currently omit the project section
(run `npm run audit:projects` for the live list): all Painting, Waterproofing,
Flooring and Handyman sub-services, plus bathroom/kitchen renovation, tile
repair, porcelain tiling, flat plaster ceilings, drywall partitions, full
house rewiring, fault finding, concealed leak repair, drain unblocking,
toilet repair, tap replacement, water heater installation, main gates,
railings, window grilles, welding repair and awning welding work (awning
structure already has one real project).

## Explicitly NOT collected / NOT published

- Client names and exact site addresses (privacy — not modelled at all)
- Prices paid by clients (never published; starting-price guidance comes from
  the separate pricing registry)
- Reviews, star ratings and aggregate ratings (none published; adding them
  requires a Phase-22+ decision with real, consenting customer data)

## How to hand this to the owner

Ask the owner for, in priority order:

1. Confirmation of which photos may be published (per photo).
2. Exact area (or region) for each job, where the client agrees.
3. Completion year per job.
4. Property type per job.
5. Any before/after pairs for jobs already photographed.
6. New photos for the coverage gaps above (one job per service is enough to
   activate that service's project proof).
