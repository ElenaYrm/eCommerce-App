import { Client, ClientBuilder, UserAuthOptions } from '@commercetools/sdk-client-v2';
import { httpMiddlewareOptions, passwordMiddlewareOptions } from '../middlewares';

export const passwordFlowClient = (user: UserAuthOptions): Client =>
  new ClientBuilder()
    .withPasswordFlow(passwordMiddlewareOptions(user))
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();
