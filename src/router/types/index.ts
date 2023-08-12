import { ReactElement } from 'react';

export interface Children {
  children: ReactElement;
}

export interface IAuthContext {
  isAuth: boolean;
  logIn: () => void;
  logOut: () => void;
}

export interface IProtectedRoute {
  children: ReactElement;
  redirectLink: string;
}

export enum Page {
  Home = 'home',
  Login = 'login',
  Register = 'register',
  Profile = 'profile',
  Cart = 'cart',
  NotFound = 'not-found',
}
