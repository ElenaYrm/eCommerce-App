import { ReactElement, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RegisterForm } from '../../components/RegisterForm';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { PATH } from '../../router/constants/paths';
import { selectAuthError, selectIsAuthorized } from '../../store/auth/selectors';
import { Page } from '../../router/types';
import { useAppDispatch } from '../../store/store';
import { resetError } from '../../store/auth/slice';

import styles from './register.module.scss';

export default function Register(): ReactElement {
  const navigate = useNavigate();
  const isAuthorized = useSelector(selectIsAuthorized);
  const error = useSelector(selectAuthError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) {
      navigate(PATH.home, { replace: true });
    }

    return (): void => {
      dispatch(resetError());
    };
  }, [isAuthorized, navigate, dispatch]);

  return (
    <div className={styles.auth}>
      <div className={styles.auth__container}>
        <div className={styles.form__container}>
          <Link to={PATH[Page.Login]}>Login</Link>

          <div className={styles.title}>
            <span>Register</span>
            <span>a new account</span>
          </div>

          {error && <ErrorMessage text={error} />}

          <RegisterForm />
        </div>
      </div>
      <div className={styles.image}></div>
    </div>
  );
}
