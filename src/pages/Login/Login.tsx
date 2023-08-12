import { ReactElement } from 'react';
import { useAuthContext } from '../../router/hooks/useAuth';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../router/constants/paths';

export default function Login(): ReactElement {
  const navigate = useNavigate();
  const { logIn } = useAuthContext();

  function handleLogin(): void {
    logIn();
    navigate(PATH.home, { replace: true });
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
