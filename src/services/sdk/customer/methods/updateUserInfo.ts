import { authRoot } from '../../auth/roots/index.ts';
import { ClientResponse, Customer, CustomerUpdateAction } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';

// FirstName, LastName, Email, DateOfBirth

export const updateUserInfo = (
  id: string,
  version: number,
  action: CustomerUpdateAction,
): Promise<ClientResponse<Customer>> => {
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: [action],
      },
    })
    .execute();
};
