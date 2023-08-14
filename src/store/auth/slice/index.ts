import { IAuthSlice } from '../types';
import { loginThunk, registerThunk } from '../thunks';
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../types';

const initialUser: IUser = {
  id: '',
  version: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  dateOfBirth: '',
};

const initialState: IAuthSlice = {
  isAuthorized: false,
  isNewUser: false,
  status: 'initial',
  error: '',
  user: initialUser,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteNotice: (state): void => {
      state.isNewUser = false;
    },
    // logout: (state): void => {
    //   state.isAuthorized = false;
    //   state.user = initialUser;
    //   state.status = 'initial';
    //   state.error = '';
    // },
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
      });
  },
});

export const authReducer = authSlice.reducer;
export const { deleteNotice } = authSlice.actions;
