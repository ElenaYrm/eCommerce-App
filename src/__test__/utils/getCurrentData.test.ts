import { getCurrentDate } from '../../utils/getCurrentDate';

describe('Test getCurrentDate function', () => {
  test('should return the current date in the correct format', () => {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const expectedDayShort = daysOfWeek[currentDate.getDay()];
    const expectedFormattedDate = `${expectedDayShort}, Aug ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
    const result = getCurrentDate();

    expect(result).toBe(expectedFormattedDate);
  });
});
