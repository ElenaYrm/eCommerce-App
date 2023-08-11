import { ReactElement, createContext, useState } from 'react';

interface Children {
  children: ReactElement;
}

interface AuthContextType {
  isAuth: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: Children): ReactElement {
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
