

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-blue-600">{product.category}</p>

        <h3 className="mt-2 text-xl font-semibold text-slate-900">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>

          <span className="text-sm text-amber-500">
            ⭐ {product.rating}
          </span>
        </div>

        <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
