import {
  selectUserLoadingStatus,
  selectUserError,
  selectIsSuccess,
  selectEditError,
  selectEditStatus,
} from '../../../../store/user/selectors';
import { initialUserSliceMock, storeMock } from '../../../../__mocks__/storeMock.ts';

jest.mock('../../../../constant/metaData', () => {});

describe('Test redux user selectors: ', () => {
  test('should select user loading status from the store', () => {
    const result = selectUserLoadingStatus(storeMock);
    expect(result).toEqual(initialUserSliceMock.status);
  });

  test('should select user error from the store', () => {
    const result = selectUserError(storeMock);
    expect(result).toEqual(initialUserSliceMock.error);
  });

  test('should select isSuccess from the store', () => {
    const result = selectIsSuccess(storeMock);
    expect(result).toEqual(initialUserSliceMock.isSuccess);
  });

  test('should select editError list array from the store', () => {
    const result = selectEditError(storeMock);
    expect(result).toEqual(initialUserSliceMock.editError);
  });

  test('should select editStatus list array from the store', () => {
    const result = selectEditStatus(storeMock);
    expect(result).toEqual(initialUserSliceMock.editStatus);
  });
});
