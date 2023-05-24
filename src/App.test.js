import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders eShopping title", () => {
  render(<App />);
  const linkElement = screen.getByText(/eShopping/i);
  expect(linkElement).toBeInTheDocument();
});
