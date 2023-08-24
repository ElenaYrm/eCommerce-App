import { authReducer, deleteNotice, resetError } from '../../../../store/auth/slice';
import { initialAuthState } from '../../../../constant';
import { Action } from '@reduxjs/toolkit';
import { resultAuthMock } from '../../../../__mocks__/storeMock.ts';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/auth/methods', () => {});

describe('Test redux slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = authReducer(undefined, { type: '' });
    expect(result).toEqual(initialAuthState);
  });

  test('should reset isNewUser to initial value with "deleteNotice" action', () => {
    const action: Action = { type: deleteNotice.type };
    const result = authReducer(resultAuthMock, action);
    expect(result.isNewUser).toBeFalsy();
  });

  test('should reset error and status to initial values with "resetError" action', () => {
    const action: Action = { type: resetError.type };
    const result = authReducer(resultAuthMock, action);
    expect(result.error).toBe('');
    expect(result.status).toBe('initial');
  });
});
