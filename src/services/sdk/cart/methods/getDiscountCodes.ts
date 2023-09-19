import { ClientResponse, DiscountCodePagedQueryResponse } from '@commercetools/platform-sdk';
import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const getDiscountCodes = (): Promise<ClientResponse<DiscountCodePagedQueryResponse>> => {
  return refreshTokenRoot().withProjectKey({ projectKey }).discountCodes().get().execute();
};
