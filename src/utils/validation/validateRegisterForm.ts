import { IRegisterForm } from '../../components/RegisterForm/RegisterForm.tsx';
import { FormikErrors } from 'formik';
import {
  cityValidate,
  dateMYValidate,
  emailValidate,
  lastNameValidate,
  nameValidate,
  passwordValidate,
  streetValidate,
  zipCodeValidate,
  countryValidate,
} from './index.ts';
import { Input } from '../../types/enums.ts';

export function validateRegisterForm(values: IRegisterForm, isSame: boolean): FormikErrors<IRegisterForm> {
  const errors: FormikErrors<IRegisterForm> = {};

  const user: Record<string, string> = {};
  user[Input.Email] = emailValidate(values.user.email);
  user[Input.Password] = passwordValidate(values.user.password);
  user[Input.FirstName] = nameValidate(values.user.firstName);
  user[Input.LastName] = lastNameValidate(values.user.lastName);
  user[Input.Date] = dateMYValidate(`${values.user.date}${values.user.month}${values.user.year}`);

  let isUserValid = true;
  Object.values(user).forEach((item) => {
    if (item) isUserValid = false;
  });
  if (!isUserValid) {
    errors.user = user;
  }

  const shipping: Record<string, string> = {};
  shipping[Input.Street] = streetValidate(values.shipping.streetName);
  shipping[Input.City] = cityValidate(values.shipping.city);
  shipping[Input.PostalCode] = zipCodeValidate(values.shipping.postalCode);
  shipping[Input.Country] = countryValidate(values.shipping.country);

  let isShippingValid = true;
  Object.values(shipping).forEach((item) => {
    if (item) isShippingValid = false;
  });
  if (!isShippingValid) {
    errors.shipping = shipping;
  }

  if (!isSame) {
    const billing: Record<string, string> = {};
    billing[Input.Street] = streetValidate(values.billing.streetName);
    billing[Input.City] = cityValidate(values.billing.city);
    billing[Input.PostalCode] = zipCodeValidate(values.billing.postalCode);
    billing[Input.Country] = countryValidate(values.shipping.country);

    let isBillingValid = true;
    Object.values(billing).forEach((item) => {
      if (item) isBillingValid = false;
    });
    if (!isBillingValid) {
      errors.billing = billing;
    }
  }

  return errors;
}
