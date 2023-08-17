import { passwordValidation } from '../../../utils/validation';
import { errorMsg } from '../../../utils/variables';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Password ${validFunc}`, () => {
  it('should return empty string for a valid password', () => {
    const validPassword = 'P@ssw0rd';
    const result = passwordValidation(validPassword);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty password`, () => {
    const emptyPassword = '';
    const result = passwordValidation(emptyPassword);
    expect(result).toBe(errorMsg.password.empty);
  });

  it(`${shouldReturnError} a password with length less than 8`, () => {
    const shortPassword = 'Short1';
    const result = passwordValidation(shortPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without an uppercase letter`, () => {
    const lowercasePassword = 'lowercase1!';
    const result = passwordValidation(lowercasePassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a lowercase letter`, () => {
    const uppercasePassword = 'UPPERCASE1!';
    const result = passwordValidation(uppercasePassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a digit`, () => {
    const noDigitPassword = 'NoDigit$';
    const result = passwordValidation(noDigitPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a special character`, () => {
    const noSpecialCharacterPassword = 'NoSpecial123';
    const result = passwordValidation(noSpecialCharacterPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });
});
