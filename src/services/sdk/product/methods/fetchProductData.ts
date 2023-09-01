import { ClientResponse, Product } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { authRoot } from '../../auth/roots/index.ts';

function fetchProductData(productId: string): Promise<ClientResponse<Product>> {
  return authRoot.withProjectKey({ projectKey }).products().withId({ ID: productId }).get().execute();
}

export default fetchProductData;
