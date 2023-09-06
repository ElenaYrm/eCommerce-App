import { ChangeEvent, ReactElement, useState } from 'react';
import classnames from 'classnames';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { sizes } from '../../../constant';
import { FilterTypeProps } from '../types';

import styles from './sizeFilter.module.scss';

function SizeFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
  const [isOpen, setIsOpen] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    let newValue = event.target.name;
    const curValue = searchParams.get(SearchParams.Size) || '';
    if (curValue.includes(newValue)) {
      newValue = curValue
        .split(',')
        .filter((item) => item !== newValue)
        .join(',');
      changeParams(setSearchParams, newValue, SearchParams.Size);
    } else {
      newValue = curValue + `${curValue.length > 0 ? ',' : ''}` + newValue;
      changeParams(setSearchParams, newValue, SearchParams.Size);
    }
  }

  return (
    <div className={className || ''}>
      <div className={styles.size__header} onClick={(): void => setIsOpen(!isOpen)}>
        <h3 className={classnames(styles.size__title, isOpen ? '' : styles.size__title_close)}>Size</h3>
        <span className={classnames(styles.size__icon, isOpen ? styles.size__icon_up : styles.size__icon_down)}></span>
      </div>
      {isOpen && (
        <form className={styles.size__form}>
          {sizes.map((item) => (
            <label key={item.value} className={styles.size__item}>
              <input
                type="checkbox"
                onChange={handleChange}
                name={item.value}
                checked={(searchParams.get(SearchParams.Size) || '').includes(item.value)}
                className={styles.size__input}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </form>
      )}
    </div>
  );
}

export default SizeFilter;
