import { errorMsg } from '../../constant';

export function cityValidate(value: string): string {
  let error: string = '';
  const isValidCity = /^\p{L}+$/u.test(value);

  if (!value || !isValidCity) {
    error = errorMsg.city.invalid;
  }

  return error;
}
