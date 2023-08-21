import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerCustomer } from '../../../services/sdk/auth/methods';
import { checkError, extractLocalUser } from '../../../utils';
import { INewUser, IUser } from '../../../types/interfaces';
import { IAuthSlice } from '../types';
import { tokenData } from '../../../services/sdk/auth/token';

export const registerThunk = createAsyncThunk<
  IUser,
  INewUser,
  {
    state: { auth: IAuthSlice };
    rejectValue: string;
  }
>(
  'auth/signupThunk',
  async (body, { rejectWithValue }) => {
    try {
      const user = await registerCustomer(body);
      const token = tokenData.get().token;
      if (token) {
        localStorage.setItem('access-token', token);
      }

      return extractLocalUser(user.body.customer);
    } catch (error: unknown) {
      return rejectWithValue(checkError(error));
    }
  },
  {
    condition: (_, { getState }): boolean => {
      const {
        auth: { status },
      } = getState();

      return !(status === 'loading');
    },
  },
);
