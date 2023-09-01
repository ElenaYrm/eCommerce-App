import { RootState } from '../store/store';
import { IAuthSlice } from '../store/auth/types';
import { IUser } from '../types/interfaces';
import { initialProduct, initialUser } from '../constant';
import { IProductSlice } from '../store/product/types';
import { ICatalogSlice } from '../store/catalog/types';
import { IUserSlice } from '../store/user/types';

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
  userId: '',
};

export const initialProductMock: IProductSlice = {
  product: initialProduct,
  status: 'initial',
  error: '',
};

export const initialProductListMock: ICatalogSlice = {
  status: 'initial',
  error: '',
  productList: [],
  categories: [],
};

export const initialUserSliceMock: IUserSlice = {
  user: initialUser,
  status: 'initial',
  error: '',
};

export const storeMock: RootState = {
  auth: initialAuthMock,
  product: initialProductMock,
  catalog: initialProductListMock,
  user: initialUserSliceMock,
};

export const resultAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: true,
  status: 'error',
  error: 'Some error',
  userId: '',
};
