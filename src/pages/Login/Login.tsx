import { ReactElement, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { Notice } from '../../components/shared/Notice';
import { PATH } from '../../router/constants/paths';
import { selectAuthError, selectIsAuthorized } from '../../store/auth/selectors';
import { Page } from '../../router/types';
import { useAppDispatch } from '../../store/store';
import { resetError } from '../../store/auth/slice';

import styles from './login.module.scss';

export default function Login(): ReactElement {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const error = useSelector(selectAuthError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) {
      navigate(PATH[Page.Home]);
    }

    return (): void => {
      dispatch(resetError());
    };
  }, [isAuthorized, navigate, dispatch]);

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__form}>
          <Link to={PATH[Page.Register]} className={styles.login__link}>
            Register
          </Link>

          <div className={styles.login__title}>
            <span>Login</span>
            <span>to your account</span>
          </div>

          {error && <Notice text={error} type="text" />}

          <LoginForm />
        </div>
      </div>
      <div className={styles.login__image}></div>
    </div>
  );
}
