import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { anonymousFlowClient, authFlowClient, passwordFlowClient, refreshTokenFlowClient } from '../clients';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';

export const authRoot = createApiBuilderFromCtpClient(authFlowClient);
export const passwordRoot = (user: UserAuthOptions): ApiRoot => createApiBuilderFromCtpClient(passwordFlowClient(user));
export const refreshTokenRoot = (): ApiRoot => {
  const token = localStorage.getItem('art-token') || localStorage.getItem('art-anon-token') || '';

  return createApiBuilderFromCtpClient(refreshTokenFlowClient(token));
};

export const anonymousRoot = createApiBuilderFromCtpClient(anonymousFlowClient);
