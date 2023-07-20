import { render } from "@testing-library/react";
import Homepage from "../../pages/Home";

describe("Homepage", () => {
  it("renders Homepage", () => {
    render(<Homepage />);
  });
});
