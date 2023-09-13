import { createSlice } from '@reduxjs/toolkit';
import { deleteCartThunk, getCartThunk, getDiscountsThunk, updateCartThunk } from '../thunks';
import { initialBasket, initialCart } from '../../../constant';

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    resetCart: (state) => {
      state.basket = initialBasket;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getCartThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.basket = payload;
      })
      .addCase(getCartThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(updateCartThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updateCartThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.basket = payload;
      })
      .addCase(updateCartThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(deleteCartThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deleteCartThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.basket = payload;
      })
      .addCase(deleteCartThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(getDiscountsThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getDiscountsThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.discounts = payload;
      })
      .addCase(getDiscountsThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const { resetCart } = cartSlice.actions;
