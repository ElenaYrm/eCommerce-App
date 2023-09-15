import { IAuthSlice } from '../../store/auth/types';

export const initialAuthSliceMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: false,
  status: 'initial',
  error: '',
  userId: '',
};

export const resultAuthSliceMock: IAuthSlice = {
  isAuthorized: false,
  isNewUser: true,
  status: 'error',
  error: 'Some error',
  userId: '',
};
