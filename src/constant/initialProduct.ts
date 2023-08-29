import { IProductSlice } from '../store/product/types';
import { IProduct } from '../types/interfaces';

export const initialProduct: IProduct = {
  artist: '',
  title: '',
  year: '',
  description: '',
  images: [],
  price: 0,
  discountPrice: 0,
  productId: '',
};

export const initialProductSlice: IProductSlice = {
  status: 'initial',
  error: '',
  product: initialProduct,
};
