import { render, screen } from "@testing-library/react";

import Navbar from "../Navbar";

test("render Navbar", () => {
  render(<Navbar />);
});

test("renders Navbar with eShopping button", () => {
  render(<Navbar />);
  const buttonElement = screen.getByText(/eShopping/i);
  expect(buttonElement).toBeInTheDocument();
});
