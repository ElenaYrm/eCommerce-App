import { ReactElement } from 'react';
import classnames from 'classnames';
import { PasswordFieldProps } from '../PasswordField/PasswordField';

import styles from './inputField.module.scss';

interface InputFieldProps extends PasswordFieldProps {
  type?: string;
  children?: ReactElement;
  disabled?: boolean;
}

export default function InputField(props: InputFieldProps): ReactElement {
  const {
    fieldName,
    type,
    placeholder,
    className,
    children,
    touched,
    error,
    handleChange,
    value,
    disabled = false,
  } = props;

  const inputProps = {
    name: fieldName,
    type: type || 'text',
    placeholder,
    value,
    onChange: handleChange,
    disabled,
  };

  return (
    <div className={classnames(styles.form__input, className ? className : '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>
        <input {...inputProps} />

        {children ? children : null}
      </label>

      {error && touched ? <span className={styles.message__error}>{error}</span> : null}
    </div>
  );
}
