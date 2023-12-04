import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeaderComponent } from "..";

describe("HeaderComponent", () => {
  it("renders with logo and content", () => {
    const logoElement = <img src="/path/to/logo.png" alt="Logo" />;
    const leftContent = <div>Left Content</div>;
    const middleContent = <a href="/path/to/middle">Middle Content</a>;
    const rightContent = <button>Right Content</button>;

    render(
      <HeaderComponent
        logo={logoElement}
        left={leftContent}
        middle={middleContent}
        right={rightContent}
      />
    );

    const logo = screen.getByAltText("Logo");
    const left = screen.getByText("Left Content");
    const middle = screen.getByText("Middle Content");
    const right = screen.getByText("Right Content");

    expect(logo).toBeInTheDocument();
    expect(left).toBeInTheDocument();
    expect(middle).toBeInTheDocument();
    expect(right).toBeInTheDocument();
  });
});
