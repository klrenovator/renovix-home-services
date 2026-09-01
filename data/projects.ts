import type { ServiceIconKey } from "@/data/services";

export type ProjectCategoryId =
  | "tiling"
  | "welding"
  | "electrical"
  | "painting"
  | "ceiling"
  | "partition"
  | "renovation"
  | "plumbing"
  | "waterproofing"
  | "flooring"
  | "handyman";

export type ProjectCategory = {
  id: ProjectCategoryId;
  label: string;
  servicePath: string;
  icon: ServiceIconKey;
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "tiling",
    label: "Tiling",
    servicePath: "/services/tiling",
    icon: "tile",
  },
  {
    id: "welding",
    label: "Welding",
    servicePath: "/services/welding-metal-works",
    icon: "welding",
  },
  {
    id: "electrical",
    label: "Electrical",
    servicePath: "/services/electrical",
    icon: "electrical",
  },
  {
    id: "painting",
    label: "Painting",
    servicePath: "/services/painting",
    icon: "painting",
  },
  {
    id: "ceiling",
    label: "Ceiling",
    servicePath: "/services/ceiling-partition",
    icon: "ceiling",
  },
  {
    id: "partition",
    label: "Partition",
    servicePath: "/services/ceiling-partition",
    icon: "ceiling",
  },
  {
    id: "renovation",
    label: "Renovation",
    servicePath: "/services/general-renovation",
    icon: "renovation",
  },
  {
    id: "plumbing",
    label: "Plumbing",
    servicePath: "/services/plumbing",
    icon: "plumbing",
  },
  {
    id: "waterproofing",
    label: "Waterproofing",
    servicePath: "/services/waterproofing",
    icon: "waterproofing",
  },
  {
    id: "flooring",
    label: "Flooring",
    servicePath: "/services/flooring",
    icon: "flooring",
  },
  {
    id: "handyman",
    label: "Handyman",
    servicePath: "/services/handyman",
    icon: "handyman",
  },
];
