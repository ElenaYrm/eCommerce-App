import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';
import { Profile } from './index';
import { initialUserMock } from '../../__mocks__/store';
import { ModeProvider } from '../../context/mode/ModeProvider';

jest.mock('react-redux');
jest.mock('react-router-dom');
jest.mock('../../constant/metaData', () => {});
jest.mock('../../services/sdk/auth/methods', () => {});
jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../services/sdk/catalog/methods', () => {});
jest.mock('../../services/sdk/customer/methods', () => {});
jest.mock('../../services/sdk/cart/methods', () => {});

const useDispatchSpy = jest.spyOn(reduxHooks, 'useDispatch');
const useSelectorSpy = jest.spyOn(reduxHooks, 'useSelector');
const useNavigateSpy = jest.spyOn(routerHooks, 'useNavigate');

describe('Test Profile page: ', () => {
  test('should render Profile page', () => {
    useNavigateSpy.mockReturnValue(jest.fn());
    useDispatchSpy.mockReturnValue(jest.fn());
    useSelectorSpy
      .mockReturnValueOnce(() => true)
      .mockReturnValueOnce(() => initialUserMock)
      .mockReturnValueOnce(() => ({ status: 'success', error: '' }));

    render(
      <ModeProvider>
        <Profile />
      </ModeProvider>,
    );
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });
});
