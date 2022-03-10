import { render, screen } from "@testing-library/react";
import MealItem from "./MealItem";
// import { shallow } from 'enzyme';


describe("API request", () => {
  test("renders post if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", name: "First post", price: 0 }],
    });
    render(<MealItem />);

    const listItemElements = await screen.findAllByRole("listitem", {}, {});
    expect(listItemElements).not.toHaveLength(0);
  });
});
