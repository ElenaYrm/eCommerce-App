import { authRoot } from '../../auth/roots/index.ts';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { IUpdateUser } from '../types/index.ts';

export const addAddress = ({ id, version, action }: IUpdateUser): Promise<ClientResponse<Customer>> => {
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
