import { Cart, ClientResponse } from '@commercetools/platform-sdk';
import { refreshTokenRoot } from '../../auth/roots';
import { projectKey } from '../../index';

export interface IDeleteCart {
  id: string;
  version: number;
}

export const deleteCartById = ({ id, version }: IDeleteCart): Promise<ClientResponse<Cart>> => {
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
};
