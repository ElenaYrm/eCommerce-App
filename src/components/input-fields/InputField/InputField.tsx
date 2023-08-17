import styles from './InputField.module.scss';
import classnames from 'classnames';
import { ReactElement } from 'react';
import { InputFieldProps } from '../types';

export default function InputField(props: InputFieldProps): ReactElement {
  const { values, errors, handleChange, touched } = props.formik;
  const { fieldName, type, placeholder, className, children } = props;

  const inputProps = {
    name: fieldName,
    type: type || 'text',
    placeholder,
    value: values[fieldName],
    onChange: handleChange,
  };

  return (
    <div className={classnames(styles.form__input, className ? className : '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>
        <input {...inputProps} />

        {children ? children : null}
      </label>

      {errors[fieldName] && touched[fieldName] ? (
        <span className={styles.message__error}>{errors[fieldName]}</span>
      ) : null}
    </div>
  );
}
