import { useParams } from "react-router-dom";
import products from "../data/product";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import useCart from "../hooks/useCart";







function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const increaseQuantity = () => {
  setQuantity(quantity + 1);
};


const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Container>
        <h2 className="py-20 text-center text-2xl font-bold">
          Product Not Found
        </h2>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid gap-10 py-16 md:grid-cols-2">

        {/* Left */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl"
          />
        </div>

        {/* Right */}
        <div>

          <div className="mb-8 text-sm text-slate-500">
  <Link to="/" className="hover:text-blue-600">
    Home
  </Link>

  <span className="mx-2">/</span>

  <span>{product.category}</span>

  <span className="mx-2">/</span>

  <span className="font-semibold text-slate-900">
    {product.name}
  </span>
</div>

          <h1 className="mt-2 text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-xl text-yellow-500">
            ⭐ {product.rating}
          </p>
    <div className="mt-4">      
  <span
    className={`rounded-full px-4 py-2 text-sm font-semibold ${
      product.inStock
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {product.inStock ? "✔ In Stock" : "✖ Out of Stock"}
  </span>
</div>

<div className="mt-8">
  <h3 className="mb-3 font-semibold text-slate-900">
    Available Colors
  </h3>

  <div className="flex gap-3">
    {product.colors?.map((color, index) => (
      <div
        key={index}
        className="h-8 w-8 rounded-full border-2 border-slate-300"
        style={{
          backgroundColor: color.toLowerCase(),
        }}
      />
    ))}
  </div>
</div>

<div className="mt-8">
  <h3 className="mb-3 font-semibold text-slate-900">
    Select Size
  </h3>

  <div className="flex flex-wrap gap-3">
    {product.sizes?.map((size) => (
      <button
        key={size}
        className="rounded-lg border border-slate-300 px-5 py-2 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
      >
        {size}
      </button>
    ))}
  </div>
</div>


          <h2 className="mt-6 text-3xl font-bold">
            ৳ {product.price.toLocaleString()}
          </h2>

          <div className="mt-8">
  <h3 className="mb-3 font-semibold text-slate-900">
    Quantity
  </h3>

  <div className="flex items-center gap-4">

    <button
      onClick={decreaseQuantity}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-xl hover:bg-slate-100"
    >
      -
    </button>

    <span className="w-10 text-center text-lg font-semibold">
      {quantity}
    </span>

    <button
      onClick={increaseQuantity}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-xl hover:bg-slate-100"
    >
      +
    </button>

  </div>
</div>

          <p className="mt-6 text-slate-600">
            {product.description}
          </p>

        </div>

      </div>
      <button
  onClick={() => addToCart(product)}
  className="mt-8 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-blue-600"
>
  Add to Cart
</button>
    </Container>
  );
}

export default ProductDetails;