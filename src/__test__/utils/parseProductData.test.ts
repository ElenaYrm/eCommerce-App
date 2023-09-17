import { parseProductData } from '../../utils';
import { localProductMock, productMockData } from '../../__mocks__/utils';

jest.mock('../../constant', () => {
  return {
    LANG_CODE: 'en-US',
  };
});

describe('Test parseProductData function: ', () => {
  test('should return formatted product data', () => {
    const result = parseProductData(productMockData);
    expect(result).toEqual(localProductMock);
  });
});
