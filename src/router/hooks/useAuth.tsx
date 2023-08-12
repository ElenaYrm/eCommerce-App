import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IAuthContext } from '../types';

export function useAuthContext(): IAuthContext {
  return useContext(AuthContext);
}
