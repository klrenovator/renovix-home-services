export type ServiceIconKey =
  | "tile"
  | "welding"
  | "electrical"
  | "painting"
  | "ceiling"
  | "renovation"
  | "plumbing"
  | "waterproofing"
  | "flooring"
  | "handyman";

export type ServiceCategory = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: ServiceIconKey;
  path: string;
};

export const services: ServiceCategory[] = [
  {
    slug: "tiling",
    name: "Tile & Tiling",
    shortDescription: "Tile installation, replacement and repair for floors, walls and bathrooms.",
    icon: "tile",
    path: "/services/tiling",
  },
  {
    slug: "welding-metal-works",
    name: "Welding & Metal Works",
    shortDescription: "Metal fabrication, welding, gates, grilles, railings and custom metalwork.",
    icon: "welding",
    path: "/services/welding-metal-works",
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortDescription: "Electrical installation, wiring, lighting, sockets, switches and fault checks.",
    icon: "electrical",
    path: "/services/electrical",
  },
  {
    slug: "painting",
    name: "Painting",
    shortDescription: "Interior and exterior painting, repainting, touch-ups and wall finishing.",
    icon: "painting",
    path: "/services/painting",
  },
  {
    slug: "ceiling-partition",
    name: "Ceiling & Partition",
    shortDescription: "Ceiling repair, false ceiling, partition walls and panel installation.",
    icon: "ceiling",
    path: "/services/ceiling-partition",
  },
  {
    slug: "general-renovation",
    name: "General Renovation",
    shortDescription: "General home renovation works, upgrades, repairs and improvement projects.",
    icon: "renovation",
    path: "/services/general-renovation",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortDescription: "Plumbing repairs, pipe work, tap and toilet fixes, leakage and drainage assistance.",
    icon: "plumbing",
    path: "/services/plumbing",
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    shortDescription: "Waterproofing for bathrooms, balconies, roofs and areas prone to moisture.",
    icon: "waterproofing",
    path: "/services/waterproofing",
  },
  {
    slug: "flooring",
    name: "Flooring",
    shortDescription: "Floor repair, replacement and finishing for various floor types and areas.",
    icon: "flooring",
    path: "/services/flooring",
  },
  {
    slug: "handyman",
    name: "Handyman",
    shortDescription: "Reliable help for general home fixes, small jobs and everyday maintenance.",
    icon: "handyman",
    path: "/services/handyman",
  },
];

export function getServiceBySlug(slug: string | undefined | null): ServiceCategory | undefined {
  if (!slug) {
    return undefined;
  }

  return services.find((service) => service.slug === slug);
}
