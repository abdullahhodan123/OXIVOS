import Container from "../components/common/Container";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16">
      <Container>
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Your Cart
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Shopping Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
            <div className="text-6xl">🛒</div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Your cart is empty
            </h2>
            <p className="mt-3 text-slate-600">
              Looks like you haven't added anything yet.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        ৳ {item.price.toLocaleString()} each
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseCartQuantity(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-lg transition hover:bg-slate-100"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseCartQuantity(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-lg transition hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-lg font-bold text-slate-900">
                        ৳ {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <h2 className="text-xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-slate-100 pb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Items ({totalProducts})</span>
                  <span>৳ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>৳ {subtotal.toLocaleString()}</span>
              </div>

              <Link
                to="/checkout"
                className="mt-6 block w-full rounded-xl bg-slate-900 py-3.5 text-center font-semibold text-white transition hover:bg-blue-600"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="mt-3 block w-full rounded-xl border border-slate-200 py-3 text-center text-sm font-medium text-slate-600 transition hover:border-blue-600 hover:text-blue-600"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Cart;
