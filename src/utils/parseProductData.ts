import { Product, ProductProjection } from '@commercetools/platform-sdk';
import { IProduct } from '../types/interfaces';
import { LANG_CODE } from '../constant';

export function parseProductData(body: Product): IProduct {
  const product = body.masterData.current;

  const productId = body.id;

  const productAttr = product.masterVariant.attributes;

  if (!productAttr) {
    throw new Error('Failed to get product attributes.');
  }

  const attrArray: [string, string][] | undefined = productAttr?.map((attr) => [attr.name, attr.value[LANG_CODE]]);
  const { artist, year, medium, dimensions, color, size } = Object.fromEntries(attrArray ? attrArray : []);

  const title = product.name[LANG_CODE];
  const description = product.description?.[LANG_CODE];
  const images = product.masterVariant.images?.map((item) => item.url);

  const price = Number(product.masterVariant.prices?.[0].value.centAmount) / 100 || 0;
  const discountPrice = Number(product.masterVariant.prices?.[0].discounted?.value.centAmount) / 100 || 0;

  if (!description || !images) {
    throw new Error('Failed to get product information.');
  }

  return { artist, title, year, medium, dimensions, color, size, description, images, price, discountPrice, productId };
}

export function parseProductListData(dataArray: ProductProjection[]): IProduct[] {
  const productsListData = dataArray.map((product) => {
    const productId = product.id;

    const productAttr = product.masterVariant.attributes;

    if (!productAttr) {
      throw new Error('Failed to get product attributes.');
    }

    const attrArray: [string, string][] | undefined = productAttr?.map((attr) => [attr.name, attr.value[LANG_CODE]]);
    const { artist, year, medium, dimensions, color, size } = Object.fromEntries(attrArray ? attrArray : []);

    const title = product.name[LANG_CODE];
    const description = product.description?.[LANG_CODE] || '';
    const images = product.masterVariant.images?.map((item) => item.url) || [];

    const price = Number(product.masterVariant.prices?.[0]?.value.centAmount) / 100 || 0;
    const discountPrice = Number(product.masterVariant.prices?.[0]?.discounted?.value.centAmount) / 100 || 0;

    if (!description || !images) {
      throw new Error('Failed to get product information.');
    }

    return {
      artist,
      title,
      year,
      medium,
      dimensions,
      color,
      size,
      description,
      images,
      price,
      discountPrice,
      productId,
    };
  });

  return productsListData;
}
