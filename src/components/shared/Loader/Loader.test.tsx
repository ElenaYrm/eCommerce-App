import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Test Loader component: ', () => {
  test('should render "Loading..." text', () => {
    const component = render(<Loader type="text" />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  test('should render spinner', () => {
    const component = render(<Loader type="spinner" />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  test('should render spinner', () => {
    const component = render(<Loader type="points" />);

    expect(screen.getByTestId('points')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
