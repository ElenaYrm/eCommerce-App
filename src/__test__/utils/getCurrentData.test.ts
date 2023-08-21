import { getCurrentDate } from '../../utils/getCurrentDate';

describe('getCurrentDate function', () => {
  test('should return the current date in the correct format', () => {
    const currentDate = new Date();
    const expectedDayShort = 'Saturday';
    const expectedFormattedDate = `${expectedDayShort}, Aug ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    const result = getCurrentDate();

    expect(result).toBe(expectedFormattedDate);
  });
});
