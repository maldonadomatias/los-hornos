import { render, screen } from "@testing-library/react";
import MealItem from "./MealItem";

describe("API request", () => {
  test("renders post if request succeeds", async () => {
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [{}],
    // });
    render(<MealItem />);
    const listItemElements = await screen.findAllByRole("listitem", {}, {timeout: 3000});
    expect(listItemElements).not.toHaveLength(0);
  });
});
