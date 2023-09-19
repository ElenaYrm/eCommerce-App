import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Test Button shared component', () => {
  test('Should renders with correct props', () => {
    const props = {
      type: 'submit',
      name: 'Submit',
      className: 'submit-in-test-button',
    } as const;

    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: /Submit/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'submit');
    expect(buttonElement).toHaveClass('submit-in-test-button');
  });
});
