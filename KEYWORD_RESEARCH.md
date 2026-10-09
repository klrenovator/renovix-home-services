# Keyword Research Database — Renovix Home Services

Master brief, Section 4: the repeatable, evidence-based keyword research
workflow and the database it feeds. The database is `data/keywords/`; this file
is the runbook.

**Prime rule: nothing in this database is invented.** A search volume, a
competition observation, a ranking URL or a difficulty score that was not
copied from a real, named source is never invented and does not exist here.
Where a metric is unavailable, the field is `null` ("unknown") — never a
guess, never a placeholder number.

## 1. What the database is

One row per researched keyword cluster, composed from the site's verified
registries (services, sub-services, problems, areas, articles, the
search-intent matrix) plus the authored natural phrasings in
`data/keywords/phrases.ts`. Every row names:

- the keyword in its language,
- the search intent and cluster,
- the entities it maps to (service / sub-service / problem / location),
- **one primary target URL** — derived from a typed target reference, never
  hand-typed,
- conversion relevance and priority,
- the research source, status and last-reviewed date.

The database answers three questions at a glance: *what are we targeting, where
does it land, and what real evidence do we have for it?* It is the working
input for Search Console analysis (brief §18): when the owner exports real
queries, each query is matched to a row and the row is upgraded from
`derived` to `verified`.

## 2. Field dictionary

| Field | Rule |
| --- | --- |
| `id` | Stable, unique, never reused. |
| `keyword` | The natural phrasing in its language. EN rows are lowercased; MS/ZH keep their natural form. |
| `language` | `en` / `ms` / `zh`. |
| `intent` | `informational` (learn), `commercial` (compare/consider), `transactional` (hire/quote). |
| `cluster` | `core-service`, `near-me`, `hyperlocal`, `problem`, `informational` — see §4. |
| `serviceSlug` / `subServiceSlug` / `problemSlug` / `locationSlug` / `regionId` | The entities the keyword maps to; all validated against the registries at build time. |
| `modifier` | The modifier the phrasing carries ("near me", "cost", …). |
| `source` | Which registry or authored table the phrasing was composed from. |
| `searchVolume` | **`null` until copied from a named real source.** When set, `searchVolumeSource` is mandatory (build fails otherwise). |
| `searchVolumeSource` | The named source, e.g. `GSC export 2026-10-08`. |
| `competitionNotes` | **`null` until genuinely observed.** When set, the observation source must be named in `notes`. |
| `existingRankingUrl` | **`null` until copied from a verified Search Console export**, and it must be a `https://renovixhomeservices.my` URL (build fails otherwise). |
| `target` / `targetUrl` | Typed target reference; the URL is derived from it. One primary target per keyword per language. |
| `conversionRelevance` / `priority` | `high` / `medium` / `low`, assigned from intent and evidence — never inflated. |
| `researchStatus` | `derived` (composed from registries, no live source checked) or `verified` (a real source is named in `notes`). |
| `lastReviewed` | ISO date the row was last reviewed against its sources. |

## 3. Honesty rules (enforced, not just documented)

- `npm run build` **fails** when a row's target is not a published page in
  the row's language, when two rows claim the same normalized keyword in one
  language, when a volume appears without a source, or when a ranking URL is
  not a canonical production URL (`app/sitemap.ts` →
  `runKeywordResearchAudits()`).
- `npm run audit:keywords` **fails** when the composition sources contain any
  `searchVolume` / `existingRankingUrl` / `competitionNotes` literal other
  than `null`, when the phrasing table loses a service or language, or when
  the build wiring is removed.
- Use the words "best", "licensed", "certified", "emergency" and "24-hour" in
  a keyword row only when the site can substantiate them. (The intent matrix
  already restricts "emergency" to safety-critical electrical faults and
  active leaks.)

## 4. Cluster → URL strategy (one intent, one URL)

| Cluster | Rows today | Target | Notes |
| --- | --- | --- | --- |
| `core-service` | 10 services × 2 regions × 3 languages | the localized service pillar | "tile repair Kuala Lumpur" → `/en/services/tiling/` |
| `near-me` | 10 services × 3 languages | the localized service pillar | **Intent only — no dedicated near-me URL is created** (brief §4B). Answered by the pillar, the 53 area guides and the Google Business Profile (owner-pending). |
| `hyperlocal` | the 24 published intent-matrix entries × their authored query examples | the sub-service page (or pillar when no scope exists) | "plumber in shah alam near me" → the pipe-leak-repair scope page. |
| `problem` | 57 guides × 3 languages | the localized problem guide | "cracked tile repair" → `/en/problems/cracked-tile-repair/`; the guide links the bookable scopes. |
| `informational` | 12 guides × their published languages | the localized Knowledge Hub guide | cost guides are `commercial`/`high`; the rest `informational`/`medium`. |

**Anti-cannibalization:** within one language, a normalized keyword may be
claimed by exactly one row, and one row has exactly one primary target. If
research shows two intents deserve different pages, that is a *content
decision* (new or changed page), not a second row pointing elsewhere.

## 5. The research workflow (how rows become `verified`)

1. **Export real queries** from Google Search Console (Performance → Queries;
   filter 28 days, save the CSV). This is the only source for
   `searchVolume`-grade evidence and `existingRankingUrl`.
2. **Match** each real query to a row by normalized keyword. Exact match →
   upgrade the row. Close variant ("tukang paip shah alam") → add a row in
   the reviewed overlay (§6) with the GSC export named as its source.
3. **Discover** gaps with Google autocomplete, People Also Ask and Google
   Trends (Malaysia, `my` locale), and by reading genuine competitor sites'
   service pages. A discovered phrasing becomes a row only with its source
   recorded; volumes stay `null` unless GSC supplied them.
4. **Record** the evidence: set `searchVolume` + `searchVolumeSource`, or
   `existingRankingUrl`, set `researchStatus: "verified"`, name the source in
   `notes`, and bump `lastReviewed`. Then run `npm run build` — the guards
   must stay green.
5. **Review** quarterly: re-export GSC, re-match, retire rows whose target
   page was retired, and re-derive priorities from real performance — never
   from assumptions.

## 6. Where verified evidence lives

The composition sources (`index.ts`, `phrases.ts`) hold only `derived` rows
with `null` metrics — the static audit pins that. Real, sourced evidence goes
in a **reviewed overlay**: `data/keywords/verified.ts` (create it when the
first GSC export exists), exporting `verifiedKeywordEvidence` rows that the
same `runKeywordResearchAudits()` validates. The overlay is reviewed in a
pull request like any other content change; `npm run audit:keywords` is then
updated to allow sourced literals in that one file. This keeps the "no invented
metrics" guard absolute for the composed database while giving real evidence a
controlled home.

## 7. Running the checks

```bash
npm run audit:keywords   # static source + wiring guards
npm run build            # semantic guards (targets, cannibalization, honesty)
npm run type-check       # the typed target references
```

## 8. Current state (2026-10-09)

- All rows are `derived`; every `searchVolume`, `competitionNotes` and
  `existingRankingUrl` is `null`. No ranking, volume or competition claim is
  made anywhere.
- No Google Search Console API access exists in this environment; the owner's
  dashboard export is the first `verified` milestone (brief §18).
- Row counts per cluster are printed by `keywordResearchSummary()` in
  `data/keywords/index.ts` and recorded in `PROJECT_PROGRESS.md` (Phase 58).
