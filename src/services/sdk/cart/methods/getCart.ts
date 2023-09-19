import { CartPagedQueryResponse, ClientResponse } from '@commercetools/platform-sdk';
import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const getCart = (): Promise<ClientResponse<CartPagedQueryResponse>> => {
  return refreshTokenRoot().withProjectKey({ projectKey }).me().carts().get().execute();
};
