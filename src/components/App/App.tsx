import { ReactElement } from 'react';
import { Router } from '../../router/Router';
import { AuthProvider } from '../../router/hoc/AuthProvider';

export default function App(): ReactElement {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
