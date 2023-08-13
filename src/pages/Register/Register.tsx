import styles from './Register.module.scss';
import { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../router/hoc/AuthProvider/AuthProvider';
import { PATH } from '../../router/constants/paths';

export function Register(): ReactElement {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  function handleRegister(): void {
    login();
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
