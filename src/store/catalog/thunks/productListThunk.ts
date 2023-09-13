import { createAsyncThunk } from '@reduxjs/toolkit';
import { QueryParam } from '@commercetools/sdk-client-v2';
import { IProduct } from '../../../types/interfaces.ts';
import { checkError } from '../../../utils';
import { parseProductListData } from '../../../utils';
import { getProductList } from '../../../services/sdk/catalog/methods';

interface IProductsListData {
  list: IProduct[];
  count: number;
}

export const productListThunk = createAsyncThunk<
  IProductsListData,
  {
    [p: string]: QueryParam;
  },
  { rejectValue: string }
>('catalog/productListThunk', async (param, { rejectWithValue }) => {
  try {
    const res = await getProductList(param);
    return {
      list: parseProductListData(res.body.results),
      count: res.body.total || 0,
    };
  } catch (err: unknown) {
    return rejectWithValue(checkError(err));
  }
});
