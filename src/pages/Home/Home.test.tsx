import { render, screen } from '@testing-library/react';
import { Home } from '../Home';
import * as reduxHooks from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-redux');
jest.mock('../../constant/metaData', () => {});
jest.mock('../../services/sdk/auth/methods', () => {});
jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../services/sdk/catalog/methods', () => {});
jest.mock('../../services/sdk/customer/methods', () => {});

const useDispatchSpy = jest.spyOn(reduxHooks, 'useDispatch');

describe('Test Home page: ', () => {
  test('should render Home page without success register message', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(false);
    useDispatchSpy.mockReturnValue(jest.fn());
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  test('should render Home page with success register message', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(true);
    useDispatchSpy.mockReturnValue(jest.fn());
    const component = render(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByText('Hello and welcome!ヾ(☆▽☆)')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
