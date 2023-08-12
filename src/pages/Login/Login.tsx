import { ReactElement } from 'react';
import { useAuthContext } from '../../router/hooks/useAuth';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import PAGE from '../../router/constants/pages';

export default function Login(): ReactElement {
  const navigate = useNavigate();
  const { logIn } = useAuthContext();

  function handleLogin(): void {
    logIn();
    navigate(PAGE.home.link, { replace: true });
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
