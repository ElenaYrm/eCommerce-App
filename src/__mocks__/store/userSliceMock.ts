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

export const resultUserMock: IUser = {
  id: 'some',
  version: 1,
  email: 'test@test.com',
  firstName: 'Name',
  lastName: 'Surname',
  password: 'xxx',
  date: '1',
  month: 'January',
  year: '2000',
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
  user: resultUserMock,
  status: 'initial',
  error: '',
  isSuccess: false,
  editStatus: 'initial',
  editError: '',
};
