import { ChangeEvent, ReactElement, useState } from 'react';
import { sorting } from '../../constant';
import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../types/enums';
import { changeParams, getSearchParams } from '../../utils';
import { useAppDispatch } from '../../store/store';
import { productListThunk } from '../../store/catalog/thunks';

import styles from './sortingField.module.scss';

function SortingField(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get(SearchParams.Sort) || '');
  const dispatch = useAppDispatch();

  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    const newValue = event.target.value;
    setSort(newValue);
    changeParams(setSearchParams, newValue, SearchParams.Sort);
    changeParams(setSearchParams, '1', SearchParams.Page);
    dispatch(productListThunk({ params: getSearchParams(searchParams), list: [] }));
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
