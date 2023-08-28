import { Product } from '@commercetools/platform-sdk';
import { IProduct } from '../types/interfaces';

const LANG_CODE = 'en-US';

export function parseProductData(body: Product): IProduct {
  const product = body.masterData.current;

  const productId = body.id;
  const [artist, title, year] = product.name[LANG_CODE].split('/');
  const description = product.description?.[LANG_CODE];
  const images = product.masterVariant.images?.map((item) => item.url);

  const price = Number(product.masterVariant.prices?.[0].value.centAmount) / 100;
  const discountPrice = Number(product.masterVariant.prices?.[0].discounted?.value.centAmount) / 100;

  return { artist, title, year, description, images, price, discountPrice, productId };
}
