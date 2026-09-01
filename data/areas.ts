export type AreaGroup = {
  id: string;
  label: string;
  description: string;
  places: string[];
};

export const areas: AreaGroup[] = [
  {
    id: "kuala-lumpur",
    label: "Kuala Lumpur",
    description: "Home services across the city and surrounding neighbourhoods.",
    places: [
      "Kuala Lumpur City",
      "Cheras",
      "Setapak",
      "Bangsar",
      "Ampang",
      "Mont Kiara",
      "Brickfields",
    ],
  },
  {
    id: "selangor",
    label: "Selangor",
    description: "Reliable home improvement support across key Selangor areas.",
    places: [
      "Petaling Jaya",
      "Subang Jaya",
      "Shah Alam",
      "Klang",
      "Puchong",
      "Seri Kembangan",
      "Damansara",
    ],
  },
  {
    id: "klang-valley",
    label: "Klang Valley",
    description: "Convenient service coverage for most Klang Valley locations.",
    places: [
      "Gombak",
      "Kajang",
      "Balakong",
      "Sungai Buloh",
      "Rawang",
      "Sepang",
      "Other Klang Valley areas",
    ],
  },
];

export function getAllPlaces(): string[] {
  return areas.flatMap((group) => group.places);
}
