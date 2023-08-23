import { render, screen } from '@testing-library/react';
import { Footer } from '../../../components/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
  });

  test('Should displays current school link and has the right href', () => {
    const schoolLinkElement = screen.getByRole('link', { name: /©2023 RS School/i });
    expect(schoolLinkElement).toBeInTheDocument();
    expect(schoolLinkElement).toHaveAttribute('href', 'https://rs.school/');
  });
});
