import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import { authRoot } from '../roots';
import { projectKey } from '../../index.ts';
import { INewUser } from '../../../../types/interfaces';

export const registerCustomer = (userData: INewUser): Promise<ClientResponse<CustomerSignInResult>> => {
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .post({
      body: userData,
    })
    .execute();
};
