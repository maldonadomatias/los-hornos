import { render, screen } from "@testing-library/react";
import MealsSummary from "./MealsSummary";
import '@testing-library/jest-dom';


describe("Async component", () => {
    test("renders '32 años compartiendo' as a text", () => {
        //Arrange
        render(<MealsSummary />);
    
        //Act
        // ... nothing
    
        //Assert
        const compartiendoElement = screen.getByText("32 años compartiendo", { exact: false });
        expect(compartiendoElement).toBeInTheDocument();
      });
});
