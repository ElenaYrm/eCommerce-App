import { IProductSlice } from '../../store/product/types';
import { IProduct } from '../../types/interfaces';

export const initialProductMock: IProduct = {
  productId: '',
  artist: '',
  title: '',
  year: '',
  description: '',
  dimensions: '',
  medium: '',
  size: '',
  images: [],
  price: 0,
  discountPrice: 0,
  color: '',
};

export const initialProductSliceMock: IProductSlice = {
  product: initialProductMock,
  status: 'initial',
  error: '',
};
