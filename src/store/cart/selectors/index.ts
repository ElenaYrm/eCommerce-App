import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TStatus } from '../../../types/types';
import { ICart, ICartSlice, IDiscount } from '../types';
import { IProductSlice } from '../../product/types';

export const selectCart = (state: RootState): ICart => state.cart.basket;
export const selectCartLoadingStatus = (state: RootState): TStatus => state.cart.status;
export const selectCartError = (state: RootState): string => state.cart.error;
export const selectDiscountsCodes = (state: RootState): IDiscount[] => state.cart.discounts;
export const selectProduct = (state: RootState): IProductSlice => state.product;

export const selectCartLoadingInfo = createSelector(
  selectCartLoadingStatus,
  selectCartError,
  (status, error): Pick<ICartSlice, 'status' | 'error'> => ({
    status,
    error,
  }),
);
export const selectCartData = createSelector(
  selectCart,
  selectDiscountsCodes,
  (basket, discounts): Pick<ICartSlice, 'basket' | 'discounts'> => ({
    basket,
    discounts,
  }),
);
