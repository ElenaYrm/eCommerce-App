import { RootState } from '../store/store';
import { IAuthSlice } from '../store/auth/types';
import { IUser, IProduct } from '../types/interfaces';

export const initialUserMock: IUser = {
  id: '',
  version: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  dateOfBirth: '',
  addresses: [],
};

export const initialAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: false,
  status: 'initial',
  error: '',
  user: initialUserMock,
};

export const initialProductMock: IProduct = {
  artist: '',
  title: '',
  year: '',
  description: '',
  images: [],
  price: 0,
  discountPrice: 0,
  productId: '',
};

export const storeMock: RootState = {
  auth: initialAuthMock,
  product: initialProductMock,
};

export const resultAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: true,
  status: 'error',
  error: 'Some error',
  user: initialUserMock,
};
