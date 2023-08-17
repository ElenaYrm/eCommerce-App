import styles from './SelectField.module.scss';
import classnames from 'classnames';
import { ReactElement } from 'react';
import { SelectFieldProps } from '../types';

export default function SelectField(props: SelectFieldProps): ReactElement {
  const { values, handleChange } = props.formik;
  const { fieldName, options, className } = props;

  const selectProps = {
    name: fieldName,
    value: values[fieldName],
    onChange: handleChange,
    className: values[fieldName] ? `${styles.selected}` : '',
  };

  return (
    <div className={classnames(styles.form__select, className ? className : '')}>
      <label>
        <span className="visually-hidden">{fieldName}</span>

        <select {...selectProps}>
          <option value="" disabled>
            {fieldName}
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
