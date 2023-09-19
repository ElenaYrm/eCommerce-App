import { ChangeEvent, ReactElement, useState } from 'react';
import { SetURLSearchParams, useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks';
import { SearchParams } from '../../types/enums';
import { changeParams, getSearchParams } from '../../utils';
import { useAppDispatch } from '../../store/store';
import { productListThunk } from '../../store/catalog/thunks';

import styles from './searchField.module.scss';

function SearchField(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get(SearchParams.Search) || '');
  const dispatch = useAppDispatch();

  function searchProductList(setSearchParams: SetURLSearchParams, value: string, field: SearchParams): void {
    changeParams(setSearchParams, value, field);
    changeParams(setSearchParams, '1', SearchParams.Page);
    dispatch(productListThunk({ params: getSearchParams(searchParams), list: [] }));
  }
  const debounceChangeParams = useDebounce(searchProductList, 500);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const newValue = event.target.value;
    setValue(newValue);
    debounceChangeParams(setSearchParams, newValue, SearchParams.Search);
  }

  function handleClick(): void {
    setValue('');
    debounceChangeParams(setSearchParams, '', SearchParams.Search);
  }

  return (
    <form className={styles.search}>
      <label className={styles.search__label}>
        <span className="visually-hidden">Search</span>

        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className={styles.search__input}
        />
      </label>

      {value.length > 0 && (
        <button type="button" onClick={handleClick} aria-label="Clear search" className={styles.search__btn}>
          Clear
        </button>
      )}
    </form>
  );
}

export default SearchField;
