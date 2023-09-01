import { ClientResponse, ProductProjectionPagedQueryResponse, QueryParam } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { authRoot } from '../../auth/roots';

export function getProductList(params: {
  [p: string]: QueryParam;
}): Promise<ClientResponse<ProductProjectionPagedQueryResponse>> {
  return authRoot
    .withProjectKey({ projectKey })
    .productProjections()
    .search()
    .get({
      queryArgs: params,
    })
    .execute();
}
