import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICart, ICartSlice } from '../types';
import { checkError } from '../../../utils';
import { deleteCartById, IDeleteCart } from '../../../services/sdk/cart/methods';
import { initialBasket } from '../../../constant';

export const deleteCartThunk = createAsyncThunk<
  ICart,
  IDeleteCart,
  {
    state: { cart: ICartSlice };
    rejectValue: string;
  }
>(
  'cart/deleteCartThunk',
  async (body, { rejectWithValue }) => {
    try {
      await deleteCartById(body);
      return initialBasket;
    } catch (error: unknown) {
      return rejectWithValue(checkError(error));
    }
  },
  {
    condition: (_, { getState }): boolean => {
      const {
        cart: { status },
      } = getState();

      return !(status === 'loading');
    },
  },
);
