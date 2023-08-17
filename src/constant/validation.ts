const isRequired = 'is required';
const notValid = 'is not valid';

export const errorMsg = {
  email: {
    empty: `Email ${isRequired}`,
    invalid: 'Email must match the pattern: user@example.com',
  },
  password: {
    empty: `Password ${isRequired}`,
    invalid: `Password must be at least 8 character long, and contain at least
  1 uppercase and 1 lowercase letter, 1 number and 1 special character`,
  },
  firstName: {
    empty: `First name ${isRequired}`,
    invalid: `First name ${notValid}`,
  },
  lastName: {
    empty: `Last name ${isRequired}`,
    invalid: `Last name ${notValid}`,
  },
  street: {
    empty: 'Street must contain at least one character',
  },
  city: {
    invalid: 'Must contain at least one character and no special characters or numbers',
  },
  date: {
    empty: 'Date, month and year of your birth must be selected',
    invalid: 'User must be at least 13 years old',
  },
  zipCode: {
    empty: `Zip Code ${isRequired}`,
    invalid: 'The Zip Code should consist of exactly 5 digits',
  },
};
