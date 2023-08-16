import styles from './SelectField.module.scss';
import { ReactElement } from 'react';
import { SelectFieldProps } from './types';

export default function SelectField(props: SelectFieldProps): ReactElement {
  const { values, handleChange } = props.formik;
  const { name, options } = props;

  return (
    <div className={styles.form__select}>
      <label htmlFor={name}>{name}</label>

      <select
        name={name}
        value={values[name]}
        onChange={handleChange}
        className={values[name] ? `${styles.selected}` : ''}
      >
        <option value="" disabled>
          {name}
        </option>

        {options.map((option) => (
          <option key={`${name}-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
