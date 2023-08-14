import { RootState } from '../../store.ts';
import { IAuthSlice } from '../types';
import { IUser } from '../../../types';

export const selectIsAuthorized = (state: RootState): boolean => state.auth.isAuthorized;
export const selectIsNewUser = (status: RootState): boolean => status.auth.isNewUser;
export const selectLoadingInfo = (state: RootState): Pick<IAuthSlice, 'status' | 'error'> => ({
  status: state.auth.status,
  error: state.auth.error,
});
export const selectUserData = (state: RootState): IUser => state.auth.user;
