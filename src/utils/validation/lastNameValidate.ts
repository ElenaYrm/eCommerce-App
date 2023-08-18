import { errorMsg } from '../../constant';

export function lastNameValidate(value: string): string {
  let error: string = '';
  const isValidLastName = /^\p{L}+$/u.test(value);

  if (!value) {
    error = errorMsg.lastName.empty;
  } else if (!isValidLastName) {
    error = errorMsg.lastName.invalid;
  }

  return error;
}
