import CategoriesMeals from "./CategoriesMeals";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('renders Changed! if the button was clicked', () => {
    // Arrange
    render(<CategoriesMeals/>);

    // // Act
    const buttonElement =  screen.getByTestId('buttonModal');
    userEvent.click(buttonElement)

    // Assert

    const compartiendoElement = screen.getByText("Empanadas", { exact: false });
    expect(compartiendoElement).toBeInTheDocument();
})