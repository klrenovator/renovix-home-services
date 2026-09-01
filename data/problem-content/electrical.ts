import type { ProblemDetail, ProblemPropertyType } from "./types";

const electricalPropertyTypes: ProblemPropertyType[] = [
  {
    label: "Terrace House",
    note: "Rewiring, trips, sockets, switches and lighting for landed homes with older circuits.",
  },
  {
    label: "Semi-D & Bungalow",
    note: "Larger electrical scopes and high-load circuits involving multiple appliances and outdoor lighting.",
  },
  {
    label: "Condominium",
    note: "Fault repairs, sockets and switching within the unit, coordinated with management rules.",
  },
  {
    label: "Apartment",
    note: "Practical electrical fixes for apartment points, lighting and the distribution board.",
  },
  {
    label: "Office & Shop",
    note: "Circuit loads, power points, lighting and fault-finding for commercial spaces.",
  },
  {
    label: "Renovation Projects",
    note: "Rewiring and new points planned before plastering, ceilings and painting.",
  },
];

const electricalAreasNote =
  "Electrical fault-finding and repairs are available across Kuala Lumpur, Selangor and the wider Klang Valley. Electrical installation work in Malaysia is subject to regulatory requirements — we can advise on what applies to your specific installation.";

const electricalBase = {
  category: "electrical" as const,
  relatedService: "electrical",
  relatedServices: ["ceiling-partition", "general-renovation", "handyman", "painting"],
  propertyTypes: electricalPropertyTypes,
  areasNote: electricalAreasNote,
};

