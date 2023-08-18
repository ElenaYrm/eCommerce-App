import { ChangeEvent, ReactElement } from 'react';
import classnames from 'classnames';

import styles from './selectField.module.scss';

interface SelectFieldProps {
  value: string;
  handleChange: (e?: ChangeEvent) => void;
  fieldName: string;
  placeholder: string;
  options: string[];
  className?: string;
}

export default function SelectField({
  value,
  handleChange,
  fieldName,
  options,
  className,
  placeholder,
}: SelectFieldProps): ReactElement {
  const selectProps = {
    name: fieldName,
    value,
    onChange: handleChange,
    className: value ? `${styles.selected}` : '',
  };

  return (
    <div className={classnames(styles.form__select, className ? className : '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>

        <select {...selectProps}>
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={`${fieldName}-${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
