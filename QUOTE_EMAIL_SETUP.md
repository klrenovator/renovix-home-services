# Quote Email (Lead Notification) Setup — Resend + Vercel

> **Lead-generation Task 2.1 — canonical owner guide.**
> Follow this file to activate, re-verify, or rotate the quote-form email
> pipeline. No step here requires code changes: the pipeline is fully coded
> and the website runs with or without it.

Status overview (the three states used throughout this document):

| Area | Status |
| --- | --- |
| Lead pipeline code (validation, honeypot, rate limit, origin allow-list, Resend delivery, honest failure states, WhatsApp fallback) | **CODE COMPLETE** |
| `RESEND_API_KEY` · `QUOTE_FROM_EMAIL` · `QUOTE_NOTIFICATION_EMAIL` | **OWNER CONFIGURATION — set in the hosting dashboard, never in the repository** |
| Live email delivery of real quote requests | **NOT CLAIMED — LIVE VERIFIED only after the owner completes the end-to-end test in §5** |

No secret was invented for this guide. Every placeholder below is marked as
one — copy-pasting a placeholder cannot send data anywhere.

Related files:

| File | Role |
| --- | --- |
| `app/api/quote/route.ts` | The single quote endpoint (`POST /api/quote/`): origin check, body-size cap, validation, rate limit, then email delivery |
| `lib/quote/email.ts` | `getEmailConfig()` (reads the three variables) + `sendQuoteNotification()` (Resend HTTPS call, 12-second timeout) |
| `lib/quote/validation.ts` | Server-side payload validation incl. the `companyWebsite` honeypot (spam is answered with a silent success, no email) |
| `lib/quote/rate-limit.ts` | Baseline per-IP limiter: 5 submissions per 15 minutes (`429 rate_limited` + `Retry-After`) |
| `lib/quote/origin.ts` | Origin allow-list: the production domain, its `www` alias, same-host posts and local loopback |
| `components/quote/QuoteForm.tsx` | The trilingual form with the instant WhatsApp route above it and the WhatsApp fallback on every failure state — no inquiry is ever silently lost |
| `.env.example` | The documented variable list (values stay empty in git) |
| `scripts/verify-quote-email.mjs` (`npm run verify:quote-email`) | Local, non-destructive configuration check — verifies format only, never sends email, never prints secrets |

---

## 1. How the pipeline works

```
Customer fills the /quote/ form (EN/MS/ZH)
  ──► POST /api/quote/ (JSON, max 64 KB)
        ├─ origin allowed?            → 403 forbidden
        ├─ body parseable + in size?  → 400/413 invalid_payload
        ├─ honeypot filled?           → 200 ok (silent: spam, no email sent)
        ├─ fields valid?              → 400 validation + field list (no values echoed)
        ├─ rate limit (5 / 15 min/IP) → 429 rate_limited + Retry-After
        ├─ email configured?          → 503 unavailable (honest: nothing faked)
        └─ Resend accepts?            → 200 ok  /  503 unavailable (provider/network failure)
                                          │
                                          ▼
                              Resend → lead notification email
                              From: QUOTE_FROM_EMAIL (verified domain)
                              To:   QUOTE_NOTIFICATION_EMAIL
                                    (or renovixhomeservices@gmail.com by default)
                              Reply-To: customer's email when they gave a valid one
```

Every failure state on the form offers the same escape hatch: a WhatsApp
chat that already carries the entered service, sub-service, property type
and location — so a customer can always complete the inquiry in the chat
instead. The success panel likewise hands photo sharing to WhatsApp (the
email path carries no attachments by design).

What the business receives per lead: customer name, phone, email (if given),
requested service + sub-service (English registry names), property type,
location, preferred contact method, preferred date (if given), project
details, website language, and the submission time in Malaysia time — as
both plain text and a formatted HTML table.

## 2. What the owner supplies

| Variable | Required | Goes into | Purpose |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | **Yes** | Vercel → Project → Settings → Environment Variables (Production; add Preview too if preview deployments should deliver email) — or `.env.local` for local testing only | Resend API key. Server-side only: it must never carry a `NEXT_PUBLIC_` prefix and must never be committed. |
| `QUOTE_FROM_EMAIL` | **Yes** | Same env config | Sender identity on a domain verified in Resend, e.g. `Renovix Home Services <noreply@renovixhomeservices.my>`. Resend rejects any domain it has not verified. |
| `QUOTE_NOTIFICATION_EMAIL` | No | Same env config | Inbox that receives new quote requests. When unset or invalid, delivery defaults to the public business email `renovixhomeservices@gmail.com` (the single address in `data/site.ts`). |

Until the two required variables are set, the website behaves honestly: the
endpoint answers `503 unavailable`, the form shows its localized error panel
with the WhatsApp fallback, and nothing pretends the email was sent.

## 3. Step-by-step activation

### Step 1 — Create the Resend account

