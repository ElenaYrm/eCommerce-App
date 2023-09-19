import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const createCart = (): Promise<ClientResponse<Cart>> => {
  return refreshTokenRoot()
    .withProjectKey({ projectKey })
    .me()
    .carts()
    .post({
      body: {
        currency: 'USD',
        country: 'US',
      },
    })
    .execute();
};
