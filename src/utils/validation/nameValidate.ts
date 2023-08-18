import { errorMsg } from '../../constant';

export function nameValidate(value: string): string {
  let error: string = '';
  const isValidFirstName = /^\p{L}+$/u.test(value);

  if (!value) {
    error = errorMsg.firstName.empty;
  } else if (!isValidFirstName) {
    error = errorMsg.firstName.invalid;
  }

  return error;
}
