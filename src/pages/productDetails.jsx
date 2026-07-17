import { useParams, Link } from "react-router-dom";
import products from "../data/Product";
import Container from "../components/common/Container";
import { useState } from "react";
import useCart from "../hooks/useCart";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Product Not Found</h2>
          <p className="mt-3 text-slate-600">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Browse Products
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 lg:py-20">
      <Container>
        <nav className="mb-8 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="transition hover:text-blue-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-slate-900">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {product.category}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  product.inStock
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold text-slate-900 lg:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
              <span className="text-amber-500">★ {product.rating}</span>
              <span>•</span>
              <span>Premium Quality</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              ৳ {product.price.toLocaleString()}
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              {product.description}
            </p>

            {product.colors && product.colors.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">
                  Available Colors
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 rounded-full border-2 border-slate-200 transition hover:scale-110"
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-slate-900">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-xl transition hover:bg-slate-100"
                >
                  -
                </button>
                <span className="w-10 text-center text-lg font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-xl transition hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`mt-8 w-full rounded-xl py-4 font-semibold text-white transition ${
                added
                  ? "bg-emerald-500"
                  : product.inStock
                    ? "bg-slate-900 hover:bg-blue-600"
                    : "cursor-not-allowed bg-slate-400"
              }`}
            >
              {added ? "✓ Added to Cart" : product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductDetails;
