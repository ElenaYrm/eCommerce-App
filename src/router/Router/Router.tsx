import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Register } from '../../pages/Register';
import { NotFound } from '../../pages/NotFound';
import { Layout } from '../../components/Layout';
import { Cart } from '../../pages/Cart';
import { Profile } from '../../pages/Profile';
import { ProtectedRoute } from '../hoc/ProtectedRoute';
import { PATH } from '../constants/paths';

export function Router(): ReactElement {
  return (
    <Routes>
      <Route path={PATH.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PATH.login} element={<Login />} />
        <Route path={PATH.register} element={<Register />} />
        <Route path={PATH.cart} element={<Cart />} />
        <Route path={PATH.notFound} element={<NotFound />} />
        <Route
          path={PATH.profile}
          element={
            <ProtectedRoute redirectLink={PATH.login}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
