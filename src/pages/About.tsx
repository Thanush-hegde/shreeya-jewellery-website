import { Link } from "react-router-dom";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { SITE_CONFIG, buildWhatsAppLink } from "../config";

export default function About() {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="border-b border-navy-900/10 bg-blush/60 py-16 sm:py-24">
        <div className="container-shreeya text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
            Our Story
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            About SHREEYA
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-700">
            Premium artificial jewellery, curated with care in Goa —
            designed for the women who wear it, and the moments it's made for.
          </p>
        </div>
      </section>

      <section className="container-shreeya py-20 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
              Design · Quality · Elegance · Trust
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Jewellery chosen with an eye for detail
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700">
              <p>
                SHREEYA began with a simple idea — that beautiful, well-made
                artificial jewellery shouldn't be hard to find. Every piece in
                our collection is handpicked for its craftsmanship, finish and
                the way it feels to wear, from everyday studs to statement
                bridal sets.
              </p>
              <p>
                We're based in Goa, and we believe in keeping things personal.
                When you place an order, you're not talking to a chatbot or a
                faceless storefront — you're talking directly to us, on
                WhatsApp, so we can help you find exactly the right piece.
              </p>
              <p>
                As SHREEYA grows, our promise stays the same: thoughtfully
                chosen jewellery, honest pricing, and a shopping experience
                that feels warm and easy — whether you found us through
                Instagram, a QR code, or a friend's recommendation.
              </p>
            </div>
            <a
              href={buildWhatsAppLink(SITE_CONFIG.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="btn-gold mt-9"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Say Hello on WhatsApp
            </a>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
            <img
              src="/assets/products/SHR-N002-1.jpg"
              alt="SHREEYA necklace set detail"
              loading="lazy"
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover"
            />
            <img
              src="/assets/products/SHR-E003-1.jpg"
              alt="SHREEYA earrings detail"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <img
              src="/assets/products/SHR-BG001-1.jpg"
              alt="SHREEYA bangles detail"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-ivory sm:py-28">
        <div className="container-shreeya">
          <div className="mb-14 text-center">
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              What SHREEYA stands for
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Design",
                copy: "Pieces selected for beautiful, wearable design — never generic.",
              },
              {
                title: "Quality",
                copy: "Finishes and craftsmanship chosen to last through everyday wear.",
              },
              {
                title: "Elegance",
                copy: "Jewellery that feels premium, refined, and effortlessly put-together.",
              },
              {
                title: "Trust",
                copy: "Personal WhatsApp ordering, honest pricing, and real conversations.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center sm:text-left">
                <div className="mx-auto mb-4 h-px w-10 bg-gold sm:mx-0" />
                <h3 className="font-display text-xl font-medium">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ivory/60">
                  {v.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shreeya py-20 text-center sm:py-28">
        <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
          Come find your next favourite piece
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/shop" data-cursor-hover className="btn-primary">
            Shop Collection
          </Link>
          <Link to="/contact" data-cursor-hover className="btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
