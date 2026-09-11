import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProductByCode, getRelatedProducts } from "../data/products";
import { getCategory } from "../data/categories";
import ProductCard from "../components/ProductCard";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { buildWhatsAppLink } from "../config";
import { formatPrice, availabilityLabel } from "../utils";

export default function ProductDetail() {
  const { code } = useParams<{ code: string }>();
  const product = code ? getProductByCode(code) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [code]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const category = getCategory(product.category);
  const related = getRelatedProducts(product, 4);

  const whatsAppMessage = `Hi SHREEYA! I'd like to order:\n\n${product.name}\nProduct Code: ${product.code}\nVariant: ${product.variant}\nPrice: ${formatPrice(product.price)}\n\nPlease confirm availability.`;

  const soldOut = product.availability === "sold-out";

  return (
    <div className="pt-16 sm:pt-20">
      <div className="container-shreeya py-8">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-widest2 text-navy-500">
          <Link to="/" data-cursor-hover className="hover:text-gold-700">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" data-cursor-hover className="hover:text-gold-700">
            Shop
          </Link>
          {category && (
            <>
              <span>/</span>
              <Link
                to={`/shop?category=${category.id}`}
                data-cursor-hover
                className="hover:text-gold-700"
              >
                {category.shortLabel}
              </Link>
            </>
          )}
        </nav>
      </div>

      <section className="container-shreeya pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-blush">
              <img
                key={product.images[activeImage]}
                src={product.images[activeImage]}
                alt={`${product.name} — ${product.variant}`}
                className="h-full w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    data-cursor-hover
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors sm:h-24 sm:w-20 ${
                      activeImage === i
                        ? "border-gold"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:pt-4">
            <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
              {category?.shortLabel}
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy-500">
              <span>Product Code: {product.code}</span>
              <span className="hidden h-1 w-1 rounded-full bg-navy-300 sm:inline-block" />
              <span>Variant: {product.variant}</span>
            </div>

            <p className="mt-6 font-display text-3xl font-medium text-gold-700">
              {formatPrice(product.price)}
            </p>

            <div className="mt-4">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest2 ${
                  product.availability === "in-stock"
                    ? "bg-green-50 text-green-700"
                    : product.availability === "made-to-order"
                    ? "bg-gold-50 text-gold-700"
                    : "bg-navy-900/5 text-navy-500"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    product.availability === "in-stock"
                      ? "bg-green-600"
                      : product.availability === "made-to-order"
                      ? "bg-gold-600"
                      : "bg-navy-400"
                  }`}
                />
                {availabilityLabel(product.availability)}
              </span>
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-navy-700">
              {product.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={soldOut ? undefined : buildWhatsAppLink(whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-disabled={soldOut}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  soldOut
                    ? "cursor-not-allowed bg-navy-900/10 text-navy-400"
                    : "bg-[#25D366] text-white hover:bg-[#1da851]"
                }`}
                onClick={(e) => soldOut && e.preventDefault()}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {soldOut ? "Currently Sold Out" : "Order on WhatsApp"}
              </a>
              <Link to="/shop" data-cursor-hover className="btn-outline">
                Continue Browsing
              </Link>
            </div>

            <div className="mt-10 space-y-3 border-t border-navy-900/10 pt-8 text-sm text-navy-600">
              <p className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                Tap "Order on WhatsApp" to send us a pre-filled message with
                this product's details — we'll confirm availability and
                delivery with you personally.
              </p>
              <p className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold" />
                Colours may vary slightly due to studio lighting and screen
                settings.
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              You may also like
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.code} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
