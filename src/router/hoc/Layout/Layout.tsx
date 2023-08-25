import { ReactElement } from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout(): ReactElement {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
