import { errorMsg } from '../../constant';
import { getUserAge } from '../getUserAge';

export function dateMYValidate(value: string): string {
  let error: string = '';
  const trimValue = value.trim();
  const regex = /^\d{1,2}\p{L}+\d{4}$/u;
  const isValid = regex.test(trimValue);

  if (!isValid) {
    error = errorMsg.date.empty;
  } else if (isValid) {
    const parts = trimValue.match(/\d+|[a-zA-Z]+/g);
    if (parts) {
      const [date, month, year] = parts;
      const MIN_AGE = 13;
      const userAge = getUserAge(new Date(), date, month, year);

      if (userAge < MIN_AGE) {
        error = errorMsg.date.invalid;
      }
    }
  }

  return error;
}
