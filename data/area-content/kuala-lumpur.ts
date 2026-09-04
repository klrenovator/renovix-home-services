import type { AreaRegion } from "./types";
import { klAreasA } from "./kuala-lumpur-areas-a";
import { klAreasB } from "./kuala-lumpur-areas-b";
import { klAreasC } from "./kuala-lumpur-areas-c";
import { klAreasD } from "./kuala-lumpur-areas-d";

export const kualaLumpur: AreaRegion = {
  id: "kuala-lumpur",
  name: "Kuala Lumpur",
  title: "Renovix Home Services | Home Renovation & Repair Services in Kuala Lumpur",
  metaDescription:
    "Home renovation and repair services across Kuala Lumpur — tiling, electrical, plumbing, waterproofing, painting, ceiling, flooring and handyman work. Free quotation.",
  h1: "Home Renovation & Repair Services in Kuala Lumpur",
  summary:
    "The federal capital — heritage shophouses, mid-century landed estates, older flats and a dense high-rise belt, all within one city.",
  intro: [
    "Kuala Lumpur packs an unusually wide range of housing into one city. Around the old core near Jalan Tuanku Abdul Rahman and Petaling Street sit pre-war shophouses and mid-century shoplots; further out are established landed estates of terrace houses and bungalows built through the 1950s to 1980s; and ringing the centre is a dense belt of condominiums running from the KLCC area through Ampang, Mont Kiara and Bangsar. Public and low-cost flats from the 1970s and 80s sit between them. Each type of home ages differently, and that shapes the renovation and repair work we are asked to do.",
    "The city's climate does its part too. Heat, humidity and regular afternoon thunderstorms wear down paint, grout, sealants and flat roofs, while water finds any weak point in a bathroom floor or balcony slab. Renovix provides [tiling](/services/tiling), [electrical](/services/electrical), [plumbing](/services/plumbing), [waterproofing](/services/waterproofing), [painting](/services/painting), [ceiling](/services/ceiling-partition), [flooring](/services/flooring), [handyman](/services/handyman) and full [renovation](/services/general-renovation) services across Kuala Lumpur, with dedicated area guides for the neighbourhoods listed below.",
  ],
  landscapeIntro:
    "Understanding Kuala Lumpur's housing stock is the starting point for almost every job we quote in the city.",
  landscape: [
    {
      title: "Heritage & old-city stock",
      description:
        "Pre-war and mid-century shophouses and townhouses around the old commercial core, with timber floors, high ceilings, aging roof structures and outdated wiring behind original walls.",
    },
    {
      title: "Established landed estates",
      description:
        "Terrace houses and bungalows from the 1950s–1980s in districts such as Bangsar, Setapak, Kepong and Cheras — solid structures that typically need rewiring, re-piping, new bathrooms and kitchen modernisation.",
    },
    {
      title: "Older flats & apartments",
      description:
        "Walk-up apartment blocks, mostly 1970s–1990s, where concealed pipe leaks, failing bathroom waterproofing and tired communal stairs and corridors drive most repair requests.",
    },
    {
      title: "The high-rise belt",
      description:
        "Condominium clusters around KLCC, Ampang, Mont Kiara, Bangsar and the newer southern precincts — renovation here is governed by management corporation rules, permitted working hours and lift bookings.",
    },
    {
      title: "A climate that tests buildings",
      description:
        "Year-round heat and humidity plus frequent thunderstorms mean mould on shaded walls, sun-faded paint, swollen doors and water ingress at balconies, roofs and bathrooms are constant themes.",
    },
    {
      title: "Mixed tenure and approvals",
      description:
        "Freehold and leasehold land, strata-titled towers and gated estates all sit within city limits — each with its own approval considerations before renovation can begin.",
    },
  ],
  servicesIntro:
    "The services Kuala Lumpur homes ask for most, and how they fit the city's property mix:",
  servicesAvailable: [
    {
      serviceSlug: "general-renovation",
      note: "Full house refreshes, kitchen and bathroom modernisation and structural-aware upgrades in older city homes.",
    },
    {
      serviceSlug: "electrical",
      note: "Rewiring ageing circuits, adding power points and lighting in pre-1980 houses and older apartments.",
    },
    {
      serviceSlug: "plumbing",
      note: "Tracing and repairing leaks in aging concealed pipe runs common across the city's older housing stock.",
    },
    {
      serviceSlug: "waterproofing",
      note: "Bathroom, balcony and roof waterproofing renewed before tiling or painting work begins.",
    },
    {
      serviceSlug: "tiling",
      note: "Replacing cracked and hollow tiles and retiling wet areas during bathroom and kitchen upgrades.",
    },
    {
      serviceSlug: "painting",
      note: "Interior and exterior repainting that deals with humidity stains, faded facades and mould-affected walls.",
    },
  ],
  faqs: [
    {
      question: "Which parts of Kuala Lumpur do you cover?",
      answer:
        "We serve neighbourhoods across the city, including Cheras, Setapak, Wangsa Maju, Ampang, Kepong, Segambut, Sentul, Mont Kiara, Bangsar, Bukit Jalil, Sri Petaling, Old Klang Road, Taman Melawati, Desa ParkCity, TTDI (Taman Tun Dr Ismail), Damansara Heights, Sri Hartamas and Brickfields & Mid Valley. If your area is not listed, ask us — we cover most of the Klang Valley.",
    },
    {
      question: "Can you work in strata buildings like condominiums?",
      answer:
        "Yes. Condominium work follows the management corporation's rules on working hours, goods and passenger lifts, debris removal and renovation deposits. We factor these requirements into the schedule and quotation when we discuss your job.",
    },
    {
      question: "Do you renovate older houses and pre-war shophouses?",
      answer:
        "Yes. Older city properties often need wiring and pipe upgrades, ceiling repairs and careful wall or floor work before finishing. We assess the condition first and explain what the structure allows before quoting.",
    },
    {
      question: "How do quotes work for jobs in Kuala Lumpur?",
      answer:
        "Send us the details — photos by WhatsApp help — and we arrange a site assessment. The quotation is based on the actual scope: materials, access and the condition of the property. There is no charge for the quotation.",
    },
    {
      question: "Do you handle small repair jobs or only renovations?",
      answer:
        "Both. Handyman repairs, a single leaking tap or a cracked tile are welcome alongside larger renovation projects.",
    },
  ],
  areas: [...klAreasA, ...klAreasB, ...klAreasC, ...klAreasD],
};
