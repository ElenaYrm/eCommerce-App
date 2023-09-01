import { TStatus } from '../../../types/types';
import { IUser } from '../../../types/interfaces';

export interface IUserSlice {
  status: TStatus;
  error: string;
  user: IUser;
}
