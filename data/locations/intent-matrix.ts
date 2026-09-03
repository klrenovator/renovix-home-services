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
 */

import type { LocationServiceMatrixEntry } from "./types";

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
    subServiceName: "Visible & Concealed Pipe Leak Repair",
    problemSlug: "leaking-pipe",
    problemName: "Leaking Pipe",
    pricingId: "plumbing-pipe-leak-visible",
    startingPrice: 150,
    unit: "per_job",
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
    subServiceSlug: "roof-leak-repair",
    subServiceName: "Roof Tile & Flashing Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage",
    pricingId: "waterproofing-flat-roof",
    startingPrice: 15,
    unit: "per_sqft",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "roof leak repair shah alam",
      "waterproofing specialist shah alam",
      "shah alam landed house roof waterproofing",
    ],
    localContextNote: "Comprehensive inspection of aging roof tiles, ridge mortar, and valley flashings exposed to heavy storms.",
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
    subServiceSlug: "spc-flooring-installation",
    subServiceName: "SPC Click Flooring Installation",
    problemSlug: "uneven-tiles",
    problemName: "Uneven or Damaged Floors",
    pricingId: "flooring-spc",
    startingPrice: 5.5,
    unit: "per_sqft",
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
    subServiceSlug: "db-box-upgrade",
    subServiceName: "Distribution Board Upgrade & House Rewiring",
    problemSlug: "old-house-wiring",
    problemName: "Old House Wiring & Power Tripping",
    pricingId: "electrical-db-box",
    startingPrice: 650,
    unit: "per_job",
    intentModifiers: ["repair", "replacement", "best_reliable", "emergency_triage"],
    searchQueryExamples: [
      "electrician petaling jaya near me",
      "pj house rewiring specialist",
      "power tripping repair petaling jaya ss2",
    ],
    localContextNote: "Modernising 1950s–1970s wiring in older PJ Sections and SS areas to meet current safety standards.",
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
    subServiceName: "Bathroom Waterproofing Membrane Repair",
    problemSlug: "bathroom-leakage",
    problemName: "Bathroom Leakage & Floor Seepage",
    pricingId: "waterproofing-bathroom-hack",
    startingPrice: 1800,
    unit: "per_bathroom",
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
    subServiceSlug: "cracked-tile-repair",
    subServiceName: "Hollow & Cracked Tile Replacement",
    problemSlug: "cracked-tile-repair",
    problemName: "Cracked & Hollow Tiles",
    pricingId: "tiling-floor-ceramic",
    startingPrice: 8,
    unit: "per_sqft",
    intentModifiers: ["repair", "replacement", "affordable_cost"],
    searchQueryExamples: [
      "tiling contractor cheras",
      "pop up tile repair cheras taman connaught",
      "cheras floor tile replacement price",
    ],
    localContextNote: "Matching and re-laying popping or hollow tiles caused by thermal movement in Cheras homes.",
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
    subServiceSlug: "condo-refurbishment",
    subServiceName: "Condominium Modernisation & Fit-Out",
    problemSlug: "wall-surface-damage",
    problemName: "Interior Refurbishment",
    pricingId: "renovation-bathroom-full",
    startingPrice: 8000,
    unit: "per_bathroom",
    intentModifiers: ["best_reliable", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "mont kiara condo renovation contractor",
      "luxury condo interior refurbishment mont kiara",
      "mont kiara strata renovation specialist",
    ],
    localContextNote: "Strict adherence to Building Management (MC/JMB) working hours, lift padding, and site cleanliness.",
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
    subServiceSlug: "power-tripping-diagnosis",
    subServiceName: "Power Tripping & Safety Inspection",
    problemSlug: "power-tripping",
    problemName: "Power Tripping & Tripped ELCB",
    pricingId: "electrical-troubleshoot",
    startingPrice: 80,
    unit: "per_job",
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
    subServiceSlug: "whole-house-repiping",
    subServiceName: "Galvanized Pipe Replacement & Re-piping",
    problemSlug: "water-leakage",
    problemName: "Aging Water Pipe Leaks",
    pricingId: "plumbing-water-heater-install",
    startingPrice: 120,
    unit: "per_unit",
    intentModifiers: ["replacement", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "subang jaya plumbing repiping contractor",
      "subang jaya ss14 plumber near me",
      "replace galvanized pipes subang jaya",
    ],
    localContextNote: "Replacing corroded 1970s–80s galvanized supply pipes with modern PPR and PVC lines in Subang terraces.",
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
    subServiceSlug: "kitchen-extension",
    subServiceName: "Landed Kitchen Extension & Renovation",
    problemSlug: "cracked-walls",
    problemName: "House Modernisation & Extensions",
    pricingId: "renovation-kitchen",
    startingPrice: 15000,
    unit: "per_job",
    intentModifiers: ["best_reliable", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "usj renovation contractor",
      "usj 11 kitchen extension contractor",
      "usj terrace house renovation price",
    ],
    localContextNote: "End-to-end wet and dry kitchen rebuilds, structural assessments, and masonry work across USJ 1–27.",
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
    subServiceSlug: "heritage-terrace-refurbishment",
    subServiceName: "Architectural Refurbishment & Rebuild",
    problemSlug: "old-house-wiring",
    problemName: "Full House Modernisation",
    pricingId: "renovation-bathroom-full",
    startingPrice: 8000,
    unit: "per_bathroom",
    intentModifiers: ["best_reliable", "contractor_specialist", "residential"],
    searchQueryExamples: [
      "bangsar renovation contractor",
      "bangsar baru terrace house refurb",
      "lucky garden bangsar house renovation",
    ],
    localContextNote: "Comprehensive modernisation for mature 1970s Bangsar Baru and Lucky Garden terraces and hillside bungalows.",
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
    subServiceSlug: "roof-leak-repair",
    subServiceName: "Roof Flashing & Gutter Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage",
    pricingId: "waterproofing-flat-roof",
    startingPrice: 15,
    unit: "per_sqft",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist"],
    searchQueryExamples: [
      "ttdi roof leak repair contractor",
      "waterproofing specialist ttdi",
      "taman tun dr ismail roof repair price",
    ],
    localContextNote: "Restoring mature clay tile roofs, metal flashings, and gutter transitions on TTDI terrace houses.",
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
    subServiceName: "Bathroom Floor Slab Leak Sealing",
    problemSlug: "bathroom-leakage",
    problemName: "Bathroom Floor Leakage",
    pricingId: "waterproofing-bathroom-hack",
    startingPrice: 1800,
    unit: "per_bathroom",
    intentModifiers: ["repair", "near_me", "affordable_cost"],
    searchQueryExamples: [
      "puchong bathroom leak repair",
      "waterproofing contractor bandar puteri puchong",
      "plumber puchong leaking ceiling",
    ],
    localContextNote: "Non-hacking polyurethane and membrane waterproofing for Puchong high-rises and terrace homes.",
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
    subServiceSlug: "roof-leak-repair",
    subServiceName: "Landed House Roof Waterproofing",
    problemSlug: "roof-leakage",
    problemName: "Roof Leakage & Ceiling Stains",
    pricingId: "waterproofing-flat-roof",
    startingPrice: 15,
    unit: "per_sqft",
    intentModifiers: ["repair", "best_reliable", "contractor_specialist", "near_me"],
    searchQueryExamples: [
      "kajang roof leak repair specialist",
      "waterproofing contractor saujana impian kajang",
      "kajang roof repair cost",
    ],
    localContextNote: "Condition-led roof repairs and membrane applications across Kajang, Prima Saujana, and Country Heights.",
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
    subServiceSlug: "security-grilles",
    subServiceName: "Wrought Iron & Mild Steel Security Grilles",
    problemSlug: "minor-home-repairs",
    problemName: "Window & Gate Security",
    pricingId: "welding-grille-window",
    startingPrice: 28,
    unit: "per_sqft",
    intentModifiers: ["installation", "affordable_cost", "contractor_specialist"],
    searchQueryExamples: [
      "klang welding contractor",
      "security grille installation klang bukit tinggi",
      "metal awning fabricator klang",
    ],
    localContextNote: "Custom welding and anti-corrosion treated mild steel fabrication for coastal moisture conditions in Klang.",
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
    subServiceName: "Condominium Interior Repainting",
    problemSlug: "peeling-paint",
    problemName: "Peeling & Discoloured Paint",
    pricingId: "painting-interior",
    startingPrice: 1.2,
    unit: "per_sqft",
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
