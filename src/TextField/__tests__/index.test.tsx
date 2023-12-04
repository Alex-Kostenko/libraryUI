import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { TextField } from "..";

describe("TextField", () => {
  test("renders with label and placeholder", () => {
    render(<TextField label="Test Label" placeholder="Test Placeholder" />);

    const labelElements = screen.getAllByText("Test Label");
    const placeholderElement = screen.getByPlaceholderText("Test Placeholder");

    expect(labelElements.length).toBeGreaterThan(0);
    expect(placeholderElement).toBeInTheDocument();
  });

  test("handles value change", () => {
    render(<TextField label="Test Label" />);

    const inputElement = screen.getByLabelText("Test Label");

    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(inputElement).toHaveValue("New Value");
  });
});
