import { createSlice } from '@reduxjs/toolkit';
import { productListThunk } from '../thunk';
import { initialProductListSlice } from '../../../constant';

const productListSlice = createSlice({
  name: 'productList',
  initialState: initialProductListSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productListThunk.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(productListThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.productList = action.payload;
      })
      .addCase(productListThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const productListReducer = productListSlice.reducer;
