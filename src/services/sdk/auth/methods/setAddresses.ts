import { authRoot } from '../roots';
import { Address, ClientResponse, Customer } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
//
export const setAddresses = (id: string, version: number, addresses: Address[]): Promise<ClientResponse<Customer>> => {
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'setDefaultShippingAddress',
            addressId: addresses[0].id,
          },
          {
            action: 'setDefaultBillingAddress',
            addressId: addresses.length === 2 ? addresses[1].id : addresses[0].id,
          },
        ],
      },
    })
    .execute();
};
