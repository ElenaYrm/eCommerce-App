import { authRoot } from '../../auth/roots/index.ts';
import { ClientResponse, CustomerChangePassword } from '@commercetools/platform-sdk';
import { projectKey } from '../../index.ts';

export const updateUserInfo = (id: string, values: CustomerChangePassword): Promise<ClientResponse> => {
  const { version, currentPassword, newPassword } = values;
  return authRoot
    .withProjectKey({ projectKey })
    .customers()
    .password()
    .post({
      body: {
        id,
        version,
        currentPassword,
        newPassword,
      },
    })
    .execute();
};
