import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-16 sm:pt-20">
      <div className="container-shreeya text-center">
        <p className="font-display text-7xl font-semibold text-gold-300">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-navy-900">
          This page wandered off
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-navy-600">
          We couldn't find what you were looking for. Let's get you back to
          the collection.
        </p>
        <Link to="/shop" data-cursor-hover className="btn-primary mt-8">
          Shop Collection
        </Link>
      </div>
    </div>
  );
}
