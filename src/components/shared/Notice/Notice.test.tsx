import { render, screen } from '@testing-library/react';
import { Notice } from './index';

describe('Test Notice shared component: ', () => {
  test('should render the correct text with styles for text', () => {
    const error = 'Error text';
    const component = render(<Notice text={error} type="text" />);
    expect(component).toMatchSnapshot();

    const errorMessageElement = screen.getByText(error);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test('should render correct error message', () => {
    const error = 'Error message';
    const component = render(<Notice text={error} type="error" />);
    expect(component).toMatchSnapshot();

    const errorMessageElement = screen.getByText(error);
    expect(errorMessageElement).toBeInTheDocument();
  });

  test('Should renders correct success message', () => {
    const success = 'Success message';
    const component = render(<Notice text={success} type="success" />);
    expect(component).toMatchSnapshot();

    const errorMessageElement = screen.getByText(success);
    expect(errorMessageElement).toBeInTheDocument();
  });
});
