
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    name,
    category,
    image,
    price,
    rating,
    colors,
    inStock,
  } = product;

  return (
    <div className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
      <div className="relative overflow-hidden bg-slate-100">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          New
        </span>

        <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg text-slate-600 shadow-sm transition hover:bg-red-500 hover:text-white">
          ♡
        </button>

        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {category}
          </p>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              inStock
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <span className="text-amber-500">★ {rating}</span>
            <span>•</span>
            <span>Premium collection</span>
          </div>
        </div>

        {colors && (
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <span
                key={index}
                className="h-5 w-5 rounded-full border border-slate-200"
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <h2 className="text-2xl font-bold text-slate-900">৳ {price.toLocaleString()}</h2>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;


