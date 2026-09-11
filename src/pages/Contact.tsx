import { useState } from "react";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { SITE_CONFIG, buildWhatsAppLink } from "../config";
import { CATEGORIES } from "../data/categories";

export default function Contact() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const composedMessage = [
    "Hi SHREEYA!",
    name ? `My name is ${name}.` : "",
    interest ? `I'm interested in: ${interest}.` : "",
    message ? message : "I'd love to know more about your jewellery.",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="pt-16 sm:pt-20">
      <section className="border-b border-navy-900/10 bg-blush/60 py-16 sm:py-24">
        <div className="container-shreeya text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
            Get In Touch
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Contact &amp; Order
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-700">
            The easiest way to order from SHREEYA is on WhatsApp. Tell us a
            little about what you're looking for, and we'll take it from
            there.
          </p>
        </div>
      </section>

      <section className="container-shreeya py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Info column */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Reach us directly
            </h2>
            <div className="mt-6 space-y-5 text-sm text-navy-700">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="font-medium text-navy-900">WhatsApp</p>
                  <p>Fastest way to reach us — tap the button below to chat.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-700">
                  ✉
                </span>
                <div>
                  <p className="font-medium text-navy-900">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    data-cursor-hover
                    className="hover:text-gold-700"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-700">
                  ◎
                </span>
                <div>
                  <p className="font-medium text-navy-900">Instagram</p>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="hover:text-gold-700"
                  >
                    @{SITE_CONFIG.instagramHandle}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold-700">
                  ⚲
                </span>
                <div>
                  <p className="font-medium text-navy-900">Location</p>
                  <p>{SITE_CONFIG.locationLabel}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-navy-950 p-7 text-ivory">
              <p className="font-display text-lg font-medium">
                How ordering works
              </p>
              <ol className="mt-4 space-y-3 text-sm text-ivory/70">
                <li className="flex gap-3">
                  <span className="font-display text-gold">1.</span>
                  Browse the shop and find a piece you love.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-gold">2.</span>
                  Tap "Order on WhatsApp" — your message comes pre-filled.
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-gold">3.</span>
                  We confirm availability, pricing and delivery with you
                  personally.
                </li>
              </ol>
            </div>
          </div>

          {/* Quick-message form */}
          <div className="rounded-2xl border border-navy-900/10 bg-white/60 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Send us a quick message
            </h2>
            <p className="mt-2 text-sm text-navy-600">
              Fill this in and we'll open WhatsApp with your message ready to
              send.
            </p>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-medium uppercase tracking-widest2 text-navy-500"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-cursor-hover
                  placeholder="e.g. Priya Naik"
                  className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="text-xs font-medium uppercase tracking-widest2 text-navy-500"
                >
                  I'm interested in
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  data-cursor-hover
                  className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 focus:border-gold focus:outline-none"
                >
                  <option value="">Select a category (optional)</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-widest2 text-navy-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-cursor-hover
                  placeholder="Tell us what you're looking for..."
                  className="mt-2 w-full resize-none rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold focus:outline-none"
                />
              </div>

              <a
                href={buildWhatsAppLink(composedMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="btn-gold w-full"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Continue on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