1. Go to [resend.com](https://resend.com) and sign up with a business email
   the owner controls.
2. Complete any account verification Resend asks for. No code or DNS change
   is needed yet.

### Step 2 — Verify the sending domain

Resend only sends from domains the owner proves they control. The intended
sending domain is `renovixhomeservices.my`.

1. In Resend go to **Domains → Add Domain** and enter
   `renovixhomeservices.my`.
2. Resend shows the DNS records to add (typically SPF + DKIM records — the
   exact hostnames and values are generated per domain, so copy them from
   the Resend dashboard, not from any document).
3. Add those records at the domain's DNS provider (wherever
   `renovixhomeservices.my` nameservers point), then wait for Resend to show
   the domain as **Verified**. DNS propagation can take minutes to hours;
   Resend re-checks automatically.
4. Do not proceed to live testing until the domain reads Verified — Resend
   rejects `QUOTE_FROM_EMAIL` addresses on unverified domains.

> If the business ever changes its sending domain, the new domain must be
> verified the same way and `QUOTE_FROM_EMAIL` updated to an address on it.

### Step 3 — Create the API key

1. In Resend go to **API Keys → Create API Key**.
2. Give it a recognizable name (e.g. `renovix-quote-production`) and the
   minimum permission that can send email (**Sending access** — no other
   scope is needed).
3. Copy the key **once** — Resend shows it only at creation. It looks like
   `re_` followed by a long random string. Treat it as a password.

### Step 4 — Set the environment variables in Vercel

1. Open the Vercel dashboard → the `renovix-home-services` project →
   **Settings → Environment Variables**.
2. Add each variable below. Apply them to **Production** (tick Preview too
   only if preview deployments should send real lead emails):

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | The key copied in Step 3 (paste the real key; nothing in git holds it) |
   | `QUOTE_FROM_EMAIL` | `Renovix Home Services <noreply@renovixhomeservices.my>` (must be on the domain verified in Step 2) |
   | `QUOTE_NOTIFICATION_EMAIL` | The inbox for new leads (e.g. `renovixhomeservices@gmail.com`) — optional; leaving it unset uses the same default |

3. **Redeploy** the production deployment (Vercel → Deployments → ⋯ →
   Redeploy) so the new variables reach the serverless functions.
   Environment-variable changes never apply to already-running deployments.

### Step 5 — Confirm the configuration loads (no email sent)

On any machine with the repository checked out and the variables available
(e.g. after `vercel env pull`, or with a local `.env.local` — see §4):

```bash
npm run verify:quote-email
```

The script reports `CONFIGURED` or `NOT CONFIGURED` with per-variable
guidance. It performs **format checks only**: it never sends an email, never
calls the network, and never prints the API key (at most the key length and
its `re_` prefix are shown). A `NOT CONFIGURED` result is expected on a
fresh checkout — it means the honest `503 + WhatsApp fallback` behaviour is
active, not that anything is broken.

## 4. Local development (`.env.local`, never committed)

For local end-to-end testing with `npm run dev`:

1. Copy the template: `cp .env.example .env.local`.
2. Fill the three values in `.env.local` with **test-only** credentials
   (ideally a separate Resend key restricted to sending, and a personal
   inbox as `QUOTE_NOTIFICATION_EMAIL` so test leads never pollute the
   business inbox).
3. Restart `npm run dev` after editing `.env.local`.

`.env.local` is git-ignored (`npm run audit:security` enforces that
`.env*` stays ignored while `.env.example` stays committed with an empty
`RESEND_API_KEY`). Never commit a real key, never paste one into chat logs
or screenshots, and never reuse the production key on a shared machine.

## 5. End-to-end verification (the only LIVE VERIFIED gate)

Configuration is not delivery. The pipeline counts as live only after this
test passes against the **production** deployment:

1. Open `https://renovixhomeservices.my/en/quote/` in a normal browser
   window (repeat once each for `/ms/quote/` and `/zh/quote/` if the
   localized flow matters for the release under test).
2. Fill every required field with clearly-marked test data (e.g. name
   `TEST — please ignore`, a real phone format such as `+60120000000`,
   location `TEST Mont Kiara`) and submit.
3. Expect the green success panel. Then confirm **both**:
   - the notification email arrives in `QUOTE_NOTIFICATION_EMAIL`
     (check spam on first delivery) with the submitted details, and
   - the Resend dashboard → **Emails** shows the send as Delivered (or at
     least Sent) with the expected From/To/Subject.
4. Confirm the fallback still works: temporarily break nothing — instead,
   verify the instant WhatsApp route above the form opens `wa.me` with the
   entered details pre-filled, and that the success panel's photo handoff
   opens WhatsApp too.
5. Delete or archive the test lead email so it cannot be mistaken for a
   real inquiry later.

Only after step 3 succeeds may any status table in this repository be
updated from configuration-pending to live. A `503` during this test means
the variables did not reach the running deployment — re-check Step 4 (wrong
environment scope is the usual cause) and redeploy again.

