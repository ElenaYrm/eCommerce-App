import { ValidatableElements } from '../types/enums';
import { IValidationErrors } from '../types/interfaces';

const validate = (elements: ValidatableElements, value: string): IValidationErrors => {
  const errors: IValidationErrors = {};
  const isEmptyValue = value.trim().length === 0;

  if (elements === ValidatableElements.Email) {
    const isValidEmail = /^[^\s@]+@[^@\s]+\.[^.\s]+$/.test(value.trim());

    if (isEmptyValue) {
      errors.email = 'Email address cannot be empty.';
    } else if (!isValidEmail) {
      errors.email = 'Email is not valid.';
    }
  }

  if (elements === ValidatableElements.PasswordLogin) {
    if (isEmptyValue) {
      errors.passwordLogin = 'Password cannot be empty.';
    }
  }

  if (elements === ValidatableElements.PasswordSignIn) {
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(value);

    if (isEmptyValue) {
      errors.passwordSignIn = 'Password cannot be empty.';
    } else if (value.length < 8) {
      errors.passwordSignIn = 'Password must be at least 8 characters long.';
    } else if (!hasUppercase) {
      errors.passwordSignIn = 'Password must contain at least one uppercase letter.';
    } else if (!hasLowercase) {
      errors.passwordSignIn = 'Password must contain at least one lowercase letter.';
    } else if (!hasDigit) {
      errors.passwordSignIn = 'Password must contain at least one digit.';
    } else if (!hasSpecialCharacter) {
      errors.passwordSignIn = 'Password must contain at least one special character (e.g., !@#$%^&*)';
    }
  }

  if (elements === ValidatableElements.FirstName || elements === ValidatableElements.LastName) {
    const isValidFirstName = /^[a-zA-Z]+$/.test(value);

    if (isEmptyValue) {
      errors.firstNameLastName = 'First name or Last name cannot be empty';
    } else if (!isValidFirstName) {
      errors.firstNameLastName = 'Must contain at least one character and no special characters or numbers';
    }
  }

  if (elements === ValidatableElements.Street) {
    const isValidStreet = value.trim().length > 0;

    if (isEmptyValue || !isValidStreet) {
      errors.street = 'Must contain at least one character';
    }
  }

  if (elements === ValidatableElements.City) {
    const isValidCity = /^[a-zA-Z]+$/.test(value);

    if (isEmptyValue || !isValidCity) {
      errors.city = 'Must contain at least one character and no special characters or numbers';
    }
  }

  if (elements === ValidatableElements.DateOfBirth) {
    const minAge = 13;
    const birthDate = new Date(value); // value format YYYY-MM-DD
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age >= minAge) {
      errors.age = 'Customers must be at least 13 years old.';
    }
  }

  if (elements === ValidatableElements.ZipCode) {
    const isValid = /^\d{5}$/.test(value);

    if (isEmptyValue) {
      errors.zipCode = 'ZipCode address cannot be empty.';
    } else if (!isValid) {
      errors.zipCode = 'The Zip Code should consist of exactly 5 digits.';
    }
  }

  return errors;
};

export default validate;
