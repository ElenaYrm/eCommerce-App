import { CustomerUpdateAction } from '@commercetools/platform-sdk';

export interface IUpdateUser {
  id: string;
  version: number;
  action: CustomerUpdateAction[];
}

export interface IAddNewAddress extends IUpdateUser {
  isDefault: boolean;
  isShipping: boolean;
}

export interface IRemoveAddress {
  customerId: string;
  addressId: string;
  version: number;
}

export interface ISetDefaultAddress extends IRemoveAddress {
  isShipping: boolean;
}