## 6. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Form shows the error panel, server log says `email provider is not configured` | `RESEND_API_KEY` or `QUOTE_FROM_EMAIL` missing, empty, or `QUOTE_FROM_EMAIL` not a valid address | Re-check the Vercel variable names (exact spelling, no `NEXT_PUBLIC_` prefix), values, and environment scope; redeploy; re-run `npm run verify:quote-email` |
| Server log says `email delivery failed resend_4xx` | Resend rejected the send — usually an unverified `QUOTE_FROM_EMAIL` domain or a revoked key | Verify the domain in Resend (Step 2), confirm the From address domain matches it exactly, or create a fresh key (Step 3) |
| Server log says `email delivery failed resend_5xx` or `network` | Resend outage or the 12-second request timeout | Retry the submission; check the Resend status page; the customer keeps the WhatsApp fallback either way |
| `429 rate_limited` on repeated submits | More than 5 submissions from one IP in 15 minutes (the documented baseline) | Wait for the `Retry-After` window; this is abuse protection, not an outage |
| `400 validation` with field names | A field failed server validation (the response lists field *names* only, never values) | Fix the flagged fields; if a legitimate submission keeps failing, compare against `lib/quote/validation.ts` limits (e.g. description ≤ 4000 chars, location ≤ 200) |
| Submission succeeds but no email arrives, Resend shows nothing | Spam filter, wrong `QUOTE_NOTIFICATION_EMAIL`, or the submission was honeypot-flagged spam (silent success by design) | Check spam; confirm the To inbox in Vercel; check Resend → Emails for the send; real users never fill the hidden `companyWebsite` field |
| Domain stuck on Pending in Resend | DNS records missing, mistyped, or not yet propagated | Re-copy the exact records from Resend → Domains, confirm them with the DNS provider's lookup, and wait before re-checking |

Client-visible errors never include provider details: the browser only ever
sees `validation`, `rate_limited`, `forbidden`, `invalid_payload` or
`unavailable`. Resend status codes and network errors are logged
server-side only.

## 7. Security notes

- The API key is **server-side only**: only `lib/quote/email.ts` (imported
  by the API route) reads `process.env.RESEND_API_KEY`. No `NEXT_PUBLIC_`
  variable may ever hold it — `npm run audit:security` fails if one does,
  and fails on any hardcoded key pattern in app source.
- Secrets never enter git: `.env*` is ignored, `.env.example` keeps empty
  values, and this guide contains no real credential.
- The notification email's customer content is HTML-escaped
  (`escapeHtml` in `lib/quote/validation.ts`) and the endpoint caps bodies
  at 64 KB, allow-lists origins, rate-limits per IP, and answers `no-store`
  + `noindex` so submissions are never cached or indexed.
- Least privilege: the Resend key needs Sending access only. Restrict it to
  the sending domain if Resend offers domain-scoped keys.

## 8. Rotation & removal

- **Rotate the key** (recommended if it was ever exposed or when staff
  changes): create a new key in Resend (Step 3), replace `RESEND_API_KEY`
  in Vercel, redeploy, run the §5 test once, then delete the old key in
  Resend. There is no code change.
- **Change the inbox**: update `QUOTE_NOTIFICATION_EMAIL` in Vercel and
  redeploy. Unsetting it restores the `renovixhomeservices@gmail.com`
  default.
- **Pause email delivery** (e.g. inbox maintenance): remove
  `RESEND_API_KEY` from Vercel and redeploy. The site immediately falls
  back to the honest `503 + WhatsApp fallback` behaviour — customers lose
  no path to enquire.

## 9. Activation checklist

- [ ] Resend account created; `renovixhomeservices.my` shows **Verified** in Resend → Domains.
- [ ] API key created with Sending access only; stored in Vercel, nowhere else.
- [ ] `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` (+ optional `QUOTE_NOTIFICATION_EMAIL`) set for **Production** in Vercel; production redeployed afterwards.
- [ ] `npm run verify:quote-email` reports `CONFIGURED` where the variables are available.
- [ ] §5 end-to-end test passes on production: success panel renders, email arrives with correct details, Resend dashboard shows the send.
- [ ] Test lead archived so it cannot be mistaken for a real inquiry.
- [ ] `npm run audit:quote` and `npm run audit:security` still PASS (they guard the wiring and the no-secrets invariants this guide depends on).

## 10. Validation performed for this guide (Task 2.1)

| Check | Result |
| --- | --- |
| `npm run type-check` | PASS — no application code changed, so no type surface moved |
| `npm run lint` | PASS (0 problems) |
| `npm run build` | PASS — **689 / 689** static generation entries (route set unchanged: this task adds documentation, not a URL) |
| All static audits incl. the extended `audit:quote` §8 | PASS — the guide exists, names all three variables, documents domain verification, Vercel scoping + redeploy, the end-to-end test, the WhatsApp fallback and the server-side-only rule; `.env.example` + `README.md` point at it; the code still reads the documented variables and fails honestly without them |
| `npm run verify:quote-email` (unconfigured checkout) | Reports `NOT CONFIGURED` with per-variable next steps; sends nothing, prints no secret |
| Rendered site | Unchanged — no component, dictionary, price, link, title, canonical, hreflang entry, image or structured-data node was touched |

Browser-level live delivery is **not** claimed by this task: per §5 it is
verified by the owner after configuring real credentials, by submitting one
real quote on production.
