import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Test Loader shared component', () => {
  test('renders the Loader component', () => {
    render(<Loader />);
  });
});
