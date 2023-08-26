import { Address } from '@commercetools/platform-sdk';
import { ReactElement } from 'react';

export interface INewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addresses: Address[];
  defaultShippingAddress: number | undefined;
  shippingAddresses: number[];
  defaultBillingAddress: number | undefined;
  billingAddresses: number[];
}

export interface IUser
  extends Omit<
    INewUser,
    'defaultBillingAddress' | 'defaultShippingAddress' | 'shippingAddresses' | 'billingAddresses'
  > {
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

export interface ITabsList {
  label: string;
  content: string | ReactElement;
  title: string;
}
