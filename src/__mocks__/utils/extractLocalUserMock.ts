import { Customer } from '@commercetools/platform-sdk';
import { IUser } from '../../types/interfaces.ts';

export const customerObject: Customer = {
  email: 'test@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-01-01',
  id: '123',
  version: 1,
  addresses: [],
  createdAt: '2023-01-01',
  lastModifiedAt: '2023-01-01',
  isEmailVerified: true,
  authenticationMode: '',
};

export const resultUser: IUser = {
  id: '123',
  version: 1,
  email: 'test@example.com',
  firstName: 'John',
  lastName: 'Doe',
  password: 'password123',
  date: '1',
  month: 'January',
  year: '1990',
  defaultShippingAddressId: '',
  defaultBillingAddressId: '',
  shippingAddressIds: [],
  billingAddressIds: [],
  addresses: [],
};

export const customerWithMissingProperties: Customer = {
  email: 'test@example.com',
  id: '123',
  version: 1,
  addresses: [],
  createdAt: '2023-01-01',
  lastModifiedAt: '2023-01-01',
  isEmailVerified: true,
  authenticationMode: '',
};

export const resultDefaultUser: IUser = {
  id: '123',
  version: 1,
  email: 'test@example.com',
  firstName: '',
  lastName: '',
  password: '',
  date: '',
  month: '',
  year: '',
  defaultShippingAddressId: '',
  defaultBillingAddressId: '',
  shippingAddressIds: [],
  billingAddressIds: [],
  addresses: [],
};
