import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import EpisodePage from "./episodePage";
import { BrowserRouter, Router } from "react-router-dom";
import * as api from "../../api/breakingBadService";
jest.mock("../../api/breakingBadService");

const MockEpisodePage = () => {
  return (
    <BrowserRouter>
      <EpisodePage />
    </BrowserRouter>
  );
};

describe("Episode Page", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => jest.clearAllMocks());

  it("should render episode", async () => {
    api.getSingleEpisode.mockResolvedValue({
      title: "Gray Matter",
      season: "1",
      air_date: "02-24-2008",
      characters: ["Walter White", "Jesse Pinkman", "Skyler White"],
      episode: "5",
      series: "Breaking Bad",
    });
    render(<MockEpisodePage />);
    await waitFor(() => {
      screen.getByText("Title: Gray Matter");
    });
  });
});
