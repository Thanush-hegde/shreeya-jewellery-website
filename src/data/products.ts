import type { Product } from "../types";

/**
 * PRODUCT DATA — single source of truth.
 * ------------------------------------------------------------------
 * All prices below are PLACEHOLDER prices (INR) so the site can go
 * live immediately. Edit the `price` field here to update pricing
 * across the entire site — nothing is hard-coded in the UI.
 * ------------------------------------------------------------------
 */
export const PRODUCTS: Product[] = [
  {
    code: "SHR-N001",
    supplierCode: "AMRR-30.6400",
    name: "Radhika Kundan Necklace Set",
    category: "necklace-sets",
    variant: "Antique Gold",
    price: 4499,
    availability: "in-stock",
    description:
      "A statement layered necklace set with a temple-inspired pendant and matching jhumka earrings, finished in a rich antique gold tone.",
    images: ["/assets/products/SHR-N001-1.jpg", "/assets/products/SHR-N001-2.jpg", "/assets/products/SHR-N001-3.jpg", "/assets/products/SHR-N001-4.jpg"],
  },
  {
    code: "SHR-N002",
    supplierCode: "B-11.2000 / AARR-32.0600",
    name: "Meenakari Grand Necklace Set",
    category: "necklace-sets",
    variant: "Multicolour Meenakari",
    price: 4999,
    availability: "in-stock",
    description:
      "A regal meenakari-finished necklace set with intricate enamel work and dangling pearls, perfect for weddings and grand occasions.",
    images: ["/assets/products/SHR-N002-1.jpg", "/assets/products/SHR-N002-2.jpg"],
  },
  {
    code: "SHR-N003",
    supplierCode: "MCJ-11.2690 / AMBR-30.6400",
    name: "Kalyani Temple Necklace Set",
    category: "necklace-sets",
    variant: "Temple Gold",
    price: 4299,
    availability: "in-stock",
    description:
      "Inspired by South Indian temple motifs, this layered necklace set pairs delicate goldwork with a bold statement pendant.",
    images: ["/assets/products/SHR-N003-1.jpg", "/assets/products/SHR-N003-2.jpg"],
  },
  {
    code: "SHR-N004",
    supplierCode: "EAMRR-30.6400 / ZAMRR-30.6400",
    name: "Anaya Antique Necklace Set",
    category: "necklace-sets",
    variant: "Antique Gold",
    price: 4599,
    availability: "in-stock",
    description:
      "A finely detailed antique-finish necklace set featuring floral filigree work and matching drop earrings.",
    images: ["/assets/products/SHR-N004-1.jpg", "/assets/products/SHR-N004-2.jpg"],
  },
  {
    code: "SHR-T001",
    supplierCode: "JIB-07.1015",
    name: "Kundan Polki Bridal Set",
    category: "bridal",
    variant: "Kundan Multicolour",
    price: 5999,
    availability: "in-stock",
    description:
      "A festive kundan-polki necklace with ruby and emerald accents, designed for brides and special festive occasions.",
    images: ["/assets/products/SHR-T001-1.jpg"],
  },
  {
    code: "SHR-T002",
    supplierCode: "MCJ-08.1665",
    name: "Rajwadi Bridal Choker",
    category: "bridal",
    variant: "Antique Gold",
    price: 3999,
    availability: "in-stock",
    description:
      "A regal Rajwadi-style choker with fine antique detailing, styled to sit beautifully over silk sarees.",
    images: ["/assets/products/SHR-T002-1.jpg"],
  },
  {
    code: "SHR-L001",
    supplierCode: "B-11.2000",
    name: "Moti Layered Long Necklace",
    category: "long-necklaces",
    variant: "Ivory Pearl",
    price: 2299,
    availability: "in-stock",
    description:
      "A graceful multi-strand pearl necklace that drapes elegantly, ideal for both festive and everyday elegance.",
    images: ["/assets/products/SHR-L001-1.jpg"],
  },
  {
    code: "SHR-L002",
    supplierCode: "JIB-00.2035",
    name: "Ruby Drop Long Chain",
    category: "long-necklaces",
    variant: "Ruby Red",
    price: 2199,
    availability: "made-to-order",
    description:
      "A long gold-tone chain with delicate ruby-red drops, adding a pop of colour to festive ensembles.",
    images: ["/assets/products/SHR-L002-1.jpg"],
  },
  {
    code: "SHR-L003",
    supplierCode: "JIR-00.2035",
    name: "Rani Pink Long Necklace",
    category: "long-necklaces",
    variant: "Rani Pink",
    price: 2299,
    availability: "in-stock",
    description:
      "A beautifully layered long necklace in rani pink hues, designed to make a statement with any outfit.",
    images: ["/assets/products/SHR-L003-1.jpg"],
  },
  {
    code: "SHR-L004",
    supplierCode: "JIR-09.2085",
    name: "Lakshmi Coin Long Mala",
    category: "long-necklaces",
    variant: "Antique Gold",
    price: 2399,
    availability: "made-to-order",
    description:
      "A traditional coin-motif long mala with fine antique detailing, a timeless addition to any jewellery box.",
    images: ["/assets/products/SHR-L004-1.jpg"],
  },
  {
    code: "SHR-L005",
    supplierCode: "MCJ-11.2690",
    name: "Pearl Cascade Long Necklace",
    category: "long-necklaces",
    variant: "Ivory Pearl",
    price: 2499,
    availability: "in-stock",
    description:
      "Cascading strands of lustrous pearls come together in this graceful long necklace, styled for effortless elegance.",
    images: ["/assets/products/SHR-L005-1.jpg", "/assets/products/SHR-L005-2.jpg", "/assets/products/SHR-L005-3.jpg"],
  },
  {
    code: "SHR-L006",
    supplierCode: "MCJ-05.1399",
    name: "Ivory Pearl Long Necklace",
    category: "long-necklaces",
    variant: "Ivory Pearl",
    price: 2199,
    availability: "in-stock",
    description:
      "A classic ivory pearl necklace with a delicate gold pendant, perfect for pairing with pastel outfits.",
    images: ["/assets/products/SHR-L006-1.jpg"],
  },
  {
    code: "SHR-L007",
    supplierCode: "VIR-05.1399",
    name: "Maroon Beaded Long Necklace",
    category: "long-necklaces",
    variant: "Maroon",
    price: 2299,
    availability: "in-stock",
    description:
      "A rich maroon beaded necklace with gold accents, beautifully complementing festive silk sarees.",
    images: ["/assets/products/SHR-L007-1.jpg", "/assets/products/SHR-L007-2.jpg"],
  },
  {
    code: "SHR-L008",
    supplierCode: "MCJ-13.2201",
    name: "Amber Layered Necklace",
    category: "long-necklaces",
    variant: "Amber",
    price: 2199,
    availability: "in-stock",
    description:
      "Warm amber-toned beads layered into a flattering long silhouette, a versatile everyday-to-festive piece.",
    images: ["/assets/products/SHR-L008-1.jpg"],
  },
  {
    code: "SHR-L009",
    supplierCode: "JIB-04.1187",
    name: "Lavender Pearl Necklace",
    category: "long-necklaces",
    variant: "Lavender",
    price: 2299,
    availability: "in-stock",
    description:
      "Soft lavender pearls strung in a graceful long design, a pretty pastel pick for daytime festivities.",
    images: ["/assets/products/SHR-L009-1.jpg"],
  },
  {
    code: "SHR-L010",
    supplierCode: "VIR-02.0987",
    name: "Garnet Drop Long Necklace",
    category: "long-necklaces",
    variant: "Garnet Red",
    price: 2399,
    availability: "in-stock",
    description:
      "Deep garnet-red drops on a fine gold chain, designed to bring understated glamour to any look.",
    images: ["/assets/products/SHR-L010-1.jpg"],
  },
  {
    code: "SHR-L011",
    supplierCode: "MCJ-06.1732",
    name: "Golden Leaf Long Necklace",
    category: "long-necklaces",
    variant: "Antique Gold",
    price: 2299,
    availability: "made-to-order",
    description:
      "A nature-inspired leaf motif necklace in warm gold tones, elegant enough for both work and weddings.",
    images: ["/assets/products/SHR-L011-1.jpg"],
  },
  {
    code: "SHR-L012",
    supplierCode: "JIR-11.0564",
    name: "Ivory Bead Layered Necklace",
    category: "long-necklaces",
    variant: "Ivory",
    price: 2199,
    availability: "made-to-order",
    description:
      "Understated ivory beads in a flattering layered drape, an easy everyday layering piece.",
    images: ["/assets/products/SHR-L012-1.jpg"],
  },
  {
    code: "SHR-L013",
    supplierCode: "MCJ-09.0456",
    name: "Lilac Pearl Multi-strand Necklace",
    category: "long-necklaces",
    variant: "Lilac",
    price: 2399,
    availability: "in-stock",
    description:
      "Multiple strands of soft lilac pearls come together for a romantic, feminine finish.",
    images: ["/assets/products/SHR-L013-1.jpg"],
  },
  {
    code: "SHR-L014",
    supplierCode: "JIB-12.0876",
    name: "Sage Green Layered Necklace",
    category: "long-necklaces",
    variant: "Sage Green",
    price: 2299,
    availability: "made-to-order",
    description:
      "A refreshing sage-green beaded necklace layered for a soft, contemporary drape.",
    images: ["/assets/products/SHR-L014-1.jpg"],
  },
  {
    code: "SHR-C001",
    supplierCode: "AI-06.1580",
    name: "Emerald Choker",
    category: "chokers",
    variant: "Emerald Green",
    price: 2799,
    availability: "in-stock",
    description:
      "A close-fit choker studded with emerald-green stones, framed in fine antique gold work.",
    images: ["/assets/products/SHR-C001-1.jpg"],
  },
  {
    code: "SHR-C002",
    supplierCode: "IA-09.560",
    name: "Maroon Stone Choker",
    category: "chokers",
    variant: "Maroon",
    price: 2699,
    availability: "made-to-order",
    description:
      "A rich maroon stone-studded choker that sits beautifully at the collarbone, ideal for festive blouses.",
    images: ["/assets/products/SHR-C002-1.jpg"],
  },
  {
    code: "SHR-C003",
    supplierCode: "MCJ-04.0221",
    name: "Amethyst Beaded Choker",
    category: "chokers",
    variant: "Amethyst Purple",
    price: 1999,
    availability: "in-stock",
    description:
      "Delicate amethyst-hued beads in a neat choker silhouette, a versatile everyday piece.",
    images: ["/assets/products/SHR-C003-1.jpg"],
  },
  {
    code: "SHR-C004",
    supplierCode: "JIR-06.0332",
    name: "Golden Pearl Choker",
    category: "chokers",
    variant: "Ivory Pearl",
    price: 2199,
    availability: "in-stock",
    description:
      "A dainty pearl choker with a subtle gold pendant, effortlessly elegant for daily wear.",
    images: ["/assets/products/SHR-C004-1.jpg"],
  },
  {
    code: "SHR-C005",
    supplierCode: "MCJ-10.0678",
    name: "Antique Gold Choker",
    category: "chokers",
    variant: "Antique Gold",
    price: 2599,
    availability: "in-stock",
    description:
      "A finely worked antique gold choker with intricate detailing, perfect for pairing with festive blouses.",
    images: ["/assets/products/SHR-C005-1.jpg"],
  },
  {
    code: "SHR-C006",
    supplierCode: "JIB-03.0119",
    name: "Temple Pearl Choker",
    category: "chokers",
    variant: "Temple Gold",
    price: 2799,
    availability: "made-to-order",
    description:
      "Temple-inspired motifs framed with delicate pearls, a graceful choker for traditional occasions.",
    images: ["/assets/products/SHR-C006-1.jpg"],
  },
  {
    code: "SHR-C007",
    supplierCode: "VIR-08.0765",
    name: "Rose Quartz Choker",
    category: "chokers",
    variant: "Rose Pink",
    price: 1999,
    availability: "in-stock",
    description:
      "Soft rose-pink stones set in a delicate choker design, a pretty pick for daytime events.",
    images: ["/assets/products/SHR-C007-1.jpg"],
  },
  {
    code: "SHR-C008",
    supplierCode: "MCJ-14.0987",
    name: "Emerald Drop Choker",
    category: "chokers",
    variant: "Emerald Green",
    price: 2699,
    availability: "in-stock",
    description:
      "An emerald-accented choker with fine goldwork, designed to make a subtle festive statement.",
    images: ["/assets/products/SHR-C008-1.jpg"],
  },
  {
    code: "SHR-E001",
    supplierCode: "MCJ-00.365",
    name: "Ruby Drop Studs",
    category: "earrings",
    variant: "Ruby Red",
    price: 699,
    availability: "in-stock",
    description:
      "Classic ruby-red stud earrings with a delicate drop, an easy everyday-to-festive pick.",
    images: ["/assets/products/SHR-E001-1.jpg"],
  },
  {
    code: "SHR-E002",
    supplierCode: "MCJ-00.385",
    name: "Kundan Stud Earrings",
    category: "earrings",
    variant: "Kundan Multicolour",
    price: 749,
    availability: "in-stock",
    description:
      "Petite kundan-studded earrings with a colourful stone centre, a versatile daily-wear favourite.",
    images: ["/assets/products/SHR-E002-1.jpg", "/assets/products/SHR-E002-2.jpg", "/assets/products/SHR-E002-3.jpg"],
  },
  {
    code: "SHR-E003",
    supplierCode: "MCJ-01.500",
    name: "Peacock Jhumka",
    category: "earrings",
    variant: "Antique Gold",
    price: 899,
    availability: "in-stock",
    description:
      "A peacock-inspired jhumka with fine antique detailing and gentle movement, a festive favourite.",
    images: ["/assets/products/SHR-E003-1.jpg"],
  },
  {
    code: "SHR-E004",
    supplierCode: "MCJ-01.505",
    name: "Lotus Jhumka",
    category: "earrings",
    variant: "Antique Gold",
    price: 899,
    availability: "in-stock",
    description:
      "A lotus-petal jhumka with delicate beadwork, light enough for all-day festive wear.",
    images: ["/assets/products/SHR-E004-1.jpg", "/assets/products/SHR-E004-2.jpg"],
  },
  {
    code: "SHR-E005",
    supplierCode: "MCJ-01.510",
    name: "Chandbali Earrings",
    category: "earrings",
    variant: "Antique Gold",
    price: 949,
    availability: "in-stock",
    description:
      "Timeless crescent-shaped chandbali earrings with fine filigree work, a wardrobe staple.",
    images: ["/assets/products/SHR-E005-1.jpg", "/assets/products/SHR-E005-2.jpg"],
  },
  {
    code: "SHR-E006",
    supplierCode: "MCJ-01.520",
    name: "Pearl Drop Jhumka",
    category: "earrings",
    variant: "Ivory Pearl",
    price: 899,
    availability: "in-stock",
    description:
      "Classic jhumka earrings finished with delicate pearl drops, elegant with sarees and lehengas alike.",
    images: ["/assets/products/SHR-E006-1.jpg", "/assets/products/SHR-E006-2.jpg", "/assets/products/SHR-E006-3.jpg"],
  },
  {
    code: "SHR-E007",
    supplierCode: "MCJ-01.525",
    name: "Emerald Jhumka",
    category: "earrings",
    variant: "Emerald Green",
    price: 949,
    availability: "in-stock",
    description:
      "Emerald-green stone jhumka earrings with intricate goldwork, a rich festive accent.",
    images: ["/assets/products/SHR-E007-1.jpg", "/assets/products/SHR-E007-2.jpg", "/assets/products/SHR-E007-3.jpg"],
  },
  {
    code: "SHR-E008",
    supplierCode: "MCJ-01.530",
    name: "Temple Jhumka",
    category: "earrings",
    variant: "Temple Gold",
    price: 999,
    availability: "in-stock",
    description:
      "Temple-style jhumka earrings with traditional dome detailing, a classic pick for weddings.",
    images: ["/assets/products/SHR-E008-1.jpg", "/assets/products/SHR-E008-2.jpg"],
  },
  {
    code: "SHR-E009",
    supplierCode: "MCJ-01.545",
    name: "Kundan Chandbali",
    category: "earrings",
    variant: "Kundan Multicolour",
    price: 999,
    availability: "in-stock",
    description:
      "Kundan-studded chandbali earrings with colourful stone accents, festive and eye-catching.",
    images: ["/assets/products/SHR-E009-1.jpg", "/assets/products/SHR-E009-2.jpg"],
  },
  {
    code: "SHR-E010",
    supplierCode: "MCJ-01.555",
    name: "Ruby Jhumka",
    category: "earrings",
    variant: "Ruby Red",
    price: 949,
    availability: "in-stock",
    description:
      "Rich ruby-red jhumka earrings with fine gold trim, designed to catch the light beautifully.",
    images: ["/assets/products/SHR-E010-1.jpg"],
  },
  {
    code: "SHR-BG001",
    supplierCode: "MCJ-02.605",
    name: "Antique Gold Bangles (Set of 2)",
    category: "bangles",
    variant: "Antique Gold",
    price: 1499,
    availability: "in-stock",
    description:
      "A pair of finely worked antique gold bangles with traditional detailing, stackable for a fuller look.",
    images: ["/assets/products/SHR-BG001-1.jpg"],
  },
  {
    code: "SHR-BG002",
    supplierCode: "MCJ-05.1385",
    name: "Temple Motif Bangles (Set of 2)",
    category: "bangles",
    variant: "Temple Gold",
    price: 1599,
    availability: "in-stock",
    description:
      "Temple-inspired bangles with intricate carving, a classic addition to festive and bridal looks.",
    images: ["/assets/products/SHR-BG002-1.jpg"],
  },
  {
    code: "SHR-BG003",
    supplierCode: "MCJ-11.0453",
    name: "Classic Gold Bangle Set",
    category: "bangles",
    variant: "Polished Gold",
    price: 1699,
    availability: "in-stock",
    description:
      "A classic set of high-shine gold bangles designed to be worn together or stacked individually.",
    images: ["/assets/products/SHR-BG003-1.jpg"],
  },
  {
    code: "SHR-BG004",
    supplierCode: "MCJ.01.585",
    name: "Textured Gold Bangles",
    category: "bangles",
    variant: "Antique Gold",
    price: 1599,
    availability: "made-to-order",
    description:
      "Beautifully textured bangles with a warm antique finish, perfect for stacking or wearing solo.",
    images: ["/assets/products/SHR-BG004-1.jpg"],
  },
  {
    code: "SHR-BR001",
    supplierCode: "MMI-01.550",
    name: "Kundan Hasli Hand Harness",
    category: "bracelets",
    variant: "Ruby Red",
    price: 1299,
    availability: "in-stock",
    description:
      "An intricate multi-chain hand harness bracelet with a kundan centrepiece in ruby red, a striking statement piece for festive looks.",
    images: ["/assets/products/SHR-BR001-1.jpg"],
  },
  {
    code: "SHR-BR002",
    supplierCode: "MMI-01.550",
    name: "Kundan Hasli Hand Harness",
    category: "bracelets",
    variant: "Amethyst Purple",
    price: 1299,
    availability: "in-stock",
    description:
      "An intricate multi-chain hand harness bracelet with a kundan centrepiece in soft amethyst, a striking statement piece for festive looks.",
    images: ["/assets/products/SHR-BR002-1.jpg"],
  },
  {
    code: "SHR-BR003",
    supplierCode: "MMI-01.550",
    name: "Kundan Hasli Hand Harness",
    category: "bracelets",
    variant: "Clear White",
    price: 1299,
    availability: "in-stock",
    description:
      "An intricate multi-chain hand harness bracelet with a sparkling clear-stone centrepiece, a striking statement piece for festive looks.",
    images: ["/assets/products/SHR-BR003-1.jpg"],
  },
  {
    code: "SHR-BR004",
    supplierCode: "MMI-01.550",
    name: "Kundan Hasli Hand Harness",
    category: "bracelets",
    variant: "Emerald Green",
    price: 1299,
    availability: "made-to-order",
    description:
      "An intricate multi-chain hand harness bracelet with a kundan centrepiece in emerald green, a striking statement piece for festive looks.",
    images: ["/assets/products/SHR-BR004-1.jpg"],
  },
  {
    code: "SHR-W001",
    supplierCode: "AMCJ-07.1525",
    name: "Kolhapuri Saree Belt",
    category: "waist-chains",
    variant: "Antique Gold",
    price: 1899,
    availability: "in-stock",
    description:
      "A traditional Kolhapuri-style waist belt with fine detailing, designed to sit gracefully over the saree pleats.",
    images: ["/assets/products/SHR-W001-1.jpg"],
  },
  {
    code: "SHR-W002",
    supplierCode: "S-06.1585",
    name: "Temple Coin Waist Chain",
    category: "waist-chains",
    variant: "Antique Gold",
    price: 1799,
    availability: "in-stock",
    description:
      "A delicate coin-motif waist chain with a temple-style pendant, adding traditional charm to any saree.",
    images: ["/assets/products/SHR-W002-1.jpg"],
  },
  {
    code: "SHR-W003",
    supplierCode: "MCJ-07.1550",
    name: "Pearl Drape Saree Belt",
    category: "waist-chains",
    variant: "Ivory Pearl",
    price: 1999,
    availability: "in-stock",
    description:
      "A pearl-studded saree belt that drapes elegantly across the waist, perfect for bridal and festive sarees.",
    images: ["/assets/products/SHR-W003-1.jpg"],
  },
  {
    code: "SHR-W004",
    supplierCode: "MCJ-09.1790",
    name: "Antique Gold Waist Chain",
    category: "waist-chains",
    variant: "Antique Gold",
    price: 1899,
    availability: "made-to-order",
    description:
      "A finely detailed waist chain in warm antique gold, designed to cinch and accentuate the saree drape.",
    images: ["/assets/products/SHR-W004-1.jpg"],
  },
  {
    code: "SHR-W005",
    supplierCode: "JIB-07.1625",
    name: "Kundan Vaddanam Belt",
    category: "waist-chains",
    variant: "Kundan Multicolour",
    price: 2199,
    availability: "in-stock",
    description:
      "A traditional South Indian vaddanam-style waist belt with kundan stone work, a bridal statement piece.",
    images: ["/assets/products/SHR-W005-1.jpg"],
  },
];

export function getProductByCode(code: string): Product | undefined {
  return PRODUCTS.find((p) => p.code === code);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.code !== product.code
  ).slice(0, limit);
}
