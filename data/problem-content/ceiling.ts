import type { ProblemDetail, ProblemPropertyType } from "./types";

const ceilingPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Terrace House",
    note: "Ceiling repair, replacement and water-damage work for landed homes.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Larger ceiling scopes and replacement of plaster ceilings in bigger homes.",
  },
  {
    label: "Condominium",
    note: "Ceiling repairs within a unit, coordinated with management on shared authorities.",
  },
  {
    label: "Apartment",
    note: "Ceiling fixes and water-damage repairs for apartment units.",
  },
  {
    label: "Shop & Office",
    note: "Ceiling and partition work for offices and retail spaces.",
  },
  {
    label: "New Homes",
    note: "Fixing ceiling defects and cracking before a new home is moved into.",
  },
];

const ceilingAreasNote =
  "Ceiling repair and installation are available across Kuala Lumpur, Selangor and the wider Klang Valley, from new false ceilings to water-damage repairs.";

const ceilingBase = {
  category: "ceiling" as const,
  relatedService: "ceiling-partition",
  relatedServices: ["general-renovation", "waterproofing", "painting", "electrical"],
  propertyTypes: ceilingPropertyTypes,
  areasNote: ceilingAreasNote,
};

export const ceilingProblems: ProblemDetail[] = [
  {
    ...ceilingBase,
    slug: "cracked-ceiling",
    name: "Cracked Ceiling",
    title: "Cracked Ceiling Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Cracked ceilings in Kuala Lumpur & Selangor — hairline cracks, drops and plaster cracks repaired. Learn the causes, warning signs, repair solutions and when to call a professional.",
    h1: "Cracked Ceiling",
    subtitle:
      "A cracked ceiling can spread or, in the worst case, give way. Renovix repairs ceiling cracks and tells you when to replace the board.",
    whatItMeans: [
      "A cracked ceiling is a break in the finish of the ceiling — most often in plasterboard (drywall) or a plaster ceiling. Cracks range from fine hairline cracks that appear with age and movement, to wider cracks along the board joints. In many homes, hairline cracks are a natural result of the building settling or the ceiling framing moving slightly. Wider or growing cracks, and cracks that are accompanied by sagging or a water stain, need more attention.",
      "Ceiling cracks are worth fixing for safety as well as appearance. A crack can widen and allow a section of the ceiling to drop, especially if there is a water issue or an old, weakened board. Cracks also let dust and, in a wet area, moisture into the space above the ceiling. Understanding which cracks are cosmetic and which need investigation is the key first step.",
    ],
    commonCauses: [
      "Settling and movement of the building over time.",
      "The ceiling framing shrinking or moving slightly.",
      "Jointing compound that was too thin or dried too quickly.",
      "Movement at a junction between the ceiling and a wall.",
      "Water damage or moisture that weakens the board and causes it to sag or crack.",
      "An old ceiling that has become brittle with age.",
    ],
    warningSigns: [
      "A crack that is growing wider or longer over time.",
      "A crack accompanied by a water stain or a bulging patch.",
      "A crack near a joint that opens at the corner or edge.",
      "A section of ceiling that looks like it is starting to sag.",
    ],
    solutions: [
      {
        title: "Assess the crack",
        description:
          "We identify whether the crack is cosmetic causes or points to movement or a water problem.",
      },
      {
        title: "Repair the joint or board",
        description:
          "Hairline cracks are filled and finished; wider cracks or joint failures are repaired or the board is replaced.",
      },
      {
        title: "Address a water issue",
        description:
          "Where a stain or sagging is present, we coordinate with waterproofing to fix the source before repairing the ceiling.",
      },
      {
        title: "Refinish and repaint",
        description:
          "The repaired area is finished smooth and repainted so the ceiling looks clean and even.",
      },
    ],
    whenToCall: [
      "A ceiling crack is widening or you see several in a pattern.",
      "The crack is accompanied by sagging, a stain or a bulge.",
      "A section of the ceiling is beginning to drop.",
      "The ceiling is old and you are concerned about its condition.",
    ],
    relatedServiceNote:
      "Cracked ceiling repair is handled by our ceiling and partition team. Where water is involved, we coordinate with waterproofing.",
    processTitle: "How We Repair a Cracked Ceiling",
    processIntro:
      "Repairing a cracked ceiling is about a sound board, not just a skim of filler. Here is the approach.",
    processSteps: [
      {
        title: "Inspect the crack and board",
        description:
          "We check the type and extent of the crack and the condition of the board beneath.",
      },
      {
        title: "Repair or replace",
        description:
          "We reinforce and finish the joint, or replace the board if it is compromised.",
      },
      {
        title: "Skim and finish",
        description:
          "The repaired area is skimmed and sanded so it is smooth and flush.",
      },
      {
        title: "Paint and hand over",
        description:
          "The ceiling is repainted to match, and the area is left clean.",
      },
    ],
    propertyTypesIntro:
      "Cracked ceilings affect every property type. Older plaster ceilings and homes that are still settling are most prone.",
    faqs: [
      {
        question: "Are ceiling cracks normal?",
        answer:
          "Fine hairline cracks are very common and often cosmetic, caused by the building settling. The concern is when a crack is growing, sagging or accompanied by a water stain.",
      },
      {
        question: "Can a cracked ceiling fall down?",
        answer:
          "A small hairline crack is unlikely to cause a collapse, but a wider crack or a sagging section could indicate a board that is weakening. It is worth having it checked.",
      },
      {
        question: "Why do cracks form along the ceiling joints?",
        answer:
          "Joint lines are the weakest point in a plasterboard ceiling. Movement or drying can open the joint, which is why we reinforce these when repairing.",
      },
      {
        question: "Should I repair ceiling cracks before repainting?",
        answer:
          "Yes. Painting over an open crack will hide it briefly, but it will re-appear. Repairing the crack and finishing it before painting is the lasting fix.",
      },
      {
        question: "Is a ceiling crack related to the crack on the wall?",
        answer:
          "Sometimes, if both are caused by the same movement or settling. We assess the whole area to see whether a single cause or separate repairs are needed.",
      },
    ],
    relatedProblems: [
      "sagging-ceiling",
      "water-damaged-ceiling",
      "old-plaster-ceiling",
      "cracked-walls",
    ],
  },
  {
    ...ceilingBase,
    slug: "sagging-ceiling",
    name: "Sagging Ceiling",
    title: "Sagging Ceiling Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A sagging, drooping or bowing ceiling in Kuala Lumpur & Selangor? Learn the causes, warning signs, repair and replacement solutions, and when to call a professional urgently.",
    h1: "Sagging Ceiling",
    subtitle:
      "A sagging ceiling is a safety warning. Renovix finds why the ceiling is drooping and repairs or replaces it before it fails.",
    whatItMeans: [
      "A sagging ceiling is one that droops, bows or dips visibly below its normal level. This is different from a small crack: it is a change in the shape of the ceiling, and it is usually a sign that the board or its support is failing. Sagging can affect a small patch or a whole section, and it should be taken seriously because a ceiling that sags can continue to drop until a section falls.",
      "The most common causes of a sagging ceiling are water pooling on top of the board or behind it, a board that is unsupported over a span, or an old ceiling whose fixing has weakened. In a home with a roof leak, water can soak into the joists and board, increasing its weight and causing it to droop. A sagging ceiling should be assessed rather than left, especially if it is accompanied by a water stain or a bulge.",
    ],
    commonCauses: [
      "Water pooling on or behind the board, often from a leaking roof or pipe.",
      "A board that was not properly supported over a long span.",
      "Old or failing fixings that can no longer hold the ceiling.",
      "A heavy ceiling, such as an old plaster ceiling, losing strength with age.",
      "The board softening from moisture or prolonged humidity.",
      "Weight from insulation, lighting or other loads pulling the board down.",
    ],
    warningSigns: [
      "A visible bow, dip or sag in the ceiling.",
      "A bulge or stain that grows over time.",
      "A crack forming around the edge of the sagging area.",
      "Powder or chunks of plaster falling, or the ceiling feeling spongy.",
    ],
    solutions: [
      {
        title: "Assess the extent and cause",
        description:
          "We check what is causing the sag — water, support, or age — and how much of the ceiling is affected.",
      },
      {
        title: "Fix the water source",
        description:
          "Where a leak is the cause, we coordinate with waterproofing or plumbing to stop it before the ceiling is repaired.",
      },
      {
        title: "Repair or replace the ceiling",
        description:
          "A small sag may be fixed by reinforcing the board; a large or water-damaged sag usually needs the section replaced.",
      },
      {
        title: "Reinstall and finish",
        description:
          "The replacement ceiling is installed, finished and painted to match the rest of the room.",
      },
    ],
    whenToCall: [
      "A ceiling is visibly sagging or bowing.",
      "There is a bulge or a water stain behind the sag.",
      "A section of ceiling is drooping and powder is falling.",
      "You are concerned the ceiling could give way.",
    ],
    relatedServiceNote:
      "Sagging ceiling repair is a ceiling and partition job. Where a leak is the cause, we coordinate with waterproofing and plumbing.",
    processTitle: "How We Fix a Sagging Ceiling",
    processIntro:
      "A sagging ceiling needs the cause addressed and the board made sound. Here is the process.",
    processSteps: [
      {
        title: "Assess the ceiling",
        description:
          "We inspect the sag, its extent and likely cause, including any water or support problems.",
      },
      {
        title: "Address the source",
        description:
          "We fix any water source or support issue before replacing the ceiling.",
      },
      {
        title: "Replace the affected section",
        description:
          "The sagging board is removed and replaced with new, properly supported board.",
      },
      {
        title: "Finish and paint",
        description:
          "The new ceiling is finished and painted to blend with the room.",
      },
    ],
    propertyTypesIntro:
      "Sagging ceilings are most common in older homes and areas with a history of roof leakage, across all property types.",
    faqs: [
      {
        question: "Is a sagging ceiling an emergency?",
        answer:
          "A visibly sagging ceiling should be addressed promptly. It can continue to drop, and if water is involved it can fail suddenly. It is best to have it assessed.",
      },
      {
        question: "What causes a ceiling to sag?",
        answer:
          "The most common cause is water pooling on or behind the board. It can also be from a board that is unsupported over too long a span, or an old ceiling with weakened fixings.",
      },
      {
        question: "Can a sagging ceiling be repaired, or does it need replacing?",
        answer:
          "A small sag from a minor support issue can sometimes be repaired and reinforced. A larger or water-damaged sag usually needs the section replaced.",
      },
      {
        question: "Will the sag get worse over time?",
        answer:
          "Often yes. As the board weakens or more water pools, the sag tends to worsen. That is why it is best to address it rather than wait.",
      },
      {
        question: "Should I be concerned about ceiling sag in a bathroom?",
        answer:
          "Yes. A bathroom ceiling is exposed to humidity and, in some units, a leaking pipe or shower above. Sagging there often signals water intrusion that should be checked.",
      },
    ],
    relatedProblems: [
      "water-damaged-ceiling",
      "cracked-ceiling",
      "old-plaster-ceiling",
      "ceiling-stains",
    ],
  },
  {
    ...ceilingBase,
    slug: "water-damaged-ceiling",
    name: "Water-Damaged Ceiling",
    title: "Water-Damaged Ceiling in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Water damage on a ceiling in Kuala Lumpur & Selangor — stains, bubbling, sagging and leaking roofs or pipes. Learn the causes, warning signs, repair solutions and when to call a professional.",
    h1: "Water-Damaged Ceiling",
    subtitle:
      "Water damage on a ceiling signals a leak above. Renovix finds the source, repairs the damage and stops it recurring.",
    whatItMeans: [
      "A water-damaged ceiling is one that has been affected by water coming from above — from a leaking roof, a burst or leaking pipe, a plumbing fixture above, or water pooling on the ceiling slab. The damage can show as a yellow-brown stain, bubbling or peeling paint, a soft or spongy patch, or in the worst case a sagging or dropping section. Because the ceiling hides the space above it, a small stain can be the first visible sign of a bigger leak.",
      "Water damage should be addressed quickly for two reasons. First, the leak itself can damage the structure, wiring and the ceiling board. Second, the longer the water sits, the more it spreads and the more expensive the repair becomes. In a multi-storey home or a condominium, a ceiling leak may also come from the unit above or from the roof, so tracing the source accurately is essential.",
    ],
    commonCauses: [
      "A leaking or damaged roof allowing rainwater through.",
      "A leaking pipe, gutter or water tank above the ceiling.",
      "A plumbing fixture or aircond leak in the space above.",
      "Water pooling on a flat roof or slab and seeping through.",
      "A leaking shower or bathroom unit above a ceiling.",
      "Condensation or long-term dampness in the ceiling cavity.",
    ],
    warningSigns: [
      "A brown, yellow or dark stain appearing on the ceiling.",
      "Paint bubbling, peeling or cracking around the stain.",
      "A soft, spongy or bulging patch on the ceiling.",
      "A drips or a musty smell, or a section that starts to sag.",
    ],
    solutions: [
      {
        title: "Locate and stop the leak",
        description:
          "We trace the moisture back to the source — a roof, pipe or fixture — and coordinate the repair before touching the ceiling.",
      },
      {
        title: "Repair the damaged ceiling",
        description:
          "The affected board is cut out and replaced, or repaired if the damage is limited, then finished.",
      },
      {
        title: "Address any mould",
        description:
          "If the damp area has developed mould, we treat it as part of the repair to keep the room healthy.",
      },
      {
        title: "Refinish and repaint",
        description:
          "The repaired ceiling is finished and repainted so it is clean and even.",
      },
    ],
    whenToCall: [
      "There is a visible water stain or a dripping ceiling.",
      "The ceiling is soft, bulging or starting to sag.",
      "A leak returns after you have fixed the stain.",
      "You need the source traced — especially if it may come from a neighbouring unit.",
    ],
    relatedServiceNote:
      "Water-damaged ceiling repair is handled by our ceiling team, coordinating with waterproofing and plumbing to fix the source.",
    processTitle: "How We Repair a Water-Damaged Ceiling",
    processIntro:
      "Repairing a water-damaged ceiling starts with the source. Here is the approach.",
    processSteps: [
      {
        title: "Trace the water source",
        description:
          "We identify where the water is coming from before any ceiling work is done.",
      },
      {
        title: "Stop the leak",
        description:
          "We coordinate the repair of the roof, pipe or fixture that is leaking.",
      },
      {
        title: "Repair the ceiling",
        description:
          "The damaged board is cut out and replaced, then finished flush.",
      },
      {
        title: "Repaint the area",
        description:
          "The repaired section is primed and repainted to match the ceiling.",
      },
    ],
    propertyTypesIntro:
      "Water-damaged ceilings affect every property type. They are especially common in top-floor homes and condos with a unit or roof above.",
    faqs: [
      {
        question: "Why has a brown stain appeared on my ceiling?",
        answer:
          "A brown or yellow stain is usually water marking from a leak above. It is worth finding the source, because the water will keep coming through and the damage will spread.",
      },
      {
        question: "Do I need to fix the leak or the ceiling first?",
        answer:
          "The leak first. Repairing the ceiling while water is still coming through simply leads to repeat damage. We trace and stop the source, then repair the ceiling.",
      },
      {
        question: "Can a water-damaged ceiling be repaired without replacing it?",
        answer:
          "If the damage is a small stain with a sound board, it can sometimes be treated and repainted. If the board is soft, bulging or sagging, it usually needs to be replaced.",
      },
      {
        question: "Is a ceiling leak the responsibility of the unit above?",
        answer:
          "It depends on where the leak originates and the building's rules. We can assess the source and advise on how to coordinate with the management or the other unit.",
      },
      {
        question: "How quickly should I act on a ceiling leak?",
        answer:
          "The sooner the better. A small stain can quickly become a sagging ceiling or a mould problem, and the source may worsen. Acting early limits the damage.",
      },
    ],
    relatedProblems: [
      "sagging-ceiling",
      "ceiling-stains",
      "cracked-ceiling",
      "roof-leakage",
    ],
  },
  {
    ...ceilingBase,
    slug: "ceiling-stains",
    name: "Ceiling Stains",
    title: "Ceiling Stain Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Stained ceiling in Kuala Lumpur & Selangor — water marks, yellowing and discolouration repaired. Learn the causes, warning signs, the right treatment and when to call a professional.",
    h1: "Ceiling Stains",
    subtitle:
      "Ceiling stains are usually a moisture mark, not just a cosmetic blemish. Renovix treats the cause and restores a clean ceiling.",
    whatItMeans: [
      "A ceiling stain is a discolouration on the ceiling, most often a yellow-brown water mark, but it can also be a dark patch from mould, a damp spot, or a greyish area from old smoke or dirt. A water mark is the most common type and is a sign that moisture is coming through the ceiling from above. Left untreated, that moisture can spread, weaken the board and, in some cases, lead to a sag or a leak.",
      "Ceiling stains are easy to ignore because they are often high up and out of the way, but they should not be painted over without finding the cause. If the underlying moisture is still present, the stain will bleed back through, the paint will bubble, or the damp will spread. A lasting fix finds and stops the moisture, then cleans and repaints the affected area.",
    ],
    commonCauses: [
      "A slow leak from a roof, pipe or fixture above the ceiling.",
      "Condensation and humidity in a bathroom or kitchen ceiling.",
      "Old water damage that was never fully treated or repainted.",
      "Mould or mildew growing in the damp area.",
      "Smoke or soot staining from a cooking or heating source.",
      "Dirt and age discolouring the ceiling over time.",
    ],
    warningSigns: [
      "A yellow-brown or dark patch on the ceiling that grows slowly.",
      "The stain darkening or spreading after a heavy rain.",
      "A stain accompanied by bubbling paint or a damp smell.",
      "Multiple stains or a stain that is soft to the touch.",
    ],
    solutions: [
      {
        title: "Identify the stain type",
        description:
          "We determine whether the stain is from water, mould, smoke or age so it is treated correctly.",
      },
      {
        title: "Find and stop the moisture",
        description:
          "Where water is the cause, we trace the source and coordinate the repair before treating the stain.",
      },
      {
        title: "Treat and seal the stain",
        description:
          "The stain is cleaned or sealed with a stain blocker so it cannot bleed through the new paint.",
      },
      {
        title: "Repaint the ceiling",
        description:
          "The affected area is repainted and matched to give the ceiling a clean, even finish.",
      },
    ],
    whenToCall: [
      "A stain keeps coming back or grows after you paint over it.",
      "The stain is accompanied by a leak, a smell or a soft patch.",
      "The ceiling is stained in multiple places.",
      "You cannot tell what is causing the discolouration.",
    ],
    relatedServiceNote:
      "Ceiling stain treatment is handled by our ceiling and painting teams. Where a leak is the cause, we coordinate with waterproofing.",
    processTitle: "How We Treat Ceiling Stains",
    processIntro:
      "Treating a ceiling stain properly means stopping the cause and sealing it before painting. Here is the process.",
    processSteps: [
      {
        title: "Assess the stain",
        description:
          "We look at the type of stain and whether it is active or old.",
      },
      {
        title: "Find the moisture source",
        description:
          "If water is involved, we locate the leak and coordinate its repair.",
      },
      {
        title: "Treat and seal",
        description:
          "The stain is treated and sealed so it will not bleed through.",
      },
      {
        title: "Repaint the area",
        description:
          "The ceiling is repainted and finished to match the surrounding surface.",
      },
    ],
    propertyTypesIntro:
      "Ceiling stains affect every property type, and are common in top-floor homes and rooms below a bathroom or roof.",
    faqs: [
      {
        question: "Can I just paint over a ceiling stain?",
        answer:
          "Not reliably. If the stain is from water, the moisture can still be present and the stain will bleed through. A stain blocker and stopping the cause give a lasting result.",
      },
      {
        question: "Why does a brown stain keep coming back?",
        answer:
          "That usually means there is still a moisture source feeding the stain. Painting over it repeatedly will not help — the leak needs to be found and fixed.",
      },
      {
        question: "Are ceiling stains always water damage?",
        answer:
          "Most water-mark stains are, but stains can also come from mould, smoke or age. We identify the type so the right treatment is used.",
      },
      {
        question: "How do I know if a stain is active?",
        answer:
          "An active stain tends to grow, darken or spread after rain or heavy use. If it feels damp or smells musty, the moisture is probably still there.",
      },
      {
        question: "Will the stain show through again after repainting?",
        answer:
          "If the stain is properly treated and sealed and the moisture source is stopped, it should not show through. That is why we treat the cause, not just the surface.",
      },
    ],
    relatedProblems: [
      "water-damaged-ceiling",
      "water-stains",
      "sagging-ceiling",
      "mouldy-walls",
    ],
  },
  {
    ...ceilingBase,
    slug: "old-plaster-ceiling",
    name: "Old Plaster Ceiling",
    title: "Old Plaster Ceiling Repair in Kuala Lumpur & Selangor",
    metaDescription:
      "Old, cracked or crumbling plaster ceilings in Kuala Lumpur & Selangor? Learn the causes, warning signs, repair and replacement solutions, and when to call a ceiling professional.",
    h1: "Old Plaster Ceiling",
    subtitle:
      "Old plaster ceilings crack, sag and lose strength with age. Renovix repairs or replaces them with a safe, modern ceiling.",
    whatItMeans: [
      "An old plaster ceiling is a traditional ceiling finished with plaster, often in an older terraced house or a building from an earlier era. Over time, plaster ceilings can crack, become brittle, develop a powdery surface, or sag where the plaster has lost its grip on the lath or board beneath. They can also hold heat poorly and are more difficult to work with when adding modern lighting or a false ceiling.",
      "Old plaster ceilings are not simply a cosmetic issue. As the plaster weakens, small sections can drop or a whole ceiling can be at risk, especially if it has been exposed to moisture over the years. Many homeowners choose to replace an old plaster ceiling with a modern plasterboard ceiling, which is lighter, safer and easier to fit with insulation and downlights, while others prefer to repair and preserve the original look.",
    ],
    commonCauses: [
      "Age, with the plaster and lath degrading over many years.",
      "An old ceiling system built with lath and plaster that has lost its bond.",
      "Moisture and water penetration weakening the plaster.",
      "Movement in the building opening cracks in the plaster.",
      "The weight of the plaster ceiling being poorly supported over spans.",
      "Outdated construction methods that modern standards have moved away from.",
    ],
    warningSigns: [
      "A powdery, crumbling or flaking plaster surface.",
      "Cracks that run through the ceiling and are widening.",
      "The ceiling sagging or sections that feel loose or spongy.",
      "Loose or falling plaster dust or small pieces.",
    ],
    solutions: [
      {
        title: "Assess the ceiling condition",
        description:
          "We inspect whether the old plaster ceiling can be repaired and preserved or is better replaced.",
      },
      {
        title: "Overboard or replace",
        description:
          "Where a sound ceiling is retained, we can overboard with new plasterboard; where it is failing, we replace it.",
      },
      {
        title: "Install a modern false ceiling",
        description:
          "We can install a modern plasterboard ceiling with insulation and downlight cut-outs for a clean finish.",
      },
      {
        title: "Finish and paint",
        description:
          "The new or repaired ceiling is finished, skimmed and painted to match the room.",
      },
    ],
    whenToCall: [
      "The plaster ceiling is cracking, crumbling or powdery.",
      "A section is sagging or feels loose.",
      "You are replacing the ceiling to update a renovation.",
      "You want to add downlights or insulation to an old ceiling.",
    ],
    relatedServiceNote:
      "Old plaster ceiling work is a ceiling and partition job. We also coordinate with electrical and painting where wiring and finishing are involved.",
    processTitle: "How We Replace an Old Plaster Ceiling",
    processIntro:
      "Replacing an old plaster ceiling is safer and cleaner when it is done properly. Here is the process.",
    processSteps: [
      {
        title: "Assess and plan",
        description:
          "We inspect the ceiling and agree on whether to repair, overboard or replace it.",
      },
      {
        title: "Prepare the room",
        description:
          "We protect the room and plan the work, including any wiring for lights and fans.",
      },
      {
        title: "Install the new ceiling",
        description:
          "The old ceiling is removed or overboarded, and a new plasterboard ceiling is installed with proper support.",
      },
      {
        title: "Finish and paint",
        description:
          "The ceiling is finished, skimmed and painted so it is smooth and clean.",
      },
    ],
    propertyTypesIntro:
      "Old plaster ceilings are most common in older terraced houses, semi-Ds and older commercial buildings.",
    faqs: [
      {
        question: "Should I repair or replace an old plaster ceiling?",
        answer:
          "It depends on its condition. If the plaster is sound, it can be repaired or overboarded. If it is cracking, crumbling or sagging, replacement is often safer and cheaper in the long run.",
      },
      {
        question: "Why are old plaster ceilings replaced?",
        answer:
          "They can weaken with age, crack, sag and hold less heat. Replacing with a modern plasterboard ceiling is lighter, safer and easier to fit with insulation, downlights and a cleaner finish.",
      },
      {
        question: "Is it safe to have an old plaster ceiling checked?",
        answer:
          "Yes, and it is worth doing if you are seeing cracking, powdering or sagging. Checking it early can prevent a section from dropping.",
      },
      {
        question: "Can I add downlights to an old plaster ceiling?",
        answer:
          "It can be done, but cutting into an old ceiling is riskier and requires care. Replacing or overboarding often gives a cleaner result when you want to add lighting.",
      },
      {
        question: "Does replacing a ceiling affect my renovation timeline?",
        answer:
          "It is best planned at the renovation stage. Replacing a ceiling is quicker during a renovation before painting and other finishing work, and it lets wiring run cleanly.",
      },
    ],
    relatedProblems: [
      "cracked-ceiling",
      "sagging-ceiling",
      "water-damaged-ceiling",
      "ceiling-stains",
    ],
  },
];
