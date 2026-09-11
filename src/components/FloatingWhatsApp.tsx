import { SITE_CONFIG, buildWhatsAppLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

/** A small, persistent WhatsApp button pinned to the corner of the viewport. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(SITE_CONFIG.whatsappDefaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
