// import { authRoot } from '../../auth/roots/index.ts';
// import { ClientResponse, Customer } from '@commercetools/platform-sdk';
// import { projectKey } from '../../index.ts';
// import { ISetDefaultAddress } from '../types/index.ts';

// export const removeDefaultAddressId = ({
//   customerId,
//   version,
//   isShipping,
// }: ): Promise<ClientResponse<Customer>> => {
//   return authRoot
//     .withProjectKey({ projectKey })
//     .customers()
//     .withId({ ID: customerId })
//     .post({
//       body: {
//         version,
//         actions: [{ action: isShipping ? 'removeShippingAddressId' : 'removeBillingAddressId', addressId }],
//       },
//     })
//     .execute();
// };
