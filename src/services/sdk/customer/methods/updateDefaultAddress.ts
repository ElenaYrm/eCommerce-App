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

// export const updateDefaultAddress = async (customerId: string, addressId: string, isShipping: boolean) => {
//   const action = isShipping ? 'setDefaultShippingAddress' : 'setDefaultBillingAddress';
//   const request = {
//     uri: requestBuilder.customers
//       .where(`id="${customerId}"`)
//       .update({
//         actions: [
//           {
//             action: action,
//             addressId: addressId,
//           },
//         ],
//       })
//       .build(),
//     method: 'POST',
//   };

//   const response = await client.execute(request);
//   return response;
// };
