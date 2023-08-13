import styles from './Header.module.scss';
import { ReactElement, MouseEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../router/hooks/useAuth';
import { PATH } from '../../router/constants/paths';

export function Header(): ReactElement {
  const navigate = useNavigate();
  const { isAuth, logOut } = useAuthContext();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    logOut();
    navigate(PATH.home, { replace: true });
  }

  return (
    <header className={styles.header}>
      <Link to={PATH.home}>Scoop</Link>

      <nav className={styles.header__nav}>
        {isAuth ? (
          <>
            <Link to={PATH.home} onClick={handleLogout}>
              Logout
            </Link>
            <NavLink to={PATH.profile}>Profile</NavLink>
          </>
        ) : (
          <>
            <NavLink to={PATH.login}>Login</NavLink>
            <NavLink to={PATH.register}>Register</NavLink>
          </>
        )}
        <NavLink to={PATH.cart}>Cart</NavLink>
      </nav>
    </header>
  );
}
