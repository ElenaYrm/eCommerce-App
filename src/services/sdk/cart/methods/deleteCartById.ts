import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import { anonymousRoot, refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export interface IDeleteCart {
  id: string;
  version: number;
  isAuth: boolean;
}

export const deleteCartById = ({ id, version, isAuth }: IDeleteCart): Promise<ClientResponse<Cart>> => {
  if (isAuth) {
    return refreshTokenRoot()
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: id })
      .delete({
        queryArgs: {
          version,
        },
      })
      .execute();
  } else {
    return anonymousRoot
      .withProjectKey({ projectKey })
      .carts()
      .withId({ ID: id })
      .delete({
        queryArgs: {
          version,
        },
      })
      .execute();
  }
};
