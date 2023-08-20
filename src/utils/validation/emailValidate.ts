import { errorMsg } from '../../constant';

export function emailValidate(value: string): string {
  let error: string = '';
  const isValidEmail = /^[\w]+@([\w]+\.)+[\w]{2,}$/.test(value);
  const hasSpaces = /\s/.test(value);

  if (!value) {
    error = errorMsg.email.empty;
  } else if (!isValidEmail || hasSpaces) {
    error = errorMsg.email.invalid;
  }

  return error;
}
