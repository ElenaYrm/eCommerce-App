import { ReactElement, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginForm } from '../../components/LoginForm';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { PATH } from '../../router/constants/paths';
import { selectAuthError, selectIsAuthorized } from '../../store/auth/selectors';
import { Page } from '../../router/types';

import styles from './login.module.scss';

export default function Login(): ReactElement {
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
      <Link to={PATH[Page.Register]}>Register</Link>

      <h1>Login to your account</h1>

      {error && <ErrorMessage text={error} />}

      <LoginForm />
    </div>
  );
}
