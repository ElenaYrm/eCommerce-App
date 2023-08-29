import { Address } from '@commercetools/platform-sdk';

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

export interface IProduct {
  artist: string;
  title: string;
  year: string;
  description: string | undefined;
  images: string[] | undefined;
  price: number;
  discountPrice?: number;
  productId?: string;
}
