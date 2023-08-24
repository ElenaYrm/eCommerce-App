import { RootState } from '../store/store';
import { IAuthSlice } from '../store/auth/types';
import { IUser } from '../types/interfaces';

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

export const storeMock: RootState = {
  auth: initialAuthMock,
};

export const resultAuthMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: true,
  status: 'error',
  error: 'Some error',
  user: initialUserMock,
};
