import { ReactElement, MouseEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAuthContext } from '../../router/hooks/useAuth';

export default function Header(): ReactElement {
  const navigate = useNavigate();
  const { isAuth, logOut } = useAuthContext();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    logOut();
    navigate('/', { replace: true });
  }

  return (
    <header className={styles.header}>
      <Link to="/">Scoop</Link>

      <nav className={styles.header__nav}>
        {isAuth ? (
          <>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
            <NavLink to="/profile">Profile</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
}
