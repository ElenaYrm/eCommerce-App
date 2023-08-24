import { dateMYValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Test Date month year ${validFunc}`, () => {
  it('should return empty string for a valid date format and age', () => {
    const validDate = '20may1993';
    const result = dateMYValidate(validDate);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an invalid date format`, () => {
    const invalidDate = '20';
    const result = dateMYValidate(invalidDate);
    expect(result).toBe(errorMsg.date.empty);
  });

  it(`${shouldReturnError} a user under the minimum age`, () => {
    const youngDate = '20may2022';
    const result = dateMYValidate(youngDate);
    expect(result).toBe(errorMsg.date.invalid);
  });
});
