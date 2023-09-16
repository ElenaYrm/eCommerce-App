import { ChangeEvent, ReactElement, useState } from 'react';
import classnames from 'classnames';
import { changeParams } from '../../../utils';
import { CheckboxFilterProps } from '../types';

import styles from './checkboxFilter.module.scss';

function CheckboxFilter({
  searchParams,
  setSearchParams,
  className,
  field,
  filters,
  name,
}: CheckboxFilterProps): ReactElement {
  const [isOpen, setIsOpen] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    let newValue = event.target.name;
    const curValue = searchParams.get(field) || '';
    if (curValue.includes(newValue)) {
      newValue = curValue
        .split(',')
        .filter((item) => item !== newValue)
        .join(',');
      changeParams(setSearchParams, newValue, field);
    } else {
      newValue = curValue + `${curValue.length > 0 ? ',' : ''}` + newValue;
      changeParams(setSearchParams, newValue, field);
    }
  }

  return (
    <div className={className || ''}>
      <div className={styles.filter__header} onClick={(): void => setIsOpen(!isOpen)}>
        <h3 className={classnames(styles.filter__title, isOpen ? '' : styles.filter__title_close)}>{name}</h3>
        <span
          className={classnames(styles.filter__icon, isOpen ? styles.filter__icon_up : styles.filter__icon_down)}
        ></span>
      </div>
      {isOpen && (
        <form className={styles.filter__form}>
          {filters.map((item) => (
            <label key={item.value} className={styles.filter__item}>
              <input
                type="checkbox"
                onChange={handleChange}
                name={item.value}
                checked={(searchParams.get(field) || '').includes(item.value)}
                className={styles.filter__input}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </form>
      )}
    </div>
  );
}

export default CheckboxFilter;
