import { ReactElement, MouseEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { logoutThunk } from '../../store/auth/thunks';
import { PATH } from '../../router/constants/paths';
import Logo from '../../assets/icons/logo.svg';

import styles from './header.module.scss';
import { Page } from '../../router/types';

export default function Header(): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useAppDispatch();

  const isAuthPage = location.pathname.slice(1) === 'login' || location.pathname.slice(1) === 'register';

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    dispatch(logoutThunk());
    navigate(PATH[Page.Home]);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={PATH[Page.Home]} className={styles.logo}>
          <Logo />
        </Link>

        {!isAuthPage && (
          <nav className={styles.nav}>
            {isAuthorized ? (
              <>
                <Link to={PATH[Page.Home]} onClick={handleLogout} className={styles.nav__link}>
                  Logout
                </Link>
                <NavLink to={PATH[Page.Profile]} className={styles.nav__link}>
                  Profile
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to={PATH[Page.Login]} className={styles.nav__link}>
                  Login
                </NavLink>
                <NavLink to={PATH[Page.Register]} className={styles.nav__link}>
                  Register
                </NavLink>
              </>
            )}
            <NavLink to={PATH[Page.Cart]} className={styles.nav__link}>
              Cart
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
