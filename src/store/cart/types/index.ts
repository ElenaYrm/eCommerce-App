import { TStatus } from '../../../types/types';

export interface ICartSlice {
  status: TStatus;
  error: string;
  basket: ICart;
}

export interface IPromoCode {
  type: string;
  id: string;
}

export interface ICart {
  id: string;
  version: number;
  lineItems: IItemCart[];
  totalPrice: number;
  totalQuantity: number;
  codes: IPromoCode[];
}

export interface IItemCart {
  itemId: string;
  productId: string;
  name: string;
  artist: string;
  image: string;
  quantity: number;
  price: number;
  discountedPrice: number;
  totalPrice: number;
}
