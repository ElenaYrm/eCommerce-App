import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { NotFound } from './index';
import { ReactElement } from 'react';

jest.mock('../../constant/metaData', () => {});

describe('Test NotFound page: ', () => {
  test('should render NotFound page', () => {
    const component = render(
      <MemoryRouter initialEntries={['/notfound']}>
        <NotFound />
      </MemoryRouter>,
    );
    expect(screen.getByText('Page not found (´•̥̥̥o•̥̥̥`)')).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  test('should redirect to Main page on link click', async () => {
    const HomePage = (): ReactElement => <div>Main page</div>;

    render(
      <MemoryRouter initialEntries={['/notfound']}>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MemoryRouter>,
    );

    const mainLink = screen.getByText('Back to Main');
    expect(mainLink).toBeInTheDocument();

    await userEvent.click(mainLink);
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
