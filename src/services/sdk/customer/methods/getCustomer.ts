import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index.ts';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';

export const getCustomer = (): Promise<ClientResponse<Customer>> => {
  const token = localStorage.getItem('art-token') || '';

  return refreshTokenRoot(token).withProjectKey({ projectKey }).me().get().execute();
};
