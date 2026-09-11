# SHREEYA — Artificial Jewellery Website

A premium, mobile-first React + TypeScript + Tailwind CSS website for
SHREEYA, an artificial-jewellery brand based in Goa, India. Built with
Vite.

## Getting Started

This project was hand-built in an offline sandbox (no internet access),
so dependencies have **not** been installed and the app has **not**
been run or build-tested yet. Do this first, on your own machine:

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

Because this wasn't run in a live dev server before hand-off, please
click through every page and button once after `npm install` — see
the **Testing Checklist** below.

## Before Going Live

1. **Set your real WhatsApp number** in `src/config.ts`:
   ```ts
   whatsappNumber: "919999999999", // <-- replace with the real number
   ```
   This one value updates every "Order on WhatsApp" button, the
   product-detail ordering flow, the contact page, and the footer.

2. **Review placeholder prices.** All prices live in one place:
   `src/data/products.ts`. Edit the `price` field on any product —
   nothing is hard-coded elsewhere in the UI.

3. **Swap in final product photography** as needed. Images live in
   `public/assets/products/`, referenced by path in
   `src/data/products.ts`. To add more images to a product, drop the
   file in that folder and add its path to that product's `images`
   array.

## Project Structure

```
public/assets/brand/       SHREEYA logo
public/assets/products/    All real product photography (70 images)
src/
  config.ts                 Site-wide config — WhatsApp number, email, etc.
  types.ts                  Shared TypeScript types
  utils.ts                  Price/availability formatting helpers
  data/
    categories.ts            The 8 jewellery categories (extendable)
    products.ts               51 real products — single source of truth
  hooks/
    usePrefersReducedMotion.ts  Reduced-motion + touch-device detection
  components/
    Navbar.tsx                 Header with mobile menu
    Footer.tsx
    CustomCursor.tsx            Premium gold/navy cursor + click ripple
    FloatingWhatsApp.tsx        Sticky WhatsApp button
    ProductCard.tsx             Catalogue grid card
    ScrollToTop.tsx             Scrolls to top on route change
    WhatsAppIcon.tsx
  pages/
    Home.tsx
    Shop.tsx                    Catalogue: filter, search, sort
    ProductDetail.tsx           Gallery + WhatsApp ordering
    About.tsx
    Contact.tsx
    NotFound.tsx
  App.tsx                    Routes
  main.tsx                   Entry point
```

## Product Catalogue

51 real products sourced from the photography supplied for this
project (no stock images), organised across all 8 categories:
Necklace Sets, Bridal/Traditional, Long Necklaces, Chokers, Earrings,
Bangles, Bracelets/Hand Jewellery, and Waist Chains/Saree Belts.

Each product has:
- a clean SHREEYA product code (e.g. `SHR-N001`, `SHR-E007`)
- the original supplier code, kept as a separate reference field
- a colour/stone variant, placeholder price, availability status,
  one or more real photos, and a short description

The category and product structure is designed to be extended later
with **Rings** and **Bridal Accessories** — just add entries to
`src/data/categories.ts` and `src/data/products.ts`.

## WhatsApp Ordering Flow

`Customer → Product → WhatsApp → SHREEYA confirms order`

No online payments in this version, by design. Every "Order on
WhatsApp" button opens `wa.me` with a pre-filled message containing
the product name, code, variant and price. The contact page also has
a short form that composes a custom WhatsApp message.

## Custom Cursor

`src/components/CustomCursor.tsx` implements a small gold dot with a
trailing navy/gold ring, plus a soft gold ripple on click. It:
- is **desktop-only** (`(pointer: coarse)` disables it on touch)
- respects `prefers-reduced-motion` (ring tracking becomes 1:1 instead
  of eased, and ripples are skipped)
- never blocks clicks (`pointer-events-none`)

## Built for Later

The structure intentionally leaves room to add, without reworking
existing code: a shopping cart, online payments, customer accounts,
order tracking, an inventory/admin dashboard, multiple shop
locations, delivery options, and analytics. None of these are
implemented in this version.

## Testing Checklist

Run through this once after `npm install && npm run dev`:

- [ ] Every nav link (Home, Shop, About, Contact) loads correctly
- [ ] Category tiles on the homepage link to the right filtered Shop view
- [ ] Shop page: category filter, search box, and sort dropdown all work
- [ ] Product cards link to the correct product detail page
- [ ] Product detail: image thumbnails switch the main image
- [ ] "Order on WhatsApp" opens `wa.me` with the correct pre-filled message
- [ ] Contact form composes a sensible WhatsApp message
- [ ] Mobile menu opens/closes and locks background scroll
- [ ] Site looks correct at phone, tablet, and desktop widths
- [ ] Custom cursor appears on desktop, is absent on touch/mobile
- [ ] With "reduce motion" enabled in OS settings, animations simplify
- [ ] No errors in the browser console
- [ ] `npm run build` completes without TypeScript errors
