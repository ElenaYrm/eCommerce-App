import { errorMsg } from '../../constant';

export function nameValidate(value: string): string {
  let error: string = '';
  const isValidValue = /^[\p{L}\s]+$/u.test(value.trim());

  if (!value) {
    error = errorMsg.firstName.empty;
  } else if (!isValidValue) {
    error = errorMsg.firstName.invalid;
  }

  return error;
}
