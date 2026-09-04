import type { AreaRegion } from "./types";
import { selangorAreasA } from "./selangor-areas-a";
import { selangorAreasB } from "./selangor-areas-b";
import { selangorAreasC } from "./selangor-areas-c";
import { selangorAreasD } from "./selangor-areas-d";

export const selangor: AreaRegion = {
  id: "selangor",
  name: "Selangor",
  title: "Renovix Home Services | Home Renovation & Repair Services in Selangor",
  metaDescription:
    "Home renovation and repair services across Selangor — Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang, Kajang, Cyberjaya and more. Free quotation.",
  h1: "Home Renovation & Repair Services in Selangor",
  summary:
    "Malaysia's most developed state — from 1950s Petaling Jaya and royal Klang to fast-growing corridors like Puchong, Kota Damansara and Cyberjaya.",
  intro: [
    "Selangor surrounds Kuala Lumpur on three sides and holds the widest range of housing in the Klang Valley. Petaling Jaya began in the 1950s as the region's first planned satellite town; Shah Alam was planned as a garden city; Klang carries pre-war shophouse heritage as the royal town; and the corridors between them — Puchong, Subang Jaya, USJ, Bandar Sunway, Kajang, Seri Kembangan, Bangi, Balakong, Kota Damansara, Sungai Buloh, Bandar Sri Damansara, Rawang and Semenyih — have grown into some of the country's largest residential belts, with the Bandar Utama and Mutiara Damansara cluster carrying the Damansara corridor west from the city. At the southern edge, Cyberjaya, Putrajaya and Sepang form the newer planned and airport corridor.",
    "That spread means the right renovation scope differs sharply by town. A 1950s PJ house needs different work than a 1990s USJ terrace or a 2010s Cyberjaya apartment. Renovix covers [tiling](/services/tiling), [electrical](/services/electrical), [plumbing](/services/plumbing), [waterproofing](/services/waterproofing), [painting](/services/painting), [ceiling](/services/ceiling-partition), [flooring](/services/flooring), [handyman](/services/handyman) and [renovation](/services/general-renovation) services across Selangor's main towns, with dedicated guides below.",
  ],
  landscapeIntro:
    "What distinguishes Selangor's housing stock, town by town:",
  landscape: [
    {
      title: "The original satellite city",
      description:
        "Petaling Jaya's numbered sections and SS areas hold some of the region's oldest suburban homes — now in second and third renovation cycles, with extensions, rewires and re-pipes the norm.",
    },
    {
      title: "Planned garden-city Selangor",
      description:
        "Shah Alam's spacious numbered sections and broad landscaping set a different rhythm: larger lots, generous gardens and moisture management under heavy tree cover.",
    },
    {
      title: "Heritage Klang",
      description:
        "Pre-war shophouses and mid-century terraces in the royal town need careful structural and services work, with humidity and river-side flooding awareness part of the picture.",
    },
    {
      title: "The 1990s mega-townships",
      description:
        "Subang Jaya, USJ, Puchong, Kajang, Seri Kembangan and Rawang grew explosively through the 1990s and 2000s — that stock is now twenty to forty years old and entering its first full modernisation cycle.",
    },
    {
      title: "Newer planned corridors",
      description:
        "Kota Damansara, Sungai Buloh, Cyberjaya and Putrajaya hold newer homes where fit-outs, upgrades and rectification dominate over heavy renovation.",
    },
    {
      title: "One labour market, many commutes",
      description:
        "Selangor's towns feed commuters into KL, Shah Alam and Port Klang, so weekday access windows are planned around work hours and corridor traffic.",
    },
  ],
  servicesIntro:
    "The services Selangor households ask for most, reflecting the state's housing mix:",
  servicesAvailable: [
    {
      serviceSlug: "general-renovation",
      note: "Whole-house modernisation and extensions for the state's enormous stock of 1990s terrace homes.",
    },
    {
      serviceSlug: "waterproofing",
      note: "Bathroom, roof and balcony waterproofing as the first-generation membranes reach end of life.",
    },
    {
      serviceSlug: "electrical",
      note: "Rewiring older homes and adding capacity for extended, appliance-heavy households.",
    },
    {
      serviceSlug: "plumbing",
      note: "Re-piping aging supply lines and repairing the leaks that dominate repair calls.",
    },
    {
      serviceSlug: "tiling",
      note: "Retiling bathrooms, kitchens and living areas during modernisation projects.",
    },
    {
      serviceSlug: "painting",
      note: "Interior and exterior repaints for homes weathering tropical sun and rain.",
    },
  ],
  faqs: [
    {
      question: "Which Selangor towns do you cover?",
      answer:
        "Our main guides cover Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang, Selayang, Gombak, Ampang Jaya, Kajang, Seri Kembangan, Cyberjaya, Putrajaya, Kota Damansara, Sungai Buloh, Rawang, Semenyih, USJ, Bandar Sunway, Bandar Utama, Mutiara Damansara, Damansara Perdana, Ara Damansara, Bandar Sri Damansara, Bangi, Serdang, Balakong, Bandar Baru Klang and Sepang. If your area is nearby, ask us — we serve most of the Klang Valley.",
    },
    {
      question: "Do you charge travel fees for Selangor jobs?",
      answer:
        "Quotations are based on the work scope. Anything location-dependent is stated clearly in the written quotation — we don't add surprises after agreeing a price.",
    },
    {
      question: "Can you coordinate a full renovation while we live overseas or out of town?",
        answer:
          "We can discuss supervision and reporting arrangements for owners who are not on site. The quotation and schedule set out what is included so expectations are clear before work starts.",
    },
    {
      question: "Do you work in Selangor's gated and guarded communities?",
      answer:
        "Yes. Gated communities typically have visitor registration, working-hour and contractor rules; we register through the proper channels and work within them.",
    },
    {
      question: "Is there a minimum job size?",
      answer:
        "No. Handyman repairs and single-room jobs are welcome alongside full renovations.",
    },
  ],
  areas: [...selangorAreasA, ...selangorAreasB, ...selangorAreasC, ...selangorAreasD],
};
