import { ReactElement, createContext, useState } from 'react';
import { IAuthContext, Children } from '../../types';

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: Children): ReactElement {
  const [isAuth, setIsAuth] = useState(false);

  function logIn(): void {
    setIsAuth(true);
  }

  function logOut(): void {
    setIsAuth(false);
  }

  const value = { isAuth, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
