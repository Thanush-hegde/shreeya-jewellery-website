export type CategoryId =
  | "necklace-sets"
  | "bridal"
  | "long-necklaces"
  | "chokers"
  | "earrings"
  | "bangles"
  | "bracelets"
  | "waist-chains";

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel: string;
  description: string;
}

export type Availability = "in-stock" | "made-to-order" | "sold-out";

export interface Product {
  code: string; // SHREEYA product code, e.g. SHR-N001
  supplierCode: string; // original supplier code, kept for internal reference
  name: string;
  category: CategoryId;
  variant: string; // colour / stone variant
  price: number; // placeholder price in INR, editable centrally
  availability: Availability;
  description: string;
  images: string[]; // paths under /assets/products
}
