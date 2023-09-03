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
      navigate(PATH[Page.Home]);
    }

    return (): void => {
      dispatch(resetError());
    };
  }, [isAuthorized, navigate, dispatch]);

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

          {error && <ErrorMessage text={error} />}

          <RegisterForm />
        </div>
      </div>
      <div className={styles.register__image}></div>
    </div>
  );
}
