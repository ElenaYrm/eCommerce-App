import { CustomerUpdateAction } from '@commercetools/platform-sdk';

export interface IUpdateUser {
  id: string;
  version: number;
  action: CustomerUpdateAction[];
}

export interface IRemoveAddress {
  customerId: string;
  addressId: string;
  version: number;
}
