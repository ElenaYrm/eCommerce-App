import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { loginCustomer } from '../../../services/sdk/auth/methods';
import { checkError } from '../../../utils';
import { IAuthSlice } from '../types';
import { tokenData } from '../../../services/sdk/auth/token';

export const loginThunk = createAsyncThunk<
  string,
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
      const token = tokenData.get().refreshToken;
      if (token) {
        localStorage.setItem('token', token);
      }

      return user.body.customer.id;
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
