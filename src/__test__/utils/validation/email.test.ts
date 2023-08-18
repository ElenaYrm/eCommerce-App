import { emailValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Email ${validFunc}`, () => {
  it('Should return empty string for a valid email', () => {
    const validEmail = 'test@example.com';
    const result = emailValidate(validEmail);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty email`, () => {
    const emptyEmail = '';
    const result = emailValidate(emptyEmail);
    expect(result).toBe(errorMsg.email.empty);
  });

  it(`${shouldReturnError} an invalid email`, () => {
    const invalidEmail = 'invalid-email';
    const result = emailValidate(invalidEmail);
    expect(result).toBe(errorMsg.email.invalid);
  });
});
