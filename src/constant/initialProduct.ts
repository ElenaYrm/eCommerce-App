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
  id: '',
  medium: '',
  dimensions: '',
  color: '',
  size: '',
};

export const initialProductSlice: IProductSlice = {
  status: 'initial',
  error: '',
  product: initialProduct,
};
