import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IAuthSlice } from '../types';
import { IUser } from '../../../types/interfaces';
import { TStatus } from '../../../types/types';

export const selectIsAuthorized = (state: RootState): boolean => state.auth.isAuthorized;
export const selectAuthLoadingStatus = (state: RootState): TStatus => state.auth.status;
export const selectAuthError = (state: RootState): string => state.auth.error;
export const selectIsNewUser = (status: RootState): boolean => status.auth.isNewUser;
export const selectAuthLoadingInfo = createSelector(
  selectAuthLoadingStatus,
  selectAuthError,
  (status, error): Pick<IAuthSlice, 'status' | 'error'> => ({
    status,
    error,
  }),
);
export const selectUserData = (state: RootState): IUser => state.auth.user;
