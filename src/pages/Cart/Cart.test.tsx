// import { render, screen } from '@testing-library/react';
// import { Cart } from './index';

jest.mock('../../constant/metaData', () => {});
jest.mock('../../services/sdk/auth/methods', () => {});
jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../services/sdk/catalog/methods', () => {});
jest.mock('../../services/sdk/customer/methods', () => {});
jest.mock('../../services/sdk/cart/methods', () => {});

describe('Test Cart page: ', () => {
  test.todo('cart');
  // test('should render Cart page', () => {
  //   render(<Cart />);
  //   expect(screen.getByText('Cart')).toBeInTheDocument();
  // });
});
