import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TabsComponent from "..";

const mockLabels = ["Tab 1", "Tab 2", "Tab 3"];

describe("TabsComponent", () => {
  test("renders tabs with labels", () => {
    render(
      <TabsComponent
        labels={mockLabels}
        selectedTab={0}
        handleChangeTab={() => {}}
      />
    );

    mockLabels.forEach((label) => {
      const tab = screen.getByText(label);
      expect(tab).toBeInTheDocument();
    });
  });

  test("calls handleChangeTab when a tab is clicked", () => {
    const mockHandleChangeTab = jest.fn();
    render(
      <TabsComponent
        labels={mockLabels}
        selectedTab={0}
        handleChangeTab={mockHandleChangeTab}
      />
    );

    fireEvent.click(screen.getByText("Tab 2"));

    expect(mockHandleChangeTab).toHaveBeenCalledWith(1);
  });
});
