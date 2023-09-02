import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { IUpdateUser } from '../../../services/sdk/customer/types';
import { changeAddress } from '../../../services/sdk/customer/methods';

export const changeAddressThunk = createAsyncThunk<
  IUser,
  IUpdateUser,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/addNewAddressThunk',
  async (objects, { rejectWithValue }) => {
    try {
      const results = await changeAddress(objects);

      return extractLocalUser(results);
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
