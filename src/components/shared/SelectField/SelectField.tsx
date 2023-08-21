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
  validate: (value: string) => string;
}

export default function SelectField({
  value,
  // handleChange,
  fieldName,
  options,
  className,
  placeholder,
  validate,
}: SelectFieldProps): ReactElement {
  return (
    <div className={classnames(styles.form__select, className ? className : '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>

        <Field as="select" name={fieldName} className={value ? `${styles.selected}` : ''} validate={validate}>
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={`${fieldName}-${option}`} value={option}>
              {option}
            </option>
          ))}
        </Field>

        {/*<select {...selectProps}>*/}
        {/*  <option value="" disabled>*/}
        {/*    {placeholder}*/}
        {/*  </option>*/}

        {/*  {options.map((option) => (*/}
        {/*    <option key={`${fieldName}-${option}`} value={option}>*/}
        {/*      {option}*/}
        {/*    </option>*/}
        {/*  ))}*/}
        {/*</select>*/}
      </label>
    </div>
  );
}
