import { render, screen } from '@testing-library/react';
import { Cart } from './index';

describe('Test Cart page: ', () => {
  test('should render Cart page', () => {
    render(<Cart />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});
