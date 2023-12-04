import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectComponent } from "..";

const mockMenuItems = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("SelectComponent", () => {
  test("renders with label and options", () => {
    render(
      <SelectComponent
        label="Test Label"
        menuItems={mockMenuItems}
        className="test-select"
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    fireEvent.mouseDown(select);

    mockMenuItems.forEach((item) => {
      const option = screen.getByText(item.label);
      expect(option).toBeInTheDocument();
    });
  });

  test("calls onChange handler when an option is selected", () => {
    const mockOnChange = jest.fn();
    render(
      <SelectComponent
        label="Test Label"
        menuItems={mockMenuItems}
        className="test-select"
        onChange={mockOnChange}
      />
    );

    const select = screen.getByRole("combobox");

    fireEvent.mouseDown(select);

    fireEvent.click(screen.getByText("Option 1"));
  });
});
