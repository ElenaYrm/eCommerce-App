import { ClientResponse, Product } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';
import { authRoot } from '../../auth/roots/index.ts';

async function fetchProductData(productId: string): Promise<ClientResponse<Product> | undefined> {
  try {
    const request = authRoot.withProjectKey({ projectKey }).products().withId({ ID: productId }).get();
    const res = await request.execute();

    if (res.statusCode !== 200) {
      throw new Error('Product is not found');
    }

    return res;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
  }
}

export default fetchProductData;
