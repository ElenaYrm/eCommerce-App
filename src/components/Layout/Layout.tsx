import { ReactElement } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export function Layout(): ReactElement {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
