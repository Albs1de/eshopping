import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ShoppingCard from "../ShoppingCard";

describe("ShoppingCard", () => {
  // Überprüft ob der Titel und die Beschreibung korrekt gerendert werden
  test("renders the title and description", () => {
    render(
      <ShoppingCard
        title="Test Title"
        description="Test Description"
        onClick={() => {}}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  // Test der überprüft, ob die onClick-Funktion aufgerufen wird wenn der Button geklickt wird.
  test("calls onClick when the button is clicked", () => {
    const handleClick = jest.fn();

    render(
      <ShoppingCard
        title="Test Title"
        description="Test Description"
        onClick={handleClick}
      />
    );

    userEvent.click(screen.getByText("Buy now"));

    expect(handleClick).toHaveBeenCalled();
  });
});
