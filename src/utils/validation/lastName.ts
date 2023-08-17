import { errorMsg } from '../../constant';

export function lastNameValidate(value: string): string {
  let error: string = '';
  const isValidFirstName = /^[a-zA-Z]+$/.test(value);

  if (!value) {
    error = errorMsg.lastName.empty;
  } else if (!isValidFirstName) {
    error = errorMsg.lastName.invalid;
  }

  return error;
}
