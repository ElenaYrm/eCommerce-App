import { render } from '@testing-library/react';
import AboutTabs from './AboutTabs';
import { studentDataTabs } from '../../../constant/aboutus';

describe('Test AboutTabs component', () => {
  test('Should render AboutTabs component', () => {
    const { getByText } = render(<AboutTabs />);

    const aboutTabsElement = getByText(studentDataTabs[0].stName);
    expect(aboutTabsElement).toBeInTheDocument();
  });
});
