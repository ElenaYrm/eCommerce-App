import { errorMsg } from '../../constant';

export function passwordValidate(value: string): string {
  let error: string = '';
  const MIN_PASSWORD_LENGTH = 8;
  const hasUppercase = /\p{Lu}/u.test(value);
  const hasLowercase = /\p{Ll}/u.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(value);

  if (!value) {
    error = errorMsg.password.empty;
  } else if (value.length < MIN_PASSWORD_LENGTH) {
    error = errorMsg.password.invalid;
  } else if (!hasUppercase) {
    error = errorMsg.password.invalid;
  } else if (!hasLowercase) {
    error = errorMsg.password.invalid;
  } else if (!hasDigit) {
    error = errorMsg.password.invalid;
  } else if (!hasSpecialCharacter) {
    error = errorMsg.password.invalid;
  }

  return error;
}
