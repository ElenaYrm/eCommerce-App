import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICart, ICartSlice } from '../types';
import { checkError } from '../../../utils';
import { getCart } from '../../../services/sdk/cart/methods';
import { extractLocalCart } from '../../../utils/extractLocalCart.ts';
import { initialBasket } from '../../../constant';

export const getCartThunk = createAsyncThunk<
  ICart,
  boolean,
  {
    state: { cart: ICartSlice };
    rejectValue: string;
  }
>(
  'cart/getCartThunk',
  async (isAuth, { rejectWithValue }) => {
    try {
      const response = await getCart(isAuth);

      if (response.body.results.length > 0) {
        return extractLocalCart(
          response.body.results.find((item) => item.cartState === 'Active') || response.body.results[0],
        );
      } else {
        return initialBasket;
      }
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
