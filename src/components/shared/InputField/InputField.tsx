import { ReactElement } from 'react';
import classnames from 'classnames';
import { Field } from 'formik';

import styles from './inputField.module.scss';

export interface InputFieldProps {
  fieldName: string;
  placeholder: string;
  type?: string;
  error: string | undefined;
  touched: boolean | undefined;
  validate: (value: string) => string;
  setFieldTouched: (field: string, isTouched?: boolean | undefined) => void;
  className?: string;
  children?: ReactElement;
}

export default function InputField(props: InputFieldProps): ReactElement {
  const { fieldName, type, placeholder, className, children, touched, error, validate, setFieldTouched } = props;

  return (
    <div className={classnames(styles.form__input, className ? className : '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>
        <Field
          name={fieldName}
          type={type || 'text'}
          placeholder={placeholder}
          validate={validate}
          onFocus={(): void => setFieldTouched(fieldName, true)}
        />

        {children ? children : null}
      </label>

      {error && touched ? <span className={styles.message__error}>{error}</span> : null}
    </div>
  );
}
