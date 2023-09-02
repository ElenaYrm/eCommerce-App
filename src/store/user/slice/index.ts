import { createSlice } from '@reduxjs/toolkit';
import { initialUserState } from '../../../constant';
import { getUserThunk, updPasswordThunk, updUserThunk } from '../thunks';
import { removeAddressThunk } from '../thunks/removeAddressThunk';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    resetUserError: (state): void => {
      state.status = 'initial';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(updUserThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updUserThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload;
      })
      .addCase(updUserThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(updPasswordThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updPasswordThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload;
      })
      .addCase(updPasswordThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(removeAddressThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(removeAddressThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.user = payload;
      })
      .addCase(removeAddressThunk.rejected, (state, { payload }) => {
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetUserError } = userSlice.actions;