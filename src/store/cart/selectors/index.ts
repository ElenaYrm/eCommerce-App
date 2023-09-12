import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TStatus } from '../../../types/types';
import { ICart, ICartSlice } from '../types';

export const selectCart = (state: RootState): ICart => state.cart.basket;
export const selectCartLoadingStatus = (state: RootState): TStatus => state.cart.status;
export const selectCartError = (state: RootState): string => state.cart.error;
export const selectAuthLoadingInfo = createSelector(
  selectCartLoadingStatus,
  selectCartError,
  (status, error): Pick<ICartSlice, 'status' | 'error'> => ({
    status,
    error,
  }),
);
