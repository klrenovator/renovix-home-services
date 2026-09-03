import type { Project, ProjectContent } from "./types";

/**
 * The Renovix project portfolio.
 *
 * HONESTY RULES — these are load-bearing, not decoration:
 *
 * 1. Every entry is a photograph of work the business actually carried out and
 *    supplied for publication. Nothing here is a mock-up, a stock image or an
 *    AI-generated picture presented as completed work.
 * 2. Only fields the business has supplied are populated. There are no client
 *    names, no site addresses, no completion dates, no prices, no materials
 *    lists, no testimonials and no outcome claims anywhere in this file,
 *    because none of that information was provided with the photographs.
 * 3. `status` gates publication. A `draft` entry stays in the repository but
 *    is never generated, linked, sitemapped or indexed.
 * 4. `beforeAfter` is a pair on purpose — a comparison is only ever rendered
 *    when both frames of the same job exist.
 *
 * Adding a project: append an entry here, add the matching English copy to
 * `projectContent` below, add the Malay and Chinese copy under
 * `translations/`, then list the slug in `i18n/coverage.ts` (`ALL_PROJECTS`
 * and the per-language lists). `i18n/verify.ts` fails the build if those lists
 * drift, so a half-added project cannot ship.
 */
export const projects: Project[] = [
  {
    slug: "marble-look-floor-tiling",
    category: "tiling",
    status: "published",
    image: {
      src: "/images/projects/marble-look-floor-tiling-kl-selangor.webp",
      width: 1600,
      height: 900,
    },
    ogImage: {
      src: "/images/projects/og/marble-look-floor-tiling-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "floor-tile-removal-hacking",
    category: "tiling",
    status: "published",
    image: {
      src: "/images/projects/floor-tile-removal-hacking-kl-selangor.webp",
      width: 780,
      height: 1040,
    },
    ogImage: {
      src: "/images/projects/og/floor-tile-removal-hacking-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "plaster-ceiling-cove-lighting",
    category: "ceiling",
    status: "published",
    image: {
      src: "/images/projects/plaster-ceiling-cove-lighting-kl-selangor.webp",
      width: 1125,
      height: 1109,
    },
    ogImage: {
      src: "/images/projects/og/plaster-ceiling-cove-lighting-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "plaster-ceiling-design-downlights",
    category: "ceiling",
    status: "published",
    image: {
      src: "/images/projects/plaster-ceiling-design-downlights-kl-selangor.webp",
      width: 1080,
      height: 810,
    },
    ogImage: {
      src: "/images/projects/og/plaster-ceiling-design-downlights-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "plaster-ceiling-pendant-lighting",
    category: "ceiling",
    status: "published",
    image: {
      src: "/images/projects/plaster-ceiling-pendant-lighting-kl-selangor.webp",
      width: 750,
      height: 989,
    },
    ogImage: {
      src: "/images/projects/og/plaster-ceiling-pendant-lighting-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "timber-look-ceiling-beams",
    category: "ceiling",
    status: "published",
    image: {
      src: "/images/projects/timber-look-ceiling-beams-condo-kl-selangor.webp",
      width: 963,
      height: 1280,
    },
    ogImage: {
      src: "/images/projects/og/timber-look-ceiling-beams-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "suspended-ceiling-grid",
    category: "ceiling",
    status: "published",
    image: {
      src: "/images/projects/suspended-ceiling-grid-installation-kl-selangor.webp",
      width: 1600,
      height: 900,
    },
    ogImage: {
      src: "/images/projects/og/suspended-ceiling-grid-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "ceiling-fan-and-light-installation",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/ceiling-fan-and-light-installation-kl-selangor.webp",
      width: 720,
      height: 1280,
    },
    ogImage: {
      src: "/images/projects/og/ceiling-fan-and-light-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "chandelier-and-ceiling-fan-installation",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/chandelier-and-ceiling-fan-installation-kl-selangor.webp",
      width: 470,
      height: 620,
    },
    ogImage: {
      src: "/images/projects/og/chandelier-and-ceiling-fan-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "high-ceiling-light-installation",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/high-ceiling-light-installation-kl-selangor.webp",
      width: 607,
      height: 1080,
    },
    ogImage: {
      src: "/images/projects/og/high-ceiling-light-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "electrical-distribution-board-wiring",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/electrical-distribution-board-wiring-kl-selangor.webp",
      width: 756,
      height: 1008,
    },
    ogImage: {
      src: "/images/projects/og/electrical-distribution-board-wiring-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "electrical-db-panel-installation",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/electrical-db-panel-installation-kl-selangor.webp",
      width: 607,
      height: 1080,
    },
    ogImage: {
      src: "/images/projects/og/electrical-db-panel-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "electrical-cable-wiring-installation",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/electrical-cable-wiring-installation-kl-selangor.webp",
      width: 810,
      height: 1080,
    },
    ogImage: {
      src: "/images/projects/og/electrical-cable-wiring-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "wall-switch-installation",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/wall-switch-installation-kl-selangor.webp",
      width: 581,
      height: 1032,
    },
    ogImage: {
      src: "/images/projects/og/wall-switch-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "outdoor-switch-socket-wiring",
    category: "electrical",
    status: "published",
    image: {
      src: "/images/projects/outdoor-switch-socket-wiring-kl-selangor.webp",
      width: 607,
      height: 1080,
    },
    ogImage: {
      src: "/images/projects/og/outdoor-switch-socket-wiring-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "toilet-and-basin-installation",
    category: "plumbing",
    status: "published",
    image: {
      src: "/images/projects/toilet-and-basin-installation-kl-selangor.webp",
      width: 810,
      height: 1080,
    },
    ogImage: {
      src: "/images/projects/og/toilet-and-basin-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "structural-metal-welding-fabrication",
    category: "welding",
    status: "published",
    image: {
      src: "/images/projects/structural-metal-welding-fabrication-kl-selangor.webp",
      width: 788,
      height: 1400,
    },
    ogImage: {
      src: "/images/projects/og/structural-metal-welding-fabrication-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "pipe-and-valve-welding-works",
    category: "welding",
    status: "published",
    image: {
      src: "/images/projects/pipe-and-valve-welding-works-kl-selangor.webp",
      width: 788,
      height: 1400,
    },
    ogImage: {
      src: "/images/projects/og/pipe-and-valve-welding-works-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "on-site-metal-frame-welding",
    category: "welding",
    status: "published",
    image: {
      src: "/images/projects/on-site-metal-frame-welding-kl-selangor.webp",
      width: 900,
      height: 1600,
    },
    ogImage: {
      src: "/images/projects/og/on-site-metal-frame-welding-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "metal-awning-frame-installation",
    category: "welding",
    status: "published",
    image: {
      src: "/images/projects/metal-awning-frame-installation-kl-selangor.webp",
      width: 1284,
      height: 964,
    },
    ogImage: {
      src: "/images/projects/og/metal-awning-frame-installation-og.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    slug: "office-renovation-ceiling-and-tiling",
    category: "renovation",
    relatedCategories: ["ceiling", "tiling"],
    status: "published",
    image: {
      src: "/images/projects/office-renovation-ceiling-and-tiling-kl-selangor.webp",
      width: 960,
      height: 1280,
    },
    ogImage: {
      src: "/images/projects/og/office-renovation-ceiling-and-tiling-og.jpg",
      width: 1200,
      height: 630,
    },
  },
];

/** English copy — the canonical source language. */
export const projectContent: Record<string, ProjectContent> = {
  "marble-look-floor-tiling": {
    title: "Marble-look floor tiling",
    shortDescription:
      "Large-format marble-effect floor tiles laid and levelled across a room, with the spirit level and trowel still on the finished surface.",
    alt:
      "Large marble-look floor tiles laid and levelled by Renovix Home Services in Kuala Lumpur.",
    scopeOfWork: [
      "Setting out and laying large-format marble-effect floor tiles",
      "Levelling the tiled surface as work proceeds",
      "Checking the finished floor with a spirit level"
    ],
  },
  "floor-tile-removal-hacking": {
    title: "Floor tile removal before retiling",
    shortDescription:
      "Old floor tiles being hacked out of a corridor and entrance area to prepare the screed for a new tiled finish.",
    alt:
      "Worker removing old floor tiles from a corridor during tiling preparation by Renovix Home Services.",
    scopeOfWork: [
      "Removal of existing floor tiles",
      "Hacking and clearing of the old adhesive bed",
      "Preparing the base for new tiling"
    ],
  },
  "plaster-ceiling-cove-lighting": {
    title: "Plaster ceiling with cove lighting",
    shortDescription:
      "A recessed plaster ceiling finished with warm cove lighting, downlights and a ceiling fan in a living area.",
    alt:
      "Plaster ceiling with warm cove lighting, downlights and a ceiling fan installed by Renovix Home Services in Selangor.",
    scopeOfWork: [
      "Framing and boarding of a recessed plaster ceiling",
      "Building in a cove recess for concealed lighting",
      "Fitting downlights and a ceiling fan",
      "Finishing the ceiling with warm cove lighting"
    ],
  },
  "plaster-ceiling-design-downlights": {
    title: "Plaster ceiling design with downlights",
    shortDescription:
      "A panelled plaster ceiling with concealed strip lighting, spotlights and a centre ceiling fan.",
    alt:
      "Panelled plaster ceiling with concealed strip lighting and downlights completed by Renovix Home Services.",
    scopeOfWork: [
      "Constructing a panelled plaster ceiling",
      "Providing concealed strip-lighting recesses",
      "Installing spotlights and a centre ceiling fan"
    ],
  },
  "plaster-ceiling-pendant-lighting": {
    title: "Plaster ceiling and pendant lighting",
    shortDescription:
      "A stepped plaster ceiling with recessed downlights, a ceiling fan and a pendant light fitted in an open living and dining area.",
    alt:
      "Stepped plaster ceiling with downlights and pendant lighting installed by Renovix Home Services in Kuala Lumpur.",
    scopeOfWork: [
      "Constructing a stepped plaster ceiling",
      "Recessing downlights into the ceiling",
      "Mounting a ceiling fan and a pendant light"
    ],
  },
  "timber-look-ceiling-beams": {
    title: "Timber-look ceiling beams",
    shortDescription:
      "A plaster ceiling with timber-look beam detailing, cove lighting and ceiling fans in a condominium living room.",
    alt:
      "Condominium ceiling with timber-look beams, cove lighting and ceiling fans completed by Renovix Home Services.",
    scopeOfWork: [
      "Constructing the plaster ceiling",
      "Adding timber-look beam detailing",
      "Fitting cove lighting and ceiling fans"
    ],
    details: [{ key: "propertyType", value: "Condominium" }],
  },
  "suspended-ceiling-grid": {
    title: "Suspended ceiling grid installation",
    shortDescription:
      "A metal suspension grid installed across a commercial unit, ready to receive the ceiling boards.",
    alt:
      "Metal suspended ceiling grid installed across a commercial unit by Renovix Home Services in Klang Valley.",
    scopeOfWork: [
      "Setting out and levelling the suspension grid",
      "Installing the metal grid across the ceiling area",
      "Preparing the grid to receive the ceiling boards"
    ],
    details: [{ key: "propertyType", value: "Commercial unit" }],
  },
  "ceiling-fan-and-light-installation": {
    title: "Ceiling fan and light installation",
    shortDescription:
      "A ceiling fan and light fittings wired and mounted into a recessed plaster ceiling with cove lighting.",
    alt:
      "Ceiling fan and light fittings installed in a plaster ceiling by Renovix Home Services in Selangor.",
    scopeOfWork: [
      "Wiring and mounting of the ceiling fan",
      "Installation and testing of light fittings on the plaster ceiling"
    ],
  },
  "chandelier-and-ceiling-fan-installation": {
    title: "Chandelier and ceiling fan installation",
    shortDescription:
      "A decorative chandelier, ceiling fan and downlights installed and tested in a living area with cove lighting.",
    alt:
      "Chandelier, ceiling fan and downlights installed in a living area by Renovix Home Services in Kuala Lumpur.",
    scopeOfWork: [
      "Installing a decorative chandelier",
      "Mounting the ceiling fan",
      "Installing and testing downlights"
    ],
  },
  "high-ceiling-light-installation": {
    title: "High-level lighting installation",
    shortDescription:
      "Lighting work carried out from a scissor lift at high ceiling level inside a commercial building.",
    alt:
      "Electrician installing high-level lighting from a scissor lift for Renovix Home Services in Klang Valley.",
    scopeOfWork: [
      "Access setup with a scissor lift for high-level work",
      "Installation of light fittings at high ceiling level",
      "Testing the lighting after installation"
    ],
    details: [{ key: "propertyType", value: "Commercial building" }],
  },
  "electrical-distribution-board-wiring": {
    title: "Distribution board wiring",
    shortDescription:
      "A wall-mounted distribution board wired up with colour-coded circuits, breakers and terminal rails.",
    alt:
      "Wall-mounted electrical distribution board wired with colour-coded circuits and breakers by Renovix Home Services.",
    scopeOfWork: [
      "Mounting the distribution board on the wall",
      "Wiring colour-coded circuits into the board",
      "Terminating breakers on the terminal rails"
    ],
  },
  "electrical-db-panel-installation": {
    title: "Electrical panel installation",
    shortDescription:
      "An electrician terminating incoming cables at a control panel during an electrical installation.",
    alt:
      "Electrician terminating cables at an electrical control panel for Renovix Home Services in Kuala Lumpur.",
    scopeOfWork: [
      "Terminating incoming cables at the control panel",
      "Connecting the panel as part of the electrical installation"
    ],
  },
  "electrical-cable-wiring-installation": {
    title: "Cable wiring installation",
    shortDescription:
      "Cable runs being pulled and dressed into flexible conduit at ceiling level during an electrical fit-out.",
    alt:
      "Electrician pulling cables into conduit at ceiling level during an electrical installation by Renovix Home Services.",
    scopeOfWork: [
      "Pulling cable runs at ceiling level",
      "Dressing the cables into flexible conduit"
    ],
  },
  "wall-switch-installation": {
    title: "Wall switch installation",
    shortDescription:
      "A wall switch being wired and fixed into its back box during interior electrical works.",
    alt:
      "Electrician wiring a wall switch into its back box for Renovix Home Services in Selangor.",
    scopeOfWork: [
      "Wiring the wall switch",
      "Fixing the switch into its back box"
    ],
  },
  "outdoor-switch-socket-wiring": {
    title: "Outdoor switch and socket wiring",
    shortDescription:
      "An external switch and socket point being wired and fixed to a wall on site.",
    alt:
      "Electrician wiring an outdoor switch and socket point on site for Renovix Home Services in Klang Valley.",
    scopeOfWork: [
      "Wiring the outdoor switch and socket point",
      "Fixing the external point to the wall"
    ],
  },
  "toilet-and-basin-installation": {
    title: "Toilet and basin installation",
    shortDescription:
      "A wall-hung basin and close-coupled toilet installed and connected in a finished tiled bathroom.",
    alt:
      "Toilet and wall-hung basin installed in a tiled bathroom by Renovix Home Services in Kuala Lumpur.",
    scopeOfWork: [
      "Installing the wall-hung basin",
      "Installing the close-coupled toilet",
      "Connecting the water and waste services"
    ],
  },
  "structural-metal-welding-fabrication": {
    title: "Structural metal fabrication",
    shortDescription:
      "A long steel section being welded and fabricated in a workshop, with the weld arc live at the joint.",
    alt:
      "Welder fabricating a long steel section in a workshop for Renovix Home Services in Selangor.",
    scopeOfWork: [
      "Cutting and preparing the steel section",
      "Welding the joints of the steel section",
      "Fabrication of the steel section in the workshop"
    ],
  },
  "pipe-and-valve-welding-works": {
    title: "Pipe and valve welding works",
    shortDescription:
      "Welding work on pipework and flanged valves in a fabrication yard, with the finished assemblies laid out ready for fitting.",
    alt:
      "Welder working on pipework and flanged valves in a fabrication yard for Renovix Home Services.",
    scopeOfWork: [
      "Welding of pipework and flanged valves",
      "Preparing the finished assemblies for fitting"
    ],
  },
  "on-site-metal-frame-welding": {
    title: "On-site metal frame welding",
    shortDescription:
      "A metal frame being welded in position on a concrete slab during on-site metal works.",
    alt:
      "Welder joining a metal frame on a concrete slab during on-site metal works by Renovix Home Services.",
    scopeOfWork: [
      "Welding the metal frame in position",
      "Setting the frame on the concrete slab"
    ],
  },
  "metal-awning-frame-installation": {
    title: "Metal awning frame installation",
    shortDescription:
      "A steel support frame fixed across a roof area, forming the structure for an awning covering.",
    alt:
      "Steel awning support frame installed across a roof area by Renovix Home Services in Selangor.",
    scopeOfWork: [
      "Fixing the steel support frame across the roof area",
      "Forming the support structure for the awning covering"
    ],
  },
  "office-renovation-ceiling-and-tiling": {
    title: "Office renovation in progress",
    shortDescription:
      "A commercial interior mid-renovation, with the suspended ceiling frame overhead and floor tiles being set out with levelling clips.",
    alt:
      "Office interior under renovation with ceiling framing and floor tiling in progress by Renovix Home Services.",
    scopeOfWork: [
      "Suspended ceiling framing for the office interior",
      "Setting out floor tiles with levelling clips",
      "Tiling the floor as part of the office renovation"
    ],
    details: [{ key: "propertyType", value: "Office" }],
  },
};
