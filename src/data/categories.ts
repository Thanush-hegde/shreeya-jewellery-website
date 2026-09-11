import type { Category } from "../types";

/**
 * Category list — structured so new categories (e.g. Rings, Bridal
 * Accessories) can be appended without touching any UI code.
 */
export const CATEGORIES: Category[] = [
  {
    id: "necklace-sets",
    label: "Necklace Sets",
    shortLabel: "Necklace Sets",
    description:
      "Layered necklace-and-earring sets for weddings, festivities and grand occasions.",
  },
  {
    id: "bridal",
    label: "Bridal / Traditional Jewellery",
    shortLabel: "Bridal",
    description:
      "Statement bridal and traditional pieces designed for the biggest days.",
  },
  {
    id: "long-necklaces",
    label: "Long Necklaces",
    shortLabel: "Long Necklaces",
    description:
      "Graceful long and layered necklaces that drape beautifully over any outfit.",
  },
  {
    id: "chokers",
    label: "Chokers / Short Necklaces",
    shortLabel: "Chokers",
    description:
      "Close-fit chokers and short necklaces for an elegant, everyday finish.",
  },
  {
    id: "earrings",
    label: "Earrings",
    shortLabel: "Earrings",
    description:
      "Jhumkas, chandbalis and studs — light enough for all-day wear.",
  },
  {
    id: "bangles",
    label: "Bangles",
    shortLabel: "Bangles",
    description: "Stackable and statement bangles in antique and temple gold finishes.",
  },
  {
    id: "bracelets",
    label: "Bracelets / Hand Jewellery",
    shortLabel: "Bracelets",
    description: "Delicate bracelets and hand harnesses for a finishing touch.",
  },
  {
    id: "waist-chains",
    label: "Waist Chains / Saree Belts",
    shortLabel: "Waist Chains",
    description:
      "Traditional waist chains and saree belts that elevate any drape.",
  },
];

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}
