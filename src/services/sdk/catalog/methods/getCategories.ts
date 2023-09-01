import { CategoryPagedQueryResponse, ClientResponse } from '@commercetools/platform-sdk';
import { authRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export const getCategories = (): Promise<ClientResponse<CategoryPagedQueryResponse>> => {
  return authRoot.withProjectKey({ projectKey }).categories().get().execute();
};
