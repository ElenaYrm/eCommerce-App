import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { authFlowClient, passwordFlowClient } from '../clients';
import { UserAuthOptions } from '@commercetools/sdk-client-v2';

export const authRoot = createApiBuilderFromCtpClient(authFlowClient);
export const passwordRoot = (user: UserAuthOptions): ApiRoot => createApiBuilderFromCtpClient(passwordFlowClient(user));
