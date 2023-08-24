import { type PasswordAuthMiddlewareOptions, UserAuthOptions } from '@commercetools/sdk-client-v2';
import { projectKey } from '../../index';
import { tokenData } from '../token';
import { VITE_CTP_AUTH_URL, VITE_CTP_CLIENT_ID, VITE_CTP_CLIENT_SECRET } from '../../../../constant';

export const passwordMiddlewareOptions = (user: UserAuthOptions): PasswordAuthMiddlewareOptions => ({
  host: VITE_CTP_AUTH_URL,
  projectKey: projectKey,
  credentials: {
    clientId: VITE_CTP_CLIENT_ID,
    clientSecret: VITE_CTP_CLIENT_SECRET,
    user,
  },
  tokenCache: tokenData,
  fetch,
});
