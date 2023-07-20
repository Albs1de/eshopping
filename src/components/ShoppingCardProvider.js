import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [countAmount, setCountAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Update den Gesamtpreis, wenn sich cartItem verändert
  useEffect(() => {
    const totalPrice = cartItem.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItem]);

  const addToCart = (item) => {
    // Wenn das Element sich noch nicht in Carts-Dropdown befindet hinzufügen, ansonsten nicht
    const isItemInCart = cartItem.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      // Wenn das Element nicht im Warenkorb ist wird es hinzugefügt & count wird auf 1 gesetzt, da ein Element
      setCountAmount(countAmount + 1);
      setCartItem([...cartItem, { ...item, count: 1 }]);
    } else {
      setCountAmount(countAmount + 1);
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
  const decreaseAmount = (item) => {
    const isItemInCart = cartItem.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItem(
        cartItem.map((cartItem) =>
          cartItem.id === item.id && cartItem.count > 0
            ? {
                ...cartItem,
                count: cartItem.count - 1,
              }
            : cartItem
        )
      );
    }
  };

  const deleteFromCart = (item) => {
    const isItemInCart = cartItem.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      const itemToDelete = cartItem.find((cartItem) => cartItem.id === item.id);
      if (itemToDelete.count > 1) {
        setCartItem(
          cartItem.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  count: cartItem.count - 1,
                }
              : cartItem
          )
        );
      } else {
        setCartItem(cartItem.filter((cartItem) => cartItem.id !== item.id));
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        countAmount,
        totalPrice,
        setCountAmount,
        decreaseAmount,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
