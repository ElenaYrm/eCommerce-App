import { ReactElement } from 'react';
import { useAuthContext } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { IProtectedRoute } from '../types';

export default function ProtectedRoute({ children, redirectLink }: IProtectedRoute): ReactElement {
  const { isAuth } = useAuthContext();

  if (!isAuth) return <Navigate to={redirectLink} />;

  return children;
}
