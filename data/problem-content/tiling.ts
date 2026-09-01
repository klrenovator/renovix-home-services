import type { ProblemDetail, ProblemPropertyType } from "./types";

const tilingPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Condominium",
    note: "Bathroom, kitchen and balcony tile repair within high-rise units, including hollow or water-damaged tiles.",
  },
  {
    label: "Apartment",
    note: "Individual tile fixes sized for apartment floors, walls and wet areas.",
  },
  {
    label: "Terrace House",
    note: "Tile repair and replacement across living areas, kitchen and bathrooms in landed homes.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Broader tiling scopes and outdoor areas where tiles are exposed to weather and traffic.",
  },
  {
    label: "Shop & Office",
    note: "Tile repair in retail floors and commercial areas that are in constant daytime use.",
  },
  {
    label: "New Homes",
    note: "Fixing defects or damaged tiles in newly handed-over homes before moving in.",
  },
];

const tilingAreasNote =
  "Tile repair and replacement are available across Kuala Lumpur, Selangor and the wider Klang Valley — from condos in the city centre to landed homes in the suburbs.";

const tilingBase = {
  category: "tiling" as const,
  relatedService: "tiling",
  relatedServices: ["waterproofing", "plumbing", "flooring", "general-renovation"],
  propertyTypes: tilingPropertyTypes,
  areasNote: tilingAreasNote,
};

