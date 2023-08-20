import { errorMsg } from '../../constant';

export function lastNameValidate(value: string): string {
  let error: string = '';
  const isValid = /^[a-zA-Z\s]+$/.test(value.trim());

  if (!value) {
    error = errorMsg.lastName.empty;
  } else if (!isValid) {
    error = errorMsg.lastName.invalid;
  }

  return error;
}
