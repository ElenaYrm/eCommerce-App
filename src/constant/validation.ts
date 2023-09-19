const isRequired = 'is required';
const isNotValid = 'is not valid';

export const errorMsg = {
  email: {
    empty: `Email ${isRequired}`,
    invalid: 'Email must match the pattern: user@example.com',
  },
  password: {
    empty: `Password ${isRequired}`,
    invalid: `Password must be min 8 characters long, contain min
  1 uppercase and 1 lowercase letter, 1 number, 1 special character, and no spaces`,
    invalidCheck: 'Password must meet the requirements below',
  },
  firstName: {
    empty: `First name ${isRequired}`,
    invalid: `First name ${isNotValid}`,
  },
  lastName: {
    empty: `Last name ${isRequired}`,
    invalid: `Last name ${isNotValid}`,
  },
  street: {
    empty: `Street ${isRequired}`,
  },
  city: {
    empty: `City ${isRequired}`,
    invalid: `City ${isNotValid}`,
  },
  date: {
    empty: 'Date, month and year of birth are required',
    invalid: 'User must be at least 13 years old',
  },
  zipCode: {
    empty: `Postal code ${isRequired}`,
    invalid: 'Postal code must match the pattern: 12345',
  },
  country: {
    empty: `Country ${isRequired}`,
  },
};
