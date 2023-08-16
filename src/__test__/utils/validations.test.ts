import {
  emailValidation,
  passwordValidation,
  nameValidate,
  lastNameValidate,
  streetValidate,
  cityValidate,
  dateMYValidate,
  zipCodeValidate,
} from '../../utils/validations';
import { errorMsg } from '../../utils/variables';

const validFunc = 'validation function';
const shouldReturnError = 'Should return an error message for';

describe(`Email ${validFunc}`, () => {
  it('Should return empty string for a valid email', () => {
    const validEmail = 'test@example.com';
    const result = emailValidation(validEmail);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty email`, () => {
    const emptyEmail = '';
    const result = emailValidation(emptyEmail);
    expect(result).toBe(errorMsg.email.empty);
  });

  it(`${shouldReturnError} an invalid email`, () => {
    const invalidEmail = 'invalid-email';
    const result = emailValidation(invalidEmail);
    expect(result).toBe(errorMsg.email.invalid);
  });
});

describe(`Password ${validFunc}`, () => {
  it('should return empty string for a valid password', () => {
    const validPassword = 'P@ssw0rd';
    const result = passwordValidation(validPassword);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty password`, () => {
    const emptyPassword = '';
    const result = passwordValidation(emptyPassword);
    expect(result).toBe(errorMsg.password.empty);
  });

  it(`${shouldReturnError} a password with length less than 8`, () => {
    const shortPassword = 'Short1';
    const result = passwordValidation(shortPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without an uppercase letter`, () => {
    const lowercasePassword = 'lowercase1!';
    const result = passwordValidation(lowercasePassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a lowercase letter`, () => {
    const uppercasePassword = 'UPPERCASE1!';
    const result = passwordValidation(uppercasePassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a digit`, () => {
    const noDigitPassword = 'NoDigit$';
    const result = passwordValidation(noDigitPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });

  it(`${shouldReturnError} a password without a special character`, () => {
    const noSpecialCharacterPassword = 'NoSpecial123';
    const result = passwordValidation(noSpecialCharacterPassword);
    expect(result).toBe(errorMsg.password.invalid);
  });
});

describe(`Name ${validFunc}`, () => {
  it('Should return empty string for a valid Name', () => {
    const validName = 'g';
    const result = nameValidate(validName);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty Name`, () => {
    const emptyName = '';
    const result = nameValidate(emptyName);
    expect(result).toBe(errorMsg.firstName.empty);
  });

  it(`${shouldReturnError} an invalid Name`, () => {
    const invalidName = 'G1';
    const result = nameValidate(invalidName);
    expect(result).toBe(errorMsg.firstName.invalid);
  });
});

describe(`Last name ${validFunc}`, () => {
  it('Should return empty string for a valid Last name', () => {
    const validLastName = 'g';
    const result = lastNameValidate(validLastName);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty Last name`, () => {
    const emptyLastName = '';
    const result = lastNameValidate(emptyLastName);
    expect(result).toBe(errorMsg.lastName.empty);
  });

  it(`${shouldReturnError} an invalid Last name`, () => {
    const invalidLastName = 'G1';
    const result = lastNameValidate(invalidLastName);
    expect(result).toBe(errorMsg.lastName.invalid);
  });
});

describe(`Street ${validFunc}`, () => {
  it('Should return empty string for a valid street', () => {
    const validStreet = '1';
    const result = streetValidate(validStreet);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty street`, () => {
    const emptyStreet = '';
    const result = streetValidate(emptyStreet);
    expect(result).toBe(errorMsg.street.empty);
  });
});

describe(`City ${validFunc}`, () => {
  it('Should return empty string for a valid city', () => {
    const validCity = 'MyCity';
    const result = cityValidate(validCity);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty city`, () => {
    const emptyCity = '';
    const result = cityValidate(emptyCity);
    expect(result).toBe(errorMsg.city.invalid);
  });
  it(`${shouldReturnError} a city name containing non-alphabetic characters`, () => {
    const invalidCity = 'Los Angeles 123';
    const result = cityValidate(invalidCity);
    expect(result).toBe(errorMsg.city.invalid);
  });
});

describe(`Date month year ${validFunc}`, () => {
  it('should return empty string for a valid date format and age', () => {
    const validDate = '20may1993';
    const result = dateMYValidate(validDate);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an invalid date format`, () => {
    const invalidDate = '20';
    const result = dateMYValidate(invalidDate);
    expect(result).toBe(errorMsg.date.empty);
  });

  it(`${shouldReturnError} a user under the minimum age`, () => {
    const youngDate = '20may2022';
    const result = dateMYValidate(youngDate);
    expect(result).toBe(errorMsg.date.invalid);
  });
});

describe(`Zip Code ${validFunc}`, () => {
  it('should return an empty string for a valid zip code', () => {
    const validZipCode = '12345';
    const result = zipCodeValidate(validZipCode);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty value`, () => {
    const emptyValue = '';
    const result = zipCodeValidate(emptyValue);
    expect(result).toBe(errorMsg.zipCode.empty);
  });

  it(`${shouldReturnError} an invalid zip code`, () => {
    const invalidZipCode = '1234';
    const result = zipCodeValidate(invalidZipCode);
    expect(result).toBe(errorMsg.zipCode.invalid);
  });
});
