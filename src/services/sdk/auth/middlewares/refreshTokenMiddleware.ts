import { RefreshAuthMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { VITE_CTP_AUTH_URL, VITE_CTP_CLIENT_ID, VITE_CTP_CLIENT_SECRET } from '../../../../constant';
import { projectKey } from '../../index';
import { tokenData } from '../token';

export const refreshTokenMiddleware = (token: string): RefreshAuthMiddlewareOptions => ({
  host: VITE_CTP_AUTH_URL,
  projectKey: projectKey,
  credentials: {
    clientId: VITE_CTP_CLIENT_ID,
    clientSecret: VITE_CTP_CLIENT_SECRET,
  },
  refreshToken: token,
  tokenCache: tokenData,
  fetch,
});
