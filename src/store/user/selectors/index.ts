import { RootState } from '../../store';
import { TStatus } from '../../../types/types';
import { createSelector } from '@reduxjs/toolkit';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';

export const selectUserLoadingStatus = (state: RootState): TStatus => state.user.status;
export const selectUserError = (state: RootState): string => state.user.error;
export const selectIsSuccess = (state: RootState): boolean => state.user.isSuccess;
export const selectEditError = (state: RootState): string => state.user.editError;
export const selectEditStatus = (state: RootState): TStatus => state.user.editStatus;
export const selectUserLoadingInfo = createSelector(
  selectUserLoadingStatus,
  selectUserError,
  (status, error): Pick<IUserSlice, 'status' | 'error'> => ({
    status,
    error,
  }),
);
export const selectEditUserInfo = createSelector(
  selectEditStatus,
  selectEditError,
  selectIsSuccess,
  (editStatus, editError, isSuccess): Pick<IUserSlice, 'editStatus' | 'editError' | 'isSuccess'> => ({
    editStatus,
    editError,
    isSuccess,
  }),
);
export const selectUserData = (state: RootState): IUser => state.user.user;
