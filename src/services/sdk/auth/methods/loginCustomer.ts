import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { passwordRoot } from '../roots';
import { projectKey } from '../../index.ts';
import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';

export const loginCustomer = (user: UserAuthOptions): Promise<ClientResponse<CustomerSignInResult>> => {
  return passwordRoot(user)
    .withProjectKey({ projectKey })
    .login()
    .post({
      body: {
        email: user.username,
        password: user.password,
      },
    })
    .execute();
};
