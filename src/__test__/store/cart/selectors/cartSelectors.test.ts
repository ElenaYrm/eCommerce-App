import { initialCartMock, storeMock } from '../../../../__mocks__/storeMock';
import {
  selectCart,
  selectCartData,
  selectCartError,
  selectCartLoadingInfo,
  selectCartLoadingStatus,
  selectDiscountsCodes,
} from '../../../../store/cart/selectors';

jest.mock('../../../../constant/metaData', () => {});

describe('Test redux cart selectors: ', () => {
  test('should select basket from the store', () => {
    const result = selectCart(storeMock);
    expect(result).toEqual(initialCartMock.basket);
  });

  test('should select cart loading status from the store', () => {
    const result = selectCartLoadingStatus(storeMock);
    expect(result).toEqual(initialCartMock.status);
  });

  test('should select cart error from the store', () => {
    const result = selectCartError(storeMock);
    expect(result).toEqual(initialCartMock.error);
  });

  test('should select cart discounts from the store', () => {
    const result = selectDiscountsCodes(storeMock);
    expect(result).toEqual(initialCartMock.discounts);
  });

  test('should select cart loading status and error from the store', () => {
    const result = selectCartLoadingInfo(storeMock);
    expect(result).toEqual({
      status: initialCartMock.status,
      error: initialCartMock.error,
    });
  });

  test('should select basket and discounts from the store', () => {
    const result = selectCartData(storeMock);
    expect(result).toEqual({
      basket: initialCartMock.basket,
      discounts: initialCartMock.discounts,
    });
  });
});
