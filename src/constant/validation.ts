const isRequired = 'is required';
const LATIN_CHARS_MESSAGE = 'Please, enter Latin characters';

export const errorMsg = {
  email: {
    empty: `Email ${isRequired}`,
    invalid: 'Email must match the pattern: user@example.com',
  },
  password: {
    empty: `Password ${isRequired}`,
    invalid: `Password must be min 8 characters long, contain min
  1 uppercase and 1 lowercase letter, 1 number, 1 special character, and no spaces`,
  },
  firstName: {
    empty: `First name ${isRequired}`,
    invalid: LATIN_CHARS_MESSAGE,
  },
  lastName: {
    empty: `Last name ${isRequired}`,
    invalid: LATIN_CHARS_MESSAGE,
  },
  street: {
    empty: `Street ${isRequired}`,
  },
  city: {
    empty: `City ${isRequired}`,
    invalid: LATIN_CHARS_MESSAGE,
  },
  date: {
    empty: 'Date, month and year of birth are required',
    invalid: 'User must be at least 13 years old',
  },
  zipCode: {
    empty: `Postal code ${isRequired}`,
    invalid: 'Postal code must match the pattern: 12345',
  },
};
