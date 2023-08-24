import { customerObject, customerWithMissingProperties } from '../../__mocks__/utils/extractLocalUserMock';
import { extractLocalUser } from '../../utils';

describe('Test extractLocalUser function', () => {
  test('should extract user properties from a customer object', () => {
    const result = extractLocalUser(customerObject);

    expect(result).toEqual({
      email: 'test@example.com',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      id: '123',
      version: 1,
      addresses: [],
    });
  });

  test('should set default values for missing properties', () => {
    const result = extractLocalUser(customerWithMissingProperties);

    expect(result).toEqual({
      email: 'test@example.com',
      password: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      id: '123',
      version: 1,
      addresses: [],
    });
  });
});