export const tilingProblems: ProblemDetail[] = [
  {
    ...tilingBase,
    slug: "broken-tile-repair",
    name: "Broken Tile Repair",
    title: "Broken Tile Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Broken, chipped or shattered tiles repaired and replaced in Kuala Lumpur & Selangor without retiling the whole floor. Find causes, warning signs, solutions and when to call a professional.",
    h1: "Broken Tile Repair",
    subtitle:
      "A single broken tile does not have to mean a full retile. Renovix replaces damaged tiles cleanly and matches them to the surrounding floor or wall.",
    whatItMeans: [
      "A broken tile is any tile that is chipped, cracked through, or shattered — usually on the face of the tile. It can be a small corner chip that catches your eye, or a tile that has split across its surface. Unlike a crack on the surface, a broken tile has lost physical material or split completely, so it will not hold together on its own.",
      "Broken tiles are a common issue in Kuala Lumpur and Selangor homes. Because tiles are hard, they do not flex — so a strong impact, a heavy object dropped, or movement in the floor or wall beneath can shatter them. Leaving a broken tile is not just cosmetic: the exposed surface can collect dirt and moisture, let water reach the adhesive and base below, and eventually loosen neighbouring tiles.",
    ],
    commonCauses: [
      "Heavy objects dropped onto the tile, such as pans, tools or furniture.",
      "Movement or settling in the floor, wall or screed beneath the tile.",
      "A poor initial installation with insufficient adhesive or no proper bedding.",
      "Thermal movement from a balcony or outdoor area exposed to heat and rain.",
      "Impact from things like a door that swings into a tile or a heavy appliance being shifted.",
      "Age and wear, especially on thinner ceramic tiles in high-traffic areas.",
    ],
    warningSigns: [
      "A visible chip, split or hole in the tile surface.",
      "The tile feels loose or sounds hollow when tapped.",
      "Cracks that spread from the broken tile into neighbouring tiles.",
      "Sharp edges that could cut, or a tile that moves underfoot.",
    ],
    solutions: [
      {
        title: "Single tile replacement",
        description:
          "The broken tile is carefully broken out, the bed cleaned, and a matching tile laid in its place with fresh adhesive and grout. This avoids touching the rest of the area.",
      },
      {
        title: "Matching the replacement tile",
        description:
          "We match size, finish and shade as closely as possible. Where the original tile is discontinued, we advise on the closest compatible option.",
      },
      {
        title: "Fixing the cause, not just the tile",
        description:
          "If the tile broke because the bed was hollow or the screed moved, we address that underlying issue so the new tile does not fail the same way.",
      },
      {
        title: "Regrouting after replacement",
        description:
          "Once the new tile is set, the joints are regrouted so the repair blends into the surrounding surface.",
      },
    ],
    whenToCall: [
      "The tile is shattered or the break exposes the edge of a nearby tile.",
      "The tile is hollow or loose underfoot, which indicates a bedding problem.",
      "You cannot find a matching tile and need help identifying a compatible one.",
      "The affected area is near water, such as a bathroom, shower or kitchen.",
    ],
    relatedServiceNote:
      "Broken tile repair is carried out by our tiling team. We also coordinate with waterproofing where a leak may have caused the tile to fail.",
    processTitle: "How We Repair a Broken Tile",
    processIntro:
      "Replacing a single tile is precise work. This is the sequence we follow so the repair is secure and blends into the surrounding surface.",
    processSteps: [
      {
        title: "Assess the tile and the bed",
        description:
          "We check the extent of the damage, whether the tile is hollow, and how much of the surrounding area is affected.",
      },
      {
        title: "Match the tile",
        description:
          "We identify the size, finish and shade of the surrounding tiles and source the closest match available.",
      },
      {
        title: "Remove and rebed",
        description:
          "The broken tile is broken out, the old adhesive cleaned off, and the bed prepared before the new tile is set.",
      },
      {
        title: "Grout and finish",
        description:
          "The new tile is grouted, cleaned and checked so the repair sits flush with the rest of the floor or wall.",
      },
    ],
    propertyTypesIntro:
      "Broken tile repair applies to any property type — the scope simply depends on how much of the surface is damaged.",
    faqs: [
      {
        question: "Can a broken tile be repaired without replacing it?",
        answer:
          "A small chip can sometimes be filled, but a tile that is split or has lost material is best replaced. We assess the damage and tell you honestly whether a repair or replacement is the right call.",
      },
      {
        question: "Do you need to replace the whole floor if one tile is broken?",
        answer:
          "No. In most cases a single tile can be cut out and replaced on its own. We only recommend a larger retile if many tiles are failing or the bed beneath is badly damaged.",
      },
      {
        question: "Can you match an old or discontinued tile?",
        answer:
          "We match size, finish and shade as closely as possible. Where the original is no longer available, we suggest the closest compatible option and explain the difference before starting.",
      },
      {
        question: "How long does a broken tile replacement take?",
        answer:
          "Most single-tile replacements are finished within a morning, including adhesive cure time. Larger or multiple-tile repairs take longer depending on the extent of the damage.",
      },
      {
        question: "Why did my tile break even though nothing hit it?",
        answer:
          "Tiles often break because of movement or hollowness beneath them rather than a direct impact. We check the bed to find the real cause so the replacement does not fail again.",
      },
    ],
    relatedProblems: [
      "cracked-tile-repair",
      "loose-tile-repair",
      "hollow-tile-problems",
      "bathroom-tile-problems",
    ],
  },
  {
    ...tilingBase,
    slug: "cracked-tile-repair",
    name: "Cracked Tile Repair",
    title: "Cracked Tile Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Cracked tiles repaired by Renovix across Kuala Lumpur & Selangor. Learn what causes tile cracks, the warning signs to watch for, possible solutions and when to call a tiling professional.",
    h1: "Cracked Tile Repair",
    subtitle:
      "Hairline cracks in tiles tend to spread. Renovix finds the cause and repairs or replaces the cracked tile before it fails completely.",
    whatItMeans: [
      "A cracked tile has a fracture in its surface that has not necessarily split the tile apart. It can be a fine hairline crack that appears like a scratch, or a longer crack running across the tile. Unlike a chipped or shattered tile, a cracked tile is usually still in one piece — but it is no longer watertight or structurally sound.",
      "Cracks are usually the first warning that something is moving beneath the surface, whether it is a settling screed, a hollow adhesive bed, or stress from temperature changes. In Kuala Lumpur homes, cracked tiles are especially common in bathrooms, kitchens and balconies where heat, moisture and heavy loads put the tile under constant pressure. If left, a crack can widen, admit moisture and start to lift the tile.",
    ],
    commonCauses: [
      "Subsidence or settling of the screed or foundation below the tiles.",
      "A hollow or partially bonded tile that flexes and cracks under weight.",
      "Thermal expansion and contraction on balconies or outdoor floors.",
      "Heavy loads or point loads concentrating stress on one tile.",
      "Structural movement in a wall or floor, such as near a beam or a door frame.",
      "Incorrect joint size or adhesive that was mixed or applied poorly originally.",
    ],
    warningSigns: [
      "A crack running across a tile that grows over time.",
      "Grinding or clicking sounds underfoot when you walk on the tile.",
      "Cracks that appear in a line across several tiles, which suggests movement.",
      "A crack near a grout line that slowly widens or lets water in.",
    ],
    solutions: [
      {
        title: "Diagnose the cause first",
        description:
          "We identify whether the crack is from a hollow bed, settlement or surface stress. Treating the symptom without the cause simply leads to a repeat crack.",
      },
      {
        title: "Repair or replace the tile",
        description:
          "A fine surface crack can sometimes be reset and sealed, but a crack that is structural usually needs the tile replaced.",
      },
      {
        title: "Rebedding a hollow tile",
        description:
          "Where the tile is hollow underneath, the tile is removed, the bed re-prepared with fresh adhesive, and the tile reset.",
      },
      {
        title: "Regrout and seal",
        description:
          "The affected joints are regrouted and sealed so moisture cannot enter through the crack and cause further damage.",
      },
    ],
    whenToCall: [
      "The crack keeps widening or new cracks keep appearing.",
      "The tile also sounds hollow or moves slightly underfoot.",
      "The crack is in a wet area and water is getting into it.",
      "You notice a line of cracks that could indicate structural movement.",
    ],
    relatedServiceNote:
      "Cracked tile repair is handled by our tiling team. Where the crack relates to movement in the building, we advise you on the right next step.",
    processTitle: "How We Approach a Cracked Tile",
    processIntro:
      "Cracked tiles need a cause diagnosis before a repair so the fix lasts. Here is the approach we take.",
    processSteps: [
      {
        title: "Inspect the crack",
        description:
          "We examine whether the crack is confined to the tile or a sign of movement in the bed or structure.",
      },
      {
        title: "Check the bedding",
        description:
          "We tap the tile to check for hollowness and assess the condition of the adhesive and screed beneath.",
      },
      {
        title: "Repair or replace",
        description:
          "Depending on the cause, we reset the bed or replace the tile, then grout the joints to match.",
      },
      {
        title: "Monitor and finish",
        description:
          "The repaired area is cleaned and checked, and we advise you on anything to watch for in future.",
      },
    ],
    propertyTypesIntro:
      "Cracked tile repair applies to every property type, with larger or more complex cases on bigger floors and outdoor areas.",
    faqs: [
      {
        question: "Can a hairline crack be filled instead of replacing the tile?",
        answer:
          "Sometimes a purely cosmetic crack can be filled and sealed. If the crack is structural or the tile is hollow, the tile needs to be replaced. We check before deciding.",
      },
      {
        question: "Will a cracked tile eventually break?",
        answer:
          "Often yes. A crack can widen under load and admit moisture, which accelerates hollowness. It is usually best to address it before the tile fails completely.",
      },
      {
        question: "Why do several tiles crack in a line?",
        answer:
          "A line of cracks suggests movement in the floor or wall beneath rather than individual tile faults. This should be assessed to rule out a structural issue.",
      },
      {
        question: "Do cracked balcony tiles need urgent attention?",
        answer:
          "Yes — outdoor tiles are exposed to weather, and a crack lets water through to the finish below. It is wise to fix it before the bed deteriorates.",
      },
      {
        question: "How much of the tile is removed for a repaired crack?",
        answer:
          "For a replacement, the single tile is cut out. For a filled surface crack, only a small amount of the surface is worked on, so the tile remains in place.",
      },
    ],
    relatedProblems: [
      "broken-tile-repair",
      "hollow-tile-problems",
      "uneven-tiles",
      "water-seepage-through-tiles",
    ],
  },
  {
    ...tilingBase,
    slug: "loose-tile-repair",
    name: "Loose Tile Repair",
    title: "Loose Tile Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Loose or lifting tiles repaired and re-secured in Kuala Lumpur & Selangor. Learn the causes of loose tiles, warning signs, solutions and when to call a tiling professional.",
    h1: "Loose Tile Repair",
    subtitle:
      "A loose tile can shift, crack and let water through. Renovix lifts it, re-beds it and secures it back to a firm, level surface.",
    whatItMeans: [
      "A loose tile is one that has lost its grip on the adhesive bed beneath it. It may move slightly when you step on it, feel springy, or be noticeably raised at one corner. Loose tiles often give a hollow or tapping sound when knocked, and if left they can crack, lift completely, or let water reach the surface and structure below.",
      "Loose tiles are one of the most common tiling failures in Malaysian homes and are usually the result of poor adhesion, an uneven bed, movement in the base, or trapped moisture. A single loose tile is a warning, but when several loosen together it often points to a bedding or waterproofing problem that needs to be addressed before retiling the area.",
    ],
    commonCauses: [
      "Insufficient adhesive coverage when the tile was originally laid.",
      "An uneven or dusty bed that never bonded properly to the tile.",
      "Movement or settling of the screed and floor beneath.",
      "Moisture trapped under the tile, often from a nearby leak or poor waterproofing.",
      "Thermal movement on balconies and outdoor floors where tiles expand and contract.",
      "Tiles laid with too large a gap or without proper joint allowance.",
    ],
    warningSigns: [
      "A tile that moves or feels springy when you press on it.",
      "A hollow or tapping sound when you knock on the tile.",
      "A raised corner or edge that catches your foot or collects dust.",
      "Grout cracking around a tile that was once firm.",
    ],
    solutions: [
      {
        title: "Re-bedding a loose tile",
        description:
          "The tile is lifted, the old adhesive cleaned away, and the bed re-prepared with fresh adhesive before the tile is reset securely.",
      },
      {
        title: "Addressing the underlying bed",
        description:
          "If the base is uneven or poorly bonded, we repair the screed or bed first so the re-set tile sits on a sound surface.",
      },
      {
        title: "Checking for moisture",
        description:
          "Where moisture is the cause, we identify the source and coordinate with waterproofing so the tile does not loosen again.",
      },
      {
        title: "Regrouting the joints",
        description:
          "Once the tile is reset, the surrounding grout is renewed so the tile is sealed and stable.",
      },
    ],
    whenToCall: [
      "More than one tile is loose, which can indicate a wider bedding issue.",
      "The tile is also cracked or lifting at the edge.",
      "The loose tile is in a wet area such as a bathroom or balcony.",
      "The floor feels hollow across a larger area, suggesting a failing bed.",
    ],
    relatedServiceNote:
      "Loose tile repair is a tiling job. Where trapped moisture is the cause, we coordinate with our waterproofing team.",
    processTitle: "How We Re-Secure a Loose Tile",
    processIntro:
      "Re-securing a loose tile is about a sound bed, not just fresh adhesive. This is the process we follow.",
    processSteps: [
      {
        title: "Locate and inspect the tile",
        description:
          "We find every loose tile and check the extent of the hollowness and any surrounding damage.",
      },
      {
        title: "Lift and clean the bed",
        description:
          "The tile is lifted, the old adhesive scraped away, and the base prepared for a good bond.",
      },
      {
        title: "Re-bed and level",
        description:
          "Fresh adhesive is applied and the tile is set back flush with the surrounding surface.",
      },
      {
        title: "Grout and seal",
        description:
          "The joints are regrouted and the area cleaned so the repair is neat and watertight.",
      },
    ],
    propertyTypesIntro:
      "Loose tile repair applies to all property types. Larger or repeated cases are common on older terraced homes and weather-exposed balconies.",
    faqs: [
      {
        question: "Can a loose tile be re-glued without removing it?",
        answer:
          "No — to fix a loose tile properly it must be lifted and the bed re-prepared. Injecting adhesive seldom gives a reliable bond and can leave the tile sitting proud.",
      },
      {
        question: "Why do tiles loosen years after they were installed?",
        answer:
          "Loose tiles usually fail because the adhesive never fully bonded, or because movement or moisture built up over time. The original installation and the conditions beneath matter more than age.",
      },
      {
        question: "Is a loose tile a sign of a bigger problem?",
        answer:
          "Sometimes. If only one tile is loose it is often an isolated fault. If several are loose or the floor is hollow over a wide area, a bedding or waterproofing problem is likely.",
      },
      {
        question: "Can a loose tile cause water damage?",
        answer:
          "Yes. A loose tile lets water slip through the joints and reach the base, which can damage the screed and the surface below, especially in wet areas.",
      },
      {
        question: "Will the repair be visible?",
        answer:
          "We match the tile and grout as closely as possible. Lifted and re-set tiles typically sit flat against the surrounding surface, so the repair is discreet.",
      },
    ],
    relatedProblems: [
      "hollow-tile-problems",
      "broken-tile-repair",
      "uneven-tiles",
      "water-seepage-through-tiles",
    ],
  },
  {
    ...tilingBase,
    slug: "hollow-tile-problems",
    name: "Hollow Tile Problems",
    title: "Hollow Tile Problems in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Hollow or drumming tiles in Kuala Lumpur & Selangor — what they mean, common causes, warning signs, solutions and when to call a tiling professional. Fix hollow tiles before they crack.",
    h1: "Hollow Tile Problems",
    subtitle:
      "A hollow tile is a sign that the bond beneath has failed. Renovix detects and fixes hollow tiles before they lift, crack or let water through.",
    whatItMeans: [
      "A hollow tile — often called a drummy tile — is one where the adhesive has not fully bonded to the base, leaving a void between the tile and the screed. You usually do not see it: the tile looks normal from the top, but when you tap it, it gives a hollow, drum-like sound instead of the solid, dull tone of a well-bonded tile.",
      "Hollow tiles are the early warning stage of a loose or lifting tile. The tile still appears fine, but over time the void lets the tile flex, crack and eventually break or shift. In wet areas, the gap beneath a hollow tile also becomes a channel where moisture travels, which can lead to seepage and damage to the floor below. Catching hollow tiles early is the cheapest way to avoid a larger repair.",
    ],
    commonCauses: [
      "Adhesive applied with insufficient coverage, leaving un-bonded areas under the tile.",
      "A dusty, uneven or too-soft bed that the tile could not grip.",
      "Tiles laid on a bed that had not fully cured or was too wet.",
      "Movement in the screed or structure separating the tile from its base.",
      "Moisture getting under the tile and weakening the adhesive over time.",
      "Expansion and contraction lifting the tile slightly off its bed.",
    ],
    warningSigns: [
      "A hollow or drumming sound when you tap the tile with a light object.",
      "The tile sounds hollow across its centre rather than at the edge.",
      "A subtle springiness when you press down on the tile.",
      "Grout that cracks or pops around an otherwise normal-looking tile.",
    ],
    solutions: [
      {
        title: "Survey the full area",
        description:
          "We tap the surface to map every hollow tile so repairs can be planned as a group rather than tile by tile.",
      },
      {
        title: "Lift and re-bed hollow tiles",
        description:
          "Hollow tiles are lifted, the old adhesive cleaned off, and the base re-prepared with fresh adhesive so the tile bonds firmly.",
      },
      {
        title: "Replace tiles that are cracked or compromised",
        description:
          "Where a hollow tile has already cracked or is too damaged to re-bed, we replace it with a matching tile.",
      },
      {
        title: "Coordinate with waterproofing for moisture",
        description:
          "Where hollowness is caused by moisture, we help trace the source so the fix addresses the reason rather than just the symptom.",
      },
    ],
    whenToCall: [
      "You knock on tiles and hear a hollow sound across a wide area.",
      "A hollow tile is also loose, cracked or lifting.",
      "The hollow area is in a bathroom, shower or balcony.",
      "You notice dampness or seepage near hollow tiles.",
    ],
    relatedServiceNote:
      "Hollow tile repair is a tiling task. Where moisture is involved, we coordinate with our waterproofing team to fix the source.",
    processTitle: "How We Fix Hollow Tiles",
    processIntro:
      "Fixing hollow tiles comes down to rebonding the tile to a sound base. This is how we work through it.",
    processSteps: [
      {
        title: "Map the hollow area",
        description:
          "We tap the surface to identify the extent of the hollowness and any tiles that are already compromised.",
      },
      {
        title: "Lift the affected tiles",
        description:
          "Hollow tiles are carefully lifted, with minimal damage to the surrounding tiles and base.",
      },
      {
        title: "Re-prepare the bed",
        description:
          "Old adhesive is cleaned off and the base levelled so the tile can bond across its full surface.",
      },
      {
        title: "Reset and grout",
        description:
          "Tiles are reset flush with fresh adhesive and the joints are regrouted to seal the surface.",
      },
    ],
    propertyTypesIntro:
      "Hollow tiles can occur in any property type. They are often found in older apartments and homes where tiling spans several years of use.",
    faqs: [
      {
        question: "How do I check for hollow tiles at home?",
        answer:
          "Lightly tap the tile with a hard object such as the handle of a screwdriver. A solid, dull sound means the tile is bonded; a hollow, drumming sound indicates a gap beneath it.",
      },
      {
        question: "Do all hollow tiles need to be replaced?",
        answer:
          "Not necessarily. Many hollow tiles can be lifted and re-bedded. We only replace a tile if it is cracked or too damaged to re-set.",
      },
      {
        question: "Is a hollow tile dangerous?",
        answer:
          "Not an immediate safety issue, but a hollow tile is weak and can crack under load, and it can let moisture through in wet areas. It is best addressed early.",
      },
      {
        question: "Can hollow tiles be fixed by injecting adhesive underneath?",
        answer:
          "Injecting adhesive is often not reliable for established hollow tiles. Lifting and re-bedding gives a much stronger, longer-lasting bond.",
      },
      {
        question: "If a whole floor sound hollow, what should I do?",
        answer:
          "That points to a bedding or adhesion failure across the floor rather than a single tile. We recommend a professional assessment before deciding on repairs.",
      },
    ],
    relatedProblems: [
      "loose-tile-repair",
      "cracked-tile-repair",
      "uneven-tiles",
      "water-seepage-through-tiles",
    ],
  },
  {
    ...tilingBase,
    slug: "uneven-tiles",
    name: "Uneven Tiles",
    title: "Uneven Tile Floors in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Uneven tiles, lippage and sloping floors fixed in Kuala Lumpur & Selangor. Learn the causes of uneven tiling, warning signs, levelling solutions and when to call a tiling professional.",
    h1: "Uneven Tiles",
    subtitle:
      "Tiles at different heights create tripping hazards and let dirt and water collect. Renovix levels uneven floors and corrects lippage.",
    whatItMeans: [
      "Uneven tiles describes a floor or wall surface where individual tiles sit at different heights — a condition often called lippage. The difference may be small, but over a large floor it becomes obvious, creating a lip that catches the foot, pockets where dirt and water collect, and a finish that looks unfinished.",
      "Uneven floors are more than a cosmetic concern. They can be a tripping hazard, make furniture wobble, and prevent water from draining correctly in bathrooms. They often result from a poorly leveled screed, tiles laid without proper leveling systems, or movement in the base after installation. In Kuala Lumpur homes, uneven floors are common in older properties and in renovations where tiling was rushed.",
    ],
    commonCauses: [
      "A screed or floor base that was not leveled before tiling.",
      "Inconsistent tile thickness or warped tiles used in the same area.",
      "Tiles laid without leveling clips or spacers to keep them flush.",
      "Adhesive applied at uneven thickness across the floor.",
      "Settlement or movement in the base after the tiles were laid.",
      "Rushing the installation to avoid cutting or to save time.",
    ],
    warningSigns: [
      "A visible lip or step between adjoining tiles.",
      "Walking over the floor reveals a raised edge or a slight pivot underfoot.",
      "Dust, crumbs or water pooling in the joints between tiles.",
      "Furniture rocking or wobbling on what should be a flat floor.",
    ],
    solutions: [
      {
        title: "Level and screed before retiling",
        description:
          "Where the floor is genuinely uneven, we level and screed the base before laying new tiles so the surface is flat.",
      },
      {
        title: "Re-set individual uneven tiles",
        description:
          "Where only one or a few tiles sit proud, we lift, re-bed and reset them flush with the surrounding floor.",
      },
      {
        title: "Correct lippage during installation",
        description:
          "For new tiling, we use leveling systems and consistent bedding to keep every tile at the same height.",
      },
      {
        title: "Grout and finish the joints",
        description:
          "Once the surface is level, joints are grouted cleanly so the floor reads as one flat, finished surface.",
      },
    ],
    whenToCall: [
      "The uneven area creates a tripping hazard or a noticeable step.",
      "Water is pooling on a bathroom or balcony floor instead of draining.",
      "Several tiles are affected and the floor appears to slope or hollow.",
      "You are planning new tiling and want to avoid the problem from the start.",
    ],
    relatedServiceNote:
      "Uneven floors are a tiling and preparation issue. We also coordinate with flooring and general renovation where the whole surface needs redoing.",
    processTitle: "How We Level Uneven Tiles",
    processIntro:
      "Correcting an uneven floor depends on whether tiles are already laid or you are preparing for new tiling. This is the approach.",
    processSteps: [
      {
        title: "Measure the level",
        description:
          "We check the floor across the area to identify where the surface varies and whether the screed is the cause.",
      },
      {
        title: "Decide between re-setting and retiling",
        description:
          "Depending on the extent, we either re-set the affected tiles or recommend a full level and retile for a clean result.",
      },
      {
        title: "Level the base",
        description:
          "Where retiling is needed, we apply a leveling screed so the new tiles sit on a truly flat surface.",
      },
      {
        title: "Lay and finish flush",
        description:
          "New tiles are laid and finished with consistent joints and grout, so the whole floor is level.",
      },
    ],
    propertyTypesIntro:
      "Uneven tiles can affect any property type, from single tiles in a bathroom to a full ground floor in a large home.",
    faqs: [
      {
        question: "What is tile lippage?",
        answer:
          "Lippage is the difference in height between two adjoining tiles, creating a raised edge or lip. It is usually caused by uneven bedding or tiles of differing thickness.",
      },
      {
        question: "Can uneven tiles be fixed without removing them?",
        answer:
          "If the difference is small and the tile is sound, you can sometimes grind the edge and re-grout. For a real lip or a hollow tile, the tile usually needs to be re-set or replaced.",
      },
      {
        question: "Is an uneven floor dangerous?",
        answer:
          "It can be. A raised lip is a tripping hazard, and in bathrooms uneven floors stop water draining correctly, which can lead to stains and slippage.",
      },
      {
        question: "How much does it cost to level a floor before tiling?",
        answer:
          "The cost depends on the size of the area and how much leveling compound is needed. We provide a quotation after inspecting the surface and the scope of the correction.",
      },
      {
        question: "Will leveling clips stop uneven tiles?",
        answer:
          "Yes, leveling clips and a consistent bed are the standard way to prevent lippage. They hold adjoining tiles flush while the adhesive cures.",
      },
    ],
    relatedProblems: [
      "hollow-tile-problems",
      "loose-tile-repair",
      "tile-grout-problems",
      "bathroom-tile-problems",
    ],
  },
  {
    ...tilingBase,
    slug: "tile-grout-problems",
    name: "Tile Grout Problems",
    title: "Tile Grout Problems in Kuala Lumpur & Selangor | Regrouting | Renovix",
    metaDescription:
      "Crumbling, stained or missing tile grout fixed in Kuala Lumpur & Selangor. Learn the causes of grout problems, warning signs, regrouting solutions and when to call a tiler.",
    h1: "Tile Grout Problems",
    subtitle:
      "Grout holds tiles together and keeps water out. When it wears or crumbles, Renovix regrouts so your tiles stay secure and sealed.",
    whatItMeans: [
      "Tile grout is the material that fills the joints between tiles. It does more than make the surface look tidy — it locks the tiles together, spreads load and, critically, stops water and dirt reaching the adhesive bubble and base below. When grout wears, cracks, crumbles or stains, the joints lose their protective function.",
      "Grout problems are some of the most common tiling issues in Malaysian homes and commercial spaces. In wet areas, worn grout lets moisture soak through to the screed, which can cause hollow tiles, mould and even seepage into the room below. In high-traffic areas, grout wears away and leaves the tiles with no lateral support, so they start to loosen.",
    ],
    commonCauses: [
      "Age and wear in high-traffic areas where grout is walked over repeatedly.",
      "Incorrectly mixed grout that was too wet, too dry or not fully sealed.",
      "Expansion and contraction of tiles squeezing the grout over time.",
      "Moisture and cleaning chemicals breaking the grout down.",
      "Grout joints that were too wide or too narrow for the tile size.",
      "Missing or worn sealant that allowed water and dirt into the joints.",
    ],
    warningSigns: [
      "Grout that is powdery, crumbly or flaking out of the joints.",
      "Dark staining or mould in the grout that will not clean off.",
      "Cracks running along the grout lines between tiles.",
      "Loose or hollow tiles appearing next to a failing grout line.",
    ],
    solutions: [
      {
        title: "Regrouting the affected area",
        description:
          "Old, failing grout is scraped out and replaced with fresh grout matched to the existing colour.",
      },
      {
        title: "Sealing the grout",
        description:
          "After regrouting, we apply a sealer to protect the joints from water and staining — especially important in bathrooms and kitchens.",
      },
      {
        title: "Repairing individual joints",
        description:
          "Where only a few joints have failed, we spot-repair them rather than redoing the whole surface.",
      },
      {
        title: "Addressing the cause",
        description:
          "If grout keeps failing, we check the joint width, the tile edges and any underlying movement, and advise on a lasting fix.",
      },
    ],
    whenToCall: [
      "Grout is crumbling and leaving the tiles unsupported.",
      "Mould will not come off the grout in a wet area.",
      "Water is seeping through the joints into the floor below.",
      "The grout is failing alongside hollow or loose tiles.",
    ],
    relatedServiceNote:
      "Grout repair is part of our tiling service. Where moisture is involved, we coordinate with waterproofing to protect the surface beneath.",
    processTitle: "How We Regrout Tiles",
    processIntro:
      "A clean regrout restores a sealed, stable surface. Here is the sequence we follow.",
    processSteps: [
      {
        title: "Assess the joints",
        description:
          "We check the condition of the grout, the width and depth of the joints, and whether any tiles are loose beneath.",
      },
      {
        title: "Remove the old grout",
        description:
          "Worn or failing grout is carefully scraped out without damaging the tile edges.",
      },
      {
        title: "Apply fresh grout",
        description:
          "New grout is mixed and pressed into the joints, then wiped clean for a neat finish.",
      },
      {
        title: "Seal and clean",
        description:
          "The grout is sealed to protect against moisture, and the surface is cleaned and polished.",
      },
    ],
    propertyTypesIntro:
      "Grout problems occur in every property type, most visibly in bathrooms, kitchens and high-traffic hallways.",
    faqs: [
      {
        question: "Why does grout crumble and fall out?",
        answer:
          "Grout crumbles when it was mixed too wet or dry, when the joint width is wrong, or when moisture and wear have broken it down over time.",
      },
      {
        question: "Can old grout be cleaned instead of replaced?",
        answer:
          "Surface staining can sometimes be cleaned, but grout that is crumbling, cracked or deeply stained usually needs to be removed and replaced for a lasting fix.",
      },
      {
        question: "How long does a regrout last?",
        answer:
          "With correct mixing, sealing and reasonable care, a regrout typically lasts for many years. Sealing the joints greatly extends its life.",
      },
      {
        question: "Should grout be replaced before waterproofing a bathroom?",
        answer:
          "Yes — sound, well-sealed grout is part of a watertight surface. If grout is failing, we recommend regrouting and sealing before or as part of waterproofing work.",
      },
      {
        question: "Is it worth sealing grout after regrouting?",
        answer:
          "Yes. Sealing makes the grout much more resistant to water, dirt and staining, which is particularly worthwhile in bathrooms, kitchens and balconies.",
      },
    ],
    relatedProblems: [
      "bathroom-tile-problems",
      "kitchen-tile-problems",
      "water-seepage-through-tiles",
      "uneven-tiles",
    ],
  },
  {
    ...tilingBase,
    slug: "bathroom-tile-problems",
    name: "Bathroom Tile Problems",
    title: "Bathroom Tile Problems in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Bathroom tile problems in Kuala Lumpur & Selangor — cracked, loose, hollow or water-damaged bathroom tiles repaired. Learn the causes, warning signs, solutions and when to call a tiler.",
    h1: "Bathroom Tile Problems",
    subtitle:
      "Bathroom tiles face water, heat and constant use. Renovix repairs cracked, hollow and water-damaged tiles and protects the room beneath.",
    whatItMeans: [
      "Bathroom tiles are under more stress than anywhere else in the home. They are constantly wet, exposed to heat and humidity, and walked on barefoot daily. Over time this combination causes tiles to crack, hollow out, loosen, or let water seep through to the floor and walls below. Bathroom tile problems are therefore not just about appearance — a failing tile can quickly turn into a waterproofing problem.",
      "A damaged bathroom tile in Kuala Lumpur is often the visible sign of a deeper issue. Poor original waterproofing, insufficient adhesive, a cracked screed or a leaking pipe behind the wall can all cause tiles to fail in a bathroom. Because the room is so wet, problems also tend to spread: a cracked tile lets water into the bed, which loosens neighbouring tiles and can eventually damage the floor below.",
    ],
    commonCauses: [
      "Insufficient or failed waterproofing beneath the tiles.",
      "A hollow tile bed that flexes underfoot and cracks.",
      "Water seeping behind tiles through cracked grout or a missing tile.",
      "Settlement or movement in the bathroom floor slab or screed.",
      "Poor original installation with insufficient adhesive or leveling.",
      "A concealed leaking pipe or fitting behind the wall or floor.",
    ],
    warningSigns: [
      "Cracked, hollow or loose tiles in the shower, floor or wall.",
      "Discoloured or soft grout, or dark staining around the tiles.",
      "A damp or musty smell in the bathroom.",
      "Seepage or dampness appearing on the ceiling of the room below.",
    ],
    solutions: [
      {
        title: "Repair the affected tiles",
        description:
          "Cracked, hollow or loose bathroom tiles are lifted, re-bedded or replaced with matching tiles.",
      },
      {
        title: "Re-waterproof the wet area",
        description:
          "Where the waterproof membrane has failed, we coordinate with our waterproofing team to renew it before retiling.",
      },
      {
        title: "Regrout and seal the joints",
        description:
          "Failing grout is replaced and sealed so water cannot get through the joints into the bed.",
      },
      {
        title: "Trace any plumbing issue",
        description:
          "If a leak is the cause, we coordinate with plumbing to repair the pipe or fitting before the tiles are redone.",
      },
    ],
    whenToCall: [
      "Bathroom tiles are cracking, hollowing or loosening in a wet area.",
      "You notice dampness or staining on the ceiling below the bathroom.",
      "Water is pooling or draining slowly on the bathroom floor.",
      "The grout is stained, mouldy or failing and water is getting through.",
    ],
    relatedServiceNote:
      "Bathroom tile work is a tiling job that often needs waterproofing and plumbing coordination. Renovix can handle all three through one team.",
    processTitle: "How We Approach Bathroom Tile Problems",
    processIntro:
      "Bathroom tile repairs need to consider the wet environment, not just the tile itself. This is how we work.",
    processSteps: [
      {
        title: "Assess the bathroom",
        description:
          "We inspect the tiles, grout, floor slope and moisture to understand the scope and any hidden cause.",
      },
      {
        title: "Check waterproofing and plumbing",
        description:
          "We look for signs of a failed membrane or a concealed leak before deciding on the repair approach.",
      },
      {
        title: "Repair or replace the tiles",
        description:
          "Damaged tiles are re-bedded or replaced, with regrouting and sealing to make the surface watertight.",
      },
      {
        title: "Coordinate related work",
        description:
          "Where waterproofing or plumbing is involved, we sequence the work so the bathroom is finished correctly.",
      },
    ],
    propertyTypesIntro:
      "Bathroom tile problems affect every property type. They are especially relevant in condos and apartments where a leak can affect neighbours below.",
    faqs: [
      {
        question: "Why do bathroom tiles fail so often?",
        answer:
          "Bathrooms combine water, heat, humidity and bare feet, which is hard on tiles. Poor waterproofing, a hollow bed or a concealed leak accelerate failure.",
      },
      {
        question: "Do bathroom tile repairs always need waterproofing?",
        answer:
          "Not always, but if the tile failed because of moisture, re-waterproofing is usually needed to stop it recurring. We check the membrane and advise accordingly.",
      },
      {
        question: "Can a bathroom tile problem affect the floor below?",
        answer:
          "Yes. Water that gets through a cracked tile or failed grout can travel down and cause staining or damage to the ceiling below. This is why bathroom issues should be addressed promptly.",
      },
      {
        question: "Will you remove the whole bathroom floor to repair one tile?",
        answer:
          "No. A single damaged tile can usually be cut out and replaced. We only recommend a full retile when many tiles are failing or the wet area needs re-waterproofing.",
      },
      {
        question: "How do I know if my bathroom needs re-waterproofing?",
        answer:
          "Signs include water stains on the ceiling below, a damp smell, peeling paint or tiles that keep loosening. A professional can confirm the condition of the membrane.",
      },
    ],
    relatedProblems: [
      "water-seepage-through-tiles",
      "tile-grout-problems",
      "hollow-tile-problems",
      "cracked-tile-repair",
    ],
  },
  {
    ...tilingBase,
    slug: "kitchen-tile-problems",
    name: "Kitchen Tile Problems",
    title: "Kitchen Tile Problems in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Kitchen tile problems in Kuala Lumpur & Selangor — cracked, hollow, stained or water-damaged kitchen tiles repaired. Learn causes, warning signs, solutions and when to call a tiler.",
    h1: "Kitchen Tile Problems",
    subtitle:
      "Kitchen tiles take spills, heat and heavy traffic. Renovix repairs damaged kitchen floor and wall tiles and restores a clean, durable surface.",
    whatItMeans: [
      "Kitchen tiles work hard. The kitchen floor and the walls around the bench face spills, splashes of oil and water, dropped utensils and the weight of heavy appliances. Over time this wears the tiles and grout, and can lead to cracked, hollow or stained tiles that are difficult to keep clean. Kitchen tile problems are common in both older homes and recently renovated ones alike.",
      "Kitchen tiling differs from a bathroom in a few ways. There is less standing water but more impact and abrasion, and the splashback area is exposed to oil and heat as well as moisture. A cracked kitchen tile or stained grout not only looks tired, it can allow dirt to penetrate and make the surface harder to keep hygienic — which matters in a room where food is prepared.",
    ],
    commonCauses: [
      "Heavy objects dropped on the kitchen floor, such as pots and pans.",
      "Frequent spills that penetrate the grout and reach the tile bed.",
      "Adhesive or leveling problems that leave tiles hollow or uneven.",
      "Movement in the kitchen floor or the return of a splashback tile.",
      "Staining from oil, food or coloured liquids that soak into the grout.",
      "A concealed leak behind the sink or under the tiled surface.",
    ],
    warningSigns: [
      "Cracked, chipped or hollow tiles on the floor or splashback.",
      "Grout that is stained, greasy or crumbling around the bench.",
      "A tile that lifts at the edge or sounds hollow when tapped.",
      "Water or damp appearing around the sink or on the floor below.",
    ],
    solutions: [
      {
        title: "Replace damaged tiles",
        description:
          "Cracked or broken kitchen tiles are cut out and replaced with matching tiles, including under appliances where needed.",
      },
      {
        title: "Regrout and seal the joints",
        description:
          "Stained or failing grout is replaced and sealed so the surface is easier to clean and stays hygienic.",
      },
      {
        title: "Re-bed hollow tiles",
        description:
          "Hollow or loose kitchen tiles are lifted, re-bedded and reset flush on a sound base.",
      },
      {
        title: "Trace a leak behind the tiles",
        description:
          "If the problem is moisture from the sink or plumbing, we coordinate with plumbing before touching the tile.",
      },
    ],
    whenToCall: [
      "Several kitchen tiles are cracking, hollowing or lifting.",
      "Grout is badly stained or crumbling and water is getting through.",
      "A tile under an appliance has cracked and needs to be removed.",
      "There is dampness or a leak near the sink or under the floor.",
    ],
    relatedServiceNote:
      "Kitchen tile repair is a tiling job. Where a leak is involved, we coordinate with plumbing, and with general renovation for larger kitchen upgrades.",
    processTitle: "How We Repair Kitchen Tile Problems",
    processIntro:
      "Kitchen tile repairs are done carefully to work around appliances and fixtures. This is the approach.",
    processSteps: [
      {
        title: "Inspect the affected area",
        description:
          "We assess the tiles, grout and any moisture to pin down the extent and cause of the problem.",
      },
      {
        title: "Plan around fixtures",
        description:
          "We plan the repair so it can be carried out around the sink, cabinets and appliances without unnecessary disruption.",
      },
      {
        title: "Repair or replace the tiles",
        description:
          "Damaged tiles are re-bedded or replaced, and the joints are regrouted and sealed.",
      },
      {
        title: "Clean and finish",
        description:
          "The area is cleaned and left tidy, with the surface ready for normal kitchen use.",
      },
    ],
    propertyTypesIntro:
      "Kitchen tile problems affect all property types. They are most common in terraced homes and apartments where kitchens see daily cooking.",
    faqs: [
      {
        question: "Can a kitchen tile under an oven or cabinet be replaced?",
        answer:
          "Yes. We can cut out and replace a tile beneath an appliance, though the appliance may need to be moved. We plan the job so it is done safely.",
      },
      {
        question: "Why has my kitchen grout gone dark and won't clean?",
        answer:
          "Staining and grime soak into unsealed or porous grout. Replacing and sealing the grout is usually the most reliable way to restore a clean surface.",
      },
      {
        question: "Are kitchen splashback tiles more likely to crack?",
        answer:
          "Splashback tiles can crack from impact or from movement in the wall, and they are exposed to heat and oil. A cracked splashback tile should be replaced before water or grime gets in.",
      },
      {
        question: "Do kitchen tile repairs take a long time?",
        answer:
          "Most individual tile or grout repairs are completed within a day. Larger repairs, like a section of the floor, take a little longer depending on the scope.",
      },
      {
        question: "Should I regrout or replace the whole kitchen floor?",
        answer:
          "If only the grout or a few tiles are failing, regrouting or targeted replacement is enough. A full retile is only recommended if the bed or tiles are failing across the floor.",
      },
    ],
    relatedProblems: [
      "tile-grout-problems",
      "broken-tile-repair",
      "hollow-tile-problems",
      "uneven-tiles",
    ],
  },
  {
    ...tilingBase,
    slug: "water-seepage-through-tiles",
    name: "Water Seepage Through Tiles",
    title: "Water Seepage Through Tiles in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Water seeping through tiles in Kuala Lumpur & Selangor — what it means, common causes, warning signs, waterproofing solutions and when to call a professional.",
    h1: "Water Seepage Through Tiles",
    subtitle:
      "Water moving through tiles is a warning that the wet area beneath has failed. Renovix finds the source and seals it properly.",
    whatItMeans: [
      "Water seepage through tiles happens when moisture travels through the tile joints, cracks or a failed membrane behind the tiles and reaches the screed or the structure below. It is often noticed not in the bathroom itself, but on the ceiling of the room below, or as damp patches, mould or a rising water stain on the wall. Because the tiles themselves look fine, the problem can go unnoticed for some time.",
      "Seepage is more than a nuisance — it can damage the concrete slab, rot timber, corrode steel reinforcement and create a health issue from mould. In condominiums it can also affect the neighbour below, which makes it important to address early. The cause is usually a failed or absent waterproofing layer, cracked grout, a hollow tile, or a concealed plumbing leak that allows water to migrate through the tiled surface.",
    ],
    commonCauses: [
      "Failed or absent waterproofing membrane under the tiles.",
      "Cracked, missing or unsealed grout letting water through the joints.",
      "Hollow or loose tiles with a gap beneath for water to travel.",
      "A concealed leak from a pipe or fitting behind the tiles.",
      "The waterproofing only covering part of the wet area, e.g. not the walls.",
      "Movement or settling in the floor creating fine cracks water can follow.",
    ],
    warningSigns: [
      "A water stain or damp patch appearing on the ceiling below the wet area.",
      "Musty smell, mould or peeling paint on a nearby wall.",
      "Water staining or discolouration around the edges of the bathroom or balcony.",
      "Tiles that feel cool, damp or begin to sound hollow.",
    ],
    solutions: [
      {
        title: "Identify the source",
        description:
          "We trace where the water is entering — through the tiles, a broken membrane or a pipe — so the fix targets the right point.",
      },
      {
        title: "Re-waterproof the wet area",
        description:
          "Where the membrane has failed, we strip back the affected surface, renew the waterproofing and retile where needed.",
      },
      {
        title: "Repair grout and replace damaged tiles",
        description:
          "Failing grout is renewed and sealed, and hollow or cracked tiles are repaired so water cannot get through them.",
      },
      {
        title: "Coordinate with plumbing",
        description:
          "If a concealed pipe or fitting is the cause, we coordinate with plumbing to repair it before the surface is closed up.",
      },
    ],
    whenToCall: [
      "There is a water stain or damp patch on the ceiling below a wet area.",
      "Water is still seeping after you have resealed the grout.",
      "You notice mould or peeling paint spreading on a nearby wall.",
      "You live in a condo unit and the leak is likely to affect a neighbour.",
    ],
    relatedServiceNote:
      "Seepage through tiles is a waterproofing issue as much as a tiling one. Renovix coordinates waterproofing, tiling and plumbing through a single team.",
    processTitle: "How We Stop Seepage Through Tiles",
    processIntro:
      "Stopping seepage means fixing the path the water takes. This is how we approach it.",
    processSteps: [
      {
        title: "Trace the water path",
        description:
          "We inspect the wet area, the grout, the membrane and the surrounding structure to locate the source of the water.",
      },
      {
        title: "Repair the source",
        description:
          "We fix the cause — whether it is a failed membrane, cracked grout, hollow tile or a plumbing leak.",
      },
      {
        title: "Renew the waterproofing",
        description:
          "Where needed, we apply a fresh waterproofing membrane across the wet area so the surface is watertight.",
      },
      {
        title: "Retile and seal",
        description:
          "The affected tiles are reinstalled or repaired and the joints are grouted and sealed to complete the fix.",
      },
    ],
    propertyTypesIntro:
      "Seepage through tiles is most common in bathrooms, balconies and toilets, but it can affect any property type where a wet area is tiled.",
    faqs: [
      {
        question: "Why do my bathroom tiles look fine but the ceiling below is stained?",
        answer:
          "Water can travel through joints, cracks or a failed membrane behind intact tiles, so the surface can look fine while moisture is passing through. This is why a stain below is a strong signal.",
      },
      {
        question: "Is resealing the grout enough to stop seepage?",
        answer:
          "Not always. If the waterproofing membrane has failed, resealing the grout will only slow the problem. The membrane usually needs to be renewed for a lasting fix.",
      },
      {
        question: "Can seepage damage the building structure?",
        answer:
          "Yes. Long-term moisture can damage the slab, corrode steel and encourage mould. It is worth addressing before the damage spreads.",
      },
      {
        question: "Do I need to remove all the tiles to fix seepage?",
        answer:
          "It depends on the extent. Sometimes only part of the wet area needs to be opened up. We assess and recommend the least invasive approach that still fixes the cause.",
      },
      {
        question: "I live in a condo — who is responsible for a leaked waterproofing?",
        answer:
          "The responsibility depends on the location of the fault. We can assess the source and advise on how to coordinate with the management where the issue concerns the building.",
      },
    ],
    relatedProblems: [
      "bathroom-tile-problems",
      "hollow-tile-problems",
      "tile-grout-problems",
      "bathroom-leakage",
    ],
  },
];