export const electricalProblems: ProblemDetail[] = [
  {
    ...electricalBase,
    slug: "power-tripping",
    name: "Power Tripping",
    title: "Power Tripping in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Keep it safe — circuit breakers that keep tripping in Kuala Lumpur & Selangor. Learn the common causes, warning signs, the right way to respond and when to call a licensed electrician.",
    h1: "Power Tripping",
    subtitle:
      "A breaker that trips repeatedly is protecting a circuit with a problem. Renovix finds the cause safely instead of just switching it back on.",
    whatItMeans: [
      "Power tripping is when the circuit breaker or RCCB in your distribution board switches off automatically to interrupt the flow of electricity. Breakers are safety devices — they trip for a reason: to protect the wiring, the appliances and people from overheating, overload or a dangerous fault. A breaker that trips once and stays off after a temporary overload may not be a concern, but one that keeps tripping points to a persistent problem in that circuit.",
      "Recurring trips usually come from one of three sources: an overloaded circuit drawing too much current, a short circuit where live and neutral touch, or an earth leakage where current escapes to earth. In Malaysian homes, tripping is often caused by the simultaneous use of high-load appliances on one circuit, a faulty appliance, or old, worn wiring. Repeatedly resetting the breaker is unsafe — it can hide the fault and damage the circuit.",
    ],
    commonCauses: [
      "Too many appliances on one circuit, exceeding its rated load.",
      "A faulty appliance or a damaged cable causing a short circuit.",
      "Earth leakage through a damaged or wet appliance, tripping the RCCB.",
      "Old or undersized wiring that cannot handle a modern home's load.",
      "A loose connection or worn breaker that is no longer reliable.",
      "A water heater, aircond or appliance drawing more than its circuit allows.",
    ],
    warningSigns: [
      "The same breaker keeps tripping, often within a short period.",
      "The breaker trips when a specific appliance is switched on.",
      "A burning smell, warm socket or discoloured switch near the circuit.",
      "Appliances running slower or lights dimming when several are on.",
    ],
    solutions: [
      {
        title: "Identify the affected circuit",
        description:
          "We check which circuit is tripping and what is connected to it, so the cause can be isolated safely.",
      },
      {
        title: "Test the circuit and appliances",
        description:
          "We methodically test the wiring, sockets and appliances to separate an overload from a genuine fault.",
      },
      {
        title: "Repair the fault or replace the breaker",
        description:
          "Where a wiring fault, loose connection or failed breaker is the cause, we carry out the repair or replacement.",
      },
      {
        title: "Balance the load or upgrade the circuit",
        description:
          "If the circuit is overloaded, we advise on spreading appliances across circuits or upgrading the allocation.",
      },
    ],
    whenToCall: [
      "A breaker trips repeatedly and you cannot identify the cause.",
      "There is a burning smell, sparking or a warm socket.",
      "The RCCB trips even when no appliances are switched on.",
      "You want the circuits properly tested before the problem escalates.",
    ],
    relatedServiceNote:
      "Tripping circuits are an electrical safety issue. Our team diagnoses the cause and carries out the repair following Malaysian electrical standards.",
    processTitle: "How We Respond to Power Tripping",
    processIntro:
      "Tripping should never be handled by simply resetting the breaker. Here is how we diagnose it safely.",
    processSteps: [
      {
        title: "Check the distribution board",
        description:
          "We inspect the board and the breaker that is tripping to identify the affected circuit.",
      },
      {
        title: "Isolate the cause",
        description:
          "We test the circuit and its connected appliances to narrow down overload, short circuit or earth leakage.",
      },
      {
        title: "Repair or replace the fault",
        description:
          "We fix the wiring fault, replace a faulty breaker, or advise on load rebalancing or a DB upgrade.",
      },
      {
        title: "Re-test and confirm",
        description:
          "The circuit is tested and checked again before handover, so you know the fix is reliable.",
      },
    ],
    propertyTypesIntro:
      "Power tripping affects every property type where the electrical load is unevenly shared, from terraced houses to offices.",
    faqs: [
      {
        question: "Is it unsafe to keep resetting a breaker that trips?",
        answer:
          "Yes. A breaker that trips repeatedly is protecting a circuit with a fault. Resetting it again and again hides the problem and can lead to overheating. It should be checked by a professional.",
      },
      {
        question: "Why does my RCCB trip but not the main breaker?",
        answer:
          "An RCCB trips on earth leakage — where current is escaping to earth. This is often caused by a faulty or wet appliance, but it can also indicate damaged wiring that needs attention.",
      },
      {
        question: "Can too many appliances cause a trip?",
        answer:
          "Yes. If the combined load on a circuit exceeds its rated capacity, the breaker trips. Adding more sockets does not increase the capacity; the circuit itself may need upgrading.",
      },
      {
        question: "What should I do while I wait for an electrician?",
        answer:
          "Turn off and unplug the appliances on the affected circuit and avoid using it until it is checked. Do not force the breaker on repeatedly.",
      },
      {
        question: "Why do trips happen more in the evening?",
        answer:
          "That is typically when a household uses the most appliances at once — cooking, aircond, water heater and lighting — pushing the circuit close to or over its limit.",
      },
    ],
    relatedProblems: [
      "short-circuit",
      "faulty-socket",
      "old-house-wiring",
      "flickering-lights",
    ],
  },
  {
    ...electricalBase,
    slug: "faulty-socket",
    name: "Faulty Socket",
    title: "Faulty Socket Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A faulty power socket that is dead, loose, warm or sparking in Kuala Lumpur & Selangor? Learn the causes, warning signs, the safe response and when to call an electrician.",
    h1: "Faulty Socket",
    subtitle:
      "A dead, loose or warm socket is a wiring problem, not a plug problem. Renovix repairs or replaces sockets safely and tests the circuit.",
    whatItMeans: [
      "A faulty socket is a power point that has stopped working, is loose, feels warm, or sparks when a plug is inserted. Because the socket is the point where your home meets your appliances, a fault here is both inconvenient and a potential safety hazard. A socket can fail for a number of reasons that are not always visible from the front plate.",
      "A socket that has stopped working is often the result of a loose connection behind the wall, a broken terminal, a faulty switch, or a trip on the circuit. A warm or sparking socket is more serious and points to a loose connection or a failing contact that is generating heat. Any of these should be checked before they damage the appliance or cause a fire.",
    ],
    commonCauses: [
      "A loose wire behind the socket terminal.",
      "A worn or broken socket switch or terminal contact.",
      "A circuit that has tripped or a blown fuse affecting the point.",
      "Damage caused when the socket was overloaded or overused.",
      "An old socket that has degraded with age.",
      "A plug that was pulled out forcefully, breaking the socket itself.",
    ],
    warningSigns: [
      "The socket does not work even though the circuit is on.",
      "The socket feels warm or hot to the touch after use.",
      "A spark or crackle when a plug is inserted.",
      "The plug fits loosely or falls out of the socket.",
    ],
    solutions: [
      {
        title: "Diagnose the socket and circuit",
        description:
          "We test the socket and the circuit to confirm whether the problem is the socket itself, the wiring or a wider circuit fault.",
      },
      {
        title: "Replace the socket",
        description:
          "A failed socket is removed and replaced with a new, correctly rated outlet, tidily fitted and tested.",
      },
      {
        title: "Repair a loose connection",
        description:
          "Where the wiring is loose or unclamped, we secure it properly so the contact is safe and reliable.",
      },
      {
        title: "Check the circuit load",
        description:
          "If the socket keeps failing, we check the circuit load and advise on whether the point needs a dedicated circuit.",
      },
    ],
    whenToCall: [
      "The socket does not work at all.",
      "The socket is warm, sparking or smells of burning.",
      "Plugs are loose or keep falling out of the socket.",
      "Several sockets on one circuit have stopped working.",
    ],
    relatedServiceNote:
      "Faulty sockets are an electrical repair. We test the circuit and replace the outlet safely, following Malaysian electrical standards.",
    processTitle: "How We Repair a Faulty Socket",
    processIntro:
      "Replacing a socket is more than swapping the front plate. This is the safe process we follow.",
    processSteps: [
      {
        title: "Isolate and test",
        description:
          "We isolate the circuit and test the socket and its connection to confirm the fault.",
      },
      {
        title: "Inspect the wiring",
        description:
          "We check the terminal connections and cable condition behind the socket.",
      },
      {
        title: "Replace the socket",
        description:
          "A correctly rated socket is fitted, the connections tightened, and the point secured to the wall.",
      },
      {
        title: "Test and re-energise",
        description:
          "The circuit is re-energised and the socket tested before handover so you can use it with confidence.",
      },
    ],
    propertyTypesIntro:
      "Faulty sockets affect every property type. They are often found in older homes where sockets have been used for many years.",
    faqs: [
      {
        question: "Can a faulty socket be repaired or does it need replacing?",
        answer:
          "It depends. A loose connection can sometimes be repaired in place, but a socket with worn contacts or a damaged body is best replaced. We check and recommend the safe option.",
      },
      {
        question: "Why does my socket spark when I plug something in?",
        answer:
          "A small spark can be normal on some switched sockets, but a noticeable spark or crackle usually means a loose or worn contact. It should be checked to avoid it worsening.",
      },
      {
        question: "Is a warm socket dangerous?",
        answer:
          "Yes. A socket that feels warm after use indicates a poor connection that is generating heat. This can lead to damage or fire, so it should be checked promptly.",
      },
      {
        question: "How many sockets should be on one circuit?",
        answer:
          "It depends on the total load rather than the number of points. A professional will assess the circuit to make sure it is not overloaded.",
      },
      {
        question: "Should I replace a socket myself?",
        answer:
          "Electrical work carries risk and is subject to regulatory requirements in Malaysia. Sockets should be handled by a qualified electrician to ensure they are safe and comply with standards.",
      },
    ],
    relatedProblems: [
      "power-tripping",
      "short-circuit",
      "faulty-switch",
      "insufficient-power-points",
    ],
  },
  {
    ...electricalBase,
    slug: "faulty-switch",
    name: "Faulty Switch",
    title: "Faulty Light Switch in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A light switch that is broken, flickers, sparks or feels warm in Kuala Lumpur & Selangor? Learn the causes, warning signs, safe response and when to call an electrician.",
    h1: "Faulty Switch",
    subtitle:
      "A switch that sparks, flickers or feels warm is a wiring problem, not a worn-out part. Renovix replaces it safely and tests it.",
    whatItMeans: [
      "A faulty switch is a wall switch that has stopped working, flickers when used, feels warm, or spark when it is operated. Switches are simple devices, which is why a fault is often easy to notice — but the cause is usually behind the switch rather than the switch itself. A loose terminal, a worn contact or a damaged cable can all make a switch behave erratically.",
      "A switch that no longer controls its light is an inconvenience, but a switch that is warm, sparks or smells is a sign of a loose connection creating resistance and heat. This should be addressed quickly, as heat build-up at a switch can damage the wiring and, in some cases, the wall and framing around it.",
    ],
    commonCauses: [
      "A loose terminal or wire behind the switch.",
      "A worn mechanical switch that no longer makes proper contact.",
      "The wrong type of switch or a switch under-rated for the load.",
      "A broken switch mechanism or a snapped rocker.",
      "Damaged cable inside the wall feeding the switch.",
      "A two-way switching circuit that has been wired incorrectly.",
    ],
    warningSigns: [
      "The switch no longer turns the light on or off.",
      "The switch flicks the light or runs it dimmer than it should.",
      "The switch feels warm or hot when used.",
      "A spark or crackle is heard when the switch is operated.",
    ],
    solutions: [
      {
        title: "Diagnose the switch and circuit",
        description:
          "We test the switch and its supply to confirm whether the problem is the switch itself or the wiring behind it.",
      },
      {
        title: "Replace the switch",
        description:
          "A failed switch is replaced with a correctly rated unit, fitted tidily and tested.",
      },
      {
        title: "Repair the wiring",
        description:
          "Where a loose terminal or damaged cable is the cause, we secure or replace it so the switch works reliably.",
      },
      {
        title: "Check the switching layout",
        description:
          "For two-way or multi-way switches, we verify the wiring so the switching works as it should.",
      },
    ],
    whenToCall: [
      "The switch does not work at all.",
      "The switch is warm, sparks or smells of burning.",
      "The light flickers or dims when the switch is used.",
      "The switch is loose or the faceplate is coming away from the wall.",
    ],
    relatedServiceNote:
      "Faulty switches are an electrical repair. We replace the switch and test the circuit safely following Malaysian electrical standards.",
    processTitle: "How We Replace a Faulty Switch",
    processIntro:
      "A switch replacement is quick but depends on a safe connection. This is the process.",
    processSteps: [
      {
        title: "Isolate the circuit",
        description:
          "We isolate the supply to the switch before any work is carried out.",
      },
      {
        title: "Test and inspect",
        description:
          "We check the switch and its wiring to confirm the fault and the type of switch needed.",
      },
      {
        title: "Replace and secure",
        description:
          "The correct switch is fitted, terminals tightened, and the faceplate secured.",
      },
      {
        title: "Test the switching",
        description:
          "The circuit is re-energised and the switch tested so the light works reliably.",
      },
    ],
    propertyTypesIntro:
      "Faulty switches affect all property types, from apartments to larger semi-D and bungalow homes.",
    faqs: [
      {
        question: "Why does my switch feel hot?",
        answer:
          "A warm switch usually means a loose connection is creating resistance and heat. This should be checked, as continued heat can damage the wiring.",
      },
      {
        question: "Can a faulty switch be repaired rather than replaced?",
        answer:
          "Sometimes a loose terminal can be re-tightened, but a switch with worn contacts or a broken mechanism is best replaced. We recommend the safe option after inspecting it.",
      },
      {
        question: "Why does a switch flicker the light?",
        answer:
          "Flickering from a switch indicates a poor contact or a loose connection. It can also be a sign of a much larger circuit problem that needs testing.",
      },
      {
        question: "Are two-way switches more likely to go wrong?",
        answer:
          "Two-way switches involve more wiring, so if the circuit is miswired they can behave erratically. That is why they should be checked by a professional.",
      },
      {
        question: "Is it OK to ignore a loose switch plate?",
        answer:
          "A loose plate can let the switch move and loosen the terminals behind it. It is worth securing the switch before it leads to a wiring issue.",
      },
    ],
    relatedProblems: [
      "faulty-socket",
      "flickering-lights",
      "power-tripping",
      "short-circuit",
    ],
  },
  {
    ...electricalBase,
    slug: "flickering-lights",
    name: "Flickering Lights",
    title: "Flickering Lights in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Flickering, dimming or pulsing lights in Kuala Lumpur & Selangor? Learn the common causes, warning signs, solutions and when to call an electrician for safe diagnosis.",
    h1: "Flickering Lights",
    subtitle:
      "Flickering lights are often a wiring issue, not a bulb problem. Renovix traces the cause and fixes it at the circuit.",
    whatItMeans: [
      "Flickering lights are lights that dim, pulse, or go on and off intermittently. They are easy to dismiss as a loose bulb, but persistent flickering usually points to a wiring or connection issue somewhere in the circuit. Flickering can affect one light or a whole group, and the pattern matters — a light that flickers in one room is different from lights that flicker when an appliance is switched on.",
      "Common causes include a loose connection at the switch or light fitting, a poor connection in a joint, a circuit that is overloaded, or appliances that draw large surges when they start. For older homes, flickering can also be a sign of old, worn wiring or a failing breaker. Because the underlying cause can be electrical, it is worth having it checked rather than assuming the fitting is faulty.",
    ],
    commonCauses: [
      "A loose bulb or a poor contact in the lamp holder.",
      "A loose connection at the switch or the light fitting.",
      "An overloaded circuit where the voltage dips when appliances run.",
      "A faulty dimmer switch or an incompatible bulb.",
      "Worn or old wiring with a poor joint.",
      "A failing breaker or a loose connection in the distribution board.",
    ],
    warningSigns: [
      "A light flickers consistently, not just occasionally.",
      "Lights dim when an appliance like the aircond or water heater starts.",
      "Several lights flicker at the same time.",
      "The flickering is accompanied by warmth, sparking or a smell.",
    ],
    solutions: [
      {
        title: "Identify whether it is one light or many",
        description:
          "We test whether the flicker is confined to one fitting or affects a whole circuit, which points to the likely source.",
      },
      {
        title: "Check the fitting and switch",
        description:
          "We inspect the lamp holder, bulb, switch and dimmer for a loose contact or an incompatible combination.",
      },
      {
        title: "Tighten and repair connections",
        description:
          "Loose connections in the joint, switch or board are secured so the current flows steadily.",
      },
      {
        title: "Address the circuit load",
        description:
          "If the circuit is overloaded or the wiring is old, we advise on rebalancing or upgrading the circuit.",
      },
    ],
    whenToCall: [
      "A light flickers constantly and a new bulb does not fix it.",
      "Lights across the house dim when an appliance runs.",
      "Flickering is accompanied by heat, sparking or a burning smell.",
      "The flicker is coming from the distribution board rather than the fitting.",
    ],
    relatedServiceNote:
      "Flickering lights are diagnosed electrically. We trace the connection issue and, where old wiring is the cause, coordinate with rewiring.",
    processTitle: "How We Trace Flickering Lights",
    processIntro:
      "Flickering is a symptom, and the fix is to find the connection or load causing it. This is how we work.",
    processSteps: [
      {
        title: "Test the light and circuit",
        description:
          "We check whether the flicker follows the fitting, the switch or the circuit.",
      },
      {
        title: "Inspect connections",
        description:
          "We examine the lamp holder, switch, joints and board connections for looseness.",
      },
      {
        title: "Repair the cause",
        description:
          "We tighten or replace the affected connection, fitting or component.",
      },
      {
        title: "Verify the fix",
        description:
          "The lights are tested again to confirm the flicker is gone and the supply is steady.",
      },
    ],
    propertyTypesIntro:
      "Flickering lights affect every property type, and are especially common in older homes and times of high appliance use.",
    faqs: [
      {
        question: "Is flickering lights dangerous?",
        answer:
          "Occasional flicker can be harmless, but persistent flickering can indicate a loose connection or overloaded circuit that should be checked to avoid it worsening.",
      },
      {
        question: "Why do my lights flicker when the aircond turns on?",
        answer:
          "The aircond draws a large surge of current when it starts. If the circuit or supply is struggling, the lights dim briefly. If it is frequent, the circuit may need attention.",
      },
      {
        question: "Could flickering just be a faulty bulb?",
        answer:
          "Sometimes. We would always swap the bulb first. If the flicker continues, it is worth checking the fitting, switch and wiring.",
      },
      {
        question: "Can an LED light flicker for a different reason?",
        answer:
          "Yes. LEDs can flicker with an incompatible dimmer, or with a loose connection. We check compatibility when the flicker persists.",
      },
      {
        question: "When should I take flickering seriously?",
        answer:
          "If a single light flickers from a loose bulb, it is usually minor. If lights dim across rooms, or flickering is accompanied by heat or a smell, it is time to call an electrician.",
      },
    ],
    relatedProblems: [
      "faulty-switch",
      "short-circuit",
      "old-house-wiring",
      "power-tripping",
    ],
  },
  {
    ...electricalBase,
    slug: "short-circuit",
    name: "Short Circuit",
    title: "Short Circuit Repair in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "A short circuit in your home in Kuala Lumpur & Selangor? Learn what it is, common causes, warning signs, the safe response and when to call a licensed electrician.",
    h1: "Short Circuit",
    subtitle:
      "A short circuit is a genuine electrical fault. Renovix locates and repairs it safely — it is not a problem to keep resetting.",
    whatItMeans: [
      "A short circuit happens when a live wire comes into contact with a neutral wire or with the earth, creating a path of very low resistance. This lets an extremely large current flow, which is exactly what a breaker is designed to stop by tripping. A short circuit can occur inside an appliance, within a damaged cable, or in the wiring behind a wall or socket.",
      "A short circuit is a serious fault and should always be treated with care. It can generate heat and, if not interrupted, damage the circuit, the appliance and potentially the wiring in the wall. If you suspect a short circuit, the correct response is to stop using the affected area and have it located and repaired by a professional rather than repeatedly resetting the breaker.",
    ],
    commonCauses: [
      "A live wire touching a neutral or earth wire inside a cable or fitting.",
      "Damaged or pinched insulation in a socket, switch or junction.",
      "A faulty appliance with internal shorted wiring.",
      "Water or moisture entering an outlet, appliance or junction box.",
      "Worn or old wiring where the insulation has broken down.",
      "A loose connection allowing a wire to make contact with the wrong path.",
    ],
    warningSigns: [
      "A breaker trips immediately and will not reset.",
      "A burning smell, smoke or a popping sound at a socket or fitting.",
      "Sparks at a socket, switch or appliance.",
      "A socket or appliance stops working after a trip.",
    ],
    solutions: [
      {
        title: "Locate the short",
        description:
          "We isolate the circuit and test the wiring and connected appliances to find exactly where the short circuit is.",
      },
      {
        title: "Repair the damaged wiring",
        description:
          "The failed cable, joint or fitting is repaired or replaced so the circuit is sound again.",
      },
      {
        title: "Replace the faulty appliance",
        description:
          "If the short is inside an appliance, we identify it and advise on repair or replacement.",
      },
      {
        title: "Verify the circuit protection",
        description:
          "We check that the breaker and protection on the circuit are correctly rated so the fault would be interrupted safely.",
      },
    ],
    whenToCall: [
      "A breaker trips instantly and will not reset.",
      "There is a burning smell, smoke or sparking.",
      "A socket or appliance is damaged and you smell something burning.",
      "You have already reset the breaker but the same fault returns.",
    ],
    relatedServiceNote:
      "Short circuits are a serious electrical fault that our team handles safely, locating and repairing the cause and testing the circuit.",
    processTitle: "How We Repair a Short Circuit",
    processIntro:
      "A short circuit must be found and repaired properly. This is the safe sequence we follow.",
    processSteps: [
      {
        title: "Isolate the affected circuit",
        description:
          "We isolate the supply to the affected circuit before doing any work, so the fault is safely disconnected.",
      },
      {
        title: "Test to locate the short",
        description:
          "We use testing to narrow down where the live and neutral are touching.",
      },
      {
        title: "Repair or replace",
        description:
          "The damaged wiring, fitting or appliance is repaired or replaced to remove the fault.",
      },
      {
        title: "Re-test and restore",
        description:
          "The circuit is tested and re-energised only after we confirm the fault is gone.",
      },
    ],
    propertyTypesIntro:
      "Short circuits can affect any property type. They are more likely in older homes with worn wiring and in kitchens or wet areas with more appliances.",
    faqs: [
      {
        question: "What should I do if I suspect a short circuit?",
        answer:
          "Switch off the affected circuit and avoid using it. Do not keep resetting the breaker — the fault is still there and can cause damage. Call an electrician.",
      },
      {
        question: "How is a short circuit different from an overload?",
        answer:
          "An overload draws more current than the circuit is rated for, while a short circuit creates an unintended path of very low resistance. Both trip a breaker, but they need different fixes.",
      },
      {
        question: "Can a short circuit cause a fire?",
        answer:
          "Yes. The large current and heat generated by a short circuit can ignite nearby materials if it is not interrupted. That is why it should be treated as urgent.",
      },
      {
        question: "Will a short circuit stop affecting me once the breaker trips?",
        answer:
          "The breaker interrupts the fault, which prevents immediate damage, but the fault itself remains. It needs to be located and repaired before the circuit is used again.",
      },
      {
        question: "Why did a new appliance cause a short circuit?",
        answer:
          "It could be an internal fault in the appliance, or the way it is connected to the circuit. We test both the appliance and the connection to identify the cause.",
      },
    ],
    relatedProblems: [
      "power-tripping",
      "faulty-socket",
      "old-house-wiring",
      "flickering-lights",
    ],
  },
  {
    ...electricalBase,
    slug: "old-house-wiring",
    name: "Old House Wiring",
    title: "Old House Rewiring in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Old house wiring in Kuala Lumpur & Selangor — signs your wiring needs updating, common causes, warning signs, rewiring solutions and when to call an electrician.",
    h1: "Old House Wiring",
    subtitle:
      "Wiring installed decades ago was never designed for today's loads. Renovix assesses old wiring and rewires homes safely.",
    whatItMeans: [
      "Old house wiring refers to electrical wiring in a home that was installed many years ago and has not been updated for the modern electrical load of aircond, water heaters, kitchen appliances and multiple electronics. Older wiring uses older materials, may not have earth protection on every circuit, and was designed for far fewer sockets and much lower loads. Over time insulation also ages, hardens and becomes brittle.",
      "In Kuala Lumpur and Selangor, many older terraced houses and apartments still operate on original wiring. This is a hidden risk: the wiring can work for years, then fail when a high-load appliance is added or when insulation finally breaks down. Old wiring is also more likely to cause trips, warm sockets and flickering, because today's demands exceed what the circuit was built to handle.",
    ],
    commonCauses: [
      "Insulation that has aged, hardened and become brittle over decades.",
      "Wiring sized for loads that fall far below a modern home's demands.",
      "A distribution board without proper earth or residual-current protection.",
      "Chasing, hacking or renovation work that damaged hidden cables.",
      "Additions over the years that overloaded circuits or used poor connections.",
      "Sockets that were never earthed or that use outdated connections.",
    ],
    warningSigns: [
      "The distribution board uses old fuses or breakers with no RCCB protection.",
      "Frequent trips, warm sockets, flickering lights or a burning smell.",
      "Coming home to find the wiring was part of an old renovation.",
      "A need to use extension leads because there are not enough points.",
    ],
    solutions: [
      {
        title: "Assess the current wiring",
        description:
          "We inspect the wiring, distribution board and circuits to identify age, safety and load concerns.",
      },
      {
        title: "Full or partial rewiring",
        description:
          "Depending on the scope, we replace the wiring for the whole home or for selected circuits and areas.",
      },
      {
        title: "Upgrade the distribution board",
        description:
          "We replace old fuses and breakers with properly rated MCBs and add RCCB/ELCB protection for safety.",
      },
      {
        title: "Add earthed sockets and points",
        description:
          "We add correctly earthed sockets and additional points so you can run modern appliances safely without adaptors.",
      },
    ],
    whenToCall: [
      "The wiring is original to an older house and has never been updated.",
      "There are signs of frequent trips, warm sockets or flickering.",
      "The distribution board uses old fuses with no residual-current protection.",
      "You are planning a renovation that will open up walls and ceilings.",
    ],
    relatedServiceNote:
      "Assessing and rewiring old wiring is an electrical project. We also coordinate with ceiling and renovation work where wiring needs to go into walls before finishing.",
    processTitle: "How We Handle Old Wiring",
    processIntro:
      "Updating old wiring is planned carefully around the layout of the home. This is the approach.",
    processSteps: [
      {
        title: "Survey the wiring",
        description:
          "We inspect the cables, board and switchgear to assess age, condition and current demand.",
      },
      {
        title: "Plan the rewiring scope",
        description:
          "We advise on full versus partial rewiring and the best schedule around your renovation or occupancy.",
      },
      {
        title: "Carry out the rewiring",
        description:
        "New wiring is installed, concealed or surface, with a correctly rated board and protection.",
      },
      {
        title: "Test and hand over",
        description:
          "Every circuit is tested and checked before handover, and you are walked through the new setup.",
      },
    ],
    propertyTypesIntro:
      "Old wiring is a particular concern for older terraced houses, semi-Ds and apartments that have not been rewired since construction.",
    faqs: [
      {
        question: "How do I know if my house needs rewiring?",
        answer:
          "Signs include frequent trips, warm sockets, a fuse-based board, and wiring that has never been updated. A professional assessment can confirm the condition and recommend the scope.",
      },
      {
        question: "Is rewiring a whole house disruptive?",
        answer:
          "Rewiring does involve accessing walls and ceilings, so it is most convenient during a renovation. Partial rewiring can target specific circuits with less disruption.",
      },
      {
        question: "What is RCCB protection and why does it matter?",
        answer:
          "An RCCB (or ELCB) detects earth leakage and cuts the supply, reducing the risk of electric shock. Older boards often lack it, so adding it is a key safety improvement.",
      },
      {
        question: "Can old wiring handle aircond and water heaters?",
        answer:
          "Often not on the existing circuits. High-load appliances need correctly sized, earthed circuits, which is something we check and rectify during an update.",
      },
      {
        question: "Should I rewire before or after renovation?",
        answer:
          "Before finishing. It is much cheaper to run new wiring while walls and ceilings are open than to chase after they are finished.",
      },
    ],
    relatedProblems: [
      "power-tripping",
      "insufficient-power-points",
      "short-circuit",
      "flickering-lights",
    ],
  },
  {
    ...electricalBase,
    slug: "insufficient-power-points",
    name: "Insufficient Power Points",
    title: "More Power Points in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Not enough power points in your home in Kuala Lumpur & Selangor? Learn the causes, warning signs, the right way to add sockets and when to call an electrician.",
    h1: "Insufficient Power Points",
    subtitle:
      "Too few sockets means extension leads and overloaded circuits. Renovix adds properly wired power points where you need them.",
    whatItMeans: [
      "Insufficient power points is the common situation where a room does not have enough sockets for the appliances and devices you actually use. The result is a tangle of extension leads, adaptors and multi-plugs that run from one point overloaded with several devices. This is both inconvenient and an electrical risk, because too many appliances on one point or one circuit can overload it and cause trips.",
      "Modern homes and lifestyles use far more electricity than older rooms were designed for — phones, laptops, entertainment, kitchen and office appliances. When power points are added, the key is not just adding a socket, but ensuring the circuit can handle the load. Simply bolting on more adaptors is not a safe solution; a new point needs to be wired into a circuit that can carry it.",
    ],
    commonCauses: [
      "A home built or wired when far fewer electrical appliances were in use.",
      "Rooms laid out so the existing sockets are in the wrong places.",
      "Sockets that have been eliminated during past renovations or partitioning.",
      "A growing family or a home office that has added devices over time.",
      "Using multi-adaptors to compensate for a lack of actual points.",
      "Forced reliance on extension leads running across walkways.",
    ],
    warningSigns: [
      "Frequent use of multi-plug adaptors or extension leads across a room.",
      "A socket used for many devices that runs warm or trips.",
      "Appliances unplugged regularly to make way for others.",
      "Cables trailing across the floor, creating a tripping risk.",
    ],
    solutions: [
      {
        title: "Plan the new point locations",
        description:
          "We assess the room layout and usage so new sockets go where they are actually needed, not just where they are easy to run.",
      },
      {
        title: "Add sockets on a sound circuit",
        description:
          "New power points are wired into a correctly rated circuit, so the extra load is supported safely.",
      },
      {
        title: "Add dedicated circuits for high load",
        description:
          "For appliances like aircond, ovens or water heaters, we add a dedicated circuit rather than loading an existing one.",
      },
      {
        title: "Surface or concealed installation",
        description:
          "Depending on whether the wall is finished, we run the wiring concealed or in neat surface trunking.",
      },
    ],
    whenToCall: [
      "You rely on extension leads or adaptors for everyday use.",
      "A socket is overloaded, warm, or trips when you plug in more devices.",
      "You are setting up a home office, kitchen upgrade or new appliance.",
      "You want sockets moved or added as part of a renovation.",
    ],
    relatedServiceNote:
      "Adding power points is an electrical installation. We plan the circuit and layout so new points are safe and useful.",
    processTitle: "How We Add Power Points",
    processIntro:
      "Adding a power point is about a safe circuit as much as a tidy socket. Here is the process.",
    processSteps: [
      {
        title: "Assess the layout and load",
        description:
          "We look at the room, what you want to run, and the capacity of the existing circuit.",
      },
      {
        title: "Plan the wire route",
        description:
          "We choose the neatest route for the new wiring, concealed where possible.",
      },
      {
        title: "Install and wire the socket",
        description:
          "The new point is fitted and correctly connected to the circuit, with proper fixings.",
      },
      {
        title: "Test and finish",
        description:
          "The point is tested, the wall is made good, and the socket is left tidy and safe.",
      },
    ],
    propertyTypesIntro:
      "Insufficient power points are common in older homes and in condos where the original wiring was laid out for a different way of living.",
    faqs: [
      {
        question: "Is it safe to use multi-plug adaptors everywhere?",
        answer:
          "Relying on adaptors can overload a single socket or circuit, which is a fire risk. Adding properly wired points on a sound circuit is the safer long-term approach.",
      },
      {
        question: "How many sockets can I add to a room?",
        answer:
          "It depends on the circuit load rather than a fixed number. We assess the circuit and add points within what it can safely carry, adding a dedicated circuit where needed.",
      },
      {
        question: "Can you add a power point without chasing the wall?",
        answer:
          "Often yes. Where concealed wiring is not practical, we install neat surface trunking that keeps the wiring tidy and safe.",
      },
      {
        question: "Why does my socket trip when I plug in several devices?",
        answer:
          "The combined load is exceeding what that socket or circuit can carry. Adding more points on an already loaded circuit will not fix it — the circuit may need to be rebalanced or upgraded.",
      },
      {
        question: "Do I need new wiring to add extra sockets?",
        answer:
          "If the circuit has capacity, extra sockets can often be added to it. If the circuit is already at its limit, we run a new circuit or rebalance the load.",
      },
    ],
    relatedProblems: [
      "old-house-wiring",
      "faulty-socket",
      "power-tripping",
      "ceiling-fan-wiring-problems",
    ],
  },
  {
    ...electricalBase,
    slug: "ceiling-fan-wiring-problems",
    name: "Ceiling Fan Wiring Problems",
    title: "Ceiling Fan Wiring in Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Ceiling fan wiring problems in Kuala Lumpur & Selangor — a fan that won't turn, sparks, or has no supply. Learn the causes, warning signs, solutions and when to call an electrician.",
    h1: "Ceiling Fan Wiring Problems",
    subtitle:
      "A ceiling fan that will not spin, sparks or has no supply is a wiring problem. Renovix wires and repairs fans safely.",
    whatItMeans: [
      "Ceiling fan wiring problems refer to any issue where the fan does not work because of an electrical connection rather than the fan unit itself. This can be a fan that has no supply, a fan that will not turn on, a fan that sparks or trips a breaker, or a wiring issue at the ceiling when a new fan is being installed. A ceiling fan is a fixed electrical fitting, so these problems relate to the circuit, the fan point and the switch controlling it.",
      "Ceiling fans are common in Malaysian homes and are often added or replaced during a renovation or a room update. A fan that was wired for an older unit may not suit a new one, especially if the new fan has different features such as a light or a remote control. Installing a fan requires a secure ceiling fixing, correct wiring and a properly rated supply, which is why it is an electrical job rather than a simple swap.",
    ],
    commonCauses: [
      "A fan point with no live supply, or a switched live that is not connected.",
      "Loose or incorrect wiring at the ceiling or the switch.",
      "A capacitor or regulator that has failed.",
      "The fan's light or remote function requiring wiring that was not provided.",
      "An existing fan point not rated for a heavier or newer fan.",
      "A circuit that trips when the fan is switched on due to a fault.",
    ],
    warningSigns: [
      "The fan does not spin even with the switch on.",
      "The fan sparks or trips the breaker when started.",
      "The fan runs erratically or stops after a short time.",
      "The fan point has no supply and the light on it does not work either.",
    ],
    solutions: [
      {
        title: "Check the supply and switch",
        description:
          "We test the fan point, the switch and the circuit to find where the supply is failing.",
      },
      {
        title: "Wire the fan correctly",
        description:
          "We connect the fan to its switched live, neutral and earth, and wire any light or remote function properly.",
      },
      {
        title: "Replace a faulty capacitor or regulator",
        description:
          "Where the speed control or capacitor has failed, we replace it so the fan runs smoothly.",
      },
      {
        title: "Install a new fan or fan point",
        description:
          "For new fans, we fit a secure bracket, run the correct wiring and test the installation before handover.",
      },
    ],
    whenToCall: [
      "The fan will not start even though the switch is on.",
      "The fan sparks, trips the breaker or smells of burning.",
      "You are installing a new fan, or one with a light or remote.",
      "The fan point has no supply and needs to be wired.",
    ],
    relatedServiceNote:
      "Ceiling fan wiring is an electrical task. We also coordinate with ceiling work where a new fan point needs to be installed in a new ceiling.",
    processTitle: "How We Handle Ceiling Fan Wiring",
    processIntro:
      "A ceiling fan needs correct wiring, fixing and testing. This is how we do it.",
    processSteps: [
      {
        title: "Isolate and test the point",
        description:
          "We switch off the supply and test the fan point, switch and circuit to find the fault.",
      },
      {
        title: "Wire the fan correctly",
        description:
          "We connect the fan to the correct supply lines and secure the ceiling fixing.",
      },
      {
        title: "Test the functions",
        description:
          "We verify the fan, light and speed control work as they should before finishing.",
      },
      {
        title: "Clean up and hand over",
        description:
          "The area is left tidy and the fan is ready to use, with the circuit checked.",
      },
    ],
    propertyTypesIntro:
      "Ceiling fan wiring applies to every property type and is common when fans are added, replaced or moved during renovation.",
    faqs: [
      {
        question: "Why does my new ceiling fan not work when the old one did?",
        answer:
          "The new fan may need additional wiring, such as a live for a light or a different switching arrangement. We check the point and rewire it to suit the new fan.",
      },
      {
        question: "Can I use the existing fan point for a fan with a light?",
        answer:
          "Often, but it depends on whether the point has a switched live and neutral that can support a light. We check and advise on any changes needed.",
      },
      {
        question: "Why does my fan trip the breaker when I turn it on?",
        answer:
          "This indicates a fault in the wiring within the fan or at the connection. It should be checked rather than used, as it is an electrical fault.",
      },
      {
        question: "Is a ceiling fan easy to install myself?",
        answer:
          "Installing a fixed electrical fitting involves wiring and a secure fixing. It is safest to have it wired and tested by a professional, especially if it has a light or remote.",
      },
      {
        question: "What does a capacitor do in a ceiling fan?",
        answer:
          "The capacitor helps start and control the fan's motor. If it fails, the fan may not spin, spin slowly or stop — and it is a component we would replace.",
      },
    ],
    relatedProblems: [
      "flickering-lights",
      "faulty-switch",
      "power-tripping",
      "insufficient-power-points",
    ],
  },
];
