import type { ProblemDetail } from "./types";

/**
 * Flooring problem guides.
 *
 * CONTENT_MAP previously listed "flooring has no dedicated problem guides" as
 * an accepted gap, on the basis that flooring questions were answered on the
 * pillar page. These four cover the faults that are specific to SPC, vinyl and
 * laminate — swelling, lifting, hollow spots and squeaks — which the tiling
 * problem guides genuinely do not answer.
 */
export const flooringProblems: ProblemDetail[] = [
  {
    slug: "swollen-flooring",
    category: "flooring",
    name: "Swollen or Water-Damaged Flooring",
    title: "Renovix Home Services | Swollen Flooring Repair in KL & Selangor",
    metaDescription:
      "Swollen laminate, vinyl and SPC flooring in Kuala Lumpur & Selangor. Learn what causes swelling, which boards can be saved, why the moisture source matters most, and when to call for repair.",
    h1: "Swollen or Water-Damaged Flooring",
    subtitle:
      "Swollen flooring is almost always a water problem wearing a flooring costume — replacing the boards without finding the source guarantees a repeat.",
    whatItMeans: [
      "Swelling is what happens when a board absorbs water and expands. It is most dramatic in laminate, whose core is a compressed wood fibreboard that acts rather like a sponge once water gets past the wear layer: the board thickens, the edges lift into a ridge, and the damage is permanent because the fibres do not return to their original size when they dry.",
      "SPC and vinyl behave differently. Their cores are not wood-based, so the plank itself does not swell in the same way. What fails instead is what is underneath and around: water gets under the floating floor through a gap or an edge, sits on the subfloor, and shows up as lifting, cupping or a musty smell rather than a swollen board. That difference matters because it changes both the repair and how urgent it is.",
    ],
    commonCauses: [
      "A plumbing leak under or beside the floor — often a slow one from a pipe, water heater or washing machine.",
      "Water tracked in from a bathroom or kitchen threshold that has no seal.",
      "Mopping with too much water, particularly on laminate.",
      "A spill left standing, or a potted plant that drains onto the floor.",
      "Rising damp through a slab with no or failed damp-proofing.",
      "Condensation from an air-conditioner unit or its drainage line.",
      "Flooring installed without the expansion gap it needs, so normal movement has nowhere to go.",
    ],
    warningSigns: [
      "Board edges raised into a ridge you can feel underfoot.",
      "Boards cupping, doming or lifting away from the subfloor.",
      "A soft or spongy patch when you step on it.",
      "A musty smell in the room, which usually means moisture is trapped underneath.",
      "Gaps opening between planks, or the opposite — planks buckling tight against each other.",
      "Discolouration or dark staining spreading from one point.",
    ],
    solutions: [
      {
        title: "Find and stop the moisture source first",
        description:
          "Before any board is touched we identify where the water is coming from. Replacing flooring over an active leak is money spent twice, so this step is not optional.",
      },
      {
        title: "Dry out the subfloor",
        description:
          "The affected area is opened up and allowed to dry properly. Laying new flooring onto a damp subfloor traps the moisture and the new floor fails too.",
      },
      {
        title: "Replace the affected boards",
        description:
          "Swollen laminate cannot be restored and is replaced. With click-lock flooring, individual planks can often be swapped without redoing the whole room.",
      },
      {
        title: "Correct the installation detail",
        description:
          "Where the cause was a missing expansion gap, an unsealed threshold or a missing moisture barrier, we fix that too, so the same failure does not recur.",
      },
    ],
    whenToCall: [
      "The swelling is spreading, which means the moisture source is still active.",
      "You can smell damp or mould in the room.",
      "The floor is soft or spongy underfoot.",
      "You suspect a plumbing leak beneath or behind the floor.",
      "The swelling appeared without any spill you can account for.",
    ],
    relatedService: "flooring",
    relatedServiceNote:
      "Flooring repair is handled by our flooring team, working with plumbing or waterproofing where the moisture source turns out to be a leak or a seepage problem.",
    processTitle: "How We Repair Swollen Flooring",
    processIntro:
      "The order matters here: source, then dry, then replace. Doing it in any other order means doing it twice.",
    processSteps: [
      {
        title: "Trace the moisture",
        description:
          "We inspect the affected area and the likely sources — plumbing, thresholds, air-conditioner drainage, external walls — to find where the water is entering.",
      },
      {
        title: "Lift the affected boards and dry",
        description:
          "Damaged boards are lifted so the subfloor can be inspected and dried out properly.",
      },
      {
        title: "Rectify the cause",
        description:
          "The leak is repaired or the detail corrected, in coordination with our plumbing or waterproofing team where needed.",
      },
      {
        title: "Replace and reinstate",
        description:
          "New boards are fitted with the correct expansion gap and any missing moisture barrier, and the trims are reinstated.",
      },
    ],
    propertyTypesIntro:
      "Where flooring swells depends on where the water comes from, and that varies by property type.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Ground-floor slabs can suffer rising damp; kitchen and bathroom thresholds are the usual entry points.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Larger ground-floor areas mean a slow leak can spread a long way before anyone notices.",
      },
      {
        label: "Condominiums & apartments",
        note: "Leaks from the unit above, or from your own bathroom, are the most frequent cause; the source may not be in your unit at all.",
      },
      {
        label: "Shoplots & commercial",
        note: "Washroom and pantry areas and air-conditioner drainage lines are common sources.",
      },
      {
        label: "Older properties",
        note: "Slabs built without an effective damp-proof membrane can push moisture up into a floating floor laid over them.",
      },
    ],
    areasNote:
      "We repair swollen and water-damaged flooring across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Can swollen laminate flooring be repaired, or must it be replaced?",
        answer:
          "Swollen laminate cannot be restored. The core is a compressed fibreboard, and once it absorbs water the fibres expand permanently — drying it out does not bring the board back to its original thickness. The affected planks are replaced. The good news is that click-lock laminate can usually be replaced plank by plank rather than room by room.",
      },
      {
        question: "Is SPC flooring waterproof, so this cannot happen?",
        answer:
          "The SPC plank itself is water-resistant, and it will not swell the way laminate does. But the floor as a system is not sealed: water can still travel through the joints and sit on the subfloor underneath, which leads to lifting, a musty smell and mould. So SPC gives you much more tolerance for spills, not immunity from a leak.",
      },
      {
        question: "Only two planks are damaged. Do I have to redo the whole room?",
        answer:
          "Usually not. Click-lock flooring can be taken up from the nearest wall and individual planks swapped. The practical issue is matching: if the floor is a few years old, the replacement planks may differ slightly in shade. Keeping leftover planks from the original installation is genuinely useful for exactly this reason.",
      },
      {
        question: "Why did my floor swell when I never spilled anything?",
        answer:
          "That is the important question, and it usually points to a source you cannot see — a slow plumbing leak, an air-conditioner drainage line, moisture rising through the slab, or water coming from a neighbouring unit or room. Swelling with no obvious spill is a strong reason to have the source traced before replacing anything.",
      },
      {
        question: "Can I just dry it out with a fan and see if it settles?",
        answer:
          "Drying is worth doing and will help the subfloor, but it will not un-swell a laminate board. And if the moisture source is still active, drying the surface simply hides the problem while it continues underneath. Use the fan, but find the source as well.",
      },
    ],
    relatedServices: ["flooring", "plumbing", "waterproofing"],
    relatedProblems: ["lifting-floor-planks", "hollow-flooring", "water-leakage"],
  },
  {
    slug: "lifting-floor-planks",
    category: "flooring",
    name: "Lifting or Separating Floor Planks",
    title: "Renovix Home Services | Lifting Floor Plank Repair in KL & Selangor",
    metaDescription:
      "SPC, vinyl and laminate planks lifting, gapping or peaking in Kuala Lumpur & Selangor. Understand expansion gaps, subfloor flatness and adhesive failure, and how each is repaired.",
    h1: "Lifting or Separating Floor Planks",
    subtitle:
      "Planks that lift, gap or peak into a ridge are nearly always telling you about the installation rather than the flooring product.",
    whatItMeans: [
      "A floating floor is designed to move. SPC, vinyl and laminate planks all expand and contract slightly with temperature, and in a Malaysian home the difference between an air-conditioned bedroom at night and a closed-up room at two in the afternoon is enough to matter. The installation handles that by leaving an expansion gap around the perimeter, hidden under the skirting, so the whole floor can breathe.",
      "When planks lift, peak into a ridge or separate into gaps, one of three things has usually gone wrong: the expansion gap was too small or was bridged by something screwed through the floor, the subfloor was not flat enough, or a glued-down floor has lost adhesion. None of these are faults in the plank itself, which is why simply replacing the planks rarely solves it.",
    ],
    commonCauses: [
      "No expansion gap, or a gap too small for the size of the room.",
      "The expansion gap blocked — by a door frame, a heavy fitted cabinet, or a skirting nailed through the floor.",
      "An uneven subfloor, so the planks bridge a hollow and flex until the joint fails.",
      "Adhesive failure on a glued-down vinyl floor, often from laying onto a dusty or damp subfloor.",
      "Moisture beneath the floor lifting or distorting the planks.",
      "Heavy furniture pinning one area while the rest of the floor expands around it.",
      "Click joints that were not fully engaged during installation.",
    ],
    warningSigns: [
      "A ridge or peak where two planks meet, most often across the middle of a room.",
      "Visible gaps opening between planks that were previously tight.",
      "Planks that move or click when walked on.",
      "A plank edge you can lift with a fingernail.",
      "The floor sounding hollow in one area and solid in another.",
    ],
    solutions: [
      {
        title: "Check the perimeter gap first",
        description:
          "We lift the skirting or trim at several points to see whether the floor has room to move. A blocked or missing gap is the most common cause and the easiest to correct.",
      },
      {
        title: "Level the subfloor where needed",
        description:
          "Hollows and high spots are corrected with levelling compound so the planks are fully supported rather than bridging a void.",
      },
      {
        title: "Relay or refix the affected area",
        description:
          "Planks are taken up, joints checked and re-engaged, and the area relaid. Damaged planks are replaced.",
      },
      {
        title: "Address moisture if it is present",
        description:
          "Where damp under the floor is contributing, that is dealt with first — otherwise the relaid floor lifts again.",
      },
    ],
    whenToCall: [
      "A ridge has formed that you can catch your foot on.",
      "Gaps are widening rather than staying the same.",
      "The lifting is spreading across the room.",
      "You can feel movement or hear clicking over a large area.",
      "The floor is under warranty and you want the cause documented before acting.",
    ],
    relatedService: "flooring",
    relatedServiceNote:
      "Lifting and separating planks are handled by our flooring team, who will identify whether the cause is the expansion gap, the subfloor or moisture before relaying anything.",
    processTitle: "How We Repair Lifting Floor Planks",
    processIntro:
      "This is a diagnosis job. Relaying planks without finding out why they lifted produces a floor that lifts again.",
    processSteps: [
      {
        title: "Inspect the gap, the subfloor and the moisture",
        description:
          "We check the perimeter expansion gap, test the subfloor for flatness and look for signs of damp underneath.",
      },
      {
        title: "Lift the affected planks",
        description:
          "The planks in the affected zone are taken up so the subfloor and the joints can be assessed properly.",
      },
      {
        title: "Correct the cause",
        description:
          "The expansion gap is cut back, the subfloor is levelled, or the moisture issue is addressed as the diagnosis requires.",
      },
      {
        title: "Relay and reinstate",
        description:
          "Planks are relaid with the joints fully engaged and a correct perimeter gap, and trims are refitted so the gap stays hidden but free.",
      },
    ],
    propertyTypesIntro:
      "Room size and layout change how much a floor needs to move, and therefore how likely lifting is.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Long continuous runs from the living area through to the back need a generous expansion gap; a single unbroken run is where peaking usually shows.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Large open-plan floors move more overall, and often need an intermediate expansion joint rather than perimeter gaps alone.",
      },
      {
        label: "Condominiums & apartments",
        note: "Heavily air-conditioned units see bigger temperature swings between day and night, which drives more movement than owners expect.",
      },
      {
        label: "Shoplots & commercial",
        note: "Glued-down vinyl in high-traffic areas fails at the adhesive first, usually near entrances.",
      },
      {
        label: "Older properties",
        note: "Original slabs are frequently out of level, so a floating floor laid without levelling will bridge hollows and fail at the joints.",
      },
    ],
    areasNote:
      "We repair lifting and separating floor planks throughout Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Why has a ridge appeared in the middle of my floor?",
        answer:
          "That is called peaking, and it means the floor has expanded but had nowhere to go, so it has buckled upwards at a joint. The cause is nearly always the perimeter expansion gap — either it was never left, or something is now bridging it, such as a skirting nailed through the boards or a heavy fitted unit. Freeing the gap usually lets the floor settle back down.",
      },
      {
        question: "Is a gap between planks a defect in the flooring?",
        answer:
          "Usually not the plank itself. Gaps open when click joints were not fully engaged at installation, when the subfloor is uneven so the planks flex apart, or when the floor is contracting in a heavily air-conditioned room. It is worth diagnosing before making a warranty claim, because most causes are installation-related rather than product faults.",
      },
      {
        question: "Do I need to replace the whole floor?",
        answer:
          "Rarely. In most cases we lift the affected zone, correct the cause and relay the same planks. Full replacement only makes sense when the planks themselves are damaged over a wide area, or when the subfloor turns out to need substantial work.",
      },
      {
        question: "My floor was fine for two years and only started lifting now. Why?",
        answer:
          "Because the causes are cumulative. An expansion gap that was marginal will cope until an unusually hot spell; an adhesive weakened by a slightly damp subfloor lets go gradually; a heavy new cabinet can pin a floor that was previously free to move. A delayed onset is very normal and does not mean nothing was wrong at installation.",
      },
      {
        question: "Can heavy furniture cause this?",
        answer:
          "Yes, and it is underestimated. A floating floor needs to move as one sheet. A heavy wardrobe or a built-in unit sitting on the planks pins that section, so when the rest of the floor expands it has to buckle somewhere. Where possible, heavy fitted units should sit on the subfloor with the flooring laid up to them.",
      },
    ],
    relatedServices: ["flooring", "tiling"],
    relatedProblems: ["swollen-flooring", "hollow-flooring", "squeaky-flooring"],
  },
  {
    slug: "hollow-flooring",
    category: "flooring",
    name: "Hollow-Sounding Floor",
    title: "Renovix Home Services | Hollow Floor Repair in KL & Selangor",
    metaDescription:
      "Floors that sound hollow underfoot in Kuala Lumpur & Selangor. Learn what a hollow sound means for SPC, vinyl, laminate and tile, when it matters, and how the subfloor is corrected.",
    h1: "Hollow-Sounding Floor",
    subtitle:
      "A hollow sound means the floor is not fully supported underneath — whether that matters depends entirely on what kind of floor it is.",
    whatItMeans: [
      "When you tap or walk on a floor and it sounds hollow, you are hearing a void between the surface you are standing on and the structure beneath. Air is a poor conductor of sound, so a drummy note tells you the two are not in continuous contact. Where that void came from, and whether it is a problem, depends on the floor type.",
      "For a floating floor — SPC, vinyl or laminate over an underlay — a degree of hollow sound is completely normal and is not a fault at all. The plank is deliberately not bonded to the subfloor. What is not normal is a distinct hollow patch in an otherwise consistent floor, because that points to a dip in the subfloor. For tiles, hollowness is a more serious sign: it means the adhesive bond has failed or was never fully achieved, and hollow tiles crack and lift over time.",
    ],
    commonCauses: [
      "An uneven subfloor leaving a dip that the flooring bridges.",
      "Levelling compound that has cracked or broken up beneath the floor.",
      "Underlay that has compressed, torn or shifted during installation.",
      "For tiles, insufficient adhesive coverage — spot-bonding rather than a full bed.",
      "Adhesive bond failure over time, often accelerated by moisture.",
      "Moisture beneath the floor that has degraded the underlay or the bond.",
      "Normal floating-floor acoustics, which is not a defect.",
    ],
    warningSigns: [
      "One clearly hollow area in a floor that sounds solid elsewhere.",
      "A soft or springy feel when you step on the hollow spot.",
      "The hollow area growing over time.",
      "Cracked or loose tiles within a hollow-sounding zone.",
      "Creaking or clicking that accompanies the hollow sound.",
    ],
    solutions: [
      {
        title: "Map the hollow area",
        description:
          "We sound out the floor to establish the extent of the void, since the size and location determine whether it needs work at all.",
      },
      {
        title: "Distinguish normal from defective",
        description:
          "For floating floors we will tell you honestly when a hollow sound is simply how the floor is built and needs nothing done.",
      },
      {
        title: "Lift and level the subfloor",
        description:
          "Where there is a genuine dip, the flooring is lifted and the subfloor levelled so the surface is fully supported.",
      },
      {
        title: "Re-bed hollow tiles",
        description:
          "Hollow tiles are lifted and re-laid on a full adhesive bed, because a hollow tile will eventually crack under load.",
      },
    ],
    whenToCall: [
      "The hollow area feels soft or springs underfoot.",
      "Tiles within the hollow zone have cracked or come loose.",
      "The hollow patch is spreading.",
      "The hollowness appeared after a leak or a spill.",
      "You are not sure whether what you are hearing is normal for your floor type.",
    ],
    relatedService: "flooring",
    relatedServiceNote:
      "Our flooring team assesses hollow floors and levels the subfloor where needed; hollow tiles are handled with our tiling team.",
    processTitle: "How We Deal With a Hollow Floor",
    processIntro:
      "The first job is deciding whether there is a problem at all, because for floating floors there frequently is not.",
    processSteps: [
      {
        title: "Sound the floor",
        description:
          "We tap across the area to map exactly where the hollowness is and how far it extends.",
      },
      {
        title: "Identify the floor build-up",
        description:
          "We establish whether it is a floating floor, a glued floor or tile, since each has a different acceptable standard.",
      },
      {
        title: "Lift and correct where needed",
        description:
          "Where a genuine void exists, the surface is lifted, the subfloor levelled or the tile re-bedded on a full adhesive bed.",
      },
      {
        title: "Reinstate and re-check",
        description:
          "The floor is relaid and sounded again to confirm the void has gone.",
      },
    ],
    propertyTypesIntro:
      "Subfloor quality is the main variable, and it differs markedly by property age and type.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Ground-floor slabs are often slightly dished in the middle of rooms, which shows up as a central hollow.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Larger floor areas make level variation more likely across a single continuous run.",
      },
      {
        label: "Condominiums & apartments",
        note: "Screeds laid over structural slabs vary in quality; hollowness near a wall often means the screed has debonded at the edge.",
      },
      {
        label: "Shoplots & commercial",
        note: "Heavy point loads over a hollow area accelerate cracking, so hollow tiles matter more here.",
      },
      {
        label: "Older properties",
        note: "Original screeds may have broken down in places, and a hollow patch can be the first visible sign.",
      },
    ],
    areasNote:
      "We assess and repair hollow-sounding floors across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "My SPC floor sounds hollow everywhere. Is the installation bad?",
        answer:
          "Almost certainly not. SPC, vinyl and laminate are floating floors — they sit on an underlay and are deliberately not bonded to the subfloor, so a consistent hollow or slightly drummy sound across the whole floor is exactly how they are built. What would concern us is one distinct hollow patch in an otherwise even-sounding floor, which suggests a dip underneath.",
      },
      {
        question: "How serious is a hollow tile?",
        answer:
          "More serious than a hollow floating floor, because a tile relies on full contact with its adhesive bed for strength. A hollow tile is unsupported, so it flexes under foot traffic and eventually cracks or works loose. A single hollow tile in a low-traffic corner can often be monitored; hollow tiles in a walkway are worth re-bedding.",
      },
      {
        question: "Can the hollow spot be filled without lifting the floor?",
        answer:
          "For tiles there are injection techniques, but they are not reliable in every situation and we would not present them as a certain fix. For a floating floor, filling is not possible without lifting, because there is no route to the void. In most cases lifting the affected area and levelling the subfloor properly is the repair that lasts.",
      },
      {
        question: "Will a hollow floor get worse?",
        answer:
          "A hollow area that is caused by a fixed dip in the subfloor tends to stay much the same. One caused by adhesive failure or by moisture usually does spread, because the same condition keeps acting on the surrounding area. If the hollow patch is growing, that is a reason to investigate rather than wait.",
      },
      {
        question: "Does an underlay stop the hollow sound?",
        answer:
          "A better-quality or thicker acoustic underlay does reduce the drummy sound of a floating floor noticeably, and it is worth specifying if the sound bothers you. It will not fix a hollow caused by an uneven subfloor, though — that needs levelling before the floor goes down.",
      },
    ],
    relatedServices: ["flooring", "tiling"],
    relatedProblems: ["lifting-floor-planks", "squeaky-flooring", "hollow-tile-problems"],
  },
  {
    slug: "squeaky-flooring",
    category: "flooring",
    name: "Squeaky or Creaking Floor",
    title: "Renovix Home Services | Squeaky Floor Repair in KL & Selangor",
    metaDescription:
      "Squeaking and creaking SPC, vinyl and laminate floors in Kuala Lumpur & Selangor. Learn what causes the noise, why it usually points to the subfloor, and how it is fixed.",
    h1: "Squeaky or Creaking Floor",
    subtitle:
      "A squeak is friction — two surfaces rubbing that should not be. It is annoying rather than dangerous, but it usually points to something worth correcting.",
    whatItMeans: [
      "Floor noise comes from movement. When you step on a floating floor, your weight pushes the plank down very slightly; if the plank is fully supported by a flat subfloor, nothing rubs and nothing sounds. If there is a dip underneath, the plank flexes into it and back out again, and the joint between planks — or the plank against a fixing, a pipe or a stray piece of debris — rubs and squeaks.",
      "This is why a squeak is a subfloor message far more often than a flooring fault. The plank is doing what it was designed to do; it is the support beneath that is not doing its part. The exceptions are joints that were never fully clicked home, and floors installed so tightly against a wall or door frame that they grind against it as they expand.",
    ],
    commonCauses: [
      "An uneven subfloor letting the plank flex with each step.",
      "Click joints not fully engaged at installation.",
      "Debris, grit or a screw head trapped under the floor at installation.",
      "Underlay that has compressed, torn or bunched.",
      "The floor binding against a wall, door frame or pipe because the expansion gap is too tight.",
      "For timber subfloors, a loose board or a fixing that has worked free.",
      "Moisture-related movement that has distorted the plank or the subfloor.",
    ],
    warningSigns: [
      "A squeak or creak in one repeatable spot each time it is stepped on.",
      "A clicking sound, which usually points to a joint rather than the subfloor.",
      "Perceptible deflection — the floor giving slightly underfoot.",
      "Noise that spreads to new areas over time.",
      "Squeaking that started after a leak, a spill or new furniture being placed.",
    ],
    solutions: [
      {
        title: "Locate the noise precisely",
        description:
          "We work out the exact point and whether it is a joint, a void beneath, or the floor binding at an edge — the three need different fixes.",
      },
      {
        title: "Free a binding edge",
        description:
          "Where the floor is grinding against a wall, frame or pipe, the expansion gap is cut back and hidden under the trim.",
      },
      {
        title: "Lift and level a hollow",
        description:
          "Where the plank is flexing into a dip, the area is lifted and the subfloor levelled so the plank is properly supported.",
      },
      {
        title: "Re-engage or replace joints",
        description:
          "Joints that never clicked fully home are relaid; damaged plank edges are replaced.",
      },
    ],
    whenToCall: [
      "The squeak is accompanied by movement or give underfoot.",
      "The noisy area is spreading.",
      "It started after water damage or a leak.",
      "The floor is new and the noise appeared soon after installation.",
      "The noise bothers you enough to want it gone — it is a legitimate reason on its own.",
    ],
    relatedService: "flooring",
    relatedServiceNote:
      "Our flooring team traces floor noise to its source and corrects the subfloor, the joint or the edge detail as the diagnosis requires.",
    processTitle: "How We Fix a Squeaky Floor",
    processIntro:
      "Locating the cause precisely is most of the work — the physical repair is usually straightforward once you know which of the three causes you have.",
    processSteps: [
      {
        title: "Walk and map the noise",
        description:
          "We work across the floor to pinpoint each noisy spot and note whether it clicks, creaks or grinds.",
      },
      {
        title: "Check the edges and the gap",
        description:
          "Trims come off at the nearest edges so we can see whether the floor is binding against a wall or frame.",
      },
      {
        title: "Lift and correct",
        description:
          "The affected planks are lifted, any debris removed, the subfloor levelled and the underlay made good.",
      },
      {
        title: "Relay and walk-test",
        description:
          "Planks are relaid with joints fully engaged, and we walk the area again to confirm the noise has gone.",
      },
    ],
    propertyTypesIntro:
      "The likely cause of floor noise depends on what the floor is sitting on.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Concrete ground floors squeak from surface unevenness rather than structural movement; upper timber floors squeak from loose fixings.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Large continuous runs give more scope for a dip somewhere along the run.",
      },
      {
        label: "Condominiums & apartments",
        note: "Screed quality varies; noise near walls often means the floor is binding rather than flexing.",
      },
      {
        label: "Shoplots & commercial",
        note: "Constant traffic wears underlay unevenly, and noise builds in the main walking lines.",
      },
      {
        label: "Older properties",
        note: "Timber upper floors develop squeaks as fixings loosen with age; these are fixed at the subfloor rather than the surface.",
      },
    ],
    areasNote:
      "We diagnose and repair squeaky and creaking floors across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Is a squeaky floor a structural problem?",
        answer:
          "Very rarely. In the great majority of cases it is friction between the flooring and an uneven subfloor, or between the floor and something it is binding against at an edge — neither of which affects the structure of the building. It is worth having looked at if it is accompanied by noticeable give underfoot, since that suggests a larger void.",
      },
      {
        question: "Can talcum powder or lubricant fix a squeak?",
        answer:
          "It is a well-known home remedy and it can quieten a joint temporarily, because it reduces the friction that makes the sound. It does not address the flexing that causes the rubbing, so the noise usually returns. We would treat it as a stopgap rather than a repair.",
      },
      {
        question: "My new floor squeaks. Is that an installation fault?",
        answer:
          "Quite possibly. The most common installation causes are a subfloor that was not levelled beforehand, joints that were not fully clicked home, and an expansion gap that is too tight so the floor binds at a wall or door frame. If the floor is recently installed, it is reasonable to raise it with whoever laid it before arranging other work.",
      },
      {
        question: "Will the squeak go away by itself?",
        answer:
          "Generally not — the condition causing it does not correct itself, and traffic tends to wear the contact point further. Some seasonal variation is normal as humidity changes, so a squeak may come and go, but a persistent one in a fixed spot will stay until the cause is dealt with.",
      },
      {
        question: "Do I have to lift the whole floor to fix one squeaky spot?",
        answer:
          "No. Click-lock flooring can be lifted back from the nearest wall to the affected area, corrected, and relaid. Only the planks between that wall and the noisy spot are disturbed, so a single squeak in the middle of a room does not mean redoing the whole thing.",
      },
    ],
    relatedServices: ["flooring", "handyman"],
    relatedProblems: ["hollow-flooring", "lifting-floor-planks", "swollen-flooring"],
  },
];
