import { ICatalogSlice } from '../../store/catalog/types';
import { IProduct } from '../../types/interfaces.ts';

export const initialCatalogSliceMock: ICatalogSlice = {
  status: 'initial',
  error: '',
  productList: [],
  categories: [],
  totalProducts: 0,
};

const productMock: IProduct = {
  productId: 'id',
  artist: 'some',
  title: 'mock',
  year: '2000',
  description: 'some',
  dimensions: '120 * 120',
  medium: 'oil',
  size: 'small',
  images: [],
  price: 100,
  discountPrice: 90,
  color: 'black',
};

export const resultCatalogSliceMock: ICatalogSlice = {
  status: 'success',
  error: '',
  productList: [productMock],
  categories: [],
  totalProducts: 1,
};
