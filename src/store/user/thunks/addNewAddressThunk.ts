import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, extractLocalUser } from '../../../utils';
import { IUser } from '../../../types/interfaces';
import { IUserSlice } from '../types';
import { addAddress, setDefaultAddressId } from '../../../services/sdk/customer/methods';
import { IAddNewAddress, ISetDefaultAddress } from '../../../services/sdk/customer/types';

export const addNewAddressThunk = createAsyncThunk<
  IUser,
  IAddNewAddress,
  {
    state: { user: IUserSlice };
    rejectValue: string;
  }
>(
  'user/addNewAddressThunk',
  async (objects, { rejectWithValue }) => {
    try {
      const results = await addAddress(objects);
      if (objects.isDefault) {
        const setDefaultData: ISetDefaultAddress = {
          version: results.body.version,
          addressId: results.body.addresses[results.body.addresses.length - 1].id || '',
          isShipping: objects.isShipping,
          customerId: objects.id,
        };
        await setDefaultAddressId(setDefaultData);
      }

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
