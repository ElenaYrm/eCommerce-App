import { errorMsg } from '../../constant';

export function zipCodeValidate(value: string): string {
  let error: string = '';
  const isValidZipCode = /^\d{5}$/.test(value);

  if (!value) {
    error = errorMsg.zipCode.empty;
  } else if (!isValidZipCode) {
    error = errorMsg.zipCode.invalid;
  }

  return error;
}
