import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound';
import Layout from '../../components/Layout';
import Cart from '../../pages/Cart';
import Profile from '../../pages/Profile';
import ProtectedRoute from '../ProtectedRoute';
import PAGE from '../constants/pages';

export default function Router(): ReactElement {
  return (
    <Routes>
      <Route path={PAGE.home.path} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PAGE.login.path} element={<Login />} />
        <Route path={PAGE.register.path} element={<Register />} />
        <Route path={PAGE.cart.path} element={<Cart />} />
        <Route path={PAGE['not-found'].path} element={<NotFound />} />
        <Route
          path={PAGE.profile.path}
          element={
            <ProtectedRoute redirectLink={PAGE.login.link}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
