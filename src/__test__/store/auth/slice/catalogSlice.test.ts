import { catalogReducer } from '../../../../store/catalog/slice';
import { initialProductListSlice } from '../../../../constant';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/auth/methods', () => {});
jest.mock('../../../../services/sdk/product/methods', () => {});
jest.mock('../../../../services/sdk/customer/methods', () => {});
jest.mock('../../../../services/sdk/catalog/methods', () => {});

describe('Test redux catalog slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = catalogReducer(undefined, { type: '' });
    expect(result).toEqual(initialProductListSlice);
  });
});
