/* eslint-disable quotes*/

import { render } from '@testing-library/react';
import Description from './Description.tsx';
import { studentAboutUsMock } from '../../../__mocks__/AboutTabsMock.ts';

describe('Test Description component', () => {
  test('Should render component with student information', () => {
    const { getByText } = render(<Description student={studentAboutUsMock} isMobile={false} />);

    expect(getByText('About Test')).toBeInTheDocument();
    expect(getByText('This is Test Name')).toBeInTheDocument();
    expect(getByText("Test's Contribution")).toBeInTheDocument();
    expect(getByText('Contribution 1')).toBeInTheDocument();
    expect(getByText('Contribution 2')).toBeInTheDocument();
  });

  test('Should render mobile component with student information', () => {
    const { getByText } = render(<Description student={studentAboutUsMock} isMobile={true} />);

    expect(getByText('About Test')).toBeInTheDocument();
    expect(getByText('This is Test Name')).toBeInTheDocument();
    expect(getByText("Test's Contribution")).toBeInTheDocument();
    expect(getByText('Contribution 1')).toBeInTheDocument();
    expect(getByText('Contribution 2')).toBeInTheDocument();
  });
});
