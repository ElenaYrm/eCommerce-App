// import { render, screen } from '@testing-library/react';
// import * as reduxHooks from 'react-redux';
// import { Profile } from './index';

jest.mock('react-redux');
jest.mock('../../constant/metaData', () => {});
jest.mock('../../services/sdk/auth/methods', () => {});
jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../services/sdk/catalog/methods', () => {});
jest.mock('../../services/sdk/customer/methods', () => {});

// const useDispatchSpy = jest.spyOn(reduxHooks, 'useDispatch');
// const useSelectorSpy = jest.spyOn(reduxHooks, 'useSelector');

describe('Test Profile page: ', () => {
  test.todo('should render Profile page');
  // test('should render Profile page', () => {
  //   useDispatchSpy.mockReturnValue(jest.fn());
  //   useSelectorSpy.mockReturnValue(jest.fn());
  //
  //   render(<Profile />);
  //   expect(screen.getByText('Profile')).toBeInTheDocument();
  // });
});
