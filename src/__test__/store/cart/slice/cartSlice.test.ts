import { Action } from '@reduxjs/toolkit';
import { initialCartSlice } from '../../../../constant';
import { cartReducer, resetCart } from '../../../../store/cart/slice';
import { resultCartSliceMock } from '../../../../__mocks__/store';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/cart/methods', () => {});

describe('Test redux cart slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = cartReducer(undefined, { type: '' });
    expect(result).toEqual(initialCartSlice);
  });

  test('should reset basket to initial values with "resetCart" action', () => {
    const action: Action = { type: resetCart.type };
    const result = cartReducer(resultCartSliceMock, action);
    expect(result.basket).toEqual(initialCartSlice.basket);
  });
});
