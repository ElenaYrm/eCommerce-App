import { useContext } from 'react';
import { AuthContext } from '../hoc/AuthProvider/AuthProvider';
import { IAuthContext } from '../types';

export function useAuthContext(): IAuthContext {
  return useContext(AuthContext);
}
