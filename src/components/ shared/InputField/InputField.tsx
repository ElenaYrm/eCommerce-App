import styles from './InputField.module.scss';
import { ReactElement } from 'react';
import { InputFieldProps, InputProps } from './types';

export default function InputField(props: InputFieldProps): ReactElement {
  const { values, errors, handleChange, touched } = props.formik;
  const { name, type, placeholder, className } = props;

  const inputProps: InputProps = {
    name: name,
    type,
    placeholder,
    values: values[name],
    onChange: handleChange,
  };

  return (
    <div className={`${styles.form__input} ${className ? className : ''}`}>
      <label htmlFor={name} className="visually-hidden">
        {name}
      </label>
      <input {...inputProps} />

      {errors[name] && touched[name] ? <span className={styles.message__error}>{errors[name]}</span> : null}
    </div>
  );
}
