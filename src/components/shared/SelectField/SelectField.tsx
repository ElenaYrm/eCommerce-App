import { ChangeEvent, ReactElement } from 'react';
import classnames from 'classnames';
import { Field } from 'formik';

import styles from './selectField.module.scss';

interface SelectFieldProps {
  value: string;
  handleChange: (e?: ChangeEvent) => void;
  fieldName: string;
  placeholder: string;
  options: string[];
  className?: string;
  validate?: (value: string) => string;
  isDisabled?: boolean;
}

export default function SelectField({
  value,
  fieldName,
  options,
  className,
  placeholder,
  validate,
  isDisabled,
}: SelectFieldProps): ReactElement {
  return (
    <div className={classnames(styles.select, className || '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>

        <Field
          as="select"
          name={fieldName}
          className={classnames(styles.select__field, value ? `${styles.select__field_selected}` : '')}
          validate={validate}
          disabled={isDisabled}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={`${fieldName}-${option}`} value={option}>
              {option}
            </option>
          ))}
        </Field>
      </label>
    </div>
  );
}
