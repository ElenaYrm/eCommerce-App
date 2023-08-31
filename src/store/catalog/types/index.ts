import { IProduct } from '../../../types/interfaces';
import { TStatus } from '../../../types/types';

export interface ICatalogSlice {
  status: TStatus;
  error: string;
  productList: IProduct[];
  categories: string[];
}
