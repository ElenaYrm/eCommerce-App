import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { updateUserInfo } from '../../../services/sdk/customer/methods';
import { IUpdateUser } from '../../../services/sdk/customer/types';

export const updUserThunk = createAsyncThunk<
  IUser,
  IUpdateUser,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/updUserThunk',
  async (objects, { rejectWithValue }) => {
    try {
      const results = await updateUserInfo(objects);

      return extractLocalUser(results.body);
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
