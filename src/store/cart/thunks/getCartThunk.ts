import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICart } from '../types';
import { checkError } from '../../../utils';
import { getAnonCart, getCart } from '../../../services/sdk/cart/methods';
import { extractLocalCart } from '../../../utils/extractLocalCart.ts';
import { initialBasket } from '../../../constant';
import { tokenData } from '../../../services/sdk/auth/token';
import { CartPagedQueryResponse, ClientResponse } from '@commercetools/platform-sdk';

export const getCartThunk = createAsyncThunk<
  ICart,
  void,
  {
    rejectValue: string;
  }
>('cart/getCartThunk', async (_, { rejectWithValue }) => {
  try {
    const isExistToken = !!localStorage.getItem('art-anon-token') || !!localStorage.getItem('art-token');

    let response: ClientResponse<CartPagedQueryResponse>;

    if (isExistToken) {
      response = await getCart();
    } else {
      response = await getAnonCart();
      const token = tokenData.get().refreshToken;
      if (token) {
        localStorage.setItem('art-anon-token', token);
      }
    }

    const cart = response.body.results.find((item) => item.cartState === 'Active');

    if (cart) {
      return extractLocalCart(cart);
    }

    return initialBasket;
  } catch (error: unknown) {
    return rejectWithValue(checkError(error));
  }
});
