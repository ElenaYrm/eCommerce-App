import { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsNewUser } from '../../store/auth/selectors';
import { useAppDispatch } from '../../store/store';
import { Page } from '../../router/types';
import { PATH } from '../../router/constants/paths';
import { deleteNotice } from '../../store/auth/slice';

import classnames from 'classnames';
import styles from './home.module.scss';

export default function Home(): ReactElement {
  const isNewUser = useSelector(selectIsNewUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isNewUser) {
      const timer = setTimeout(() => {
        dispatch(deleteNotice());
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isNewUser, dispatch]);

  return (
    <div className={styles.home} data-testid="home">
      <div className={styles.home__content}>
        <div className={styles.home__content_container}>
          <Link to={PATH[Page.Home]} className={classnames(styles.home__link, 'active')}>
            Main
          </Link>
          <Link to={PATH[Page.Catalog]} className={styles.home__link}>
            Catalog
          </Link>
          <Link to={PATH[Page.Login]} className={styles.home__link}>
            Login
          </Link>
          <Link to={PATH[Page.Register]} className={styles.home__link}>
            Register
          </Link>
          <Link to={PATH[Page.Profile]} className={styles.home__link}>
            Profile
          </Link>
          <Link to={PATH[Page.Cart]} className={styles.home__link}>
            Cart
          </Link>
          <Link to={PATH[Page.About]} className={styles.home__link}>
            About us
          </Link>
        </div>
      </div>

      <div className={styles.home__content}>
        <div className={styles.home__content_container}>
          <p>
            To keep the project's concept clean, we use word <em>"Artists"</em> instead of "Brands".
          </p>
          <p>
            For <em>discounted</em> products check these artists: Cédrix Crespel, KAWS
          </p>
          <p>
            For <em>a single image</em> in the gallery check these artists: Jef Verheyen, Masoami Raku
          </p>
        </div>
      </div>

      {isNewUser && (
        <div className={styles.message}>
          <span>Hello and welcome!ヾ(☆▽☆)</span>
        </div>
      )}
    </div>
  );
}
