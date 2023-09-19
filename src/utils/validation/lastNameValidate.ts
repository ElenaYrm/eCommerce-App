import { errorMsg } from '../../constant';

export function lastNameValidate(value: string): string {
  let error: string = '';
  const isValidValue = /^[\p{L}\s]+$/u.test(value.trim());

  if (!value) {
    error = errorMsg.lastName.empty;
  } else if (!isValidValue) {
    error = errorMsg.lastName.invalid;
  }

  return error;
}
