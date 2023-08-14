import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { loginCustomer } from '../../../services/sdk/auth/methods';
import { checkError, extractLocalUser } from '../../../utils';
import { IAuthSlice } from '../types';
import { IUser } from '../../../types';

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
      return extractLocalUser(user.body);
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
