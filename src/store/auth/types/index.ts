import { IUser, TStatus } from '../../../types';

export interface IAuthSlice {
  isAuthorized: boolean;
  isNewUser: boolean;
  status: TStatus;
  error: string;
  user: IUser;
}
