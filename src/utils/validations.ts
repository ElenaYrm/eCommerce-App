import { errorMsg } from './variables';
import { getUserAge } from './getUserAge';

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

export function passwordValidation(value: string): string {
  let error: string = '';
  const MIN_PASSWORD_LENGTH = 8;
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(value);

  if (!value) {
    error = errorMsg.password.empty;
  } else if (value.length < MIN_PASSWORD_LENGTH) {
    error = errorMsg.password.invalid;
  } else if (!hasUppercase) {
    error = errorMsg.password.invalid;
  } else if (!hasLowercase) {
    error = errorMsg.password.invalid;
  } else if (!hasDigit) {
    error = errorMsg.password.invalid;
  } else if (!hasSpecialCharacter) {
    error = errorMsg.password.invalid;
  }

  return error;
}

export function nameValidate(value: string): string {
  let error: string = '';
  const isValidFirstName = /^[a-zA-Z]+$/.test(value);

  if (!value) {
    error = errorMsg.firstName.empty;
  } else if (!isValidFirstName) {
    error = errorMsg.firstName.invalid;
  }

  return error;
}

export function lastNameValidate(value: string): string {
  let error: string = '';
  const isValidFirstName = /^[a-zA-Z]+$/.test(value);

  if (!value) {
    error = errorMsg.lastName.empty;
  } else if (!isValidFirstName) {
    error = errorMsg.lastName.invalid;
  }

  return error;
}

export function streetValidate(value: string): string {
  let error: string = '';

  if (!value) {
    error = errorMsg.street.empty;
  }

  return error;
}

export function cityValidate(value: string): string {
  let error: string = '';
  const isValidCity = /^[a-zA-Z]+$/.test(value);

  if (!value || !isValidCity) {
    error = errorMsg.city.invalid;
  }

  return error;
}

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
      const userAge = getUserAge(date, month, year);

      if (userAge < MIN_AGE) {
        error = errorMsg.date.invalid;
      }
    }
  }

  return error;
}

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
