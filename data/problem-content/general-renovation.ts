import type { ProblemDetail } from "./types";

/**
 * General renovation problem guides.
 *
 * These are planning and process problems rather than physical defects — the
 * questions people search before and during a renovation. They deliberately
 * publish no fees, statutory deadlines or approval timelines, because those
 * vary by local authority and management body and we will not invent them.
 */
export const generalRenovationProblems: ProblemDetail[] = [
  {
    slug: "renovation-permit-approval",
    category: "general-renovation",
    name: "Renovation Approval & Permits",
    title: "Renovix Home Services | Renovation Approval & Permits in KL & Selangor",
    metaDescription:
      "Renovation approvals in Kuala Lumpur & Selangor — strata management consent, local authority permits and what needs approval. Understand the process before work starts.",
    h1: "Renovation Approval & Permits",
    subtitle:
      "Most renovation disputes in Malaysian strata buildings start the same way: work began before the approval was in place.",
    whatItMeans: [
      "There are two separate approval systems in play, and they are frequently confused. The first is your building management or joint management body, which applies if you live in a strata property — a condominium, apartment or serviced residence. The second is the local authority, which applies to structural changes and extensions regardless of property type. Meeting one does not satisfy the other.",
      "The practical consequence is that a renovation which is perfectly legal from the council's point of view can still be stopped by building management on the day the contractor arrives, because the deposit was never lodged and the application was never filed. This is the single most common cause of delay we see, and it is entirely avoidable by starting the paperwork early.",
    ],
    commonCauses: [
      "Assuming that interior work inside your own unit needs no permission.",
      "Not knowing that the building has a renovation deposit and application process at all.",
      "Starting work before written approval has actually been issued.",
      "Confusing local authority approval with management approval, and obtaining only one.",
      "Hacking a wall without checking whether it is structural or common property.",
      "Work that affects the building facade, external walls or common areas.",
      "Contractors working outside the permitted hours or days set by the building.",
    ],
    warningSigns: [
      "Building management asking to see documents you do not have.",
      "Security refusing your contractor entry or turning away material deliveries.",
      "A neighbour complaining and management issuing a stop-work notice.",
      "Being asked for a deposit or a contractor's insurance details you were not told about.",
      "A council notice regarding unapproved structural work or an extension.",
    ],
    solutions: [
      {
        title: "Get the house rules before you plan",
        description:
          "Request the renovation guidelines from your management office at the very start. They set the permitted hours, the deposit, the notice period and what is simply not allowed — which shapes the design.",
      },
      {
        title: "Establish what is structural",
        description:
          "Before any wall is hacked, establish whether it is structural or common property. This is the item most likely to stop a job permanently.",
      },
      {
        title: "Submit early and in writing",
        description:
          "Applications take time to process. Submitting early and holding written approval before the start date is what keeps the schedule intact.",
      },
      {
        title: "Provide contractor documentation",
        description:
          "Most managements want the contractor's details, worker list and insurance before access is granted. We provide what is asked for.",
      },
    ],
    whenToCall: [
      "You are planning to remove or open up any wall.",
      "The work involves the facade, external walls, windows or anything visible from outside.",
      "You are extending the property or altering its structure.",
      "Management has issued a notice about work already underway.",
      "You want the scope planned around your building's rules rather than against them.",
    ],
    relatedService: "general-renovation",
    relatedServiceNote:
      "Our renovation team works to your building's rules and supplies the contractor documentation management typically requests. The application itself is made by you as the owner, since managements deal with owners rather than contractors.",
    processTitle: "How We Work With Your Approval Process",
    processIntro:
      "We plan the job around the approvals rather than hoping they arrive in time.",
    processSteps: [
      {
        title: "Review the house rules together",
        description:
          "We go through your building's renovation guidelines and identify anything in the intended scope that will not be permitted.",
      },
      {
        title: "Adjust the scope where needed",
        description:
          "Where something is not allowed, we propose an alternative that achieves the same outcome within the rules.",
      },
      {
        title: "Supply the documentation",
        description:
          "We provide the contractor details, worker list and any other paperwork your management requires for the application.",
      },
      {
        title: "Schedule to the permitted window",
        description:
          "Work is programmed to the approved dates and the permitted working hours, including any restrictions on noisy work.",
      },
    ],
    propertyTypesIntro:
      "Which approvals apply depends heavily on the type of property you own.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "No management approval, but local authority approval applies to structural changes, extensions and anything affecting the building line.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Extensions and structural alterations are the main triggers for council approval; some gated communities add their own rules.",
      },
      {
        label: "Condominiums & apartments",
        note: "Management approval and a renovation deposit are near-universal, with defined working hours and restricted days.",
      },
      {
        label: "Shoplots & commercial",
        note: "Both council and, in managed developments, building management requirements typically apply, often with fire-safety conditions.",
      },
      {
        label: "Older properties",
        note: "Original plans may be unavailable, which makes establishing what is structural more important before hacking anything.",
      },
    ],
    areasNote:
      "We work within building management and local authority requirements across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Do I need approval to renovate inside my own condo unit?",
        answer:
          "In practice, almost always yes. Nearly every strata building in the Klang Valley requires a renovation application, a refundable deposit and adherence to set working hours — even for work entirely inside your unit, because the building is affected by the noise, the debris and the lift and corridor use. Ask your management office for the renovation guidelines before you plan the scope.",
      },
      {
        question: "How much is the renovation deposit and how long does approval take?",
        answer:
          "We deliberately do not publish figures for either, because they are set by each management body and vary widely between buildings — quoting a number here would mislead you. Your management office will tell you both when you request the renovation guidelines, and it is worth asking at the very start since the timeline shapes your schedule.",
      },
      {
        question: "Can I remove a wall between the kitchen and living room?",
        answer:
          "Only after establishing that it is not structural and not common property. Some internal walls carry load or house building services, and in strata properties some walls are legally common property rather than yours. This must be verified before any hacking begins — it is the change most likely to be refused, and undoing it is expensive.",
      },
      {
        question: "What happens if work starts without approval?",
        answer:
          "In a strata building, management can issue a stop-work notice, refuse your contractor entry, and forfeit the deposit. For unapproved structural work or extensions, the local authority can require reinstatement. Both outcomes cost far more than applying properly would have, which is why we plan around approvals rather than around them.",
      },
      {
        question: "Do you handle the application for me?",
        answer:
          "We provide everything the contractor side needs — company details, worker lists, insurance documentation and the scope description — and we work to the approved dates and hours. The application itself is submitted by you as the registered owner, because managements and councils deal with the owner rather than the contractor.",
      },
    ],
    relatedServices: ["general-renovation", "ceiling-partition"],
    relatedProblems: ["renovation-scope-creep", "renovation-delays"],
  },
  {
    slug: "renovation-scope-creep",
    category: "general-renovation",
    name: "Renovation Cost Overruns & Scope Creep",
    title: "Renovix Home Services | Renovation Cost Overruns in KL & Selangor",
    metaDescription:
      "Why renovation budgets overrun in Kuala Lumpur & Selangor. Understand scope creep, hidden site conditions, variation orders and how a clear quotation prevents surprises.",
    h1: "Renovation Cost Overruns & Scope Creep",
    subtitle:
      "Renovations rarely overrun because of one big mistake — they overrun through a series of small additions that were never priced.",
    whatItMeans: [
      "Scope creep is the gradual expansion of a job beyond what was quoted. It is usually nobody's fault in any dramatic sense: a wall is opened and the wiring behind it turns out to be unsafe, a tile is chosen that costs more than the allowance, an extra socket is asked for while the electrician is already on site. Each is small and reasonable. Together they are how a budget moves.",
      "The other half of the problem is genuinely hidden conditions. Nobody can see behind a wall or under a floor until it is opened, so a quotation is based on what is visible plus reasonable assumptions. When the assumption proves wrong — the screed is failing, the pipe is corroded, the slab is out of level — the work needed changes. An honest process handles this by pricing the variation before doing it, rather than presenting it at the end.",
    ],
    commonCauses: [
      "Additions requested during the job that are never formally priced.",
      "Hidden conditions found once walls and floors are opened up.",
      "A quotation that was vague about what was and was not included.",
      "Material selections upgraded after the budget was set.",
      "Underlying defects — old wiring, failing waterproofing, corroded pipes — that must be fixed before finishes go on.",
      "Design changes made mid-job, requiring work already completed to be redone.",
      "Comparing quotations on headline price without checking what each one covers.",
    ],
    warningSigns: [
      "Work being carried out that you do not remember agreeing to.",
      "Verbal assurances that something is 'included' without it appearing in writing.",
      "A quotation with a single lump sum and no breakdown.",
      "Extras mentioned in passing but never priced.",
      "A quotation that is far below the others, which usually means it excludes something.",
    ],
    solutions: [
      {
        title: "Start from an itemised quotation",
        description:
          "A quotation broken down by scope makes it visible what is covered and what is not, which is what makes a later addition identifiable as an addition.",
      },
      {
        title: "Price variations before doing them",
        description:
          "When something changes or is discovered, the cost is agreed before the work proceeds rather than appearing on the final bill.",
      },
      {
        title: "Investigate before committing where possible",
        description:
          "Where a hidden condition is plausible — old wiring, suspect waterproofing — checking early gives you a realistic budget rather than an optimistic one.",
      },
      {
        title: "Set material allowances explicitly",
        description:
          "Where selections are not yet made, an explicit allowance shows exactly what upgrading will cost rather than leaving it open.",
      },
    ],
    whenToCall: [
      "You want a scope and quotation clear enough to compare properly.",
      "You are planning a renovation in an older property where hidden conditions are likely.",
      "A current job is drifting and you want the remaining scope defined.",
      "You have received quotations that differ widely and want to understand why.",
    ],
    relatedService: "general-renovation",
    relatedServiceNote:
      "Our renovation team quotes by itemised scope and prices variations before carrying them out, so additions are a decision you make rather than a surprise you receive.",
    processTitle: "How We Keep Scope and Cost Visible",
    processIntro:
      "The aim is that you always know what has been agreed and what any change will cost before it happens.",
    processSteps: [
      {
        title: "Assess the site properly",
        description:
          "We inspect before quoting and raise the conditions that could change the scope, rather than quoting low and discovering later.",
      },
      {
        title: "Quote by itemised scope",
        description:
          "The quotation sets out what is included, what is excluded and what any material allowances are.",
      },
      {
        title: "Price every variation up front",
        description:
          "If something is discovered or requested, we price it and get your agreement before the work is done.",
      },
      {
        title: "Keep a running record",
        description:
          "Agreed changes are recorded as the job progresses, so the final account contains nothing you have not already seen.",
      },
    ],
    propertyTypesIntro:
      "The likelihood of hidden conditions varies considerably by property age and type.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Older terraces frequently reveal wiring and plumbing needing attention once walls are opened.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Larger scopes mean more interfaces between trades, and more places for an assumption to prove wrong.",
      },
      {
        label: "Condominiums & apartments",
        note: "Management rules can restrict working hours and access, which affects programme and cost in ways owners do not anticipate.",
      },
      {
        label: "Shoplots & commercial",
        note: "Compliance requirements, particularly fire safety, can add scope that was not in the original brief.",
      },
      {
        label: "Older properties",
        note: "The oldest properties carry the highest chance of a hidden condition; budgeting a contingency is realistic rather than pessimistic.",
      },
    ],
    areasNote:
      "We quote renovation work by itemised scope across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Why do renovation quotations vary so much for the same job?",
        answer:
          "Usually because they cover different things. One may include hacking and disposal, another may not; one may allow for waterproofing, another assumes the existing is sound; material allowances differ. This is why comparing headline totals is misleading. Ask each contractor for an itemised breakdown and compare the scopes rather than the numbers.",
      },
      {
        question: "How much contingency should I allow?",
        answer:
          "We will not publish a percentage, because it depends entirely on the property's age and how much of the work is behind walls and floors — a figure quoted here would be a guess dressed as advice. What we can say is that the older the property and the more hidden work involved, the more sense a contingency makes, and your quotation discussion is the right place to size it.",
      },
      {
        question: "What is a variation order and should I be worried about one?",
        answer:
          "A variation is any agreed change to the original scope — an addition, a substitution or something discovered on site. They are a normal part of renovation and not in themselves a warning sign. What matters is the process: a variation should be described, priced and agreed before the work is done, not presented afterwards.",
      },
      {
        question: "Can you tell me the exact final cost before starting?",
        answer:
          "For work that is fully visible and well defined, a quotation can be very close to the final figure. Where the job involves opening up walls or floors, an honest answer is that the quotation covers known conditions and that anything found will be priced as a variation. Any contractor promising a fixed, unchangeable final figure for concealed work is making a promise they cannot see well enough to keep.",
      },
      {
        question: "The cheapest quotation is much lower than the rest. Is that a problem?",
        answer:
          "It is worth understanding why before deciding. Sometimes there is a legitimate reason. More often the low quotation has excluded something the others included — hacking, disposal, waterproofing, making good — which reappears later as an extra. Read the exclusions rather than the total.",
      },
    ],
    relatedServices: ["general-renovation", "painting", "tiling"],
    relatedProblems: ["renovation-permit-approval", "renovation-delays"],
  },
  {
    slug: "renovation-delays",
    category: "general-renovation",
    name: "Renovation Delays",
    title: "Renovix Home Services | Renovation Delay Causes in KL & Selangor",
    metaDescription:
      "Why renovations run late in Kuala Lumpur & Selangor — approvals, material lead times, trade sequencing, curing and drying. Understand what can and cannot be compressed.",
    h1: "Renovation Delays",
    subtitle:
      "Most renovation delays come from three places: approvals that started late, materials ordered late, and drying and curing time that was never in the schedule.",
    whatItMeans: [
      "A renovation is a sequence, not a set of parallel tasks. Waterproofing has to cure before tiling; screed has to dry before flooring; plaster has to dry before painting. These waiting periods are not slack in the programme that can be squeezed — they are the material doing what it needs to do, and cutting them short is what causes tiles to debond and paint to blister a few months later.",
      "The second big source is sequencing. Trades depend on each other in a fixed order: electrical and plumbing first fix before walls close, waterproofing before tiling, ceiling before final painting. If one trade slips, everything downstream slips with it, which is why a two-day delay early can become a week by the end. Understanding this makes a schedule far easier to plan around.",
    ],
    commonCauses: [
      "Building management approval applied for late or issued later than expected.",
      "Material selections made late, or items with long lead times ordered too near the date.",
      "Waterproofing curing and screed drying time not allowed for in the programme.",
      "Hidden conditions discovered on opening up, requiring extra work before continuing.",
      "Restricted working hours and prohibited days in strata buildings.",
      "Design changes made mid-job, forcing completed work to be redone.",
      "Rain affecting external work such as exterior painting and roof waterproofing.",
      "One trade slipping and pushing every dependent trade back.",
    ],
    warningSigns: [
      "The approval application not yet submitted while the start date approaches.",
      "Material selections still undecided after work has begun.",
      "A schedule that shows no drying or curing periods at all.",
      "Trades arriving to find the previous stage incomplete.",
      "Being told work will be 'done together' when the trades are sequentially dependent.",
    ],
    solutions: [
      {
        title: "Start the approvals early",
        description:
          "The application is the one thing that can be done well before the start date, and it is the most common cause of a late start.",
      },
      {
        title: "Lock material selections before starting",
        description:
          "Deciding tiles, sanitary ware and flooring before work begins removes the most common mid-job stall.",
      },
      {
        title: "Build curing and drying into the programme",
        description:
          "These periods are scheduled openly rather than hidden, so the timeline you are given is one that can actually be met.",
      },
      {
        title: "Sequence trades realistically",
        description:
          "Work is programmed in dependency order, with the site prepared for each trade before it arrives.",
      },
    ],
    whenToCall: [
      "You have a fixed date to work towards, such as a move-in or a tenancy start.",
      "You want a realistic programme before committing.",
      "The job involves several trades and you want the sequencing planned.",
      "Your building restricts working hours and you need the schedule built around them.",
    ],
    relatedService: "general-renovation",
    relatedServiceNote:
      "Our renovation team programmes work in dependency order and states curing and drying periods openly, so the schedule reflects how the materials actually behave.",
    processTitle: "How We Programme a Renovation",
    processIntro:
      "A schedule is only useful if it accounts for the waiting as well as the working.",
    processSteps: [
      {
        title: "Confirm approvals and access",
        description:
          "We establish the approved dates, the permitted hours and any restricted days before building the programme.",
      },
      {
        title: "Confirm selections and lead times",
        description:
          "Material choices are settled and long-lead items identified so nothing stalls the site.",
      },
      {
        title: "Sequence with curing time included",
        description:
          "Trades are ordered by dependency and the curing and drying periods are shown as part of the schedule.",
      },
      {
        title: "Update you as it progresses",
        description:
          "You are told when something shifts and what it means for the finish date, rather than finding out at the end.",
      },
    ],
    propertyTypesIntro:
      "Access and working restrictions differ by property type and have a real effect on duration.",
    propertyTypes: [
      {
        label: "Terrace houses",
        note: "Generally the fewest access restrictions, so the programme is driven mainly by trade sequence and curing.",
      },
      {
        label: "Semi-detached & bungalows",
        note: "Larger scopes involve more trades and more dependencies, which lengthens the critical path.",
      },
      {
        label: "Condominiums & apartments",
        note: "Restricted hours, prohibited days, lift bookings and loading bay slots all extend the working period.",
      },
      {
        label: "Shoplots & commercial",
        note: "Work is often restricted to outside trading hours, which stretches the calendar duration considerably.",
      },
      {
        label: "Older properties",
        note: "A higher chance of discovering hidden work means a contingency in the programme is realistic.",
      },
    ],
    areasNote:
      "We programme and manage renovation work across Kuala Lumpur and Selangor.",
    faqs: [
      {
        question: "Why can't several trades just work at the same time to speed things up?",
        answer:
          "Some can, but many cannot, because they depend on each other physically. Tiling cannot start until waterproofing has cured; painting cannot finish until the ceiling is in; flooring cannot go down until the screed is dry. Putting a trade on site before its predecessor is finished usually creates rework rather than progress. Where tasks are genuinely independent, we do run them in parallel.",
      },
      {
        question: "Can curing and drying time be shortened?",
        answer:
          "Not meaningfully, and it is the wrong place to try. Waterproofing needs its full cure before it is loaded, and screed needs to dry before a floor is laid over it. Cutting these short is a leading cause of tiles debonding and floors failing months later. Good ventilation helps a little in humid weather; skipping the wait does not.",
      },
      {
        question: "How long will my renovation take?",
        answer:
          "It depends on the scope, the property and the access restrictions, so a general figure would not be useful to you. What we can do is give you a programme for your specific job that shows the sequence and the waiting periods, so you can see how the duration is made up rather than just being handed a date.",
      },
      {
        question: "What is the single best thing I can do to avoid delays?",
        answer:
          "Two things, both before the start: submit the management approval as early as possible, and finalise your material selections. Those two account for the large majority of avoidable delays we see. Everything else — sequencing, curing, weather — is either manageable or unavoidable, but a late approval and an undecided tile are entirely within your control.",
      },
      {
        question: "Does rain delay interior work?",
        answer:
          "Directly, no. Indirectly, sometimes: prolonged humidity slows drying for plaster, screed and paint, and heavy rain can stop material deliveries and any external work. External painting and roof waterproofing are the trades genuinely at the mercy of the weather, and we would rather wait than apply a coating that will not perform.",
      },
    ],
    relatedServices: ["general-renovation", "waterproofing", "painting"],
    relatedProblems: ["renovation-permit-approval", "renovation-scope-creep"],
  },
];
