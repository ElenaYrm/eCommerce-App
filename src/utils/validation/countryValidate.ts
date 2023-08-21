import { errorMsg } from '../../constant';

export function countryValidate(value: string): string {
  let error: string = '';

  if (!value) {
    error = errorMsg.country.empty;
  }

  return error;
}
