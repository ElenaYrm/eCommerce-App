import styles from './Login.module.scss';
import { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../router/hoc/AuthProvider/AuthProvider';
import { PATH } from '../../router/constants/paths';

export default function Login(): ReactElement {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  function handleLogin(): void {
    login();
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
