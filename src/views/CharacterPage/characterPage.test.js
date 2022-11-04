import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import CharacterPage from "./characterPage";
import * as api from "../../api/breakingBadService";

jest.mock("../../api/breakingBadService");

describe("Character", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => jest.clearAllMocks());

  it("should render Character data when api response", async () => {
    api.getCharacter.mockResolvedValue({
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
    });
    render(<CharacterPage />);
    await waitFor(() => {
      screen.getByText("Walter White");
    });
  });

  it("should render error msg when api response", async () => {
    api.getCharacter.mockRejectedValue({});
    render(<CharacterPage />);
    await waitFor(() => {
      screen.getByText("didnt find character");
    });
  });
});
