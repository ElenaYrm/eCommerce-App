import { authRoot } from '../../auth/roots/index.ts';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { IUpdateUser } from '../types/index.ts';

// FirstName, LastName, Email, DateOfBirth

export const updateUserInfo = ({ id, version, action }: IUpdateUser): Promise<ClientResponse<Customer>> => {
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: action,
      },
    })
    .execute();
};
