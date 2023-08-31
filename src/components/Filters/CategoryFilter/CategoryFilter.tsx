import { ChangeEvent, ReactElement } from 'react';
import { categories } from '../../../constant';
import { SearchParams } from '../../../types/enums';
import { changeParams } from '../../../utils';
import { FilterTypeProps } from '../types';

import styles from './categoryFilter.module.scss';

function CategoryFilter({ searchParams, setSearchParams, className }: FilterTypeProps): ReactElement {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    changeParams(setSearchParams, event.target.name, SearchParams.Category);
  }

  return (
    <div className={className || ''}>
      <h3 className={styles.category__title}>Category</h3>
      <form className={styles.category__form}>
        {categories.map((item) => (
          <label key={item.value}>
            <input
              type="checkbox"
              onChange={handleChange}
              name={item.value}
              checked={(searchParams.get(SearchParams.Category) || '') === item.value}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </form>
    </div>
  );
}

export default CategoryFilter;
