import { errorMsg } from '../variables';

export function cityValidate(value: string): string {
  let error: string = '';
  const isValidCity = /^[a-zA-Z]+$/.test(value);

  if (!value || !isValidCity) {
    error = errorMsg.city.invalid;
  }

  return error;
}
