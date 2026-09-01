import type { ProblemDetail, ProblemPropertyType } from "./types";

const waterproofingPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Terrace House",
    note: "Roof, bathroom, kitchen and balcony waterproofing for landed homes.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Larger waterproofing scopes for roofs, balconies and expansive wet areas.",
  },
  {
    label: "Condominium",
    note: "Bathroom and balcony waterproofing within a unit, coordinated with management.",
  },
  {
    label: "Apartment",
    note: "Wet-area waterproofing for apartment bathrooms and balconies.",
  },
  {
    label: "Shop & Office",
    note: "Waterproofing for washrooms, kitchens and wet service areas.",
  },
  {
    label: "New Homes",
    note: "Waterproofing before tiling and fixing defects in a new home's wet areas.",
  },
];

const waterproofingAreasNote =
  "Waterproofing services are available across Kuala Lumpur, Selangor and the wider Klang Valley, for bathrooms, balconies, roofs and walls.";

const waterproofingBase = {
  category: "waterproofing" as const,
  relatedService: "waterproofing",
  relatedServices: ["tiling", "plumbing", "general-renovation", "painting"],
  propertyTypes: waterproofingPropertyTypes,
  areasNote: waterproofingAreasNote,
};

export const waterproofingProblems: ProblemDetail[] = [
  {
    ...waterproofingBase,
    slug: "roof-leakage",
    name: "Roof Leakage",
    title: "Roof Leakage in Kuala Lumpur & Selangor | Roof Waterproofing",
    metaDescription:
      "Roof leakage in Kuala Lumpur & Selangor — water coming through the ceiling, stains and damp patches. Learn the causes, warning signs, roof waterproofing solutions and when to call a professional.",
    h1: "Roof Leakage",
    subtitle:
      "A roof leak spreads as fast as it rains. Renovix finds the entry point, waterproofs the roof and stops the leak at its source.",
    whatItMeans: [
      "Roof leakage is water entering a building through the roof, showing up as a stain or damp patch on the ceiling, a drip, or in the worst case a section of ceiling that sags or gives way. In Malaysia's heavy rain, a roof leak can start small and quickly grow as the water follows beams, rafters and wiring before it becomes visible. It is one of the most common and most damaging water problems a home can face.",
      "Roof leakage usually stems from a failed or absent waterproofing membrane, damaged or slipped roof tiles, a blocked or overflowing gutter, a worn flashing, or a puncture in a flat or metal roof. Because the source and the visible damage are often in different places, finding the true entry point requires care. Left untreated, the moisture can rot timber, corrode wiring and cause mould and staining inside the home.",
    ],
    commonCauses: [
      "Cracked, slipped or broken roof tiles allowing water through.",
      "A failed or ageing waterproofing membrane on a flat or metal roof.",
      "Blocked or overflowing gutters and downpipes that back water up.",
      "Worn or lifted flashing around a chimney, wall, or roof junction.",
      "A puncture or a failed joint in a metal or flat roof surface.",
      "Age and weathering breaking down the roof's protective layer over time.",
    ],
    warningSigns: [
      "A water stain or damp patch on the ceiling or wall below the roof.",
      "A drip during or after heavy rain.",
      "Mould or a musty smell in the attic or a top-floor room.",
      "Ceiling paint bubbling, peeling or a section starting to sag.",
    ],
    solutions: [
      {
        title: "Trace the leak at its source",
        description:
          "We identify the actual entry point on the roof, which is often different from where the stain appears inside.",
      },
      {
        title: "Repair the roof covering",
        description:
          "Slips, cracks or damaged tiles are repaired, and worn flashing or joints are resealed.",
      },
      {
        title: "Apply roof waterproofing",
        description:
          "A durable waterproofing membrane is applied to the roof surface or the affected area to seal it against rain.",
      },
      {
        title: "Repair the interior damage",
        description:
          "We coordinate the repair of the affected ceiling or wall once the leak is stopped.",
      },
    ],
    whenToCall: [
      "There is a stain or drip after heavy rain.",
      "Water is coming through a section of the ceiling.",
      "You know of a roof leak that keeps returning.",
      "You want to waterproof the roof preventatively before the next monsoon.",
    ],
    relatedServiceNote:
      "Roof leakage is a waterproofing job, and we work with the ceiling and painting teams to repair the interior once the leak is fixed.",
    processTitle: "How We Fix Roof Leakage",
    processIntro:
      "Fixing a roof leak is about finding the real entry point and sealing it. Here is the approach.",
    processSteps: [
      {
        title: "Inspect the roof",
        description:
          "We examine the roof surface, tiles, flashing, gutters and waterproofing to find the entry point.",
      },
      {
        title: "Repair the source",
        description:
          "We repair the roof covering, re-seal flashing and apply waterproofing where the leak enters.",
      },
      {
        title: "Test for further leaks",
        description:
          "We check the repair and look for any other weak points that could leak in future.",
      },
      {
        title: "Repair the interior",
        description:
          "The affected ceiling or wall is made good and repainted once the leak is stopped.",
      },
    ],
    propertyTypesIntro:
      "Roof leakage is most common in landed homes and top-floor units, and is a leading cause of ceiling damage across the Klang Valley.",
    faqs: [
      {
        question: "Why does my ceiling leak but the roof looks fine?",
        answer:
          "Water can enter at one point on the roof and travel along beams before it drips inside. The visible stain is rarely directly below the actual entry point, which is why tracing is important.",
      },
      {
        question: "How do I know if the waterproofing on my roof has failed?",
        answer:
          "Signs include staining, ponding water, embrittled or peeling membrane, and leaks after heavy rain. A professional inspection can confirm the condition.",
      },
      {
        question: "Can a roof leak be fixed without replacing the roof?",
        answer:
          "Often yes. Many leaks are from a slipped tile, a blocked gutter or a failed section of flashing, which can be repaired directly. A full re-roof is usually only needed where the roof is severely aged.",
      },
      {
        question: "When is the best time to fix a roof leak?",
        answer:
          "Ideally during dry weather and before the monsoon season, so the repair can be done properly and the roof is ready for heavy rain.",
      },
      {
        question: "Does roof waterproofing last?",
        answer:
          "A quality waterproofing membrane, properly applied, can last many years. Its life depends on the material, the surface condition and weather exposure.",
      },
    ],
    relatedProblems: [
      "water-damaged-ceiling",
      "wall-seepage",
      "ceiling-stains",
      "water-stains",
    ],
  },
  {
    ...waterproofingBase,
    slug: "bathroom-leakage",
    name: "Bathroom Leakage",
    title: "Bathroom Leakage in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Bathroom leakage in Kuala Lumpur & Selangor — water seeping through to the ceiling below, damp walls and failed membranes. Learn causes, warning signs, bathroom waterproofing solutions and when to call a professional.",
    h1: "Bathroom Leakage",
    subtitle:
      "A bathroom leak finds its way to the room below. Renovix finds the source, re-waterproofs the wet area and stops the damage.",
    whatItMeans: [
      "Bathroom leakage is water escaping from a bathroom's wet area — the floor, walls, shower or toilet — and travelling through the structure to a room below or an adjacent wall. It often appears as a stain or damp patch on the ceiling below, a soft wall, or a musty smell. Because the tiles look fine on the surface, bathroom leakage can go unnoticed until more serious damage has occurred.",
      "Bathroom leakage is usually caused by a failed or absent waterproofing membrane, water seeping through cracked grout or a hollow tile, or a leak from a concealed pipe or fitting. In an apartment or condo, this can affect the neighbour below, which makes it important to address promptly. A proper fix involves finding the source, renewing the waterproofing and retiling or repairing the affected surface.",
    ],
    commonCauses: [
      "A failed or absent waterproofing membrane beneath the bathroom tiles.",
      "Water seeping through cracked, missing or unsealed grout.",
      "A hollow or cracked tile with a gap for water to travel.",
      "A leak from a concealed pipe, trap or toilet fitting.",
      "Waterproofing that only covers the floor, not the wet walls.",
      "A shower area that was never properly waterproofed.",
    ],
    warningSigns: [
      "A stain or damp patch on the ceiling below the bathroom.",
      "A musty smell, mould or peeling paint on a nearby wall.",
      "Water pooling on the floor or slow drainage in the bathroom.",
      "Tiles that sound hollow or lift around the wet area.",
    ],
    solutions: [
      {
        title: "Trace the leak",
        description:
          "We find where the water is coming from — through the tiles, a failed membrane or a pipe.",
      },
      {
        title: "Re-waterproof the wet area",
        description:
          "We strip back the affected surface, renew the waterproofing membrane and retile where needed.",
      },
      {
        title: "Repair the tiles and grout",
        description:
          "Damaged tiles are repaired and the grout renewed and sealed so the surface is watertight.",
      },
      {
        title: "Fix a plumbing source",
        description:
          "Where a concealed pipe or fitting is the cause, we coordinate with plumbing to repair it.",
      },
    ],
    whenToCall: [
      "There is a stain on the ceiling below the bathroom.",
      "You notice a damp smell, mould or soft patches on a wall.",
      "The bathroom floor is not draining or tiles are hollowing.",
      "You live in a condo and a leak may affect the unit below.",
    ],
    relatedServiceNote:
      "Bathroom leakage is a waterproofing issue, coordinated with tiling and plumbing. Renovix handles all three through a single team.",
    processTitle: "How We Stop Bathroom Leakage",
    processIntro:
      "Stopping bathroom leakage means sealing the wet area properly. Here is the process.",
    processSteps: [
      {
        title: "Locate the leak",
        description:
          "We inspect the bathroom and trace the water to its source.",
      },
      {
        title: "Repair the source",
        description:
          "We fix the failed membrane, grout, tile or the pipe causing the leak.",
      },
      {
        title: "Re-waterproof the area",
        description:
          "A fresh waterproofing membrane is applied across the wet area so it is watertight.",
      },
      {
        title: "Retile and seal",
        description:
          "Tiles are reinstalled and grouted with sealed joints to complete the fix.",
      },
    ],
    propertyTypesIntro:
      "Bathroom leakage is most common in condos and apartments, where a leak can affect neighbours below, and in homes with older wet areas.",
    faqs: [
      {
        question: "Why does the ceiling below my bathroom stain when the bathroom looks fine?",
        answer:
          "Water can pass through grout joints, a hollow tile or a failed membrane behind intact tiles. The surface can look fine while moisture is travelling through it.",
      },
      {
        question: "Does bathroom leakage always require re-tiling?",
        answer:
          "Not always. Sometimes the leak is from a specific point and can be repaired locally. Where the membrane has failed, the affected area needs to be re-waterproofed, which may involve removing some tiles.",
      },
      {
        question: "How long does bathroom waterproofing take?",
        answer:
          "It depends on the size of the area and how much needs to be reopened. A bathroom re-waterproofing is usually a multi-day job including drying and curing time.",
      },
      {
        question: "Can I just reseal the grout to stop a bathroom leak?",
        answer:
          "If the leak is through the grout, resealing can help. If the membrane has failed, it will only slow the problem, and the membrane usually needs to be renewed.",
      },
      {
        question: "I live in a condo — what if the leak is from the bathroom of the unit above?",
        answer:
          "If the leak is from the unit above, it is usually a coordination matter with that unit and the management. We can assess the source and advise on the next steps.",
      },
    ],
    relatedProblems: [
      "water-seepage-through-tiles",
      "bathroom-tile-problems",
      "toilet-problems",
      "water-stains",
    ],
  },
  {
    ...waterproofingBase,
    slug: "balcony-leakage",
    name: "Balcony Leakage",
    title: "Balcony Leakage in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Balcony leakage in Kuala Lumpur & Selangor — water seeping through balcony floor to a room below, stained ceilings and failed membranes. Learn causes, warning signs, solutions and when to call a professional.",
    h1: "Balcony Leakage",
    subtitle:
      "A wet balcony that leaks through to the floor below is a waterproofing problem. Renovix seals it properly and protects the rooms beneath.",
    whatItMeans: [
      "Balcony leakage is water from a balcony floor that finds its way through to the space below — into the room or the ceiling below. Balconies are exposed to heavy rain, sun and temperature swings, which is hard on any waterproofing. Over time, the membrane can fail, the tiles can hollow, or the edge and drains can develop gaps, and water filters through to the floor below.",
      "Balcony leakage is common in apartments and condos, where a balcony sits above another unit, and in landed homes where a balcony can be above a living area. Because a balcony is a wet area exposed to the elements, the fix is about a durable waterproofing system, sound tiles and a properly sealed edge and drain. Simply resealing the surface often is not enough if the membrane has failed.",
    ],
    commonCauses: [
      "A failed or ageing waterproofing membrane on the balcony floor.",
      "Cracked or hollow tiles letting water get through to the slab.",
      "A gap or crack at the balcony edge, skirting or parapet.",
      "A blocked or poorly sealed floor drain allowing water to pool.",
      "Sun exposure and thermal movement breaking down the sealant and membrane.",
      "Poor original tiling or waterproofing when the balcony was finished.",
    ],
    warningSigns: [
      "A stain or damp patch on the ceiling or wall below the balcony.",
      "Water pooling on the balcony floor or slow drainage.",
      "Tiles that are hollow, loose or cracking on the balcony.",
      "A damp smell or mould appearing in the room below.",
    ],
    solutions: [
      {
        title: "Trace the leak",
        description:
          "We identify where water is entering the balcony surface and how it reaches the floor below.",
      },
      {
        title: "Re-waterproof the balcony",
        description:
          "The surface is prepared and a durable waterproofing membrane applied, including the edges and drains.",
      },
      {
        title: "Repair tiles and sealant",
        description:
          "Hollow or cracked tiles are repaired and the joints, edges and skirting sealed.",
      },
      {
        title: "Fix the drain",
        description:
          "The balcony drain is checked and cleared so water flows away rather than pooling and seeping through.",
      },
    ],
    whenToCall: [
      "There is a stain or damp patch below the balcony.",
      "Water is pooling on the balcony or draining slowly.",
      "Balcony tiles are hollow, loose or cracking.",
      "A balcony above a living area keeps leaking.",
    ],
    relatedServiceNote:
      "Balcony leakage is a waterproofing job. We coordinate with tiling to repair the surface and with renovation for any interior repair.",
    processTitle: "How We Fix Balcony Leakage",
    processIntro:
      "A balcony needs a watertight surface and a working drain. Here is the approach.",
    processSteps: [
      {
        title: "Inspect the balcony",
        description:
          "We check the membrane, tiles, edges, skirting and drain to find the entry point.",
      },
      {
        title: "Repair the surface",
        description:
          "Hollow or cracked tiles are repaired and the substrate prepared.",
      },
      {
        title: "Apply waterproofing",
        description:
          "A durable membrane is applied across the balcony, including the edges and around the drain.",
      },
      {
        title: "Seal and finish",
        description:
          "The joints and edges are sealed, the drain cleared, and the surface finished to match.",
      },
    ],
    propertyTypesIntro:
      "Balcony leakage is common in condos and apartments where a balcony sits above another unit, and in landed homes with an upper balcony.",
    faqs: [
      {
        question: "Why is there a stain on the ceiling below my balcony?",
        answer:
          "That is usually water seeping through the balcony floor, often from a failed membrane or hollow tiles. The entry point needs to be found and the balcony re-waterproofed.",
      },
      {
        question: "Can I reseal the balcony tiles instead of re-waterproofing?",
        answer:
          "If the membrane is sound, resealing the joints and edges can help. If the membrane has failed, resealing only slows the leak and the membrane needs renewing.",
      },
      {
        question: "Why do balcony tiles crack and hollow?",
        answer:
          "Balconies are exposed to sun, rain and temperature swings, which makes tiling harsher than indoors. Hollow tiles let water reach the membrane and slab beneath.",
      },
      {
        question: "How long does balcony waterproofing last?",
        answer:
          "A quality membrane, properly applied and maintained, can last many years. Balconies are exposed to harsh weather, so the membrane and sealant will need periodic attention.",
      },
      {
        question: "Does a balcony leak affect the unit below?",
        answer:
          "Yes, that is the most common way a balcony leak is noticed. It is worth fixing promptly to avoid damaging the neighbour's ceiling and the property.",
      },
    ],
    relatedProblems: [
      "bathroom-leakage",
      "roof-leakage",
      "water-seepage-through-tiles",
      "hollow-tile-problems",
    ],
  },
  {
    ...waterproofingBase,
    slug: "wall-seepage",
    name: "Wall Seepage",
    title: "Wall Seepage in Kuala Lumpur & Selangor | Wall Waterproofing",
    metaDescription:
      "Wall seepage in Kuala Lumpur & Selangor — water soaking through walls, damp patches and mould. Learn the causes, warning signs, wall waterproofing and sealing solutions, and when to call a professional.",
    h1: "Wall Seepage",
    subtitle:
      "Water migrating through a wall is what causes damp and mould. Renovix finds the side the water is coming from and seals it properly.",
    whatItMeans: [
      "Wall seepage is water soaking through a wall from one side to the other, causing a damp patch, bubbling paint, or mould on the interior surface. It can come through an external wall from rain, from a neighbouring property, from a crack in the masonry, or from moisture travelling horizontally through the structure. In a terrace house, a shared wall can transmit water from a leaking bathroom or a damp room on the other side.",
      "Wall seepage is often mistaken for a paint problem, but the underlying issue is water movement through the wall. Painting over a damp wall simply hides it and the problem recurs. The right fix finds where the water is entering and applies a barrier — whether a waterproofing membrane, a sealant, an injection or a repair to the source — so the wall stays dry.",
    ],
    commonCauses: [
      "Rain driving against an external wall and soaking through the masonry.",
      "A crack or failed joint in the wall letting water in.",
      "Water from a leak or damp area on the other side of a shared wall.",
      "A rising damp situation from the ground or a failed damp course.",
      "Poor drainage next to the wall keeping the base wet.",
      "Hydrostatic pressure pushing water through the wall from outside.",
    ],
    warningSigns: [
      "A damp patch, bubbling paint or peeling on an interior wall.",
      "Mould or a musty smell growing on the wall surface.",
      "A stain that spreads or darkens after rain.",
      "Water appearing on the wall near a shared or external boundary.",
    ],
    solutions: [
      {
        title: "Identify which side the water is coming from",
        description:
          "We assess the wall and its surroundings to determine whether the seepage is from outside, a leak or rising damp.",
      },
      {
        title: "Repair the source",
        description:
          "We fix the crack, leak or drainage issue that is feeding the wall.",
      },
      {
        title: "Apply a waterproofing barrier",
        description:
          "A membrane, sealant or injection is applied to the wall to block the water path.",
      },
      {
        title: "Repair and repaint the interior",
        description:
          "Once the wall is dry, the interior surface is repaired and repainted so it is clean.",
      },
    ],
    whenToCall: [
      "A damp patch or stain on a wall keeps returning.",
      "A shared wall is showing moisture or mould.",
      "The wall is wet after rain or from a neighbouring source.",
      "You want the wall sealed before painting or renovating.",
    ],
    relatedServiceNote:
      "Wall seepage is a waterproofing issue. We coordinate with painting to repair the interior and with renovation where the source is a structural concern.",
    processTitle: "How We Stop Wall Seepage",
    processIntro:
      "Stopping wall seepage means blocking the path the water takes. Here is the approach.",
    processSteps: [
      {
        title: "Assess the wall",
        description:
          "We check the wall, the source of the water and any cracks or drainage issues.",
      },
      {
        title: "Repair the source",
        description:
          "We address the crack, leak or drainage problem feeding the wall.",
      },
      {
        title: "Seal or waterproof",
        description:
          "We apply a waterproofing barrier to stop the water from reaching the interior.",
      },
      {
        title: "Repair and repaint",
        description:
          "The interior wall is repaired and repainted once the seepage is stopped.",
      },
    ],
    propertyTypesIntro:
      "Wall seepage is most common in terrace houses with shared walls and in homes where external walls face heavy rain.",
    faqs: [
      {
        question: "Why does my wall feel damp even when there is no leak?",
        answer:
          "This is often seepage from outside — rain soaking through the wall, or moisture coming from a neighbouring area or from the ground. We identify which side the water is on.",
      },
      {
        question: "Can I paint over a damp wall?",
        answer:
          "No. Painting over a damp wall hides it briefly, but the moisture keeps coming through and the paint will bubble or peel. The seepage needs to be stopped first.",
      },
      {
        question: "Why does a shared wall get wet?",
        answer:
          "A shared wall can transmit moisture from the other side, whether from a leak, a damp room or poor drainage. We assess both sides where possible.",
      },
      {
        question: "What is the best way to stop wall seepage?",
        answer:
          "The best approach is to find and repair the source, then apply a waterproofing barrier. The right barrier depends on whether the water comes from outside, a leak or rising damp.",
      },
      {
        question: "Is wall seepage a structural problem?",
        answer:
          "Seepage itself is usually a moisture issue, but if it has been present for a long time it can lead to structural damage. It is worth addressing early.",
      },
    ],
    relatedProblems: [
      "damp-walls",
      "mouldy-walls",
      "water-stains",
      "roof-leakage",
    ],
  },
  {
    ...waterproofingBase,
    slug: "damp-walls",
    name: "Damp Walls",
    title: "Damp Wall Treatment in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Damp walls in Kuala Lumpur & Selangor — moisture, condensation and rising damp causing mould, peeling paint and stains. Learn the causes, warning signs, treatment solutions and when to call a professional.",
    h1: "Damp Walls",
    subtitle:
      "A damp wall is a persistent moisture problem. Renovix finds the reason it stays wet and treats the wall so it dries out for good.",
    whatItMeans: [
      "A damp wall is a wall that retains moisture — it feels cool or damp to the touch, shows a dark or discoloured patch, or develops mould and peeling paint. Damp can come from condensation, from water moving through the wall, or from rising damp at the base. It is a chronic condition, meaning it does not simply dry out, and it often gets worse over time as the moisture encourages mould and damages the plaster.",
      "Damp walls are common in Malaysian homes, particularly in bathrooms, kitchens and lower floors, and in homes with poor ventilation. The moisture can be from a leak, from rain soaking through an external wall, from condensation in a humid room, or from ground moisture rising. Treating damp requires identifying the type and source, improving the wall's protection, and only then repairing and repainting the surface.",
    ],
    commonCauses: [
      "Condensation from humidity and poor ventilation, especially in bathrooms.",
      "Water moving in through an external or shared wall.",
      "Rising damp at the base of a wall without a damp course.",
      "A leak from a pipe, roof or fixture feeding moisture into the wall.",
      "Poor drainage or water pooling against the base of a wall.",
      "A wall that was never properly waterproofed or sealed.",
    ],
    warningSigns: [
      "A wall that feels damp, cool or dark to the touch.",
      "Mould, mildew or a musty smell on the wall.",
      "Peeling, bubbling or stained paint on a persistent patch.",
      "A damp patch near the base of a wall or near a wet area.",
    ],
    solutions: [
      {
        title: "Identify the type of damp",
        description:
          "We determine whether the damp is from condensation, penetrating water or rising damp, as each needs a different treatment.",
      },
      {
        title: "Remove the moisture source",
        description:
          "We address the leak, ventilation, drainage or damp course issue causing the problem.",
      },
      {
        title: "Treat and waterproof the wall",
        description:
          "We apply the appropriate treatment or waterproofing to keep the wall dry.",
      },
      {
        title: "Repair and repaint",
        description:
          "The damaged plaster is repaired and the wall repainted with a moisture-resistant finish.",
      },
    ],
    whenToCall: [
      "A wall stays damp despite your efforts to dry it.",
      "Mould keeps growing on a wall after cleaning.",
      "A damp patch is spreading or accompanied by a leak.",
      "The damp is at the base of a wall and you suspect rising damp.",
    ],
    relatedServiceNote:
      "Damp wall treatment is a waterproofing job, coordinated with painting to complete the surface repair.",
    processTitle: "How We Treat Damp Walls",
    processIntro:
      "Treating a damp wall means stopping the moisture, not just drying it. Here is the process.",
    processSteps: [
      {
        title: "Assess the damp",
        description:
          "We inspect the wall and identify whether the moisture is condensation, penetration or rising damp.",
      },
      {
        title: "Repair the source",
        description:
          "We fix the leak, improve ventilation or correct the drainage issue feeding the wall.",
      },
      {
        title: "Treat and waterproof",
        description:
          "We apply the right treatment to make the wall resist moisture.",
      },
      {
        title: "Repair and repaint",
        description:
          "The surface is repaired and repainted with a finish that resists damp.",
      },
    ],
    propertyTypesIntro:
      "Damp walls are common in older homes, and in bathrooms and lower floors where moisture is concentrated.",
    faqs: [
      {
        question: "Is a damp wall the same as a leak?",
        answer:
          "Not always. A leak is a direct source of water, while damp can also come from condensation, rain soaking through the wall or rising ground moisture. We identify which type it is.",
      },
      {
        question: "How do I stop condensation on a wall?",
        answer:
          "Improve ventilation, reduce humidity with an extractor or dehumidifier, and use a moisture-resistant finish. Treating the wall alone is not enough if the room stays humid.",
      },
      {
        question: "What is rising damp?",
        answer:
          "Rising damp is ground moisture moving up through a wall, often where there is no damp course. It usually appears near the base of a wall and needs a specific treatment.",
      },
      {
        question: "Can a damp wall be fixed permanently?",
        answer:
          "Yes, if the moisture source is found and stopped and the wall is correctly treated. The key is addressing the cause rather than just the symptoms.",
      },
      {
        question: "Why does paint peel on a damp wall?",
        answer:
          "Water behind the paint lifts the film and causes bubbling and peeling. The underlying damp needs to be stopped before repainting will last.",
      },
    ],
    relatedProblems: [
      "wall-seepage",
      "mouldy-walls",
      "water-stains",
      "peeling-paint",
    ],
  },
  {
    ...waterproofingBase,
    slug: "water-stains",
    name: "Water Stains",
    title: "Water Stain Removal in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Water stains on walls or ceilings in Kuala Lumpur & Selangor — yellow-brown marks and recurring discolouration. Learn the causes, warning signs, the right treatment and when to call a waterproofing professional.",
    h1: "Water Stains",
    subtitle:
      "A water stain is a moisture mark that should be traced, not just painted over. Renovix finds the cause and restores a clean surface.",
    whatItMeans: [
      "A water stain is a discolouration left on a wall or ceiling by moisture. It usually appears as a yellow-brown, ring-shaped or spreading mark, but can also be a darker damp patch. The stain is a remnant of water that has soaked into the surface, staining it as it dries. A water stain can be old and inactive, or active — still growing because there is a live leak feeding it.",
      "Water stains are a common sign of a leak, seepage or condensation problem. Painting over a stain without finding the cause is not a lasting fix, because the moisture will continue to feed it and, in time, the stain will bleed through or the paint will bubble. Because water can come from a roof, a pipe, a wall or a fixture, a stain is most reliably solved by tracing the source and treating the surface correctly.",
    ],
    commonCauses: [
      "A slow leak from a roof, pipe or fitting above the stained surface.",
      "Seepage through an external or shared wall after rain.",
      "Condensation and humidity causing damp patches.",
      "A failed waterproofing membrane allowing water through.",
      "Old stains that were never correctly treated and painted over.",
      "Leaks from a bathroom, toilet or wet area on the other side.",
    ],
    warningSigns: [
      "A yellow-brown or dark mark that keeps growing.",
      "The stain darkens after rain or heavy use of a room above.",
      "A stain with bubbling, peeling or a soft patch of paint.",
      "Multiple stains appearing across a wall or ceiling.",
    ],
    solutions: [
      {
        title: "Identify the type of stain",
        description:
          "We determine whether the stain is active or old and what kind of moisture created it.",
      },
      {
        title: "Find and stop the source",
        description:
          "We trace the leak or seepage causing the stain and coordinate the repair before treating the surface.",
      },
      {
        title: "Treat and seal the stain",
        description:
          "The stain is treated or sealed with a stain blocker so it cannot bleed through the new paint.",
      },
      {
        title: "Repaint the area",
        description:
          "The surface is repainted and matched so the stain is no longer visible.",
      },
    ],
    whenToCall: [
      "A stain keeps growing or returning after you paint over it.",
      "The stain is accompanied by a leak, a smell or a soft patch.",
      "Stains appear in several places across the home.",
      "You want to treat a stain properly before repainting.",
    ],
    relatedServiceNote:
      "Water stain treatment is handled by our waterproofing team with painting to complete the surface repair. Where a leak is the cause, we coordinate with plumbing.",
    processTitle: "How We Treat Water Stains",
    processIntro:
      "Treating a water stain correctly means stopping the source before sealing it. Here is the process.",
    processSteps: [
      {
        title: "Assess the stain",
        description:
          "We look at the stain and check whether it is active, old or from a specific moisture source.",
      },
      {
        title: "Stop the source",
        description:
          "We locate the leak or seepage and coordinate the repair so the water stops.",
      },
      {
        title: "Treat and seal",
        description:
          "The stain is treated or sealed so it will not bleed through the new finish.",
      },
      {
        title: "Repaint the surface",
        description:
          "The area is repainted and blended to restore a clean, even look.",
      },
    ],
    propertyTypesIntro:
      "Water stains affect every property type, most often on ceilings below a wet area and on walls prone to seepage.",
    faqs: [
      {
        question: "Can I just paint over a water stain?",
        answer:
          "Painting directly over a water stain rarely works — it will bleed back through or the paint will bubble. A stain blocker and stopping the moisture source give a lasting result.",
      },
      {
        question: "Why does my water stain keep coming back?",
        answer:
          "That means the moisture feeding it is still present. The leak or seepage needs to be found and stopped before the stain is treated.",
      },
      {
        question: "Are water stains always an active leak?",
        answer:
          "Some stains are old and inactive, but many are the sign of a slow, ongoing leak. We check whether the moisture is still coming through before deciding on the fix.",
      },
      {
        question: "How can I tell if a stain is active?",
        answer:
          "An active stain tends to grow, darken or spread after rain or after the room above is used. It may also feel slightly damp or have a musty smell.",
      },
      {
        question: "Should I fix the stain before or after waterproofing?",
        answer:
          "After the cause is fixed. The right order is to stop the water source, then treat and repaint the stain, so it does not simply recur.",
      },
    ],
    relatedProblems: [
      "damp-walls",
      "wall-seepage",
      "ceiling-stains",
      "mouldy-walls",
    ],
  },
];
