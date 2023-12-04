import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "..";

describe("Modal Component", () => {
  it("renders modal with title and children", () => {
    const modalTitle = "Test Modal";
    const mockCloseHandler = jest.fn();

    render(
      <Modal
        active={true}
        onClose={mockCloseHandler}
        onClick={() => {}}
        modalTitle={modalTitle}
      >
        <div>Modal Content</div>
      </Modal>
    );

    const modalTitleElement = screen.getByText(modalTitle);
    const modalContentElement = screen.getByText("Modal Content");
    fireEvent.click(modalContentElement);

    expect(modalTitleElement).toBeInTheDocument();
    expect(modalContentElement).toBeInTheDocument();
    expect(mockCloseHandler).not.toHaveBeenCalled();
  });
});
