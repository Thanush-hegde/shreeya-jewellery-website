/**
 * SITE-WIDE CONFIGURATION
 * ------------------------------------------------------------------
 * Change the WhatsApp number here and it updates everywhere on the
 * site (product pages, header, footer, contact page, homepage CTA).
 *
 * Format: country code + number, NO "+", NO spaces, NO dashes.
 * Example for India: "919876543210"
 * ------------------------------------------------------------------
 */
export const SITE_CONFIG = {
  brandName: "SHREEYA",
  tagline: "Artificial Jewellery",
  locationLabel: "Goa, India",

  // TODO: replace with the real business WhatsApp number before going live
  whatsappNumber: "919999999999",

  // Default message shown when someone taps a general "Order on WhatsApp" button
  whatsappDefaultMessage:
    "Hi SHREEYA! I'd like to know more about your jewellery collection.",

  instagramHandle: "shreeya.jewellery",
  instagramUrl: "https://instagram.com/shreeya.jewellery",

  email: "hello@shreeyajewellery.com",
};

/**
 * Builds a wa.me link with a pre-filled, URL-encoded message.
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}
