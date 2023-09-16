import { render } from '@testing-library/react';
import Description from './Description';
import { IAboutDataTabs } from '../../../../types/interfaces';

describe('Test Description component', () => {
  const descriptionStudentMock: IAboutDataTabs = {
    profilePicture: '#',
    stName: 'Test Name',
    role: 'testRole',
    github: 'testGitHub',
    body: {
      textAbout: 'This is Test Name',
      recommendations: ['Contribution 1', 'Contribution 2'],
    },
  };

  test('Should render component with student information', () => {
    const { getByText } = render(<Description student={descriptionStudentMock} isMobile={false} />);

    expect(getByText('About Test')).toBeInTheDocument();
    expect(getByText('This is Test Name')).toBeInTheDocument();
    // eslint-disable-next-line prettier/prettier
    expect(getByText('Test\'s Contribution')).toBeInTheDocument();
    expect(getByText('Contribution 1')).toBeInTheDocument();
    expect(getByText('Contribution 2')).toBeInTheDocument();
  });

  test('Should render mobile component with student information', () => {
    const { getByText } = render(<Description student={descriptionStudentMock} isMobile={true} />);

    expect(getByText('About Test')).toBeInTheDocument();
    expect(getByText('This is Test Name')).toBeInTheDocument();
    // eslint-disable-next-line prettier/prettier
    expect(getByText('Test\'s Contribution')).toBeInTheDocument();
    expect(getByText('Contribution 1')).toBeInTheDocument();
    expect(getByText('Contribution 2')).toBeInTheDocument();
  });
});
