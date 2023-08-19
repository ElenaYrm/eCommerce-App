import { ReactElement, MouseEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../store/auth/slice';
import { PATH } from '../../router/constants/paths';

import styles from './header.module.scss';
import Logo from '../../assets/icons/logo.svg';

export default function Header(): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useAppDispatch();

  const isAuthPage = location.pathname.slice(1) === 'login' || location.pathname.slice(1) === 'register';

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    dispatch(logout());
    navigate(PATH.home, { replace: true });
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={PATH.home} className={styles.logo}>
          <Logo />
        </Link>

        {!isAuthPage && (
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
        )}
      </div>
    </header>
  );
}
