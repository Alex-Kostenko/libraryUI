import { render, screen } from "@testing-library/react";
import { Tag } from "..";
import React from "react";
import "@testing-library/jest-dom";

describe("Tag", () => {
  test("renders with children", () => {
    render(<Tag>Hello, World!</Tag>);

    const tagElement = screen.getByText("Hello, World!");
    expect(tagElement).toBeInTheDocument();
  });
});
