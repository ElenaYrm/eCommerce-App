import { CustomerUpdateAction } from '@commercetools/platform-sdk';

export interface IUpdateUser {
  id: string;
  version: number;
  action: CustomerUpdateAction[];
}
