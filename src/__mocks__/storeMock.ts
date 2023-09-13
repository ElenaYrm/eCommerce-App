import { RootState } from '../store/store';
import { IAuthSlice } from '../store/auth/types';
import { IUser } from '../types/interfaces';
import { initialProduct, initialUser } from '../constant';
import { IProductSlice } from '../store/product/types';
import { ICatalogSlice } from '../store/catalog/types';
import { IUserSlice } from '../store/user/types';
import { ICartSlice } from '../store/cart/types';

export const initialUserMock: IUser = {
  id: '',
  version: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  date: '',
  month: '',
  year: '',
  defaultShippingAddressId: '',
  defaultBillingAddressId: '',
  shippingAddressIds: [],
  billingAddressIds: [],
  addresses: [],
};

export const initialAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: false,
  status: 'initial',
  error: '',
  userId: '',
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
  isSuccess: false,
  editStatus: 'initial',
  editError: '',
};

export const initialProductMock: IProductSlice = {
  product: initialProduct,
  status: 'initial',
  error: '',
};

export const initialCartMock: ICartSlice = {
  status: 'initial',
  error: '',
  basket: {
    id: '',
    version: 0,
    lineItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    codes: [],
  },
  discounts: [],
};

export const storeMock: RootState = {
  auth: initialAuthMock,
  product: initialProductMock,
  catalog: initialProductListMock,
  user: initialUserSliceMock,
  cart: initialCartMock,
};

export const resultAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: true,
  status: 'error',
  error: 'Some error',
  userId: '',
};

export const resultUserSliceMock: IUserSlice = {
  user: initialUser,
  status: 'initial',
  error: '',
  isSuccess: false,
  editStatus: 'initial',
  editError: '',
};
