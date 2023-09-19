import { Cart, CartUpdateAction, ClientResponse } from '@commercetools/platform-sdk';
import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export interface IUpdateCart {
  id: string;
  version: number;
  actions: CartUpdateAction[];
}

export const updateCart = ({ id, version, actions }: IUpdateCart): Promise<ClientResponse<Cart>> => {
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
};
