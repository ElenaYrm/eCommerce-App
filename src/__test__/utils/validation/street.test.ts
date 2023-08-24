import { streetValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Test Street ${validFunc}`, () => {
  it('Should return empty string for a valid street', () => {
    const validStreet = '1';
    const result = streetValidate(validStreet);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty street`, () => {
    const emptyStreet = '';
    const result = streetValidate(emptyStreet);
    expect(result).toBe(errorMsg.street.empty);
  });
});
