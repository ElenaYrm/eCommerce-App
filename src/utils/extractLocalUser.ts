import { CustomerSignInResult } from '@commercetools/platform-sdk';
import { IUser } from '../types';

export function extractLocalUser({ customer }: CustomerSignInResult): IUser {
  return {
    email: customer.email,
    password: customer.password || '',
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    dateOfBirth: customer.dateOfBirth || '',
    id: customer.id,
    version: customer.version,
  };
}
