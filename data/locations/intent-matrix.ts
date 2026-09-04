/**
 * Search Intent Matrix for Renovix Home Services.
 *
 * Implements the formula:
 *   Location + Service + Sub-Service + Problem + Search Intent Modifier
 *
 * Strictly enforces honesty rules:
 *   - "Emergency" modifier is ONLY applied to safety-critical electrical faults
 *     and active plumbing/waterproofing pipe leaks.
 *   - "Best" queries use objective, reliable phrasing ("reliable contractor", "trusted local service").
 *   - "Affordable" queries use transparent starting rates from Phase 14 pricing data.
 *
 * PRICING RULE (Phase 18):
 *   This file NEVER stores a price or unit literal. `pricingId` is the only
 *   pricing link; effective starting price, unit and sub-service are derived
 *   from data/pricing/pricing.ts through `resolveIntentPricing()`.
 */

import { formatPricingAmount, getPricingById } from "@/data/pricing";
import type { PricingEntry } from "@/data/pricing/types";

import type { LocationServiceMatrixEntry } from "./types";

/**
 * Effective, derived pricing for an intent entry.
 *
 * SINGLE SOURCE OF TRUTH: the matrix stores only `pricingId`. Price, unit and
 * the catalogue sub-service are always resolved from data/pricing/pricing.ts,
 * so a catalogue change can never leave a stale number behind.
 */
export type ResolvedIntentPricing = {
  pricingId: string;
  entry: PricingEntry;
  /** "Starting from" semantics are preserved from the catalogue row. */
  startingPrice: number;
  unit: PricingEntry["unit"];
  currency: PricingEntry["currency"];
  pricingType: PricingEntry["pricingType"];
  subServiceSlug?: string;
  subService?: string;
  formattedStartingPrice: string;
  lastReviewed: string;
  disclaimer: string;
};

/** Resolves the effective catalogue pricing behind an intent entry. */
export function resolveIntentPricing(
  intent: Pick<LocationServiceMatrixEntry, "pricingId">,
): ResolvedIntentPricing | undefined {
  if (!intent.pricingId) return undefined;

  const entry = getPricingById(intent.pricingId);
  if (!entry) return undefined;

  return {
    pricingId: entry.id,
    entry,
    startingPrice: entry.startingPrice,
    unit: entry.unit,
    currency: entry.currency,
    pricingType: entry.pricingType,
    subServiceSlug: entry.subServiceSlug,
    subService: entry.subService,
    formattedStartingPrice: `RM${formatPricingAmount(entry.startingPrice)}`,
    lastReviewed: entry.lastReviewed,
    disclaimer: entry.disclaimer,
  };
}

