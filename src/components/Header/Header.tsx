import { ReactElement, MouseEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { logoutThunk } from '../../store/auth/thunks';
import { PATH } from '../../router/constants/paths';
import Logo from '../../assets/icons/logo.svg';

import styles from './header.module.scss';

export default function Header(): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useAppDispatch();

  const isAuthPage = location.pathname.slice(1) === 'login' || location.pathname.slice(1) === 'register';

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    dispatch(logoutThunk());
    navigate(PATH.home);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={PATH.home} className={styles.logo}>
          <Logo />
        </Link>

        {!isAuthPage && (
          <nav className={styles.nav}>
            {isAuthorized ? (
              <>
                <Link to={PATH.home} onClick={handleLogout} className={styles.nav__link}>
                  Logout
                </Link>
                <NavLink to={PATH.profile} className={styles.nav__link}>
                  Profile
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to={PATH.login} className={styles.nav__link}>
                  Login
                </NavLink>
                <NavLink to={PATH.register} className={styles.nav__link}>
                  Register
                </NavLink>
              </>
            )}
            <NavLink to={PATH.cart} className={styles.nav__link}>
              Cart
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
