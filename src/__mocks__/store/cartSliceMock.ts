import { ICartSlice, IItemCart } from '../../store/cart/types';

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

const lineItemMock: IItemCart = {
  itemId: 'id',
  productId: 'prodId',
  name: 'name',
  artist: 'artist',
  image: 'image',
  quantity: 2,
  price: 100,
  discountedPrice: 90,
  totalPrice: 180,
};

export const resultCartSliceMock: ICartSlice = {
  status: 'error',
  error: 'some error',
  basket: {
    id: 'is',
    version: 1,
    lineItems: [lineItemMock],
    totalPrice: 180,
    totalQuantity: 2,
    codes: [],
  },
  discounts: [],
};
