import { Action } from '@reduxjs/toolkit';
import { authReducer, deleteNotice, resetError } from '../../../../store/auth/slice';
import { initialAuthState } from '../../../../constant';
import { resultAuthSliceMock } from '../../../../__mocks__/store';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/auth/methods', () => {});

describe('Test redux auth slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = authReducer(undefined, { type: '' });
    expect(result).toEqual(initialAuthState);
  });

  test('should reset isNewUser to initial value with "deleteNotice" action', () => {
    const action: Action = { type: deleteNotice.type };
    const result = authReducer(resultAuthSliceMock, action);
    expect(result.isNewUser).toBeFalsy();
  });

  test('should reset error and status to initial values with "resetError" action', () => {
    const action: Action = { type: resetError.type };
    const result = authReducer(resultAuthSliceMock, action);
    expect(result.error).toBe('');
    expect(result.status).toBe('initial');
  });
});
