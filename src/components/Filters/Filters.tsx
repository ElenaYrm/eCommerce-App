import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PriceFilter } from './PriceFilter';
import { ColorFilter } from './ColorFilter';
import { CheckboxFilter } from './CheckboxFilter';
import { productListThunk } from '../../store/catalog/thunks';
import { useAppDispatch } from '../../store/store';
import { changeParams, getSearchParams } from '../../utils';
import { SearchParams } from '../../types/enums';
import { FiltersProps } from './types';
import { brands, sizes } from '../../constant';

import styles from './filters.module.scss';

function Filters({ className, onClick }: FiltersProps): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  function showResult(): void {
    changeParams(setSearchParams, '1', SearchParams.Page);
    dispatch(productListThunk({ params: getSearchParams(searchParams), list: [] }));
    onClick();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function resetFilters(): void {
    changeParams(setSearchParams, '', SearchParams.PriceFrom);
    changeParams(setSearchParams, '', SearchParams.PriceTo);
    changeParams(setSearchParams, '', SearchParams.Brand);
    changeParams(setSearchParams, '', SearchParams.Color);
    changeParams(setSearchParams, '', SearchParams.Size);

    showResult();
  }

  return (
    <div className={className || ''}>
      <ul className={styles.list}>
        <li className={styles.filters__item}>
          <PriceFilter searchParams={searchParams} setSearchParams={setSearchParams} />
        </li>
        <li className={styles.filters__item}>
          <CheckboxFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            field={SearchParams.Brand}
            filters={brands}
            name="Artist"
          />
        </li>
        <li className={styles.filters__item}>
          <ColorFilter searchParams={searchParams} setSearchParams={setSearchParams} />
        </li>
        <li className={styles.filters__item}>
          <CheckboxFilter
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            field={SearchParams.Size}
            filters={sizes}
            name="Size"
          />
        </li>
      </ul>
      <div className={styles.filters__wrapper}>
        <button type="button" onClick={showResult} className={styles.filters__results}>
          Show Results
        </button>
        <button type="button" onClick={resetFilters} className={styles.filters__btn}>
          Clear filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
