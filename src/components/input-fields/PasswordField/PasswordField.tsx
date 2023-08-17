import { ReactElement, useState, MouseEvent, ChangeEvent } from 'react';
import { InputField } from '../InputField';
import { PasswordChecklist } from './PasswordChecklist';

import styles from './passwordField.module.scss';

export interface PasswordFieldProps {
  fieldName: string;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
  handleChange: (e?: ChangeEvent) => void;
  placeholder: string;
  className?: string;
  formName?: string;
}

export default function PasswordField(props: PasswordFieldProps): ReactElement {
  const [hidden, setHidden] = useState(true);

  function togglePasswordType(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setHidden((hidden) => (hidden = !hidden));
  }

  return (
    <>
      <InputField type={hidden ? 'password' : 'text'} {...props}>
        <button className={styles.button__toggle} onClick={togglePasswordType}>
          {hidden ? 'Show' : 'Hide'}
        </button>
      </InputField>

      {props.formName === 'register' && <PasswordChecklist password={props.value} />}
    </>
  );
}
