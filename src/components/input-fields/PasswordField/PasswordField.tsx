import styles from './PasswordField.module.scss';
import { ReactElement, useState, MouseEvent } from 'react';
import { Input } from '../../../types/enums';
import { InputField } from '../InputField';
import { PasswordChecklist } from '../PasswordChecklist';
import { PasswordFieldProps } from '../types';

export default function PasswordField({ formik, formName }: PasswordFieldProps): ReactElement {
  const password = formik.values[Input.Password];
  const [hidden, setHidden] = useState(true);

  function togglePasswordType(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setHidden((hidden) => (hidden = !hidden));
  }

  return (
    <>
      <InputField formik={formik} name={Input.Password} type={hidden ? 'password' : 'text'} placeholder="Password">
        <button className={styles.button__toggle} onClick={togglePasswordType}>
          {hidden ? 'Show' : 'Hide'}
        </button>
      </InputField>

      {formName === 'register' && <PasswordChecklist password={password} />}
    </>
  );
}
