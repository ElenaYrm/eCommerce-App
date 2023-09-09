import { CartPagedQueryResponse, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousRoot, refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';
// import { initialTokenInfo, tokenData } from '../../auth/token';

export const getCart = (isAuth: boolean): Promise<ClientResponse<CartPagedQueryResponse>> => {
  if (isAuth) {
    return refreshTokenRoot().withProjectKey({ projectKey }).me().carts().get().execute();
  } else {
    // tokenData.set(initialTokenInfo);
    return anonymousRoot.withProjectKey({ projectKey }).me().carts().get().execute();
  }
};
