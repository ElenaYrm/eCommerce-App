import { errorMsg } from '../../constant';

export function cityValidate(value: string): string {
  let error: string = '';
  const isValidCity = /^[a-zA-Z\s]+$/.test(value.trim());

  if (!value) {
    error = errorMsg.city.empty;
  } else if (!isValidCity) {
    error = errorMsg.city.invalid;
  }

  return error;
}
