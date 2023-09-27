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
    | 'defaultBillingAddress'
    | 'defaultShippingAddress'
    | 'shippingAddresses'
    | 'billingAddresses'
    | 'dateOfBirth'
    | 'addresses'
  > {
  id: string;
  version: number;
  date: string;
  month: string;
  year: string;
  defaultShippingAddressId: string;
  defaultBillingAddressId: string;
  shippingAddressIds: string[];
  billingAddressIds: string[];
  addresses: Address[];
}

export interface INewAddress {
  streetName: string;
  city: string;
  postalCode: string;
  country: string;
  id?: string;
}

export interface ITabsList {
  label: string;
  content: string | ReactElement;
  title: string;
}

export interface IProduct {
  productId: string;
  artist: string;
  title: string;
  year: string;
  description: string;
  dimensions: string;
  medium: string;
  size: string;
  images?: string[];
  price: number;
  discountPrice?: number;
  color: string;
}
