import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueryParam } from '@commercetools/sdk-client-v2';
import { IProduct } from '../../../types/interfaces.ts';
import { checkError } from '../../../utils';
import { parseProductListData } from '../../../utils';
import { getProductList } from '../../../services/sdk/catalog/methods';

export const productListThunk = createAsyncThunk<
  IProduct[],
  {
    [p: string]: QueryParam;
  },
  { rejectValue: string }
>('catalog/productListThunk', async (param, { rejectWithValue }) => {
  try {
    const res = await getProductList(param);
    return parseProductListData(res.body.results);
  } catch (err: unknown) {
    return rejectWithValue(checkError(err));
  }
});
