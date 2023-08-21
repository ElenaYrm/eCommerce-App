import { Customer } from '@commercetools/platform-sdk';

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
