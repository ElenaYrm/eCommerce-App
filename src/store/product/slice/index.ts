import { createSlice } from '@reduxjs/toolkit';
import { initialProductSlice } from '../../../constant/initialStates';
import { productThunk } from '../thunks';

export const productSlice = createSlice({
  name: 'product',
  initialState: initialProductSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productThunk.pending, (state) => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(productThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.product = action.payload;
      })
      .addCase(productThunk.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const productReducer = productSlice.reducer;
