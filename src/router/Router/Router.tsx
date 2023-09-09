import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { NotFound } from '../../pages/NotFound';
import { Layout } from '../hoc/Layout';
import { Cart } from '../../pages/Cart';
import { Profile } from '../../pages/Profile';
import { ProtectedRoute } from '../hoc/ProtectedRoute';
import { PATH } from '../constants/paths';
import { Page } from '../types';
import { Product } from '../../pages/Product';
import { Catalog } from '../../pages/Catalog';
import { EditingProvider } from '../../pages/Profile/profileContext';
import { AboutUs } from '../../pages/AboutUs';

export default function Router(): ReactElement {
  return (
    <Routes>
      <Route path={PATH[Page.Home]} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PATH[Page.Login]} element={<Login />} />
        <Route path={PATH[Page.Register]} element={<Register />} />
        <Route path={PATH[Page.Cart]} element={<Cart />} />
        <Route path={`${PATH[Page.Product]}/:id`} element={<Product />} />
        <Route path={PATH[Page.Catalog]} element={<Catalog />} />
        <Route path={PATH[Page.NotFound]} element={<NotFound />} />
        <Route
          path={PATH[Page.Profile]}
          element={
            <ProtectedRoute redirectLink={PATH[Page.Login]}>
              <EditingProvider>
                <Profile />
              </EditingProvider>
            </ProtectedRoute>
          }
        />
        <Route path={PATH[Page.About]} element={<AboutUs />}></Route>
      </Route>
    </Routes>
  );
}
