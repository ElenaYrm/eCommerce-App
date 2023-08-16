import { lastNameValidate } from '../../../utils/validation';
import { errorMsg } from '../../../utils/variables';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Last name ${validFunc}`, () => {
  it('Should return empty string for a valid Last name', () => {
    const validLastName = 'g';
    const result = lastNameValidate(validLastName);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty Last name`, () => {
    const emptyLastName = '';
    const result = lastNameValidate(emptyLastName);
    expect(result).toBe(errorMsg.lastName.empty);
  });

  it(`${shouldReturnError} an invalid Last name`, () => {
    const invalidLastName = 'G1';
    const result = lastNameValidate(invalidLastName);
    expect(result).toBe(errorMsg.lastName.invalid);
  });
});
