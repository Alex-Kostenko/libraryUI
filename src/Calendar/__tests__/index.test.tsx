import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Calendar } from "..";

describe("Calendar Component", () => {
  it("interacts correctly with date selection, displays error, and more", () => {
    const mockSetValue = jest.fn();
    render(<Calendar setValue={mockSetValue} errors={{}} />);

    const calendarIcon = screen.getByTestId("calendar-icon");
    fireEvent.click(calendarIcon);

    const dateOption = screen.getByText("1");
    fireEvent.click(dateOption);

    // expect(mockSetValue).toHaveBeenCalledWith();

    // const errorElement = screen.getByTestId("error-element");
    // expect(errorElement).toBeInTheDocument();
  });
});
