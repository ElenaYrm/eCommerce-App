import { IProduct } from '../../../types/interfaces';
import { TStatus } from '../../../types/types';

export interface IProductListSlice {
  status: TStatus;
  error: string;
  productList: IProduct[];
}

export enum SearchParams {
  Search = 'search',
  Color = 'color',
  Brand = 'brand',
  Size = 'size',
  PriceFrom = 'priceFrom',
  PriceTo = 'priceTo',
  Category = 'category',
  SubCategory = 'subCategory',
}
