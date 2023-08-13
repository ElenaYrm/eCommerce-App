import { ReactElement, createContext, useState } from 'react';
import { IAuthContext, Children } from '../../types';

const defaultContext = {
  isAuth: false,
  login: (): void => {},
  logout: (): void => {},
};

export const AuthContext = createContext<IAuthContext>(defaultContext);

export function AuthProvider({ children }: Children): ReactElement {
  const [isAuth, setIsAuth] = useState(false);

  function login(): void {
    setIsAuth(true);
  }

  function logout(): void {
    setIsAuth(false);
  }

  const value = { isAuth, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
