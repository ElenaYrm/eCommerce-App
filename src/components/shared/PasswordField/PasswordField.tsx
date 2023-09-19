import { ReactElement, useState, MouseEvent } from 'react';
import { InputField } from '../InputField';
import { InputFieldProps } from '../InputField/InputField';
import { PasswordChecklist } from './PasswordChecklist';
import { passwordValidate } from '../../../utils/validation';

import styles from './passwordField.module.scss';

interface PasswordFieldProps extends Omit<InputFieldProps, 'type' | 'validate'> {
  value: string;
  formName?: string;
  isDisabled?: boolean;
}

export default function PasswordField(props: PasswordFieldProps): ReactElement {
  const [hidden, setHidden] = useState(true);

  function togglePasswordType(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setHidden((hidden) => !hidden);
  }

  function validate(value: string): string {
    return passwordValidate(value, props.formName === 'register');
  }

  return (
    <>
      <InputField type={hidden ? 'password' : 'text'} {...props} validate={validate} isDisabled={props.isDisabled}>
        <button type="button" className={styles.button__toggle} onClick={togglePasswordType}>
          {hidden ? 'Show' : 'Hide'}
        </button>
      </InputField>

      {props.formName === 'register' && <PasswordChecklist password={props.value} />}
    </>
  );
}
