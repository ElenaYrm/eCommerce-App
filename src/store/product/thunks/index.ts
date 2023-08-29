import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/interfaces';
import { IProductSlice } from '../types';
import { checkError } from '../../../utils';

import { fetchProductData } from '../../../services/sdk/product/methods';
import { parseProductData } from '../../../utils';

export const productThunk = createAsyncThunk<
  IProduct,
  string,
  {
    state: { product: IProductSlice };
    rejectValue: string;
  }
>(
  'product/productThunk',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetchProductData(id);
      return parseProductData(res.body);
    } catch (err: unknown) {
      return rejectWithValue(checkError(err));
    }
  },
  {
    condition: (_, { getState }): boolean => {
      const status = getState().product.status;

      return !(status === 'loading');
    },
  },
);
