import { testCases } from '../../__mocks__/utils/getUserAgeMock';
import { getUserAge } from '../../utils/getUserAge';

describe('Test getUserAge', () => {
  it('Should calculate user age correctly', () => {
    testCases.forEach((testCase) => {
      const { date, month, year, expectedAge } = testCase;
      const result = getUserAge(date, month, year);
      expect(result).toBe(expectedAge);
    });
  });
});
