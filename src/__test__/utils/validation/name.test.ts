import { nameValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

jest.mock('../../../constant/metaData', () => {});

describe(`Test Name ${validFunc}`, () => {
  it('Should return empty string for a valid Name', () => {
    const validName = 'g';
    const result = nameValidate(validName);
    expect(result).toBe('');
  });

  it(`${shouldReturnError} an empty Name`, () => {
    const emptyName = '';
    const result = nameValidate(emptyName);
    expect(result).toBe(errorMsg.firstName.empty);
  });

  it(`${shouldReturnError} an invalid Name`, () => {
    const invalidName = 'G1';
    const result = nameValidate(invalidName);
    expect(result).toBe(errorMsg.firstName.invalid);
  });
});
