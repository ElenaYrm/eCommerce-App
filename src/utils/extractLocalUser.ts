import { Customer } from '@commercetools/platform-sdk';
import { IUser } from '../types/interfaces';

export function extractLocalUser(customer: Customer): IUser {
  const dateOfBirth = customer.dateOfBirth;
  let year, month, date;

  if (dateOfBirth) {
    const dateArr = dateOfBirth.split('-');
    [year, month, date] = dateArr;
  }

  return {
    id: customer.id,
    version: customer.version,
    email: customer.email,
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    password: customer.password || '',
    date: date || '',
    month: month || '',
    year: year || '',
    defaultShippingAddressId: customer.defaultShippingAddressId || '',
    defaultBillingAddressId: customer.defaultBillingAddressId || '',
    shippingAddressIds: customer.shippingAddressIds || [],
    billingAddressIds: customer.billingAddressIds || [],
    addresses: customer.addresses,
  };
}
