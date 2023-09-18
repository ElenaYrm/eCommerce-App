import { render, screen } from '@testing-library/react';
import Tab from './Tab';
import { studentAboutUsMock } from '../../../../__mocks__/AboutTabsMock';

describe('Test Tab component in About-us', () => {
  test('Should render Tab component', () => {
    render(<Tab isActive={false} student={studentAboutUsMock} handleTabClick={(): void => {}} />);

    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.getByText('testRole')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();

    const image = screen.getByAltText(/Photo of/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '#');
  });
});
