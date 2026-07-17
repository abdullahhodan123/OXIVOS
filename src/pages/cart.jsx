import Container from "../components/common/Container";
import useCart from "../hooks/useCart";

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
    <Container>
      <div className="py-16">
        {/* Page Title */}
        <h1 className="mb-10 text-4xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          
          <div className="space-y-6 lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="rounded-xl border p-10 text-center">
                <h2 className="text-2xl font-semibold">
                  Your cart is empty
                </h2>

                <p className="mt-2 text-slate-500">
                  Add some products to your cart.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 rounded-xl border p-4 shadow-sm"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-lg object-cover"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-slate-600">
                      Price: ৳ {item.price}
                    </p>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center gap-4">
                      <button
                        onClick={() =>
                          decreaseCartQuantity(item.id)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-lg border text-xl hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseCartQuantity(item.id)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-lg border text-xl hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-4 font-bold">
                      Total: ৳{" "}
                      {item.price * item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

         
          <div className="h-fit rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between">
              <span>Total Products</span>
              <span>{totalProducts}</span>
            </div>

            <div className="mt-4 flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>৳ {subtotal}</span>
            </div>

            <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-white transition hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;