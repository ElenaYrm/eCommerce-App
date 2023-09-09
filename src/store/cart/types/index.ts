import { TStatus } from '../../../types/types';

export interface ICartSlice {
  status: TStatus;
  error: string;
  basket: ICart;
}

export interface ICart {
  id: string;
  version: number;
  lineItems: IItemCart[];
  totalPrice: number;
  totalQuantity: number;
}

export interface IItemCart {
  itemId: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
}
