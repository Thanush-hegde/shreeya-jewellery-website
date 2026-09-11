import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { SITE_CONFIG, buildWhatsAppLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-ivory">
      <div className="container-shreeya grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-semibold tracking-wide text-ivory">
            SHREEYA
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">
            Premium artificial jewellery, crafted for every celebration.
            Proudly based in {SITE_CONFIG.locationLabel}.
          </p>
          <a
            href={buildWhatsAppLink(SITE_CONFIG.whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm text-gold transition-colors hover:bg-gold hover:text-navy-950"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat with us
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-gold">
            Shop
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
            {CATEGORIES.slice(0, 5).map((c) => (
              <li key={c.id}>
                <Link
                  to={`/shop?category=${c.id}`}
                  data-cursor-hover
                  className="transition-colors hover:text-gold"
                >
                  {c.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-gold">
            More
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
            {CATEGORIES.slice(5).map((c) => (
              <li key={c.id}>
                <Link
                  to={`/shop?category=${c.id}`}
                  data-cursor-hover
                  className="transition-colors hover:text-gold"
                >
                  {c.shortLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/about" data-cursor-hover className="transition-colors hover:text-gold">
                About SHREEYA
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-gold">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
            <li>{SITE_CONFIG.locationLabel}</li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                data-cursor-hover
                className="transition-colors hover:text-gold"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="transition-colors hover:text-gold"
              >
                @{SITE_CONFIG.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-shreeya flex flex-col items-center justify-between gap-2 py-6 text-xs text-ivory/40 sm:flex-row">
          <p>© {year} SHREEYA. All rights reserved.</p>
          <p>Design, Quality, Elegance, Trust.</p>
        </div>
      </div>
    </footer>
  );
}
