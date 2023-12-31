import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDiscount } from '../types';
import { checkError } from '../../../utils';
import { getDiscountCodes } from '../../../services/sdk/cart/methods';

export const getDiscountsThunk = createAsyncThunk<
  IDiscount[],
  void,
  {
    rejectValue: string;
  }
>('cart/getDiscountsThunk', async (_, { rejectWithValue }) => {
  try {
    const response = await getDiscountCodes();
    const codes: IDiscount[] = [];
    response.body.results.forEach((item) => {
      codes.push({
        id: item.id,
        code: item.code,
      });
    });

    return codes;
  } catch (error: unknown) {
    return rejectWithValue(checkError(error));
  }
});
