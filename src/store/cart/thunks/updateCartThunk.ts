import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICart, ICartSlice } from '../types';
import { checkError } from '../../../utils';
import { createCart, IUpdateCart, updateCart } from '../../../services/sdk/cart/methods';
import { extractLocalCart } from '../../../utils/extractLocalCart.ts';
// import { initialTokenInfo, tokenData } from '../../../services/sdk/auth/token';

export const updateCartThunk = createAsyncThunk<
  ICart,
  IUpdateCart,
  {
    state: { cart: ICartSlice };
    rejectValue: string;
  }
>(
  'cart/updateCartThunk',
  async (body, { rejectWithValue }) => {
    try {
      if (!body.id) {
        // tokenData.set(initialTokenInfo);
        const cart = await createCart(body.isAuth);
        const res = await updateCart({
          id: cart.body.id,
          version: cart.body.version,
          actions: body.actions,
          isAuth: body.isAuth,
        });
        return extractLocalCart(res.body);
      } else {
        const res = await updateCart(body);
        return extractLocalCart(res.body);
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
