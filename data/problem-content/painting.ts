import type { ProblemDetail, ProblemPropertyType } from "./types";

const paintingPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Terrace House",
    note: "Interior and exterior repainting, crack repair and surface preparation for landed homes.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Larger painting scopes and exterior repainting where walls weather heavily.",
  },
  {
    label: "Condominium",
    note: "Interior repainting and wall repairs within a unit, coordinated with common-area rules.",
  },
  {
    label: "Apartment",
    note: "Wall and ceiling repainting sized for apartment interiors.",
  },
  {
    label: "Shop & Office",
    note: "Touch-ups and full repainting for retail and office interiors with wear and tear.",
  },
  {
    label: "New Homes",
    note: "Fixing paint defects and surface damage before a new home is moved into.",
  },
];

const paintingAreasNote =
  "Painting and wall repairs are available across Kuala Lumpur, Selangor and the wider Klang Valley, for interiors and exteriors.";

const paintingBase = {
  category: "painting" as const,
  relatedService: "painting",
  relatedServices: ["general-renovation", "waterproofing", "ceiling-partition", "handyman"],
  propertyTypes: paintingPropertyTypes,
  areasNote: paintingAreasNote,
};

export const paintingProblems: ProblemDetail[] = [
  {
    ...paintingBase,
    slug: "peeling-paint",
    name: "Peeling Paint",
    title: "Peeling Paint Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Peeling, flaking or bubbling paint in Kuala Lumpur & Selangor? Learn the causes, warning signs, the right surface preparation and repainting solutions, and when to call a painting contractor.",
    h1: "Peeling Paint",
    subtitle:
      "Paint that peels or bubbles usually means the surface beneath was not ready. Renovix prepares the wall properly and repaints so the finish lasts.",
    whatItMeans: [
      "Peeling paint is when the paint film lifts, flakes or bubbles away from the wall or ceiling. It can be small patches near a corner or window, or large areas where the paint comes away in sheets. Peeling is almost never a paint quality problem alone — it is usually the result of the surface beneath not being prepared correctly, or moisture working its way behind the paint film.",
      "In Kuala Lumpur's humid climate, peeling paint is most often caused by moisture and condensation, a wall that was not cleaned or primed before painting, or paint applied over a previous unstable coat. Peeling paint also exposes the plaster to rain and humidity, which can lead to mould and structural damp. The fix depends on finding what is behind the peeling rather than simply painting over it.",
    ],
    commonCauses: [
      "Moisture or condensation behind the paint, often from a wall that is damp or has a leak.",
      "Paint applied over a dusty, greasy or poorly prepared surface.",
      "Repainting over an old, unstable coat without stripping or priming.",
      "Using the wrong type of paint for the surface or the exposure.",
      "Inadequate drying between coats, trapping moisture beneath the paint.",
      "Exterior walls exposed to heavy rain and sun that age the paint film.",
    ],
    warningSigns: [
      "Paint bubbling or lifting in patches, especially near moisture.",
      "Flakes of paint peeling onto the floor or falling from the ceiling.",
      "Paint that cracks in a grid-like pattern before peeling.",
      "Damp, mould or a stain appearing behind the peeling paint.",
    ],
    solutions: [
      {
        title: "Find the cause before repainting",
        description:
          "We identify whether the peeling is from moisture, a preparation problem or an unstable previous coat, so the fix is lasting.",
      },
      {
        title: "Strip and prepare the surface",
        description:
          "Loose or peeling paint is removed, the surface cleaned and repaired, and the right primer applied.",
      },
      {
        title: "Repaint with a suitable finish",
        description:
          "We apply the appropriate paint for the surface and the exposure, with correct coats and drying times.",
      },
      {
        title: "Address any moisture issue",
        description:
          "Where damp is the cause, we coordinate with waterproofing so the wall is treated at the source before it is painted.",
      },
    ],
    whenToCall: [
      "Paint is peeling across large areas and the cause is not obvious.",
      "Peeling is accompanied by damp, mould or a water stain.",
      "The wall has been repainted several times and keeps peeling.",
      "Exterior paint is flaking and leaving the wall exposed to weather.",
    ],
    relatedServiceNote:
      "Peeling paint is addressed by our painting team. Where moisture is the cause, we coordinate with waterproofing to treat the wall.",
    processTitle: "How We Fix Peeling Paint",
    processIntro:
      "Lasting paint starts with the surface. This is the process we follow to stop peeling for good.",
    processSteps: [
      {
        title: "Assess the cause",
        description:
          "We check whether the peeling is isolated or related to moisture, and the condition of the surface below.",
      },
      {
        title: "Strip and repair",
        description:
          "Loose paint and any damaged plaster are removed, and the wall is made sound.",
      },
      {
        title: "Prime and repaint",
        description:
          "The surface is primed and repainted with the right coating for the exposure.",
      },
      {
        title: "Confirm the finish",
        description:
          "We check the result and advise on anything needed to keep the finish in good condition.",
      },
    ],
    propertyTypesIntro:
      "Peeling paint affects every property type, with exteriors and high-humidity rooms most at risk.",
    faqs: [
      {
        question: "Can I just paint over peeling paint?",
        answer:
          "No. Painting over loose paint will simply hide the problem and it will peel again. The loose paint and any cause beneath it need to be addressed first.",
      },
      {
        question: "Why does paint peel soon after repainting?",
        answer:
          "Usually because the surface was not properly prepared — it was dusty, damp or had an unstable previous coat. The primer and paint could not bond to the wall.",
      },
      {
        question: "Is peeling paint a sign of damp?",
        answer:
          "Often yes. Moisture behind the paint is a common cause of bubbling and peeling. If the underlying wall is damp, the source should be addressed before repainting.",
      },
      {
        question: "What is the right paint for a bathroom or humid room?",
        answer:
          "Moisture-resistant or anti-mould paint suited to the area. We recommend a finish that can handle humidity and is easier to keep clean.",
      },
      {
        question: "How long does repainting take after removing peeling paint?",
        answer:
          "It depends on the size of the area and how much preparation is needed. Stripping, repairing, priming and repainting all add time for a lasting finish.",
      },
    ],
    relatedProblems: [
      "mouldy-walls",
      "cracked-walls",
      "wall-surface-damage",
      "water-stains",
    ],
  },
  {
    ...paintingBase,
    slug: "cracked-walls",
    name: "Cracked Walls",
    title: "Cracked Wall Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Cracked walls, hairline cracks and plaster damage in Kuala Lumpur & Selangor repaired. Learn the causes, warning signs, plastering and repainting solutions, and when to call a professional.",
    h1: "Cracked Walls",
    subtitle:
      "Cracks in walls range from cosmetic to structural. Renovix repairs cracked plaster and tells you when a crack needs closer attention.",
    whatItMeans: [
      "A cracked wall is a break in the plaster or paint finish of an internal or external wall. Cracks range from fine hairline cracks in the paint to deeper cracks in the plaster or masonry. In most Malaysian homes, hairline cracks are a normal result of a home settling, drying plaster, or seasonal movement and are mostly cosmetic. Deeper or growing cracks, however, can indicate structural movement or a moisture problem that should be checked.",
      "Cracked walls tend to be ignored until they reach the ceiling or become unsightly, but they let in dust, and in areas near moisture they can admit water. Repairing a wall crack properly means preparing and filling the crack, reinforcing it where needed, and repainting so the surface is smooth and does not simply re-crack. Knowing which cracks are fine and which need attention is the first step.",
    ],
    commonCauses: [
      "Natural settling and movement of a building over time.",
      "Drying and shrinkage of plaster after it is applied.",
      "Movement at a junction, such as a wall meeting a door frame or a beam.",
      "Thermal expansion and contraction in exterior walls.",
      "Structural movement, subsidence or a load-bearing issue (more serious).",
      "Moisture or damp in the wall causing the plaster to swell and crack.",
    ],
    warningSigns: [
      "A small hairline crack that quickly grows wider or longer.",
      "Cracks appearing in a diagonal or staircase pattern.",
      "Cracks at the corner of a wall or around door and window frames.",
      "A crack accompanied by a bulge, a level change or a door that jams.",
    ],
    solutions: [
      {
        title: "Assess the crack",
        description:
          "We identify whether the crack is cosmetic or needs a structural assessment, and the best way to repair it.",
      },
      {
        title: "Prepare and fill the crack",
        description:
          "The crack is opened, cleaned and filled with the right filler, reinforced where movement is likely.",
      },
      {
        title: "Treat the cause",
        description:
          "Where a joint, a plaster issue or a damp problem is behind the crack, we address that first.",
      },
      {
        title: "Repaint a smooth finish",
        description:
          "The repaired surface is sanded, primed and repainted so the crack blends into the wall.",
      },
    ],
    whenToCall: [
      "A crack is growing, or you see several in a pattern across the wall.",
      "The crack is accompanied by a bulge or a sinking floor.",
      "A crack appears near a structural element or around a heavy load-bearing area.",
      "You want a smooth, professional finish rather than a visible patch.",
    ],
    relatedServiceNote:
      "Cracked wall repair is handled by our painting and renovation teams. Where a crack is structural, we advise you on the right next step.",
    processTitle: "How We Repair Cracked Walls",
    processIntro:
      "A lasting wall repair deals with the crack and the surface. Here is the approach.",
    processSteps: [
      {
        title: "Inspect the crack",
        description:
          "We assess the width, depth and pattern to decide whether it is cosmetic or needs more attention.",
      },
      {
        title: "Prepare the surface",
        description:
          "The crack and surrounding plaster are prepared so the filler bonds properly.",
      },
      {
        title: "Fill and reinforce",
        description:
          "The crack is filled and, where needed, reinforced so it does not simply re-open.",
      },
      {
        title: "Sand, prime and paint",
        description:
          "The area is sanded smooth, primed and repainted to match the surrounding wall.",
      },
    ],
    propertyTypesIntro:
      "Cracked walls affect all property types. They are common in newer homes that are still settling and in older homes with ageing plaster.",
    faqs: [
      {
        question: "Are hairline cracks in walls normal?",
        answer:
          "Fine hairline cracks are often normal settling or drying. The concern is when a crack grows, or appears in a pattern that points to movement. We can assess and advise.",
      },
      {
        question: "When is a wall crack a structural problem?",
        answer:
          "A crack that is widening, running diagonally or stepped, or accompanied by a bulge or a sticking door, may point to movement. It is worth getting a professional assessment.",
      },
      {
        question: "Can I just fill and paint over a crack?",
        answer:
          "You can fill a small cosmetic crack, but if the cause is movement or moisture it will re-crack. Preparing and reinforcing the crack gives a longer-lasting result.",
      },
      {
        question: "How do you repair a crack that keeps coming back?",
        answer:
          "We find out why it keeps re-cracking — often movement at a joint or a damp issue — and treat the cause so the repair holds.",
      },
      {
        question: "Does fixing a wall crack require repainting the whole room?",
        answer:
          "Not necessarily. A crack can often be repaired and touched up to match. For a large area or a colour mismatch, we may recommend repainting the whole wall.",
      },
    ],
    relatedProblems: [
      "peeling-paint",
      "wall-surface-damage",
      "cracked-ceiling",
      "mouldy-walls",
    ],
  },
  {
    ...paintingBase,
    slug: "mouldy-walls",
    name: "Mouldy Walls",
    title: "Mouldy Wall Treatment in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Mould on walls in Kuala Lumpur & Selangor — what it means, common causes, warning signs, treatment and prevention solutions, and when to call a painting and waterproofing professional.",
    h1: "Mouldy Walls",
    subtitle:
      "Mould on walls is a damp problem, not a paint problem. Renovix treats the mould and addresses the moisture that feeds it.",
    whatItMeans: [
      "Mould on a wall is dark, fuzzy growth that appears where there is persistent moisture and poor ventilation. It often shows as black, green or white patches on a wall, ceiling or corner, and is frequently accompanied by a musty smell. Mould thrives in the warm, humid climate of Kuala Lumpur, especially in bathrooms, kitchens, and rooms with poor airflow or recurring condensation.",
      "Mould is more than a cosmetic issue. It is a sign that there is moisture in the wall or on the surface that is not drying out, whether from condensation, a leak, rising damp or a lack of waterproofing. Treating the mould with a cleaner alone will not stop it returning, because the moisture that feeds it remains. A lasting fix addresses the source of the damp and uses the right anti-mould paint or treatment.",
    ],
    commonCauses: [
      "Poor ventilation and trapped humidity in bathrooms, kitchens and bedrooms.",
      "Condensation on cold walls that stays damp for long periods.",
      "A concealed leak from plumbing, a roof or a wall cavity.",
      "Rising damp from the ground in a home without a damp course.",
      "Aircond or drying clothes creating moisture that cannot escape.",
      "Painting over a surface that was still damp, trapping moisture behind the paint.",
    ],
    warningSigns: [
      "Dark, fuzzy or powdery patches on walls, ceilings or corners.",
      "A persistent musty or earthy smell in a room.",
      "Peeling, bubbling or stained paint near the mould.",
      "Mould returning shortly after you have cleaned it.",
    ],
    solutions: [
      {
        title: "Identify the moisture source",
        description:
          "We investigate whether the mould is from condensation, a leak or rising damp, so the fix targets the cause.",
      },
      {
        title: "Treat and clean the surface",
        description:
          "The mould is treated and cleaned, and any affected paint or plaster is prepared before repainting.",
      },
      {
        title: "Use anti-mould paint",
        description:
          "We repaint treated areas with a moisture-resistant and anti-mould coating suited to humid interiors.",
      },
      {
        title: "Fix the underlying damp",
        description:
          "Where a leak or rising damp is the cause, we coordinate with waterproofing and plumbing to stop it.",
      },
    ],
    whenToCall: [
      "Mould keeps returning after you have cleaned it.",
      "Mould covers a large area or is accompanied by a damp smell.",
      "There is also peeling paint, a water stain or a suspected leak.",
      "You have a health concern and the mould is spreading.",
    ],
    relatedServiceNote:
      "Mould treatment is handled by our painting team, working with waterproofing where a damp source is the cause.",
    processTitle: "How We Treat Mouldy Walls",
    processIntro:
      "Treating mould means removing it and stopping the moisture that feeds it. Here is the approach.",
    processSteps: [
      {
        title: "Check the damp source",
        description:
          "We look at the room, the ventilation and any signs of a leak to find why the wall is staying damp.",
      },
      {
        title: "Treat the mould",
        description:
          "The mould is treated and the affected surface cleaned and prepared.",
      },
      {
        title: "Repair and prime",
        description:
          "Any damaged plaster is repaired and the surface primed to accept the new finish.",
      },
      {
        title: "Repaint with anti-mould paint",
        description:
          "A moisture-resistant, anti-mould coating is applied so the surface resists future growth.",
      },
    ],
    propertyTypesIntro:
      "Mould is most common in bathrooms, kitchens and rooms with poor airflow across every property type.",
    faqs: [
      {
        question: "Does bleaching mould fix the problem?",
        answer:
          "A cleaner can remove the visible mould, but it will often return if the moisture is still there. Addressing the damp source and using an anti-mould finish gives a lasting result.",
      },
      {
        question: "Why does mould grow in one specific corner?",
        answer:
          "A specific corner is often where condensation, a leak or poor airflow is concentrated. We look at the position to find the moisture source.",
      },
      {
        question: "Is mould dangerous to health?",
        answer:
          "Mould can cause or worsen allergies and respiratory irritation, especially for sensitive people. It is worth dealing with promptly and at the source.",
      },
      {
        question: "Can mould be painted over?",
        answer:
          "No. Painting over mould hides it but the moisture remains and the growth will continue beneath and reappear. The mould and its cause need to be treated first.",
      },
      {
        question: "Will anti-mould paint stop all mould?",
        answer:
          "Anti-mould paint helps resist growth, but it is not a substitute for fixing the moisture. Combined with good ventilation and treating the damp source, it is far more effective.",
      },
    ],
    relatedProblems: [
      "damp-walls",
      "peeling-paint",
      "water-stains",
      "cracked-walls",
    ],
  },
  {
    ...paintingBase,
    slug: "faded-paint",
    name: "Faded Paint",
    title: "Faded Paint Restoration in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Faded, dull or sun-bleached paint in Kuala Lumpur & Selangor? Learn what causes paint to fade, warning signs, repainting and colour-matching solutions, and when to call a painting contractor.",
    h1: "Faded Paint",
    subtitle:
      "Paint fades when the sun and weather win. Renovix matches your colours and repaints to restore a fresh, even finish.",
    whatItMeans: [
      "Faded paint is a loss of colour and vibrancy in a painted surface, often where a wall or exterior is exposed to sunlight, heat or the weather. Over time the pigments in the paint break down, and the surface can look dull, patchy or several shades lighter than it was. Fading is most noticeable on sun-facing walls, and it can also affect both exterior and interior surfaces over many years.",
      "Fading is different from wear or dirt. It is a change in the paint itself, and it usually cannot be cleaned off. The paint pigments have degraded, and the only proper fix is repainting. Where a single wall has faded unevenly, repainting that wall may not blend with the adjacent walls, so the colour and coverage need to be matched carefully.",
    ],
    commonCauses: [
      "Prolonged exposure to strong ultraviolet sunlight.",
      "Heat and temperature swings on exterior walls.",
      "Low-quality or non-durable paint used originally.",
      "A colour that is more prone to fading, such as certain brighter shades.",
      "Repainting a single area with a paint that does not match the shade.",
      "Age, with paint gradually breaking down over many years.",
    ],
    warningSigns: [
      "A wall that looks noticeably lighter or duller than a shaded wall.",
      "Colour that looks patchy or uneven across a single surface.",
      "Paint that appears chalky or powdery on the surface.",
      "A half-repainted wall that does not blend with the rest of the room.",
    ],
    solutions: [
      {
        title: "Match the original colour",
        description:
          "We match the shade as closely as possible, using samples and the existing finish to reduce any difference.",
      },
      {
        title: "Repaint with a durable finish",
        description:
          "We repaint using a quality coating suited to the exposure, so the colour holds longer.",
      },
      {
        title: "Repaint the full surface",
        description:
          "Where the fade is uneven, we recommend repainting the full wall or area so the finish is consistent.",
      },
      {
        title: "Prepare the surface first",
        description:
          "We clean and repair the surface before painting so the new coat looks fresh and adheres well.",
      },
    ],
    whenToCall: [
      "A wall has faded so much it looks uneven or dated.",
      "You want to restore the original colour across a room or exterior.",
      "The surface is also chalky, peeling or in need of repair.",
      "You are repainting part of a room and need it to blend with the rest.",
    ],
    relatedServiceNote:
      "Faded paint restoration is a painting job. We can also coordinate with exterior surface repair where the wall is weathered.",
    processTitle: "How We Restore Faded Paint",
    processIntro:
      "Restoring faded paint is about the right colour match and a quality finish. Here is the process.",
    processSteps: [
      {
        title: "Assess the surface and shade",
        description:
          "We examine the fading and take colour samples to plan the best match.",
      },
      {
        title: "Prepare the wall",
        description:
          "The surface is cleaned, and any chalky or peeling areas are treated before painting.",
      },
      {
        title: "Repaint the area",
        description:
          "We apply a quality coating in the matched colour, ensuring even coverage.",
      },
      {
        title: "Check the finish",
        description:
          "We review the result so the surface looks even and matches the surrounding walls.",
      },
    ],
    propertyTypesIntro:
      "Faded paint is most visible on exterior walls and sun-facing rooms across all property types.",
    faqs: [
      {
        question: "Can faded paint be restored without repainting?",
        answer:
          "Usually not. Fading is the pigments breaking down, so cleaning will not bring the colour back. Repainting is the reliable way to restore it.",
      },
      {
        question: "Why does paint fade faster on one wall?",
        answer:
          "That wall is likely getting more direct sunlight than the others. UV exposure is the main cause of fading.",
      },
      {
        question: "How can I stop paint from fading?",
        answer:
          "Using a quality, UV-resistant paint and a suitable finish helps. Over time, all paint will fade to some degree in strong sun.",
      },
      {
        question: "Will repainting one wall look odd against the others?",
        answer:
          "It can, if the others have faded. We assess and advise whether to repaint the full room or area so the finish is consistent.",
      },
      {
        question: "Is chalky paint the same as fading?",
        answer:
          "Chalkiness is a powdering of the paint surface that often accompanies fading. It is a sign the paint is breaking down and should be cleaned and repainted.",
      },
    ],
    relatedProblems: [
      "uneven-paint",
      "peeling-paint",
      "wall-surface-damage",
      "cracked-walls",
    ],
  },
  {
    ...paintingBase,
    slug: "uneven-paint",
    name: "Uneven Paint",
    title: "Uneven Paint Finish in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Patchy, streaky or uneven paint in Kuala Lumpur & Selangor? Learn the causes, warning signs, the right way to get a smooth finish, and when to call a painting professional.",
    h1: "Uneven Paint",
    subtitle:
      "Patchy, streaky or flat patches of paint are a prep and application problem. Renovix smooths the surface and repaints properly.",
    whatItMeans: [
      "Uneven paint describes a painted surface that is not consistent — showing streaks, flat patches, visible roller marks, or a slight difference in sheen from wall to wall. The result looks tired and unfinished even if the colour is right. Uneven paint is usually the result of how the surface was prepared and how the paint was applied, not the paint itself.",
      "Common signs include paint that looks striped from overlapping roller strokes, a patchy sheen where a mist coat was applied unevenly, or a surface where plaster repairs show through the paint. Fixing uneven paint requires proper surface preparation, the right technique, and sometimes recoat to blend the finish. Simply adding another coat over a badly applied finish often makes it worse.",
    ],
    commonCauses: [
      "An uneven or rough plaster surface that was not properly prepared.",
      "Repainting over a patch or a repair without sanding it flush.",
      "Roller marks caused by applying the paint too thick or too thin.",
      "A colour or sheen difference from using paint from different batches.",
      "One-coat application on a surface that needed priming or lining.",
      "Poor lighting hiding an uneven application that becomes obvious later.",
    ],
    warningSigns: [
      "Visible roller marks, streaks or overlapping bands across a wall.",
      "Flat or shiny patches in an otherwise more even surface.",
      "Repair patches showing through the paint as raised or different.",
      "The paint looking different under different lighting.",
    ],
    solutions: [
      {
        title: "Smooth and prepare the surface",
        description:
          "We sand, fill and level the surface so the paint goes on to an even finish.",
      },
      {
        title: "Apply an even coat",
        description:
          "We repaint with the correct technique and consistent coverage to avoid roller marks and streaks.",
      },
      {
        title: "Use a mist coat or lining",
        description:
          "Where the surface or the previous colour needs a base, we prime or line before the final coat.",
      },
      {
        title: "Blend the finish",
        description:
          "For patchwork areas, we repaint the affected wall or section so the sheen and colour match the rest.",
      },
    ],
    whenToCall: [
      "The paint looks streaky or patchy and a new coat will not fix it.",
      "You can see plaster repairs or patches through the paint.",
      "The sheen is uneven across a wall, especially in strong light.",
      "You want a smooth, professional finish for a feature wall or whole room.",
    ],
    relatedServiceNote:
      "Uneven paint is a painting job that depends on surface preparation. We assess the wall and repaint to a smooth, even finish.",
    processTitle: "How We Fix Uneven Paint",
    processIntro:
      "An even finish comes from an even surface and careful application. Here is the process.",
    processSteps: [
      {
        title: "Inspect the finish",
        description:
          "We identify the streaks, patches or sheen differences and their cause.",
      },
      {
        title: "Prepare the surface",
        description:
          "We sand, fill and level the wall so it is ready for a clean, even coat.",
      },
      {
        title: "Prime and repaint",
        description:
          "We prime where needed and repaint with consistent technique and coverage.",
      },
      {
        title: "Check under light",
        description:
          "We review the finish under good lighting so any unevenness is corrected.",
      },
    ],
    propertyTypesIntro:
      "Uneven paint affects any property type, and is most noticeable on feature walls and in rooms with strong natural light.",
    faqs: [
      {
        question: "Why does paint look streaky after I repaint?",
        answer:
          "Streaks usually come from overlapping roller strokes or painting a wall in sections that dry at different times. The surface may also be uneven underneath.",
      },
      {
        question: "Can uneven paint be fixed with another coat?",
        answer:
          "Not reliably. Adding another coat over a badly applied finish can make the problem more visible. The surface usually needs to be prepared and repainted properly.",
      },
      {
        question: "What causes flat patches in paint?",
        answer:
          "Flat patches often come from over-spreading the paint, a primer that was not applied evenly, or a patch on the wall that was not sanded flush before painting.",
      },
      {
        question: "Why does my paint look different in different lights?",
        answer:
          "Uneven paint does show up differently depending on the light. A smooth, even coat applied with consistent technique helps the surface look uniform.",
      },
      {
        question: "Is it worth priming before painting?",
        answer:
          "In many cases yes. Priming gives an even base, improves adhesion and helps the topcoat cover consistently, especially over patches or a change in colour.",
      },
    ],
    relatedProblems: [
      "faded-paint",
      "cracked-walls",
      "wall-surface-damage",
      "peeling-paint",
    ],
  },
  {
    ...paintingBase,
    slug: "wall-surface-damage",
    name: "Wall Surface Damage",
    title: "Wall Damage Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Damaged wall surfaces — holes, dents, scratches, water damage and crumbling plaster — repaired in KL & Selangor. Learn the causes, signs and solutions.",
    h1: "Wall Surface Damage",
    subtitle:
      "Holes, dents, crumbling plaster and water-damaged walls can all be repaired. Renovix restores the surface so it looks and paints like new.",
    whatItMeans: [
      "Wall surface damage covers the range of physical and moisture damage that leaves a wall in poor condition — holes from fixings or furniture, dents and scratches, crumbling or cracked plaster, and patches where water has caused staining, bubbling or blown plaster. The surface may look patchy, uneven or simply unsafe to paint directly. Common in homes across Kuala Lumpur and Selangor, this damage is usually the result of wear, impacts, water, or a poor original finish.",
      "Repairing a damaged wall is about making the surface sound as well as smooth. A hole needs to be filled and reinforced, crumbling plaster needs to be cut back and replaced, and water damage needs the moisture source addressed before the surface is repaired and repainted. Doing the repair properly means the wall will paint to a smooth finish and the damage will not simply reappear.",
    ],
    commonCauses: [
      "Holes and dents from furniture, door handles or moving items.",
      "Plaster that has cracked, blown or crumbled with age or moisture.",
      "Moisture and water damage that swells or lifts the plaster.",
      "Removed fixtures or fittings leaving hole or patchwork behind.",
      "Impacts and general wear in high-traffic areas.",
      "A poor original finish or a surface that was never properly prepared.",
    ],
    warningSigns: [
      "Holes, dents or scratches that are visible and catching light.",
      "Crumbling, cracked or powdery plaster that falls away.",
      "Bubbled, stained or lifted paint from water behind it.",
      "A wall that looks so damaged it cannot be painted directly.",
    ],
    solutions: [
      {
        title: "Repair the damage",
        description:
          "Holes and dents are filled and reinforced, and any loose or water-damaged plaster is cut back and made good.",
      },
      {
        title: "Treat the moisture cause",
        description:
          "Where water damage is the cause, we coordinate with waterproofing and plumbing before repairing the surface.",
      },
      {
        title: "Smooth and level the surface",
        description:
          "The repaired area is sanded and leveled so the wall paints to a smooth, even finish.",
      },
      {
        title: "Repaint the area",
        description:
          "The surface is primed and repainted, matched to the surrounding wall.",
      },
    ],
    whenToCall: [
      "The damage is more than a small hole or an easy patch.",
      "The plaster is crumbling, blown or water-damaged over a large area.",
      "The damage keeps recurring after a repair.",
      "You want a smooth, professional finish across the wall.",
    ],
    relatedServiceNote:
      "Wall surface repair is handled by our painting and renovation team. Where water damage is involved, we coordinate with waterproofing.",
    processTitle: "How We Repair Wall Surface Damage",
    processIntro:
      "A wall repair needs to make the surface sound before it is painted. Here is the process.",
    processSteps: [
      {
        title: "Assess the damage",
        description:
          "We look at the extent of the damage and whether water, plaster or structural problems are involved.",
      },
      {
        title: "Cut back and repair",
        description:
          "Loose or damaged material is removed, and holes and cracks are filled and reinforced.",
      },
      {
        title: "Level and smooth",
        description:
          "The repaired surface is sanded and leveled so it sits flush with the surrounding wall.",
      },
      {
        title: "Prime and paint",
        description:
          "The repaired area is primed and repainted to blend with the wall.",
      },
    ],
    propertyTypesIntro:
      "Wall surface damage affects every property type, with older homes and high-traffic areas seeing more wear.",
    faqs: [
      {
        question: "Can a small hole in the wall be repaired simply?",
        answer:
          "Yes. A small hole can be filled, sanded and repainted. Larger areas or water-damaged plaster need more preparation so the repair is sound.",
      },
      {
        question: "Why does plaster keep crumbling on this wall?",
        answer:
          "Crumbling plaster is often a sign of moisture behind it or an old, weakened finish. We look for the cause before repairing so it does not re-occur.",
      },
      {
        question: "Do I need to fix water damage before painting?",
        answer:
          "Yes. If a wall is water-damaged, painting over it will trap moisture and cause further problems. The water source and the damage need to be addressed first.",
      },
      {
        question: "Will a patch repair be visible after painting?",
        answer:
          "With good preparation, sanding and colour matching, a repair can be blended well. For larger areas, we may recommend repainting the whole wall.",
      },
      {
        question: "How long does a wall repair take to dry before painting?",
        answer:
          "Filler and plaster need time to dry and be sanded before painting. The total time depends on the size of the repair and the drying conditions.",
      },
    ],
    relatedProblems: [
      "cracked-walls",
      "peeling-paint",
      "mouldy-walls",
      "water-stains",
    ],
  },
];
