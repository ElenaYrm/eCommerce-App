import { RootState } from '../store/store';
import { IAuthSlice } from '../store/auth/types';
import { IUser } from '../types/interfaces';
import { initialProduct } from '../constant';
import { IProductSlice } from '../store/product/types';
import { ICatalogSlice } from '../store/catalog/types';

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

export const storeMock: RootState = {
  auth: initialAuthMock,
  product: initialProductMock,
  catalog: initialProductListMock,
};

export const resultAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: true,
  status: 'error',
  error: 'Some error',
  user: initialUserMock,
};
