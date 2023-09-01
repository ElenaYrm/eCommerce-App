import { getCurrentDate } from '../../utils';

jest.mock('../../constant', () => {});

describe('Test getCurrentDate function', () => {
  test('should return the current date in the correct format', () => {
    const currentDate = new Date();
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const expectedDayShort = daysOfWeek[currentDate.getDay()];
    const expectedMonth = month[currentDate.getMonth()];
    const expectedDate = currentDate.getDate();
    const expectedFormattedDate = `${expectedDayShort}, ${expectedMonth} ${
      String(expectedDate).length > 1 ? expectedDate : '0' + expectedDate
    }, ${currentDate.getFullYear()}`;
    const result = getCurrentDate();

    expect(result).toBe(expectedFormattedDate);
  });
});
