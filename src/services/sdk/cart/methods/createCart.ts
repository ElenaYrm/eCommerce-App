import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousRoot, refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const createCart = (isAuth: boolean): Promise<ClientResponse<Cart>> => {
  if (isAuth) {
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
  } else {
    return anonymousRoot
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
  }
};
