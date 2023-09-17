import { Action } from '@reduxjs/toolkit';
import { catalogReducer, resetProductList } from '../../../../store/catalog/slice';
import { initialProductListSlice } from '../../../../constant';
import { resultCatalogSliceMock } from '../../../../__mocks__/store';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/catalog/methods', () => {});

describe('Test redux catalog slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = catalogReducer(undefined, { type: '' });
    expect(result).toEqual(initialProductListSlice);
  });

  test('should reset product list to initial values with "resetProductList" action', () => {
    const action: Action = { type: resetProductList.type };
    const result = catalogReducer(resultCatalogSliceMock, action);
    expect(result.totalProducts).toEqual(0);
    expect(result.productList).toEqual([]);
  });
});
