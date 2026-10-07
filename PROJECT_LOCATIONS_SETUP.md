# Renovix Home Services — Project Area Tagging & Local Proof Guide

> **Document Status:** Active Owner Runbook (Lead-Generation Roadmap Task 3.4)  
> **Target Outcome:** Transform https://renovixhomeservices.my into a high-converting, locally dominant home-services lead generation engine in Kuala Lumpur & Selangor by attaching verified local proof to township searches.

---

## 1. Why Project Area Tagging Matters for Lead Generation

In Malaysian home improvement and renovation, homeowners search hyper-locally (e.g. *"renovation contractor Mont Kiara"*, *"plumber Subang Jaya"*, *"tile repair Petaling Jaya"*).

When a homeowner visits an area guide (e.g. `/en/areas/kuala-lumpur/mont-kiara/`), seeing **real, verified project photographs from their own neighbourhood** is the single highest-converting proof element (E-E-A-T):
1. **Solves P-07 (Lack of published neighbourhood proof):** Connects the 28 photographed projects to specific neighbourhoods, answering the homeowner's unspoken question: *"Have they actually done real work near my home?"*
2. **Solves P-08 (Area page template uniformity):** Enriches area guides with genuine local project case studies, differentiating programmatic area guides and protecting against search-engine duplicate-content penalties.
3. **Maximises WhatsApp Inquiries:** Each project card features a high-visibility CTA to view the project details and inquire directly via WhatsApp with photo attachments.

---

## 2. What Is Already Implemented & Verified in the Repository

The codebase is **100% prepared** to handle project locations bidirectionally:

- **Area Page Integration (`components/area/AreaProjectsSection.tsx`):**  
  Renders a grid of verified local projects with authentic photos, service badges, and case study links directly on the area guide (e.g. Mont Kiara, Petaling Jaya, Subang Jaya).
- **Region Hub Integration (`components/area/AreaRegionProjectsSection.tsx`):**  
  Renders regional project case studies on the Kuala Lumpur and Selangor region hubs (`/areas/kuala-lumpur/` and `/areas/selangor/`).
- **Project Detail Page Integration (`components/projects/ProjectLocationSection.tsx`):**  
  Displays the confirmed neighbourhood and region with a direct link back to that area guide.
- **Multilingual Support (EN / MS / ZH):**  
  All section headings, labels, badges, and CTAs are fully localized in English, Bahasa Melayu, and Chinese (`i18n/{en,ms,zh}.ts`).
- **Honesty & Non-Fabrication Invariant (`CONTENT_GOVERNANCE.md` §1):**  
  When an area has no confirmed projects yet, the project section is **cleanly omitted** — no empty placeholder boxes, no layout shifts, and zero fake case studies.
- **Verification Tooling:**  
  Run `npm run verify:project-locations` at any time to inspect tagged versus pending projects and validate slug accuracy.

---

## 3. How to Tag a Project

Project locations are maintained in `data/project-content/projects.ts`.

To assign a verified location to a project, locate its entry in the `projects` array and add the `location` property:

### Example A: Specific Township / Neighbourhood Guide
```typescript
{
  slug: "marble-look-floor-tiling",
  category: "tiling",
  subServices: ["floor-tile-installation"],
  status: "published",
  location: { region: "kuala-lumpur", area: "mont-kiara" }, // <-- Add this line
  image: {
    src: "/images/projects/marble-look-floor-tiling-kl-selangor.webp",
    width: 1200,
    height: 900,
  },
  // ...
}
```

### Example B: Region-Wide Location (when township lacks a dedicated area guide)
```typescript
{
  slug: "structural-metal-welding-fabrication",
  category: "welding",
  status: "published",
  location: { region: "selangor" }, // <-- Region-level without area slug
  image: {
    src: "/images/projects/structural-metal-welding-fabrication-kl-selangor.webp",
    width: 1200,
    height: 900,
  },
  // ...
}
```

---

## 4. Complete Inventory of All 28 Published Projects

Below is the complete list of all 28 published projects in the repository. As the business owner, confirm the job location from your job records, invoices, or client communication and tag them accordingly:

