import { errorMsg } from '../variables';

export function streetValidate(value: string): string {
  let error: string = '';

  if (!value) {
    error = errorMsg.street.empty;
  }

  return error;
}
