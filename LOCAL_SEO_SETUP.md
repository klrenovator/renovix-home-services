# Google Business Profile Setup — Local Authority for KL & Selangor

> **Lead-generation Task 3.1 — canonical owner guide.**
> Follow this file to create, verify and run the Google Business Profile (the
> listing that appears in Google Maps and the Local Pack). No step here
> requires a code change, and the website is complete without it.

Status overview (the three states used throughout this document):

| Area | Status |
| --- | --- |
| Website's half (one NAP source, LocalBusiness entity, service-area coverage, reviews link that arms itself) | **CODE COMPLETE** — enforced by `npm run audit:business` and `audit:authority` |
| Google Business Profile created, verified and populated | **OWNER ACTION PENDING** — only the business's own Google account can do this |
| Appearing in Google Maps / the Local Pack, calls, direction requests, review count | **NOT CLAIMED** — no profile exists that this repository can see; live verification is §7 |

Nothing in this guide was invented. Every business detail below is copied from
`data/site.ts` — the single place the website publishes them — and the same
values are printed for you by:

```bash
npm run verify:local-seo
```

Run that first. It makes no network call, contacts no Google service, and
prints the exact strings to paste (plus the hours question and the service-area
reference list). It deliberately does not claim that a profile exists.

Related files:

| File | Role |
| --- | --- |
| `data/site.ts` | The only source of name, address, phone, WhatsApp, email and hours |
| `components/seo/schema.ts` | The `LocalBusiness` entity every page publishes (no `geo`, no `rating`, no `sameAs` — those signals have not been supplied) |
| `scripts/verify-local-seo.mjs` (`npm run verify:local-seo`) | Prints the exact NAP block, the hours caveat, the published coverage list and the reviews-link status |
| `components/home/ReviewsSection.tsx` | The homepage reviews block; its profile link renders only when a verified URL is supplied (§6) |
| `audit:business` · `audit:authority` | Fail the build if two conflicting business facts appear, or if the reviews link is guessed rather than supplied |

---

## 1. Why this matters most

The website can rank for "bathroom waterproofing Mont Kiara" and still lose the
customer, because a large share of high-intent local searches never leave
Google: the searcher taps a business in the map results and calls or taps
"Directions". Without a verified profile the business is simply absent from
that surface — it is not a ranking problem, it is a visibility problem.

A profile also feeds lead volume directly:

```
Search → Map pack → profile → Call / WhatsApp / Directions / Website → lead
```

Each of those buttons is a measurable action inside the profile's own
performance report, which is the only place they can be measured (§7).

## 2. The exact business details

Use these character-for-character. Google matches the profile against the
website and other citations, so `Jln` instead of `Jalan`, a missing postcode or
a different phone format weakens the match:

| Field | Value |
| --- | --- |
| Business name | `Renovix Home Services` |
| Street address | `Jalan Kiara, Mont Kiara` |
| City / locality | `Kuala Lumpur` |
| State | `Wilayah Persekutuan Kuala Lumpur` |
| Postcode | `50480` |
| Country | `Malaysia` |
| Phone | `+601159259521` |
| WhatsApp | `+601159259521` |
| Email | `renovixhomeservices@gmail.com` |
| Website | `https://renovixhomeservices.my` |
| Hours published on the site | `9:00 AM – 6:00 PM` — **days not stated** |
| One-line address (for any form that asks for a single field) | `Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia` |

`npm run verify:local-seo` prints this same block, read live from
`data/site.ts`, so it can never drift from what the site says.

**Business name rule:** enter it exactly as above. Do not add keywords
("Renovix Home Services — Renovation Contractor KL"), a neighbourhood, or a
suffix that is not part of the real name. Google suspends profiles for that,
and it is the single most common way a new profile is lost.

### 2.1 Where the record stands (settle this before creating anything)

Two statements exist in this repository and they cannot both be right:

- `PROJECT_OWNER_PENDING.md` records, in its 2026-09-24 owner decisions and in
  its Phase 26 checklist, that a "Google Business Profile check" was done by
  the owner.
