import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginCustomer, registerCustomer } from '../../../services/sdk/auth/methods';
import { checkError } from '../../../utils';
import { INewUser } from '../../../types/interfaces';
import { IAuthSlice } from '../types';
import { initialTokenInfo, tokenData } from '../../../services/sdk/auth/token';

export const registerThunk = createAsyncThunk<
  string,
  INewUser,
  {
    state: { auth: IAuthSlice };
    rejectValue: string;
  }
>(
  'auth/signupThunk',
  async (body, { rejectWithValue }) => {
    try {
      tokenData.set(initialTokenInfo);
      await registerCustomer(body);
      tokenData.set(initialTokenInfo);
      const user = await loginCustomer({ username: body.email, password: body.password });
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
