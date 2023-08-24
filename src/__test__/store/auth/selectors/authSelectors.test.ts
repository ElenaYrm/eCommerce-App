import {
  selectAuthError,
  selectAuthLoadingStatus,
  selectIsAuthorized,
  selectIsNewUser,
  selectUserData,
} from '../../../../store/auth/selectors';
import { initialAuthMock, storeMock } from '../../../../__mocks__/storeMock';

describe('Test redux selectors: ', () => {
  test('should select isAuthorized user flag from the store', () => {
    const result = selectIsAuthorized(storeMock);
    expect(result).toEqual(initialAuthMock.isAuthorized);
  });

  test('should select loading status from the store', () => {
    const result = selectAuthLoadingStatus(storeMock);
    expect(result).toEqual(initialAuthMock.status);
  });

  test('should select error from the store', () => {
    const result = selectAuthError(storeMock);
    expect(result).toEqual(initialAuthMock.error);
  });

  test('should select isNewUser user flag from the store', () => {
    const result = selectIsNewUser(storeMock);
    expect(result).toEqual(initialAuthMock.isNewUser);
  });

  test('should select user data from the store', () => {
    const result = selectUserData(storeMock);
    expect(result).toEqual(initialAuthMock.user);
  });
});