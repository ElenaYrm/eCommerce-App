import styles from './PasswordField.module.scss';
import { ReactElement, useState, MouseEvent } from 'react';
import { Input } from '../../../types/enums';
import { InputField } from '../InputField';
import { PasswordChecklist } from '../PasswordChecklist';
import { PasswordFieldProps } from '../types';

export default function PasswordField({ formik, formName }: PasswordFieldProps): ReactElement {
  const password = formik.values[Input.Password];
  const [type, setType] = useState('password');

  function togglePasswordType(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  }

  return (
    <>
      <InputField formik={formik} name={Input.Password} type={type} placeholder="Password">
        <button className={styles.button__toggle} onClick={togglePasswordType}>
          {type === 'password' ? 'Show' : 'Hide'}
        </button>
      </InputField>

      {formName === 'register' && <PasswordChecklist password={password} />}
    </>
  );
}
