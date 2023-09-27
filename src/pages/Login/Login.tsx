import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { Notice } from '../../components/shared/Notice';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { useRedirect } from '../../hooks/';

import styles from './login.module.scss';

export default function Login(): ReactElement {
  const error = useRedirect();

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
