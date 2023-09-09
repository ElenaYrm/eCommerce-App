import { Cart, CartUpdateAction, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousRoot, refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export interface IUpdateCart {
  id: string;
  version: number;
  actions: CartUpdateAction[];
  isAuth: boolean;
}

export const updateCart = ({ id, version, actions, isAuth }: IUpdateCart): Promise<ClientResponse<Cart>> => {
  if (isAuth) {
    return refreshTokenRoot()
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: id })
      .post({
        body: {
          version,
          actions,
        },
      })
      .execute();
  } else {
    return anonymousRoot
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: id })
      .post({
        body: {
          version,
          actions,
        },
      })
      .execute();
  }
};

//   {
//     action: 'addLineItem',
//     productId: 'sfsdfsdf',
//     variantId : 1,
//     quantity : 1,
//   },
//   {
//     action: 'removeLineItem',
//     lineItemId: "{{lineItemId}}",
//     quantity: 1,
//   },
//
//   {
//     "action": "changeLineItemQuantity",
//     "lineItemId": "{{lineItemId}}",
//     "quantity": 1
//   }

// {
//     "action": "removeDiscountCode",
//     "discountCode": {
//       "typeId": "discount-code",
//       "id": "{{discount-code-id}}"
//     }
//   },
//   {
//     "action": "addDiscountCode",
//     "code": "mydiscountcode"
//   },
// {
//     "action": "recalculate",
//     "updateProductData": true,
//   },
