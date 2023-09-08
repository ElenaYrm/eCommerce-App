import { authRoot } from '../../auth/roots/index.ts';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { IRemoveAddress } from '../types/index.ts';

export const removeAddress = ({
  customerId,
  addressId,
  version,
}: IRemoveAddress): Promise<ClientResponse<Customer>> => {
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version,
        actions: [{ action: 'removeAddress', addressId: addressId }],
      },
    })
    .execute();
};
