import { expectedIndexes, months } from '../../__mocks__/utils';
import { getMonthIndex } from '../../utils';

jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../constant', () => 'en-US');

describe('Test getMonthIndex function', () => {
  test('should return the correct month index for each month', () => {
    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      const expectedIndex = expectedIndexes[i] + 1;
      const result = getMonthIndex(month);

      expect(result).toBe(expectedIndex);
    }
  });
});
