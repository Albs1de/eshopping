import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    // Wenn das Element sich noch nicht in Carts-Dropdown befindet hinzufügen, ansonsten nicht
    const isItemInCart = cartItem.some((cartItem) => cartItem.id === item.id);

    console.log(item.count);
    if (!isItemInCart) {
      // Wenn das Element nicht im Warenkorb ist wird es hinzugefügt & count wird auf 1 gesetzt, da ein Element
      setCartItem([...cartItem, { ...item, count: 1 }]);
    } else {
      // Wenn das Element schon vorhanden ist, wird count um eins erhöht
      setCartItem(
        cartItem.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                count: cartItem.count + 1,
                price: cartItem.price + cartItem.originalPrice,
              }
            : cartItem
        )
      );
    }
  };
  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
