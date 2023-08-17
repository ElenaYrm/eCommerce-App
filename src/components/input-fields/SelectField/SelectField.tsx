import styles from './SelectField.module.scss';
import { ReactElement } from 'react';
import { SelectFieldProps } from '../types';

export default function SelectField(props: SelectFieldProps): ReactElement {
  const { values, handleChange } = props.formik;
  const { name, options, className } = props;

  const selectProps = {
    name,
    value: values[name],
    onChange: handleChange,
    className: values[name] ? `${styles.selected}` : '',
  };

  return (
    <div className={`${styles.form__select} ${className ? className : ''}`}>
      <label htmlFor={name}>
        <span className="visually-hidden">{name}</span>

        <select {...selectProps}>
          <option value="" disabled>
            {name}
          </option>

          {options.map((option) => (
            <option key={`${name}-${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
