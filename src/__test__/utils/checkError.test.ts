import { checkError } from '../../utils';

jest.mock('../../services/sdk/product/methods', () => {});
jest.mock('../../constant', () => 'en-US');

describe('Test checkError function', () => {
  test('should return error message when error is an instance of Error', () => {
    const error = new Error('Test error');
    const result = checkError(error);
    expect(result).toBe(error.message);
  });

  test('should return "Something was wrong" when error is not an instance of Error', () => {
    const result = checkError('Not an error inst');
    expect(result).toBe('Something was wrong');
  });
});
