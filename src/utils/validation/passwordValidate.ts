import { errorMsg } from '../../constant';

export function passwordValidate(value: string, isShort: boolean): string {
  let error: string = '';
  const MIN_PASSWORD_LENGTH = 8;
  const hasUppercase = /\p{Lu}/u.test(value);
  const hasLowercase = /\p{Ll}/u.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(value);
  const hasSpaces = /\s/.test(value);

  if (!value) {
    error = errorMsg.password.empty;
  } else if (
    value.length < MIN_PASSWORD_LENGTH ||
    !hasUppercase ||
    !hasLowercase ||
    !hasDigit ||
    !hasSpecialCharacter ||
    hasSpaces
  ) {
    if (isShort) {
      error = errorMsg.password.invalidCheck;
    } else {
      error = errorMsg.password.invalid;
    }
  }

  return error;
}
