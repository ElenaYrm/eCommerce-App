import { Input } from '../types/enums';
import { IValidationErrors } from '../types/interfaces';
import { errorMsg } from './variables';
import { getUserAge } from './getUserAge';

const validate = (values: IValidationErrors): IValidationErrors => {
  const errors: IValidationErrors = {};
  const isValidEmail = /^[^\s@]+@[^@\s]+\.[^.\s]+$/.test(values[Input.Email].trim());
  const hasUppercase = /[A-Z]/.test(values[Input.Password]);
  const hasLowercase = /[a-z]/.test(values[Input.Password]);
  const hasDigit = /\d/.test(values[Input.Password]);
  const hasSpecialCharacter = /[!@#$%^&*]/.test(values[Input.Password]);
  const isValidFirstName = /^[a-zA-Z]+$/.test(values[Input.FirstName]);
  const isValidLastName = /^[a-zA-Z]+$/.test(values[Input.LastName]);
  const isValidCity = /^[a-zA-Z]+$/.test(values[Input.City]);
  const isValidZipCode = /^\d{5}$/.test(values[Input.ZipCode]);

  const date = values[Input.Date];
  const month = values[Input.Month];
  const year = values[Input.Year];

  if (!values[Input.Email]) {
    errors[Input.Email] = errorMsg.email.empty;
  } else if (!isValidEmail) {
    errors.email = errorMsg.email.invalid;
  }

  if (!values[Input.Password]) {
    errors[Input.Password] = errorMsg.password.empty;
  } else if (values[Input.Password].length < 8) {
    errors[Input.Password] = errorMsg.password.invalid;
  } else if (!hasUppercase) {
    errors[Input.Password] = errorMsg.password.invalid;
  } else if (!hasLowercase) {
    errors[Input.Password] = errorMsg.password.invalid;
  } else if (!hasDigit) {
    errors[Input.Password] = errorMsg.password.invalid;
  } else if (!hasSpecialCharacter) {
    errors[Input.Password] = errorMsg.password.invalid;
  }

  if (!values[Input.FirstName]) {
    errors[Input.FirstName] = errorMsg.firstName.empty;
  } else if (!isValidFirstName) {
    errors[Input.FirstName] = errorMsg.firstName.invalid;
  }

  if (!values[Input.LastName]) {
    errors[Input.LastName] = errorMsg.lastName.empty;
  } else if (!isValidLastName) {
    errors[Input.FirstName] = errorMsg.lastName.invalid;
  }

  if (!values[Input.Street]) {
    errors[Input.Street] = errorMsg.street.empty;
  }

  if (!values[Input.City] || !isValidCity) {
    errors[Input.City] = errorMsg.city.invalid;
  }

  if (!date || !month || !year) {
    errors[Input.Date] = errorMsg.date.empty;
  }

  if (date && month && year) {
    const minAge = 13;
    const userAge = getUserAge(date, month, year);

    if (userAge < minAge) {
      errors[Input.Date] = errorMsg.date.invalid;
    }
  }

  if (!values[Input.ZipCode]) {
    errors[Input.ZipCode] = errorMsg.zipCode.empty;
  } else if (!isValidZipCode) {
    errors[Input.ZipCode] = errorMsg.zipCode.invalid;
  }

  return errors;
};

export default validate;