| # | Project Slug | Primary Category | Verified Scope / Description | Current Status |
|---|---|---|---|---|
| 1 | `marble-look-floor-tiling` | Tiling | Large-format marble-look floor tile installation | `[PENDING]` Owner Confirmation |
| 2 | `floor-tile-removal-hacking` | Tiling | Floor tile hacking and substrate preparation | `[PENDING]` Owner Confirmation |
| 3 | `porcelain-floor-tile-installation` | Tiling | Polished porcelain tile layout and grouting | `[PENDING]` Owner Confirmation |
| 4 | `plaster-ceiling-cove-lighting` | Ceiling | Plaster ceiling with concealed LED cove lighting trough | `[PENDING]` Owner Confirmation |
| 5 | `plaster-ceiling-design-downlights` | Ceiling | Multi-tier ceiling design with recessed downlight cutouts | `[PENDING]` Owner Confirmation |
| 6 | `plaster-ceiling-pendant-lighting` | Ceiling | Plaster ceiling installation with pendant light points | `[PENDING]` Owner Confirmation |
| 7 | `timber-look-ceiling-beams` | Ceiling | Decorative faux-timber ceiling beams | `[PENDING]` Owner Confirmation |
| 8 | `suspended-ceiling-grid` | Ceiling | Exposed T-bar grid ceiling for commercial space | `[PENDING]` Owner Confirmation |
| 9 | `ceiling-fan-and-light-installation` | Electrical | Dual ceiling fan and LED light fixture mounting | `[PENDING]` Owner Confirmation |
| 10 | `chandelier-and-ceiling-fan-installation` | Electrical | Centrepiece chandelier and matching fan installation | `[PENDING]` Owner Confirmation |
| 11 | `black-ceiling-fan-installation` | Electrical | Contemporary matte-black ceiling fan mounting | `[PENDING]` Owner Confirmation |
| 12 | `high-ceiling-light-installation` | Electrical | High-clearance lighting installation requiring scaffolding | `[PENDING]` Owner Confirmation |
| 13 | `pendant-lamp-installation` | Electrical | Feature dining/kitchen pendant lamp mounting & wiring | `[PENDING]` Owner Confirmation |
| 14 | `awning-lighting-installation` | Electrical | Weatherproof outdoor awning lighting & conduits | `[PENDING]` Owner Confirmation |
| 15 | `wall-switch-installation` | Electrical | Multi-gang rocker wall switch replacement & wiring | `[PENDING]` Owner Confirmation |
| 16 | `outdoor-switch-socket-wiring` | Electrical | IP-rated weatherproof outdoor power point installation | `[PENDING]` Owner Confirmation |
| 17 | `timber-switch-socket-installation` | Electrical | Timber-accented wall socket installation | `[PENDING]` Owner Confirmation |
| 18 | `electrical-distribution-board-wiring` | Electrical | Main DB box rewiring and circuit breaker dressing | `[PENDING]` Owner Confirmation |
| 19 | `electrical-db-panel-installation` | Electrical | Complete 3-phase distribution panel mounting | `[PENDING]` Owner Confirmation |
| 20 | `electrical-cable-wiring-installation` | Electrical | Concealed electrical conduit pulling and cable routing | `[PENDING]` Owner Confirmation |
| 21 | `wall-mounted-fan-installation` | Handyman | Heavy-duty wall bracket mounting & fan wiring | `[PENDING]` Owner Confirmation |
| 22 | `toilet-and-basin-installation` | Plumbing | Sanitary ware installation (WC pan, cistern & basin) | `[PENDING]` Owner Confirmation |
| 23 | `instant-shower-heater-installation` | Plumbing | Instant water heater mounting with RCD isolator wiring | `[PENDING]` Owner Confirmation |
| 24 | `structural-metal-welding-fabrication` | Welding | Heavy structural steel frame welding and fabrication | `[PENDING]` Owner Confirmation |
| 25 | `pipe-and-valve-welding-works` | Welding | Industrial pipe joinery and valve welding | `[PENDING]` Owner Confirmation |
| 26 | `on-site-metal-frame-welding` | Welding | On-site metal bracket and frame alignment welding | `[PENDING]` Owner Confirmation |
| 27 | `metal-awning-frame-installation` | Welding | Exterior hollow-section metal awning frame welding | `[PENDING]` Owner Confirmation |
| 28 | `office-renovation-ceiling-and-tiling` | Renovation | Commercial office ceiling grid, lighting and tiling fitout | `[PENDING]` Owner Confirmation |

---

## 5. Valid Area Slugs Reference Table

