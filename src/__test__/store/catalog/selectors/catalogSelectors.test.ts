import {
  selectCategories,
  selectCatalogLoadingStatus,
  selectCatalogError,
  selectProductlist,
} from '../../../../store/catalog/selectors';
import { initialCatalogSliceMock, storeMock } from '../../../../__mocks__/store';

jest.mock('../../../../constant/metaData', () => {});

describe('Test redux catalog selectors: ', () => {
  test('should select categories array from the store', () => {
    const result = selectCategories(storeMock);
    expect(result).toEqual(initialCatalogSliceMock.categories);
  });

  test('should select categories loading status from the store', () => {
    const result = selectCatalogLoadingStatus(storeMock);
    expect(result).toEqual(initialCatalogSliceMock.status);
  });

  test('should select error from the store', () => {
    const result = selectCatalogError(storeMock);
    expect(result).toEqual(initialCatalogSliceMock.error);
  });

  test('should select product list array from the store', () => {
    const result = selectProductlist(storeMock);
    expect(result).toEqual(initialCatalogSliceMock.productList);
  });
});
