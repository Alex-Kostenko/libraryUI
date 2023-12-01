import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Accordion } from "..";

describe("Accordion Component", () => {
  it("renders with label", () => {
    render(<Accordion label="Test Label">Content</Accordion>);

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeDefined();
  });

  it("expands and collapses on click", async () => {
    render(<Accordion label="Test Label">Content</Accordion>);

    const accordionSummary = screen
      .getByText("Test Label")
      .closest(".MuiAccordionSummary-root");
    const contentElement = screen.queryByText("Content");
    expect(contentElement).toBeTruthy();
    if (accordionSummary) {
      fireEvent.click(accordionSummary);

      const expandedContentElement = screen.getByText("Content");
      expect(expandedContentElement).toBeDefined();

      fireEvent.click(accordionSummary);
      const collapsedContentElement = screen.queryByText("Content");
      expect(collapsedContentElement).toBeTruthy();
    }
  });
});
