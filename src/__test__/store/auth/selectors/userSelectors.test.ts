import {
  selectUserLoadingStatus,
  selectUserError,
  selectIsSuccess,
  selectEditError,
  selectEditStatus,
} from '../../../../store/user/selectors';
import { initialUserSliceMock, storeMock } from '../../../../__mocks__/storeMock';

jest.mock('../../../../constant/metaData', () => {});
jest.mock('../../../../services/sdk/product/methods', () => {});
jest.mock('../../../../services/sdk/catalog/methods', () => {});
jest.mock('../../../../services/sdk/customer/methods', () => {});

describe('Test redux catalog selectors: ', () => {
  test('should select loading status from the store', () => {
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
