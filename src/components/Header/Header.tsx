import { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <Link to="/">Scoop</Link>

      <nav className={styles.header__nav}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
}
