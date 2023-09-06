import { render, fireEvent } from '@testing-library/react';
import { AccordionItem } from '.';
jest.mock('../../../../constant/metaData.ts', () => {});

const exampleItem = {
  title: 'Example Title',
  content: 'Example Content',
};

describe('Test AccordionItem shared component', () => {
  test('Should renders the AccordionItem component with closed state by default', () => {
    const { getByText, queryByText } = render(<AccordionItem {...exampleItem} />);

    const titleElement = getByText(exampleItem.title);
    const contentElement = queryByText(exampleItem.content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeNull();
  });

  test('Should toggles the AccordionItem content when clicked', () => {
    const { getByText, queryByText } = render(<AccordionItem {...exampleItem} />);

    const titleElement = getByText(exampleItem.title);

    fireEvent.click(titleElement);

    const contentElement = queryByText(exampleItem.content);

    expect(contentElement).toBeInTheDocument();
  });
});
