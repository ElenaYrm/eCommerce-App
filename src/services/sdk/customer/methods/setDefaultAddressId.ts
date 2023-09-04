import { authRoot } from '../../auth/roots/index.ts';
import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { ISetDefaultAddress } from '../types/index.ts';

export const setDefaultAddressId = ({
  version,
  addressId,
  isShipping,
  customerId,
}: ISetDefaultAddress): Promise<ClientResponse<Customer>> => {
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version,
        actions: [
          { action: isShipping ? 'setDefaultShippingAddress' : 'setDefaultBillingAddress', addressId: addressId },
        ],
      },
    })
    .execute();
};
