import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { IRemoveAddress } from '../../../services/sdk/customer/types';
import { removeAddress } from '../../../services/sdk/customer/methods';

export const removeAddressThunk = createAsyncThunk<
  IUser,
  IRemoveAddress,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/removeAddressThunk',
  async (removeData, { rejectWithValue }) => {
    try {
      const user = await removeAddress(removeData);
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
