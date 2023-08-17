import { ReactElement, MouseEvent } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../store/auth/slice';
import { PATH } from '../../router/constants/paths';

import styles from './header.module.scss';

export default function Header(): ReactElement {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useAppDispatch();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    dispatch(logout());
    navigate(PATH.home, { replace: true });
  }

  return (
    <header className={styles.header}>
      <Link to={PATH.home}>Scoop</Link>

      <nav className={styles.header__nav}>
        {isAuthorized ? (
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
