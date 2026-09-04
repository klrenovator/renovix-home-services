import type { ProblemDetail } from "./types";

/**
 * Welding & metal works problem guides.
 *
 * Phase 19 left this category unauthored, which also left the
 * `window-grille` sub-service pointing at two problem slugs that did not
 * exist. These four guides cover the faults people actually search for on
 * Malaysian gates, grilles and railings — rust, sagging alignment, failed
 * welds and loose fixings — and give the welding pillar the problem layer
 * every other service already had.
 */
export const weldingProblems: ProblemDetail[] = [
  {
    slug: "rusted-gate-repair",
    category: "welding",
    name: "Rusted Gate & Grille",
    title: "Renovix Home Services | Rusted Gate & Grille Repair in KL & Selangor",
    metaDescription:
      "Rusted gates, grilles and railings in Kuala Lumpur & Selangor. Learn what causes rust in a tropical climate, which rust can be treated, when a section must be replaced, and when to call a welder.",
    h1: "Rusted Gate & Grille",
    subtitle:
      "Rust on a mild-steel gate is normal in the Malaysian climate — what matters is whether it is surface rust or rust that has eaten through the section.",
    whatItMeans: [
      "Rust is what happens when the protective coating on mild steel is breached and the bare metal is exposed to moisture and air. In Malaysia the combination of daily humidity, heavy afternoon rain and long hours of direct sun works through paint faster than in a temperate climate, so a gate that was coated five or six years ago will usually show its first rust spots at the welds, the bottom rails and anywhere water sits.",
      "The distinction that decides the cost is depth. Surface rust is cosmetic: the steel underneath is still sound, and the fix is mechanical removal, treatment and recoating. Structural rust has thinned or perforated the metal, most often at the bottom of uprights where water collects, and no amount of paint will restore that strength — the affected section has to be cut out and a new piece welded in.",
    ],
    commonCauses: [
      "The original paint or primer breaking down after years of sun and rain.",
      "Scratches and knocks that expose bare metal, often at the latch and hinge areas.",
      "Water pooling at the base of uprights or inside hollow sections that were never sealed.",
      "Welds that were never properly cleaned and primed after fabrication.",
      "Sea air or constant damp in low-lying and coastal areas.",
      "Cut edges from on-site modification that were left uncoated.",
    ],
    warningSigns: [
      "Brown staining running down from a weld or joint.",
      "Paint bubbling or flaking, which usually means rust is already active underneath.",
      "Flaking layers of metal, or a section that sounds dull and soft when tapped.",
      "A hole, or metal that gives when pressed at the base of an upright.",
      "A gate that has started to sag or drag, which can mean a corroded hinge post.",
    ],
    solutions: [
      {
        title: "Assess surface rust vs structural rust",
        description:
          "We check the depth at each affected point — particularly the bottom rails and hinge post — so you are told honestly which parts need treating and which need replacing.",
      },
      {
        title: "Mechanical rust removal and treatment",
        description:
          "Sound steel is wire-brushed or ground back to clean metal, then treated and primed before the finish coats go on. Painting over live rust only hides it.",
      },
      {
        title: "Cut out and weld in new sections",
        description:
          "Where the metal is perforated or thinned, the affected length is cut out and a matching new section welded in and finished so it blends with the rest.",
      },
      {
        title: "Recoat and seal water traps",
        description:
          "Open hollow ends are capped or sealed so water cannot sit inside, which is what causes the same spot to rust through again.",
      },
    ],
    whenToCall: [
      "You can see a hole, or the metal flexes when you press it.",
      "The gate has begun to sag, drag on the ground or bind at the latch.",
      "Rust keeps returning to the same spot after repainting.",
      "A railing or balustrade feels loose — that is a safety issue, not a cosmetic one.",
    ],
    relatedService: "welding-metal-works",
    relatedServiceNote:
      "Rust treatment and section replacement are handled by our welding and metal works team. Where a full repaint of the gate is wanted afterwards, we coordinate with the painting team.",
    processTitle: "How We Repair a Rusted Gate or Grille",
    processIntro:
      "The aim is to deal with the cause rather than cover the symptom, so the same spot does not rust through again next year.",
    processSteps: [
      {
        title: "Inspect and sound the metal",
        description:
          "We check each rusted area for depth, tapping and pressing to find where the steel has thinned.",
      },
      {
        title: "Remove rust back to clean steel",
        description:
          "Affected areas are wire-brushed or ground until only sound metal remains.",
      },
      {
        title: "Repair or replace the section",
        description:
          "Sound steel is treated and primed; perforated steel is cut out and a new section welded in.",
      },
      {
        title: "Prime, coat and seal",
        description:
          "Primer and finish coats are applied and any open hollow ends are sealed against standing water.",
      },
    ],
    propertyTypesIntro:
      "Rust affects any exposed steel, but where it starts depends on how the gate is sited and how much weather it takes.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Main gates and window grilles take direct rain; the bottom rail and the hinge post are usually first to go.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Longer gates and perimeter fencing mean more welds and more places for coatings to fail.",
      },
      {
        label: "Condominiums & apartments",
        note: "Balcony grilles and drying racks rust where rain blows in, even on sheltered floors.",
      },
      {
        label: "Shoplots & commercial",
        note: "Roller shutter frames and folding gates rust at the tracks and guides where water and grit collect.",
      },
      {
        label: "Older properties",
        note: "Decades-old gates may have had many coats of paint over active rust; these often need section replacement rather than treatment.",
      },
    ],
    areasNote:
      "We repair rusted gates, grilles and railings across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Can a rusted gate be repaired, or does it have to be replaced?",
        answer:
          "It depends entirely on depth. Surface rust on sound steel is treated and recoated, and the gate keeps its full life. Where the metal has thinned or holed through — usually at the base of the uprights — that section is cut out and a new piece welded in. A complete replacement is only necessary when most of the frame has gone, which is uncommon.",
      },
      {
        question: "Why does the rust keep coming back in the same place?",
        answer:
          "Almost always because the rust was painted over instead of removed, or because water is sitting somewhere it cannot drain — inside an unsealed hollow section, or at a base plate that holds a puddle. Rust continues underneath the new paint. The fix is to grind back to clean steel and to seal or drain the water trap.",
      },
      {
        question: "Is it cheaper to repaint the gate myself?",
        answer:
          "Repainting is only worthwhile if the steel underneath is sound and you remove the rust properly first. If you paint over live rust you will be doing it again within a year. Where a section has already corroded through, painting achieves nothing structurally — it needs welding.",
      },
      {
        question: "Does stainless steel avoid the problem entirely?",
        answer:
          "Stainless steel resists corrosion far better than mild steel and is worth considering in coastal or constantly damp locations, but it costs considerably more. Most Klang Valley homes are well served by mild steel that is properly primed and maintained.",
      },
      {
        question: "How long should a gate last before it rusts?",
        answer:
          "That depends on the original coating, the exposure and whether it has been maintained. We do not publish a lifespan figure because it varies too much to be honest about. What we can say is that catching surface rust early and recoating is far cheaper than waiting for a section to perforate.",
      },
    ],
    relatedServices: ["welding-metal-works", "painting"],
    relatedProblems: ["railing-repair", "gate-alignment-problems", "broken-weld-joint"],
  },
  {
    slug: "railing-repair",
    category: "welding",
    name: "Loose or Damaged Railing",
    title: "Renovix Home Services | Railing Repair in KL & Selangor",
    metaDescription:
      "Loose staircase, balcony and corridor railings in Kuala Lumpur & Selangor. Understand why fixings work loose, which railing faults are a safety risk, and how a welder repairs them properly.",
    h1: "Loose or Damaged Railing",
    subtitle:
      "A railing that moves when you lean on it is a safety problem first and a cosmetic one second — it should be checked rather than lived with.",
    whatItMeans: [
      "A railing is a fall-protection element. Unlike a gate or a grille, it is something people put their body weight against, usually without thinking and often on a staircase. That means a loose railing is in a different category from most metalwork faults: the consequence of it giving way is an injury, not an inconvenience.",
      "Railings come loose in two ways. Either the fixing has failed — the base plate bolts have worked loose, the anchor has pulled out of the concrete, or the render around it has crumbled — or the metalwork itself has failed, meaning a weld has cracked or a section has corroded. The two need different repairs, and the first step is always working out which one you have.",
    ],
    commonCauses: [
      "Base plate bolts loosening over years of movement and use.",
      "Anchors pulling out of concrete that was weak, cracked or drilled too close to an edge.",
      "A weld at the post-to-rail joint cracking under repeated flexing.",
      "Corrosion at the base where water collects around the post.",
      "Impact damage from furniture, a vehicle or a fall.",
      "A railing that was originally fixed into render or tile rather than into structural concrete.",
    ],
    warningSigns: [
      "Any visible movement when you push or lean on the railing.",
      "A gap opening up between the base plate and the floor.",
      "Rust staining or cracked concrete around a post base.",
      "A visible crack line at a welded joint.",
      "A rattle or knock when the railing is used.",
    ],
    solutions: [
      {
        title: "Identify fixing failure vs metal failure",
        description:
          "We determine whether the movement is at the anchor, at the weld or in the material itself — repairing the wrong one leaves the railing just as unsafe.",
      },
      {
        title: "Re-anchor into sound concrete",
        description:
          "Where an anchor has pulled out, we open up to sound concrete and refix with appropriate anchors rather than simply retightening into a failed hole.",
      },
      {
        title: "Re-weld cracked joints",
        description:
          "Cracked welds are ground out and rewelded properly, then treated and coated, rather than being tacked over.",
      },
      {
        title: "Replace corroded sections",
        description:
          "A post that has corroded at the base is cut back to sound metal and a new section welded in, with the base detailed so water can drain.",
      },
    ],
    whenToCall: [
      "The railing moves at all when leaned on — do not wait on this one.",
      "You can see a crack at a weld or a gap at a base plate.",
      "The railing is on a staircase, a balcony, or anywhere a fall is possible.",
      "The concrete around a post base is cracked or spalling.",
    ],
    relatedService: "welding-metal-works",
    relatedServiceNote:
      "Railing repair is handled by our welding and metal works team, who can re-anchor, re-weld or replace sections as the fault requires.",
    processTitle: "How We Repair a Loose Railing",
    processIntro:
      "Because a railing is a safety element, the repair is about restoring genuine strength rather than stopping the wobble.",
    processSteps: [
      {
        title: "Test and locate the movement",
        description:
          "We load the railing at several points to find exactly where it is moving — anchor, weld or section.",
      },
      {
        title: "Expose and prepare",
        description:
          "The failed fixing or joint is opened up so the repair goes into sound material.",
      },
      {
        title: "Refix or reweld",
        description:
          "The railing is re-anchored into sound concrete, or the joint is ground out and properly rewelded.",
      },
      {
        title: "Treat, coat and re-test",
        description:
          "The repair is primed and coated, then loaded again to confirm there is no remaining movement.",
      },
    ],
    propertyTypesIntro:
      "Where railings fail depends on what they are fixed to and how much use and weather they see.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Internal staircase railings loosen at the base plate; front porch railings corrode at floor level.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Longer external runs and multiple posts mean more anchors, and one failing post can loosen the whole run.",
      },
      {
        label: "Condominiums & apartments",
        note: "Balcony railings are safety-critical and are often fixed into a slab edge; management approval may be needed before work.",
      },
      {
        label: "Shoplots & commercial",
        note: "Corridor and stair railings see heavy public use and loosen faster than domestic ones.",
      },
      {
        label: "Older properties",
        note: "Railings fixed decades ago may be anchored into render rather than structural concrete and need a proper refix.",
      },
    ],
    areasNote:
      "We repair staircase, balcony and corridor railings throughout Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "My railing only wobbles slightly — is that actually a problem?",
        answer:
          "Yes, and it is worth acting on. A slight wobble means a fixing or a joint has already started to fail, and railings do not stabilise on their own — the movement works the fixing looser each time it is used. Since a railing exists to stop a fall, it is one of the few metalwork faults we would say should not be left.",
      },
      {
        question: "Can the bolts just be retightened?",
        answer:
          "Only if the anchor itself is still sound and has simply worked loose. Very often the anchor has pulled and the hole is enlarged, in which case retightening feels better for a few weeks and then fails again. We check the anchor before deciding, and refix into sound concrete where it has gone.",
      },
      {
        question: "Do I need building management approval for a balcony railing?",
        answer:
          "For a strata property, usually yes — balcony railings are typically part of the common property or affect the building facade, so most managements want to be notified and may require an application. Check your building's house rules before arranging work.",
      },
      {
        question: "Can you match a repair to my existing railing design?",
        answer:
          "In most cases yes. Send a photo and we can usually source or fabricate a matching section. Older decorative patterns can sometimes only be approximated, and we will tell you honestly before starting if an exact match is not achievable.",
      },
      {
        question: "Is a cracked weld repairable or does the railing need replacing?",
        answer:
          "A cracked weld is normally repairable — it is ground out and rewelded, which restores the original strength when done properly. Replacement is only needed if the surrounding metal has also corroded or if the railing has been damaged over a long run.",
      },
    ],
    relatedServices: ["welding-metal-works", "handyman"],
    relatedProblems: ["rusted-gate-repair", "broken-weld-joint", "gate-alignment-problems"],
  },
  {
    slug: "gate-alignment-problems",
    category: "welding",
    name: "Gate Not Closing or Aligning",
    title: "Renovix Home Services | Gate Alignment Repair in KL & Selangor",
    metaDescription:
      "Gates that drag, jam or will not latch in Kuala Lumpur & Selangor. Learn why swing and sliding gates fall out of alignment, what can be adjusted, and what needs welding.",
    h1: "Gate Not Closing or Aligning",
    subtitle:
      "A gate that drags on the ground or refuses to latch is telling you something has moved — a hinge, a post, a roller or the ground itself.",
    whatItMeans: [
      "A gate is a heavy moving assembly hung off a small number of points, so a very small change anywhere in that assembly shows up as a large problem at the latch. A hinge that has worn a couple of millimetres, or a post that has leaned slightly, is enough to make a gate drag on the floor or leave a gap at the closing edge.",
      "It is worth separating the symptom from the cause. Dragging, jamming, a gap at the top or bottom of the closing edge, and a latch that no longer lines up are all different signs of the same underlying issue: the gate is no longer sitting where it was designed to sit. Forcing it closed accelerates the damage, because the strain then goes into the hinges and the welds.",
    ],
    commonCauses: [
      "Hinge pins and bushes wearing after years of use.",
      "A hinge post leaning because the ground around its base has settled.",
      "The gate frame sagging at the far corner under its own weight.",
      "Rollers on a sliding gate worn, seized or clogged with grit.",
      "A bent or blocked bottom track on a sliding gate.",
      "A cracked weld at a corner of the gate frame letting it go out of square.",
      "An automatic gate motor or its arm out of adjustment.",
    ],
    warningSigns: [
      "The gate scrapes the ground, leaving an arc-shaped mark.",
      "You have to lift or shove the gate to get it to latch.",
      "The gap at the closing edge is wider at the top than the bottom, or the reverse.",
      "A sliding gate that judders, sticks or is suddenly heavy to move.",
      "A visible lean on the hinge post.",
    ],
    solutions: [
      {
        title: "Diagnose where the movement is",
        description:
          "We check the hinges, the post, the frame squareness and the track before adjusting anything, because the fix depends on which of those has moved.",
      },
      {
        title: "Adjust or replace hinges and rollers",
        description:
          "Worn hinge pins and bushes, and worn or seized sliding rollers, are replaced so the gate hangs and runs as designed.",
      },
      {
        title: "Re-square and reinforce the frame",
        description:
          "A frame that has sagged is pulled back to square and reinforced, and any cracked welds are ground out and rewelded.",
      },
      {
        title: "Straighten the post or the track",
        description:
          "A leaning post is re-set and, where necessary, the base is repaired; a bent bottom track is straightened or replaced and cleared.",
      },
    ],
    whenToCall: [
      "The gate has to be forced, lifted or shoved to close.",
      "It is dragging on the ground and wearing a groove.",
      "A sliding gate has become heavy, noisy or is jumping its track.",
      "You can see a lean on the hinge post or a crack at a frame corner.",
    ],
    relatedService: "welding-metal-works",
    relatedServiceNote:
      "Gate alignment is handled by our welding and metal works team. Where the fault is in an automatic gate's motor or control system, that is specialist work and we will tell you rather than guess at it.",
    processTitle: "How We Realign a Gate",
    processIntro:
      "Alignment work is diagnostic before it is physical — adjusting the wrong element makes the problem worse.",
    processSteps: [
      {
        title: "Check the whole assembly",
        description:
          "We test the swing or slide through its full travel and check hinges, post, frame and track in turn.",
      },
      {
        title: "Renew the worn components",
        description:
          "Hinge pins, bushes or rollers that have worn are replaced with correctly sized parts.",
      },
      {
        title: "Correct the structure",
        description:
          "A sagged frame is squared and reinforced, a leaning post is re-set, a bent track is straightened.",
      },
      {
        title: "Set the latch and test",
        description:
          "The latch or receiver is reset to the corrected position and the gate is cycled repeatedly to confirm it closes cleanly.",
      },
    ],
    propertyTypesIntro:
      "Different gate types fail in different ways, so the likely cause depends on what you have.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Swing gates on a narrow frontage sag at the closing edge; the hinge post often sits in a small concrete base that can settle.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Wider and heavier gates, often sliding or automated, put more load on rollers and tracks.",
      },
      {
        label: "Condominiums & apartments",
        note: "Unit-level gates are lighter, and faults are usually hinge wear or a dropped frame rather than ground movement.",
      },
      {
        label: "Shoplots & commercial",
        note: "Folding and roller shutter gates jam at the guides and see far more daily cycles than a home gate.",
      },
      {
        label: "Older properties",
        note: "Decades of use plus ground settlement often mean both the hinges and the post need attention together.",
      },
    ],
    areasNote:
      "We realign and repair swing and sliding gates across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Why has my gate suddenly started dragging?",
        answer:
          "Rarely suddenly — it usually creeps up over months and reaches the point where it catches. The common causes are hinge wear, a sagging gate frame or a hinge post that has leaned because the ground at its base has settled. A quick check is to look at the gap along the closing edge: if it is wedge-shaped rather than parallel, the gate has dropped.",
      },
      {
        question: "Can you just grind the bottom of the gate so it stops scraping?",
        answer:
          "We would rather not, and here is why: grinding removes metal to accommodate a fault that is still there and still moving. The gate will scrape again once it drops further, and you will have lost material and exposed bare edges to rust. It is better to fix the hinge or post that has moved.",
      },
      {
        question: "My sliding gate has become very heavy to push. Why?",
        answer:
          "Usually the rollers. They either wear flat, seize from lack of lubrication, or get clogged with grit and leaves from the track. Occasionally the bottom track has been bent by a vehicle. All are repairable, and it is worth doing before the extra load starts damaging the gate frame itself.",
      },
      {
        question: "Do you repair automatic gate motors?",
        answer:
          "We handle the metalwork — the gate, the frame, the hinges, the track and the alignment the motor depends on. Motor internals and control boards are specialist work and we would refer you rather than guess. Often, though, an automation fault is actually an alignment fault making the motor strain.",
      },
      {
        question: "Is a misaligned gate a security problem?",
        answer:
          "It can be, in the practical sense that a gate which will not latch properly is often left unlatched, and one that has to be forced tends to be left open. We will not make claims about what any gate prevents, but a gate that closes and latches as designed is doing the job it was fitted for.",
      },
    ],
    relatedServices: ["welding-metal-works", "handyman"],
    relatedProblems: ["rusted-gate-repair", "broken-weld-joint", "railing-repair"],
  },
  {
    slug: "broken-weld-joint",
    category: "welding",
    name: "Cracked or Broken Weld",
    title: "Renovix Home Services | Cracked Weld Repair in KL & Selangor",
    metaDescription:
      "Cracked and broken welds on gates, grilles, railings and awning frames in Kuala Lumpur & Selangor. Understand why welds fail, which are urgent, and how on-site welding repair works.",
    h1: "Cracked or Broken Weld",
    subtitle:
      "A failed weld is a joint that has stopped carrying load — everything connected to it is now being held by something that was not designed to take the whole job.",
    whatItMeans: [
      "A weld is the point where two pieces of steel were fused into one. When it cracks, the assembly stops behaving as a single structure and starts behaving as separate parts held loosely together. Depending on where that happens, the result ranges from an annoying rattle to a genuine safety concern, as with a railing post or an awning frame bracket.",
      "Welds fail for understandable reasons, and it is not usually a mystery. Either the joint was carrying more load or more repeated flexing than it was designed for, or the weld itself was poorly made — insufficient penetration, contaminated metal, or a fillet far too small for the section. Corrosion in the joint is the third common cause, and in Malaysia it is a frequent one because unprimed welds are where rust starts.",
    ],
    commonCauses: [
      "Repeated flexing at the joint, as at a gate hinge or a frequently used latch.",
      "The original weld having too little penetration or being undersized for the load.",
      "Corrosion working into the joint and eating away the weld metal.",
      "Impact — a vehicle knock, a heavy fall, or a gate slammed hard over years.",
      "Load added later that the original structure was not designed for.",
      "Welding onto painted or dirty metal at fabrication, giving a contaminated joint.",
    ],
    warningSigns: [
      "A visible dark line at a joint, often with rust weeping from it.",
      "Movement or play at a point that used to be rigid.",
      "A clicking or knocking sound when the item is used or loaded.",
      "Paint cracked in a straight line exactly along a joint.",
      "Two members that no longer sit at the angle they used to.",
    ],
    solutions: [
      {
        title: "Assess the joint and the load path",
        description:
          "We look at why the weld failed, not just where. Rewelding a joint that failed from overload without addressing the load will simply crack again.",
      },
      {
        title: "Grind out and reweld properly",
        description:
          "The failed weld is ground out to clean, sound metal and rewelded with adequate penetration and an appropriately sized fillet.",
      },
      {
        title: "Reinforce where the design was marginal",
        description:
          "Where the original joint was undersized for what it carries, we add a gusset or increase the weld rather than repeating the original weakness.",
      },
      {
        title: "Treat and coat the repair",
        description:
          "The repaired joint is cleaned, primed and coated — an uncoated weld is exactly where the next round of corrosion starts.",
      },
    ],
    whenToCall: [
      "The failed weld is on a railing, balustrade, awning frame or anything overhead.",
      "You can see movement at a joint that should be solid.",
      "A gate or grille has visibly changed shape.",
      "A previously repaired weld has cracked again — that means the cause was never addressed.",
    ],
    relatedService: "welding-metal-works",
    relatedServiceNote:
      "Weld repair is core work for our welding and metal works team, and most joints can be repaired on site without removing the whole item.",
    processTitle: "How We Repair a Cracked Weld",
    processIntro:
      "A good weld repair addresses why the joint failed, so the same joint is not back on the list next year.",
    processSteps: [
      {
        title: "Inspect the joint and the structure",
        description:
          "We examine the crack and check whether the cause is load, corrosion, impact or an originally poor weld.",
      },
      {
        title: "Prepare back to sound metal",
        description:
          "The cracked weld and any corroded metal are ground out so the repair goes into clean steel.",
      },
      {
        title: "Reweld and reinforce",
        description:
          "The joint is rewelded to an appropriate size, with a gusset or added support where the original design was marginal.",
      },
      {
        title: "Finish and protect",
        description:
          "The weld is dressed, primed and coated so the repaired joint is protected from corrosion.",
      },
    ],
    propertyTypesIntro:
      "Weld failures cluster around whatever moves or carries load most often.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Main gate hinge and latch joints crack first, being the most frequently loaded welds on the property.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Heavier gates, longer railings and carport awning frames put sustained load on more joints.",
      },
      {
        label: "Condominiums & apartments",
        note: "Balcony grille and drying rack brackets fail at the wall joint, where corrosion and load meet.",
      },
      {
        label: "Shoplots & commercial",
        note: "Signage frames and shutter guides see high cycle counts and are often the first joints to go.",
      },
      {
        label: "Older properties",
        note: "Original fabrication standards varied, and decades of corrosion mean joints often need reinforcing rather than simply rewelding.",
      },
    ],
    areasNote:
      "We carry out on-site weld repair for gates, grilles, railings and frames across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Can a cracked weld be repaired on site, or does it have to come to a workshop?",
        answer:
          "Most can be repaired on site. We bring portable welding equipment, and gates, grilles, railings and awning frames are usually repaired in place, which avoids the cost and disruption of removal. Occasionally an item that needs extensive rebuilding is better taken away, and we would tell you that up front.",
      },
      {
        question: "Why did the weld crack when the rest of the gate is fine?",
        answer:
          "Because the joint is where the load concentrates. The flat panels of a gate carry very little; the hinge and corner joints carry all of it, and take the flexing every time the gate swings. Add corrosion working into an unprimed joint and it is unsurprising that welds fail before the sections do.",
      },
      {
        question: "The same weld cracked again after a previous repair. What went wrong?",
        answer:
          "Usually one of two things: the repair was a surface tack that never penetrated into sound metal, or the underlying cause was never dealt with. If a joint is carrying more than it was designed for, rewelding it identically just resets the clock. That is why we look at reinforcement, not only at the weld.",
      },
      {
        question: "Is a cracked weld dangerous?",
        answer:
          "It depends entirely on what the joint holds. A cracked weld on a decorative panel is cosmetic. A cracked weld on a railing post, a balcony grille bracket or an awning frame is a genuine safety concern, because those joints are what stop something falling. Anything overhead or fall-related should be looked at promptly.",
      },
      {
        question: "Will the repaired weld be visible?",
        answer:
          "A repair weld is dressed back and coated, so on a painted gate or railing it is usually not noticeable once finished. On bare or stainless steel the repair is more likely to show, since the heat and the weld metal alter the surface. We will set expectations before starting.",
      },
    ],
    relatedServices: ["welding-metal-works"],
    relatedProblems: ["rusted-gate-repair", "railing-repair", "gate-alignment-problems"],
  },
];
