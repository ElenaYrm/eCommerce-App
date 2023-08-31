import { IUser } from '../types/interfaces';
import { IAuthSlice } from '../store/auth/types';
import { IProductSlice } from '../store/product/types';
import { IProduct } from '../types/interfaces';
import { ICatalogSlice } from '../store/catalog/types';

export const initialUser: IUser = {
  id: '',
  version: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  dateOfBirth: '',
  addresses: [],
};

export const initialAuthState: IAuthSlice = {
  isAuthorized: !!localStorage.getItem('access-token'),
  isNewUser: false,
  status: 'initial',
  error: '',
  user: initialUser,
};

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

export const initialProductListSlice: ICatalogSlice = {
  status: 'initial',
  error: '',
  productList: [],
  categories: [],
};
