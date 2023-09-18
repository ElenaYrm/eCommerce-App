import { Action } from '@reduxjs/toolkit';
import { userReducer, deleteSuccessState, resetEditError } from '../../../../store/user/slice';
import { initialUserState } from '../../../../constant';
import { resultUserSliceMock } from '../../../../__mocks__/store';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/auth/methods', () => {});
jest.mock('../../../../services/sdk/customer/methods', () => {});

describe('Test redux user slice: ', () => {
  test('should return default state when passed an empty action', () => {
    const result = userReducer(undefined, { type: '' });
    expect(result).toEqual(initialUserState);
  });

  test('should set success status to initial value with "deleteSuccessState" action', () => {
    const action: Action = { type: deleteSuccessState.type };
    const result = userReducer(resultUserSliceMock, action);
    expect(result.isSuccess).toBeFalsy();
  });

  test('should reset error and status to initial values with "resetEditError" action', () => {
    const action: Action = { type: resetEditError.type };
    const result = userReducer(resultUserSliceMock, action);
    expect(result.error).toBe('');
    expect(result.status).toBe('initial');
  });
});
