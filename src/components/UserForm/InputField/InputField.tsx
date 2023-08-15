import { ReactElement } from 'react';
import { IInputFieldProps } from '../../../types/interfaces';
import styles from './InputField.module.scss';

export default function InputField(props: IInputFieldProps): ReactElement {
  const { formik, field, type, placeholder } = props;

  return (
    <div className={styles.formField}>
      <label htmlFor={field}>{field}</label>
      <input
        id={field}
        name={field}
        type={type}
        placeholder={placeholder}
        value={formik.values[field]}
        onChange={formik.handleChange}
        className={styles.formInput}
      />

      {formik.errors[field] && formik.touched[field] ? (
        <span className={styles.errorMessage}>{formik.errors[field]}</span>
      ) : null}
    </div>
  );
}
