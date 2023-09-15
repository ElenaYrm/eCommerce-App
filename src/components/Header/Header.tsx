import { ReactElement, MouseEvent, useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { resetCart } from '../../store/cart/slice';
import { selectIsAuthorized } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { logoutThunk } from '../../store/auth/thunks';
import { selectCart } from '../../store/cart/selectors';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { getCartThunk } from '../../store/cart/thunks';

import Logo from '../../assets/icons/logo.svg';
import CartIcon from '../../assets/icons/icon-cart.svg';

import classnames from 'classnames';
import styles from './header.module.scss';

export default function Header(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isAuthorized = useSelector(selectIsAuthorized);

  const dispatch = useAppDispatch();

  const basket = useSelector(selectCart);

  useEffect(() => {
    if (!basket.id) {
      dispatch(getCartThunk());
    }
  }, [basket.id, dispatch]);

  const isAuthPage = location.pathname.slice(1) === 'login' || location.pathname.slice(1) === 'register';

  function handleLogout(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    dispatch(logoutThunk());
    dispatch(resetCart());
    navigate(PATH[Page.Home]);
    closeMenu();
  }

  function toggleMenu(e: MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  function closeMenu(): void {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  function closeMenuOnResize(): void {
    if (window.innerWidth > 650 && menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  });

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={PATH[Page.Home]} className={styles.logo} onClick={closeMenu}>
          <Logo />
        </Link>

        <div className={styles.header__nav}>
          <Link
            to={''}
            onClick={toggleMenu}
            className={classnames(styles.nav__link, styles.header__nav_button, menuOpen ? styles.nav__link_active : '')}
          >
            Menu
          </Link>

          {!isAuthPage && (
            <nav className={classnames(styles.nav, menuOpen ? styles.open : '')}>
              {isAuthorized ? (
                <>
                  <NavLink to={PATH[Page.Catalog]} className={styles.nav__link} onClick={closeMenu}>
                    Catalog
                  </NavLink>
                  <NavLink to={PATH[Page.Profile]} className={styles.nav__link} onClick={closeMenu}>
                    Profile
                  </NavLink>
                  <NavLink to={PATH[Page.About]} className={styles.nav__link} onClick={closeMenu}>
                    About
                  </NavLink>
                  <Link to={PATH[Page.Home]} onClick={handleLogout} className={styles.nav__link}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <NavLink to={PATH[Page.Catalog]} className={styles.nav__link} onClick={closeMenu}>
                    Catalog
                  </NavLink>
                  <NavLink to={PATH[Page.About]} className={styles.nav__link} onClick={closeMenu}>
                    About
                  </NavLink>
                  <NavLink to={PATH[Page.Login]} className={styles.nav__link} onClick={closeMenu}>
                    Login
                  </NavLink>
                  <NavLink to={PATH[Page.Register]} className={styles.nav__link} onClick={closeMenu}>
                    Register
                  </NavLink>
                </>
              )}
            </nav>
          )}

          <NavLink
            to={PATH[Page.Cart]}
            className={classnames(styles.nav__link, styles.nav__link_cart)}
            onClick={closeMenu}
          >
            <CartIcon />
            <span className={styles.icon__count}>{basket.lineItems.length}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
