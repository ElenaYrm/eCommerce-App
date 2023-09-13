import { CartPagedQueryResponse, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const getAnonCart = (): Promise<ClientResponse<CartPagedQueryResponse>> => {
  return anonymousRoot.withProjectKey({ projectKey }).me().carts().get().execute();
};
