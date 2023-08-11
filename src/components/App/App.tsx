import { ReactElement } from 'react';
import Router from '../../router/';
import AuthProvider from '../../router/AuthProvider/AuthProvider';

function App(): ReactElement {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
