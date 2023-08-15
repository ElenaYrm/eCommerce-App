import { TStatus } from '../../../types/types';
import { IUser } from '../../../types/interfaces';

export interface IAuthSlice {
  isAuthorized: boolean;
  isNewUser: boolean;
  status: TStatus;
  error: string;
  user: IUser;
}
