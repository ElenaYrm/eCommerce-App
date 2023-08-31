import { ChangeEvent, ReactElement } from 'react';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { sizes } from '../../../constant';
import { FilterTypeProps } from '../types';

import styles from './sizeFilter.module.scss';

function SizeFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
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
      <h3 className={styles.size__title}>Size</h3>
      <form className={styles.size__form}>
        {sizes.map((item) => (
          <label key={item.value}>
            <input
              type="checkbox"
              onChange={handleChange}
              name={item.value}
              checked={(searchParams.get(SearchParams.Size) || '').includes(item.value)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </form>
    </div>
  );
}

export default SizeFilter;
