import { productReducer } from '../../../../store/product/slice/index.ts';
import { initialProductSlice } from '../../../../constant';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/auth/methods', () => {});
jest.mock('../../../../services/sdk/product/methods', () => {});
jest.mock('../../../../services/sdk/catalog/methods', () => {});
jest.mock('../../../../services/sdk/customer/methods', () => {});

describe('Test redux product slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = productReducer(undefined, { type: '' });
    expect(result).toEqual(initialProductSlice);
  });
});
