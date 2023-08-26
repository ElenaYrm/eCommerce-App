import { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { selectIsNewUser } from '../../store/auth/selectors';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { useAppDispatch } from '../../store/store';
import { deleteNotice } from '../../store/auth/slice';

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
        <Link to={PATH[Page.Home]} className={classnames(styles.home__link, 'active')}>
          Main
        </Link>
        <Link to={PATH[Page.Login]} className={styles.home__link}>
          Login
        </Link>
        <Link to={PATH[Page.Register]} className={styles.home__link}>
          Register
        </Link>
        <Link to={PATH[Page.Cart]} className={styles.home__link}>
          Cart
        </Link>
      </div>

      {isNewUser && (
        <div className={styles.message}>
          <span>Hello and welcome!ヾ(☆▽☆)</span>
        </div>
      )}
    </div>
  );
}
