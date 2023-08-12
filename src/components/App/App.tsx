import { ReactElement } from 'react';
import Router from '../../router/Router';
import AuthProvider from '../../router/hoc/AuthProvider';

function App(): ReactElement {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
