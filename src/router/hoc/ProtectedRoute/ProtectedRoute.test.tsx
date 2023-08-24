import { render, screen } from '@testing-library/react';
import { Navigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';
import ProtectedRoute from './ProtectedRoute';

import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
jest.mock('react-router-dom');

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Test ProtectedRoute component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render children when isAuthorized is true', () => {
    mockedUseSelector.mockReturnValue(true);

    const protectedContent = 'Protected content';

    const { container } = render(
      <ProtectedRoute redirectLink={PATH.login}>
        <div>{protectedContent}</div>
      </ProtectedRoute>,
    );

    expect(container.textContent).toBe(protectedContent);
    expect(Navigate).not.toHaveBeenCalled();
  });

  it('should redirect when isAuthorized is false', () => {
    mockedUseSelector.mockReturnValue(false);

    const protectedContent = 'Protected content';

    render(
      <ProtectedRoute redirectLink={PATH.login}>
        <div>{protectedContent}</div>
      </ProtectedRoute>,
    );

    expect(Navigate).toHaveBeenCalled();
    expect(screen.getByText).not.toBe(protectedContent);
  });
});
