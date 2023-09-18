import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmptyMessage from './EmptyMessage';
import { PATH } from '../../../router/constants/paths';
import { Page } from '../../../router/types';

describe('Cart EmptyMessage component', () => {
  it('should render empty cart message.', () => {
    render(
      <MemoryRouter>
        <EmptyMessage />
      </MemoryRouter>,
    );

    const titleElement = screen.getByText(/Cart is empty/i);
    const textElement = screen.getByText(/We highly recommend to check out Scoop’s catalog/i);

    const linkElement = screen.getByRole('link', { name: /To Catalog/i });
    expect(linkElement).toHaveAttribute('href', PATH[Page.Catalog]);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
