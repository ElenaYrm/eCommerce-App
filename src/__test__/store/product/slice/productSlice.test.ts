import { productReducer } from '../../../../store/product/slice';
import { initialProductSlice } from '../../../../constant';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/product/methods', () => {});

describe('Test redux product slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = productReducer(undefined, { type: '' });
    expect(result).toEqual(initialProductSlice);
  });
});
