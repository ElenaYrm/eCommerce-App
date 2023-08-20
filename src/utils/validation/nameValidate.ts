import { errorMsg } from '../../constant';

export function nameValidate(value: string): string {
  let error: string = '';
  const isValid = /^[a-zA-Z\s]+$/.test(value.trim());

  if (!value) {
    error = errorMsg.firstName.empty;
  } else if (!isValid) {
    error = errorMsg.firstName.invalid;
  }

  return error;
}
