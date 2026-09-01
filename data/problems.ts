import type { ServiceIcon } from "@/components/icons";

export type ProblemCategory = {
  id: string;
  label: string;
  icon: ServiceIcon;
};

export const problems: ProblemCategory[] = [
  { id: "broken-tiles", label: "Broken Tiles", icon: "tile" },
  { id: "water-leakage", label: "Water Leakage", icon: "waterproofing" },
  { id: "wall-cracks", label: "Wall Cracks", icon: "ceiling" },
  { id: "peeling-paint", label: "Peeling Paint", icon: "painting" },
  { id: "mouldy-walls", label: "Mouldy Walls", icon: "waterproofing" },
  { id: "power-tripping", label: "Power Tripping", icon: "electrical" },
  { id: "faulty-socket", label: "Faulty Socket", icon: "electrical" },
  { id: "ceiling-damage", label: "Ceiling Damage", icon: "ceiling" },
  { id: "bathroom-leakage", label: "Bathroom Leakage", icon: "plumbing" },
  { id: "blocked-drain", label: "Blocked Drain", icon: "plumbing" },
  { id: "loose-tiles", label: "Loose Tiles", icon: "tile" },
  { id: "floor-damage", label: "Floor Damage", icon: "flooring" },
  { id: "door-problems", label: "Door Problems", icon: "handyman" },
  { id: "general-home-repairs", label: "General Home Repairs", icon: "handyman" },
];
