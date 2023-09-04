import { ChangeEvent, ReactElement, useState } from 'react';
import { sorting } from '../../constant';
import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../types/enums';
import { useDebounce } from '../../hooks';
import { changeParams } from '../../utils';

import styles from './sortingField.module.scss';

function SortingField(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get(SearchParams.Sort) || '');

  const debounceChangeParams = useDebounce(changeParams, 0);
  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    const newValue = event.target.value;
    setSort(newValue);
    debounceChangeParams(setSearchParams, newValue, SearchParams.Sort);
  }

  return (
    <form className={styles.sort}>
      <label className={styles.sort__label}>
        <span className="visually-hidden">Sort by: </span>
        <select name="sorting" defaultValue={sort} onChange={handleChange} className={styles.sort__input}>
          {sorting.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default SortingField;
