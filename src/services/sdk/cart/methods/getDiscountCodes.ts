import { ClientResponse, DiscountCodePagedQueryResponse } from '@commercetools/platform-sdk';
import { anonymousRoot, refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const getDiscountCodes = (isAuth: boolean): Promise<ClientResponse<DiscountCodePagedQueryResponse>> => {
  if (isAuth) {
    return refreshTokenRoot().withProjectKey({ projectKey }).discountCodes().get().execute();
  } else {
    return anonymousRoot.withProjectKey({ projectKey }).discountCodes().get().execute();
  }
};
