import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImgComponent } from "..";

describe("ImgComponent", () => {
  it("renders children and handles click", () => {
    const mockClickHandler = jest.fn();
    const childElement = <img src="/path/to/image.png" alt="Image" />;

    render(
      <ImgComponent onClick={mockClickHandler}>{childElement}</ImgComponent>
    );

    const image = screen.getByAltText("Image");

    expect(image).toBeInTheDocument();

    fireEvent.click(image);
    expect(mockClickHandler).toHaveBeenCalled();
  });
});
