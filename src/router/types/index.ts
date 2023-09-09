import { ReactElement } from 'react';

export interface IProtectedRoute {
  children: ReactElement;
  redirectLink: string;
}

export enum Page {
  About = 'about',
  Home = 'home',
  Login = 'login',
  Register = 'register',
  Profile = 'profile',
  Cart = 'cart',
  Catalog = 'catalog',
  NotFound = 'notFound',
  Product = 'product',
}
