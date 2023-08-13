import { ReactElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { IProtectedRoute } from '../../types';
import { AuthContext } from '../AuthProvider/AuthProvider';

export function ProtectedRoute({ children, redirectLink }: IProtectedRoute): ReactElement {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return <Navigate to={redirectLink} />;

  return children;
}
