import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "..";

describe("Checkbox Component", () => {
  it("renders correctly with label", () => {
    render(<Checkbox label="Check me" />);

    const checkboxElement = screen.getByRole("checkbox");
    const labelElement = screen.getByText("Check me");

    expect(checkboxElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  it("handles checkbox state change", () => {
    const handleChange = jest.fn();

    render(<Checkbox label="Check me" onChange={handleChange} />);

    const checkboxElement = screen.getByRole("checkbox");

    fireEvent.click(checkboxElement);

    expect(handleChange).toHaveBeenCalled();
    expect(checkboxElement).toBeChecked();
  });

  it("renders with different label placement", () => {
    render(
      <>
        <Checkbox label="End placement" labelPlacement="end" />
        <Checkbox label="Start placement" labelPlacement="start" />
        <Checkbox label="Top placement" labelPlacement="top" />
        <Checkbox label="Bottom placement" labelPlacement="bottom" />
      </>
    );

    const endPlacement = screen.getByText("End placement");
    const startPlacement = screen.getByText("Start placement");
    const topPlacement = screen.getByText("Top placement");
    const bottomPlacement = screen.getByText("Bottom placement");

    expect(endPlacement.closest("label")).toHaveClass(
      "MuiFormControlLabel-labelPlacementEnd"
    );
    expect(startPlacement.closest("label")).toHaveClass(
      "MuiFormControlLabel-labelPlacementStart"
    );
    expect(topPlacement.closest("label")).toHaveClass(
      "MuiFormControlLabel-labelPlacementTop"
    );
    expect(bottomPlacement.closest("label")).toHaveClass(
      "MuiFormControlLabel-labelPlacementBottom"
    );
  });
});
