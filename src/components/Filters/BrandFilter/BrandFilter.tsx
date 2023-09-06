import { ChangeEvent, ReactElement, useState } from 'react';
import classnames from 'classnames';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { brands } from '../../../constant';
import { FilterTypeProps } from '../types';

import styles from './brandFilter.module.scss';

function BrandFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
  const [isOpen, setIsOpen] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    let newValue = event.target.name;
    const curValue = searchParams.get(SearchParams.Brand) || '';
    if (curValue.includes(newValue)) {
      newValue = curValue
        .split(',')
        .filter((item) => item !== newValue)
        .join(',');
      changeParams(setSearchParams, newValue, SearchParams.Brand);
    } else {
      newValue = curValue + `${curValue.length > 0 ? ',' : ''}` + newValue;
      changeParams(setSearchParams, newValue, SearchParams.Brand);
    }
  }

  return (
    <div className={className || ''}>
      <div className={styles.brand__header} onClick={(): void => setIsOpen(!isOpen)}>
        <h3 className={classnames(styles.brand__title, isOpen ? '' : styles.brand__title_close)}>Artist</h3>
        <span
          className={classnames(styles.brand__icon, isOpen ? styles.brand__icon_up : styles.brand__icon_down)}
        ></span>
      </div>
      {isOpen && (
        <form className={styles.brand__form}>
          {brands.map((item) => (
            <label key={item.value} className={styles.brand__item}>
              <input
                type="checkbox"
                onChange={handleChange}
                name={item.value}
                checked={(searchParams.get(SearchParams.Brand) || '').includes(item.value)}
                className={styles.brand__input}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </form>
      )}
    </div>
  );
}

export default BrandFilter;
