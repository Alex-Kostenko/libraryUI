import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Calendar } from "..";

describe("Calendar Component", () => {
  it("renders with default date and label", () => {
    const defaultValue = new Date("2023-12-05");
    const mockSetValue = jest.fn();

    render(
      <Calendar
        label="Test Date"
        value={defaultValue}
        setValue={mockSetValue}
        disablePast={true}
        colorIcon="#2146AF"
        className="test-calendar"
      />
    );

    const inputElement = screen.getByLabelText("Test Date");
  });

  it("allows selecting a new date", () => {
    const mockSetValue = jest.fn();
    render(<Calendar setValue={mockSetValue} />);

    const calendarIcon = screen.getByTestId("calendar-icon");
    fireEvent.click(calendarIcon);

    const newDateOption = screen.getByText("15");
    fireEvent.click(newDateOption);

    expect(mockSetValue).toHaveBeenCalled();
    expect(mockSetValue).toHaveBeenCalledWith(expect.any(Date));
  });
});
