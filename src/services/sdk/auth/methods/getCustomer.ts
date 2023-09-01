import { refreshTokenRoot } from '../roots';
import { projectKey } from '../../index';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';

export const getCustomer = (): Promise<ClientResponse<Customer>> => {
  const token = localStorage.getItem('token') || '';

  return refreshTokenRoot(token).withProjectKey({ projectKey }).me().get().execute();
};
