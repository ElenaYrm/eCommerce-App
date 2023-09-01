import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthSlice } from '../types';
import { checkError } from '../../../utils';
import { getCustomer } from '../../../services/sdk/auth/methods/getCustomer';

export const getCustomerThunk = createAsyncThunk<
  string,
  void,
  {
    state: { auth: IAuthSlice };
    rejectValue: string;
  }
>(
  'auth/getCustomerThunk',
  async (_, { rejectWithValue }) => {
    try {
      const user = await getCustomer();
      return user.body.id;
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
