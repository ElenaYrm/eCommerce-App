import { IRegisterForm } from '../components/RegisterForm/types';

export function validateAddresses(values: IRegisterForm, isSame: boolean): Record<string, Record<string, string>> {
  const errors: Record<string, Record<string, string>> = {};
  const billing: Record<string, string> = {};
  const shipping: Record<string, string> = {};

  if (!values.shipping.streetName) {
    shipping.streetName = 'Required';
  }
  if (!values.shipping.city) {
    shipping.city = 'Required';
  }
  if (!values.shipping.postalCode) {
    shipping.postalCode = 'Required';
  }

  if (!isSame) {
    if (!values.billing.streetName) {
      billing.streetName = 'Required';
    }
    if (!values.billing.city) {
      billing.city = 'Required';
    }
    if (!values.billing.postalCode) {
      billing.postalCode = 'Required';
    }
  }

  if (Object.keys(shipping).length > 0) {
    errors.shipping = shipping;
  }
  if (Object.keys(billing).length > 0) {
    errors.billing = billing;
  }

  return errors;
}
