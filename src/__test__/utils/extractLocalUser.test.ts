import { customerObject, customerWithMissingProperties, resultDefaultUser, resultUser } from '../../__mocks__/utils';
import { extractLocalUser } from '../../utils';

jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../constant', () => {
  return {
    LANG_CODE: 'en-US',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  };
});

describe('Test extractLocalUser function', () => {
  test('should extract user properties from a customer object', () => {
    const result = extractLocalUser(customerObject);

    expect(result).toEqual(resultUser);
  });

  test('should set default values for missing properties', () => {
    const result = extractLocalUser(customerWithMissingProperties);

    expect(result).toEqual(resultDefaultUser);
  });
});
