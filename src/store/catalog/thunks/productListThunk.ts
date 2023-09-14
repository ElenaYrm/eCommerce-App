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

interface IProductListThunk {
  params: {
    [p: string]: QueryParam;
  };
  list: IProduct[];
}

export const productListThunk = createAsyncThunk<IProductsListData, IProductListThunk, { rejectValue: string }>(
  'catalog/productListThunk',
  async ({ params, list }, { rejectWithValue }) => {
    try {
      const res = await getProductList(params);
      return {
        list: [...list, ...parseProductListData(res.body.results)],
        count: res.body.total || 0,
      };
    } catch (err: unknown) {
      return rejectWithValue(checkError(err));
    }
  },
);
