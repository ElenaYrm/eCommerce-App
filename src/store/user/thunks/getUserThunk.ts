import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { getCustomer } from '../../../services/sdk/customer/methods';

export const getUserThunk = createAsyncThunk<
  IUser,
  void,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'auth/getCustomerThunk',
  async (_, { rejectWithValue }) => {
    try {
      const user = await getCustomer();
      return extractLocalUser(user.body);
    } catch (error: unknown) {
      return rejectWithValue(checkError(error));
    }
  },
  {
    condition: (_, { getState }): boolean => {
      const {
        user: { status },
      } = getState();

      return !(status === 'loading');
    },
  },
);
