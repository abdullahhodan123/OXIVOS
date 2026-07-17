
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
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative overflow-hidden bg-slate-100">

        {/* New Badge */}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          NEW
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:bg-red-500 hover:text-white">
          ♡
        </button>

        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">

        <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
          {category}
        </p>

        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <div className="flex items-center justify-between text-sm">
          <span className="text-yellow-500">
            ⭐ {rating}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Colors */}
        {colors && (
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <span
                key={index}
                className="h-5 w-5 rounded-full border"
                style={{
                  backgroundColor: color.toLowerCase(),
                }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-slate-900">
            ৳ {price.toLocaleString()}
          </h2>

        </div>

        <div className="flex gap-3">

          <button className="flex-1 rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-blue-600">
            Add to Cart
          </button>

         <Link
  to={`/products/${product.id}`}
  className="block w-full rounded-xl bg-slate-900 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
>
  View Details
</Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;


