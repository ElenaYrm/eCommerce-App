import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerCustomer, setAddresses } from '../../../services/sdk/auth/methods';
import { checkError, extractLocalUser } from '../../../utils';
import { INewUser, IUser } from '../../../types';
import { IAuthSlice } from '../types';

export const registerThunk = createAsyncThunk<
  IUser,
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
      const addresses = await setAddresses(
        user.body.customer.id,
        user.body.customer.version,
        user.body.customer.addresses,
      );

      return extractLocalUser(addresses.body);
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
