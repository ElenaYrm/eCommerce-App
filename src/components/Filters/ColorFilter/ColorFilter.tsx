import { ChangeEvent, ReactElement, useState } from 'react';
import classnames from 'classnames';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { colors } from '../../../constant';
import { FilterTypeProps } from '../types';

import styles from './colorFilter.module.scss';

function ColorFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
  const [isOpen, setIsOpen] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    let newValue = event.target.name;
    const curValue = searchParams.get(SearchParams.Color) || '';
    if (curValue.includes(newValue)) {
      newValue = curValue
        .split(',')
        .filter((item) => item !== newValue)
        .join(',');
      changeParams(setSearchParams, newValue, SearchParams.Color);
    } else {
      newValue = curValue + `${curValue.length > 0 ? ',' : ''}` + newValue;
      changeParams(setSearchParams, newValue, SearchParams.Color);
    }
  }

  return (
    <div className={className || ''}>
      <div className={styles.color__header} onClick={(): void => setIsOpen(!isOpen)}>
        <h3 className={classnames(styles.color__title, isOpen ? '' : styles.color__title_close)}>Color</h3>
        <span
          className={classnames(styles.color__icon, isOpen ? styles.color__icon_up : styles.color__icon_down)}
        ></span>
      </div>
      {isOpen && (
        <form className={styles.color__form}>
          {colors.map((item) => (
            <label
              key={item.value}
              className={classnames(
                styles.color__item,
                (searchParams.get(SearchParams.Color) || '').includes(item.value) ? styles.color__item_active : '',
              )}
            >
              <span
                className={styles.color__color}
                style={{ backgroundColor: item.color, borderColor: item.label === 'White' ? '#111' : 'transparent' }}
              ></span>
              <input
                type="checkbox"
                onChange={handleChange}
                name={item.value}
                checked={(searchParams.get(SearchParams.Color) || '').includes(item.value)}
                className={styles.color__input}
              />
              <span>{item.label}</span>
            </label>
          ))}
        </form>
      )}
    </div>
  );
}

export default ColorFilter;
