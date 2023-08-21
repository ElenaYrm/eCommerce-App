import { type AuthMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { projectKey } from '../../index';
import { tokenData } from '../token';

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: import.meta.env.VITE_CTP_AUTH_URL,
  projectKey: projectKey,
  credentials: {
    clientId: import.meta.env.VITE_CTP_CLIENT_ID,
    clientSecret: import.meta.env.VITE_CTP_CLIENT_SECRET,
  },
  tokenCache: tokenData,
  fetch,
};
