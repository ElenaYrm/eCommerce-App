import { errorMsg } from '../variables';

export function emailValidation(value: string): string {
  let error: string = '';
  const isValidEmail = /^[^\s@]+@[^@\s]+\.[^.\s]+$/.test(value.trim());

  if (!value) {
    error = errorMsg.email.empty;
  } else if (!isValidEmail) {
    error = errorMsg.email.invalid;
  }

  return error;
}
