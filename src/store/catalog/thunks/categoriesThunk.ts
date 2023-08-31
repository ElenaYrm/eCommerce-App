import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkError, getCategoryList } from '../../../utils';
import { getCategories } from '../../../services/sdk/catalog/methods';
import { ICategoryFilterItem } from '../../../components/Filters/types';

export const categoriesThunk = createAsyncThunk<
  ICategoryFilterItem[],
  void,
  {
    rejectValue: string;
  }
>('catalog/categoriesThunk', async (_, thunkAPI) => {
  try {
    const response = await getCategories();
    return getCategoryList(response.body.results);
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(checkError(error));
  }
});
