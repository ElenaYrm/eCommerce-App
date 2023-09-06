import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Test Loader shared component', () => {
  test('Should Loader component renders "Loading..." text', () => {
    const { getByText } = render(<Loader />);

    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
