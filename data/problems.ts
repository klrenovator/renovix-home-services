import type { ServiceIcon } from "@/components/icons";

export type ProblemCategory = {
  id: string;
  label: string;
  icon: ServiceIcon;
  href: string;
};

export const problems: ProblemCategory[] = [
  { id: "broken-tile-repair", label: "Broken Tiles", icon: "tile", href: "/problems/broken-tile-repair" },
  { id: "water-leakage", label: "Water Leakage", icon: "plumbing", href: "/problems/water-leakage" },
  { id: "cracked-walls", label: "Wall Cracks", icon: "ceiling", href: "/problems/cracked-walls" },
  { id: "peeling-paint", label: "Peeling Paint", icon: "painting", href: "/problems/peeling-paint" },
  { id: "mouldy-walls", label: "Mouldy Walls", icon: "waterproofing", href: "/problems/mouldy-walls" },
  { id: "power-tripping", label: "Power Tripping", icon: "electrical", href: "/problems/power-tripping" },
  { id: "faulty-socket", label: "Faulty Socket", icon: "electrical", href: "/problems/faulty-socket" },
  { id: "water-damaged-ceiling", label: "Ceiling Damage", icon: "ceiling", href: "/problems/water-damaged-ceiling" },
  { id: "bathroom-leakage", label: "Bathroom Leakage", icon: "waterproofing", href: "/problems/bathroom-leakage" },
  { id: "blocked-drain", label: "Blocked Drain", icon: "plumbing", href: "/problems/blocked-drain" },
  { id: "loose-tile-repair", label: "Loose Tiles", icon: "tile", href: "/problems/loose-tile-repair" },
  { id: "roof-leakage", label: "Roof Leakage", icon: "waterproofing", href: "/problems/roof-leakage" },
  { id: "door-problems", label: "Door Problems", icon: "handyman", href: "/problems/door-problems" },
  { id: "minor-home-repairs", label: "General Home Repairs", icon: "handyman", href: "/problems/minor-home-repairs" },
];
