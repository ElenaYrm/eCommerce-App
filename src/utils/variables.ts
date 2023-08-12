const cantBeEmpty = 'cannot be empty';
const notValid = 'is not valid';

export const errorMsg = {
  email: { empty: `Email ${cantBeEmpty}`, invalid: `Email ${notValid}` },
  pass: {
    empty: `Password ${cantBeEmpty}`,
    invalid: `Your password is not strong enough. 
  Password must be at least 8 character long, and contain at least
  1 uppercase letter, 1 lowercase letter and 1 number.`,
  },
  firstName: { empty: `First name ${cantBeEmpty}`, invalid: `First name ${notValid}` },
  lastName: { empty: `Last name ${cantBeEmpty}`, invalid: `Last name ${notValid}` },
  street: { empty: 'Street must contain at least one character' },
  city: { invalid: 'Must contain at least one character and no special characters or numbers' },
  dateOfBirth: { invalid: 'Customers must be at least 13 years old.' },
  zipCode: { empty: `Zip Code ${cantBeEmpty}`, invalid: 'The Zip Code should consist of exactly 5 digits.' },
};
