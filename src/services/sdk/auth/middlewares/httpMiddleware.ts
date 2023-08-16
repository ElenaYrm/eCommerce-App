import { type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: import.meta.env.VITE_CTP_API_URL,
  fetch,
};
