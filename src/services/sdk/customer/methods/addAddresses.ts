// import { IAddressForm } from '../../../../components/RegisterForm/AddressForm/AddressForm';
// import { Client } from '@commercetools/sdk-client';
// import { createRequestBuilder } from '@commercetools/api-request-builder';

// const client = new Client({
//   projectKey: 'YOUR_PROJECT_KEY',
//   credentials: {
//     clientId: 'YOUR_CLIENT_ID',
//     clientSecret: 'YOUR_CLIENT_SECRET',
//   },
// });
// const requestBuilder = createRequestBuilder({ projectKey: 'YOUR_PROJECT_KEY' });

// interface CommerceToolsApiResponse {
//   // What will be in response?
// }

// export const addAddresses = async (
//   customerId: string,
//   address: IAddressForm,
//   isShipping: boolean = true,
// ): Promise<CommerceToolsApiResponse> => {
//   const action = isShipping ? 'addShippingAddress' : 'addBillingAddress';
//   const request = {
//     uri: requestBuilder.customers
//       .where(`id="${customerId}"`)
//       .update({
//         actions: [
//           {
//             action: action,
//             address: address,
//           },
//         ],
//       })
//       .build(),
//     method: 'POST',
//   };

//   const response = await client.execute(request);
//   return response;
// };
