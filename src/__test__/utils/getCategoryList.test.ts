import { getCategoryList } from '../../utils';
import { categoriesMockData, localCategoriesMock } from '../../__mocks__/utils/categoriesMockData';

jest.mock('../../constant', () => {
  return {
    LANG_CODE: 'en-US',
  };
});

describe('Test getCategoryList function: ', () => {
  test('should return the formatted list of categories', () => {
    const result = getCategoryList(categoriesMockData);
    expect(result).toEqual(localCategoriesMock);
  });
});
