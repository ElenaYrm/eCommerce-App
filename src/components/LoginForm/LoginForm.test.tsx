import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reduxHooks from 'react-redux';
import { LoginForm } from './index';
import { initialCartSlice } from '../../constant';

jest.mock('react-redux');
jest.mock('../../constant/metaData', () => {});
jest.mock('../../services/sdk/auth/methods', () => {});
jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../services/sdk/catalog/methods', () => {});
jest.mock('../../services/sdk/customer/methods', () => {});
jest.mock('../../services/sdk/cart/methods', () => {});

const useDispatchSpy = jest.spyOn(reduxHooks, 'useDispatch');
const useSelectorSpy = jest.spyOn(reduxHooks, 'useSelector');

describe('Test LoginForm component: ', () => {
  test('should create LoginForm', () => {
    useDispatchSpy.mockReturnValue(jest.fn());
    const component = render(<LoginForm />);
    expect(component).toMatchSnapshot();
  });

  test('should dispatch action on submit', async () => {
    useSelectorSpy.mockReturnValue(() => initialCartSlice.basket);
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    render(<LoginForm />);

    const submitBtn = screen.getByText('Login ( ^ω^)');
    expect(submitBtn).toBeInTheDocument();
    await userEvent.click(submitBtn);
    expect(mockDispatchFn).not.toHaveBeenCalled();

    const email = screen.getByPlaceholderText('Email');
    expect(email).toBeInTheDocument();
    await userEvent.type(email, 'test@test.com');
    expect(email).toHaveValue('test@test.com');

    const password = screen.getByPlaceholderText('Password');
    expect(email).toBeInTheDocument();
    await userEvent.type(password, 'testTest1!');
    expect(password).toHaveValue('testTest1!');

    await userEvent.click(submitBtn);
    expect(mockDispatchFn).toHaveBeenCalled();
  });
});
