import { extractLocalCart } from '../../utils/extractLocalCart';
import { cartMock, localCartMock } from '../../__mocks__/utils';

jest.mock('../../constant', () => {
  return {
    LANG_CODE: 'en-US',
  };
});

describe('Test extractLocalCart function: ', () => {
  test('should return the local cart object with only necessary fields', () => {
    const result = extractLocalCart(cartMock);
    expect(result).toEqual(localCartMock);
  });
});
