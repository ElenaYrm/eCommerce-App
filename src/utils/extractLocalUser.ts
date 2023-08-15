import { Customer } from '@commercetools/platform-sdk';
import { IUser } from '../types/interfaces';

export function extractLocalUser(customer: Customer): IUser {
  return {
    email: customer.email,
    password: customer.password || '',
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    dateOfBirth: customer.dateOfBirth || '',
    id: customer.id,
    version: customer.version,
    addresses: customer.addresses,
  };
}
