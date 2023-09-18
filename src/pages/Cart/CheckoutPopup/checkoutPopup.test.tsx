import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutPopup from './CheckoutPopup';

const mockHandleClosePopup = jest.fn();

describe('CheckoutPopup component', () => {
  it('should render popup on click on Checkout button.', () => {
    render(<CheckoutPopup handleClosePopup={mockHandleClosePopup} />);

    const headerElement = screen.getByText(/You are awesome 😘😘😘/i);
    const buttonElement = screen.getByRole('button', { name: /Yes, I am/i });

    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    expect(mockHandleClosePopup).toHaveBeenCalledWith(false);
  });
});
