import { type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { VITE_CTP_API_URL } from '../../../../constant';

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: VITE_CTP_API_URL,
  fetch,
};
