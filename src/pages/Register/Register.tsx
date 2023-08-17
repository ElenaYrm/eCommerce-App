import { ReactElement, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RegisterForm } from '../../components/RegisterForm';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { PATH } from '../../router/constants/paths';
import { selectAuthError, selectIsAuthorized } from '../../store/auth/selectors';
import { Page } from '../../router/types';

import styles from './register.module.scss';

export default function Register(): ReactElement {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (isAuthorized) {
      navigate(PATH.home, { replace: true });
    }
  }, [isAuthorized, navigate]);

  return (
    <div className={styles.container}>
      <Link to={PATH[Page.Login]}>Login</Link>

      <h1>Register a new account</h1>

      {error && <ErrorMessage text={error} />}

      <RegisterForm />
    </div>
  );
}
