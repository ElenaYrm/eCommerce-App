import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { changeCustomerPassword } from '../../../services/sdk/customer/methods/changeCustomerPassword';
import { CustomerChangePassword } from '@commercetools/platform-sdk';

export const updPasswordThunk = createAsyncThunk<
  IUser,
  CustomerChangePassword,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/updPassword',
  async (passwordsData, { rejectWithValue }) => {
    try {
      const user = await changeCustomerPassword(passwordsData);
      console.log(user);
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
