import { testCases } from '../../__mocks__/utils';
import { getUserAge } from '../../utils/getUserAge';

describe('Test getUserAge function', () => {
  test('should calculate the correct user age', () => {
    for (const testCase of testCases) {
      const result = getUserAge(new Date('2023-09-15'), testCase.date, testCase.month, testCase.year);
      expect(result).toBe(testCase.expectedAge);
    }
  });
});
