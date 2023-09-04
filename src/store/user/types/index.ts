import { TStatus } from '../../../types/types';
import { IUser } from '../../../types/interfaces';
import { CustomerChangePassword } from '@commercetools/platform-sdk';

export interface IUserSlice {
  status: TStatus;
  error: string;
  user: IUser;
  isSuccess: boolean;
  editStatus: TStatus;
  editError: string;
}

export interface IUpdPasswordData {
  email: string;
  passwordData: CustomerChangePassword;
}
