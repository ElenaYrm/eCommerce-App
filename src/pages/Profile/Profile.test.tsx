import { render, screen } from '@testing-library/react';
import { Profile } from './index';

describe('Test profile page: ', () => {
  test('should render Profile page', () => {
    render(<Profile />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
