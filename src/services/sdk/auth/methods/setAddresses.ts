import { authRoot } from '../roots';
import { Address, ClientResponse, Customer } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
//
export const setAddresses = (id: string, version: number, adresses: Address[]): Promise<ClientResponse<Customer>> => {
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
            addressId: adresses[0].id,
          },
          {
            action: 'setDefaultBillingAddress',
            addressId: adresses.length === 2 ? adresses[1].id : adresses[0].id,
          },
        ],
      },
    })
    .execute();
};
