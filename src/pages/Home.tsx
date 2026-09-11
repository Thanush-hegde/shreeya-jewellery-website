import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { PRODUCTS, getProductsByCategory } from "../data/products";
import ProductCard from "../components/ProductCard";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { SITE_CONFIG, buildWhatsAppLink } from "../config";

const FEATURED_CODES = [
  "SHR-N001",
  "SHR-T001",
  "SHR-E007",
  "SHR-L005",
  "SHR-C001",
  "SHR-W005",
  "SHR-BR001",
  "SHR-BG002",
];

export default function Home() {
  const featured = FEATURED_CODES.map((code) =>
    PRODUCTS.find((p) => p.code === code)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  const newArrivals = PRODUCTS.slice(0, 8);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <img
            src="/assets/products/SHR-N001-1.jpg"
            alt="SHREEYA artificial jewellery — layered necklace set"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
        </div>

        <div className="container-shreeya relative z-10 py-20">
          <div className="max-w-xl animate-fadeUp">
            <p className="mb-5 text-xs font-medium uppercase tracking-widest2 text-gold">
              Goa, India · Artificial Jewellery
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl md:text-7xl">
              SHREEYA
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg">
              Handpicked artificial jewellery designed for weddings, festivities
              and everyday elegance — necklace sets, earrings, bangles and more.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/shop" data-cursor-hover className="btn-gold">
                Shop Collection
              </Link>
              <a
                href={buildWhatsAppLink(SITE_CONFIG.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-3 text-sm font-medium tracking-wide text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-navy-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/50 sm:flex">
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <span className="h-8 w-px bg-ivory/30" />
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="container-shreeya py-20 sm:py-28">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
            Explore
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Shop by Category
          </h2>
          <div className="gold-divider mt-5" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const sample = getProductsByCategory(cat.id)[0];
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                data-cursor-hover
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-blush"
              >
                {sample && (
                  <img
                    src={sample.images[0]}
                    alt={cat.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="font-display text-base font-medium text-ivory sm:text-lg">
                    {cat.shortLabel}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="bg-blush/60 py-20 sm:py-28">
        <div className="container-shreeya">
          <div className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
                Just In
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
                New Arrivals
              </h2>
            </div>
            <Link
              to="/shop"
              data-cursor-hover
              className="text-sm font-medium uppercase tracking-widest2 text-navy-800 underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-700"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-4">
            {newArrivals.map((p, i) => (
              <ProductCard key={p.code} product={p} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PRODUCTS / FEATURED */}
      <section className="container-shreeya py-20 sm:py-28">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
            Curated
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            SHREEYA Favourites
          </h2>
          <div className="gold-divider mt-5" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.code} product={p} />
          ))}
        </div>
      </section>

      {/* WHY SHREEYA */}
      <section className="bg-navy-950 py-20 text-ivory sm:py-28">
        <div className="container-shreeya">
          <div className="mb-14 text-center">
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold">
              Why SHREEYA
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Design, Quality, Elegance, Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Curated Design",
                copy: "Every piece is handpicked to feel current, wearable and unmistakably premium.",
              },
              {
                title: "Made to Last",
                copy: "Quality craftsmanship that holds its shine through every celebration.",
              },
              {
                title: "Easy Ordering",
                copy: "Browse online, then confirm your order directly with us on WhatsApp.",
              },
              {
                title: "Rooted in Goa",
                copy: "A local Goan business bringing thoughtfully sourced jewellery to you.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <div className="mx-auto mb-4 h-px w-10 bg-gold sm:mx-0" />
                <h3 className="font-display text-xl font-medium text-ivory">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ivory/60">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOA / LOCAL IDENTITY */}
      <section className="container-shreeya py-20 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
              Proudly Goan
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              A local name you can trust
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-700">
              SHREEYA started as a small, personal collection of jewellery
              chosen with care — now shared with customers across Goa and
              beyond. Every order is confirmed personally, so you always know
              exactly what you're getting.
            </p>
            <Link to="/about" data-cursor-hover className="btn-outline mt-8">
              Our Story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/products/SHR-W005-1.jpg"
              alt="SHREEYA jewellery detail"
              loading="lazy"
              className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover"
            />
            <img
              src="/assets/products/SHR-E008-1.jpg"
              alt="SHREEYA earrings detail"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <img
              src="/assets/products/SHR-C001-1.jpg"
              alt="SHREEYA choker detail"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-blush py-20 sm:py-28">
        <div className="container-shreeya relative z-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Ready to find your next favourite piece?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-navy-700">
            Browse the full SHREEYA collection, or message us directly for
            personal recommendations.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/shop" data-cursor-hover className="btn-primary">
              Shop Collection
            </Link>
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
        </div>
      </section>
    </div>
  );
}
