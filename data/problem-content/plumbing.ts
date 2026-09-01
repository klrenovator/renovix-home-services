import type { ProblemDetail, ProblemPropertyType } from "./types";

const plumbingPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Terrace House",
    note: "Leaks, taps, pipes, blocked drains and toilets for landed homes.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Larger plumbing scopes, water supply and water heater connections for bigger homes.",
  },
  {
    label: "Condominium",
    note: "Unit leak and fixture repairs, coordinated with management for shared plumbing.",
  },
  {
    label: "Apartment",
    note: "Tap, pipe and toilet repairs within apartment units.",
  },
  {
    label: "Shop & Office",
    note: "Leaks, drainage and fixture repairs for commercial plumbing.",
  },
  {
    label: "New Homes",
    note: "Tracing and repairing defects in a new home's plumbing before moving in.",
  },
];

const plumbingAreasNote =
  "Plumbing repairs and installations are available across Kuala Lumpur, Selangor and the wider Klang Valley, for homes and commercial spaces.";

const plumbingBase = {
  category: "plumbing" as const,
  relatedService: "plumbing",
  relatedServices: ["waterproofing", "general-renovation", "handyman", "tiling"],
  propertyTypes: plumbingPropertyTypes,
  areasNote: plumbingAreasNote,
};

export const plumbingProblems: ProblemDetail[] = [
  {
    ...plumbingBase,
    slug: "water-leakage",
    name: "Water Leakage",
    title: "Water Leakage Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Water leakage in Kuala Lumpur & Selangor — hidden leaks, damp patches, high water bills and dripping pipes. Learn the causes, warning signs, leak detection solutions and when to call a plumber.",
    h1: "Water Leakage",
    subtitle:
      "Water leaks hide behind walls and under floors. Renovix finds the source, repairs the leak and stops the damage.",
    whatItMeans: [
      "Water leakage is any unintended escape of water from a pipe, fitting, tank, appliance or plumbing system. It can be a dripping tap you can see, or a hidden leak behind a wall or under a floor that you only notice as a rising water bill, a damp patch, or a stain on the ceiling below. Because much of a home's plumbing is concealed, leaks are often the silent cause of expensive damage that is only discovered late.",
      "Leaks matter for cost and for the health of the building. A running tap or a small pipe leak can add up in a water bill, and a concealed leak can cause rot, mould, weakening of the structure and damage to the floor or ceiling. In Kuala Lumpur's humid climate, a damp wall from a leak is also a trigger for mould and peeling paint. Finding and fixing the source is the only lasting solution.",
    ],
    commonCauses: [
      "A worn pipe joint, seal or fitting that has started to weep.",
      "A corroded or damaged pipe, often behind a wall or under a floor.",
      "A leaking tap, toilet or water heater connection.",
      "A crack or failure in a concealed pipe from movement or age.",
      "A roof or tank leak letting water into the building.",
      "Damage to plumbing during renovation or construction work.",
    ],
    warningSigns: [
      "A rising water bill with no change in usage.",
      "A damp, warm or soft patch on a wall, floor or ceiling.",
      "A musty smell, mould or peeling paint near a likely water source.",
      "A drip you can hear or a puddle that keeps reappearing.",
    ],
    solutions: [
      {
        title: "Trace the source",
        description:
          "We locate the leak using inspection and testing, whether it is at a fitting, a pipe or a concealed line.",
      },
      {
        title: "Repair or replace the pipe",
        description:
          "The leaking pipe, joint or fitting is repaired or replaced so the system is watertight.",
      },
      {
        title: "Fix the damaged surface",
        description:
          "Where the leak has damaged a wall, floor or ceiling, we coordinate the repair after the source is fixed.",
      },
      {
        title: "Verify the fix",
        description:
          "We test the system so you can be confident the leak is gone and the water bill should return to normal.",
      },
    ],
    whenToCall: [
      "You cannot find the source of a leak or a damp patch.",
      "Your water bill is unusually high.",
      "There is visible dripping, a puddle or a stain on a ceiling.",
      "A leak has caused mould, peeling paint or a soft patch in a wall.",
    ],
    relatedServiceNote:
      "Water leakage is a plumbing repair. Where the leak has affected a wall, ceiling or floor, we coordinate with waterproofing and renovation.",
    processTitle: "How We Handle Water Leakage",
    processIntro:
      "Fixing a leak starts with finding it. Here is the process we follow.",
    processSteps: [
      {
        title: "Confirm and locate the leak",
        description:
          "We investigate the signs and trace the leak back to its source.",
      },
      {
        title: "Open up where needed",
        description:
          "We access the affected pipe or fitting with minimal disruption to the finish.",
      },
      {
        title: "Repair the source",
        description:
          "The leaking pipe, joint or fitting is repaired or replaced.",
      },
      {
        title: "Test and make good",
        description:
          "We test for leaks and coordinate the repair of any damaged wall or floor.",
      },
    ],
    propertyTypesIntro:
      "Water leakage affects every property type, and can be especially disruptive in condos where it may affect a neighbouring unit.",
    faqs: [
      {
        question: "How do I know if I have a hidden water leak?",
        answer:
          "Signs include an unexplained rise in your water bill, a damp or soft patch on a wall or ceiling, a musty smell, or a stain that grows. If any of these appear, a leak is likely.",
      },
      {
        question: "Can a small leak cause serious damage?",
        answer:
          "Yes. Even a slow leak can cause rot, mould and structural damage over time, and it increases your water bill. It is worth tracing early.",
      },
      {
        question: "Do I need to break the floor to find a leak?",
        answer:
          "Not always. We trace the leak first and only open up the area needed to access the source, keeping disruption to a minimum.",
      },
      {
        question: "Why is there a leak but no visible dripping?",
        answer:
          "Many leaks are concealed behind walls, under floors or at a joint. The water may spread into the structure before it becomes visible, which is why professional tracing is useful.",
      },
      {
        question: "Will fixing a leak stop the water stain on the ceiling?",
        answer:
          "Fixing the leak stops the water coming through, but the existing stain will need to be treated and repainted. We can coordinate that as part of the repair.",
      },
    ],
    relatedProblems: [
      "leaking-pipe",
      "leaking-tap",
      "blocked-drain",
      "water-damaged-ceiling",
    ],
  },
  {
    ...plumbingBase,
    slug: "leaking-tap",
    name: "Leaking Tap",
    title: "Leaking Tap Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A dripping, leaking or squeaky tap in Kuala Lumpur & Selangor? Learn the causes, warning signs, tap repair and replacement solutions, and when to call a plumber.",
    h1: "Leaking Tap",
    subtitle:
      "A dripping tap wastes water and can signal a worn washer or valve. Renovix repairs or replaces taps so they stop dripping.",
    whatItMeans: [
      "A leaking tap is a tap that drips or leaks water when it is supposed to be off. It can be a constant drip, a tap that drips only after use, or a leak around the base of the tap. A dripping tap is easy to ignore, but it wastes a surprisingly large amount of water over a year and increases your water bill. It is also usually a sign of a worn washer, a failing cartridge or a loose connection that is best dealt with rather than left.",
      "Beyond the water waste, a leaky tap can leave hard-water staining and, in some cases, cause small leaks into the basin or cabinet below. In kitchens and bathrooms a leak that runs under the surface can, over time, lead to damage. Fixing the tap properly means identifying the type of tap and replacing the worn part, or replacing the tap if it is old or beyond repair.",
    ],
    commonCauses: [
      "A worn or degraded washer that no longer seals the water.",
      "A failing tap cartridge or ceramic disc.",
      "A loose or worn stem nut or seal around the tap.",
      "Hard water limescale build-up preventing the tap from sealing.",
      "An old or poorly made tap that is past its life.",
      "A cracked tap body or a loose connection at the base.",
    ],
    warningSigns: [
      "A tap that drips even when turned off.",
      "Water trickling around the base or handle of the tap.",
      "A squeak, rattle or difficulty turning the tap.",
      "Limescale or staining building up around the spout.",
    ],
    solutions: [
      {
        title: "Identify the tap type",
        description:
          "We determine whether the tap is a washer, cartridge or ceramic-disc type, which decides the repair.",
      },
      {
        title: "Replace the worn part",
        description:
          "The washer, cartridge or seal is replaced so the tap seals properly again.",
      },
      {
        title: "Replace the tap",
        description:
          "If the tap is old, damaged or not cost-effective to repair, we replace it with a new, reliable unit.",
      },
      {
        title: "Check the connections",
        description:
          "We tighten and check the base connections so there is no leak around the tap.",
      },
    ],
    whenToCall: [
      "A tap drips constantly and is wasting water.",
      "Water leaks from the handle or base of the tap.",
      "The tap is difficult to turn or squeaks.",
      "The tap is old and you want to replace it.",
    ],
    relatedServiceNote:
      "Leaking tap repair is a plumbing job. We can also advise on a matching new tap when replacement is the better option.",
    processTitle: "How We Fix a Leaking Tap",
    processIntro:
      "A tap is fixed by finding the part that has failed. Here is the process.",
    processSteps: [
      {
        title: "Isolate the supply",
        description:
          "We shut off the water to the tap before doing any work.",
      },
      {
        title: "Diagnose the leak",
        description:
          "We open the tap and identify the worn washer, cartridge or fitting causing the drip.",
      },
      {
        title: "Repair or replace",
        description:
          "The worn part is replaced, or the tap is replaced if that is the better option.",
      },
      {
        title: "Test and re-energise",
        description:
          "We turn the water back on and check the tap for leaks so it is drip-free.",
      },
    ],
    propertyTypesIntro:
      "Leaking taps affect every property type, and are common in kitchens and bathrooms across older and newer homes.",
    faqs: [
      {
        question: "Why does a tap drip even when it is turned off?",
        answer:
          "That is usually a worn washer or a failing cartridge that no longer seals the water. Replacing the worn part stops the drip.",
      },
      {
        question: "How much water does a dripping tap waste?",
        answer:
          "Even a slow drip can add hundreds of litres a month. It is worth fixing to save water and reduce your bill.",
      },
      {
        question: "Is it better to repair or replace a tap?",
        answer:
          "If the tap is in good condition and a single part has failed, repair is the cheaper fix. If it is old or the body is worn, replacement is often better.",
      },
      {
        question: "Can hard water cause a tap to drip?",
        answer:
          "Yes. Limescale from hard water can build up and prevent the tap from sealing. In many areas of Malaysia this is a common cause.",
      },
      {
        question: "How do I know if the leak is from the tap or the pipe under it?",
        answer:
          "If water appears around the handle or base, it is usually the tap. If it is running underneath or behind, it may be the supply connection. We check both.",
      },
    ],
    relatedProblems: [
      "leaking-pipe",
      "water-leakage",
      "low-water-pressure",
      "toilet-problems",
    ],
  },
  {
    ...plumbingBase,
    slug: "leaking-pipe",
    name: "Leaking Pipe",
    title: "Leaking Pipe Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A leaking, burst or weeping pipe in Kuala Lumpur & Selangor? Learn the causes, warning signs, pipe repair and replacement solutions, and when to call a plumber.",
    h1: "Leaking Pipe",
    subtitle:
      "A leaking pipe can cause serious damage before you even see it. Renovix finds and repairs the pipe and protects your home.",
    whatItMeans: [
      "A leaking pipe is a pipe in the water supply or drainage system that has sprung a leak — either a visible drip or a weeping joint, or a sudden burst. Pipes are usually hidden behind walls, under floors, or in a ceiling void, which is why a pipe leak often goes unnoticed until a damp patch, a rising bill or a stain appears. A burst pipe is more urgent and should be isolated and repaired promptly.",
      "Over time, pipes can leak from corrosion, a failed joint, pressure, or movement in the building. Old galvanised and even some copper pipes eventually degrade, while plastic pipes can fail at a poorly made joint. Because the water from a pipe leak spreads into the structure, it can cause rot, mould and damage to the floor and ceiling, so finding and fixing the source quickly is important.",
    ],
    commonCauses: [
      "Corrosion or a puncture in the pipe wall.",
      "A failed or poorly fitted joint, coupling or fitting.",
      "High water pressure stressing the pipe.",
      "Movement or settling in the building straining the pipe.",
      "Freezing or temperature changes cracking a pipe (less common locally).",
      "Accidental damage to a pipe during renovation or drilling.",
    ],
    warningSigns: [
      "A damp, soft or warm patch on a wall, floor or ceiling.",
      "A puddle appearing under a sink, in a ceiling or on a floor.",
      "An unexplained rise in the water bill.",
      "A musty smell or a stain growing near the leak.",
    ],
    solutions: [
      {
        title: "Locate the leaking pipe",
        description:
          "We trace the leak through the system to find the exact pipe and fitting that is failing.",
      },
      {
        title: "Repair the section",
        description:
          "We repair or replace the damaged section of pipe so the line is watertight.",
      },
      {
        title: "Replace an ageing run",
        description:
          "Where a pipe is corroded or repeatedly failing, we recommend replacing the run with a durable material.",
      },
      {
        title: "Coordinate surface repair",
        description:
          "Where the leak has damaged a wall or ceiling, we work with the renovation team to make good the area.",
      },
    ],
    whenToCall: [
      "There is a burst or visible puddle you cannot control.",
      "A damp patch or stain is spreading on a wall or ceiling.",
      "Your water bill is rising for no clear reason.",
      "A pipe is old, corroded or has leaked more than once.",
    ],
    relatedServiceNote:
      "Leaking pipe repair is a plumbing job. Where the leak has affected a wall or ceiling, we coordinate with waterproofing and renovation.",
    processTitle: "How We Repair a Leaking Pipe",
    processIntro:
      "Repairing a leaking pipe means isolating, finding and fixing the source. Here is the process.",
    processSteps: [
      {
        title: "Isolate the line",
        description:
          "We shut off the water to the affected line so the leak is safely controlled.",
      },
      {
        title: "Locate the leak",
        description:
          "We trace the source and access the pipe with minimal disruption.",
      },
      {
        title: "Repair or replace",
        description:
          "The damaged section is repaired or replaced, and the connection resealed.",
      },
      {
        title: "Test and restore",
        description:
          "We turn the water back on, test for leaks, and coordinate any surface repair needed.",
      },
    ],
    propertyTypesIntro:
      "Leaking pipes affect every property type, and are often found in older homes with aged pipework and in units with a source above.",
    faqs: [
      {
        question: "How can I tell if a pipe is leaking if it is behind a wall?",
        answer:
          "Look for a damp patch, a soft or warm spot on the wall or floor, a musty smell, or an unexplained rise in your water bill. These are the usual signs of a hidden pipe leak.",
      },
      {
        question: "What should I do if a pipe bursts?",
        answer:
          "Turn off the water supply to that line or to the whole house, then call a plumber. Avoid using the area until the leak is controlled.",
      },
      {
        question: "Does a small pipe leak need urgent attention?",
        answer:
          "Yes. Even a slow leak can damage the structure, cause mould and increase your bill. It is worth fixing early before the damage spreads.",
      },
      {
        question: "Why do pipes leak mainly near joints?",
        answer:
          "Joints are where the pipe ends meet, which is the weakest point. A joint can fail from poor fitting, corrosion or movement over time.",
      },
      {
        question: "Should I replace old pipes before they leak?",
        answer:
          "If pipes are old and corroded, or have leaked before, replacing them proactively is often cheaper than repeated repairs and the damage a leak can cause.",
      },
    ],
    relatedProblems: [
      "water-leakage",
      "leaking-tap",
      "toilet-problems",
      "roof-leakage",
    ],
  },
  {
    ...plumbingBase,
    slug: "blocked-drain",
    name: "Blocked Drain",
    title: "Blocked Drain in Kuala Lumpur & Selangor | Drain Clearing",
    metaDescription:
      "A blocked drain, sink or toilet in Kuala Lumpur & Selangor? Learn the causes, warning signs, drain clearing solutions and when to call a plumber for a stubborn blockage.",
    h1: "Blocked Drain",
    subtitle:
      "A blocked drain backs up water and odours if it is left. Renovix clears the blockage and helps prevent it from returning.",
    whatItMeans: [
      "A blocked drain is a drain — in a sink, shower, bath, floor or toilet — that does not let water flow away freely. It can be a slow drain that takes time to empty, or a complete blockage that causes water to back up. Blockages happen when solids, grease, hair or foreign objects build up in the pipe and stop the flow. In a home they can also result from a problem further down the line, such as a blocked manhole or a collapsed section.",
      "A blocked drain is more than an inconvenience. Standing water can breed bacteria and produce odours, and a blockage that backs up into a wet area can cause water to overflow and damage the floor. In a bathroom, a blocked drain that sits near a leak can also allow water to find its way into the structure below. Clearing the blockage properly and addressing the cause helps prevent a repeat.",
    ],
    commonCauses: [
      "Hair and soap scum building up in bathroom drains.",
      "Grease, oil and food waste blocking kitchen drains.",
      "Foreign objects flushed or washed down the drain.",
      "Scale and build-up narrowing the pipe over time.",
      "A joint or bend that is prone to catching debris.",
      "A blockage further down the line, such as in a manhole.",
    ],
    warningSigns: [
      "A sink, bath or shower that drains slowly or gurgles.",
      "Water backing up or pooling in a basin or floor drain.",
      "A bad odour coming from a drain.",
      "Multiple fixtures on the same line backing up together.",
    ],
    solutions: [
      {
        title: "Locate the blockage",
        description:
          "We find where the blockage is — at the trap, in the pipe, or further down the line.",
      },
      {
        title: "Clear the drain",
        description:
          "We use the appropriate method to clear the blockage and restore the flow.",
      },
      {
        title: "Check the line",
        description:
          "For repeated blockages, we inspect the pipe for scale, a collapsed section or a deeper problem.",
      },
      {
        title: "Advise on prevention",
        description:
          "We suggest practical steps and products to reduce the chance of a repeat blockage.",
      },
    ],
    whenToCall: [
      "A drain is completely blocked and water is backing up.",
      "A slow drain has not improved with simple measures.",
      "Multiple fixtures are backing up at once.",
      "There is a persistent odour or a recurring blockage.",
    ],
    relatedServiceNote:
      "Blocked drain clearing is a plumbing job. For bathroom drains we also work alongside tiling where a floor drain needs attention.",
    processTitle: "How We Clear a Blocked Drain",
    processIntro:
      "Clearing a blocked drain properly means finding where it is stuck. Here is the approach.",
    processSteps: [
      {
        title: "Identify the affected line",
        description:
          "We work out which drain is blocked and whether other fixtures share the same line.",
      },
      {
        title: "Clear the blockage",
        description:
          "We use mechanical or hydraulic methods to remove the obstruction.",
      },
      {
        title: "Flush and test",
        description:
          "We flush the line to confirm the water flows freely and the blockage is gone.",
      },
      {
        title: "Advise on prevention",
        description:
          "We explain the cause and offer advice to reduce the chance of it returning.",
      },
    ],
    propertyTypesIntro:
      "Blocked drains affect every property type, and are most common in kitchens, bathrooms and older plumbing systems.",
    faqs: [
      {
        question: "Why does my drain keep getting blocked?",
        answer:
          "Repeated blockages are usually caused by build-up in the pipe, or a problem further down the line. We inspect to find the underlying cause rather than just clearing it repeatedly.",
      },
      {
        question: "Can a blocked drain damage my bathroom?",
        answer:
          "Yes. Water that backs up can overflow onto the floor and, if it sits, can find its way into the structure. A blocked drain is best handled before that happens.",
      },
      {
        question: "Are chemical drain cleaners safe to use?",
        answer:
          "Chemical cleaners can help for minor blockages but can also damage pipes and are hazardous. For a stubborn or recurring blockage, a plumber is the safer option.",
      },
      {
        question: "Why do my sink and toilet block at the same time?",
        answer:
          "That often means the blockage is in a shared line further down rather than in one fixture. We trace it to where the line is obstructed.",
      },
      {
        question: "How do I prevent drain blockages?",
        answer:
          "Avoid pouring grease down the kitchen drain and use a strainer to catch hair and food. Regular hot water flushes can help reduce build-up in the pipe.",
      },
    ],
    relatedProblems: [
      "water-leakage",
      "toilet-problems",
      "leaking-pipe",
      "bathroom-leakage",
    ],
  },
  {
    ...plumbingBase,
    slug: "toilet-problems",
    name: "Toilet Problems",
    title: "Toilet Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A running, blocked, leaking or weak-flushing toilet in Kuala Lumpur & Selangor? Learn the causes, warning signs, toilet repair solutions and when to call a plumber.",
    h1: "Toilet Problems",
    subtitle:
      "A running, leaking or weak-flushing toilet wastes water and can damage the floor. Renovix repairs toilets and fixes the cause.",
    whatItMeans: [
      "Toilet problems cover the range of issues that beset a toilet: a toilet that runs constantly, flushes weakly, blocks easily, leaks at the base, or has a cistern that will not fill or shut off. A running toilet is one of the most common and most wasteful water leaks in a home, while a toilet that leaks at the base can damage the floor and the room below. All of these are fixable, but the repair depends on identifying the failing part.",
      "A toilet is a relatively simple mechanism, but the causes of a problem can be several. A running toilet is usually a worn flapper or a faulty fill valve. A weak flush can be from a blocked rim, a low water level or a poor flush design. A leak at the base is more serious, as it can signal a failed wax seal or cracked bowl, which should be dealt with promptly to avoid water damage.",
    ],
    commonCauses: [
      "A worn or misaligned flapper valve letting water run continuously.",
      "A faulty fill valve or a float set at the wrong level.",
      "A blocked rim or trap that causes a weak flush.",
      "A failed wax seal or a cracked bowl causing a leak at the base.",
      "Blockage in the drain or trap causing backups.",
      "An old or poorly fitted toilet that is past its life.",
    ],
    warningSigns: [
      "A toilet that runs continuously or won't stop refilling.",
      "A weak flush that does not clear the bowl properly.",
      "Water pooling around the base of the toilet.",
      "A gurgling sound, a blockage or frequent clogs.",
    ],
    solutions: [
      {
        title: "Diagnose the problem",
        description:
          "We identify the failing part — the flapper, fill valve, seal, flush or trap — before recommending a fix.",
      },
      {
        title: "Repair the mechanism",
        description:
          "The worn flapper, valve or float is adjusted or replaced so the toilet stops running.",
      },
      {
        title: "Fix a leaking base",
        description:
          "Where the seal or bowl is at fault, we reseal or replace the toilet to stop the leak.",
      },
      {
        title: "Replace the toilet",
        description:
          "If the toilet is old, cracked or not worth repairing, we replace it with a new, efficient unit.",
      },
    ],
    whenToCall: [
      "A toilet is leaking at the base or around the cistern.",
      "The toilet will not stop running or keeps failing to flush.",
      "The toilet blocks repeatedly.",
      "You are considering replacing an old or inefficient toilet.",
    ],
    relatedServiceNote:
      "Toilet repair and replacement is a plumbing job. Where a toilet leak has affected the floor, we coordinate with waterproofing.",
    processTitle: "How We Fix Toilet Problems",
    processIntro:
      "Fixing a toilet starts with finding the failing part. Here is the process.",
    processSteps: [
      {
        title: "Isolate and inspect",
        description:
          "We shut off the water and inspect the cistern, seal and flush mechanism.",
      },
      {
        title: "Repair the component",
        description:
          "The worn flapper, valve, float or seal is replaced or adjusted.",
      },
      {
        title: "Replace if needed",
        description:
          "Where the toilet body or a more serious fault is involved, we replace the unit.",
      },
      {
        title: "Test and confirm",
        description:
          "We restore the water and test the flush and sealing so the toilet works properly.",
      },
    ],
    propertyTypesIntro:
      "Toilet problems affect every property type, and are common in apartments and older homes with ageing fixtures.",
    faqs: [
      {
        question: "Why does my toilet run constantly?",
        answer:
          "A running toilet is usually a worn flapper or a faulty fill valve that cannot seal. Replacing the worn part is a simple, cost-effective fix.",
      },
      {
        question: "Is a toilet that leaks at the base serious?",
        answer:
          "Yes. A leak at the base can damage the floor and the room below. It is usually a failed wax seal or a cracked bowl and should be fixed promptly.",
      },
      {
        question: "Why does my toilet flush weakly?",
        answer:
          "A weak flush can be from a blocked rim, a low water level or a poor flush mechanism. We check the cause and restore a proper flush.",
      },
      {
        question: "How much water does a running toilet waste?",
        answer:
          "A running toilet can waste many thousands of litres a year. Fixing it usually pays for itself quickly through lower water bills.",
      },
      {
        question: "Should I repair or replace my toilet?",
        answer:
          "If the toilet is sound and a single component has failed, repair is cheaper. If it is old, cracked or inefficient, replacement is often the better investment.",
      },
    ],
    relatedProblems: [
      "blocked-drain",
      "leaking-pipe",
      "water-leakage",
      "bathroom-leakage",
    ],
  },
  {
    ...plumbingBase,
    slug: "low-water-pressure",
    name: "Low Water Pressure",
    title: "Low Water Pressure in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Low water pressure in your home in Kuala Lumpur & Selangor — weak showers, slow taps and low flow. Learn the causes, warning signs, solutions and when to call a plumber.",
    h1: "Low Water Pressure",
    subtitle:
      "Weak water pressure in a shower or tap is often a plumbing or supply issue. Renovix finds the cause and restores a strong, even flow.",
    whatItMeans: [
      "Low water pressure is when water flows slowly or weakly from taps, showers and appliances — a thin trickle instead of a strong, steady stream. It can affect the whole house or just one outlet. When it affects a single outlet, the problem is often local, such as a blocked aerator or a failing valve. When it affects the whole house, it can point to a supply issue, a partially closed valve, or a problem with the pipes or the building's supply.",
      "Low pressure is more than a nuisance; it makes showers and baths less effective, slows filling, and can affect appliances that rely on adequate water flow. In Malaysian homes, low pressure is often linked to the location of the property, the condition of the supply pipe, or a booster pump situation in a high-rise. Diagnosing whether the problem is at the outlet, the pipe or the supply is the key to fixing it.",
    ],
    commonCauses: [
      "A blocked aerator, cartridge or shower head causing low flow at one outlet.",
      "A partially closed or stuck isolation valve.",
      "A narrowed or blocked supply pipe from scale or debris.",
      "A supply pressure issue from the building or the water network.",
      "An undersized inlet pipe for the home's demand.",
      "A faulty or inadequate pressure booster in a high-rise unit.",
    ],
    warningSigns: [
      "Weak flow from a shower, tap or the whole house.",
      "A shower that dribbles rather than sprays.",
      "Low pressure at one outlet but not another.",
      "A drop in pressure when another tap or appliance is used.",
    ],
    solutions: [
      {
        title: "Identify whether it is one outlet or the whole house",
        description:
          "We test the flow at different points to determine if the problem is local or a wider supply issue.",
      },
      {
        title: "Clear a blocked aerator or fitting",
        description:
          "A blocked aerator, shower head or cartridge is descaled or replaced to restore flow.",
      },
      {
        title: "Check valves and pipework",
        description:
          "We inspect isolation valves and the supply pipe for a restriction that is cutting the flow.",
      },
      {
        title: "Address the supply or recommend a booster",
        description:
          "Where the supply is the issue, we advise on the options, including a booster pump for high-rise and low-pressure homes.",
      },
    ],
    whenToCall: [
      "The whole house has low pressure.",
      "Pressure is much weaker at one than another outlet.",
      "The pressure drops noticeably when an appliance is on.",
      "You are considering a booster or have no clear diagnosis.",
    ],
    relatedServiceNote:
      "Low water pressure is a plumbing issue. For high-rise homes we also advise on the right booster arrangement.",
    processTitle: "How We Diagnose Low Water Pressure",
    processIntro:
      "Low pressure is traced from the outlet back to the source. Here is the process.",
    processSteps: [
      {
        title: "Test the flow",
        description:
          "We check the pressure at several outlets to see the extent of the problem.",
      },
      {
        title: "Inspect the fittings",
        description:
          "We clear any blockage at the aerator, cartridge or shower head.",
      },
      {
        title: "Check valves and pipe",
        description:
          "We look for a closed valve, a restriction or a supply issue cutting the flow.",
      },
      {
        title: "Recommend a solution",
        description:
          "We restore flow where possible and advise on a booster or supply fix where needed.",
      },
    ],
    propertyTypesIntro:
      "Low water pressure is common in high-rise apartments and condos, and in older homes with aging supply pipes or poor supply.",
    faqs: [
      {
        question: "Why is the pressure low at one tap but fine elsewhere?",
        answer:
          "That is usually a local issue — a blocked aerator, a failing cartridge or a valve at that outlet. We check the fitting to restore the flow.",
      },
      {
        question: "Why has the pressure in my whole house dropped?",
        answer:
          "A whole-house drop can be a supply issue, a partially closed main valve, or a blocked supply pipe. We trace it to find the cause.",
      },
      {
        question: "Can a booster pump fix low pressure?",
        answer:
          "It can, for high-rise homes or low-supply areas. The right booster depends on the cause and the required pressure, which we assess first.",
      },
      {
        question: "Does low water pressure affect my water heater?",
        answer:
          "Low pressure can make a water heater, especially a tankless one, work less reliably. Restoring adequate flow helps the appliance function properly.",
      },
      {
        question: "Why does pressure drop when I run two taps at once?",
        answer:
          "This often indicates the supply is not large enough for the home's demand, or there is a restriction in the pipe. We can assess and advise on the fix.",
      },
    ],
    relatedProblems: [
      "leaking-pipe",
      "leaking-tap",
      "blocked-drain",
      "toilet-problems",
    ],
  },
];
