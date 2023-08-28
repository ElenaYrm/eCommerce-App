import { fetchProductData } from '../services/sdk/product/methods';
import { IProduct } from '../types/interfaces';
import { parseProductData } from '.';

export async function getProductData(productId: string): Promise<IProduct | undefined> {
  try {
    const res = await fetchProductData(productId);

    if (res?.statusCode !== 200) {
      throw new Error('Product is not found');
    }

    const productData = parseProductData(res.body);
    return productData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Failed to fetch product data: ${err.message}`);
    }
  }
}
