import { createSlice } from '@reduxjs/toolkit';
import { categoriesThunk, productListThunk } from '../thunks';
import { initialProductListSlice } from '../../../constant';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: initialProductListSlice,
  reducers: {
    resetProductList: (state) => {
      state.productList = [];
      state.totalProducts = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productListThunk.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(productListThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.productList = payload.list;
        state.totalProducts = payload.count;
      })
      .addCase(productListThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(categoriesThunk.pending, (state) => {
        state.status = 'loading';
        state.error = 'success';
      })
      .addCase(categoriesThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.categories = payload;
      })
      .addCase(categoriesThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      });
  },
});

export const { resetProductList } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
