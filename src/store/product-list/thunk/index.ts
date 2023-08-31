import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueryParam } from '@commercetools/sdk-client-v2';
import { IProduct } from '../../../types/interfaces';
import { getProductsList } from '../../../services/sdk/product-list/methods';
import { checkError } from '../../../utils';
import { parseProductListData } from '../../../utils';

export const productListThunk = createAsyncThunk<
  IProduct[],
  {
    [p: string]: QueryParam;
  },
  { rejectValue: string }
>('products-list/productListThunk', async (param, { rejectWithValue }) => {
  try {
    const res = await getProductsList(param);
    return parseProductListData(res.body.results);
  } catch (err: unknown) {
    return rejectWithValue(checkError(err));
  }
});
