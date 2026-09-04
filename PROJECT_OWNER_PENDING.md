# PROJECT OWNER-PENDING DATA — Phase 22

Status: **OWNER-PENDING**. Nothing on this list blocks the site; every item is
optional metadata the business can supply to strengthen project proof. Nothing
here may be invented, estimated or placeholder-filled in the meantime — the
project pages already render correctly with only the data that exists.

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
