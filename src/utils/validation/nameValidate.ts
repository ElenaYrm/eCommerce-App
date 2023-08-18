import { errorMsg } from '../../constant';

export function nameValidate(value: string): string {
  let error: string = '';
  const isValidFirstName = /^[a-zA-Z]+$/.test(value);

  if (!value) {
    error = errorMsg.firstName.empty;
  } else if (!isValidFirstName) {
    error = errorMsg.firstName.invalid;
  }

  return error;
}
