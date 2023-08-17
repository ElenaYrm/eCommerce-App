import { emailValidation } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Email ${validFunc}`, () => {
  it('Should return empty string for a valid email', () => {
    const validEmail = 'test@example.com';
    const result = emailValidation(validEmail);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty email`, () => {
    const emptyEmail = '';
    const result = emailValidation(emptyEmail);
    expect(result).toBe(errorMsg.email.empty);
  });

  it(`${shouldReturnError} an invalid email`, () => {
    const invalidEmail = 'invalid-email';
    const result = emailValidation(invalidEmail);
    expect(result).toBe(errorMsg.email.invalid);
  });
});
