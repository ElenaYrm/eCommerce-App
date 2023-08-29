import { IProduct } from '../../../types/interfaces';
import { TStatus } from '../../../types/types';

export interface IProductSlice {
  status: TStatus;
  error: string;
  product: IProduct;
}
