import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

interface AuthContextType {
  isAuth: boolean;
  logIn: () => void;
  logOut: () => void;
}

export function useAuthContext(): AuthContextType {
  return useContext(AuthContext);
}
