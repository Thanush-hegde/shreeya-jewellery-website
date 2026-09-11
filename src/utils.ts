export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function availabilityLabel(status: string): string {
  switch (status) {
    case "in-stock":
      return "In Stock";
    case "made-to-order":
      return "Made to Order";
    case "sold-out":
      return "Sold Out";
    default:
      return status;
  }
}
