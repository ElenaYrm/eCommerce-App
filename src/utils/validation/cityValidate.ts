import { errorMsg } from '../../constant';

export function cityValidate(value: string): string {
  let error: string = '';
  const isValidValue = /^[\p{L}\s]+$/u.test(value.trim());

  if (!value) {
    error = errorMsg.city.empty;
  } else if (!isValidValue) {
    error = errorMsg.city.invalid;
  }

  return error;
}
