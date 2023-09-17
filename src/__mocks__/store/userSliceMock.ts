import { IUser } from '../../types/interfaces';
import { IUserSlice } from '../../store/user/types';

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

export const initialUserSliceMock: IUserSlice = {
  user: initialUserMock,
  status: 'initial',
  error: '',
  isSuccess: false,
  editStatus: 'initial',
  editError: '',
};

export const resultUserSliceMock: IUserSlice = {
  user: initialUserMock,
  status: 'initial',
  error: '',
  isSuccess: false,
  editStatus: 'initial',
  editError: '',
};
