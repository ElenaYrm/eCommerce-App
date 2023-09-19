import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { ClientResponse, CustomerSignInResult } from '@commercetools/platform-sdk';
import { anonymousRoot } from '../roots';
import { projectKey } from '../../index';

export const anonLoginCustomer = (user: UserAuthOptions): Promise<ClientResponse<CustomerSignInResult>> => {
  return anonymousRoot
    .withProjectKey({ projectKey })
    .me()
    .login()
    .post({
      body: {
        email: user.username,
        password: user.password,
        activeCartSignInMode: 'MergeWithExistingCustomerCart',
      },
    })
    .execute();
};
