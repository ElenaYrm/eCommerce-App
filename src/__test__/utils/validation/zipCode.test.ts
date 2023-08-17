import { zipCodeValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Zip Code ${validFunc}`, () => {
  it('should return an empty string for a valid zip code', () => {
    const validZipCode = '12345';
    const result = zipCodeValidate(validZipCode);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty value`, () => {
    const emptyValue = '';
    const result = zipCodeValidate(emptyValue);
    expect(result).toBe(errorMsg.zipCode.empty);
  });

  it(`${shouldReturnError} an invalid zip code`, () => {
    const invalidZipCode = '1234';
    const result = zipCodeValidate(invalidZipCode);
    expect(result).toBe(errorMsg.zipCode.invalid);
  });
});
