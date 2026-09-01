import type { ProblemDetail, ProblemPropertyType } from "./types";

const handymanPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Terrace House",
    note: "Doors, locks, mounting and minor repairs for landed homes.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Larger fitting and repair jobs across a bigger home.",
  },
  {
    label: "Condominium",
    note: "Fitting and mounting work within a unit, coordinated with management rules.",
  },
  {
    label: "Apartment",
    note: "Practical repairs, mounting and fitting for apartment living.",
  },
  {
    label: "Shop & Office",
    note: "Door, lock and fitting work for commercial and office spaces.",
  },
  {
    label: "Rented Homes",
    note: "Repairs and installations that protect a deposit and keep a home in shape.",
  },
];

const handymanAreasNote =
  "Handyman services are available across Kuala Lumpur, Selangor and the wider Klang Valley, for homes, offices and rental properties.";

const handymanBase = {
  category: "handyman" as const,
  relatedService: "handyman",
  relatedServices: ["general-renovation", "electrical", "painting", "ceiling-partition"],
  propertyTypes: handymanPropertyTypes,
  areasNote: handymanAreasNote,
};

export const handymanProblems: ProblemDetail[] = [
  {
    ...handymanBase,
    slug: "door-problems",
    name: "Door Problems",
    title: "Door Repair in Kuala Lumpur & Selangor | Sticking, Squeaking & Sagging",
    metaDescription:
      "Doors that stick, squeak, sag or will not close in Kuala Lumpur & Selangor? Learn the causes, warning signs, door repair and adjustment solutions, and when to call a handyman.",
    h1: "Door Problems",
    subtitle:
      "A door that sticks, squeaks or will not close is a hinge or frame issue. Renovix adjusts and repairs doors so they open smoothly.",
    whatItMeans: [
      "Door problems cover the common issues that stop a door from working as it should: a door that sticks or scrapes against the frame, one that sags and will not latch, one that squeaks, or one that will not stay shut. Doors are among the most-used parts of a home, and over time the hinges, frame and door itself move and wear, which leads to these issues. Most door problems are simple adjustments or small repairs.",
      "While many door problems look similar, the cause matters. A sticking door is often a hinge that has come loose or a door that has swollen with humidity, while a sagging door that will not latch usually points to a frame or hinge that has dropped. In Malaysian homes, humidity can cause doors and frames to swell, making a door that used to fit perfectly start to drag. A handyman can adjust the door and fix the underlying cause.",
    ],
    commonCauses: [
      "Loose or worn hinges making the door droop.",
      "Humidity causing the door or frame to swell and stick.",
      "A door that has been scuffed, chipped or cracked at the edge.",
      "A frame that has moved or settled, misaligning the door.",
      "A latch or strike plate that is misaligned or worn.",
      "Wear and tear from years of use, especially on heavy or frequent doors.",
    ],
    warningSigns: [
      "A door sticks, scrapes or requires force to close.",
      "A door that sags and will not latch or stay shut.",
      "A loud squeak or grinding sound when the door opens.",
      "An uneven gap around the door or a gap at the top or bottom.",
    ],
    solutions: [
      {
        title: "Adjust the hinges",
        description:
          "We tighten, adjust or replace hinges so the door hangs straight and moves freely.",
      },
      {
        title: "Plan or sand a swollen door",
        description:
          "Where a door has swollen with humidity, we remove a small amount from the edge so it clears the frame.",
      },
      {
        title: "Realign the latch",
        description:
          "We adjust the latch and strike plate so the door catches and stays closed properly.",
      },
      {
        title: "Repair or replace the door",
        description:
          "Where a door is cracked, damaged or beyond adjustment, we repair or replace it.",
      },
    ],
    whenToCall: [
      "A door does not open or close, or is hard to use.",
      "A door will not latch or stay shut.",
      "A door is visibly sagging or the frame has moved.",
      "You want the door adjusted or repaired cleanly.",
    ],
    relatedServiceNote:
      "Door repair is a handyman job. For a cracked or damaged door, we can also coordinate with carpentry and painting.",
    processTitle: "How We Fix Door Problems",
    processIntro:
      "Most door problems come down to the hinges, frame and latch. Here is the approach.",
    processSteps: [
      {
        title: "Assess the door",
        description:
          "We identify whether the issue is the hinge, a swollen door, a misaligned latch or the frame.",
      },
      {
        title: "Adjust or repair",
        description:
          "We tighten the hinges, adjust the door, or realign the latch as needed.",
      },
      {
        title: "Repair damage",
        description:
          "Where the door or frame is damaged, we repair or replace the affected part.",
      },
      {
        title: "Test the operation",
        description:
          "We check the door opens and closes smoothly and latches correctly.",
      },
    ],
    propertyTypesIntro:
      "Door problems affect every property type, and are common in homes with timber doors exposed to humidity.",
    faqs: [
      {
        question: "Why does my wooden door stick in the morning?",
        answer:
          "That is often humidity swelling the door and frame overnight. Mild swelling can be eased by adjusting the hinge or lightly trimming the edge.",
      },
      {
        question: "Can a sagging door be fixed without replacing it?",
        answer:
          "Usually yes. A sagging door is often a matter of tightening hinges or adjusting them so the door hangs straight again.",
      },
      {
        question: "Why won't my door latch properly?",
        answer:
          "This is usually a misaligned latch or strike plate, or a sagging door sitting too low. We realign the latch and the door so it catches.",
      },
      {
        question: "How do I stop a door from squeaking?",
        answer:
          "Squeaking is from friction in the hinge. Oil or a properly adjusted hinge will fix it. If the hinge is worn, replacing it is the lasting fix.",
      },
      {
        question: "Is it worth repairing or replacing an old door?",
        answer:
          "If the door is sound and just needs adjustment, repair is the cheaper fix. If it is warped, cracked or damaged, replacement may be better.",
      },
    ],
    relatedProblems: [
      "lock-problems",
      "minor-home-repairs",
      "curtain-installation",
      "shelf-installation",
    ],
  },
  {
    ...handymanBase,
    slug: "lock-problems",
    name: "Lock Problems",
    title: "Lock Repair in Kuala Lumpur & Selangor | Stiff, Jammed or Faulty Locks",
    metaDescription:
      "A stiff, jammed, broken or sticking lock in Kuala Lumpur & Selangor? Learn the causes, warning signs, lock repair and replacement solutions, and when to call a handyman or locksmith.",
    h1: "Lock Problems",
    subtitle:
      "A lock that sticks or will not turn is a security risk. Renovix repairs or replaces locks and keeps your home secure.",
    whatItMeans: [
      "Lock problems are the issues that affect a door or window lock — a key that is hard to turn, a lock that jams, a handle that will not latch, or a lock that is worn or broken. Because a lock protects your home, a faulty one is more than an inconvenience: it can be a security risk if it will not engage properly, or it can lock you out if it fails. Locks also wear with use and can become stiff or unreliable over time.",
      "Most lock issues come from wear, a build-up of dirt and grease, a misaligned lock mechanism, or a key that is worn or bent. In some cases the lock simply needs lubricating and adjusting; in others the cylinder or the whole lock needs replacing. We assess the type of lock and the problem, and advise on whether to repair or replace it to keep your home secure.",
    ],
    commonCauses: [
      "Wear and build-up of dirt and debris in the lock mechanism.",
      "A worn, bent or damaged key that no longer turns properly.",
      "A misaligned lock or latch within the door.",
      "A failed or jammed locking mechanism.",
      "A cylinder or lock that is old and past its reliable life.",
      "Corrosion or exposure to weather on an exterior lock.",
    ],
    warningSigns: [
      "A key is difficult to insert or turn.",
      "A lock jams or the handle is hard to operate.",
      "The lock does not engage or the door will not lock properly.",
      "A key breaks off in the lock.",
    ],
    solutions: [
      {
        title: "Diagnose the lock",
        description:
          "We assess the type of lock and identify the cause of the problem before recommending a fix.",
      },
      {
        title: "Lubricate and adjust",
        description:
          "Dirt is cleared and the mechanism lubricated or adjusted so the key turns smoothly.",
      },
      {
        title: "Replace the cylinder or lock",
        description:
          "Where the lock is worn or failing, we replace the cylinder or the whole lock, and supply matching keys.",
      },
      {
        title: "Upgrade security",
        description:
          "Where appropriate, we advise on a more secure lock or a deadbolt for better protection.",
      },
    ],
    whenToCall: [
      "A key is hard to turn or a lock jams.",
      "A door will not lock or the lock has broken.",
      "A key breaks off in the lock.",
      "You want to upgrade or replace an old lock for more security.",
    ],
    relatedServiceNote:
      "Lock repair is a handyman job. We can also work with door repair where the lock and door need attention together.",
    processTitle: "How We Fix Lock Problems",
    processIntro:
      "A reliable lock needs a clean, well-adjusted mechanism. Here is the approach.",
    processSteps: [
      {
        title: "Assess the lock",
        description:
          "We check the type of lock and identify whether it needs cleaning, adjusting or replacing.",
      },
      {
        title: "Service the mechanism",
        description:
        "We clean, lubricate and adjust the lock so it operates smoothly.",
      },
      {
        title: "Replace if needed",
        description:
          "A worn or broken cylinder or lock is replaced, with keys supplied.",
      },
      {
        title: "Test the security",
        description:
          "We test the lock engages correctly and the door is secure.",
      },
    ],
    propertyTypesIntro:
      "Lock problems affect every property type, and are common on busy entrance and exterior doors.",
    faqs: [
      {
        question: "Why is my key hard to turn?",
        answer:
          "This is usually wear, dirt or a lack of lubrication in the cylinder. It can also be a worn key or a misaligned lock.",
      },
      {
        question: "Can a stiff lock be repaired, or does it need replacing?",
        answer:
          "If the cylinder is sound, cleaning and lubricating it can fix a stiff lock. If it is worn or failing, replacing the cylinder is the reliable fix.",
      },
      {
        question: "What should I do if a key breaks in the lock?",
        answer:
          "Stop forcing it and call a professional. Attempting to dig the key out can damage the lock further. We can remove it and replace the lock if necessary.",
      },
      {
        question: "Is it worth upgrading to a more secure lock?",
        answer:
          "If your lock is old or basic, upgrading to a more secure cylinder or a deadbolt is worthwhile. We can advise on a suitable option for your door.",
      },
      {
        question: "Do you rekey locks when replacing a cylinder?",
        answer:
          "When we replace a cylinder, we supply new keys or rekey it so you have full control over who has access.",
      },
    ],
    relatedProblems: [
      "door-problems",
      "minor-home-repairs",
      "tv-mounting",
      "shelf-installation",
    ],
  },
  {
    ...handymanBase,
    slug: "curtain-installation",
    name: "Curtain Installation",
    title: "Curtain Installation in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Curtain and curtain-rod installation in Kuala Lumpur & Selangor — rods, tracks, hooks and rails fitted securely. Learn the process, property types, and when to call a handyman.",
    h1: "Curtain Installation",
    subtitle:
      "Curtains hang better and last longer when they are measured and mounted properly. Renovix installs rods and tracks securely.",
    whatItMeans: [
      "Curtain installation is the fitting of the hardware that holds your curtains — the rod, track, rail or hooks — and hanging the curtains themselves. It sounds simple, but a properly installed curtain depends on getting the rod level, fixing it into a solid surface, choosing the right supports for the window and the weight of the curtain, and spacing the curtains to hang the way you want. Poorly installed rods can sag, pull out of the wall, or hold the curtain at the wrong height.",
      "Curtain installation is especially important for heavier curtains and for windows above a bed or a seating area, where a failed fixing can be a safety issue. In a rental or a home with a wall that is not solid, the fixing also needs to be chosen to hold the weight without damaging the wall. A handyman measures, marks, levels and fixes the hardware, then hangs and checks the curtains.",
    ],
    commonCauses: [
      "A curtain rod mounted into a wall that cannot support the weight.",
      "A rod that is not level or is fixed at the wrong height.",
      "Choosing the wrong fixing or bracket for the wall type.",
      "A rod that is too long or the wrong size for the track and curtain.",
      "Track or hooks installed unevenly so the curtains do not hang properly.",
      "Existing fittings that are loose, bent or in the wrong position.",
    ],
    warningSigns: [
      "A curtain rod that sags or looks uneven.",
      "Brackets that are loose or pulling out of the wall.",
      "Curtains sitting at an uneven height across the window.",
      "A rail or track that is not sliding smoothly.",
    ],
    solutions: [
      {
        title: "Measure and mark",
        description:
          "We measure the window and mark the correct height and width so the curtain hangs level and covers properly.",
      },
      {
        title: "Choose the right fixing",
        description:
          "We select brackets and fixings suited to the wall type and the weight of the curtain.",
      },
      {
        title: "Install and level",
        description:
          "The rod or track is installed securely and levels correctly, with the brackets firmly fixed.",
      },
      {
        title: "Hang and check",
        description:
          "The curtains are hung on the hooks or rings and checked so they hang and glide cleanly.",
      },
    ],
    whenToCall: [
      "You want a curtain rod or track installed for the first time.",
      "A rod is sagging, loose or the wrong height.",
      "You need a new rail or track fitted.",
      "You are hanging heavy curtains or installing across a large window.",
    ],
    relatedServiceNote:
      "Curtain installation is a handyman job. Where walls need repairing before fixing, we can coordinate with painting and plastering.",
    processTitle: "How We Install Curtains",
    processIntro:
      "A good curtain install is about measurement and secure fixing. Here is the process.",
    processSteps: [
      {
        title: "Measure the window",
        description:
          "We measure the width and height and agree on the curtain drop and the hardware to use.",
      },
      {
        title: "Mark and level",
        description:
          "We mark the bracket positions and check they are level and evenly spaced.",
      },
      {
        title: "Fix the hardware",
        description:
          "The brackets and rod or track are fixed securely into a sound surface.",
      },
      {
        title: "Hang the curtains",
        description:
          "Curtains are hung on the hook or rings and checked so they hang and close properly.",
      },
    ],
    propertyTypesIntro:
      "Curtain installation applies to every property type, from apartments to landed homes and offices.",
    faqs: [
      {
        question: "Can you install curtains onto a hollow plasterboard wall?",
        answer:
          "Yes, but it needs the right fixing to hold the weight. We choose fixings suited to the wall type so the rod does not pull out.",
      },
      {
        question: "What height should a curtain rod be installed at?",
        answer:
          "This depends on the window and the look you want. A rod is usually fixed above the window frame to allow the curtain to fall properly, which we measure and agree with you.",
      },
      {
        question: "Do you supply the curtain rods or hardware?",
        answer:
          "We can install your existing hardware or advise on and supply suitable rods, tracks and fixings depending on the weight and style.",
      },
      {
        question: "Why is my curtain rod sagging in the middle?",
        answer:
          "That usually means the rod is too long for its supports, too light for the curtain, or the middle support bracket is missing or loose. We can add a centre support or fit a stronger rod.",
      },
      {
        question: "Can a curtain be hung without a rod?",
        answer:
          "Some curtains use tracks or a concealed rail instead of a rod. We can install the appropriate system for your window and curtain type.",
      },
    ],
    relatedProblems: [
      "minor-home-repairs",
      "shelf-installation",
      "tv-mounting",
      "door-problems",
    ],
  },
  {
    ...handymanBase,
    slug: "tv-mounting",
    name: "TV Mounting",
    title: "TV Mounting in Kuala Lumpur & Selangor | Secure Wall Mounting",
    metaDescription:
      "TV wall mounting in Kuala Lumpur & Selangor — secure brackets, correct height and neat cable routing. Learn the process, safety considerations and when to call a handyman.",
    h1: "TV Mounting",
    subtitle:
      "A wall-mounted TV needs the right bracket, a solid fixing and a safe height. Renovix mounts your TV securely and tidies the cables.",
    whatItMeans: [
      "TV mounting is the installation of a bracket on a wall and the secure fitting of the television to it. Done properly, it frees up a cabinet, improves the viewing angle and keeps the screen safe from being knocked. Done poorly — a bracket in the wrong place, fixed into a weak wall, or mounted at an unsafe height — a TV can fall, which is a serious safety concern for everyone in the room.",
      "A safe TV mount depends on several things: the wall being able to hold the weight, a bracket rated for the size and weight of the TV, correct leveling and placement, and consideration of the viewing height and the cable routing. For larger TVs, the fixing and the bracket type matter a great deal. We also check what wiring or power may be needed and can coordinate with electrical work for a clean installation.",
    ],
    commonCauses: [
      "A bracket that is not rated for the size and weight of the TV.",
      "Fixing into a wall that cannot support the weight.",
      "A TV mounted too high, too low or off-centre.",
      "Cables left trailing or in view, looking messy and creating a trip risk.",
      "The TV not being checked for VESA compatibility with the bracket.",
      "A loose or uneven fitting that does not sit flat against the wall.",
    ],
    warningSigns: [
      "A TV mounted with a bracket that looks too small for it.",
      "The wall showing signs of strain or the bracket pulling.",
      "The TV tilting slightly or the bracket feeling loose.",
      "Cables hanging visibly down the wall.",
    ],
    solutions: [
      {
        title: "Assess the wall and TV",
        description:
        "We confirm the wall type and the TV's weight and VESA pattern to choose a suitable bracket.",
      },
      {
        title: "Choose the right bracket",
        description:
        "We use a bracket rated for the TV's size and weight, with a tilt or full-motion option as needed.",
      },
      {
        title: "Mount at the right height",
        description:
        "We set the TV at a comfortable viewing height and level, fixed securely into the wall.",
      },
      {
        title: "Route the cables",
        description:
        "We tidy the cables, running them concealed where possible or in a neat cover, and coordinate power where needed.",
      },
    ],
    whenToCall: [
      "You want a TV mounted on the wall for the first time.",
      "You are mounting a large or heavy TV.",
      "The wall needs a specific fixing and you are not sure of the type.",
      "You want the cables hidden and the install to look clean.",
    ],
    relatedServiceNote:
      "TV mounting is a handyman job. Where power needs to be run or a point added, we coordinate with electrical work.",
    processTitle: "How We Mount a TV",
    processIntro:
      "A TV mount is about a secure fix and a clean finish. Here is the process.",
    processSteps: [
      {
        title: "Check the wall and TV",
        description:
          "We confirm the wall type, the TV's VESA pattern, weight and the viewing position.",
      },
      {
        title: "Mount the bracket",
        description:
          "We fit the correct bracket securely and level, using fixings suited to the wall.",
      },
      {
        title: "Attach the TV",
        description:
          "We hang and secure the TV on the bracket and check it sits correctly.",
      },
      {
        title: "Tidy the cables",
        description:
          "Cables are routed cleanly and any needed power or socket wiring is arranged.",
      },
    ],
    propertyTypesIntro:
      "TV mounting applies to every property type. It is common in living rooms, bedrooms and offices.",
    faqs: [
      {
        question: "Can any TV be wall mounted?",
        answer:
          "Most flat-screen TVs with a VESA mount can be wall mounted. We check the TV's VESA pattern and weight to choose a suitable bracket.",
      },
      {
        question: "Which wall is safe to mount a TV on?",
        answer:
          "A solid wall such as brick, block or a stud-framed wall with a suitable fixing. We assess the wall and use the right hardware so the bracket holds.",
      },
      {
        question: "What height should a TV be mounted?",
        answer:
          "The ideal height depends on the room and seating. As a rule, the centre of the screen should be around eye level when seated, which we measure for you.",
      },
      {
        question: "How do I hide the TV cables?",
        answer:
          "We can run cables inside the wall with a neat cover, or channel them and coordinate a socket. For a clean finish, we plan the power and cable routing before mounting.",
      },
      {
        question: "Is TV mounting safe for a rental apartment?",
        answer:
          "Yes, when fixed securely into a suitable wall. For rental, we can use fixings that hold firmly and make good any small marks on the wall when it is time to leave.",
      },
    ],
    relatedProblems: [
      "shelf-installation",
      "curtain-installation",
      "minor-home-repairs",
      "insufficient-power-points",
    ],
  },
  {
    ...handymanBase,
    slug: "shelf-installation",
    name: "Shelf Installation",
    title: "Shelf Installation in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Shelf and bracket installation in Kuala Lumpur & Selangor — floating shelves, wall shelves and storage fitted securely. Learn the process, wall considerations and when to call a handyman.",
    h1: "Shelf Installation",
    subtitle:
      "A shelf is only as good as the wall it is fixed to. Renovix installs shelves level, secure and able to carry the weight.",
    whatItMeans: [
      "Shelf installation is the fitting of a shelf or a set of shelves — floating shelves, wall-mounted shelves with brackets, or units — to the wall or within a space. It involves choosing the right fixing for the wall and the load, getting the shelf level and evenly spaced, and making sure it is secure. A shelf that is installed properly looks clean and holds your things safely; one that is not can sag, pull out of the wall or come down unexpectedly.",
      "The main consideration is the wall type and the weight. A floating shelf holding books needs a strong fixing into a solid wall, while a shelf over a plasterboard wall may need a different bracket or a stud frame. Getting the height and spacing right matters for how the shelf looks and how it is used. We measure, level and fix the shelf securely and check it can carry the intended load.",
    ],
    commonCauses: [
      "A shelf fixed into a wall that cannot support its load.",
      "The wrong bracket or fixing for the wall type.",
      "A shelf that is not level or is spaced unevenly.",
      "Brackets that are loose, in the wrong position or missing.",
      "A shelf that is too long for its supports and sags.",
      "An existing shelf that is old, wobbly or no longer secure.",
    ],
    warningSigns: [
      "A shelf that looks crooked or is not level.",
      "Brackets that are loose or pulling away from the wall.",
      "A shelf that sags under the weight of its items.",
      "A shelf that wobbles or shifts when used.",
    ],
    solutions: [
      {
        title: "Measure and plan",
        description:
          "We measure the space and plan the shelf height, spacing and supports to suit the use and the load.",
      },
      {
        title: "Choose the right fixing",
        description:
          "We select brackets and fixings suited to the wall type and the weight the shelf needs to hold.",
      },
      {
        title: "Install and level",
        description:
          "The brackets and shelf are fixed securely and level, with proper spacing.",
      },
      {
        title: "Check the load",
        description:
          "We confirm the shelf is secure and can carry the intended items without sagging.",
      },
    ],
    whenToCall: [
      "You want shelves installed for storage or display.",
      "An existing shelf is loose, sagging or not level.",
      "You need a floating shelf or a bracket shelf fitted to a specific wall.",
      "You are not sure of the right fixing for the wall type.",
    ],
    relatedServiceNote:
      "Shelf installation is a handyman job. Where a wall needs a stronger fixing or a repair, we can coordinate with painting and plastering.",
    processTitle: "How We Install Shelves",
    processIntro:
      "A secure, level shelf depends on measurement and the right fixing. Here is the process.",
    processSteps: [
      {
        title: "Measure the space",
        description:
          "We measure the wall and the shelf and plan the height, spacing and supports.",
      },
      {
        title: "Select the fixings",
        description:
          "We choose brackets and fixings based on the wall type and the intended load.",
      },
      {
        title: "Install and level",
        description:
          "The brackets are fixed securely and level, and the shelf is installed.",
      },
      {
        title: "Check the result",
        description:
          "We confirm the shelf is level, secure and able to carry its load.",
      },
    ],
    propertyTypesIntro:
      "Shelf installation applies to every property type, from living rooms and bedrooms to offices and storage areas.",
    faqs: [
      {
        question: "How much weight can a floating shelf hold?",
        answer:
          "It depends on the wall and the fixing. A solid-wall floating shelf with the right hardware can hold a meaningful load, while a plasterboard wall needs the right bracket. We assess and use the appropriate support.",
      },
      {
        question: "Can shelves be installed on a plasterboard wall?",
        answer:
          "Yes, but they need the correct fixings or support to hold the weight. We choose the hardware so the shelf is secure.",
      },
      {
        question: "Why is my shelf not level?",
        answer:
          "This is usually a result of the brackets not being marked and fixed to the same height. We level and re-install the shelf correctly.",
      },
      {
        question: "Do you supply shelves and brackets?",
        answer:
          "We can install your existing shelves and hardware, or advise on suitable shelves, brackets and fixings for your space and load.",
      },
      {
        question: "Can you install a full shelving unit?",
        answer:
          "Yes. We install shelf units and wall-mounted systems, and make sure they are level, secure and fixed to a sound wall.",
      },
    ],
    relatedProblems: [
      "tv-mounting",
      "curtain-installation",
      "minor-home-repairs",
      "door-problems",
    ],
  },
  {
    ...handymanBase,
    slug: "minor-home-repairs",
    name: "Minor Home Repairs",
    title: "Minor Home Repairs in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Minor home repairs in Kuala Lumpur & Selangor — small fixes, loose fittings, hooks, caulking, grout, doors and general maintenance. Learn the scope and when to call a handyman.",
    h1: "Minor Home Repairs",
    subtitle:
      "The little jobs that build up around a home — loose fittings, hooks, caulking and small repairs — handled quickly by one trusted handyman.",
    whatItMeans: [
      "Minor home repairs are the small, everyday jobs that keep a home in good shape but are easy to let pile up. They include things like re-hingeing a cabinet door, tightening a loose knob, fixing a dripping washer, sealing a gap with caulk, mounting a hook or a towel rail, touching up small damage, and fixing the many small fittings that come loose over time. These jobs are too small for a large contractor, but they are the kind of thing that makes a home feel cared for.",
      "Getting minor repairs done promptly prevents them from becoming bigger problems. A loose hinge, a cracked tile edge, a gap that lets in water, or a fitting that has come away from the wall can, if left, lead to moisture damage or a larger repair. A handyman can handle a range of these jobs in a single visit, which is more convenient and cost-effective than booking several specialists.",
    ],
    commonCauses: [
      "Wear from daily use loosening hinges, handles and fittings.",
      "Small impact damage or scratches to walls, timber and surfaces.",
      "Gaps and joints losing their sealant or caulk over time.",
      "Fittings installed loosely or with the wrong fixing.",
      "Everyday humidity causing minor movement and loosening.",
      "Jobs that have simply been put off and accumulated around the home.",
    ],
    warningSigns: [
      "Hinges, handles or knobs that are loose or rattling.",
      "A cabinet door that does not close properly.",
      "Sealant or caulk that is cracked, missing or peeling.",
      "Small holes, scratches or damage to walls and surfaces.",
    ],
    solutions: [
      {
        title: "Tighten and repair fittings",
        description:
          "Loose hinges, handles, knobs, brackets and fittings are tightened or replaced so they work again.",
      },
      {
        title: "Seal gaps and reseal joints",
        description:
          "Worn caulk and sealant around sinks, windows and joints is renewed to keep the home sealed and tidy.",
      },
      {
        title: "Fix small surface damage",
        description:
          "Minor holes, scratches and chips are repaired and the surface touched up.",
      },
      {
        title: "Small installations and mounting",
        description:
          "Hooks, towel rails, brackets and other small fittings are installed securely.",
      },
    ],
    whenToCall: [
      "You have a list of small repairs that have built up.",
      "A fitting is loose, broken or no longer working.",
      "You need small installations or mounting done.",
      "You want to maintain the home rather than let small jobs become big ones.",
    ],
    relatedServiceNote:
      "Minor home repairs cover a wide range of handyman work. Where a job is larger or specialist, we point you to the right Renovix service.",
    processTitle: "How We Handle Minor Home Repairs",
    processIntro:
      "Minor repairs are handled efficiently, often grouped into a single visit. Here is the approach.",
    processSteps: [
      {
        title: "List the jobs",
        description:
          "We go through the repairs and installations you need and agree the scope.",
      },
      {
        title: "Tackle them in order",
        description:
          "We work through the jobs efficiently, starting with the most important.",
      },
      {
        title: "Repair or replace",
        description:
          "Each item is repaired, tightened or replaced with the right fixings.",
      },
      {
        title: "Check and tidy",
        description:
          "We check each job is done properly and leave the area tidy.",
      },
    ],
    propertyTypesIntro:
      "Minor home repairs apply to every property type, and are especially useful for rentals and older homes that need ongoing upkeep.",
    faqs: [
      {
        question: "What kinds of jobs count as minor home repairs?",
        answer:
          "Small repairs like tight hinges, loose fittings, hooks, seals, caulking, small damage, shelves, doors and general maintenance — the sort of jobs that are handy to have done in one visit.",
      },
      {
        question: "Can a handyman do electrical or plumbing work?",
        answer:
          "A handyman handles minor, non-specialist jobs. Where electrical or plumbing work is involved, we coordinate with the appropriate specialist to ensure it is done safely and to standard.",
      },
      {
        question: "Is it worth getting minor repairs done in a rental home?",
        answer:
          "Often yes. Keeping the property in good condition protects your deposit and reduces the chance of a small issue becoming a bigger dispute.",
      },
      {
        question: "How many small jobs can be done in one visit?",
        answer:
          "It depends on the jobs. We can handle a list of minor tasks efficiently in a single visit, which is more convenient than booking several separate appointments.",
      },
      {
        question: "Should I fix a small problem now or wait?",
        answer:
          "It is usually worth fixing small problems promptly. A loose hinge, a gap or a small leak can become a larger repair if it is left.",
      },
    ],
    relatedProblems: [
      "door-problems",
      "lock-problems",
      "curtain-installation",
      "shelf-installation",
    ],
  },
];
