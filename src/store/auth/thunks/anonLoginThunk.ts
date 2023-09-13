import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { loginCustomer } from '../../../services/sdk/auth/methods';
import { checkError } from '../../../utils';
import { IAuthSlice } from '../types';
import { initialTokenInfo, tokenData } from '../../../services/sdk/auth/token';
import { anonLoginCustomer } from '../../../services/sdk/auth/methods/anonLoginCustomer.ts';

export const anonLoginThunk = createAsyncThunk<
  string,
  UserAuthOptions,
  {
    state: { auth: IAuthSlice };
    rejectValue: string;
  }
>(
  'auth/anonLoginThunk',
  async (body, { rejectWithValue }) => {
    try {
      await anonLoginCustomer(body);
      tokenData.set(initialTokenInfo);
      localStorage.removeItem('art-anon-token');

      const user = await loginCustomer(body);
      const token = tokenData.get().refreshToken;
      if (token) {
        localStorage.setItem('art-token', token);
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
