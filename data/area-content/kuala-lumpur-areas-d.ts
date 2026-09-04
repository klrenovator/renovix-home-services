import type { AreaDetail } from "./types";

/**
 * Fourth batch of Kuala Lumpur location guides (Phase 23 expansion).
 *
 * Each guide closes a genuine gap in the location architecture rather than
 * adding a place name for its own sake:
 *
 * - `kl-city-centre` — the KLCC / Bukit Bintang / Imbi high-rise core, the
 *   single largest strata renovation market in the city and the one with the
 *   strictest building rules; previously only reachable through the region hub.
 * - `taman-desa` — the Seputeh mid-rise and landed belt, whose 1980s walk-up
 *   apartments and terraces have a distinct, well-documented ageing profile.
 * - `kampung-baru` — the city's Malay heritage enclave, where timber houses
 *   and old brick homes need a different kind of repair work entirely; this is
 *   the kampung level of the hierarchy, and the work genuinely differs.
 *
 * Same honesty rules as the earlier batches: publicly known facts about the
 * neighbourhood only, no invented statistics, prices, offices or projects, and
 * no location-specific pricing (all rates come from `data/pricing/pricing.ts`).
 */
export const klAreasD: AreaDetail[] = [
  {
    region: "kuala-lumpur",
    slug: "kl-city-centre",
    name: "KL City Centre",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in KL City Centre (KLCC & Bukit Bintang)",
    metaDescription:
      "Renovation and repair services in KL City Centre — KLCC, Bukit Bintang, Imbi and Jalan Sultan Ismail condos and serviced apartments. Fit-outs, waterproofing, rewiring. Free quotation.",
    h1: "Home Renovation & Repair Services in KL City Centre (KLCC & Bukit Bintang)",
    summary:
      "The city's high-rise core — KLCC, Bukit Bintang and Imbi condominiums and serviced apartments, where every job runs on building management rules.",
    intro: [
      "KL City Centre covers the dense core around the Petronas Twin Towers, Bukit Bintang, Imbi and Jalan Sultan Ismail — the part of Kuala Lumpur where almost everyone lives above ground level. Housing here is overwhelmingly strata: condominium towers from the 1990s and 2000s, newer serviced-apartment blocks built above retail podiums, and a smaller stock of older apartments and converted shoplots along the side streets of Bukit Bintang and Pudu.",
      "That mix decides the work. City-centre owners and tenants ask for unit fit-outs, kitchen and bathroom upgrades, [flooring](/services/flooring) replacement, balcony and bathroom [waterproofing](/services/waterproofing), and additional [electrical](/services/electrical) points for modern appliances and home offices. Renovix works to each building's renovation rules — permit paperwork, deposit, permitted hours, lift bookings and debris routes — because in the city core those rules, not the scope, usually set the schedule.",
    ],
    servicesIntro: "Services KL City Centre households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "general-renovation",
        note: "Full condominium and serviced-apartment fit-outs planned around management-approved working hours.",
      },
      {
        serviceSlug: "waterproofing",
        note: "Bathroom, balcony and window-edge waterproofing renewed in towers now past their first membrane cycle.",
      },
      {
        serviceSlug: "flooring",
        note: "SPC, vinyl and laminate replacement in high-rise units where hacking and noise must be kept controlled.",
      },
      {
        serviceSlug: "electrical",
        note: "Extra socket outlets, lighting circuits and air-conditioner points in units wired for lighter loads.",
      },
      {
        serviceSlug: "ceiling-partition",
        note: "Plaster ceilings, cove lighting and partitions for study or home-office corners in open-plan units.",
      },
      {
        serviceSlug: "handyman",
        note: "Door, lock, fitting and small repair work between tenancies in short-let and rented units.",
      },
    ],
    propertyTypesIntro: "KL City Centre property types we regularly work with:",
    propertyTypes: [
      {
        label: "Condominiums (1990s–2000s)",
        note: "The first generation of city-centre towers, now in their waterproofing, pipework and wiring renewal years.",
      },
      {
        label: "Serviced apartments above retail podiums",
        note: "Compact newer units where fit-outs, flooring and defect rectification are the common requests.",
      },
      {
        label: "Older walk-up apartments around Pudu and Imbi",
        note: "Smaller blocks with original bathrooms, risers and wiring that are well past their service life.",
      },
      {
        label: "Converted shoplot residences and offices",
        note: "Upper floors of Bukit Bintang shophouses refitted for living, studio or office use.",
      },
      {
        label: "Rented and short-let units",
        note: "Frequently turned-over homes needing durable, quick refurbishment between occupants.",
      },
    ],
    problemsIntro: "Common problems we are called to in KL City Centre:",
    problems: [
      {
        title: "Bathroom seepage to the unit below",
        description:
          "Original membranes in 1990s and 2000s towers reach the end of their life together, and the first sign is usually a stain on a neighbour's ceiling.",
      },
      {
        title: "Balcony and window-edge water ingress",
        description:
          "Wind-driven rain on exposed high floors finds failed sealant at balcony thresholds and window frames.",
      },
      {
        title: "Too few power points for how units are actually used",
        description:
          "Units wired before home offices and multiple air conditioners now run on extension leads, and circuits trip under the load.",
      },
      {
        title: "Hollow and lifting floor finishes",
        description:
          "Heat movement and worn adhesive leave tiles hollow and floating floors lifting at joints and doorways.",
      },
      {
        title: "Mould in poorly ventilated inner rooms",
        description:
          "Sealed, air-conditioned units with little cross-ventilation build up humidity in wardrobes and corner walls.",
      },
    ],
    processTitle: "How we work in KL City Centre",
    processIntro: "Adapted to strata buildings with strict renovation rules:",
    processSteps: [
      {
        title: "Tell us about the unit",
        description:
          "Send the building name, unit type and the work in mind — photos of the rooms and problem areas help us prepare.",
      },
      {
        title: "Site assessment and building rules",
        description:
          "We inspect the unit and check what your management corporation requires: permit, deposit, hours, lift booking and debris route.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation covering scope, materials and schedule, with the building's requirements written into the plan.",
      },
      {
        title: "Work and handover",
        description:
          "Work runs within permitted hours, common areas are protected, the unit is cleaned and fittings are tested with you at handover.",
      },
    ],
    contextIntro: "Working in KL City Centre — what to expect",
    context: [
      "Almost every city-centre home is strata, so the building sets the pace. Renovation permits, refundable deposits, approved working hours, lift bookings and designated debris routes are part of the preparation, and we plan the schedule around them instead of discovering them mid-job.",
      "Access is the other constraint. Loading bays are shared, service lifts are booked by the hour, and material sizes have to fit the lift — long boards, full-length pipe runs and bulky sanitary ware are ordered and delivered accordingly.",
      "Noise-generating work such as hacking is usually restricted to specific weekday hours. Where a building's window is narrow, we sequence the noisy stages first and keep quieter finishing work for the remaining time so the overall schedule stays realistic.",
    ],
    faqs: [
      {
        question: "Do you handle the renovation permit for my KLCC or Bukit Bintang condo?",
        answer:
          "We prepare the contractor-side documents your management office asks for and work within the approved hours and conditions. The application itself is normally submitted by the owner, and we give you what you need to file it.",
      },
      {
        question: "Can you renovate a unit while I keep living in it?",
        answer:
          "In most cases yes, room by room. Hacking and wet works are the disruptive stages, so we schedule those together and tell you honestly which days the bathroom or kitchen will be out of use.",
      },
      {
        question: "My downstairs neighbour has a ceiling stain. Is it my bathroom?",
        answer:
          "It might be, but not always — a stain can come from the unit's own bathroom, a common riser or the floor above. We trace the source first and only then quote the repair, because rebuilding the wrong bathroom fixes nothing.",
      },
      {
        question: "Can you work in serviced apartments with hotel-style management?",
        answer:
          "Yes. Those buildings usually have tighter access and hours than residential condominiums, so we confirm the rules with management before quoting the schedule.",
      },
      {
        question: "How do I get a quote for a city-centre unit?",
        answer:
          "Send us the building, unit size and the work in mind, with photos if you can. We arrange a site visit and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "general-renovation",
      "waterproofing",
      "flooring",
      "electrical",
    ],
    relatedProblems: [
      "bathroom-leakage",
      "balcony-leakage",
      "insufficient-power-points",
      "hollow-tile-problems",
    ],
    nearbyAreas: ["kampung-baru", "brickfields-mid-valley", "ampang", "sentul"],
  },
  {
    region: "kuala-lumpur",
    slug: "taman-desa",
    name: "Taman Desa",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in Taman Desa, KL",
    metaDescription:
      "Renovation and repair services in Taman Desa, Kuala Lumpur — 1980s walk-up apartments, terraces and newer condos in Seputeh. Rewiring, bathrooms, waterproofing. Free quotation.",
    h1: "Home Renovation & Repair Services in Taman Desa, Kuala Lumpur",
    summary:
      "A mature Seputeh neighbourhood of 1980s low-rise apartments, terrace streets and a newer condominium layer, minutes from Mid Valley and Old Klang Road.",
    intro: [
      "Taman Desa sits in the Seputeh area of southern Kuala Lumpur, on the ridge between Old Klang Road and Jalan Klang Lama's commercial belt. It was developed mainly through the 1980s as a mixed neighbourhood of low-rise apartment blocks, terrace houses and a small number of bungalows, with cafés and shoplots along Jalan Desa Bakti and a newer generation of condominiums added over the last fifteen years.",
      "The neighbourhood's age is what defines the work. Its original walk-up apartments and terraces are now decades old, so bathrooms, concealed pipework, wiring and roofs are reaching the point where repair becomes replacement. Renovix quotes [plumbing](/services/plumbing) re-pipes, [electrical](/services/electrical) rewiring, bathroom rebuilds with proper [waterproofing](/services/waterproofing), [ceiling](/services/ceiling-partition) repairs and [painting](/services/painting) in Taman Desa, alongside fit-out work in the newer condominium blocks.",
    ],
    servicesIntro: "Services Taman Desa households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "plumbing",
        note: "Replacing aging concealed pipe runs and renewing sanitary fittings in 1980s apartments and terraces.",
      },
      {
        serviceSlug: "waterproofing",
        note: "Bathroom and balcony waterproofing renewed before retiling in low-rise blocks and landed homes.",
      },
      {
        serviceSlug: "electrical",
        note: "Rewiring original circuits and adding points for air conditioning, water heaters and modern kitchens.",
      },
      {
        serviceSlug: "ceiling-partition",
        note: "Repairing water-damaged plaster ceilings and rebuilding them once the leak above is resolved.",
      },
      {
        serviceSlug: "tiling",
        note: "Retiling bathrooms and kitchens and replacing hollow or cracked tiles in older units.",
      },
      {
        serviceSlug: "painting",
        note: "Interior repaints and exterior touch-ups on shaded, damp-prone walls in the older blocks.",
      },
    ],
    propertyTypesIntro: "Taman Desa property types we regularly work with:",
    propertyTypes: [
      {
        label: "Walk-up and low-rise apartments (1980s)",
        note: "The neighbourhood's original blocks, where bathrooms, risers and wiring are all at replacement age together.",
      },
      {
        label: "Terrace houses (1980s)",
        note: "Established family homes typically on their second full upgrade cycle — services, wet areas and roof.",
      },
      {
        label: "Newer condominiums",
        note: "Post-2010 towers where fit-outs, flooring and defect rectification dominate the requests.",
      },
      {
        label: "Bungalows and semi-detached homes",
        note: "A smaller stock on the ridge, where full modernisation and roof work are the usual scope.",
      },
      {
        label: "Shoplots along the commercial rows",
        note: "Ground-floor units being refitted for cafés, clinics and offices around Jalan Desa Bakti.",
      },
    ],
    problemsIntro: "Common problems we are called to in Taman Desa:",
    problems: [
      {
        title: "Leaks between stacked apartment units",
        description:
          "Failed bathroom membranes in the older blocks show up as damp ceilings in the unit below long before the floor above looks wrong.",
      },
      {
        title: "Corroded concealed pipework",
        description:
          "Original pipe runs in 1980s homes weep behind walls, staining plaster and driving up water bills quietly.",
      },
      {
        title: "Original wiring under modern loads",
        description:
          "Circuits sized for a very different era now carry air conditioners and kitchen appliances, and trip under the demand.",
      },
      {
        title: "Water-damaged plaster ceilings",
        description:
          "Sagging, stained ceilings that keep returning because the leak above them was never traced and stopped first.",
      },
      {
        title: "Mould on shaded and hillside-facing walls",
        description:
          "The neighbourhood's mature trees and slope keep some walls damp year-round, so paint fails and mould reappears.",
      },
    ],
    processTitle: "How we work in Taman Desa",
    processIntro: "Adapted to mature low-rise blocks and established landed streets:",
    processSteps: [
      {
        title: "Tell us about the property",
        description:
          "Send the block or street, the property type and the work in mind, with photos of the affected rooms if you have them.",
      },
      {
        title: "Site assessment",
        description:
          "We inspect the actual condition of pipework, wiring, wet areas and ceilings, and trace leaks to their source before quoting.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation covering scope, materials and schedule, including any management-committee requirements for the block.",
      },
      {
        title: "Work and handover",
        description:
          "Work runs on the agreed dates, the site is cleaned, and water and electrical systems are tested with you at handover.",
      },
    ],
    contextIntro: "Working in Taman Desa — what to expect",
    context: [
      "The older walk-up blocks have joint management bodies rather than large management offices, so notice periods, working hours and debris arrangements still apply but are usually handled through the committee. We confirm what your block requires before starting.",
      "Leaks between stacked units are the neighbourhood's most common dispute. We inspect both sides where access allows, because identifying whether the water comes from the unit above, a shared riser or the bathroom itself decides who needs to do what.",
      "Streets here are narrow with tight kerbside parking, and some blocks have no lift. That affects how material is delivered and debris removed, and we build both into the schedule rather than leaving them to the day.",
    ],
    faqs: [
      {
        question: "Do you repair leaks between apartment floors in Taman Desa?",
        answer:
          "Yes. We trace the source first — the bathroom above, a shared riser or the unit's own pipework — and then quote the repair. Where the source is in a neighbour's unit we explain clearly what needs to be arranged.",
      },
      {
        question: "Can you rewire a 1980s apartment or terrace here?",
        answer:
          "Yes. We assess the existing circuits and distribution board, then quote either a partial upgrade or a full rewire depending on what the property actually needs.",
      },
      {
        question: "Do you work in the newer Taman Desa condominiums?",
        answer:
          "Yes. Fit-outs, flooring, kitchen and bathroom work in newer units follow the building's management rules, and we schedule around permitted hours and lift bookings.",
      },
      {
        question: "My ceiling stain keeps coming back after repainting. Why?",
        answer:
          "Because the stain is a symptom. Unless the leak above it is stopped, new paint hides it for a few months at best. We find and fix the source, then make good the ceiling.",
      },
      {
        question: "How do I get a quote for a Taman Desa job?",
        answer:
          "Message us with the property type and the work in mind, with photos if you can. We arrange a site visit and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "plumbing",
      "waterproofing",
      "electrical",
      "ceiling-partition",
    ],
    relatedProblems: [
      "water-damaged-ceiling",
      "bathroom-leakage",
      "leaking-pipe",
      "old-house-wiring",
    ],
    nearbyAreas: [
      "old-klang-road",
      "brickfields-mid-valley",
      "sri-petaling",
      "bangsar",
    ],
  },
  {
    region: "kuala-lumpur",
    slug: "kampung-baru",
    name: "Kampung Baru",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in Kampung Baru, KL",
    metaDescription:
      "Renovation and repair services in Kampung Baru, Kuala Lumpur — traditional timber houses, older brick homes and shoplots beside the city centre. Roofing, rewiring, repairs. Free quotation.",
    h1: "Home Renovation & Repair Services in Kampung Baru, Kuala Lumpur",
    summary:
      "The city's Malay heritage enclave beside KLCC — traditional timber houses, older brick homes and shoplots that need a repair-first approach.",
    intro: [
      "Kampung Baru is Kuala Lumpur's oldest surviving Malay settlement, established in the late nineteenth century on the edge of what is now the city centre, directly across the river from Chow Kit and within sight of the Petronas Twin Towers. Its housing is unlike anywhere else in the city: traditional raised timber houses with pitched roofs and timber floors, older single-storey brick homes, small apartment blocks and rows of shoplots along Jalan Raja Muda Musa and the surrounding lanes.",
      "Work here is mostly repair and careful upgrading rather than wholesale rebuilding. Timber structures need rot, roof and floor attention; older brick homes need rewiring, re-piping and bathroom renewal; and shoplot owners ask for practical refits. Renovix quotes [waterproofing](/services/waterproofing) and roof repairs, [electrical](/services/electrical) rewiring, [plumbing](/services/plumbing), [painting](/services/painting), [welding and metal work](/services/welding-metal-works) and [handyman](/services/handyman) repairs in Kampung Baru, assessing what is genuinely there before proposing a scope.",
    ],
    servicesIntro: "Services Kampung Baru households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "waterproofing",
        note: "Roof and wet-area leak repair on pitched timber roofs and older concrete bathrooms.",
      },
      {
        serviceSlug: "electrical",
        note: "Rewiring circuits added piecemeal over decades, and replacing aging distribution boards safely.",
      },
      {
        serviceSlug: "plumbing",
        note: "Renewing old pipe runs, bathroom fittings and outdoor taps in long-established homes.",
      },
      {
        serviceSlug: "painting",
        note: "Repainting timber and masonry surfaces after the underlying damp or rot has been dealt with.",
      },
      {
        serviceSlug: "welding-metal-works",
        note: "Grilles, gates, railings and stair repairs, including rust treatment on older metalwork.",
      },
      {
        serviceSlug: "handyman",
        note: "Doors, locks, fittings and the steady small repairs that older homes and shoplots need.",
      },
    ],
    propertyTypesIntro: "Kampung Baru property types we regularly work with:",
    propertyTypes: [
      {
        label: "Traditional raised timber houses",
        note: "Heritage homes where timber condition, roof structure and ventilation come before any finishing work.",
      },
      {
        label: "Older single-storey brick houses",
        note: "Post-war homes typically needing rewiring, re-piping and a full bathroom renewal.",
      },
      {
        label: "Small apartment and flat blocks",
        note: "Compact units with original wet areas, risers and wiring at the end of their service life.",
      },
      {
        label: "Shoplots and food-business units",
        note: "Ground-floor premises refitted around trading hours, with services and finishes upgraded together.",
      },
      {
        label: "Rented rooms and shared houses",
        note: "Frequently occupied properties that need durable, safety-first repairs rather than cosmetic work.",
      },
    ],
    problemsIntro: "Common problems we are called to in Kampung Baru:",
    problems: [
      {
        title: "Roof leaks on aging pitched roofs",
        description:
          "Decades of monsoon seasons loosen tiles and corrode flashing, and the water shows up as stains on ceilings and timber below.",
      },
      {
        title: "Timber rot and insect damage",
        description:
          "Persistent damp at floor and post level weakens timber structures, and patching over it hides a spreading problem.",
      },
      {
        title: "Wiring extended piece by piece over decades",
        description:
          "Circuits added as needs changed leave mixed cabling, overloaded points and boards that no longer match how the home is used.",
      },
      {
        title: "Old bathrooms leaking into the structure",
        description:
          "Original wet areas without effective waterproofing let water into adjoining walls, floors and timber members.",
      },
      {
        title: "Rusted grilles, gates and railings",
        description:
          "Exposed metalwork close to the city's traffic and humidity corrodes at joints and bases long before it looks unsafe.",
      },
    ],
    processTitle: "How we work in Kampung Baru",
    processIntro: "Repair-first, with respect for older structures:",
    processSteps: [
      {
        title: "Tell us about the house",
        description:
          "Describe the property type — timber, brick, flat or shoplot — and the problem, with photos of the affected areas.",
      },
      {
        title: "Site assessment",
        description:
          "We check structure, roof, timber condition, wiring and water sources before proposing anything, because old buildings hide their real faults.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation that separates what must be repaired for safety and weather-tightness from what is optional improvement.",
      },
      {
        title: "Work and handover",
        description:
          "Work is carried out with the lanes' narrow access in mind, the site is cleaned, and repairs are tested with you at handover.",
      },
    ],
    contextIntro: "Working in Kampung Baru — what to expect",
    context: [
      "Older timber and brick homes reward assessment. Two houses on the same lane can need entirely different work, so we quote from what the building actually shows rather than from a standard package.",
      "Access shapes the logistics: the lanes are narrow, parking is limited and some houses are set back behind others. Deliveries and debris removal are planned in smaller loads and at agreed times.",
      "Land and ownership arrangements in Kampung Baru can be complex, and some properties are tenanted or jointly held. We work from the instructions of whoever engages us and stay clear about what our scope covers — we do not advise on ownership or land matters.",
    ],
    faqs: [
      {
        question: "Do you repair traditional timber houses in Kampung Baru?",
        answer:
          "Yes — roof repairs, timber replacement where members have rotted, floor repairs, rewiring and repainting. We assess the timber condition first, because the right scope depends entirely on what the structure is still doing well.",
      },
      {
        question: "Can you rewire an old house that has been extended over the years?",
        answer:
          "Yes. Homes like these usually carry a mix of cabling from different decades. We assess the whole installation and quote either a targeted upgrade or a full rewire, and we explain which faults are safety issues.",
      },
      {
        question: "My roof leaks only in heavy rain. Is that a full re-roof?",
        answer:
          "Not necessarily. Many leaks come from displaced tiles, failed flashing or blocked gutters rather than a failed roof. We inspect and tell you honestly whether a repair will hold or whether replacement is the sensible answer.",
      },
      {
        question: "Do you refit shoplots and food premises here?",
        answer:
          "Yes. Commercial refits are scheduled around trading hours, and electrical, plumbing, tiling and finishing work are coordinated in one plan so the unit is out of use for as short a time as possible.",
      },
      {
        question: "How do I get a quote for a Kampung Baru property?",
        answer:
          "Send us the property type and the problem, with photos if possible. We arrange an assessment and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "waterproofing",
      "electrical",
      "plumbing",
      "welding-metal-works",
    ],
    relatedProblems: [
      "roof-leakage",
      "old-house-wiring",
      "damp-walls",
      "rusted-gate-repair",
    ],
    nearbyAreas: ["kl-city-centre", "sentul", "setapak", "ampang"],
  },
];
