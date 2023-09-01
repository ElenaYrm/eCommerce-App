import { TStatus } from '../../../types/types';

export interface IAuthSlice {
  isAuthorized: boolean;
  isNewUser: boolean;
  status: TStatus;
  error: string;
  userId: string;
}
