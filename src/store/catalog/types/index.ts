import { IProduct } from '../../../types/interfaces';
import { TStatus } from '../../../types/types';
import { ICategoryFilterItem } from '../../../components/Filters/types';

export interface ICatalogSlice {
  status: TStatus;
  error: string;
  productList: IProduct[];
  categories: ICategoryFilterItem[];
  totalProducts: number;
}
