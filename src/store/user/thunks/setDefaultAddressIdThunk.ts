import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { ISetDefaultAddress } from '../../../services/sdk/customer/types';
import { setDefaultAddressId } from '../../../services/sdk/customer/methods';

export const setDefaultAddressIdThunk = createAsyncThunk<
  IUser,
  ISetDefaultAddress,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/setDefaultAddressIdThunk',
  async (defaultAddressData, { rejectWithValue }) => {
    try {
      const user = await setDefaultAddressId(defaultAddressData);

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
