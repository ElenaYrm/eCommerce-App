import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';

export const getCustomer = (): Promise<ClientResponse<Customer>> => {
  return refreshTokenRoot().withProjectKey({ projectKey }).me().get().execute();
};
