import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../router/hooks/useAuth';
import styles from './Register.module.scss';
import { PATH } from '../../router/constants/paths';

export function Register(): ReactElement {
  const navigate = useNavigate();
  const { logIn } = useAuthContext();

  function handleRegister(): void {
    logIn();
    navigate(PATH.home, { replace: true });
  }

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <button className={styles.button} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
