import styles from './InputField.module.scss';
import { ReactElement } from 'react';
import { InputFieldProps } from './types';
import { Input } from '../../../types/enums';

export default function InputField(props: InputFieldProps): ReactElement {
  const { values, errors, handleChange, touched } = props.formik;
  const { name, placeholder, className } = props;

  const type = name !== Input.Email && name !== Input.Password ? 'text' : name;

  const inputProps = {
    name,
    type,
    placeholder,
    value: values[name],
    onChange: handleChange,
  };

  return (
    <div className={`${styles.form__input} ${className ? className : ''}`}>
      <label htmlFor={name}>{name}</label>
      <input {...inputProps} />

      {errors[name] && touched[name] ? <span className={styles.message__error}>{errors[name]}</span> : null}
    </div>
  );
}
