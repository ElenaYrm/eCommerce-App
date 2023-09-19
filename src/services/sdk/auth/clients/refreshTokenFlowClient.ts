import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import { httpMiddlewareOptions, refreshTokenMiddleware } from '../middlewares';

export const refreshTokenFlowClient = (token: string): Client =>
  new ClientBuilder()
    .withRefreshTokenFlow(refreshTokenMiddleware(token))
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
