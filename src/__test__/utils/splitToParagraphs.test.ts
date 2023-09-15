import { splitToParagraphs } from '../../utils';
import { paragraphsStringMock, spansArray } from '../../__mocks__/utils';

jest.mock('../../constant', () => {});

describe('Test splitToParagraphs function: ', () => {
  test('should return the string', () => {
    const result = splitToParagraphs('Some simple string');
    expect(result).toEqual('Some simple string');
  });

  test('should split test to spans', () => {
    const result = splitToParagraphs(paragraphsStringMock);
    expect(result).toStrictEqual(spansArray);
  });
});
