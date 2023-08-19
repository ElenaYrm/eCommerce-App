import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsNewUser } from '../../store/auth/selectors';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { useAppDispatch } from '../../store/store';
import { deleteNotice } from '../../store/auth/slice';

import styles from './home.module.scss';

interface INoticeReturnType {
  payload: undefined;
  type: 'auth/deleteNotice';
}

export default function Home(): ReactElement {
  const isNewUser = useSelector(selectIsNewUser);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.home__container}>
      <div className={styles.content}>
        <Link to={PATH[Page.Home]} className="active">
          Main
        </Link>
        <Link to={PATH[Page.Login]}>Login</Link>
        <Link to={PATH[Page.Register]}>Register</Link>
        <Link to={PATH[Page.Profile]}>Profile</Link>
        <Link to={PATH[Page.Cart]}>Cart</Link>
      </div>

      {isNewUser && (
        <div>
          <span>Hello!</span>
          <button onClick={(): INoticeReturnType => dispatch(deleteNotice())}>Close</button>
        </div>
      )}
    </div>
  );
}
