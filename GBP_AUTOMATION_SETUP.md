# Google Business Profile — Weekly Auto-Posting Setup (Option 1)

> **Owner runbook.** Goal: one SEO-friendly post published automatically on
> the Google Business Profile every week, with content generated only from
> facts this website already publishes. Nothing here is live yet: Google
> must approve API access first, and only the business's own Google account
> can apply.

Status overview:

| Area | Status |
| --- | --- |
| Profile verified, Maps-visible, hours/service area aligned, real photos uploaded | **DONE — owner-confirmed 2026-10-15** (see `LOCAL_SEO_SETUP.md`) |
| Content source (services, areas, projects, problem guides on this site) | **READY** — the weekly generator reads the same registries the pages render |
| Google Business Profile API access (Cloud project + approval + OAuth) | **OWNER ACTION — steps 1–6 below** |
| Weekly auto-posting code (generator + scheduler + logs) | **CODE — built after API approval; the moment credentials exist it can run** |

Honesty rules (same as everywhere else in this repo):

- Post copy comes only from the site's own registries — services, areas,
  published projects and problem guides. No invented experience, team,
  certification, award, ranking or review claims.
- Post photos are only the business's real job photos already published on
  the site (GBP posts need a publicly reachable image URL; the site hosts
  them). No stock, no AI images.
- Secrets (client secret, refresh token) go **only** into secret stores
  (GitHub Actions secrets / local `.env`). Never into chat, email, or any
  committed file. Never share the Google account password or OTP codes
  with anyone — the OAuth step below never asks for them.

---

## Step 0 — Eligibility check (do this first)

Google's prerequisites for API access:

1. The profile is **verified and has been active for 60+ days**.
   Renovix was owner-confirmed verified on 2026-10-09. If the profile was
   *created* around then, the 60-day mark lands around **2026-12-08** —
   applying earlier risks rejection; note the date and wait if needed.
   If the profile is older (claimed pre-existing listing), apply now.
2. A website representing the business is listed on the profile —
   `https://renovixhomeservices.my` (already set).
3. The application is made from the Google account that owns/manages the
   profile.

Source: Google, "Prerequisites — Google Business Profile APIs"
(developers.google.com/my-business/content/prereqs).

## Step 1 — Create the Google Cloud project

Use the **same Google account** that owns the Business Profile.

1. Open <https://console.cloud.google.com> → project picker → **New project**.
2. Name it e.g. `renovix-gbp-automation`. No billing account is needed —
   the Business Profile APIs are free; if a billing prompt appears, you
   are on the wrong API.
3. On the project Dashboard, copy the **Project Number** (not just the ID) —
   the access application asks for it.

## Step 2 — Request API access (the approval gate)

Enabling the API is **not** enough: new projects start with **0 quota** and
every call fails until Google approves the project.

1. Submit the **GBP API contact form** (linked from Google's prerequisites
   page above) → choose **"Application for Basic API Access"**.
2. Fill in: the Project Number from Step 1, the business name
   `Renovix Home Services`, the profile's website
   `https://renovixhomeservices.my`, and this use-case text (copy verbatim):

   > We operate a single verified Google Business Profile for our home
   > renovation business in Kuala Lumpur & Selangor, Malaysia. We request
   > Basic API Access to programmatically publish one weekly local post
   > (updates about our services and completed work) to our own profile,
   > and to read our profile's performance data. One location, low volume
   > (a few requests per week). Business website:
   > https://renovixhomeservices.my

3. Submit and wait. Review is manual — typically a few days to a few weeks.
   Approval is confirmed when the project's quota for the Business Profile
   APIs shows **300 QPM** (queries per minute) in Cloud Console →
   APIs & Services → Quotas. **0 QPM = not yet approved** — do not file a
   quota-increase request in that state.

## Step 3 — Enable the APIs (after approval)

In the same Cloud project → **APIs & Services → Library**, enable:

| API | Why |
| --- | --- |
| **Google My Business API** (`mybusiness.googleapis.com`) | Creates local posts — posts only exist on this v4 surface |
| **My Business Account Management API** | Lists the account that owns the profile |
| **My Business Business Information API** | Lists/confirms the location the posts target |

## Step 4 — OAuth consent + credentials (after approval)

Also in the same project:

1. **OAuth consent screen**: type *External*, app name
   `Renovix GBP Automation`, support email = the business Google account.
   Add the scope `https://www.googleapis.com/auth/business.manage`
   (this is the only scope the Business Profile APIs use).
2. **Credentials → Create credentials → OAuth client ID → Web application**.
   The authorized redirect URI is supplied with the code step (a one-time
   local sign-in script, `npm run gbp:auth`, whose redirect is
   `http://localhost:8080/` — add exactly what the script prints).
3. Copy the **Client ID** and **Client secret**. These two values are not
   the token yet — Step 5 turns them into one.

## Step 5 — One-time sign-in → refresh token

The automation must act as the business without storing a password. It
uses a **refresh token** from a one-time consent:

1. Put `GBP_CLIENT_ID` / `GBP_CLIENT_SECRET` in a local `.env` (never
   committed; see `.env.example`).
2. Run `npm run gbp:auth` (provided with the code step): it opens the
   Google consent screen in your browser; sign in as the profile owner
   and allow `business.manage`.
3. It prints a **refresh token**. Store it as the GitHub Actions secret
   `GBP_REFRESH_TOKEN` (repo → Settings → Secrets and variables →
   Actions), together with `GBP_CLIENT_ID` and `GBP_CLIENT_SECRET`.
   The token stays valid until revoked; if it is ever revoked, repeat
   this step only.

**Never** paste the client secret or refresh token into chat, email or a
document. Setting them in GitHub Secrets is the only handoff.

## Step 6 — Tell the maintainer "API approved + secrets set"

From here it is code, not owner work:

1. Generator (`scripts/gbp-post.mjs`): builds the week's post from the
   site registries on a fixed rotation — service spotlight → area guide →
   published project highlight → problem-guide tip — with a **Call** /
   **Learn more** button linking to the matching page (tagged URLs are
   allowed in posts, unlike the profile website field).
2. Scheduler (`.github/workflows/gbp-weekly-post.yml`): runs every
   **Monday 09:30 MYT**, publishes via
   `POST https://mybusiness.googleapis.com/v4/{account}/locations/{location}/localPosts`,
   keeps to a few requests/week (far under quota), logs the result.
3. First run is a **dry run** (prints the post, publishes nothing), then
   one live test post, checked in Google Maps, then weekly automation
   is switched on.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Every API call fails with quota error | Project not approved yet (0 QPM) | Wait for the Step 2 approval; check quota shows 300 QPM |
| Application rejected | Profile under 60 days, or vague use case | Wait until the profile is 60+ days old; re-apply with the Step 2 text verbatim |
| `invalid_grant` / token errors | Refresh token revoked or consent withdrawn | Repeat Step 5 only |
| Post shows but image missing | Image URL not publicly reachable | Posts use the site's own hosted project/service images — check the page is live |
| Post rejected by Google | Copy reads as spam/keyword-stuffed | Generator copy is factual site copy; edit the template, never stuff keywords |

## What this will never do

- Post reviews, reply as customers, or offer incentives for reviews.
- Claim ratings, rankings, certifications or experience the business has
  not supplied.
- Post more than the weekly schedule without the owner's say-so.
