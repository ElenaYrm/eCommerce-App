import { passwordValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

describe(`Password ${validFunc}`, () => {
  it('should return empty string for a valid password', () => {
    const validPassword = 'P@ssw0rd';
    const result = passwordValidate(validPassword);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty password`, () => {
    const emptyPassword = '';
    const result = passwordValidate(emptyPassword);
    expect(result).toBe(errorMsg.password.empty);
  });

  it(`${shouldReturnError} a password with length less than 8`, () => {
    const shortPassword = 'Short1';
    const result = passwordValidate(shortPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without an uppercase letter`, () => {
    const lowercasePassword = 'lowercase1!';
    const result = passwordValidate(lowercasePassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a lowercase letter`, () => {
    const uppercasePassword = 'UPPERCASE1!';
    const result = passwordValidate(uppercasePassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a digit`, () => {
    const noDigitPassword = 'NoDigit$';
    const result = passwordValidate(noDigitPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a special character`, () => {
    const noSpecialCharacterPassword = 'NoSpecial123';
    const result = passwordValidate(noSpecialCharacterPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });
});
