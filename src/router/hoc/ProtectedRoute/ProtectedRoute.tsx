import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../../store/auth/selectors';
import { IProtectedRoute } from '../../types';

export default function ProtectedRoute({ children, redirectLink }: IProtectedRoute): ReactElement {
  const isAuthorized = useSelector(selectIsAuthorized);

  if (!isAuthorized) return <Navigate to={redirectLink} />;

  return children;
}
