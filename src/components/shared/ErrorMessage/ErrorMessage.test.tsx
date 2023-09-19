import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '.';

describe('Test ErrorMessage shared component', () => {
  test('Should renders with correct text', () => {
    const errorMessageText = 'Error message';

    render(<ErrorMessage text={errorMessageText} />);

    const errorMessageElement = screen.getByText(errorMessageText);
    expect(errorMessageElement).toBeInTheDocument();
  });
});
