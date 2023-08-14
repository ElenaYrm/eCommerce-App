import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions, httpMiddlewareOptions } from '../middlewares';

export const authFlowClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();
