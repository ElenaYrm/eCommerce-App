import { ChangeEvent, ReactElement } from 'react';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { brands } from '../../../constant';
import { FilterTypeProps } from '../types';

import styles from './brandFilter.module.scss';

function BrandFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
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
      <h3 className={styles.brand__title}>Brand</h3>
      <form className={styles.brand__form}>
        {brands.map((item) => (
          <label key={item.value}>
            <input
              type="checkbox"
              onChange={handleChange}
              name={item.value}
              checked={(searchParams.get(SearchParams.Brand) || '').includes(item.value)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </form>
    </div>
  );
}

export default BrandFilter;
