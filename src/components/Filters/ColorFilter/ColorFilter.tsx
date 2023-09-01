import { ChangeEvent, ReactElement } from 'react';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { colors } from '../../../constant';
import { FilterTypeProps } from '../types';

import styles from './colorFilter.module.scss';

function ColorFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
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
      <h3 className={styles.color__title}>Color</h3>
      <form className={styles.color__form}>
        {colors.map((item) => (
          <label key={item.value}>
            <input
              type="checkbox"
              onChange={handleChange}
              name={item.value}
              checked={(searchParams.get(SearchParams.Color) || '').includes(item.value)}
            />
            <span>{item.color}</span>
            <span>{item.label}</span>
          </label>
        ))}
      </form>
    </div>
  );
}

export default ColorFilter;
