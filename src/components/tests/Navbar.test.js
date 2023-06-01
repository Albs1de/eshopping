import { render, screen } from "@testing-library/react";
import { CartContext } from "../ShoppingCardProvider";
import Navbar from "../Navbar";

test("render Navbar", () => {
  const cartContextValue = { cartItem: [], countAmount: 0 };

  render(
    <CartContext.Provider value={cartContextValue}>
      <Navbar />
    </CartContext.Provider>
  );
});

test("renders Navbar with eShopping button", () => {
  const cartContextValue = { cartItem: [], countAmount: 0 };

  render(
    <CartContext.Provider value={cartContextValue}>
      <Navbar />
    </CartContext.Provider>
  );
  const buttonElement = screen.getByText(/eShopping/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders Navbar with correct cart count", () => {
  const cartItems = [
    { id: 1, title: "Test Item 1", count: 2 },
    { id: 2, title: "Test Item 2", count: 3 },
  ];

  render(
    <CartContext.Provider value={{ cartItem: cartItems, countAmount: 5 }}>
      <Navbar />
    </CartContext.Provider>
  );

  const cartCountElement = screen.getByText(/5 Items/);
  expect(cartCountElement).toBeInTheDocument();
});
