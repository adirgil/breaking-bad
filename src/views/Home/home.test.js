import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";
import * as api from "../../api/breakingBadService";
jest.mock("../../api/breakingBadService");

const mokedData = [
  {
    episode_id: 1,
    title: "Pilot",
    season: "1",
    air_date: "01-20-2008",
    characters: ["Walter White", "Jesse Pinkman"],
    episode: "1",
  },
  {
    episode_id: 2,
    title: "Cat's in the Bag...",
    season: "1",
    air_date: "01-27-2008",
    characters: ["Walter White", "Jesse Pinkman"],
    episode: "2",
  },
];

const MockHomePage = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => jest.clearAllMocks());

  it("should render episodes items", async () => {
    api.getEpisodesList.mockResolvedValue(mokedData);
    render(<MockHomePage />);
    const episodeElement = await waitFor(() =>
      screen.findByTestId("episode-number-1")
    );
    expect(episodeElement).toBeInTheDocument();
  });
});
