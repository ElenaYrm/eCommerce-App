import { render } from '@testing-library/react';
import Accordion from './Accordion';
jest.mock('../../../constant/metaData.ts', () => {});

const exampleData = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
];

describe('Test Accordion shared component', () => {
  test('Should Accordion component renders with provided data', () => {
    const { getByText } = render(<Accordion data={exampleData} className="accordion" />);

    expect(getByText('Section 1')).toBeInTheDocument();
    expect(getByText('Section 2')).toBeInTheDocument();
  });
});
