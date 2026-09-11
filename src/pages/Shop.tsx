import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import type { CategoryId } from "../types";

type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") as CategoryId | null;

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let items = [...PRODUCTS];

    if (activeCategory) {
      items = items.filter((p) => p.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.variant.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return items;
  }, [activeCategory, query, sort]);

  function setCategory(id: CategoryId | null) {
    const params = new URLSearchParams(searchParams);
    if (id) {
      params.set("category", id);
    } else {
      params.delete("category");
    }
    setSearchParams(params);
    setMobileFiltersOpen(false);
  }

  const activeCategoryLabel = activeCategory
    ? CATEGORIES.find((c) => c.id === activeCategory)?.label
    : "All Jewellery";

  return (
    <div className="pt-16 sm:pt-20">
      <section className="border-b border-navy-900/10 bg-blush/60 py-14 sm:py-20">
        <div className="container-shreeya text-center">
          <p className="text-xs font-medium uppercase tracking-widest2 text-gold-700">
            The Collection
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            {activeCategoryLabel}
          </h1>
          {activeCategory && (
            <p className="mx-auto mt-4 max-w-xl text-sm text-navy-700">
              {CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </p>
          )}
        </div>
      </section>

      <section className="container-shreeya py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h2 className="text-xs font-semibold uppercase tracking-widest2 text-navy-500">
                Category
              </h2>
              <ul className="mt-4 space-y-1">
                <li>
                  <button
                    type="button"
                    data-cursor-hover
                    onClick={() => setCategory(null)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      !activeCategory
                        ? "bg-navy-900 text-ivory"
                        : "text-navy-700 hover:bg-navy-900/5"
                    }`}
                  >
                    All Jewellery
                  </button>
                </li>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      type="button"
                      data-cursor-hover
                      onClick={() => setCategory(cat.id)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        activeCategory === cat.id
                          ? "bg-navy-900 text-ivory"
                          : "text-navy-700 hover:bg-navy-900/5"
                      }`}
                    >
                      {cat.shortLabel}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            {/* Search + sort + mobile filter toggle */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <button
                  type="button"
                  data-cursor-hover
                  onClick={() => setMobileFiltersOpen((o) => !o)}
                  className="flex items-center gap-2 rounded-full border border-navy-900/20 px-4 py-2.5 text-sm text-navy-800 lg:hidden"
                >
                  Filter
                  {activeCategory && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </button>

                <div className="relative flex-1 sm:w-64">
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search jewellery, code..."
                    data-cursor-hover
                    className="w-full rounded-full border border-navy-900/20 bg-white/60 px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs uppercase tracking-widest2 text-navy-500">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  data-cursor-hover
                  className="rounded-full border border-navy-900/20 bg-white/60 px-4 py-2.5 text-sm text-navy-900 focus:border-gold focus:outline-none"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile filter panel */}
            {mobileFiltersOpen && (
              <div className="mb-8 flex flex-wrap gap-2 lg:hidden">
                <button
                  type="button"
                  onClick={() => setCategory(null)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide ${
                    !activeCategory
                      ? "border-navy-900 bg-navy-900 text-ivory"
                      : "border-navy-900/20 text-navy-700"
                  }`}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide ${
                      activeCategory === cat.id
                        ? "border-navy-900 bg-navy-900 text-ivory"
                        : "border-navy-900/20 text-navy-700"
                    }`}
                  >
                    {cat.shortLabel}
                  </button>
                ))}
              </div>
            )}

            <p className="mb-6 text-xs uppercase tracking-widest2 text-navy-500">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4">
                {filtered.map((p) => (
                  <ProductCard key={p.code} product={p} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-navy-900/20 py-24 text-center">
                <p className="font-display text-xl text-navy-700">
                  No pieces found
                </p>
                <p className="mt-2 text-sm text-navy-500">
                  Try a different search term or category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