- `LEAD_GENERATION_PLAN.md` (problem register **P-06**, dated 2026-09-26)
  records *"Zero Google Business Profile (GBP / Maps) footprint"* and
  classifies it as **CRITICAL**.

Neither can be resolved from the repository: a profile is not observable from
code, and no Google account is reachable from here. Creating a second profile
for the same business is the one mistake that reliably damages both listings,
so confirm first:

1. Search Google Maps for `Renovix Home Services`, then for
   `Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur`.
2. Sign in as the business at [business.google.com](https://business.google.com)
   and open the **Businesses** list — an existing profile appears there.

If either check finds a listing, **claim it** and skip to §3 step 4 (fill in
the details). Only follow the create steps if both come back empty. Record
which case applied, and update **P-06** in `LEAD_GENERATION_PLAN.md`
accordingly — either "profile existed and was claimed" or "profile created".

## 3. Creating and verifying the profile

> Google's own interface wording changes regularly; the steps below describe
> what each screen is for, not the exact label you will see.

### Step 1 — Use the business's own Google account

Sign in to the account the business controls and will keep controlling (if the
business already uses a Google account for Search Console, use the same one).
Record which account owns the profile somewhere the business will find it
again — losing the account is the most expensive way to lose a profile.

### Step 2 — Create it (or claim what already exists)

Search Google Maps for `Renovix Home Services` first. If a listing already
exists — Google sometimes creates one from directory data — **claim it** rather
than creating a second one; duplicate profiles split reviews and get both
suspended. Only create a new profile if no listing exists.

### Step 3 — Address

Enter the street address exactly as in §2. Then choose how customers interact
with the location:

- **Customers can visit the address** (an office or showroom) → keep the
  address visible.
- **Work happens at the customer's property and nobody visits the address** →
  mark the profile as a service-area business so the address is hidden, but
  still enter it during setup (Google needs it, and it is what the website
  publishes).

Whichever is true, the website and the profile must agree: the site publishes
`Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur` on the contact page, footer and
LLM/AI feeds. If the business moves, update `data/site.ts` first, then the
profile — never let them disagree.

### Step 4 — Category

Category is the strongest relevance signal the profile has.

- **Primary category:** a contractor/builder category that matches what the
  business actually does most (for example *Contractor* or *General
  contractor* — pick the closest one Google offers and that the business
  genuinely is; do not pick something aspirational).
- **Secondary categories:** add only the services genuinely offered, one per
  line of business — for example *Plumber* only if plumbing is really done as
  its own job, *Painter*, *Electrician* (only with the qualification the
  business actually holds), *Tile contractor*, *Waterproofing service*.

Do not add a category for work the business does not take on: mismatched
leads waste the owner's time and suppress the profile.

### Step 5 — Service areas

Service areas are a public claim about where the business works. Use the
published list from `npm run verify:local-seo` as a reference, but select
**only the localities where the business genuinely takes jobs**. The website
publishes 53 locality guides — a marketing list, not a service commitment.
Google limits how many areas can be added, so lead with the core ones
(Mont Kiara / Sri Hartamas / KL City Centre, Petaling Jaya, Subang Jaya, Shah
Alam …) and add more later; areas can be changed at any time without penalty.

### Step 6 — Hours

Google asks for hours **day by day**; the website currently states only
`9:00 AM – 6:00 PM` and no days, because the owner has not supplied them.

1. Decide the real opening days and times.
2. If they differ from `9:00 AM – 6:00 PM`, update `data/site.ts` first so the
   site and the profile agree.
3. If the business is closed on some days, the site copy should state the days
   too — then both surfaces match.
4. Never enter hours the business does not keep: those become customer
   complaints and can cost the profile its visibility.

### Step 7 — Contact details

- **Phone:** `+601159259521` — the same number the site publishes for calls and
  WhatsApp.
- **Website:** `https://renovixhomeservices.my` — the bare URL, **no UTM
  parameters**. Tracking parameters in this field break the match between the
  profile and the website; use tagged links only in posts (§4).
- **Messaging:** turn chat on if the owner can answer it; the profile's "Chat"
  button is a direct lead channel, and an unanswered one counts against the
  business.

### Step 8 — Description

Describe what the business does and where, in plain language: the services, the
covered areas (Kuala Lumpur and Selangor), and that quotes are free. Do not use
prices, promotions, URLs, or claims the site does not make. Keep it factual —
`CONTENT_GOVERNANCE.md` §1 applies to the profile too: no years of experience,
team size, certifications, awards or rankings unless the business has supplied
them.

### Step 9 — Photos (real work only)

Upload only genuine photographs of the business's own completed work, plus the
logo already used on the site. **Never stock photos, and never AI-generated
images** — the same rule the project pages follow. Google both penalises
mismatched imagery and users notice. Ten to twenty honest photos across
different services beat a hundred generic ones, and add new ones as jobs
complete.

### Step 10 — Verification

Choose whichever method Google offers (usually video recording of the premises,
tools, signage or work documentation; sometimes phone, email or postcard). It
may take a few days. Until verification completes the profile is not public,
and a fresh profile can take a further one to three weeks to appear in Maps.

## 4. The first 30 days after verification

| Action | Why |
| --- | --- |
| Add real photos weekly for the first month | New profiles with steady activity establish faster |
| Post once a week (a completed job, a service reminder) | Posts are free visibility inside the profile; link them to a matching service or area page, and a tagged URL is fine **here** |
| Answer every question in the Q&A section | Anyone can post questions; an unanswered one is a lost lead |
| Fill in the services list with the site's own service names | Keeps the profile's language identical to the site's |
| Ask recent customers for an honest review (§6) | Volume and recency of reviews are the strongest trust signals in the map pack |

## 5. Malaysian directory citations (Task 3.3)

These listings are owner-side actions: this repository cannot create directory
accounts, submit a listing, resolve a duplicate, or see whether a submission
was approved. **NOT CLAIMED for any directory citation:** no profile is said to
be live until the owner has opened its public page and checked it. Do not tick
Task 3.3 complete based only on filling in a submission form.

### Prepare one consistent listing

1. Run `npm run verify:local-seo` and copy the NAP block exactly. The business
   name, address, phone, website and email must match `data/site.ts`; do not
   abbreviate `Jalan`, omit the postcode, or use a different phone format.
2. On each directory, search by the exact business name, phone number and
   address **before** creating anything. If a matching record exists, use that
   directory's claim/update route; do not create a duplicate.
3. Use only categories that match services Renovix actually offers. The site's
   service registry is a reference, not evidence that every job or location is
   accepted. Do not invent a registration number, opening days, years in
   business, staff count, awards, reviews or certifications. The site publishes
   `9:00 AM – 6:00 PM` but no days; do not guess day-by-day hours. If a listing
   requires an unconfirmed field, pause and ask the owner rather than fabricate
   an answer.
4. Use real business photos only. If a directory offers a paid placement or
   upgrade, review the current terms and price; **no paid plan or advertising
   purchase is authorized without the owner's approval**.
5. Once a listing is publicly visible, compare the published name, address and
   phone against the verifier output. Copy its **direct public profile URL**
   (not a directory home/search page, claim form, preview, or private account
   URL) and keep a record of the date checked.

| Directory | Official starting point | Listing-specific checks |
| --- | --- | --- |
| Yellow Pages Malaysia | [yellowpages.my](https://www.yellowpages.my/) | Search for an existing Renovix record, then use the site's current add/claim path. |
| Hotfrog Malaysia | [hotfrog.com.my](https://www.hotfrog.com.my/) | Search name/phone first; claim an existing result instead of creating another. |
| BusinessList.my | [Create a business listing](https://www.businesslist.my/create-business-listing) | Review the current plan and price before proceeding; stop for owner approval before any payment. |
| Facebook Local Business | [Facebook business locations help](https://www.facebook.com/business/help/344106736167501) | Confirm whether an existing official Page/location already represents Renovix; do not treat a share URL as proof of a local business listing or create a duplicate Page just to complete this checklist. |

### Enable only profiles that are live and checked

Each entry in `localCitationProfiles` in `data/site.ts` is currently
`status: "pending"` with an empty URL. Keep it that way until the public listing
exists and its NAP has been checked; only then add its direct HTTPS profile URL
and change that entry to `status: "published"`, for example:

```ts
hotfrog: {
  status: "published",
  url: "https://www.hotfrog.com.my/company/…",
},
```

`npm run verify:citations` checks the URL host/path and the pending/published
configuration offline; it does **not** log in to a directory or claim a listing
is approved. `npm run audit:citations` protects the same rules, the localized
contact-page labels and the no-false-profile display. The EN/MS/ZH Contact page
shows a directory link only for a profile the owner has marked published, and
records an aggregate `directory_profile_click` with only language, page surface
and a fixed directory ID. Directory URLs are not added to structured data.

### Check each listing before and after enabling it

`npm run verify:citations` validates the repository side only: pending entries
stay empty, published entries use a direct HTTPS profile URL on the expected
directory host, and no search, claim, share or submission URL can be
configured. It contacts no directory.

`npm run verify:citations -- --live` additionally performs **one read-only GET
per published profile** (redirects followed, 20-second timeout, no
credentials, no writes) and reports what it can honestly see:

- **LIVE PASS** — the public page answers 2xx on the directory's own host and
  shows the full business name, phone and address from `data/site.ts`.
- **LIVE WARN** — the page answers but the name is truncated, or the phone /
  address are not visible in the served HTML (directories often render these
  with JavaScript or behind a "show number" click). Confirm by eye.
- **LIVE FAIL** — the URL does not answer 2xx, redirects off the directory's
  host, or the page shows no trace of the business; a contact-page link to it
  would be broken or wrong. Fix the listing or the configured URL.
- **NOT VERIFIED** — this machine could not reach the directory (no network,
  DNS failure, timeout). Never a pass and never a failure; re-run it where a
  browser can open the listing.

The live check is read-only: it writes nothing, changes no configuration and
never marks a listing published. It cannot confirm that a directory approved
the listing, that the listing is the official record, or that no duplicate
exists — those stay owner checks, and the Task 3.3 completion gate in
`LEAD_GENERATION_PLAN.md` still requires the owner to have seen all four
public listings.

**Current status: [PENDING]** for Yellow Pages Malaysia, Hotfrog, BusinessList.my
and Facebook Local Business. None of the four off-site registrations or their
publication state can be confirmed from this repository.

## 6. The reviews link (this is what unblocks problem P-05)

The homepage reviews block says *"Posted on Google"* but has had nowhere to
link, because no verified profile URL could be supplied — a reader has no way
to check it (the plan's P-05).

That is now wired, but **inert until a real URL exists**:

1. Create and verify the profile (§3) and collect at least a few real reviews.
2. Open the profile in Google Maps → **Share → Copy link** (or use the
   `g.page/r/…` review link from the profile's "Ask for reviews" panel).
3. Paste that URL into `googleReviewsUrl` in `data/site.ts`.
4. The homepage then renders a localized link — *"Read the reviews on Google"* /
   *"Baca ulasan di Google"* / *"在 Google 上查看评价"* — as a tracked
   `review_profile_click` event with `surface: home_reviews`, so the business
   can see how many visitors check the reviews before enquiring.

Rules the build enforces (`audit:authority` §9):

- The URL must be a real profile URL (`google.com/maps`, `maps.google.com`,
  `g.page`, `search.google.com`). A **search URL is rejected** — it would look
  like proof without being proof.
- The component may not hardcode any URL; it must come from `data/site.ts`.
- The URL must not enter structured data (no `sameAs`, no ratings — the site
  publishes no `Review`/`aggregateRating` node).
- The label must exist and be genuinely translated in EN, MS and ZH.
- While the value is empty the block renders exactly as before: reviews, the
  "Posted on Google" line, and no link.

Soliciting reviews honestly: ask recent customers for an honest review and make
it easy (share the review link). Never offer discounts, gifts or any incentive
for a review, never write reviews for customers, and never buy reviews. Those
breach Google's policies and can remove the profile entirely. The site's own
governance forbids fabricated testimonials for the same reason.

## 7. Verification — what is and is not claimed

**NOT CLAIMED** by this repository: that a profile exists, that it is verified,
that it appears in Maps, that it receives calls, or that any review is real or
attributable. None of that is observable from the code, and none of it may be
added to the site's structured data or copy as if it were.

**LIVE VERIFIED** means the owner has personally seen all of the following:

- [ ] The profile is verified (Google says so, not just "submitted").
- [ ] Searching the business name in Google Maps shows the exact §2 NAP.
- [ ] `site:renovixhomeservices.my` and the profile agree on phone, address,
      hours and website.
- [ ] The profile's own **Performance** report shows impressions and at least
      one real action (call, directions, website or message).
- [ ] At least one genuine customer review is published.
- [ ] `googleReviewsUrl` is set and the homepage link opens the same profile.

Only then should any phase document, plan or report describe the local profile
as live. Until then the honest state is: *the website is ready; the profile is
an owner action.*

## 8. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Verification keeps failing | Video did not show the required proof (premises, tools, work, documents) | Re-record covering the items Google listed, or ask for a different method |
| Profile suspended | Keyword-stuffed name, an address that is not the business's, or a category the business does not do | Fix the name/address/category, then appeal through the profile's own support flow |
| Duplicate listings | A second profile was created instead of claiming the existing one | Claim one, and request removal of the duplicate |
| Profile invisible after verification | Normal for a new profile; also possible if the address is far from the selected service areas | Wait one to three weeks; keep posting and adding photos; check the service-area list |
| NAP does not match the site | The site was edited and the profile was not (or vice versa) | `data/site.ts` is the source of truth — fix the site first, then the profile, then run `npm run audit:business` |
| Hours show as "Closed" when the business is open | Days were never entered for that day | Update the profile's hours (§3 step 6) and, if the real days differ from what the site states, update `data/site.ts` too |
| Reviews not appearing | Google's review filter, or reviews were solicited with incentives | Ask customers to review naturally; never incentivise |

## 9. Ownership and access

- Keep the profile on a Google account the business controls permanently, with
  recovery details recorded. If someone else set it up, transfer ownership
  properly through the profile's own "Managers" settings — do not create a
  second profile.
- If an agency later manages the profile, add it as a **manager**, never as the
  primary owner.
- The profile's Performance data belongs to the business; export it monthly if
  it is used to judge lead generation.

## 10. Checklist

- [ ] `npm run verify:local-seo` run; the §2 block copied from its output.
- [ ] Existing listing searched for and claimed if present (no duplicates).
- [ ] Business name entered exactly — no keywords, no neighbourhood.
- [ ] Address, locality, postcode and country exactly as §2.
- [ ] Service-area business decision made (address shown or hidden).
- [ ] Primary category set to what the business actually does most; secondary
      categories only for services genuinely offered.
- [ ] Service areas limited to localities where the business really works.
- [ ] Hours decided day by day; `data/site.ts` updated first if they differ
      from `9:00 AM – 6:00 PM`.
- [ ] Hours always break, phone and website set (website with **no** UTM).
- [ ] Description factual, no unverifiable claims.
- [ ] Real photos only (no stock, no AI); logo uploaded.
- [ ] Verification completed.
- [ ] Reviews link copied into `googleReviewsUrl` in `data/site.ts`.
- [ ] §7 live-verification checklist completed before calling it live.

## 11. Validation performed for this guide (Task 3.1)

| Check | Result |
| --- | --- |
| `npm run verify:local-seo` | PASS — prints the NAP read from `data/site.ts`, the hours caveat, 53 published locality guides grouped by region, and the reviews-link status; no network call |
| `npm run audit:authority` (§9, new) | PASS — reviews link is owner-supplied or absent, never guessed, never hardcoded, never in structured data, label translated in EN/MS/ZH. Negative-tested: a search-shaped URL fails, a hardcoded component URL fails, an armed URL without the tracked event fails |
| `npm run audit:analytics` | PASS — `review_profile_click` declared and fired from the homepage reviews link |
| `npm run build` | PASS (689 static entries; the rendered homepage carries no profile link and no Google URL while `googleReviewsUrl` is empty) |
| `npm run audit:live` | PASS — rendered pages unchanged with no URL supplied |
| A verified profile in Google Maps / the Local Pack | **NOT CLAIMED** — no profile exists that this repository can see; §7 is the owner's gate |
