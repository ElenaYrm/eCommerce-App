import { Address } from '@commercetools/platform-sdk';

import { Input } from './enums';

export interface IValidationErrors {
  [key: string]: string;
}

export interface IFormInputs {
  [key: string]: Input | string;
}

export interface IPassword {
  password: string;
}

export interface INewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: Address[];
}

export interface IUser extends INewUser {
  id: string;
  version: number;
  // defaultShippingAddressId: string;
  // shippingAddressIds: string[];
  // defaultBillingAddressId: string;
  // billingAddressIds: string[];
  // isEmailVerified: boolean;
  // authenticationMode: 'Password' | 'ExternalAuth';
}

export interface INewAddress {
  streetName: string;
  city: string;
  postalCode: string;
  country: string;
}