export const locationServiceMatrix: LocationServiceMatrixEntry[] = [
  // ==========================================
  // SHAH ALAM INTENTS
  // ==========================================
  {
    id: "shah-alam-plumbing-leak",
    locationSlug: "shah-alam",
    regionId: "selangor",
    locationName: "Shah Alam",
    serviceSlug: "plumbing",
    serviceName: "Plumbing",
    subServiceSlug: "pipe-leak-repair",
    subServiceName: "Visible Pipe Leak Repair",
    problemSlug: "leaking-pipe",
    problemName: "Leaking Pipe",
    pricingId: "plumbing-pipe-leak-visible",
    intentModifiers: ["repair", "near_me", "emergency_triage", "affordable_cost"],
    searchQueryExamples: [
      "plumber in shah alam near me",
      "shah alam pipe leak repair",
      "emergency plumber shah alam setia alam",
      "shah alam plumbing repair cost",
    ],
    localContextNote: "Rapid response for landed terrace and semi-D plumbing leaks across Section 1–36, Setia Alam, and Kota Kemuning.",
    urgency: "urgent_safety",
    isEligibleForEmergency: true,
    published: true,
  },
  {
    id: "shah-alam-roof-waterproofing",
    locationSlug: "shah-alam",
    regionId: "selangor",
    locationName: "Shah Alam",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "flat-roof-waterproofing",
    subServiceName: "Flat Roof Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage",
    pricingId: "waterproofing-flat-roof",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "roof leak repair shah alam",
      "waterproofing specialist shah alam",
      "shah alam landed house roof waterproofing",
    ],
    localContextNote: "Membrane waterproofing for flat roof slabs, porch roofs and roof terraces on Shah Alam landed homes; pitched tile-roof leaks are inspected and quoted separately.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },

  // ==========================================
  // PETALING JAYA INTENTS
  // ==========================================
  {
    id: "petaling-jaya-flooring-spc",
    locationSlug: "petaling-jaya",
    regionId: "selangor",
    locationName: "Petaling Jaya",
    serviceSlug: "flooring",
    serviceName: "Flooring",
    subServiceSlug: "spc-flooring",
    subServiceName: "SPC Flooring Installation",
    problemSlug: "uneven-tiles",
    problemName: "Uneven or Damaged Floors",
    pricingId: "flooring-spc",
    intentModifiers: ["installation", "replacement", "affordable_cost", "residential"],
    searchQueryExamples: [
      "spc flooring installer petaling jaya",
      "petaling jaya floor replacement cost",
      "pj condo spc flooring contractor",
    ],
    localContextNote: "Overlay installation directly on existing tiles for PJ Section bungalows, SS terraces, and Damansara condos.",
    urgency: "scheduled_project",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "petaling-jaya-electrical-rewire",
    locationSlug: "petaling-jaya",
    regionId: "selangor",
    locationName: "Petaling Jaya",
    serviceSlug: "electrical",
    serviceName: "Electrical",
    subServiceSlug: "full-house-wiring",
    subServiceName: "Full House Wiring",
    problemSlug: "old-house-wiring",
    problemName: "Old House Wiring & Power Tripping",
    pricingId: "electrical-full-wiring",
    intentModifiers: ["repair", "replacement", "best_reliable", "emergency_triage"],
    searchQueryExamples: [
      "electrician petaling jaya near me",
      "pj house rewiring specialist",
      "power tripping repair petaling jaya ss2",
    ],
    localContextNote: "Full house rewiring, including distribution board renewal, for 1950s–1970s PJ Sections and SS homes brought up to current safety standards.",
    urgency: "urgent_safety",
    isEligibleForEmergency: true,
    published: true,
  },

  // ==========================================
  // CHERAS INTENTS
  // ==========================================
  {
    id: "cheras-waterproofing-bathroom",
    locationSlug: "cheras",
    regionId: "kuala-lumpur",
    locationName: "Cheras",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "bathroom-waterproofing",
    subServiceName: "Bathroom Waterproofing with Tile Hack & Relay",
    problemSlug: "bathroom-leakage",
    problemName: "Bathroom Leakage & Floor Seepage",
    pricingId: "waterproofing-bathroom-hack",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist", "near_me"],
    searchQueryExamples: [
      "cheras bathroom waterproofing specialist",
      "cheras toilet floor leakage repair",
      "waterproofing contractor cheras kl near me",
    ],
    localContextNote: "Treating floor slab seepage and failed membranes in multi-storey Cheras terraces and condominiums.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "cheras-tiling-repair",
    locationSlug: "cheras",
    regionId: "kuala-lumpur",
    locationName: "Cheras",
    serviceSlug: "tiling",
    serviceName: "Tiling",
    subServiceSlug: "tile-repair",
    subServiceName: "Tile Repair & Replacement",
    problemSlug: "cracked-tile-repair",
    problemName: "Cracked & Hollow Tiles",
    pricingId: "tiling-repair",
    intentModifiers: ["repair", "replacement", "affordable_cost"],
    searchQueryExamples: [
      "tiling contractor cheras",
      "pop up tile repair cheras taman connaught",
      "cheras floor tile replacement price",
    ],
    localContextNote: "Targeted replacement of popping, cracked or hollow tiles caused by thermal movement in Cheras homes, priced per repair job.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },

  // ==========================================
  // MONT KIARA INTENTS
  // ==========================================
  {
    id: "mont-kiara-condo-renovation",
    locationSlug: "mont-kiara",
    regionId: "kuala-lumpur",
    locationName: "Mont Kiara",
    serviceSlug: "general-renovation",
    serviceName: "General Renovation",
    subServiceSlug: "mid-range-renovation",
    subServiceName: "Mid-Range Renovation",
    problemSlug: "wall-surface-damage",
    problemName: "Interior Refurbishment",
    pricingId: "renovation-mid",
    intentModifiers: ["best_reliable", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "mont kiara condo renovation contractor",
      "luxury condo interior refurbishment mont kiara",
      "mont kiara strata renovation specialist",
    ],
    localContextNote: "Mid-range condominium refurbishment priced per square foot, with strict adherence to Building Management (MC/JMB) working hours, lift padding and site cleanliness.",
    urgency: "scheduled_project",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "mont-kiara-electrical-safety",
    locationSlug: "mont-kiara",
    regionId: "kuala-lumpur",
    locationName: "Mont Kiara",
    serviceSlug: "electrical",
    serviceName: "Electrical",
    subServiceSlug: "troubleshooting",
    subServiceName: "Electrical Troubleshooting & Power Trip Repair",
    problemSlug: "power-tripping",
    problemName: "Power Tripping & Tripped ELCB",
    pricingId: "electrical-troubleshoot",
    intentModifiers: ["emergency_triage", "near_me", "repair", "best_reliable"],
    searchQueryExamples: [
      "electrician mont kiara near me",
      "mont kiara emergency power trip repair",
      "condo electrical repair mont kiara",
    ],
    localContextNote: "Urgent diagnostic response for condominium power failure, tripped ELCB/RCCB, and faulty major appliances.",
    urgency: "urgent_safety",
    isEligibleForEmergency: true,
    published: true,
  },

  // ==========================================
  // SUBANG JAYA & USJ INTENTS
  // ==========================================
  {
    id: "subang-jaya-plumbing-repiping",
    locationSlug: "subang-jaya",
    regionId: "selangor",
    locationName: "Subang Jaya",
    serviceSlug: "plumbing",
    serviceName: "Plumbing",
    subServiceSlug: "pipe-leak-repair",
    subServiceName: "Visible Pipe Leak Repair",
    problemSlug: "water-leakage",
    problemName: "Aging Water Pipe Leaks",
    pricingId: "plumbing-pipe-leak-visible",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "subang jaya aging pipe leak repair",
      "subang jaya ss14 plumber near me",
      "corroded water pipe repair subang jaya",
    ],
    localContextNote: "Section-by-section repair and replacement of corroded 1970s–80s galvanized supply pipe runs in Subang terraces. Whole-house re-piping is quoted after inspection; the catalogue rate covers accessible pipe repair.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "usj-kitchen-extension-renovation",
    locationSlug: "usj",
    regionId: "selangor",
    locationName: "USJ (Subang Jaya)",
    serviceSlug: "general-renovation",
    serviceName: "General Renovation",
    subServiceSlug: "house-extension",
    subServiceName: "House Extension",
    problemSlug: "cracked-walls",
    problemName: "House Extensions & Structural Additions",
    pricingId: "renovation-extension",
    intentModifiers: ["best_reliable", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "usj renovation contractor",
      "usj 11 house extension contractor",
      "usj terrace house renovation price",
    ],
    localContextNote: "Rear and kitchen extension builds with structural assessment and masonry work across USJ 1–27, priced per built-up square foot.",
    urgency: "scheduled_project",
    isEligibleForEmergency: false,
    published: true,
  },

  // ==========================================
  // BANGSAR & TTDI INTENTS
  // ==========================================
  {
    id: "bangsar-house-modernisation",
    locationSlug: "bangsar",
    regionId: "kuala-lumpur",
    locationName: "Bangsar",
    serviceSlug: "general-renovation",
    serviceName: "General Renovation",
    subServiceSlug: "mid-range-renovation",
    subServiceName: "Mid-Range Renovation",
    problemSlug: "old-house-wiring",
    problemName: "Full House Modernisation",
    pricingId: "renovation-mid",
    intentModifiers: ["best_reliable", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "bangsar renovation contractor",
      "bangsar baru terrace house refurb",
      "lucky garden bangsar house renovation",
    ],
    localContextNote: "Mid-range whole-house modernisation priced per square foot for mature 1970s Bangsar Baru and Lucky Garden terraces and hillside bungalows.",
    urgency: "scheduled_project",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "ttdi-waterproofing-roof-terrace",
    locationSlug: "taman-tun-dr-ismail",
    regionId: "kuala-lumpur",
    locationName: "Taman Tun Dr Ismail",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "flat-roof-waterproofing",
    subServiceName: "Flat Roof Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage",
    pricingId: "waterproofing-flat-roof",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "ttdi roof leak repair contractor",
      "waterproofing specialist ttdi",
      "taman tun dr ismail roof repair price",
    ],
    localContextNote: "Flat roof and roof-terrace membrane waterproofing on TTDI terrace houses, including upstand detailing and ponding correction.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },

  // ==========================================
  // PUCHONG & KAJANG INTENTS
  // ==========================================
  {
    id: "puchong-bathroom-waterproofing",
    locationSlug: "puchong",
    regionId: "selangor",
    locationName: "Puchong",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "bathroom-waterproofing",
    subServiceName: "Bathroom Waterproofing with Tile Hack & Relay",
    problemSlug: "bathroom-leakage",
    problemName: "Bathroom Floor Leakage",
    pricingId: "waterproofing-bathroom-hack",
    intentModifiers: ["repair", "near_me", "affordable_cost"],
    searchQueryExamples: [
      "puchong bathroom leak repair",
      "waterproofing contractor bandar puteri puchong",
      "plumber puchong leaking ceiling",
    ],
    localContextNote: "Bathroom waterproofing with tile hack, membrane application, flood test and relay for Puchong high-rises and terrace homes.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "kajang-landed-roof-leak-repair",
    locationSlug: "kajang",
    regionId: "selangor",
    locationName: "Kajang",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "flat-roof-waterproofing",
    subServiceName: "Flat Roof Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage & Ceiling Stains",
    pricingId: "waterproofing-flat-roof",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist", "near_me"],
    searchQueryExamples: [
      "kajang roof leak repair specialist",
      "waterproofing contractor saujana impian kajang",
      "kajang roof repair cost",
    ],
    localContextNote: "Flat roof slab membrane waterproofing across Kajang, Prima Saujana and Country Heights, applied after ponding and crack assessment.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },

  // ==========================================
  // KLANG & CYBERJAYA INTENTS
  // ==========================================
  {
    id: "klang-metal-welding-grille",
    locationSlug: "klang",
    regionId: "selangor",
    locationName: "Klang",
    serviceSlug: "welding-metal-works",
    serviceName: "Welding & Metal Works",
    subServiceSlug: "window-grille",
    subServiceName: "Window Grille Fabrication",
    problemSlug: "minor-home-repairs",
    problemName: "Window Grille Fabrication & Fitting",
    pricingId: "welding-grille-window",
    intentModifiers: ["installation", "affordable_cost", "contractor_specialist"],
    searchQueryExamples: [
      "klang welding contractor",
      "window grille installation klang bukit tinggi",
      "window grille fabricator klang",
    ],
    localContextNote: "Custom window grille fabrication in anti-corrosion treated mild steel, priced per square foot, for coastal moisture conditions in Klang.",
    urgency: "scheduled_project",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "cyberjaya-condo-painting-spc",
    locationSlug: "cyberjaya",
    regionId: "selangor",
    locationName: "Cyberjaya",
    serviceSlug: "painting",
    serviceName: "Painting",
    subServiceSlug: "interior-painting",
    subServiceName: "Interior Wall Painting",
    problemSlug: "peeling-paint",
    problemName: "Peeling & Discoloured Paint",
    pricingId: "painting-interior",
    intentModifiers: ["installation", "affordable_cost", "residential"],
    searchQueryExamples: [
      "cyberjaya condo painter near me",
      "interior painting price cyberjaya",
      "condo repaint package cyberjaya tech hub",
    ],
    localContextNote: "Fast-turnaround interior painting for expatriate and tech professional apartments in Cyberjaya.",
    urgency: "scheduled_project",
    isEligibleForEmergency: false,
    published: true,
  },

  // ==========================================
  // PHASE 23 LOCATION INTENTS
  // ==========================================
  {
    id: "kl-city-centre-condo-bathroom-waterproofing",
    locationSlug: "kl-city-centre",
    regionId: "kuala-lumpur",
    locationName: "KL City Centre",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "bathroom-waterproofing",
    subServiceName: "Bathroom Waterproofing with Tile Hack & Relay",
    problemSlug: "bathroom-leakage",
    problemName: "Bathroom Leakage",
    pricingId: "waterproofing-bathroom-hack",
    intentModifiers: ["repair", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "condo bathroom waterproofing klcc",
      "bathroom leaking to unit below bukit bintang",
      "waterproofing contractor kl city centre",
    ],
    localContextNote: "Full hack-and-relay bathroom waterproofing in KLCC and Bukit Bintang towers, sequenced inside management-approved hacking hours and lift booking windows.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "kl-city-centre-socket-addition",
    locationSlug: "kl-city-centre",
    regionId: "kuala-lumpur",
    locationName: "KL City Centre",
    serviceSlug: "electrical",
    serviceName: "Electrical",
    subServiceSlug: "socket-installation",
    subServiceName: "Power Socket / Plug Point Addition",
    problemSlug: "insufficient-power-points",
    problemName: "Insufficient Power Points",
    pricingId: "electrical-socket-add",
    intentModifiers: ["installation", "near_me", "affordable_cost"],
    searchQueryExamples: [
      "add power socket klcc apartment",
      "electrician bukit bintang near me",
      "extra plug point serviced apartment kl",
    ],
    localContextNote: "Adding sockets and dedicated appliance points in city-centre units originally wired for far lighter loads, working within building renovation rules.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "kampung-baru-old-house-rewiring",
    locationSlug: "kampung-baru",
    regionId: "kuala-lumpur",
    locationName: "Kampung Baru",
    serviceSlug: "electrical",
    serviceName: "Electrical",
    subServiceSlug: "full-house-wiring",
    subServiceName: "Full House Wiring",
    problemSlug: "old-house-wiring",
    problemName: "Old House Wiring",
    pricingId: "electrical-full-wiring",
    intentModifiers: ["repair", "replacement", "contractor_specialist"],
    searchQueryExamples: [
      "rewiring old house kampung baru",
      "electrician kampung baru near me",
      "old wiring safety check kampung baru",
    ],
    localContextNote: "Rewiring timber and older brick homes in Kampung Baru where circuits were extended piecemeal over decades; the installation is assessed as a whole before any scope is proposed.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "taman-desa-concealed-leak",
    locationSlug: "taman-desa",
    regionId: "kuala-lumpur",
    locationName: "Taman Desa",
    serviceSlug: "plumbing",
    serviceName: "Plumbing",
    subServiceSlug: "concealed-leak-repair",
    subServiceName: "Concealed / In-Wall Leak Repair",
    problemSlug: "leaking-pipe",
    problemName: "Leaking Pipe",
    pricingId: "plumbing-hidden-leak",
    intentModifiers: ["repair", "near_me", "emergency_triage"],
    searchQueryExamples: [
      "hidden pipe leak taman desa",
      "plumber taman desa near me",
      "apartment ceiling leak taman desa",
    ],
    localContextNote: "Tracing and repairing concealed pipe leaks in Taman Desa's 1980s walk-up blocks and terrace homes, where the damage shows in the unit below before the source is visible.",
    urgency: "urgent_safety",
    isEligibleForEmergency: true,
    published: true,
  },
  {
    id: "setia-alam-bathroom-waterproofing",
    locationSlug: "setia-alam",
    regionId: "selangor",
    locationName: "Setia Alam",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "bathroom-waterproofing",
    subServiceName: "Bathroom Waterproofing with Tile Hack & Relay",
    problemSlug: "bathroom-leakage",
    problemName: "Bathroom Leakage",
    pricingId: "waterproofing-bathroom-hack",
    intentModifiers: ["repair", "contractor_specialist", "affordable_cost"],
    searchQueryExamples: [
      "bathroom waterproofing setia alam",
      "setia alam bathroom leak repair",
      "waterproofing contractor setia alam price",
    ],
    localContextNote: "First-cycle bathroom waterproofing renewal across Setia Alam's landed precincts, where homes built in the township's first decade reach membrane end-of-life together.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "bandar-kinrara-concealed-leak",
    locationSlug: "bandar-kinrara",
    regionId: "selangor",
    locationName: "Bandar Kinrara",
    serviceSlug: "plumbing",
    serviceName: "Plumbing",
    subServiceSlug: "concealed-leak-repair",
    subServiceName: "Concealed / In-Wall Leak Repair",
    problemSlug: "leaking-pipe",
    problemName: "Leaking Pipe",
    pricingId: "plumbing-hidden-leak",
    intentModifiers: ["repair", "near_me", "emergency_triage"],
    searchQueryExamples: [
      "plumber bandar kinrara near me",
      "hidden pipe leak bandar kinrara",
      "bandar kinrara re-piping contractor",
    ],
    localContextNote: "Locating and repairing corroded concealed pipe runs in Bandar Kinrara's 1990s–2000s homes, where wall damp and rising water bills are the usual first symptoms.",
    urgency: "urgent_safety",
    isEligibleForEmergency: true,
    published: true,
  },
  {
    id: "batu-caves-flat-roof-waterproofing",
    locationSlug: "batu-caves",
    regionId: "selangor",
    locationName: "Batu Caves",
    serviceSlug: "waterproofing",
    serviceName: "Waterproofing",
    subServiceSlug: "flat-roof-waterproofing",
    subServiceName: "Flat Roof Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage",
    pricingId: "waterproofing-flat-roof",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "roof leak repair batu caves",
      "waterproofing contractor batu caves",
      "batu caves flat roof waterproofing",
    ],
    localContextNote: "Membrane waterproofing for flat roof slabs, porch roofs and rear extensions in Batu Caves, where hill-catchment runoff tests every roof detail; pitched tile-roof leaks are inspected and quoted separately.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
  {
    id: "bandar-mahkota-cheras-tile-repair",
    locationSlug: "bandar-mahkota-cheras",
    regionId: "selangor",
    locationName: "Bandar Mahkota Cheras",
    serviceSlug: "tiling",
    serviceName: "Tiling",
    subServiceSlug: "tile-repair",
    subServiceName: "Tile Repair & Replacement",
    problemSlug: "hollow-tile-problems",
    problemName: "Hollow Tile Problems",
    pricingId: "tiling-repair",
    intentModifiers: ["repair", "affordable_cost", "near_me"],
    searchQueryExamples: [
      "hollow tile repair bandar mahkota cheras",
      "tiler bandar mahkota cheras near me",
      "cracked floor tile replacement mahkota cheras",
    ],
    localContextNote: "Replacing hollow and cracked floor tiles in Bandar Mahkota Cheras homes, where slab movement and adhesive failure show up together across precincts of the same build year.",
    urgency: "standard_service",
    isEligibleForEmergency: false,
    published: true,
  },
];

/** Matrix query helper: returns all intent entries for a location. */
export function getMatrixEntriesForLocation(locationSlug: string): LocationServiceMatrixEntry[] {
  return locationServiceMatrix.filter((item) => item.locationSlug === locationSlug);
}

/** Matrix query helper: returns all intent entries for a service. */
export function getMatrixEntriesForService(serviceSlug: string): LocationServiceMatrixEntry[] {
  return locationServiceMatrix.filter((item) => item.serviceSlug === serviceSlug);
}

/** Matrix query helper: returns all emergency-eligible intent entries. */
export function getEmergencyMatrixEntries(): LocationServiceMatrixEntry[] {
  return locationServiceMatrix.filter((item) => item.isEligibleForEmergency);
}
