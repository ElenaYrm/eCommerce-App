import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUpdPasswordData, IUserSlice } from '../types';
import { changeCustomerPassword } from '../../../services/sdk/customer/methods';
import { loginCustomer } from '../../../services/sdk/auth/methods';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';
import { initialTokenInfo, tokenData } from '../../../services/sdk/auth/token';

export const updPasswordThunk = createAsyncThunk<
  IUser,
  IUpdPasswordData,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/updPassword',
  async (passwordsData, { rejectWithValue }) => {
    try {
      await changeCustomerPassword(passwordsData.passwordData);
      const loginData: UserAuthOptions = {
        username: passwordsData.email,
        password: passwordsData.passwordData.newPassword,
      };
      tokenData.set(initialTokenInfo);
      const user = await loginCustomer(loginData);
      const token = tokenData.get().refreshToken;
      if (token) {
        localStorage.setItem('token', token);
      }
      return extractLocalUser(user.body.customer);
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
