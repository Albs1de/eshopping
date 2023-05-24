import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    // Wenn das Element sich noch nicht in Carts-Dropdown befindet hinzufügen, ansonsten nicht
    const isItemInCart = cartItem.some((cartItem) => cartItem.id === item.id);
    if (!isItemInCart) {
      setCartItem([...cartItem, item]);
    }
  };
  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
