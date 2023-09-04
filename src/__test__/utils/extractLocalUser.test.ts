import { customerObject, customerWithMissingProperties } from '../../__mocks__/utils/extractLocalUserMock';
import { extractLocalUser } from '../../utils';

jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../constant', () => 'en-US');

describe('Test extractLocalUser function', () => {
  test('should extract user properties from a customer object', () => {
    const result = extractLocalUser(customerObject);

    expect(result).toEqual({
      id: '123',
      version: 1,
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'password123',
      date: '01',
      month: '01',
      year: '1990',
      defaultShippingAddressId: '',
      defaultBillingAddressId: '',
      shippingAddressIds: [],
      billingAddressIds: [],
      addresses: [],
    });
  });

  test('should set default values for missing properties', () => {
    const result = extractLocalUser(customerWithMissingProperties);

    expect(result).toEqual({
      id: '123',
      version: 1,
      email: 'test@example.com',
      firstName: '',
      lastName: '',
      password: '',
      date: '',
      month: '',
      year: '',
      defaultShippingAddressId: '',
      defaultBillingAddressId: '',
      shippingAddressIds: [],
      billingAddressIds: [],
      addresses: [],
    });
  });
});
