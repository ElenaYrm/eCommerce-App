import { ReactElement } from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

export default function Layout(): ReactElement {
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
