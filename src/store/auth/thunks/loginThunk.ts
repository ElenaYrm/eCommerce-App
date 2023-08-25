import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { loginCustomer } from '../../../services/sdk/auth/methods';
import { checkError, extractLocalUser } from '../../../utils';
import { IAuthSlice } from '../types';
import { IUser } from '../../../types/interfaces';
import { tokenData } from '../../../services/sdk/auth/token';

export const loginThunk = createAsyncThunk<
  IUser,
  UserAuthOptions,
  {
    state: { auth: IAuthSlice };
    rejectValue: string;
  }
>(
  'auth/loginThunk',
  async (body, { rejectWithValue }) => {
    try {
      const user = await loginCustomer(body);
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
