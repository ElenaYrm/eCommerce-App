import { ICart, IItemCart } from '../store/cart/types';
import { Cart } from '@commercetools/platform-sdk';
import { LANG_CODE } from '../constant';

export function extractLocalCart(cart: Cart): ICart {
  const items: IItemCart[] = cart.lineItems.map((item) => ({
    itemId: item.id,
    productId: item.productId,
    name: item.name[LANG_CODE],
    quantity: item.quantity,
    price: item.totalPrice.centAmount,
  }));

  return {
    id: cart.id,
    version: cart.version,
    lineItems: items,
    totalPrice: cart.totalPrice.centAmount,
    totalQuantity: cart.totalLineItemQuantity || 0,
  };
}
