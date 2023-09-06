import { formatPrice } from '../../utils';

jest.mock('../../constant', () => {});

describe('Test formatPrice function', () => {
  test('should return formatted price', () => {
    const result = formatPrice(20000);
    expect(result).toBe('$20,000');
  });
});
