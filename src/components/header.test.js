import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  afterEach(() => {
    cleanup();
  });

  it("render header component", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    const logo = "logo.png";
    expect(headerElement).toContainHTML(`<img src=${logo} alt="" />`);
  });
});
