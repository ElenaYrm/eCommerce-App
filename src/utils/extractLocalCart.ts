import { ICart, IItemCart, IPromoCode } from '../store/cart/types';
import { Cart } from '@commercetools/platform-sdk';
import { LANG_CODE } from '../constant';

export function extractLocalCart(cart: Cart): ICart {
  const items: IItemCart[] = cart.lineItems.map((item) => ({
    itemId: item.id,
    productId: item.productId,
    name: item.name[LANG_CODE],
    artist: item.variant.attributes?.find((item) => item.name === 'artist')?.value[LANG_CODE] || '',
    image: item.variant.images?.[0].url || '',
    quantity: item.quantity,
    price: item.price.value.centAmount,
    discountedPrice: item.price.discounted?.value.centAmount || 0,
    totalPrice: item.totalPrice.centAmount,
  }));

  return {
    id: cart.id,
    version: cart.version,
    lineItems: items,
    totalPrice: cart.totalPrice.centAmount,
    totalQuantity: cart.totalLineItemQuantity || 0,
    codes:
      cart.discountCodes.map((item): IPromoCode => ({ type: item.discountCode.typeId, id: item.discountCode.id })) ||
      [],
  };
}
