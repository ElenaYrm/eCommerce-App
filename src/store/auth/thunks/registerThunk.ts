import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerCustomer } from '../../../services/sdk/auth/methods';
import { checkError } from '../../../utils';
import { INewUser } from '../../../types/interfaces';
import { IAuthSlice } from '../types';
import { tokenData } from '../../../services/sdk/auth/token';

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
      const user = await registerCustomer(body);
      const token = tokenData.get().token;
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
