import styles from './InputField.module.scss';
import classnames from 'classnames';
import { ReactElement } from 'react';
import { InputFieldProps } from '../types';

export default function InputField(props: InputFieldProps): ReactElement {
  const { values, errors, handleChange, touched } = props.formik;
  const { name, type, placeholder, className, children } = props;

  const inputProps = {
    name,
    type: type || 'text',
    placeholder,
    value: values[name],
    onChange: handleChange,
  };

  return (
    <div className={classnames(styles.form__input, className ? className : '')}>
      <label>
        <span className="visually-hidden">{name}</span>
        <input {...inputProps} />

        {children ? children : null}
      </label>

      {errors[name] && touched[name] ? <span className={styles.message__error}>{errors[name]}</span> : null}
    </div>
  );
}
