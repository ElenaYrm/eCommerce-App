import { cityValidate } from '../../../utils/validation';
import { errorMsg } from '../../../constant';
import { shouldReturnError, validFunc } from '../../variables';

jest.mock('../../../constant/metaData', () => {});

describe(`Test City ${validFunc}`, () => {
  it('Should return empty string for a valid city', () => {
    const validCity = 'MyCity';
    const result = cityValidate(validCity);
    expect(result).not.toBe('');
  });

  it(`${shouldReturnError} an empty city`, () => {
    const emptyCity = '';
    const result = cityValidate(emptyCity);
    expect(result).toBe(errorMsg.city.empty);
  });
  it(`${shouldReturnError} a city name containing non-alphabetic characters`, () => {
    const invalidCity = 'Los Angeles 123';
    const result = cityValidate(invalidCity);
    expect(result).toBe(errorMsg.city.invalid);
  });
});