When tagging a project with an `area`, the slug **must** match one of the published area guides below. Any typo or unrecognised slug is automatically rejected by `npm run verify:project-locations` and `npm run audit:projects`.

### Kuala Lumpur (`region: "kuala-lumpur"`) — 21 Published Area Guides
- `ampang` (Ampang KL)
- `bangsar` (Bangsar)
- `bangsar-south` (Bangsar South / Kerinchi)
- `brickfields` (Brickfields)
- `bukit-bintang` (Bukit Bintang)
- `bukit-jalil` (Bukit Jalil)
- `cheras` (Cheras KL)
- `damansara-heights` (Damansara Heights / Bukit Damansara)
- `desa-parkcity` (Desa ParkCity)
- `dutamas` (Dutamas / Solaris Dutamas)
- `kampung-baru` (Kampung Baru)
- `kepong` (Kepong)
- `kl-city-centre` (KL City Centre)
- `mont-kiara` (Mont Kiara)
- `oug` (Overseas Union Garden / OUG)
- `pantai-dalam` (Pantai Dalam)
- `segambut` (Segambut)
- `sentul` (Sentul)
- `setapak` (Setapak)
- `sri-petaling` (Sri Petaling / 大城堡)
- `wangsa-maju` (Wangsa Maju)

### Selangor (`region: "selangor"`) — 32 Published Area Guides
- `ampang-jaya` (Ampang Jaya)
- `balakong` (Balakong)
- `bandar-kinrara` (Bandar Kinrara)
- `bandar-saujana-putra` (Bandar Saujana Putra)
- `bandar-sunway` (Bandar Sunway)
- `bandar-utama` (Bandar Utama)
- `bangi` (Bangi)
- `banting` (Banting)
- `batu-caves` (Batu Caves)
- `cyberjaya` (Cyberjaya)
- `damansara-perdana` (Damansara Perdana)
- `gombak` (Gombak)
- `kajang` (Kajang)
- `klang` (Klang)
- `kota-damansara` (Kota Damansara)
- `kota-kemuning` (Kota Kemuning)
- `mutiara-damansara` (Mutiara Damansara)
- `pandan-indah` (Pandan Indah)
- `petaling-jaya` (Petaling Jaya)
- `puchong` (Puchong)
- `puncak-alam` (Puncak Alam)
- `rawang` (Rawang)
- `selayang` (Selayang)
- `semenyih` (Semenyih)
- `sepang` (Sepang)
- `serdang` (Serdang)
- `seri-kembangan` (Seri Kembangan)
- `setia-alam` (Setia Alam)
- `shah-alam` (Shah Alam)
- `subang-jaya` (Subang Jaya)
- `sungai-buloh` (Sungai Buloh)
- `usj` (USJ)

---

## 6. Strict Governance & Non-Fabrication Rules

Per `CONTENT_GOVERNANCE.md` §1:
1. **Never guess from photographs:** Do not assume a condominium photo is in Mont Kiara or Bangsar without confirming the job invoice or client file.
2. **Never publish private customer data:** Only the neighbourhood/township slug (`area`) and state (`region`) are published. Never enter street names, unit numbers, condominium names, or client names into the codebase.
3. **Region fallback:** If a job was completed in a township without its own area guide (e.g. Rawang outskirts or Dengkil), use `{ region: "selangor" }` or `{ region: "kuala-lumpur" }` rather than inventing an area.

---

## 7. Verification Routine

After tagging any project locations:
1. Run the local verification script:
   ```bash
   npm run verify:project-locations
   ```
   *Expected output: Lists newly tagged projects and confirms zero slug errors.*
2. Run the automated audit suite:
   ```bash
   npm run audit:projects
   npm run audit:locations
   ```
3. Run the production build to ensure static generation and hreflang parity:
   ```bash
   npm run build
   ```

---

## 8. Owner Activation Checklist

- [ ] Check internal client records / invoices for the 28 published projects.
- [ ] For each confirmed project, add `location: { region: "...", area: "..." }` in `data/project-content/projects.ts`.
- [ ] Run `npm run verify:project-locations` to check that all assigned slugs resolve correctly.
- [ ] Run `npm run build` to confirm all 689+ static pages build cleanly.
- [ ] Update `LEAD_GENERATION_PLAN.md` to record the completed owner confirmation.
