import { Link } from "react-router-dom";
import type { Product } from "../types";
import { formatPrice, availabilityLabel } from "../utils";

interface Props {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: Props) {
  const [primary, secondary] = product.images;

  return (
    <Link
      to={`/product/${product.code}`}
      data-cursor-hover
      className="group block"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-blush">
        <img
          src={primary}
          alt={product.name}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
        />
        {secondary && (
          <img
            src={secondary}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        )}

        {product.availability !== "in-stock" && (
          <span className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-ivory">
            {availabilityLabel(product.availability)}
          </span>
        )}

        <span className="pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center rounded-full bg-ivory/95 py-2.5 text-xs font-medium uppercase tracking-widest2 text-navy-900 opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Details
        </span>
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-medium text-navy-900">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs uppercase tracking-widest2 text-navy-500">
            {product.code} · {product.variant}
          </p>
        </div>
        <p className="shrink-0 whitespace-nowrap font-display text-lg font-medium text-gold-700">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
