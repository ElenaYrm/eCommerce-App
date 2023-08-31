import { ClientResponse, ProductProjectionPagedQueryResponse, QueryParam } from '@commercetools/platform-sdk';
import { projectKey } from '../../index';
import { authRoot } from '../../auth/roots';

export default function getProductList(params: {
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
