import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm';
import { Notice } from '../../components/shared/Notice';
import { PATH } from '../../router/constants/paths';
import { Page } from '../../router/types';
import { useRedirect } from '../../hooks';

import styles from './register.module.scss';

export default function Register(): ReactElement {
  const error = useRedirect();

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__form}>
          <Link to={PATH[Page.Login]} className={styles.register__link}>
            Login
          </Link>

          <div className={styles.register__title}>
            <span>Register</span>
            <span>a new account</span>
          </div>

          {error && <Notice text={error} type="text" />}

          <RegisterForm />
        </div>
      </div>
      <div className={styles.register__image}></div>
    </div>
  );
}
