import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { Button } from "@mui/material";


it.todo("should render Upgrade Answer Button with the text containing view upgraded answer");
it.todo("should allow the button to be clickable");
it.todo("should render a view all button");
it.todo("should display a list of 5 items");
it.todo("should display a list of 8 items when View All button is clicked");

describe("What renders on Home page", () => {
  render(<Home />);
  it("renders a button called Upgrade Answer", () => {
    const upgradeButton = screen.getByRole("button", {
      name: "View Upgraded Answer",
    });
    expect(upgradeButton).toBeInTheDocument();
  });

  it("should allow the button to be clickable", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(<Button onClick={mockOnClick()} />);
    const clicked = getByRole("button");
    fireEvent.click(clicked);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders a button called View All", () => {
    render(<Home />);
    const viewAllBtn = screen.getByRole("button", {
      name: "View All",
    });
    expect(viewAllBtn).toBeInTheDocument();
  });

  it("should render a list of 5 items", () => {
    render(<Home />);
    const list = screen.getAllByRole("listitem", { name: "" });
    expect(list.length).toEqual(5);
  });

  it("should render a list of 8 items when View All button is clicked", () => {
    render(<Home />);
    const primaryButton = screen.getByRole("button", { name: "View All" });
    fireEvent.click(primaryButton);
    const list = screen.getAllByRole("listitem", { name: "" });
    expect(list.length).toEqual(8);
  });
});
