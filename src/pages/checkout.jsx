import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function Checkout() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Your cart is empty
          </h2>
          <p className="mt-4 text-slate-600">
            Add some products before checkout.
          </p>
          <Link
            to="/products"
            className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-16">
        <h1 className="mb-10 text-4xl font-bold text-slate-900">Checkout</h1>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-slate-900">
                Shipping Information
              </h2>

              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Shipping Address
                  </label>
                  <textarea
                    rows={3}
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="House, Road, Area, City"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Dhaka"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="1200"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-900">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">
                      x{item.quantity}
                    </p>
                  </div>
                  <span className="font-semibold">
                    ৳ {item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>৳ {subtotal}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-slate-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>৳ {subtotal}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
              Place Order
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              By placing your order you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Checkout;
