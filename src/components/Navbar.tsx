import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SITE_CONFIG, buildWhatsAppLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-ivory/95 shadow-soft backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-shreeya flex h-16 items-center justify-between sm:h-20">
        <Link to="/" data-cursor-hover className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-wide text-navy-900 sm:text-3xl">
            SHREEYA
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-cursor-hover
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-widest2 transition-colors duration-200 ${
                  isActive
                    ? "text-gold-600"
                    : "text-navy-800 hover:text-gold-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={buildWhatsAppLink(SITE_CONFIG.whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="btn-gold"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>

        <button
          type="button"
          data-cursor-hover
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-px w-full bg-navy-900 transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-navy-900 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-full bg-navy-900 transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-shreeya flex flex-col gap-1 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base font-medium tracking-wide ${
                  isActive
                    ? "bg-navy-900/5 text-gold-600"
                    : "text-navy-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={buildWhatsAppLink(SITE_CONFIG.whatsappDefaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-3"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
