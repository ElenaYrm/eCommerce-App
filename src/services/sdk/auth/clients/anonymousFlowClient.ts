import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { anonymousMiddleware, httpMiddlewareOptions } from '../middlewares';

export const anonymousFlowClient = new ClientBuilder()
  .withAnonymousSessionFlow(anonymousMiddleware)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();
