import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IProduct } from '../../../types/interfaces';
import { TStatus } from '../../../types/types';
import { ICategoryFilterItem } from '../../../components/Filters/types';
import { ICatalogSlice } from '../types';

export const selectCategories = (state: RootState): ICategoryFilterItem[] => state.catalog.categories;
export const selectCatalogLoadingStatus = (state: RootState): TStatus => state.catalog.status;
export const selectCatalogError = (state: RootState): string => state.catalog.error;
export const selectProductlist = (status: RootState): IProduct[] => status.catalog.productList;
export const selectTotalCount = (status: RootState): number => status.catalog.totalProducts;
export const selectAuthLoadingInfo = createSelector(
  selectCatalogLoadingStatus,
  selectCatalogError,
  (status, error): Pick<ICatalogSlice, 'status' | 'error'> => ({
    status,
    error,
  }),
);

export const selectProductsInfo = createSelector(
  selectProductlist,
  selectTotalCount,
  (productList, totalProducts): Pick<ICatalogSlice, 'productList' | 'totalProducts'> => ({
    productList,
    totalProducts,
  }),
);
