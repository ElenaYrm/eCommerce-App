import { expectedIndexes, months } from '../../__mocks__/utils/getMonthIndexMock';
import { getMonthIndex } from '../../utils';

describe('getMonthIndex function', () => {
  test('should return the correct month index for each month', () => {
    for (let i = 0; i < months.length; i++) {
      const month = months[i];
      const expectedIndex = expectedIndexes[i] + 1;
      const result = getMonthIndex(month);

      expect(result).toBe(expectedIndex);
    }
  });
});
