import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk, logoutThunk } from '../thunks';
import { initialAuthState, initialUser } from '../../../constant';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    deleteNotice: (state): void => {
      state.isNewUser = false;
    },
    resetError: (state): void => {
      state.status = 'initial';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isAuthorized = true;
        state.user = payload;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isAuthorized = false;
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(registerThunk.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isAuthorized = true;
        state.isNewUser = true;
        state.user = payload;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isAuthorized = false;
        state.status = 'error';
        state.error = payload || 'Something was wrong';
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isAuthorized = false;
        state.user = initialUser;
        state.status = 'initial';
        state.error = '';
      });
  },
});

export const authReducer = authSlice.reducer;
export const { deleteNotice, resetError } = authSlice.actions;
