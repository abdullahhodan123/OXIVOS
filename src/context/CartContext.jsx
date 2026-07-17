import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Increase quantity
  const increaseCartQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseCartQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;