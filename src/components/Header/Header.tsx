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
import { resetUserData } from '../../store/user/slice';

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
    dispatch(resetUserData());
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

        <nav className={styles.header__nav}>
          <Link
            to={'#'}
            onClick={toggleMenu}
            className={classnames(styles.header__nav_button, menuOpen ? styles.active : '')}
          >
            Menu
          </Link>

          {!isAuthPage && (
            <div className={classnames(styles.links)}>
              <ul className={classnames(styles.links__list, menuOpen ? styles.open : '')}>
                <li className={styles.links__item}>
                  <NavLink to={PATH[Page.Catalog]} className={styles.links__item_link} onClick={closeMenu}>
                    Catalog
                  </NavLink>
                </li>

                {!isAuthorized ? (
                  <>
                    <li className={styles.links__item}>
                      <NavLink to={PATH[Page.About]} className={styles.links__item_link} onClick={closeMenu}>
                        About
                      </NavLink>
                    </li>
                    <li className={styles.links__item}>
                      <NavLink to={PATH[Page.Login]} className={styles.links__item_link} onClick={closeMenu}>
                        Login
                      </NavLink>
                    </li>
                    <li className={styles.links__item}>
                      <NavLink to={PATH[Page.Register]} className={styles.links__item_link} onClick={closeMenu}>
                        Register
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className={styles.links__item}>
                      <NavLink to={PATH[Page.Profile]} className={styles.links__item_link} onClick={closeMenu}>
                        Profile
                      </NavLink>
                    </li>
                    <li className={styles.links__item}>
                      <NavLink to={PATH[Page.About]} className={styles.links__item_link} onClick={closeMenu}>
                        About
                      </NavLink>
                    </li>
                    <li className={styles.links__item}>
                      <Link to={PATH[Page.Home]} onClick={handleLogout} className={styles.links__item_link}>
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}

          <NavLink
            to={PATH[Page.Cart]}
            className={classnames(styles.links__item_link, styles.links__item_cart)}
            onClick={closeMenu}
          >
            <CartIcon />
            <span className={styles.icon__count}>{basket.lineItems.length}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
