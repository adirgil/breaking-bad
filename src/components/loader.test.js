import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Loader from "./loader";

describe("Loader", () => {
  afterEach(() => {
    cleanup();
  });

  it("render loader component", () => {
    render(<Loader visible={false} />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
