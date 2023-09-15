import { ICartSlice } from '../../store/cart/types';

export const initialCartSliceMock: ICartSlice = {
  status: 'initial',
  error: '',
  basket: {
    id: '',
    version: 0,
    lineItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    codes: [],
  },
  discounts: [],
};
