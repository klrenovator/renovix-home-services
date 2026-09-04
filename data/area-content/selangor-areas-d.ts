import type { AreaDetail } from "./types";

/**
 * Fourth batch of Selangor location guides (Phase 23 expansion).
 *
 * Each guide fills a real gap in the Klang Valley coverage — a township large
 * enough to carry its own search intent and distinct enough in housing stock
 * that the advice genuinely differs from its parent town's guide:
 *
 * - `setia-alam` — the large self-contained township on Shah Alam's north-west
 *   edge, whose 2000s–2010s landed stock has a completely different profile
 *   from Shah Alam's original numbered sections.
 * - `bandar-kinrara` — the established Puchong-side township, mixed landed and
 *   high-rise, mature enough that services renewal now dominates.
 * - `batu-caves` — the Selayang-district town with older estate housing,
 *   industrial edges and a heavy-rain hillside catchment.
 * - `bandar-mahkota-cheras` — the Hulu Langat township on the Selangor side of
 *   the Cheras border, distinct from Cheras KL in age, layout and access.
 *
 * Honesty rules unchanged: publicly known facts only, no invented statistics,
 * offices, teams or projects, and no location-specific pricing (rates always
 * come from `data/pricing/pricing.ts`).
 */
export const selangorAreasD: AreaDetail[] = [
  {
    region: "selangor",
    slug: "setia-alam",
    name: "Setia Alam",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in Setia Alam, Selangor",
    metaDescription:
      "Renovation and repair services in Setia Alam, Selangor — 2000s–2010s terrace homes, semidees and newer condos. Extensions, waterproofing, rewiring, tiling. Free quotation.",
    h1: "Home Renovation & Repair Services in Setia Alam, Selangor",
    summary:
      "A large self-contained township north-west of Shah Alam — mostly 2000s–2010s landed homes now entering their first major upgrade cycle.",
    intro: [
      "Setia Alam is one of the Klang Valley's largest master-planned townships, laid out from the mid-2000s on the north-western edge of Shah Alam and connected to the NKVE by its own dedicated interchange. Almost all of its housing is landed — terrace houses, superlink homes, semi-detached houses and cluster homes across numbered precincts — with a newer layer of condominiums and serviced apartments, and a busy commercial belt around the Setia City area and the township's main boulevard.",
      "Because the stock is relatively young and consistent, the work here is predictable in a way it is not in older towns. Homes built in the township's first decade are now at the age where original bathroom waterproofing, external paint and roof detailing need attention, while owners plan kitchen extensions, wet-kitchen additions, car-porch upgrades and full interior refreshes. Renovix quotes [general renovation](/services/general-renovation), [waterproofing](/services/waterproofing), [tiling](/services/tiling), [electrical](/services/electrical) and [welding and metal work](/services/welding-metal-works) across Setia Alam's precincts.",
    ],
    servicesIntro: "Services Setia Alam households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "general-renovation",
        note: "Kitchen extensions, wet-kitchen additions and full interior upgrades on landed township homes.",
      },
      {
        serviceSlug: "waterproofing",
        note: "Bathroom, balcony and roof-slab waterproofing renewed as the first-generation homes reach that age.",
      },
      {
        serviceSlug: "tiling",
        note: "Retiling wet areas and replacing hollow or cracked floor tiles in terrace and superlink homes.",
      },
      {
        serviceSlug: "electrical",
        note: "Additional points, lighting circuits and distribution-board upgrades for extended and reworked homes.",
      },
      {
        serviceSlug: "welding-metal-works",
        note: "Grilles, gates, awnings and railings — fabricated and fitted to the estate's own layout rules.",
      },
      {
        serviceSlug: "painting",
        note: "Exterior repaints on sun- and rain-exposed elevations, and full interior refreshes.",
      },
    ],
    propertyTypesIntro: "Setia Alam property types we regularly work with:",
    propertyTypes: [
      {
        label: "Terrace houses (2000s–2010s)",
        note: "The township's core stock, now in its first serious waterproofing, paint and services upgrade cycle.",
      },
      {
        label: "Superlink and cluster homes",
        note: "Larger landed homes where extensions, wet kitchens and full interior renovation are common.",
      },
      {
        label: "Semi-detached houses and bungalows",
        note: "Premium lots with roof, drainage and full modernisation scopes as they mature.",
      },
      {
        label: "Condominiums and serviced apartments",
        note: "The newer high-rise layer, where fit-outs, flooring and defect rectification dominate.",
      },
      {
        label: "Shop offices in the commercial belt",
        note: "Ground- and upper-floor commercial units refitted for retail, clinics and offices.",
      },
    ],
    problemsIntro: "Common problems we are called to in Setia Alam:",
    problems: [
      {
        title: "First-cycle bathroom waterproofing failure",
        description:
          "Membranes installed when the township was built reach the end of their effective life together, and damp starts showing on adjoining walls.",
      },
      {
        title: "Flat roof and porch slab leaks",
        description:
          "Exposed slabs over car porches and rear extensions crack and pond water, and the leak appears inside long after the cause started.",
      },
      {
        title: "Hollow tiles in wet and living areas",
        description:
          "Heat movement and adhesive failure leave floor tiles sounding hollow, then cracking around doorways and wet zones.",
      },
      {
        title: "Power points that no longer match the house",
        description:
          "Extended kitchens, added air conditioners and home offices outgrow the original circuit design, and the board trips under load.",
      },
      {
        title: "Rust on gates, grilles and awnings",
        description:
          "Sun and heavy rain attack coatings at joints and bases, and untreated rust spreads under the paint film.",
      },
    ],
    processTitle: "How we work in Setia Alam",
    processIntro: "Adapted to a large landed township with estate guidelines:",
    processSteps: [
      {
        title: "Tell us about the house",
        description:
          "Send the precinct, house type and the work in mind — photos of the affected areas help us prepare before the visit.",
      },
      {
        title: "Site assessment",
        description:
          "We check the actual condition of wet areas, roof details, wiring and finishes, and note any estate or local-authority requirement that applies.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation covering scope, materials and schedule, with approval requirements for extensions stated where they apply.",
      },
      {
        title: "Work and handover",
        description:
          "Work runs on the agreed dates, the site is cleaned, and wet areas and electrical circuits are tested with you at handover.",
      },
    ],
    contextIntro: "Working in Setia Alam — what to expect",
    context: [
      "Extensions and structural changes on landed homes in the township fall under the local authority's approval requirements, and the estate may also have its own guidelines on elevations, porch changes and boundary work. We identify what applies during assessment so nothing is discovered halfway through.",
      "Because so many homes in a precinct were built to the same specification, a fault that appears in one house is often the same fault appearing on schedule elsewhere. That helps diagnosis, but we still assess each house individually before quoting.",
      "The township is large and its precincts are spread out, so we group site visits sensibly and confirm timing with you rather than promising a same-hour arrival we cannot honestly keep.",
    ],
    faqs: [
      {
        question: "Can you build a kitchen or rear extension on a Setia Alam terrace house?",
        answer:
          "We can carry out extension work where the structure and approvals allow. Approval requirements are identified during assessment, and we tell you what your application will need.",
      },
      {
        question: "Our bathroom is leaking to the room next door. Is a full rebuild needed?",
        answer:
          "Not always. Sometimes the failure is localised at a floor trap or wall junction. We trace the source, and if the membrane has genuinely failed we explain why hacking and re-waterproofing is the honest answer rather than a surface patch.",
      },
      {
        question: "Do you fabricate gates, grilles and awnings for township homes?",
        answer:
          "Yes — fabricated to measure and fitted on site, including rust treatment and repainting of existing metalwork. Where the estate has guidelines on appearance, we work to them.",
      },
      {
        question: "Do you work in the Setia Alam condominiums as well as landed homes?",
        answer:
          "Yes. High-rise work follows building management rules — renovation notice, permitted hours and lift bookings — and we include those in the schedule.",
      },
      {
        question: "How do I get a quote in Setia Alam?",
        answer:
          "Message us with the precinct, property type and the work in mind, with photos if you can. We arrange a site visit and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "general-renovation",
      "waterproofing",
      "tiling",
      "welding-metal-works",
    ],
    relatedProblems: [
      "bathroom-leakage",
      "roof-leakage",
      "hollow-tile-problems",
      "rusted-gate-repair",
    ],
    nearbyAreas: ["shah-alam", "klang", "bandar-baru-klang", "subang-jaya"],
  },
  {
    region: "selangor",
    slug: "bandar-kinrara",
    name: "Bandar Kinrara",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in Bandar Kinrara, Puchong",
    metaDescription:
      "Renovation and repair services in Bandar Kinrara, Puchong — 1990s–2000s terraces, semidees and condos. Rewiring, bathroom rebuilds, waterproofing, tiling. Free quotation.",
    h1: "Home Renovation & Repair Services in Bandar Kinrara, Puchong",
    summary:
      "An established Puchong-side township of 1990s–2000s landed homes and condominiums, mature enough that services renewal now leads the work.",
    intro: [
      "Bandar Kinrara sits on the Puchong side of the Petaling district, laid out from the 1990s across a series of numbered sections between the Bukit Jalil highway corridor and central Puchong. It is a settled, mixed township: terrace houses, semi-detached homes and bungalows across the older sections, condominium and apartment blocks along the main roads, and a long commercial belt of shop offices serving the surrounding neighbourhoods.",
      "The township's age is the key fact for renovation. Homes built in its first decade are now twenty to thirty years old, which is exactly when concealed pipework, bathroom waterproofing, wiring and roof details start failing in sequence. Renovix quotes [plumbing](/services/plumbing) re-pipes, [waterproofing](/services/waterproofing) renewal, [electrical](/services/electrical) rewiring and board upgrades, [tiling](/services/tiling) and [general renovation](/services/general-renovation) across Bandar Kinrara's landed sections and high-rise blocks.",
    ],
    servicesIntro: "Services Bandar Kinrara households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "plumbing",
        note: "Replacing corroded concealed pipe runs and renewing sanitary fittings in 1990s–2000s homes.",
      },
      {
        serviceSlug: "waterproofing",
        note: "Bathroom, balcony and flat-roof waterproofing renewed at the age these homes have now reached.",
      },
      {
        serviceSlug: "electrical",
        note: "Rewiring older circuits, upgrading distribution boards and adding points for modern appliances.",
      },
      {
        serviceSlug: "tiling",
        note: "Retiling bathrooms and kitchens and replacing hollow or cracked tiles in living areas.",
      },
      {
        serviceSlug: "general-renovation",
        note: "Kitchen and bathroom modernisation and full interior upgrades in mature landed homes.",
      },
      {
        serviceSlug: "painting",
        note: "Interior repaints and weather-exposed exterior repainting on the township's older elevations.",
      },
    ],
    propertyTypesIntro: "Bandar Kinrara property types we regularly work with:",
    propertyTypes: [
      {
        label: "Terrace houses (1990s–2000s)",
        note: "The township's main stock, now firmly in its services and wet-area renewal years.",
      },
      {
        label: "Semi-detached homes and bungalows",
        note: "Larger lots where full modernisation, roof work and extensions are the usual scope.",
      },
      {
        label: "Condominiums and apartments",
        note: "High-rise blocks along the main roads, where fit-outs, waterproofing and rectification dominate.",
      },
      {
        label: "Shop offices along the commercial belt",
        note: "Commercial units refitted for clinics, offices, cafés and services around trading hours.",
      },
      {
        label: "Rental units and tenanted homes",
        note: "Properties refurbished between tenancies with durable, practical finishes.",
      },
    ],
    problemsIntro: "Common problems we are called to in Bandar Kinrara:",
    problems: [
      {
        title: "Concealed pipe leaks behind walls",
        description:
          "Original pipework from the township's first decade corrodes and weeps, showing as damp patches and rising water bills.",
      },
      {
        title: "Bathroom waterproofing at the end of its life",
        description:
          "Membranes laid when the houses were built no longer hold, and water reaches adjoining rooms and floors below.",
      },
      {
        title: "Distribution boards outgrown by the house",
        description:
          "Boards specified decades ago now serve added air conditioners, water heaters and kitchen circuits, and trip repeatedly.",
      },
      {
        title: "Hollow and cracked floor tiles",
        description:
          "Adhesive failure and slab movement leave tiles hollow underfoot and cracking through wet and living areas.",
      },
      {
        title: "Porch and rear-extension slab leaks",
        description:
          "Flat slabs over porches and rear extensions pond water where falls are shallow, and eventually leak inside.",
      },
    ],
    processTitle: "How we work in Bandar Kinrara",
    processIntro: "Adapted to a mature mixed township:",
    processSteps: [
      {
        title: "Tell us about the property",
        description:
          "Send the section, property type and the work in mind, with photos of the affected areas if you have them.",
      },
      {
        title: "Site assessment",
        description:
          "We check pipework, wet areas, wiring and finishes against the property's actual age and condition before proposing scope.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation covering scope, materials and schedule, including strata requirements for high-rise units.",
      },
      {
        title: "Work and handover",
        description:
          "Work runs on the agreed dates, the site is cleaned, and water and electrical systems are tested with you at handover.",
      },
    ],
    contextIntro: "Working in Bandar Kinrara — what to expect",
    context: [
      "Because much of the township was built to a similar specification within a few years, faults arrive on a similar timetable. That is useful for diagnosis, but every quotation still comes from what we find in your specific house.",
      "Landed streets here have reasonable access and driveway parking, so material delivery and debris removal are straightforward; high-rise blocks follow the usual strata process of notice, deposit, permitted hours and lift booking.",
      "The main roads through the township are congested at peak hours. We schedule assessments and deliveries outside those windows and confirm timing with you rather than giving an arrival promise we cannot keep.",
    ],
    faqs: [
      {
        question: "Do you re-pipe older houses in Bandar Kinrara?",
        answer:
          "Yes. Where concealed runs have corroded, we assess whether targeted replacement or a full re-pipe is the honest answer, and quote against what the house actually needs.",
      },
      {
        question: "Can you upgrade the distribution board in a 1990s house here?",
        answer:
          "Yes. We assess the existing installation, the loads the house now carries and the condition of the wiring, then quote a board upgrade or a wider rewire accordingly.",
      },
      {
        question: "Do you work in the condominiums as well as the landed sections?",
        answer:
          "Yes. High-rise work follows the building's renovation rules — notice, deposit, permitted hours and lift bookings — and those are built into the schedule.",
      },
      {
        question: "Our porch slab leaks in heavy rain. Can it be fixed without rebuilding?",
        answer:
          "Often yes. Many porch leaks come from cracks, poor falls or failed joints rather than a failed structure. We inspect first and tell you plainly whether repair or replacement is the sensible answer.",
      },
      {
        question: "How do I get a quote in Bandar Kinrara?",
        answer:
          "Message us with the section, property type and the work in mind, with photos if you can. We arrange a site visit and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "plumbing",
      "waterproofing",
      "electrical",
      "general-renovation",
    ],
    relatedProblems: [
      "leaking-pipe",
      "bathroom-leakage",
      "power-tripping",
      "hollow-tile-problems",
    ],
    nearbyAreas: ["puchong", "bukit-jalil", "seri-kembangan", "sri-petaling"],
  },
  {
    region: "selangor",
    slug: "batu-caves",
    name: "Batu Caves",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in Batu Caves, Selangor",
    metaDescription:
      "Renovation and repair services in Batu Caves, Selangor — older estate housing, terraces and newer transit-corridor homes in the Gombak district. Roofing, rewiring, repairs. Free quotation.",
    h1: "Home Renovation & Repair Services in Batu Caves, Selangor",
    summary:
      "A long-established Gombak-district town below the limestone hills — older estate housing, mature terraces and a newer layer along the KTM corridor.",
    intro: [
      "Batu Caves sits in the Gombak district on Kuala Lumpur's northern edge, best known for the limestone hill and temple complex that gives the town its name. Around that landmark is a working residential town built up over several decades: older estate and village housing, terrace schemes from the 1980s and 1990s, light-industrial and workshop pockets, and a newer layer of homes and apartments along the KTM Komuter and MRR2 corridors.",
      "The mix of ages is what shapes the work. Older houses need roof, wiring and bathroom renewal; the 1980s–90s terraces are at the age where waterproofing and concealed pipework fail; and heavy rainfall running off the hill catchment makes roof detailing, drainage and external damp a recurring theme across the town. Renovix quotes [waterproofing](/services/waterproofing) and roof repairs, [plumbing](/services/plumbing), [electrical](/services/electrical) rewiring, [painting](/services/painting) and [welding and metal work](/services/welding-metal-works) in Batu Caves.",
    ],
    servicesIntro: "Services Batu Caves households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "waterproofing",
        note: "Roof, gutter-line and wet-area leak repair in a town that takes heavy runoff from the hills.",
      },
      {
        serviceSlug: "plumbing",
        note: "Replacing aging pipe runs, clearing recurring drainage problems and renewing bathroom fittings.",
      },
      {
        serviceSlug: "electrical",
        note: "Rewiring older houses, upgrading boards and adding points where circuits were extended piecemeal.",
      },
      {
        serviceSlug: "painting",
        note: "Exterior repainting and mould treatment on walls that stay damp through the rainy months.",
      },
      {
        serviceSlug: "welding-metal-works",
        note: "Gates, grilles, awnings and railings, including rust treatment on weathered metalwork.",
      },
      {
        serviceSlug: "general-renovation",
        note: "Kitchen and bathroom modernisation and full upgrades in mature terrace and estate homes.",
      },
    ],
    propertyTypesIntro: "Batu Caves property types we regularly work with:",
    propertyTypes: [
      {
        label: "Terrace houses (1980s–1990s)",
        note: "The town's core residential stock, now needing services renewal and wet-area rebuilds.",
      },
      {
        label: "Older estate and village houses",
        note: "Individually built homes where roof, structure and wiring are assessed before anything else.",
      },
      {
        label: "Apartments along the transit corridor",
        note: "Newer blocks where fit-outs, flooring and defect rectification are the usual requests.",
      },
      {
        label: "Shoplots and workshop units",
        note: "Commercial and light-industrial premises needing practical, hard-wearing refits.",
      },
      {
        label: "Tenanted homes and rental units",
        note: "Properties refurbished between tenancies with durable finishes and safety-first repairs.",
      },
    ],
    problemsIntro: "Common problems we are called to in Batu Caves:",
    problems: [
      {
        title: "Roof leaks after heavy rain",
        description:
          "Runoff from the hill catchment tests every roof detail, and displaced tiles or failed flashing show up quickly as ceiling stains.",
      },
      {
        title: "Damp walls and persistent mould",
        description:
          "Long wet seasons and shaded elevations keep masonry damp, so paint fails and mould returns unless the moisture source is dealt with.",
      },
      {
        title: "Blocked and overloaded drainage",
        description:
          "Heavy rain and silt overwhelm gutters and outlets, backing water up into porches, yards and rear extensions.",
      },
      {
        title: "Wiring extended over decades",
        description:
          "Older homes carry circuits added as needs changed, leaving mixed cabling and boards that no longer suit the load.",
      },
      {
        title: "Rusted external metalwork",
        description:
          "Constant humidity and rain corrode gates, grilles and awning frames at joints and bases before the damage is visible.",
      },
    ],
    processTitle: "How we work in Batu Caves",
    processIntro: "Adapted to older housing and a high-rainfall catchment:",
    processSteps: [
      {
        title: "Tell us about the property",
        description:
          "Describe the property type and the problem, with photos of the ceiling, wall or roof area affected.",
      },
      {
        title: "Site assessment",
        description:
          "We inspect roof details, drainage paths, wiring and wet areas — with water problems, the visible damage is rarely the source.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation that separates the repair that stops the water from the making-good work that follows it.",
      },
      {
        title: "Work and handover",
        description:
          "Work runs on the agreed dates, the site is cleaned, and repairs are checked with you at handover.",
      },
    ],
    contextIntro: "Working in Batu Caves — what to expect",
    context: [
      "Water is the recurring theme here. Because the town sits below a hill catchment, we look at the whole path — roof, gutters, outlets, external ground levels — rather than just the room where the stain appears, since fixing only the symptom guarantees a return visit.",
      "Roof and external work depends on the weather. We plan those stages with the rain in mind and tell you honestly when a wet spell will move a date rather than promising a schedule the season will not allow.",
      "Traffic around the temple complex builds heavily during festival periods, particularly Thaipusam. We schedule deliveries and site visits around those days so access is realistic.",
    ],
    faqs: [
      {
        question: "My ceiling stains every rainy season. Do I need a new roof?",
        answer:
          "Usually not. Most recurring leaks come from displaced tiles, failed flashing, blocked gutters or a poor detail at a junction. We inspect and tell you whether a repair will genuinely hold or whether replacement is the honest answer.",
      },
      {
        question: "Can you fix damp walls that keep going mouldy?",
        answer:
          "Yes, but the treatment has to follow the source — a leak, rising damp, failed external sealing or poor ventilation. We identify which it is, deal with it, then restore the surface. Repainting alone does not last.",
      },
      {
        question: "Do you rewire older houses in Batu Caves?",
        answer:
          "Yes. We assess the whole installation, including any circuits added over the years, and quote either a targeted upgrade or a full rewire, explaining clearly which faults are safety issues.",
      },
      {
        question: "Do you take on shoplot and workshop refits?",
        answer:
          "Yes. Commercial work is scheduled around trading hours, with electrical, plumbing, tiling and finishing coordinated in one plan.",
      },
      {
        question: "How do I get a quote in Batu Caves?",
        answer:
          "Send us the property type and the problem, with photos if possible. We arrange an assessment and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "waterproofing",
      "plumbing",
      "electrical",
      "welding-metal-works",
    ],
    relatedProblems: [
      "roof-leakage",
      "damp-walls",
      "blocked-drain",
      "old-house-wiring",
    ],
    nearbyAreas: ["selayang", "gombak", "kepong", "sungai-buloh"],
  },
  {
    region: "selangor",
    slug: "bandar-mahkota-cheras",
    name: "Bandar Mahkota Cheras",
    title:
      "Renovix Home Services | Home Renovation & Repair Services in Bandar Mahkota Cheras, Selangor",
    metaDescription:
      "Renovation and repair services in Bandar Mahkota Cheras, Selangor — 2000s terraces, semidees and condos in the Hulu Langat district. Waterproofing, rewiring, tiling. Free quotation.",
    h1: "Home Renovation & Repair Services in Bandar Mahkota Cheras, Selangor",
    summary:
      "A 2000s Hulu Langat township on the Selangor side of the Cheras border — mostly landed homes now reaching their first major renewal cycle.",
    intro: [
      "Bandar Mahkota Cheras is a planned township in the Hulu Langat district of Selangor, developed from the early 2000s on the Selangor side of the Cheras boundary, between Cheras KL and Kajang. Despite the shared name, it is a distinctly different place from Cheras in Kuala Lumpur: newer, laid out in numbered precincts of terrace houses, superlink and semi-detached homes, with a commercial centre of shop offices and a smaller number of apartment and condominium blocks.",
      "Homes here were largely built within a narrow window, so they age together. The township's first-generation houses are now at the point where original bathroom waterproofing, external paint, roof details and porch slabs need attention, and owners are adding wet kitchens, extending rear areas and modernising interiors. Renovix quotes [waterproofing](/services/waterproofing), [general renovation](/services/general-renovation), [tiling](/services/tiling), [electrical](/services/electrical) and [plumbing](/services/plumbing) work across the township's precincts.",
    ],
    servicesIntro: "Services Bandar Mahkota Cheras households ask for most:",
    servicesAvailable: [
      {
        serviceSlug: "waterproofing",
        note: "Bathroom, balcony and porch-slab waterproofing renewed as the first-generation homes reach that age.",
      },
      {
        serviceSlug: "general-renovation",
        note: "Wet-kitchen additions, rear extensions and full interior upgrades on landed township homes.",
      },
      {
        serviceSlug: "tiling",
        note: "Retiling wet areas and replacing hollow or cracked tiles across living and service areas.",
      },
      {
        serviceSlug: "electrical",
        note: "Adding points and upgrading boards for extended kitchens, air conditioning and home offices.",
      },
      {
        serviceSlug: "plumbing",
        note: "Renewing fittings, tracing leaks and re-routing pipework in extended and modernised homes.",
      },
      {
        serviceSlug: "welding-metal-works",
        note: "Gates, grilles, awnings and railings fabricated to measure and fitted on site.",
      },
    ],
    propertyTypesIntro: "Bandar Mahkota Cheras property types we regularly work with:",
    propertyTypes: [
      {
        label: "Terrace houses (2000s)",
        note: "The township's core stock, entering its first serious waterproofing and finishes renewal cycle.",
      },
      {
        label: "Superlink and semi-detached homes",
        note: "Larger landed homes where extensions, wet kitchens and full interior renovation are common.",
      },
      {
        label: "Apartments and condominiums",
        note: "A smaller high-rise layer where fit-outs, flooring and rectification are the usual requests.",
      },
      {
        label: "Shop offices in the commercial centre",
        note: "Commercial units refitted for clinics, offices, tuition centres and food businesses.",
      },
      {
        label: "Tenanted and rented homes",
        note: "Properties refurbished between tenancies with durable, practical finishes.",
      },
    ],
    problemsIntro: "Common problems we are called to in Bandar Mahkota Cheras:",
    problems: [
      {
        title: "First-cycle bathroom leaks",
        description:
          "Original membranes across the township reach the end of their life at a similar time, and damp appears on adjoining walls and ceilings below.",
      },
      {
        title: "Porch and rear slab water ingress",
        description:
          "Shallow falls on exposed slabs let water pond and work into cracks, then show inside the house months later.",
      },
      {
        title: "Hollow tiles across living areas",
        description:
          "Adhesive failure and slab movement leave floor tiles hollow and cracking, particularly near doorways and wet zones.",
      },
      {
        title: "Circuits outgrown by extended homes",
        description:
          "Added wet kitchens, air conditioners and appliances exceed what the original wiring was designed to serve.",
      },
      {
        title: "Weathered exterior paint and mould",
        description:
          "Sun and heavy rain on exposed elevations break down coatings, and shaded walls hold mould through the wet months.",
      },
    ],
    processTitle: "How we work in Bandar Mahkota Cheras",
    processIntro: "Adapted to a young landed township reaching renewal age:",
    processSteps: [
      {
        title: "Tell us about the house",
        description:
          "Send the precinct, house type and the work in mind, with photos of the affected areas if you have them.",
      },
      {
        title: "Site assessment",
        description:
          "We check wet areas, slabs, wiring and finishes, and identify any approval requirement for extension work.",
      },
      {
        title: "Written quotation",
        description:
          "A clear quotation covering scope, materials and schedule, with authority requirements stated where they apply.",
      },
      {
        title: "Work and handover",
        description:
          "Work runs on the agreed dates, the site is cleaned, and wet areas and circuits are tested with you at handover.",
      },
    ],
    contextIntro: "Working in Bandar Mahkota Cheras — what to expect",
    context: [
      "The township falls under the Selangor side of the Cheras area, not Kuala Lumpur, so extension and structural approvals go through the relevant Selangor local authority. We identify what applies during assessment rather than after work has begun.",
      "Houses built to the same specification within a few years tend to develop the same faults on a similar timetable, which helps diagnosis — but the quotation always comes from what we find in your house, not from what a neighbour needed.",
      "Access on the main routes into the township is congested at peak hours. We plan deliveries and visits outside those windows and confirm timing with you honestly.",
    ],
    faqs: [
      {
        question: "Is Bandar Mahkota Cheras the same as Cheras in KL?",
        answer:
          "No. Bandar Mahkota Cheras is a Selangor township in the Hulu Langat district, on the other side of the boundary from Cheras, Kuala Lumpur. The housing is newer and the local authority is different, which matters for approvals.",
      },
      {
        question: "Can you add a wet kitchen or rear extension?",
        answer:
          "We can carry out extension work where the structure and approvals allow. Requirements are identified during assessment, and we tell you what your application will need.",
      },
      {
        question: "Our bathroom leaks into the room next door. What is involved?",
        answer:
          "We trace the source first. If the waterproofing has genuinely failed, the honest answer is hacking, re-waterproofing and retiling — a surface patch on a failed membrane does not last.",
      },
      {
        question: "Do you handle small repair jobs here, not just renovations?",
        answer:
          "Yes. Door and lock repairs, tap replacement, leak fixes, tile repairs and similar jobs are welcome and can be combined into one visit.",
      },
      {
        question: "How do I get a quote in Bandar Mahkota Cheras?",
        answer:
          "Message us with the precinct, property type and the work in mind, with photos if you can. We arrange a site visit and provide a written, no-obligation quotation.",
      },
    ],
    relatedServices: [
      "waterproofing",
      "general-renovation",
      "tiling",
      "electrical",
    ],
    relatedProblems: [
      "bathroom-leakage",
      "water-seepage-through-tiles",
      "hollow-tile-problems",
      "peeling-paint",
    ],
    nearbyAreas: ["kajang", "balakong", "cheras", "semenyih"],
  },
];
