import { errorMsg } from '../../constant';

export function streetValidate(value: string): string {
  let error: string = '';

  if (!value) {
    error = errorMsg.street.empty;
  }

  return error;
}
