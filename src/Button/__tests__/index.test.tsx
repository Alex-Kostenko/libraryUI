import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonComponent } from "..";

describe("ButtonComponent", () => {
  it("renders with children", () => {
    render(<ButtonComponent>Click me</ButtonComponent>);

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeTruthy();
  });

  it("applies dark mode", () => {
    render(<ButtonComponent mode="dark">Dark Button</ButtonComponent>);

    const buttonElement = screen.getByText("Dark Button");
    // const buttonElement = screen.getByRole("button", { name: "Dark Button" }); ALTERNATIVE
    console.log(buttonElement.outerHTML);
    expect(buttonElement).toHaveAttribute("mode", "dark");
  });

  it("applies light mode", () => {
    render(<ButtonComponent mode="light">Light Button</ButtonComponent>);

    const buttonElement = screen.getByText("Light Button");
    expect(buttonElement).toHaveAttribute("mode", "light");
  });

  it("applies different variants", () => {
    render(
      <ButtonComponent variant="contained">Contained Button</ButtonComponent>
    );
    render(
      <ButtonComponent variant="outlined">Outlined Button</ButtonComponent>
    );
    render(<ButtonComponent variant="text">Text Button</ButtonComponent>);

    const containedButton = screen.getByText("Contained Button");
    const outlinedButton = screen.getByText("Outlined Button");
    const textButton = screen.getByText("Text Button");

    expect(containedButton).toHaveClass("MuiButton-contained");
    expect(outlinedButton).toHaveClass("MuiButton-outlined");
    expect(textButton).toHaveClass("MuiButton-text");
  });

  it("handles click events", () => {
    const onClickMock = jest.fn();

    render(<ButtonComponent onClick={onClickMock}>Click me</ButtonComponent>);

    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies size", () => {
    render(<ButtonComponent size="small">Small Button</ButtonComponent>);
    render(<ButtonComponent size="medium">Medium Button</ButtonComponent>);
    render(<ButtonComponent size="large">Large Button</ButtonComponent>);

    const smallButton = screen.getByText("Small Button");
    const mediumButton = screen.getByText("Medium Button");
    const largeButton = screen.getByText("Large Button");

    expect(smallButton).toHaveClass("MuiButton-sizeSmall");
    expect(mediumButton).toHaveClass("MuiButton-sizeMedium");
    expect(largeButton).toHaveClass("MuiButton-sizeLarge");
  });

  it("applies custom class name", () => {
    render(
      <ButtonComponent className="custom-class">
        Custom Class Button
      </ButtonComponent>
    );

    const buttonElement = screen.getByText("Custom Class Button");
    expect(buttonElement).toHaveClass("custom-class");
  });
});
