import { createSlice } from '@reduxjs/toolkit';
import { productListThunk } from '../thunks';
import { initialProductListSlice } from '../../../constant';

const catalogSlice = createSlice({
  name: 'catalog',
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

export const catalogReducer = catalogSlice.reducer;
